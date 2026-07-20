# SE::Google::Cache

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_ReCaptcha2_preset` | `default` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query: $exists - $date\n` | Per-result output template used by oneRequest/preset |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `remove_toolbar` | `1` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `ses` | `1` |  |
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
- `$data` — Page data
- `$exists` — Exists results
- `$date` — Date of last snapshot
- `$timestamp` — Timestamp
- `$link` — Url from toolbar

