# Shop::Yandex::Market

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `SE_Yandex_Register_preset` | `default` |  |
| `Util_AntiGate_preset` | `default` |  |
| `accounts` | `offline` |  |
| `authMethod` | `http` |  |
| `doNotResetSes` | `1` |  |
| `experimentalCaptchaMaxCount` | `5` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$products.format('$title;$cardlink;$imagelink;$rating;$commentscount;$amountfrom;$amountto;$proposalscount;$features;$price;$price_old\n')` | Per-result output template used by oneRequest/preset |
| `login_antigatepreset` | `default` |  |
| `old_antigatepreset` | `default` |  |
| `page_count` | `5` |  |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `removeBadAccounts` | `exceptWrongLP` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `scBrowserMaxPages` | `5` |  |
| `search_region` | *(empty)* |  |
| `timeout` | `60` | Per-request timeout (seconds) |
| `useproxy` | `1` | Use proxies (1/0) |
| `usesessions` | `1` | Reuse cookies/sessions across requests (1/0) |
| `waitAccounts` | `0` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$data` — Raw data

### Array fields (use `.format()`)

- **`products`** — Products list: `$title`, `$cardlink`, `$imagelink`, `$rating`, `$commentscount`, `$amountfrom`, `$amountto`, `$proposalscount`, `$features`, `$bought`, `$views`, `$price`, `$price_old`

