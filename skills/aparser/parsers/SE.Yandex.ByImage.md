# SE::Yandex::ByImage

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `domain` | `yandex.ru` | Search engine domain, e.g. www.google.fr |
| `dontScrapeIfNoOtherSizes` | `0` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `filter` | `moderate` | Google duplicate filter (&filter=) |
| `formatresult` | `$serp.format('$image\n')` | Per-result output template used by oneRequest/preset |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `scBrowserMaxPages` | `5` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `use_ses` | `1` |  |
| `useproxy` | `1` | Use proxies (1/0) |
| `usesessions` | `1` | Reuse cookies/sessions across requests (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$data` — Raw data

### Array fields (use `.format()`)

- **`keywords`** — Keywords list: `$key`
- **`serp`** — Main serp list: `$image`, `$width`, `$height`, `$link`, `$domain`, `$anchor`, `$snippet`

