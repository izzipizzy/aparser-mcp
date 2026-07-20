# SE::Yahoo

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `notfound` | `0` |  |
| `pagecount` | `5` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `safesearch` | `i` | SafeSearch filter |
| `serptime` | *(empty)* | Time range for results (all \| year \| month \| ...) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `yahoo_country` | *(empty)* |  |
| `yahoo_domain` | `United States (English)` |  |
| `yahoo_lang` | `["any"]` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$totalcount` — Total results count

### Array fields (use `.format()`)

- **`related`** — Related keywords: `$key`
- **`ads`** — Ads: `$link`, `$anchor`, `$snippet`, `$visiblelink`, `$position`, `$page`
- **`serp`** — Main serp list: `$link`, `$anchor`, `$snippet`
- **`pages`** — Raw data array: `$data`

