# Rank::CMS

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Net_HTTP_preset` | `default` |  |
| `browser` | `1` |  |
| `cats` | `["CMS","Message boards","Wikis"]` |  |
| `do_gzip` | `1` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - $cms\n` | Per-result output template used by oneRequest/preset |
| `logSlowQueries` | `0` |  |
| `max_size` | `204800` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `re2` | `1` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useNetHTTP` | `0` |  |
| `useproxy` | `1` | Use proxies (1/0) |
| `user-agent` | `Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$cms` — CMS name
- `$cat` — Category name
- `$response` — Headers Object with Redirects array
- `$data` — Raw data

### Array fields (use `.format()`)

- **`list`** — All detected categories: `$cat`, `$cms`

