# Примеры запросов

Готовые к копированию примеры для инструментов MCP `aparser`. Все проверены на
живом A-Parser. В Claude Code инструменты называются `mcp__aparser__<tool>`; ниже —
аргументы, которые передаёшь каждому инструменту. ([English version](examples.md))

---

## 1. Проверка связи и разведка

```
ping()                       → "pong"
list_parsers()               → ["SE::Google", "SE::Google::Suggest", ...]
parser_info("SE::Google")    → поля результата (serp, ads, paa, flat: $totalcount ...)
```

## 2. Google-подсказки (быстро, без прокси/капчи)

```
one_request(
  query="buy iphone",
  parser="SE::Google::Suggest"
)
→ data.results[0].results = ["buy iphone 17", "buy iphone 16", ...]
```

## 3. Одна выдача — ссылки + анкоры

```
one_request(
  query="best running shoes",
  parser="SE::Google",
  raw_results=false,
  options=[{"type":"override","id":"pagecount","value":1}]
)
→ data.resultString   # отформатировано пресетом
```

Структурой вместо строки: `raw_results=true`, читай `data.results[0].serp`.

## 4. Проверка позиции сайта в Google (одна страна)

`SE::Google::Position` берёт **первый токен запроса как проверяемый домен**,
остальное — ключ. Страна задаётся `gl` / `hl` / `domain`.

```
add_task(
  parsers=[["SE::Google::Position","default",
    {"type":"override","id":"gl","value":"fr"},
    {"type":"override","id":"hl","value":"fr"},
    {"type":"override","id":"domain","value":"www.google.fr"},
    {"type":"override","id":"pagecount","value":3}]],
  queries=[
    "example.com blue running shoes",
    "example.org best coffee maker"
  ],
  results_format="$p1.query.orig;$p1.position;$p1.link\n"
)
→ taskUid
```

Дальше:

```
wait_task(task_uid=<id>)         → {"status":"completed", ...}
task_results(task_uid=<id>)      → одноразовый URL на скачивание
```

Строки результата: `example.com blue running shoes;6;https://example.com/`.
`position`: число = ранг; `0` = выдача распарсилась, но домена нет в `pagecount×10`;
`none` = запрос не отработал (пусто/капча) — перегнать.

## 5. Проверка позиций сквозь Google reCAPTCHA

Google отдаёт reCAPTCHA датацентр-прокси. Она решается только если настроен пресет
решалки. Один раз создай в UI A-Parser пресет `Util::ReCaptcha2` (например с именем
`xevil`) с provider + key + URL сервиса, потом ссылайся на него по имени и добавь
ретраи. `engine=http` быстрее браузера и тоже решает капчу.

```
add_task(
  parsers=[["SE::Google::Position","default",
    {"type":"override","id":"gl","value":"fr"},
    {"type":"override","id":"hl","value":"fr"},
    {"type":"override","id":"domain","value":"www.google.fr"},
    {"type":"override","id":"engine","value":"http"},
    {"type":"override","id":"pagecount","value":3},
    {"type":"override","id":"Util_ReCaptcha2_preset","value":"xevil"},
    {"type":"override","id":"proxyretries","value":40},
    {"type":"override","id":"emptyResultRetries","value":12},
    {"type":"override","id":"reCaptchaRetries","value":6}]],
  queries=["example.com my keyword"],
  config_preset="50th"                    # больше потоков = быстрее батчи
)
```

> Подводный камень UI: в некоторых сборках A-Parser поля `Util::ReCaptcha2`
> подписаны неверно — `redis_host` (= key), `redis_port` (= URL сервиса),
> `redis_password` (= provider). Заполни их; проверь чтением пресета через
> `getParserPreset`.

## 6. Десктоп против мобайла (разная выдача)

На мобайле выдача часто другая. Добавь `device`:

```
# desktop — по умолчанию; для мобайла:
{"type":"override","id":"device","value":"mobile"}
```

Прогони одни и те же ключи с `desktop` и с `mobile`, чтобы сравнить.

## 7. Проверка конкретного URL (а не только домена)

По умолчанию `SE::Google::Position` матчит домен. Чтобы требовать точную страницу:

```
{"type":"override","id":"matchtype","value":"url"}   # domain | tld | url
```

## 8. Батч-задача → ожидание → скачивание (полный цикл)

```
tid = add_task(
  parsers=[["SE::Google","default",
    {"type":"override","id":"pagecount","value":2}]],
  queries=["keyword one","keyword two","keyword three"],
  results_format="$p1.serp.format('$link;$anchor\n')",
  config_preset="50th"
)
wait_task(task_uid=tid, interval=5, timeout=900)
url = task_results(task_uid=tid)          # затем скачай файл по url
```

Если `wait_task` истёк по таймауту — задача продолжает крутиться на сервере,
забери позже через `task_results`. Живые прокси в любой момент — `get_proxies()`.
