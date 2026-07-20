# Shop::Wildberries::ProductsList

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `address` | `Москва` |  |
| `currency` | `RUB` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$items.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `lat` | `55.753737` |  |
| `lon` | `37.6201` |  |
| `pagecount` | `5` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `sort` | `popular` |  |
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
- `$totalcount` — Total items count

### Array fields (use `.format()`)

- **`ads`** — Items list: `$link`, `$name`, `$brand`, `$rating`, `$reviews`, `$price`, `$oldPrice`, `$image`, `$sizes`, `$colors`
- **`pages`** — Raw data array: `$data`
- **`tags`** — Tags list: `$tag`
- **`items`** — Items list: `$link`, `$name`, `$brand`, `$rating`, `$reviews`, `$price`, `$oldPrice`, `$image`, `$sizes`, `$colors`, `$cat`

