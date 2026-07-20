# SE::Bing::Images

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `lang` | *(empty)* |  |
| `pagecount` | `10` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `region` | *(empty)* |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `safeSearch` | `DEMOTE` |  |
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

### Array fields (use `.format()`)

- **`serp`** — Main serp list: `$link`, `$width`, `$height`, `$type`, `$pagelink`, `$thumb`, `$anchor`
- **`pages`** — Raw data array: `$data`

