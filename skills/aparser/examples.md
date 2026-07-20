# Example requests

Copy-adaptable examples for the `aparser` MCP tools. All were validated against a
live A-Parser. In Claude Code the tools are `mcp__aparser__<tool>`; the arguments
below are what you pass to each tool. ([Русская версия](examples.ru.md))

---

## 1. Health check & discovery

```
ping()                       → "pong"
list_parsers()               → ["SE::Google", "SE::Google::Suggest", ...]
parser_info("SE::Google")    → result fields (serp, ads, paa, flat: $totalcount ...)
```

## 2. Google autocomplete (fast, no proxy/captcha)

```
one_request(
  query="buy iphone",
  parser="SE::Google::Suggest"
)
→ data.results[0].results = ["buy iphone 17", "buy iphone 16", ...]
```

## 3. One SERP — links + anchors

```
one_request(
  query="best running shoes",
  parser="SE::Google",
  raw_results=false,
  options=[{"type":"override","id":"pagecount","value":1}]
)
→ data.resultString   # formatted by the preset
```

Structured instead of formatted: set `raw_results=true` and read `data.results[0].serp`.

## 4. Check a site's Google position (single country)

`SE::Google::Position` reads the **first token of the query as the checked domain**,
the rest is the keyword. Set the country with `gl` / `hl` / `domain`.

```
add_task(
  parsers=[["SE::Google::Position","default",
    {"type":"override","id":"gl","value":"fr"},
    {"type":"override","id":"hl","value":"fr"},
    {"type":"override","id":"domain","value":"www.google.fr"},
    {"type":"override","id":"pagecount","value":3}]],
  queries=[
    "example.com blue running shoes",
    "example.org best coffee maker"
  ],
  results_format="$p1.query.orig;$p1.position;$p1.link\n"
)
→ taskUid
```

Then:

```
wait_task(task_uid=<id>)         → {"status":"completed", ...}
task_results(task_uid=<id>)      → single-use download URL
```

Result rows: `example.com blue running shoes;6;https://example.com/`.
`position`: a number = rank; `0` = SERP parsed but domain not in `pagecount×10`;
`none` = the query failed (empty/captcha) — rerun those.

## 5. Position check that survives Google reCAPTCHA

Google shows reCAPTCHA to datacenter proxies. It is only solved when a solver
preset exists. Create a `Util::ReCaptcha2` preset in the A-Parser UI once (e.g.
named `xevil`) with provider + key + provider URL, then reference it by name and
add retries. `engine=http` is faster than the browser engine and still solves.

```
add_task(
  parsers=[["SE::Google::Position","default",
    {"type":"override","id":"gl","value":"fr"},
    {"type":"override","id":"hl","value":"fr"},
    {"type":"override","id":"domain","value":"www.google.fr"},
    {"type":"override","id":"engine","value":"http"},
    {"type":"override","id":"pagecount","value":3},
    {"type":"override","id":"Util_ReCaptcha2_preset","value":"xevil"},
    {"type":"override","id":"proxyretries","value":40},
    {"type":"override","id":"emptyResultRetries","value":12},
    {"type":"override","id":"reCaptchaRetries","value":6}]],
  queries=["example.com my keyword"],
  config_preset="50th"                    # more threads = faster batches
)
```

> UI gotcha: some A-Parser builds mislabel the `Util::ReCaptcha2` fields as
> `redis_host` (= key), `redis_port` (= provider URL), `redis_password` (= provider).
> Fill those; verify by reading the preset back with `getParserPreset`.

## 6. Desktop vs mobile (different SERPs)

Mobile often ranks differently. Add `device`:

```
# desktop is the default; for mobile:
{"type":"override","id":"device","value":"mobile"}
```

Run the same keywords once with `desktop` and once with `mobile` to compare.

## 7. Check a specific URL (not just the domain)

`SE::Google::Position` matches the domain by default. To require an exact page:

```
{"type":"override","id":"matchtype","value":"url"}   # domain | tld | url
```

## 8. Bulk task → wait → download (full lifecycle)

```
tid = add_task(
  parsers=[["SE::Google","default",
    {"type":"override","id":"pagecount","value":2}]],
  queries=["keyword one","keyword two","keyword three"],
  results_format="$p1.serp.format('$link;$anchor\n')",
  config_preset="50th"
)
wait_task(task_uid=tid, interval=5, timeout=900)
url = task_results(task_uid=tid)          # then download the file from url
```

If `wait_task` times out, the task keeps running server-side — call `task_results`
later. Check live proxies anytime with `get_proxies()`.
