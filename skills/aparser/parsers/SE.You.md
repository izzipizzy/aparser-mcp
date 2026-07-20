# SE::You

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `bypassCloudFlare` | `1` |  |
| `bypassCloudFlareChromeHeadless` | `1` |  |
| `bypassCloudFlareChromeMaxPages` | `10` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `Question: $query\nAnswer: $answer\n\nWeb results:\n$serp.format('$link\n')\n` | Per-result output template used by oneRequest/preset |
| `pagecount` | `5` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `region` | *(empty)* |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `safeSearch` | `Moderate` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `useses` | `1` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$answer` — Answer

### Array fields (use `.format()`)

- **`serp`** — Serp list: `$link`, `$anchor`, `$snippet`, `$thumb`
- **`pages`** — Raw data array: `$data`

