# SE::Google::Images

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_ReCaptcha2_preset` | `default` |  |
| `color` | *(empty)* |  |
| `domain` | `www.google.com` | Search engine domain, e.g. www.google.fr |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `gl` | *(empty)* | Google country code, e.g. 'fr', 'ar' (&gl=) |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
| `lr` | *(empty)* | Language restrict (&lr=) |
| `pagecount` | `10` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `reCaptchaRetries` | `3` | Retries on Google reCAPTCHA |
| `redirectBrowserMaxPages` | `10` |  |
| `redirectBrowserSingle` | `1` |  |
| `redirectMode` | `fulfill` |  |
| `redirectTimeout` | `10000` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `rights` | *(empty)* |  |
| `safesearch` | `0` | SafeSearch filter |
| `serptime` | *(empty)* | Time range for results (all \| year \| month \| ...) |
| `size` | *(empty)* |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `type` | *(empty)* |  |
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

### Array fields (use `.format()`)

- **`serp`** — Images list: `$link`, `$anchor`, `$snippet`, `$pagelink`, `$width`, `$height`, `$thumb`, `$type`
- **`pages`** — Raw data array: `$data`
- **`tags`** — Tags list: `$tag`

