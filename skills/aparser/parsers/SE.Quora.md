# SE::Quora

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `cookie` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$questions.format('$question\n')` | Per-result output template used by oneRequest/preset |
| `pagecount` | `5` | Number of SERP pages to parse |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `time` | `all_times` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `type` | `question` |  |
| `useproxy` | `1` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics

### Array fields (use `.format()`)

- **`topics`** — Topics list: `$link`, `$name`, `$photo`, `$numFollowers`
- **`posts`** — Posts list: `$link`, `$title`, `$content`, `$media`, `$embedUrls`, `$creationTime`, `$updatedTime`, `$numUpvotes`, `$numViews`, `$numSharers`, `$authorProfile`, `$authorName`, `$authorAvatar`
- **`questions`** — Questions list: `$link`, `$question`, `$answerCount`, `$lastFollowed`
- **`pages`** — Raw data array: `$data`
- **`spaces`** — Spaces list: `$link`, `$name`, `$description`, `$icon`, `$userCount`
- **`profiles`** — Profiles list: `$link`, `$name`, `$avatar`, `$status`, `$isVerified`, `$followerCount`
- **`answers`** — Answers list: `$link`, `$question`, `$answerCount`, `$lastFollowed`, `$author`, `$answerText`, `$answerMedia`, `$creationTime`, `$updatedTime`, `$numUpvotes`, `$numViews`, `$numSharers`

