---
name: aparser
description: Use when parsing or scraping through A-Parser — checking Google/Bing/Yandex positions of a site, collecting SERPs, suggestions, keyword data, or running any A-Parser task via its API/MCP server. Triggers on "A-Parser", "aparser", "парсинг позиций", "сбор выдачи", "проверить позиции сайта", "собрать подсказки".
license: MIT
---

# aparser

## Overview
Управление A-Parser (парсер SERP/подсказок/кейвордов и т.д.) из агента через
**MCP-сервер `aparser`**. Сервер оборачивает HTTP API A-Parser (`:9091/API`) в
инструменты. Полный справочник методов — [api-reference.md](api-reference.md).

## When to use
- Проверить позиции сайта в Google/Bing/Yandex по списку ключей (+ гео).
- Собрать выдачу (ссылки/анкоры), подсказки, related, PAA.
- Прогнать любой установленный парсер A-Parser над списком запросов.
- Управлять задачами (очередь, статус, скачивание результатов).

Инструменты (в Claude Code — `mcp__aparser__<tool>`):
`ping`, `info`, `list_parsers`, `parser_info`, `get_proxies`,
`one_request`, `add_task`, `task_state`, `wait_task`, `task_results`.

Готовые примеры запросов: [`examples.md`](examples.md) (EN) ·
[`examples.ru.md`](examples.ru.md) (RU) — подсказки, выдача, позиции с гео,
капча (XEvil), desktop/mobile, батчи.

## Setup (один раз)
MCP-сервер: пакет `aparser-mcp` (TypeScript, stdio, ставится через npx). Скил обращается
**только к твоему собственному серверу A-Parser** (`AP_URL`); доступ читается из переменных
окружения, нигде не хардкодится, не логируется и не отправляется третьим сторонам.
```bash
# положи адрес и ключ доступа своего A-Parser в окружение (не в скил):
export AP_URL="http://YOUR_HOST:9091/API"
export AP_PASSWORD="YOUR_A_PARSER_API_KEY"
# зарегистрируй MCP, пробросив эти переменные:
claude mcp add aparser --env AP_URL="$AP_URL" --env AP_PASSWORD="$AP_PASSWORD" -- npx -y aparser-mcp
```
`ping` должен вернуть `pong`.

## Дефолты (зашиты в MCP, переопределяемы)
`add_task`/`one_request` подставляют по умолчанию — под лимит прокси этого сервера:
- **`config_preset="50th"`** — полный пресет (50 потоков). На сервере включён
  **«Динамический лимит потоков»** (Настройки → Общие настройки) + «Общий лимит потоков»
  = лимиту прокси (~50), поэтому A-Parser сам держит **сумму** активных потоков ≤ лимиту и
  раздаёт их между заданиями по приоритету (`priority`/`prio` 1–100). Бюджет вручную бить
  (старый `th17` = 3×17) больше не нужно. Переопредели через env `AP_CONFIG_PRESET` или
  аргументом. (Если динамический лимит вдруг выключат — вернись к `th17` под макс.активных=3.)
- **`proxyretries=40`** — подставляется в каждый парсер стека, где опция есть и её не задали
  (env `AP_PROXYRETRIES`). Это сток-дефолт A-Parser, ок для `http`/`one_request`. **На
  браузере (`engine=chrome`) 40 = зависания на последнем ключе** — там ставь `5-15` явно
  (см. «Капча, ретраи, скорость»).
- **`do_log=true`** (`doLog:"db"`) — логи в БД A-Parser (смотреть в UI).

По сырому API этих дефолтов нет — задавай `configPreset`, `proxyretries`, `doLog:"db"` сам.

