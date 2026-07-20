#!/usr/bin/env node
/**
 * Generate per-parser reference files for the companion skill.
 *
 * For every installed parser it reads:
 *   - getParserPreset(parser, "default")  -> option ids + default values
 *   - getParserInfo(parser)               -> result fields (arrays + flat)
 * and writes skills/aparser/parsers/<Parser>.md (":: " -> "." in the filename), plus an
 * index at skills/aparser/parsers/README.md.
 *
 * Usage:
 *   AP_URL=http://host:9091/API AP_PASSWORD=... node scripts/gen-parser-docs.mjs
 *
 * Re-run whenever the A-Parser build changes to refresh the docs.
 */
import { mkdir, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "skills", "aparser", "parsers");

const AP_URL = (process.env.AP_URL ?? "").replace(/\/+$/, "").replace(/\/API$/, "") + "/API";
const AP_PASSWORD = process.env.AP_PASSWORD;
if (!process.env.AP_URL || AP_PASSWORD === undefined) {
  console.error("Set AP_URL and AP_PASSWORD env vars.");
  process.exit(1);
}

async function call(action, data) {
  const r = await fetch(AP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data ? { password: AP_PASSWORD, action, data } : { password: AP_PASSWORD, action }),
  });
  const b = await r.json();
  if (b.success !== 1) throw new Error(`${action}: ${b.msg || b.data || JSON.stringify(b)}`);
  return b.data;
}

// Human descriptions for options shared across many parsers (esp. the SE:: family).
// The API only exposes id -> default; these fill in the meaning.
const COMMON = {
  pagecount: "Number of SERP pages to parse",
  linksperpage: "Results per page",
  useproxy: "Use proxies (1/0)",
  proxyretries: "Retries with a different proxy on failure/ban",
  proxyChecker: "Which proxy checker(s) to pull proxies from ('*' = all)",
  emptyResultRetries: "Retries when the result/SERP comes back empty (often captcha)",
  reCaptchaRetries: "Retries on Google reCAPTCHA",
  timeout: "Per-request timeout (seconds)",
  requestdelay: "Delay between requests (seconds)",
  gl: "Google country code, e.g. 'fr', 'ar' (&gl=)",
  hl: "Interface language, e.g. 'fr', 'es' (&hl=)",
  lr: "Language restrict (&lr=)",
  cr: "Country restrict (&cr=)",
  domain: "Search engine domain, e.g. www.google.fr",
  location: "Geo location string (UULE) for local results",
  device: "desktop | mobile",
  engine: "Request engine: http | chrome (browser)",
  headless: "Run the browser engine headless (1/0)",
  usesessions: "Reuse cookies/sessions across requests (1/0)",
  nfpr: "No auto-correction of the query (&nfpr=1)",
  safesearch: "SafeSearch filter",
  filter: "Google duplicate filter (&filter=)",
  serptime: "Time range for results (all | year | month | ...)",
  parsenotfound: "Still emit a row when the domain is not found (position 0)",
  stopwhenfound: "Stop parsing once the domain is found",
  matchtype: "Domain match: domain | tld | url",
  queryformat: "How the input line is turned into a query, e.g. $query",
  formatresult: "Per-result output template used by oneRequest/preset",
  extraquery: "Extra text appended to every query",
  paaCount: "How many 'People also ask' items to expand",
  needpages: "Parse and keep raw page HTML",
  parsePagesLinks: "Follow and parse links on result pages",
};

function esc(v) {
  if (v === null) return "null";
  if (typeof v === "object") return "`" + JSON.stringify(v) + "`";
  const s = String(v);
  return s === "" ? "*(empty)*" : "`" + s.replace(/\|/g, "\\|") + "`";
}

const cell = (s) => String(s).replace(/\|/g, "\\|");

function optionsTable(preset) {
  const ids = Object.keys(preset).sort();
  let out = "| Option id | Default | Description |\n|---|---|---|\n";
  for (const id of ids) {
    out += `| \`${id}\` | ${esc(preset[id])} | ${cell(COMMON[id] ?? "")} |\n`;
  }
  return out;
}

