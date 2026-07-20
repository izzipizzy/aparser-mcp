# SecurityTrails::Domain

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `bypassCloudFlareChromeHeadless` | `1` |  |
| `bypassCloudFlareChromeMaxPages` | `10` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - $alexa - $apex_domain` | Per-result output template used by oneRequest/preset |
| `login` | *(empty)* |  |
| `mode` | `dns` |  |
| `password` | *(empty)* |  |
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
- `$alexa` — Alexa rank
- `$apex_domain` — Apex domain
- `$host` — Host
- `$subdomain_count` — Subdomain Count
- `$data` — Raw data

### Array fields (use `.format()`)

- **`aRecords`** — A records: `$ip`, `$stats`
- **`txt`** — TXT: `$record`
- **`aaaaRecords`** — AAAA records: `$ip`, `$stats`
- **`nsRecords`** — NS records: `$ns`, `$stats`
- **`cnameRecordsPointed`** — CNAME records pointed here: `$domain`
- **`nsRecordsPointed`** — NS records pointed here: `$domain`
- **`mxRecordsPointed`** — Mx records pointed here: `$domain`
- **`subdomains`** — Subdomains: `$domain`, `$alexa`, `$hosting`, `$mail`
- **`soaRecords`** — SOA records: `$ttl`, `$email`, `$stats`
- **`mxRecords`** — MX records: `$p`, `$host`, `$stats`

