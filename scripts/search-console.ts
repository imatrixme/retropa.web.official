import { mkdir, writeFile } from "node:fs/promises"
import { homedir } from "node:os"
import { resolve } from "node:path"
import { googleAccess } from "./google-access"

const options = process.argv.slice(2)
if (options.includes("--help")) {
  console.log("Usage: bun run search-console [--days 28] [--end YYYY-MM-DD]\nCollects final Web search evidence for retropa.com and the preceding equal-length window. No external writes.")
  process.exit(0)
}
for (let index = 0; index < options.length; index += 2) {
  if (!["--days", "--end"].includes(options[index]) || !options[index + 1]) throw new Error("Expected --days NUMBER or --end YYYY-MM-DD")
}
const argument = (name: string) => options.includes(name) ? options[options.indexOf(name) + 1] : undefined
const days = Number(argument("--days") ?? 28)
if (!Number.isInteger(days) || days < 1 || days > 90) throw new Error("--days must be between 1 and 90")
const day = 86_400_000
const format = (time: number) => new Date(time).toISOString().slice(0, 10)
const requestedEnd = argument("--end") ?? format(Date.now() - 3 * day)
const end = Date.parse(`${requestedEnd}T00:00:00Z`)
if (!/^\d{4}-\d{2}-\d{2}$/.test(requestedEnd) || !Number.isFinite(end) || format(end) !== requestedEnd || end > Date.now() - day) throw new Error("--end must be a valid past date")
const windows = {
  current: { startDate: format(end - (days - 1) * day), endDate: requestedEnd },
  previous: { startDate: format(end - (2 * days - 1) * day), endDate: format(end - days * day) },
}
const site = "sc-domain:retropa.com"
const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`
const request = await googleAccess()
type Row = { keys?: string[]; clicks: number; impressions: number; ctr: number; position: number }
const queries = [
  { id: "domainDaily", dimensions: ["date"], officialOnly: false },
  { id: "officialDaily", dimensions: ["date"], officialOnly: true },
  { id: "officialPages", dimensions: ["page"], officialOnly: true },
  { id: "officialQueries", dimensions: ["query"], officialOnly: true },
  { id: "officialQueryPages", dimensions: ["query", "page"], officialOnly: true },
  { id: "officialCountries", dimensions: ["country"], officialOnly: true },
]
const evidence: Record<string, unknown> = {}
for (const [window, range] of Object.entries(windows)) {
  for (const query of queries) {
    const body = {
      ...range, type: "web", dataState: "final", aggregationType: "auto", dimensions: query.dimensions, rowLimit: 25000,
      ...(query.officialOnly ? { dimensionFilterGroups: [{ filters: [{ dimension: "page", operator: "includingRegex", expression: "^https://retropa\\.com/" }] }] } : {}),
    }
    const rows: Row[] = []
    const batches: unknown[] = []
    let status = "observed"
    let reason: string | undefined
    let aggregation: string | undefined
    let capped = false
    for (let startRow = 0; startRow < 100000; startRow += body.rowLimit) {
      try {
        const result = await request(endpoint, { ...body, startRow })
        batches.push({ startRow, ...result, response: result.status === "observed" ? { ...result.response, rows: undefined } : undefined })
        if (result.status !== "observed") { status = rows.length ? "partial" : "unavailable"; reason = result.reason; break }
        aggregation = result.response.responseAggregationType
        const batch: Row[] = result.response.rows ?? []
        rows.push(...batch)
        if (batch.length < body.rowLimit) break
        if (startRow + body.rowLimit >= 100000) capped = true
      } catch (error) {
        status = rows.length ? "partial" : "unavailable"
        reason = error instanceof Error ? error.message : "Request failed"
        break
      }
    }
    evidence[`${window}.${query.id}`] = {
      source: "google_search_console", endpoint, requestedAt: new Date().toISOString(), request: body,
      status, reason, responseAggregationType: aggregation, rows, batches, rowCount: rows.length, capped,
      coverage: "API-exposed rows only; anonymous queries and upstream top-row limits can omit data even after pagination.",
    }
    console.log(`${window}.${query.id}: ${status}, ${rows.length} rows`)
  }
}
const directory = resolve(homedir(), ".retropa/official-website/reports")
await mkdir(directory, { recursive: true, mode: 0o700 })
const path = resolve(directory, `search-${new Date().toISOString().replace(/[:.]/g, "-")}.json`)
await writeFile(path, JSON.stringify({ schemaVersion: 1, site, generatedAt: new Date().toISOString(), windows, evidence,
  interpretation: "Website observations, not market search volume or AI citation counts. Page-filtered and domain aggregation differ. Query omissions are not zero demand. Periods are not a causal experiment.",
}, null, 2), { mode: 0o600 })
console.log(JSON.stringify({ path, windows }, null, 2))
