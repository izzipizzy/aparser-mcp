# Social::Instagram::Profile

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `cookie` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `followersPageCount` | `1` |  |
| `followingsPageCount` | `1` |  |
| `formatresult` | `$query: $full_name, followers: $followers_count, following: $following_count\nPosts:\n$posts.format('$link\n')` | Per-result output template used by oneRequest/preset |
| `postsPageCount` | `1` |  |
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
- `$username` — Username
- `$full_name` — Full name
- `$bio` — Biography
- `$site` — Website
- `$posts_count` — Posts count
- `$followers_count` — Followers count
- `$following_count` — Following count
- `$has_channel` — Is user has channel
- `$is_business` — Is business profile
- `$category` — Business category
- `$is_private` — Is private profile
- `$is_verified` — Is verified profile
- `$avatar` — Avatar link
- `$fb` — Connected FB page
- `$email` — E-mail
- `$location` — Profile location
- `$rawProfile` — Raw profile json
- `$data` — Raw data

### Array fields (use `.format()`)

- **`followings`** — Followings: `$id`, `$link`, `$username`, `$full_name`, `$is_private`, `$is_verified`, `$avatar`, `$is_possible_scammer`
- **`numbers`** — Phone numbers from bio: `$number`
- **`posts`** — Images posts array: `$type`, `$link`, `$text`, `$time`, `$comments`, `$liked_by`, `$preview_like`, `$thumb`, `$height`, `$width`, `$owner`, `$location`, `$video_view_count`
- **`links`** — Bio links: `$title`, `$link`, `$type`
- **`followers`** — Followers: `$id`, `$link`, `$username`, `$full_name`, `$is_private`, `$is_verified`, `$avatar`, `$is_possible_scammer`

