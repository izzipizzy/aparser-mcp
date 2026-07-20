# SE::Yandex::Direct

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - $totalcount\n$ads.format('$domain: $title - $text\n')` | Per-result output template used by oneRequest/preset |
| `geo` | `213` |  |
| `pagecount` | `10` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `use_ses` | `1` |  |
| `useproxy` | `1` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$totalcount` — Total views count

### Array fields (use `.format()`)

- **`ads`** — Ads list: `$domain`, `$title`, `$text`, `$link1`, `$anchor1`, `$link2`, `$anchor2`, `$link3`, `$anchor3`, `$link4`, `$anchor4`, `$tag1`, `$tag2`, `$tag3`, `$tag4`, `$organic`
- **`pages`** — Raw data array: `$data`

