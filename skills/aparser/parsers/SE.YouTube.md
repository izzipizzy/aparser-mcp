# SE::YouTube

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `advanced` | *(empty)* |  |
| `device` | `desktop` | desktop \| mobile |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `gl` | *(empty)* | Google country code, e.g. 'fr', 'ar' (&gl=) |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
| `pagecount` | `10` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `restricted` | `0` |  |
| `search_duration` | *(empty)* |  |
| `search_sort` | `0800` |  |
| `search_type` | *(empty)* |  |
| `sp` | *(empty)* |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `uploaded` | *(empty)* |  |
| `useproxy` | `1` | Use proxies (1/0) |

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

- **`related`** — Related keywords: `$key`, `$thumb`
- **`serp`** — Results array: `$link`, `$title`, `$desc`, `$user`, `$thumb`, `$views`, `$time`, `$channel`, `$date`, `$subs`, `$summary`
- **`pages`** — Raw data array: `$data`

