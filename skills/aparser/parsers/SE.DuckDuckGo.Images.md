# SE::DuckDuckGo::Images

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `color` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `language` | `en_US` |  |
| `layout` | *(empty)* |  |
| `location` | `us-en` | Geo location string (UULE) for local results |
| `pagecount` | `5` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `safe` | `moderate` |  |
| `size` | *(empty)* |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `type` | *(empty)* |  |
| `useproxy` | `1` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics

### Array fields (use `.format()`)

- **`serp`** — Images list: `$link`, `$anchor`, `$page`, `$width`, `$height`, `$thumb`
- **`pages`** — Raw data array: `$data`

