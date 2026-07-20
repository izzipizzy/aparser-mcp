# SE::Google::ByImage

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_ReCaptcha2_preset` | `default` |  |
| `domain` | `google.com` | Search engine domain, e.g. www.google.fr |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `gl` | *(empty)* | Google country code, e.g. 'fr', 'ar' (&gl=) |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
| `lr` | *(empty)* | Language restrict (&lr=) |
| `pagecount` | `5` | Number of SERP pages to parse |
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
- `$totalcount` — Total results count
- `$height` — Height
- `$width` — Width
- `$key` — Keyword

### Array fields (use `.format()`)

- **`serp`** — Main serp list: `$link`, `$anchor`, `$height`, `$width`, `$snippet`
- **`pages`** — Raw data array: `$data`

