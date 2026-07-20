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
MCP-сервер: пакет `aparser-mcp` (TypeScript, stdio, ставится через npx).
```bash
claude mcp add aparser \
  --env AP_URL=http://<host>:9091/API --env AP_PASSWORD=<pass> \
  -- npx -y aparser-mcp
```
`ping` должен вернуть `pong`. Секреты — только в env, не в скиле.

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

## Common Mistakes
- **Позиции без префикса домена.** `SE::Google::Position` съест первое слово ключа
  как домен. Всегда `"<домен> <ключ>"`.
- **`$taskId` в имени файла.** Не валидный макрос → файл не создаётся, `task_results`
  вернёт «File not exists». Используй дефолт `$datefile.format().txt` или статичное имя.
- **Поисковые парсеры без прокси.** `SE::Google` и т.п. требуют рабочих прокси;
  на плохих прокси — recaptcha и баны. Проверь `get_proxies`. Позиционный парсер
  запускает headless-chromium и медленный — это норм, не перезапускай.
- **Массовые `none` = стена капчи, а не «не в топе».** Google (особенно локальные
  домены типа google.fr) отдаёт recaptcha; она пробивается только если настроена
  решалка (`Util_ReCaptcha2_preset`/`Util_AntiGate_preset`) и прокси не флагнуты.
  Помогают ретраи (`proxyretries`, `emptyResultRetries`, `reCaptchaRetries`),
  резидентные прокси; иначе — перегнать сбойные ключи.
- **Забыть про device.** desktop и mobile дают разную выдачу → разные позиции.
  Фиксируй `device` осознанно.
- **Ждать долгий батч синхронно.** `wait_task` с таймаутом; если не успел —
  вернёт статус, а задача продолжит крутиться. Забери позже через `task_results`.
- **Ручной curl вместо MCP.** Сначала MCP-инструменты; сырой HTTP (api-reference.md)
  — только для методов, которых нет в сервере.
