# Util::SMS

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `apiKey` | *(empty)* |  |
| `customConfig` | `{}` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$id
$number
$code
` | Per-result output template used by oneRequest/preset |
| `provider` | `onlinesim.io` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `service` | `custom` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `0` | Use proxies (1/0) |
| `waitTime` | `120` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$id` — ID
- `$number` — Phone number
- `$code` — Code from SMS
- `$data` — Raw data

