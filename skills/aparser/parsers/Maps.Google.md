# Maps::Google

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `at` | `55.780844,37.6572693` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$name ($rating): $address\n')` | Per-result output template used by oneRequest/preset |
| `gl` | *(empty)* | Google country code, e.g. 'fr', 'ar' (&gl=) |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
| `max_pages` | `10` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `z` | `11` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$osmlocation` — OpenStreetMap location
- `$data` — Raw data

### Array fields (use `.format()`)

- **`serp`** — Results list: `$name`, `$address`, `$rating`, `$reviews`, `$price`, `$categories`, `$tags`, `$site`, `$phones`, `$photo`, `$coordinates`, `$link`, `$claim`, `$timestatus`, `$hours`, `$blink`

