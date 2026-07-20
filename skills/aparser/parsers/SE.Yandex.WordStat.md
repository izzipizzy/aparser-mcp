# SE::Yandex::WordStat

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `SE_Yandex_Register_preset` | `default` |  |
| `Util_AntiGate_preset` | `default` |  |
| `accounts` | `offline` |  |
| `authMethod` | `http` |  |
| `db` | *(empty)* |  |
| `doNotResetSes` | `1` |  |
| `experimentalCaptchaMaxCount` | `5` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - $totalcount, updated: $updatedate\nkeywords:\n$keys.format('$key: $count\n')\nadditional keywords:\n$search.format('$key: $count\n')` | Per-result output template used by oneRequest/preset |
| `geo` | `[""]` |  |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `isParseWordstat2` | `1` |  |
| `isParseWordstat2AllTableData` | `1` |  |
| `login_antigatepreset` | `default` |  |
| `old_antigatepreset` | `default` |  |
| `pagecount` | `10` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `300` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `removeBadAccounts` | `exceptWrongLP` |  |
| `removeplus` | `0` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `scBrowserMaxPages` | `5` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `usesessions` | `1` | Reuse cookies/sessions across requests (1/0) |
| `waitAccounts` | `0` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$totalcount` — Total views count
- `$updatedate` — Update date

### Array fields (use `.format()`)

- **`keys`** — Keywords list: `$key`, `$count`
- **`search`** — Again search list: `$key`, `$count`
- **`pages`** — Raw data array: `$data`

