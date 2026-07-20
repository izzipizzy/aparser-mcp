# Rank::Bukvarix::Keyword

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `api_key` | `free` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$keywords.format('$key\n')` | Per-result output template used by oneRequest/preset |
| `num_results` | `1000` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
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
- `$totalcount` — Total count
- `$data` — Raw data

### Array fields (use `.format()`)

- **`keywords`** — Keywords: `$key`, `$wordscount`, `$symbolscount`, `$frequency`, `$frequency2`

