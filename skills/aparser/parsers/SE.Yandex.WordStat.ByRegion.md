# SE::Yandex::WordStat::ByRegion

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
| `formatresult` | `$query - Total views: $totalcount\nViews by regions:\n$regions.format('$region $count, $popularity%\n')\nViews by cities:\n$cities.format('$city $count, $popularity%\n')` | Per-result output template used by oneRequest/preset |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `isParseWordstat2` | `1` |  |
| `isParseWordstat2AllTableData` | `1` |  |
| `login_antigatepreset` | `default` |  |
| `old_antigatepreset` | `default` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `300` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `removeBadAccounts` | `exceptWrongLP` |  |
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
- `$data` — Raw data

### Array fields (use `.format()`)

- **`regions`** — Views by regions: `$region`, `$count`, `$popularity`
- **`cities`** — Views by cities: `$city`, `$count`, `$popularity`

