# SE::Google

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_AntiGate_preset` | `default` |  |
| `Util_ReCaptcha2_preset` | `default` |  |
| `addHeaders` | *(empty)* |  |
| `cr` | *(empty)* | Country restrict (&cr=) |
| `debug_nonexists_domains` | `0` |  |
| `device` | `desktop` | desktop \| mobile |
| `domain` | `www.google.com` | Search engine domain, e.g. www.google.fr |
| `dontTakeSession` | `0` |  |
| `emptyResultRetries` | `3` | Retries when the result/SERP comes back empty (often captcha) |
| `emptyTotalcountIsError` | `0` |  |
| `engine` | `http` | Request engine: http \| chrome (browser) |
| `exact_match` | `0` |  |
| `experimentalConf` | *(empty)* |  |
| `experimentalSplit` | `0` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `filter` | `1` | Google duplicate filter (&filter=) |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `gl` | *(empty)* | Google country code, e.g. 'fr', 'ar' (&gl=) |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
| `location` | *(empty)* | Geo location string (UULE) for local results |
| `lr` | *(empty)* | Language restrict (&lr=) |
| `nfpr` | `0` | No auto-correction of the query (&nfpr=1) |
| `paaCount` | `0` | How many 'People also ask' items to expand |
| `pagecount` | `5` | Number of SERP pages to parse |
| `parsePagesLinks` | `1` | Follow and parse links on result pages |
| `parsenotfound` | `1` | Still emit a row when the domain is not found (position 0) |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `60` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `reCaptchaPassProxy` | `0` |  |
| `reCaptchaRetries` | `3` | Retries on Google reCAPTCHA |
| `redirectBrowserMaxPages` | `10` |  |
| `redirectBrowserSingle` | `1` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `safesearch` | `0` | SafeSearch filter |
| `serp` | *(empty)* |  |
| `serptime` | `all` | Time range for results (all \| year \| month \| ...) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `usesessions` | `1` | Reuse cookies/sessions across requests (1/0) |
| `writeGoogleTimeoutHtml` | `0` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$totalcount` — Total results count
- `$misspell` — Is query misspelling
- `$corrected` — Corrected query
- `$detected_geo` — Detected geo
- `$ai_type` — AI type
- `$ai_answer` — AI answer

### Array fields (use `.format()`)

- **`ads`** — Ads list: `$link`, `$anchor`, `$visiblelink`, `$snippet`, `$position`, `$page`
- **`geo`** — Geo on pages: `$data`
- **`errors`** — Founded errors: `$error`
- **`serp`** — Main serp list: `$link`, `$anchor`, `$snippet`, `$amp`, `$date`, `$flags`
- **`tags`** — Tags list: `$tag`
- **`related`** — Related keywords: `$key`
- **`paa`** — Questions: `$link`, `$anchor`, `$media`, `$question`, `$answer`, `$answerHtml`, `$isAI`
- **`rich`** — Rich snippets list: `$name`
- **`ai`** — AI links: `$link`, `$anchor`, `$snippet`
- **`pages`** — Raw data array: `$data`


## Notes

- **Engine**: `engine` = `http` (fast) or a browser mode. On JS/anti-bot challenges A-Parser can fall back to a redirect browser (`redirectBrowserSingle`, `redirectBrowserMaxPages`).
- **Device**: `device` = `desktop` | `mobile`. The SERP differs — mobile uses infinite scroll (no pagination links; `parsePagesLinks` is desktop-only). Positions can differ between desktop and mobile.
- **Geo**: set `gl` (country), `hl` (interface language), `domain` (e.g. `www.google.fr`), and optionally `location` (UULE) for city-level local results.
- **Captcha**: Google shows reCAPTCHA to suspicious IPs. It is only solved if a solver is configured via `Util_ReCaptcha2_preset` / `Util_AntiGate_preset`. Without a working solver (or on flagged proxies) queries fail — the parser bans the proxy and retries (`reCaptchaRetries`, `emptyResultRetries`, `proxyretries`). Many `none` results = a captcha wall, NOT 'not ranking'.
- **Depth**: `pagecount` × ~10 results. Up to 100 pages via HTTP engine.
