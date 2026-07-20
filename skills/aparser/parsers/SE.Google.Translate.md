# SE::Google::Translate

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `device` | `d` | desktop \| mobile |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - $translated\n` | Per-result output template used by oneRequest/preset |
| `from_language` | `auto` |  |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `to_language` | `en` |  |
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
- `$detected` — Detected language
- `$translated` — Translated text
- `$translit_orig` — Original text in translit
- `$translit_translated` — Translated text in translit
- `$data` — Raw data

### Array fields (use `.format()`)

- **`variants`** — Translation variants list: `$text`

