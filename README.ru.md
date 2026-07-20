# aparser-mcp

[English](README.md) · **Русский**

[![npm](https://img.shields.io/npm/v/aparser-mcp.svg)](https://www.npmjs.com/package/aparser-mcp)

[MCP](https://modelcontextprotocol.io)-сервер, который отдаёт HTTP API
[A-Parser](https://a-parser.com) в виде инструментов — чтобы ИИ-агент управлял
парсингом напрямую: разовый SERP или подсказка, постановка батч-задач, опрос
статуса и скачивание результатов.

Транспорт: **stdio**. На официальном
[TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk).

## Требования

- Запущенный A-Parser с включённым API (Настройки → API) и его пароль. API
  слушает на `http://<host>:9091/API`.
- Node.js ≥ 18 (для `npx` или сборки из исходников).

## Запуск

Опубликован на npm — установка не нужна, `npx` сам скачает и запустит:

```bash
AP_URL=http://<host>:9091/API AP_PASSWORD=<password> npx -y aparser-mcp
```

<details>
<summary>Или из исходников</summary>

```bash
git clone <this-repo> aparser-mcp && cd aparser-mcp
npm install          # соберёт dist/ через prepare-скрипт
AP_URL=http://<host>:9091/API AP_PASSWORD=<password> npm start
```
</details>

## Настройка

Сервер читает три переменные окружения:

| Переменная    | Обяз. | Описание                                                        |
|---------------|-------|-----------------------------------------------------------------|
| `AP_URL`      | да    | Базовый URL API, напр. `http://127.0.0.1:9091/API` (`/API` допишется сам). |
| `AP_PASSWORD` | да    | Пароль API из веб-интерфейса A-Parser.                          |
| `AP_TIMEOUT`  | нет   | Таймаут HTTP-запроса в секундах (по умолчанию `130`).           |

## Подключение к Claude Code

```bash
claude mcp add aparser \
  --env AP_URL=http://<host>:9091/API \
  --env AP_PASSWORD=<password> \
  -- npx -y aparser-mcp
```

Или в `.mcp.json` / конфиг своего MCP-клиента:

```json
{
  "mcpServers": {
    "aparser": {
      "command": "npx",
      "args": ["-y", "aparser-mcp"],
      "env": {
        "AP_URL": "http://<host>:9091/API",
        "AP_PASSWORD": "<password>"
      }
    }
  }
}
```

## Как пользоваться — просто спроси

Когда сервер и скил `aparser` установлены, спрашивай обычным языком — скил сам
выберет парсер, гео и формат вывода:

- **«апарсер, найди позиции сайта `domain.com` по запросам: `запрос1`, `запрос2` по Сербии»**
  → `SE::Google::Position` на google.rs (`gl=rs`, `hl=sr`) → позиция по каждому ключу.
- **«апарсер, подсказки Google по `buy iphone`»** → автодополнение (Suggest).
- **«апарсер, топ-20 выдачи Google по `best running shoes` по Испании»** → ссылки.

Больше конкретных примеров вызовов: [`skills/aparser/examples.ru.md`](skills/aparser/examples.ru.md).

## Инструменты

| Инструмент     | Что делает |
|----------------|------------|
| `ping`         | Проверка связи. Возвращает `"pong"`. |
| `info`         | Статус сервера: задач в очереди, pid, список доступных парсеров. |
| `list_parsers` | Только имена парсеров (напр. `SE::Google`, `SE::Google::Suggest`). |
| `parser_info`  | Схема полей результата парсера (`arrays` + `flat`) для `resultsFormat`. |
| `get_proxies`  | Живые прокси из чекеров: `{"ip:port": ["type", ...]}`. |
| `one_request`  | Один парс **синхронно**, результат сразу. Для разовых проверок. |
| `add_task`     | Поставить **батч**-задачу с записью в файл. Возвращает id задачи. |
| `task_state`   | Статус и живая статистика задачи. |
| `wait_task`    | Опрашивает задачу до завершения; возвращает финальный статус. |
| `task_results` | Одноразовый URL на скачивание файла результатов. |

### `one_request` против `add_task`

- **`one_request`** — синхронно, один запрос, результат в ответе. Для подсказки,
  одного SERP, проверки одной страницы.
- **`add_task`** — очередь, много запросов, результат в файл на сервере. Дальше
  `wait_task`, затем `task_results`.

### Стек парсеров и resultsFormat

`add_task` принимает стек `parsers` — список записей `[имя, пресет, ...оверрайды]`:

```json
[["SE::Google", "default"]]
```

В `results_format` `$p1` — первая запись стека, `$p2` — вторая и т.д. Поля парсера
смотри через `parser_info("SE::Google")`:

```
$p1.serp.format('$link; $anchor\n')
```

Оверрайды (в `one_request.options` или в записи `parsers`) имеют вид
`{"type": "override", "id": "<param_id>", "value": <значение>}`.

## Примеры

Готовые к копированию примеры запросов — подсказки, выдача, проверка позиций с гео,
решение капчи, desktop/mobile, батчи — в
[`skills/aparser/examples.ru.md`](skills/aparser/examples.ru.md).

## Скил-компаньон (`aparser`)

В каталоге [`skills/aparser/`](skills/aparser/) лежит скил для Claude Code — он учит агента, *когда и
как* звать эти инструменты: имена парсеров, пресеты, гео, `resultsFormat` и формат
запроса для проверки позиций. Установка:

```bash
# проще всего — через skills.sh (ставит во все поддерживаемые агенты):
npx skills add izzipizzy/aparser-mcp

# или вручную как личный скил Claude Code:
cp -r skills/aparser ~/.claude/skills/aparser
```

После этого он подхватывается автоматически при вопросах про позиции/выдачу/подсказки
A-Parser. (Внутри плагина `izzy` это скил `izzy:aparser`.) См.
[`skills/aparser/SKILL.md`](skills/aparser/SKILL.md) и [`skills/aparser/api-reference.md`](skills/aparser/api-reference.md).

## Заметки

- Парсерам по поисковикам нужны рабочие прокси. Если `one_request` висит или
  падает — проверь `get_proxies` и настройки прокси у парсера в A-Parser.
- Секреты в репозитории не хранятся. Держи `AP_PASSWORD` в конфиге MCP-клиента
  или в окружении.

## Разработка

```bash
npm install     # зависимости + сборка
npm run build   # компиляция src/ -> dist/
npm start       # запуск собранного сервера (нужны AP_URL / AP_PASSWORD)
```

Исходник — один файл: [`src/index.ts`](src/index.ts).
