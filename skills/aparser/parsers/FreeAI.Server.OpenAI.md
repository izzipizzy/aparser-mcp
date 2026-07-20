# FreeAI::Server::OpenAI

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `FreeAI_ChatGPT_preset` | `default` |  |
| `FreeAI_Copilot_preset` | `default` |  |
| `FreeAI_DeepAI_preset` | `default` |  |
| `FreeAI_GoogleAI_preset` | `default` |  |
| `FreeAI_Kimi_preset` | `default` |  |
| `FreeAI_Perplexity_preset` | `default` |  |
| `apiKey` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | *(empty)* | Per-result output template used by oneRequest/preset |
| `listenHost` | `127.0.0.1` |  |
| `listenPort` | `3000` |  |
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
- `$data` — Raw data

