# SE::Bing

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_Turnstile_preset` | `default` |  |
| `engine` | `http` | Request engine: http \| chrome (browser) |
| `experimentalConf` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `handleCaptchaMaxPages` | `10` |  |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `http2` | null |  |
| `lang` | *(empty)* |  |
| `mobile` | `0` |  |
| `pagecount` | `10` | Number of SERP pages to parse |
| `passProxy` | `0` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `region` | *(empty)* |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `res_lang` | `[]` |  |
| `safesearch` | `DEMOTE` | SafeSearch filter |
| `stop_by_count` | `0` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `ubiroff` | `0` |  |
| `useproxy` | `1` | Use proxies (1/0) |
| `usesessions` | `1` | Reuse cookies/sessions across requests (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$totalcount` — Total results count
- `$detected_geo` — Detected geo

### Array fields (use `.format()`)

- **`related`** — Related keywords: `$key`
- **`ads`** — Ads list: `$link`, `$anchor`, `$visiblelink`, `$snippet`, `$position`, `$page`
- **`geo`** — Geo on pages: `$data`
- **`serp`** — Main serp list: `$link`, `$anchor`, `$snippet`, `$cache`
- **`pages`** — Raw data array: `$data`