## Без MCP — сырой HTTP API (когда MCP тупит/недоступен)
MCP — лишь тонкая обёртка над HTTP. Всё то же дёргается напрямую на твоём сервере: POST на
`$AP_URL`, тело JSON `{"password":"$AP_PASSWORD","action":"<method>","data":{...}}` (ключ
доступа берётся из окружения, см. Setup), ответ `{"success":1,"data":...}`. Полный список
методов и шаблон `addTask` — в [api-reference.md](api-reference.md).
```bash
# ping (ключ доступа подставляется из окружения — в тексте его нет)
curl -s "$AP_URL" -H 'Content-Type: application/json' \
  -d "{\"password\":\"$AP_PASSWORD\",\"action\":\"ping\"}"

# разовая проверка позиции (синхронно, лог в data.logs по умолчанию)
curl -s "$AP_URL" -H 'Content-Type: application/json' \
  -d "{\"password\":\"$AP_PASSWORD\",\"action\":\"oneRequest\",\"data\":{\"query\":\"example.com my keyword\",\"parser\":\"SE::Google::Position\",\"preset\":\"default\",\"rawResults\":1,\"options\":[{\"type\":\"override\",\"id\":\"gl\",\"value\":\"us\"}]}}"
```
Батч: `addTask` → вернёт `taskUid`; опрашивай `getTaskState`; готово → `getTaskResultsFile`
(одноразовый URL на скачивание). `addTask` требует ПОЛНЫЙ набор полей (`queryFormat` — массив,
`doLog` — enum `no|memory|db`, `keepUnique:"No"`, `resultsUnique:"no"`, …) — бери шаблон из
api-reference.md. Логи задач (`doLog:"db"`) через API **не скачать** — смотри в UI A-Parser;
для диагностики используй `oneRequest` (лог в `data.logs`) или `getTaskState.stats`.

## one_request vs add_task
- **`one_request`** — 1 запрос, результат синхронно. Для разовой проверки
  (одна подсказка, одна выдача, одна страница).
- **`add_task`** — много запросов, результат пишется в файл на сервере. Затем
  `wait_task` → `task_results` (одноразовый URL на скачивание). Для батчей.

## Настройки парсеров (отдельные файлы)
Опции (id + дефолт + описание) и поля результата каждого парсера — в
[`parsers/`](parsers/README.md), по файлу на парсер (напр.
[`parsers/SE.Google.md`](parsers/SE.Google.md),
[`parsers/SE.Google.Position.md`](parsers/SE.Google.Position.md)). Сгенерированы
с живого сервера скриптом `scripts/gen-parser-docs.mjs` — перегенерируй при
обновлении A-Parser. **Перед сборкой задачи открой файл нужного парсера.**

## Как строить запрос
1. `list_parsers` — точное имя парсера (`SE::Google`, `SE::Google::Suggest`,
   `SE::Google::Position`, `SE::Bing`, `SE::Yandex`, ...).
2. Открой `parsers/<Parser>.md` — валидные `id` опций (+ дефолты) и поля результата
   (`arrays` типа `serp` и `flat` типа `$totalcount`). `parser_info(...)` даёт то же
   с сервера онлайн.
3. Опции парсера меняются override-объектами внутри записи стека:
   `parsers=[["SE::Google","default", {"type":"override","id":"pagecount","value":2}]]`.
4. `results_format`: `$p1` = первая запись стека. Массивы через `.format()`:
   `"$p1.serp.format('$link;$anchor\\n')"`.

## Валидация опций (чтобы не ронять A-Parser)
Невалидный override-`id` (опечатка, несуществующая опция) может уронить/дестабилизировать
A-Parser. **MCP-инструменты `add_task`/`one_request` проверяют это сами** — сверяют имя
парсера (`info.availableParsers`) и каждый override-`id` со списком опций
(`getParserPreset`, кешируется) и при ошибке **не постят**, а возвращают понятную ошибку
со списком валидных id.

**По сырому API проверяй сам ПЕРЕД `addTask`/`oneRequest`:**
1. имя парсера ∈ `info.availableParsers`;
2. каждый `{"type":"override","id":X,...}` — что `X` есть в ключах
   `getParserPreset(parser,"default")` (для линкованных пресетов допустим `X` вида
   `Util_ReCaptcha2_preset.key` — проверяй базу до точки);
3. постить только валидные — иначе задача может не создаться или подвесить сервер.

## Гео (страна) в SE::Google
Задаётся override-ами: `gl` (страна, напр. `ar`), `hl` (язык интерфейса, напр.
`es`), `domain` (гугл-домен, напр. `www.google.com.ar`). При необходимости — `location`.

## Проверка позиций: SE::Google::Position (важный формат!)
Парсер берёт **первый токен запроса как проверяемый домен**, остальное — ключ.
То есть вход должен быть `<домен> <ключ>`:
```
example.com my keyword   → домен=example.com, ключ="my keyword"
```
Семантика позиции: число = ранг; `0` = выдача распарсилась, домена нет в глубине
(`pagecount` × ~10); `none` = **запрос не отработал** (пустая выдача/капча) — перегнать.
Поля результата: `$p1.key` (ключ), `$p1.position`, `$p1.link`, `$p1.domain`.
Наследует все опции SE::Google → см. [`parsers/SE.Google.md`](parsers/SE.Google.md):
**`device` (desktop/mobile) меняет выдачу и позиции**, `engine` (http/browser) — как ходим.

