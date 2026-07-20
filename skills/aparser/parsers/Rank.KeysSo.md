# Rank::KeysSo

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `Query - $query, By vision in runet - $by_vis, By keys - $by_keys, Requests in top 50 - $in_top50, Search traf - $search_traff\n` | Per-result output template used by oneRequest/preset |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `se_db` | `msk` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `userlogin` | *(empty)* |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$by_vis` — By vision in runet
- `$by_keys` — In scope of keys
- `$subdomains` — Subdomains count
- `$in_top1` — Pages in top 1
- `$in_top3` — Pages in top 3
- `$in_top5` — Pages in top 5
- `$in_top10` — Pages in top 10
- `$in_top50` — Pages in top 50
- `$search_traff` — Search traffic
- `$pages_count` — Pages count in search results
- `$traff_page` — Traffic on page
- `$request_to_page` — Requests to page
- `$performance` — Performance
- `$backlinks_count` — Backlinks count
- `$outlinks_count` — Outlinks count
- `$dr` — DR
- `$traffic_context` — Context traffic; data available on sites where there is contextual advertising
- `$budget_estimate` — Budget estimate; data available on sites where there is contextual advertising
- `$ads_context_count` — Context ads; data available on sites where there is contextual advertising
- `$ads_request` — Ad requests count
- `$req_context` — Requests in context
- `$data` — Raw data

### Array fields (use `.format()`)

- **`outlinks`** — Outlinks list: `$domain`, `$dr`
- **`backlinkstoppages`** — Backlinks top pages: `$link`, `$domain_count`, `$link_count`, `$ip_count`
- **`comp_context`** — Competitors in context available on sites where there is contextual advertising: `$link`, `$common`, `$req`, `$ads`
- **`wreq_context`** — Website request in context available on sites where there is contextual advertising: `$request`, `$freq`, `$va_freq`, `$pos`
- **`competitors`** — Competitors list: `$domain`, `$common_keys_count`, `$common_keys_share`, `$traffic`
- **`key_phrases`** — Key phrases: `$req`, `$base_freq`, `$va_freq`, `$pos`
- **`ads_context`** — Ads in context data available on sites where there is contextual advertising: `$header`, `$text`, `$links`, `$req_count`
- **`organic_pages`** — Organic pages: `$pages`, `$keys`
- **`backlinks`** — Backlinks list: `$domain`, `$dr`

