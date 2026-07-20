# SE::DuckDuckGo::Position

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$domain - $key: $position\n` | Per-result output template used by oneRequest/preset |
| `http2` | `0` |  |
| `http2Links` | `0` |  |
| `language` | `en_US` |  |
| `location` | `us-en` | Geo location string (UULE) for local results |
| `matchtype` | `domain` | Domain match: domain \| tld \| url |
| `pagecount` | `1` | Number of SERP pages to parse |
| `period` | *(empty)* |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `safe` | `-1` |  |
| `stopwhenfound` | `1` | Stop parsing once the domain is found |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `userAgent` | `Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.7444.176 Safari/537.36` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$domain` — Domain
- `$key` — Check keyword
- `$position` — Domain position
- `$link` — Link in serp

### Array fields (use `.format()`)

- **`bulkcheck`** — Bulk domain results: `$domain`, `$position`, `$link`
- **`positions`** — All domain positions: `$link`, `$position`
- **`serp`** — Main serp list: `$link`, `$anchor`, `$snippet`
- **`pages`** — Raw data array: `$data`

