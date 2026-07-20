# HTML::TextExtractor

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `banCodeRegex` | *(empty)* |  |
| `body` | *(empty)* |  |
| `browser` | `1` |  |
| `bypassCloudFlareChrome` | `0` |  |
| `bypassCloudFlareChromeHeadless` | `1` |  |
| `bypassCloudFlareChromeMaxPages` | `20` |  |
| `cookies` | *(empty)* |  |
| `detectcharset` | `0` |  |
| `devtools` | `0` |  |
| `do_gzip` | `1` |  |
| `engine` | `http` | Request engine: http \| chrome (browser) |
| `followCommonRedirects` | `1` |  |
| `followMetaRefresh` | `1` |  |
| `formatresult` | `$texts.format('$text\n')` | Per-result output template used by oneRequest/preset |
| `goodCode` | *(empty)* |  |
| `goodCodeRegex` | *(empty)* |  |
| `headers` | *(empty)* |  |
| `headless` | `0` | Run the browser engine headless (1/0) |
| `http2` | `0` |  |
| `ignoretags` | *(empty)* |  |
| `logConnections` | `0` |  |
| `maxCookies` | `16` |  |
| `max_size` | `1048576` |  |
| `method` | `GET` |  |
| `minblocklength` | `50` |  |
| `onlyheaders` | `0` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `300` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `randomize_tls_fingerprint` | `0` |  |
| `recurse` | `7` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `skipTLSVerify` | `0` |  |
| `skipanchors` | `0` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `try_http1` | `1` |  |
| `useproxy` | `1` | Use proxies (1/0) |
| `user-agent` | *(empty)* |  |
| `waitUntil` | `networkidle2` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$code` — Status code
- `$reason` — Reason
- `$headers` — Headers
- `$data` — Content data
- `$response` — Headers Object with Redirects array
- `$proxy` — Used proxy

### Array fields (use `.format()`)

- **`texts`** — Text blocks list: `$text`
- **`pages`** — Pages array: `$data`

