# SE::Yandex::Speller

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `HTML_TextExtractor_preset` | `default` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query: $total\n$errors.format('$word ($suggest) - $type\n')` | Per-result output template used by oneRequest/preset |
| `lang` | `["en","ru","uk"]` |  |
| `opts` | `[1,2,4,2048]` |  |
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
- `$total` — HTML title
- `$data` — Raw data

### Array fields (use `.format()`)

- **`errors`** — Errors list: `$word`, `$suggest`, `$type`

