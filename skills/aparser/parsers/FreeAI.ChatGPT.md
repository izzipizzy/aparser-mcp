# FreeAI::ChatGPT

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `debugScr` | `0` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query\n$answer\n` | Per-result output template used by oneRequest/preset |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `ses` | `1` |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `websearch` | `0` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$answer` — Answer
- `$model` — Used model
- `$data` — Raw data

### Array fields (use `.format()`)

- **`images`** — Images: `$image`, `$thumb`, `$page`, `$title`
- **`sources`** — Sources: `$type`, `$link`, `$anchor`, `$snippet`, `$icon`
- **`products`** — Products: `$page`, `$name`, `$price`, `$desc`, `$image`

