# SE::Rambler

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_AntiGate_preset` | `default` |  |
| `correctOff` | `0` |  |
| `device` | `desktop` | desktop \| mobile |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `filter` | `moderate` | Google duplicate filter (&filter=) |
| `formatresult` | `$serp.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `lang` | `[""]` |  |
| `limitcontext` | `0` |  |
| `linksperpage` | `10` | Results per page |
| `mime` | `[""]` |  |
| `pagecount` | `5` | Number of SERP pages to parse |
| `period` | *(empty)* |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `region` | *(empty)* |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `sort` | `3` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
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
- `$totalcount` — Total results count

### Array fields (use `.format()`)

- **`hints`** — Hints: `$hint`
- **`serp`** — Main serp list: `$link`, `$anchor`, `$snippet`
- **`pages`** — Raw data array: `$data`

