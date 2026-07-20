# Social::TikTok::Profile

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `Name: $name\nBio: $bio` | Per-result output template used by oneRequest/preset |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `subscribersPageCount` | `1` |  |
| `subscriptionsPageCount` | `1` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useSession` | `1` |  |
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
- `$name` — Name
- `$bio` — Biography
- `$email` — Email (from bio)
- `$link` — Link
- `$videos` — All video count
- `$followers` — Follower count
- `$followings` — Following count
- `$avatar` — Link to avatar
- `$type` — Link type
- `$data` — Raw data

### Array fields (use `.format()`)

- **`subscriptions`** — Subscriptions: `$link`, `$name`, `$username`, `$private`, `$verified`, `$avatar`, `$follower`, `$followings`, `$likes`, `$video`
- **`subscribers`** — Subscribers: `$link`, `$name`, `$username`, `$private`, `$verified`, `$avatar`, `$follower`, `$followings`, `$likes`, `$video`

