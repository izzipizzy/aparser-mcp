# Maps::Yandex

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_AntiGate_preset` | `default` |  |
| `devtools` | `0` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$name ($rating): $address\n')` | Per-result output template used by oneRequest/preset |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `lang` | `ru` |  |
| `ll` | `37.685970,55.765134` |  |
| `logConnections` | `0` |  |
| `pagecount` | `5` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `z` | `12` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics

### Array fields (use `.format()`)

- **`serp`** — Results list: `$name`, `$address`, `$rating`, `$reviews`, `$price`, `$categories`, `$tags`, `$site`, `$phones`, `$photo`, `$coordinates`, `$social`, `$logo`, `$description`, `$link`, `$worktime`, `$status`
- **`pages`** — Raw data array: `$data`

