#!/usr/bin/env node
/**
 * A-Parser MCP server (TypeScript).
 *
 * Exposes the A-Parser HTTP API (http://host:9091/API) as MCP tools so an AI
 * agent can drive parsing tasks directly. Transport: stdio.
 *
 * Environment variables:
 *   AP_URL       Base URL of the A-Parser API, e.g. http://127.0.0.1:9091/API
 *                (a trailing /API is added automatically if missing)
 *   AP_PASSWORD  API password (Settings -> API in the A-Parser web UI)
 *   AP_TIMEOUT   Per-request HTTP timeout in seconds (default: 130)
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

function baseUrl(): string {
  let url = (process.env.AP_URL ?? "").trim().replace(/\/+$/, "");
  if (!url) {
    throw new Error(
      "AP_URL is not set. Point it at your A-Parser API, e.g. http://127.0.0.1:9091/API",
    );
  }
  if (!url.endsWith("/API")) url += "/API";
  return url;
}

function password(): string {
  const pw = process.env.AP_PASSWORD;
  if (pw === undefined) throw new Error("AP_PASSWORD is not set.");
  return pw;
}

function timeoutMs(): number {
  return Number(process.env.AP_TIMEOUT ?? "130") * 1000;
}

/** POST one request to the A-Parser API and return its `data` field. */
async function call(action: string, data?: Record<string, unknown>): Promise<any> {
  const payload: Record<string, unknown> = { password: password(), action };
  if (data) payload.data = data;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs());
  let body: any;
  try {
    const resp = await fetch(baseUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
    body = await resp.json();
  } finally {
    clearTimeout(timer);
  }
  if (body?.success !== 1) {
    const msg = body?.data ?? body?.msg ?? JSON.stringify(body);
    throw new Error(`A-Parser API error on '${action}': ${msg}`);
  }
  return body.data;
}

/** Wrap any value as a text CallToolResult (objects/arrays as pretty JSON). */
function result(data: unknown) {
  const text = typeof data === "string" ? data : JSON.stringify(data, null, 2);
  return { content: [{ type: "text" as const, text }] };
}

const server = new McpServer({ name: "aparser", version: "0.1.0" });

// --------------------------------------------------------------------------- //
// Diagnostics
// --------------------------------------------------------------------------- //
server.registerTool(
  "ping",
  { title: "Ping", description: 'Health-check the A-Parser server. Returns "pong" when reachable.', inputSchema: {} },
  async () => result(await call("ping")),
);

server.registerTool(
  "info",
  { title: "Info", description: "Get A-Parser status: tasks in queue, pid, and the list of available parsers.", inputSchema: {} },
  async () => result(await call("info")),
);

server.registerTool(
  "list_parsers",
  { title: "List parsers", description: 'List the names of all installed parsers (e.g. "SE::Google", "SE::Google::Suggest").', inputSchema: {} },
  async () => {
    const data = await call("info");
    return result(data?.availableParsers ?? []);
  },
);

server.registerTool(
  "parser_info",
  {
    title: "Parser info",
    description:
      "Describe a parser's result fields. Returns the `results` schema: `arrays` " +
      "(nested lists like serp/ads) and `flat` (scalar fields like $query, $totalcount) " +
      "that you can reference in a resultsFormat template. Call this before writing a " +
      "resultsFormat for add_task.",
    inputSchema: { parser: z.string().describe('Parser name, e.g. "SE::Google".') },
  },
  async ({ parser }) => result(await call("getParserInfo", { parser })),
);

server.registerTool(
  "get_proxies",
  {
    title: "Get proxies",
    description: 'Get live proxies from the proxy checkers as {"ip:port": ["type", ...]}.',
    inputSchema: {
      checkers: z.array(z.string()).optional().describe("Optional list of checker names to filter by. Omit for all."),
    },
  },
  async ({ checkers }) => result(await call("getProxies", checkers?.length ? { checkers } : undefined)),
);

// --------------------------------------------------------------------------- //
// Live parsing (synchronous, no queue)
// --------------------------------------------------------------------------- //
server.registerTool(
  "one_request",
  {
    title: "One request",
    description:
      "Run a single parse synchronously and return the result immediately. Best for " +
      "one-off lookups (a suggest query, one SERP, one page). For many queries or saved " +
      "output files, use add_task instead.\n" +
      "raw_results=true -> structured `results` array (recommended); " +
      "false -> a single formatted `resultString` from the preset.\n" +
      "options: per-request overrides, each {type:'override', id:'<paramId>', value:<v>}.",
    inputSchema: {
      query: z.string().describe("The query to parse (keyword, URL, etc.)."),
      parser: z.string().describe('Parser name, e.g. "SE::Google::Suggest".'),
      preset: z.string().default("default").describe("Saved parser preset name."),
      config_preset: z.string().default("default").describe("Thread/config preset name."),
      raw_results: z.boolean().default(true).describe("Structured results array vs one formatted string."),
      options: z.array(z.record(z.any())).optional().describe("Per-request parameter overrides."),
    },
  },
  async ({ query, parser, preset, config_preset, raw_results, options }) => {
    const data: Record<string, unknown> = { query, parser, preset, configPreset: config_preset };
    if (raw_results) data.rawResults = 1;
    if (options) data.options = options;
    return result(await call("oneRequest", data));
  },
);

