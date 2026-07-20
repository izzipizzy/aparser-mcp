# Rank::Ahrefs

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `Util_Turnstile_preset` | `default` |  |
| `addHeaders` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query: $rating\n` | Per-result output template used by oneRequest/preset |
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
- `$rating` — Domain rating
- `$url_rating` — URL rating
- `$bl` — Backlinks count
- `$bl_dofollow` — Backlinks dofollow percentage
- `$domains` — Referring domains
- `$domains_dofollow` — Referring domains dofollow percentage
- `$data` — Raw data

### Array fields (use `.format()`)

- **`backlinks`** — Top 100 backlinks list: `$page`, `$title`, `$dr`, `$url`, `$anchor`, `$preAnchor`, `$postAnchor`, `$redirect_code`, `$redirects`

