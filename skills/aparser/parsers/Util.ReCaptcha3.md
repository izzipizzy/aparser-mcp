# Util::ReCaptcha3

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$resp ($error)\n` | Per-result output template used by oneRequest/preset |
| `isEnterprise` | `0` |  |
| `key` | *(empty)* |  |
| `max_time` | `300` |  |
| `minScore` | `0.3` |  |
| `pageAction` | *(empty)* |  |
| `prov_url` | *(empty)* |  |
| `provider` | `anticaptcha` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
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
- `$resp` — Recaptcha response
- `$error` — Error message
- `$data` — Raw data

