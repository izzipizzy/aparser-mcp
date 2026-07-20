# Util::AntiGate

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `calc` | `0` |  |
| `domain` | *(empty)* | Search engine domain, e.g. www.google.fr |
| `download_timeout` | `60` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `fakeanswer` | `0` |  |
| `formatresult` | `$query - $answer ($error)\n` | Per-result output template used by oneRequest/preset |
| `is_russian` | `0` |  |
| `key` | *(empty)* |  |
| `logCaptcha` | `0` |  |
| `max_len` | `0` |  |
| `maxwait` | `300` |  |
| `min_len` | `0` |  |
| `noslotinterval` | `2` |  |
| `noslotretries` | `5` |  |
| `numeric` | `0` |  |
| `phrase` | `0` |  |
| `provider` | `anticaptcha` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `regsense` | `0` |  |
| `reportBad` | `1` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `retries` | `5` |  |
| `stopOnZero` | `1` |  |
| `timeout` | `15` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `wait` | `5` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$answer` — Captcha answer
- `$error` — Error
- `$data` — Raw data