// --------------------------------------------------------------------------- //
// Queued tasks (bulk, saved to file)
// --------------------------------------------------------------------------- //
server.registerTool(
  "add_task",
  {
    title: "Add task",
    description:
      "Queue a bulk parsing task. Returns the task id (taskUid). Poll it with " +
      "task_state / wait_task, then fetch the output with task_results.\n" +
      "parsers: stack as a list of [parser_name, preset_name, ...overrideObjects], e.g. " +
      '[["SE::Google","default"]]. `$p1` in a resultsFormat refers to the first entry.\n' +
      "results_format: output template, e.g. \"$p1.serp.format('$link\\n')\"; omit to use the " +
      "preset's own format. results_file_name supports macros like $datefile.format() " +
      "($taskId is NOT a valid macro).",
    inputSchema: {
      parsers: z.array(z.any()).describe('Parser stack, e.g. [["SE::Google","default"]].'),
      queries: z.array(z.string()).optional().describe("Inline queries (when queries_file is not given)."),
      queries_file: z.string().optional().describe("Server-side path to a queries file."),
      config_preset: z.string().default("default"),
      query_format: z.string().default("$query").describe('How each input line becomes a query (default "$query").'),
      results_file_name: z.string().default("$datefile.format().txt"),
      results_format: z.string().optional().describe("Output template; omit to use the preset format."),
      results_prepend: z.string().default(""),
      results_append: z.string().default(""),
      unique_queries: z.boolean().default(false),
      do_log: z.boolean().default(false),
      priority: z.number().int().default(5),
    },
  },
  async (a) => {
    const data: Record<string, unknown> = {
      preset: "default",
      configPreset: a.config_preset,
      parsers: a.parsers,
      queryFormat: [a.query_format],
      resultsSaveTo: "file",
      resultsFileName: a.results_file_name,
      resultsFormat: a.results_format ?? "$p1.preset",
      resultsPrepend: a.results_prepend,
      resultsAppend: a.results_append,
      additionalFormats: [],
      resultsUnique: "no",
      resultsOptions: { overwrite: false, writeBOM: false },
      uniqueQueries: a.unique_queries,
      keepUnique: "No",
      saveFailedQueries: false,
      moreOptions: false,
      iteratorOptions: { onAllLevels: false, queryBuildersAfterIterator: false, queryBuildersOnAllLevels: false },
      queryBuilders: [],
      resultsBuilders: [],
      configOverrides: [],
      doLog: a.do_log ? "db" : "no",
      limitLogsCount: "0",
      useResultsFileAsQueriesFile: false,
      runTaskOnComplete: null,
      runTaskOnCompleteConfig: "default",
      toolsJS: "",
      prio: a.priority,
      removeOnComplete: false,
      callURLOnComplete: "",
    };
    if (a.queries_file) {
      data.queriesFrom = "file";
      data.queriesFile = [a.queries_file];
    } else {
      data.queriesFrom = "text";
      data.queries = a.queries ?? [];
    }
    return result(await call("addTask", data));
  },
);

server.registerTool(
  "task_state",
  {
    title: "Task state",
    description: "Get a task's status and live stats (status, queriesDone, resultsCount, ...).",
    inputSchema: { task_uid: z.union([z.number(), z.string()]).describe("The task id returned by add_task.") },
  },
  async ({ task_uid }) => result(await call("getTaskState", { taskUid: task_uid })),
);

server.registerTool(
  "wait_task",
  {
    title: "Wait for task",
    description: "Poll a task until it completes (or the timeout elapses). Returns the final state.",
    inputSchema: {
      task_uid: z.union([z.number(), z.string()]).describe("The task id returned by add_task."),
      interval: z.number().default(5).describe("Seconds between polls."),
      timeout: z.number().default(900).describe("Max seconds to wait before giving up."),
    },
  },
  async ({ task_uid, interval, timeout }) => {
    let waited = 0;
    const done = new Set(["completed", "failed", "deleting", "deleted"]);
    for (;;) {
      const state = await call("getTaskState", { taskUid: task_uid });
      const status = state?.status;
      if (state == null || done.has(status)) return result(state);
      if (waited >= timeout) return result({ status, timedOut: true, state });
      await new Promise((r) => setTimeout(r, interval * 1000));
      waited += interval;
    }
  },
);

server.registerTool(
  "task_results",
  {
    title: "Task results",
    description: "Get a single-use download URL for a completed task's results file.",
    inputSchema: { task_uid: z.union([z.number(), z.string()]).describe("The task id returned by add_task.") },
  },
  async ({ task_uid }) => result(await call("getTaskResultsFile", { taskUid: task_uid })),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
