# SE::YouTube::Video

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `commentPages` | `5` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query - $title\nViews: $viewsCount, likes: $likesCount, comments: $commentsCount\n` | Per-result output template used by oneRequest/preset |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `hl` | `en` | Interface language, e.g. 'fr', 'es' (&hl=) |
| `loginRequiredIsError` | `1` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `relatedPages` | `5` |  |
| `replyPages` | `3` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `subtitlesLang` | `en` |  |
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
- `$title` — Title
- `$description` — Description
- `$viewsCount` — Views count
- `$likesCount` — Likes count
- `$commentsCount` — Comments count
- `$date` — Publishing date
- `$duration` — Video duration
- `$thumbnail` — Thumbnail
- `$author` — Author
- `$authorUrl` — Author url
- `$authorAvatar` — Author avatar url
- `$subscribers` — Subscribers count
- `$data` — Raw data

### Array fields (use `.format()`)

- **`related`** — Related videos: `$link`, `$title`, `$author`, `$viewsCount`, `$date`, `$duration`
- **`chapters`** — Chapters: `$title`, `$start`, `$thumbnail`
- **`comments`** — Comments list: `$id`, `$pid`, `$author`, `$link`, `$avatar`, `$text`, `$time`
- **`tags`** — Tags list: `$tag`
- **`subtitles`** — Subtitles: `$text`, `$start`, `$duration`

