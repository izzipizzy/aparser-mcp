# Net::Whois

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `dns_check` | `1` |  |
| `force_dns_check` | `1` |  |
| `formatresult` | `$query - registered: $registered, expire: $expire_date, creation: $creation_date
` | Per-result output template used by oneRequest/preset |
| `ip_allocation_check` | `1` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `recurse` | `0` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `server` | *(empty)* |  |
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
- `$registered` — Registered
- `$expire_date` — Expire Date
- `$creation_date` — Creation date
- `$free_date` — Free date
- `$whoisserver` — Used whois server
- `$registrar` — Registrar
- `$updated_date` — Updated date
- `$data` — Raw data

### Array fields (use `.format()`)

- **`ns`** — Name servers: `$server`
- **`statuses`** — Statuses list: `$status`

