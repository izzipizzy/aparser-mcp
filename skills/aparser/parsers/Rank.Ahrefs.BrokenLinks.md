# Rank::Ahrefs::BrokenLinks

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_Turnstile_preset` | `default` |  |
| `addHeaders` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query: inbound - $in, outbound - $out\n` | Per-result output template used by oneRequest/preset |
| `mode` | `subdomains` |  |
| `notSearchSitekey` | `1` |  |
| `passProxy` | `0` |  |
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
- `$in` — Count of broken links to your site
- `$in_dofollow` — Inbound links dofollow percentage
- `$out` — Count of broken links on your site
- `$out_dofollow` — Outbound links dofollow percentage
- `$data` — Raw data

### Array fields (use `.format()`)

- **`inbound`** — Broken inbound links: `$rank`, `$rating`, `$traffic`, `$from`, `$title`, `$to`, `$anchor`, `$textPre`, `$textPost`, `$follow`, `$code`, `$redirect_code`, `$redirects`, `$powered_by`
- **`outbound`** — Broken outbound links: `$from`, `$title`, `$rank`, `$int`, `$ex`, `$to`, `$anchor`, `$textPre`, `$textPost`, `$code`, `$redirect_code`, `$follow`

