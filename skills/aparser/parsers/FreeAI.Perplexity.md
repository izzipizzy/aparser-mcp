# FreeAI::Perplexity

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `bypassCloudFlareChromeHeadless` | `1` |  |
| `bypassCloudFlareChromeMaxPages` | `10` |  |
| `bypass_cloudflare` | `1` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query\n$answer\n` | Per-result output template used by oneRequest/preset |
| `newAttemptWhenMatch` | `Sign up and repeat your request.
Зарегистрируйтесь и повторите свой запрос.` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `ses` | `1` |  |
| `sources` | `["web"]` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |

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

- **`related`** — Related queries: `$text`
- **`sources`** — Sources: `$link`, `$anchor`, `$snippet`

