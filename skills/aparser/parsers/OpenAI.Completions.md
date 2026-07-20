# OpenAI::Completions

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `api_domain` | `api.openai.com` |  |
| `api_key` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `Used tokens: $total_tokens, Answer:\n$answer\n` | Per-result output template used by oneRequest/preset |
| `frequency_penalty` | `0` |  |
| `max_tokens` | `256` |  |
| `model` | `babbage-002` |  |
| `presence_penalty` | `0` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `temperature` | `0.7` |  |
| `timeout` | `600` | Per-request timeout (seconds) |
| `top_p` | `1` |  |
| `useproxy` | `0` | Use proxies (1/0) |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$completion_tokens` — Completion tokens
- `$prompt_tokens` — Prompt tokens
- `$total_tokens` — Total tokens
- `$answer` — Answer
- `$data` — Raw data

