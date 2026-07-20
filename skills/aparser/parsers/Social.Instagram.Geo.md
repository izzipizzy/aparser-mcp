# Social::Instagram::Geo

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `cookie` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query: $name\n$posts.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `pagesCount` | `1` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `timeout` | `60` | Per-request timeout (seconds) |
| `type` | `ranked` |  |
| `useproxy` | `1` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$id` — Location id
- `$name` — Location name
- `$phone` — Location phone
- `$category` — Location category
- `$lat` — Latitude
- `$lng` — Longitude
- `$address` — Location address
- `$city` — Location city
- `$zip` — Location zip
- `$data` — Raw data

### Array fields (use `.format()`)

- **`posts`** — Posts array: `$link`, `$full_name`, `$text`, `$time`, `$comments`, `$likes`, `$thumb`, `$height`, `$width`, `$type`

