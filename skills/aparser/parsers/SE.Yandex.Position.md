# SE::Yandex::Position

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `SE_Yandex_Register_preset` | `default` |  |
| `Util_AntiGate_preset` | `default` |  |
| `accounts` | `offline` |  |
| `authMethod` | `http` |  |
| `custom_lr` | *(empty)* |  |
| `device` | `desktop` | desktop \| mobile |
| `doNotResetSes` | `1` |  |
| `engine` | `http` | Request engine: http \| chrome (browser) |
| `experimentalCaptchaMaxCount` | `5` |  |
| `experimentalConf` | *(empty)* |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `filter` | `moderate` | Google duplicate filter (&filter=) |
| `forceNeuro` | `0` |  |
| `formatresult` | `$domain - $key: $position\n` | Per-result output template used by oneRequest/preset |
| `getPageAttempts` | `5` |  |
| `headless` | `1` | Run the browser engine headless (1/0) |
| `how` | `0` |  |
| `lang` | `[""]` |  |
| `login_antigatepreset` | `default` |  |
| `lr` | `213` | Language restrict (&lr=) |
| `matchtype` | `domain` | Domain match: domain \| tld \| url |
| `notpersonalized` | `1` |  |
| `old_antigatepreset` | `default` |  |
| `pagecount` | `1` | Number of SERP pages to parse |
| `paginationClickBrowser` | `1` |  |
| `parsenotfound` | `1` | Still emit a row when the domain is not found (position 0) |
| `proxyChecker` | `*` | Which proxy checker(s) to pull proxies from ('*' = all) |
| `proxybannedcleanup` | `600` |  |
| `proxyretries` | `10` | Retries with a different proxy on failure/ban |
| `qaCount` | `0` |  |
| `queryformat` | `$query` | How the input line is turned into a query, e.g. $query |
| `removeBadAccounts` | `exceptWrongLP` |  |
| `requestdelay` | `0` | Delay between requests (seconds) |
| `rstr` | *(empty)* |  |
| `scBrowserMaxPages` | `5` |  |
| `searchViaInput` | `0` |  |
| `stopwhenfound` | `1` | Stop parsing once the domain is found |
| `timeout` | `60` | Per-request timeout (seconds) |
| `uselogins` | `0` |  |
| `useproxy` | `1` | Use proxies (1/0) |
| `usesessions` | `1` | Reuse cookies/sessions across requests (1/0) |
| `waitAccounts` | `0` |  |
| `within` | *(empty)* |  |
| `ya_domain` | `ya.ru` |  |

## Result fields

### Flat fields

- `$query` — Formatted query
- `$query.orig` — Original query
- `$query.first` — First query
- `$info.success` — Parsing success
- `$info.retries` — Used retries
- `$info.stats` — Statistics
- `$totalcount` — Total results count
- `$misspell` — Is query misspelling
- `$ai_type` — AI type
- `$ai_answer` — AI answer
- `$domain` — Domain
- `$key` — Check keyword
- `$position` — Domain position
- `$link` — Link in serp

### Array fields (use `.format()`)

- **`ads`** — Ads list: `$domain`, `$link`, `$visiblelink`, `$anchor`, `$snippet`, `$position`, `$page`, `$link1`, `$anchor1`, `$link2`, `$anchor2`, `$link3`, `$anchor3`, `$link4`, `$anchor4`, `$subway`
- **`related`** — Related keywords: `$key`
- **`bulkcheck`** — Bulk domain results: `$domain`, `$position`, `$link`
- **`qa`** — Quick answers list: `$question`, `$answer`, `$link`
- **`positions`** — All domain positions: `$link`, `$position`
- **`serp`** — Main serp list: `$link`, `$anchor`, `$snippet`, `$time`, `$timelast`, `$cachelink`, `$label`, `$label_types`, `$flags`, `$missingWords`
- **`ai`** — AI links: `$link`, `$anchor`
- **`pages`** — Raw data array: `$data`

