# Rank::MajesticSEO

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `addHeaders` | `accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-language: en-US,en;q=0.9
priority: u=0, i
sec-ch-ua: "Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: none
sec-fetch-user: ?1
upgrade-insecure-requests: 1` |  |
| `browser` | `0` |  |
| `chrome` | `0` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - domains: $domains, backlinks: $backlinks, trust: $trustflow, citation: $citationflow, indexed: $indexed\n` | Per-result output template used by oneRequest/preset |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `http2` | `0` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `stealth` | `0` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `type` | `root` |  |
| `ua` | `[% tools.ua.random() %]` |  |
| `useproxy` | `1` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$domains` — Referring domains
- `$backlinks` — External Backlinks
- `$indexed` — Indexed urls
- `$citationflow` — Citation flow
- `$trustflow` — Trust flow
- `$data` — Raw data

### Array fields (use `.format()`)

- **`site_langs`** — Site languages: `$lang`, `$rate`
- **`incoming_langs`** — Incoming languages: `$lang`, `$rate`

