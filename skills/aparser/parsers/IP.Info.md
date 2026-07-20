# IP::Info

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query: $country, $region, $city, Location: $loc, Postal code: $postal
` | Per-result output template used by oneRequest/preset |
| `proxyAsIPQuery` | `0` |  |
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
- `$ip` — IP (When use proxy as query)
- `$anycast` — Any cast
- `$city` — City
- `$region` — Region
- `$country` — Country
- `$loc` — Location
- `$postal` — Postal code
- `$timezone` — Timezone
- `$asn` — Autonomous system number
- `$name` — ASN name
- `$domain` — ASN domain
- `$route` — ASN route
- `$type` — ASN type
- `$companyName` — Company name
- `$companyDomain` — Company domain
- `$companyType` — Company type
- `$vpn` — Is the IP using VPN
- `$proxy` — Is the IP using proxy
- `$tor` — Is the IP using TOR
- `$hosting` — Does the IP belong to the hosting company
- `$service` — Service
- `$address` — Abuse address
- `$abuseCountry` — Abuse country
- `$email` — Abuse email
- `$abuseName` — Abuse name
- `$network` — Abuse network
- `$phone` — Abuse phone
- `$data` — Raw data

