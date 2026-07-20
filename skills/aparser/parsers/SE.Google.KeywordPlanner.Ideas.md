# SE::Google::KeywordPlanner::Ideas

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `adult` | `1` |  |
| `allCookies` | *(empty)* |  |
| `authuser` | `0` |  |
| `brand` | `0` |  |
| `bulkMode` | `0` |  |
| `currency` | `USD` |  |
| `date_from` | `last12m` |  |
| `date_to` | `last12m` |  |
| `email` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$ideas.format('$keyword\n')` | Per-result output template used by oneRequest/preset |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `lang` | `1000` |  |
| `location` | *(empty)* | Geo location string (UULE) for local results |
| `loginScreenshot` | `0` |  |
| `network` | `1` |  |
| `password` | *(empty)* |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `rec_email` | *(empty)* |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `sid` | *(empty)* |  |
| `sidts` | *(empty)* |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `tok` | *(empty)* |  |
| `type` | `1` |  |
| `uscid` | *(empty)* |  |
| `useproxy` | `1` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$volume` — Volume
- `$volume_type` — Type of volume values
- `$data` — Raw data

### Array fields (use `.format()`)

- **`suggests`** — Suggests list: `$key`
- **`ideas`** — Ideas list: `$keyword`, `$volume`, `$min_bid`, `$max_bid`, `$competition`, `$comp_index`, `$trends`

