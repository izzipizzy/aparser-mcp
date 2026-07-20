# Rank::MOZ

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `bypassCloudFlareChromeHeadless` | `1` |  |
| `bypassCloudFlareChromeMaxPages` | `10` |  |
| `bypass_cloudflare` | `1` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - Domain Authority: $authority, Linking Root Domains: $linking\n` | Per-result output template used by oneRequest/preset |
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
- `$authority` — Domain Authority
- `$linking` — Linking Root Domains
- `$keywords` — Ranking Keywords
- `$spam` — Spam Score
- `$data` — Raw data

### Array fields (use `.format()`)

- **`topFeaturedSnippets`** — Top Featured Snippets: `$keyword`, `$owned`
- **`keywordsByClicks`** — Keywords by Estimated Clicks: `$keyword`, `$visibility`
- **`discoveredAndLostLinkingDomains`** — Discovered and Lost Linking Domains: `$date`, `$discovered`, `$lost`
- **`topRankingKeywords`** — Top Ranking Keywords: `$keyword`, `$rank`
- **`brandedKeywords`** — Branded Keywords: `$keyword`, `$volume`
- **`topSearchCompetitors`** — Top Search Competitors: `$domain`, `$da`, `$visibility`
- **`topLinkingDomains`** — Top Linking Domains: `$domain`, `$da`
- **`keywordRankingDistribution`** — Keyword Ranking Distribution: `$position`, `$keywords`
- **`topPagesByLinks`** — Top Pages by Links: `$url`, `$pa`
- **`topQuestions`** — Top Questions: `$question`, `$relevance`

