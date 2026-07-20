# Social::Instagram::Post

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `cookie` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query: comments: $comments_count, likes: $likes_count\nText: $text` | Per-result output template used by oneRequest/preset |
| `pagecount` | `1` | Number of SERP pages to parse |
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
- `$type` — Post type
- `$text` — Text
- `$time` — Post created time
- `$comments_count` — Comments count
- `$likes_count` — Likes count
- `$thumb` — Thumbnail link
- `$height` — Height
- `$width` — Width
- `$owner_link` — Owner profile link
- `$owner_name` — Owner name
- `$location` — Location
- `$location_link` — Location link
- `$video_link` — Video link

### Array fields (use `.format()`)

- **`comments`** — Comments array: `$author`, `$comment_text`, `$time`, `$likes`
- **`pages`** — Raw data array: `$data`

