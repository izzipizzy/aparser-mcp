# Net::DNS

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `ban_not_working` | `1` |  |
| `formatresult` | `$query: $ip ($ips.format('$ip, '))\n` | Per-result output template used by oneRequest/preset |
| `notfoundiserror` | `0` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `1800` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `query_type` | `A` |  |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `rotation_type` | `consistently` |  |
| `server` | `208.67.220.220, 8.8.8.8` |  |
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
- `$ip` — First IP
- `$server` — Used server
- `$data` — Raw data

### Array fields (use `.format()`)

- **`ips`** — List all IPs: `$ip`
- **`records`** — Records in plain text(RFC1035): `$entry`

