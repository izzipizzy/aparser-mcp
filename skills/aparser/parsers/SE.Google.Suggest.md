# SE::Google::Suggest

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `clear` | `1` |  |
| `client` | `chrome` |  |
| `domain` | `www.google.com` | Search engine domain, e.g. www.google.fr |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `follow` | `1` |  |
| `formatresult` | `$query - $suggestquery:\n$results.format('$suggest\n')` | Per-result output template used by oneRequest/preset |
| `gl` | *(empty)* | Google country code, e.g. 'fr', 'ar' (&gl=) |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
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
- `$suggestquery` — Suggest query
- `$data` — Raw data

### Array fields (use `.format()`)

- **`results`** — Suggests list: `$suggest`, `$type`


## Notes

- Google autocomplete suggestions for a query. Fast, HTTP-based, light on proxies (usually no captcha). Geo via `gl`/`hl`.
