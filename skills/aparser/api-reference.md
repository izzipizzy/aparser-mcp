# A-Parser HTTP API — reference

Raw API reference. The `aparser` MCP server wraps the common methods; use this
when you need a method the server doesn't expose, or to call the API directly.

## Transport

Every call is one `POST` to `http://<host>:9091/API` with a JSON body:

```json
{ "password": "<api-password>", "action": "<method>", "data": { ... } }
```

Response: `{"success": 1, "data": ...}` on success, or `{"success": 0, "msg": "..."}`
on error. `data` shape depends on the method.

## Methods

| action | data fields | returns |
|--------|-------------|---------|
| `ping` | — | `"pong"` |
| `info` | — | `{tasksInQueue, pid, availableParsers: [...]}` |
| `oneRequest` | `query, parser, preset, configPreset, rawResults?, options?` | `{logs, results:[...]}` (raw) or `{resultString}` |
| `bulkRequest` | `queries:[...], threads, parser, preset, configPreset, ...` | `{logs, results:[...]}` |
| `addTask` | full task config (see below) | `taskUid` (string) |
| `getTaskState` | `taskUid` | `{status, stats, state:{queriesDoneCount, resultsCount, ...}}` |
| `getTaskConf` | `taskUid` | full task config |
| `getTasksList` | `completed?` (1 for done) | `[taskUid, ...]` |
| `getTaskResultsFile` | `taskUid` | single-use download URL |
| `deleteTaskResultsFile` | `taskUid` | `success` |
| `changeTaskStatus` | `taskUid, toStatus` (`starting`\|`pausing`\|`stopping`\|`deleting`) | `success` |
| `moveTask` | `taskUid, direction` (`start`\|`end`\|`up`\|`down`) | `success` |
| `getParserInfo` | `parser` | `{results:{arrays, flat}}` — result fields |
| `getParserPreset` | `parser, preset` | full option map (option ids + defaults) |
| `getProxies` | `checkers?` | `{"ip:port": ["type", ...]}` |
| `getAccountsCount` | — | `{"SE::Yandex": N}` |
| `changeProxyCheckerState` | `checker, state` (1\|0) | `success` |
| `update` | — | updates + restarts A-Parser |

`task status` values: `starting`, `working`, `completed`, `pausing`, `paused`,
`stopping`, `deleting`.

## oneRequest

```json
{"password":"pass","action":"oneRequest","data":{
  "query":"buy iphone","parser":"SE::Google::Suggest","preset":"default",
  "configPreset":"default","rawResults":1}}
```

- `rawResults:1` → structured `results` array. Omit → one formatted `resultString`.
- `options`: per-request overrides, each `{"type":"override","id":"<paramId>","value":<v>}`.

## addTask — full config

A-Parser rejects a task if any required field is missing. Minimum working body:

```json
{"password":"pass","action":"addTask","data":{
  "preset":"default",
  "configPreset":"default",
  "parsers":[["SE::Google","default",
     {"type":"override","id":"pagecount","value":2}]],
  "queryFormat":["$query"],
  "queriesFrom":"text",
  "queries":["query one","query two"],
  "resultsSaveTo":"file",
  "resultsFileName":"$datefile.format().txt",
  "resultsFormat":"$p1.serp.format('$link;$anchor\\n')",
  "resultsPrepend":"", "resultsAppend":"",
  "additionalFormats":[],
  "resultsUnique":"no",
  "resultsOptions":{"overwrite":false,"writeBOM":false},
  "uniqueQueries":false, "keepUnique":"No", "saveFailedQueries":false,
  "moreOptions":false,
  "iteratorOptions":{"onAllLevels":false,"queryBuildersAfterIterator":false,"queryBuildersOnAllLevels":false},
  "queryBuilders":[], "resultsBuilders":[], "configOverrides":[],
  "doLog":"no", "limitLogsCount":"0",
  "useResultsFileAsQueriesFile":false,
  "runTaskOnComplete":null, "runTaskOnCompleteConfig":"default",
  "toolsJS":"", "prio":5, "removeOnComplete":false, "callURLOnComplete":""}}
```

### Field gotchas (verified against a live server)

- `queryFormat` is an **array**: `["$query"]`, not a string.
- `doLog` is an **enum**: `"no"` | `"memory"` | `"db"` (not 0/1).
- `keepUnique` is `"No"`/`"Yes"` (string); `resultsUnique` is `"no"` or a field name.
- `resultsFileName` supports macros like `$datefile.format()`. **`$taskId` is NOT a
  valid macro** — a task using it produces no downloadable file.
- `queriesFrom:"file"` → provide `queriesFile:["/path"]` instead of `queries`.

## Parser stack & resultsFormat

- `parsers` is a stack; each entry `[name, preset, ...overrideObjects]`.
- In `resultsFormat`, `$p1` = first stack entry, `$p2` = second, etc.
- Nested arrays use `.format()`: `$p1.serp.format('$link;$anchor\n')`.
- Flat fields are referenced directly: `$p1.totalcount`, `$query`.
- Call `getParserInfo(parser)` to list a parser's `arrays` and `flat` fields.

## Overrides

`{"type":"override","id":"<paramId>","value":<value>}` — get valid `id`s from
`getParserPreset(parser, preset)`. `{"type":"options","id":"<id>","value":<v>}`
toggles module option flags.
