# FreeAI::GoogleAI

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_AntiGate_preset` | `default` |  |
| `Util_ReCaptcha2_preset` | `default` |  |
| `addHeaders` | *(empty)* |  |
| `dontTakeSession` | `0` |  |
| `emptyResultRetries` | `3` | Retries when the result/SERP comes back empty (often captcha) |
| `experimentalConf` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query\n$answer\n` | Per-result output template used by oneRequest/preset |
| `gl` | *(empty)* | Google country code, e.g. 'fr', 'ar' (&gl=) |
| `location` | *(empty)* | Geo location string (UULE) for local results |
| `lr` | *(empty)* | Language restrict (&lr=) |
| `parsePagesLinks` | `1` | Follow and parse links on result pages |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `60` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `reCaptchaPassProxy` | `0` |  |
| `reCaptchaRetries` | `3` | Retries on Google reCAPTCHA |
| `redirectBrowserMaxPages` | `10` |  |
| `redirectBrowserSingle` | `1` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `timeout` | `60` | Per-request timeout (seconds) |
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
- `$answer` — Answer
- `$data` — Raw data

### Array fields (use `.format()`)

- **`sources`** — Sources: `$link`, `$anchor`, `$snippet`