Пример задачи (позиции по стране Аргентина):
```
add_task(
  parsers=[["SE::Google::Position","default",
    {"type":"override","id":"gl","value":"ar"},
    {"type":"override","id":"hl","value":"es"},
    {"type":"override","id":"domain","value":"www.google.com.ar"},
    {"type":"override","id":"pagecount","value":3}]],
  queries=[f"{site} {kw}" for kw in keywords],
  results_format="$p1.key;$p1.position;$p1.link\\n",
  results_prepend="keyword;position;link\\n")
```

## Капча, ретраи, скорость (важно)
- **Браузер (`engine=chrome`) сам обходит бОльшую часть капчи** через JS-редирект —
  часто вообще без решалки. `engine=http` быстрее, но на флагнутых прокси чаще ловит recaptcha.
- **Решалка (`Util_ReCaptcha2_preset`) ненадёжна и медленная.** На практике капча
  чистится редиректом браузера, а не солвером; солвер в основном добавляет долгое
  ожидание и не гарантирует решение. Для скорости — **не подключай решалку**:
  `reCaptchaRetries=0` и без `Util_ReCaptcha2_preset`. Рычаг для упрямых пустых — `proxyretries`.
- **`proxyretries` — главный рычаг и причина зависаний на браузере.** Каждая попытка
  ~30-40с (запуск chromium + переход + бан). Безнадёжный капча-ключ грызёт
  `proxyretries` × ~35с, держа активный слот → задача виснет на N-1/N (`activeThreads=1`,
  `curSpeed=0`). Держи **5-15**; пустые добивай отдельным пассом с бОльшим `proxyretries`
  (изолированно — залипнет только мини-пачка).
- **Бюджет потоков = лимит прокси.** Сумма потоков ВСЕХ активных задач ≤ лимиту прокси.
  На этом сервере включён **«Динамический лимит потоков»** + «Общий лимит потоков»=лимиту
  прокси, поэтому ставь полный пресет (`50th`) на любое задание — A-Parser сам держит сумму
  ≤ лимиту и делит по `priority`. (Без динамического лимита — бей вручную: `th17` = 3×17 +
  «Максимум активных заданий»=3.)
- **Быстрый bulk-рецепт** (топ-10, тысячи ключей): `engine=chrome, headless=1,
  device=mobile, pagecount=1, reCaptchaRetries=0` (без решалки), `proxyretries=15,
  emptyResultRetries=3`, пресет на все потоки → десятки-сотни запросов/мин (×10+ к варианту
  с решалкой). Пустые (~10-30%) добери 2-3 пассами, повышая `proxyretries` (15 → 15 → 40).
- **Сниппет/анкор найденного** у `SE::Google::Position` НЕ в плоских полях (`$p1.snippet`
  пуст) — только в массиве `serp`. Выведи `serp` в `results_format` и сматчи по найденной
  `$p1.link`, чтобы достать его `snippet`/`anchor`.
- **Логи задач** (`doLog:"db"`) через API не скачиваются — смотри в UI A-Parser; для
  диагностики гоняй `oneRequest` (лог в `data.logs`) или читай `getTaskState.stats`.

## Common Mistakes
- **Позиции без префикса домена.** `SE::Google::Position` съест первое слово ключа
  как домен. Всегда `"<домен> <ключ>"`.
- **`$taskId` в имени файла.** Не валидный макрос → файл не создаётся, `task_results`
  вернёт «File not exists». Используй дефолт `$datefile.format().txt` или статичное имя.
- **Поисковые парсеры без прокси.** `SE::Google` и т.п. требуют рабочих прокси. Проверь `get_proxies`.
- **Массовые `none` = капча/баны, а не «не в топе».** Как чинить (и быстро) — раздел
  «Капча, ретраи, скорость» выше.
- **Забыть про device.** desktop и mobile дают разную выдачу → разные позиции.
  Фиксируй `device` осознанно.
- **Ждать долгий батч синхронно.** `wait_task` с таймаутом; если не успел —
  вернёт статус, а задача продолжит крутиться. Забери позже через `task_results`.
- **Ручной curl вместо MCP.** Сначала MCP-инструменты; сырой HTTP (api-reference.md)
  — только для методов, которых нет в сервере.
