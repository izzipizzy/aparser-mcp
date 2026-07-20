# HTML::EmailExtractor

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
| `follow` | `0` |  |
| `followCommonRedirects` | `1` |  |
| `followMetaRefresh` | `1` |  |
| `formatresult` | `$mails.format('$mail\n')` | Per-result output template used by oneRequest/preset |
| `goodCode` | `200` |  |
| `goodCodeRegex` | *(empty)* |  |
| `headers` | *(empty)* |  |
| `headless` | `0` | Run the browser engine headless (1/0) |
| `http2` | `0` |  |
| `logConnections` | `0` |  |
| `maxCookies` | `16` |  |
| `max_size` | `262144` |  |
| `method` | `GET` |  |
| `onlyheaders` | `0` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `300` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `randomize_tls_fingerprint` | `0` |  |
| `recurse` | `0` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `searchCFemails` | `1` |  |
| `searchURLencodedEmails` | `0` |  |
| `skipComments` | `0` |  |
| `skipMetaTags` | `0` |  |
| `skipNonHTML` | `1` |  |
| `skipTLSVerify` | `0` |  |
| `subDomains` | `0` |  |
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
- `$intcount` — Internal links count
- `$extcount` — External links count
- `$mailcount` — Mails count

### Array fields (use `.format()`)

- **`intlinks`** — Internal Links: `$link`, `$anchor`, `$cleananchor`, `$nofollow`, `$tag`
- **`extlinks`** — External Links: `$link`, `$anchor`, `$cleananchor`, `$nofollow`, `$tag`
- **`mails`** — Mails: `$mail`
- **`followlinks`** — Follow Links: `$link`, `$anchor`, `$cleananchor`, `$nofollow`, `$tag`
- **`pages`** — Pages array: `$data`

