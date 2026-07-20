# SE::Google::Trends

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `custom_time` | null |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query:\ninterest_bytime:\n$interest_bytime.format('$key,$time,$interest\n')interest_byregion:\n$interest_byregion.format('$key,$region,$interest\n')related_topics:\n$related_topics.format('$topic,$category,$interest,$id\n')related_topics_rising:\n$related_topics_rising.format('$topic,$category,$interest,$id\n')related_queries:\n$related_queries.format('$key,$rquery,$interest\n')related_queries_rising:\n$related_queries_rising.format('$key,$rquery,$interest\n')` | Per-result output template used by oneRequest/preset |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `search_category` | `0` |  |
| `search_property` | *(empty)* |  |
| `search_region` | *(empty)* |  |
| `search_time` | `today+5-y` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `use_empty_queries` | `0` |  |
| `useproxy` | `1` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$data` — Raw data

### Array fields (use `.format()`)

- **`related_queries_rising`** — Rising related queries: `$key`, `$rquery`, `$interest`
- **`related_queries`** — Top related queries: `$key`, `$rquery`, `$interest`
- **`related_topics_rising`** — Rising related topics: `$topic`, `$category`, `$interest`, `$id`
- **`interest_byregion`** — Interest by region: `$key`, `$region`, `$interest`
- **`related_topics`** — Top related topics: `$topic`, `$category`, `$interest`, `$id`
- **`interest_bytime`** — Interest by time: `$key`, `$time`, `$interest`

