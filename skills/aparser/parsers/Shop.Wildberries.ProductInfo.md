# Shop::Wildberries::ProductInfo

> Auto-generated from the live A-Parser API (`default` preset). Option ids and defaults are exact; descriptions are filled in for common options.

## Options

| Option id | Default | Description |
|---|---|---|
| `address` | `Москва` |  |
| `currency` | `RUB` |  |
| `extraquery` | *(empty)* | Extra text appended to every query |
| `formatresult` | `$query:
$brand - $title ($comments;$rating)
Price: $price and discount price: $discountPrice
Description: $description
$photos.format('$url\n')
` | Per-result output template used by oneRequest/preset |
| `lat` | `55.753737` |  |
| `lon` | `37.6201` |  |
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
- `$title` — Title
- `$category` — Category
- `$brand` — Brand
- `$brandSubUrl` — Brand and subject url
- `$sku` — SKU
- `$comments` — Comments count
- `$rating` — Rating
- `$seller` — Seller name
- `$sellerUrl` — Seller url
- `$inn` — Seller INN
- `$trademark` — Seller trademark
- `$legalAddress` — Seller address
- `$ogrn` — Seller OGRN
- `$discountPrice` — Discount price
- `$price` — Price
- `$description` — Description
- `$country` — Country
- `$orders` — Orders count
- `$qty` — Availability count
- `$data` — Raw data

### Array fields (use `.format()`)

- **`photos`** — photos: `$url`
- **`tags`** — search tags: `$tag`
- **`prices`** — prices history: `$date`, `$price`

