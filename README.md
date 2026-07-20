# aparser-mcp

**English** · [Русский](README.ru.md)

[![npm](https://img.shields.io/npm/v/aparser-mcp.svg)](https://www.npmjs.com/package/aparser-mcp)

An [MCP](https://modelcontextprotocol.io) server that exposes the
[A-Parser](https://a-parser.com) HTTP API as tools, so an AI agent can drive
parsing tasks directly — run a SERP or suggest query, queue bulk jobs, poll them,
and fetch results.

Transport: **stdio**. Built on the official
[TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk).

## Requirements

- A running A-Parser instance with the API enabled (Settings → API) and its
  password. The API listens on `http://<host>:9091/API`.
- Node.js ≥ 18 (for `npx`, or to build from source).

## Run

Published on npm — no install needed, `npx` fetches and runs it:

```bash
AP_URL=http://<host>:9091/API AP_PASSWORD=<password> npx -y aparser-mcp
```

<details>
<summary>Or run from source</summary>

```bash
git clone <this-repo> aparser-mcp && cd aparser-mcp
npm install          # builds dist/ via the prepare script
AP_URL=http://<host>:9091/API AP_PASSWORD=<password> npm start
```
</details>

## Configure

The server reads three environment variables:

| Variable      | Required | Description                                              |
|---------------|----------|----------------------------------------------------------|
| `AP_URL`      | yes      | API base URL, e.g. `http://127.0.0.1:9091/API` (a trailing `/API` is added if missing). |
| `AP_PASSWORD` | yes      | API password from the A-Parser web UI.                   |
| `AP_TIMEOUT`  | no       | Per-request HTTP timeout in seconds (default `130`).     |

## Register with Claude Code

```bash
claude mcp add aparser \
  --env AP_URL=http://<host>:9091/API \
  --env AP_PASSWORD=<password> \
  -- npx -y aparser-mcp
```

Or add it to `.mcp.json` / your MCP client config:

```json
{
  "mcpServers": {
    "aparser": {
      "command": "npx",
      "args": ["-y", "aparser-mcp"],
      "env": {
        "AP_URL": "http://<host>:9091/API",
        "AP_PASSWORD": "<password>"
      }
    }
  }
}
```

## Usage — just ask

Once the server and the `aparser` skill are installed, ask in plain language and
the skill picks the parser, geo, and output format for you:

- **“aparser, find positions of `domain.com` for: `query one`, `query two` in Serbia”**
  → `SE::Google::Position` on google.rs (`gl=rs`, `hl=sr`) → rank per query.
- **“aparser, Google autocomplete for `buy iphone`”** → suggestions.
- **“aparser, top-20 Google results for `best running shoes` in Spain”** → SERP links.

More concrete tool-call examples: [`skills/aparser/examples.md`](skills/aparser/examples.md).

## Tools

| Tool           | What it does |
|----------------|--------------|
| `ping`         | Health check. Returns `"pong"`. |
| `info`         | Server status: tasks in queue, pid, list of available parsers. |
| `list_parsers` | Just the parser names (e.g. `SE::Google`, `SE::Google::Suggest`). |
| `parser_info`  | A parser's result-field schema (`arrays` + `flat`) for building a `resultsFormat`. |
| `get_proxies`  | Live proxies from the checkers as `{"ip:port": ["type", ...]}`. |
| `one_request`  | Run one parse **synchronously** and return the result. Best for single lookups. |
| `add_task`     | Queue a **bulk** task saved to a file. Returns the task id. |
| `task_state`   | A task's status and live stats. |
| `wait_task`    | Poll a task until it completes; returns the final state. |
| `task_results` | Single-use download URL for a completed task's results file. |

### `one_request` vs `add_task`

- **`one_request`** — synchronous, one query, result returned inline. Use it for a
  suggest lookup, a single SERP, checking one page.
- **`add_task`** — asynchronous queue, many queries, output written to a file on the
  server. Use `wait_task` then `task_results` to retrieve it.

### Parser stack & resultsFormat

`add_task` takes a `parsers` stack — a list of `[name, preset, ...overrides]` entries:

```json
[["SE::Google", "default"]]
```

In `results_format`, `$p1` refers to the first entry, `$p2` the second, etc. Call
`parser_info("SE::Google")` to see the fields you can reference:

```
$p1.serp.format('$link; $anchor\n')
```

Per-request overrides (in `one_request.options` or a `parsers` entry) use the shape
`{"type": "override", "id": "<param_id>", "value": <value>}`.

## Examples

Copy-adaptable request examples — suggests, SERP, position checks with geo,
captcha solving, desktop/mobile, bulk tasks — are in
[`skills/aparser/examples.md`](skills/aparser/examples.md).

## Companion skill (`aparser`)

The [`skills/aparser/`](skills/aparser/) directory holds a Claude Code skill that teaches an agent
*when and how* to call these tools — parser naming, presets, geo, `resultsFormat`,
and the position-checking query format. Install it so Claude picks it up:

```bash
# easiest — via skills.sh (installs into every supported agent):
npx skills add izzipizzy/aparser-mcp

# or manually as a personal Claude Code skill:
cp -r skills/aparser ~/.claude/skills/aparser
```

It then loads automatically when you ask about A-Parser positions/SERPs/suggests.
(Inside the `izzy` plugin it is the `izzy:aparser` skill.) See
[`skills/aparser/SKILL.md`](skills/aparser/SKILL.md) and [`skills/aparser/api-reference.md`](skills/aparser/api-reference.md).

## Notes

- Parsers that hit search engines need working proxies. If `one_request` hangs or
  errors, check `get_proxies` and the parser's proxy settings in A-Parser.
- Secrets are never stored in this repo. Keep `AP_PASSWORD` in your MCP client
  config or the environment.

## Development

```bash
npm install     # install deps + build
npm run build   # compile src/ -> dist/
npm start       # run the built server (needs AP_URL / AP_PASSWORD)
```

Source is a single file: [`src/index.ts`](src/index.ts).