// Hand-written notes appended to specific parsers (survive regeneration).
const NOTES = {
  "SE::Google":
    "## Notes\n\n" +
    "- **Engine**: `engine` = `http` (fast) or a browser mode. On JS/anti-bot " +
    "challenges A-Parser can fall back to a redirect browser (`redirectBrowserSingle`, " +
    "`redirectBrowserMaxPages`).\n" +
    "- **Device**: `device` = `desktop` | `mobile`. The SERP differs — mobile uses " +
    "infinite scroll (no pagination links; `parsePagesLinks` is desktop-only). Positions " +
    "can differ between desktop and mobile.\n" +
    "- **Geo**: set `gl` (country), `hl` (interface language), `domain` (e.g. " +
    "`www.google.fr`), and optionally `location` (UULE) for city-level local results.\n" +
    "- **Captcha**: Google shows reCAPTCHA to suspicious IPs. It is only solved if a " +
    "solver is configured via `Util_ReCaptcha2_preset` / `Util_AntiGate_preset`. Without " +
    "a working solver (or on flagged proxies) queries fail — the parser bans the proxy and " +
    "retries (`reCaptchaRetries`, `emptyResultRetries`, `proxyretries`). Many `none` results " +
    "= a captcha wall, NOT 'not ranking'.\n" +
    "- **Depth**: `pagecount` × ~10 results. Up to 100 pages via HTTP engine.\n",
  "SE::Google::Position":
    "## Notes\n\n" +
    "- **Inherits all SE::Google options** (engine, device, gl/hl/domain, captcha, proxies). " +
    "See [SE::Google](SE.Google.md) — device desktop/mobile changes the SERP and therefore the position.\n" +
    "- **Input format**: `<domain> <keyword>` — the FIRST token is the checked domain, the " +
    "rest is the query. Multi-domain: `d1.com,d2.com keyword` (results in `bulkcheck`).\n" +
    "- **`matchtype`**: `domain` (exact domain) | `tld` (top-level domain) | `url` (exact url).\n" +
    "- **Position semantics**: a number = rank; `0` = SERP parsed OK but domain not in the " +
    "checked depth; `none` = the query failed (empty/captcha SERP) — rerun those.\n" +
    "- **`pagecount`** sets the depth checked (× ~10). `stopwhenfound` halts once found.\n",
  "SE::Google::Suggest":
    "## Notes\n\n" +
    "- Google autocomplete suggestions for a query. Fast, HTTP-based, light on proxies " +
    "(usually no captcha). Geo via `gl`/`hl`.\n",
};

function resultFields(info) {
  const res = info?.results ?? {};
  let out = "";
  const flat = res.flat ?? [];
  if (flat.length) {
    out += "### Flat fields\n\n";
    for (const [id, desc] of flat) out += `- \`$${id}\` — ${desc}\n`;
    out += "\n";
  }
  const arrays = res.arrays ?? {};
  const keys = Object.keys(arrays);
  if (keys.length) {
    out += "### Array fields (use `.format()`)\n\n";
    for (const k of keys) {
      const [label, cols] = arrays[k];
      const colList = (cols ?? []).map(([c]) => `\`$${c}\``).join(", ");
      out += `- **\`${k}\`** — ${label}: ${colList}\n`;
    }
    out += "\n";
  }
  return out || "*(no result schema reported)*\n";
}

const fileName = (name) => name.replace(/::/g, ".") + ".md";

async function main() {
  const info = await call("info");
  const parsers = info.availableParsers ?? [];
  console.log(`${parsers.length} parsers`);
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const index = [];
  for (const parser of parsers) {
    let preset = null, pinfo = null, err = null;
    try { preset = await call("getParserPreset", { parser, preset: "default" }); }
    catch (e) { err = `preset: ${e.message}`; }
    try { pinfo = await call("getParserInfo", { parser }); }
    catch (e) { err = (err ? err + "; " : "") + `info: ${e.message}`; }

    let md = `# ${parser}\n\n`;
    md += `> Auto-generated from the live A-Parser API (\`default\` preset). ` +
          `Option ids and defaults are exact; descriptions are filled in for common options.\n\n`;
    md += `## Options\n\n`;
    md += preset ? optionsTable(preset) : `*(could not read preset: ${err})*\n`;
    md += `\n## Result fields\n\n`;
    md += pinfo ? resultFields(pinfo) : `*(could not read parser info)*\n`;
    if (NOTES[parser]) md += `\n${NOTES[parser]}`;

    await writeFile(join(OUT, fileName(parser)), md);
    index.push([parser, fileName(parser)]);
  }

  // index
  let idx = `# Parser reference\n\n` +
    `Per-parser settings and result fields, auto-generated from the live A-Parser ` +
    `API by \`scripts/gen-parser-docs.mjs\`. Each file lists every option id with its ` +
    `default value, plus the result fields you can use in a \`resultsFormat\`.\n\n` +
    `${index.length} parsers.\n\n`;
  const byFamily = {};
  for (const [name, file] of index) {
    const fam = name.split("::")[0];
    (byFamily[fam] ??= []).push([name, file]);
  }
  for (const fam of Object.keys(byFamily).sort()) {
    idx += `## ${fam}\n\n`;
    for (const [name, file] of byFamily[fam].sort()) idx += `- [${name}](${file})\n`;
    idx += "\n";
  }
  await writeFile(join(OUT, "README.md"), idx);
  console.log(`wrote ${index.length} files + README.md to skills/aparser/parsers/`);
}

main().catch((e) => { console.error(e); process.exit(1); });
