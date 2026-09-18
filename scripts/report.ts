import { mkdir, writeFile } from "node:fs/promises"
import { homedir } from "node:os"
import { resolve } from "node:path"
import { googleAccess } from "./google-access"

const request = await googleAccess()
const property = process.env.RETROPA_GA4_PROPERTY_ID ?? "523609540"
if (!/^\d+$/.test(property)) throw new Error("RETROPA_GA4_PROPERTY_ID must be numeric")
const daysIndex = process.argv.indexOf("--days")
const days = daysIndex < 0 ? 14 : Number(process.argv[daysIndex + 1])
if (!Number.isInteger(days) || days < 1 || days > 90) throw new Error("--days must be between 1 and 90")
const date = (value: Date) => value.toISOString().slice(0, 10)
const end = new Date()
end.setUTCDate(end.getUTCDate() - 3)
const start = new Date(end)
start.setUTCDate(start.getUTCDate() - days + 1)
const range = { startDate: date(start), endDate: date(end) }
const streams = await request(`https://analyticsadmin.googleapis.com/v1beta/properties/${property}/dataStreams`)
const eventSummary = await request(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, {
  dateRanges: [range], dimensions: [{ name: "date" }, { name: "platform" }, { name: "eventName" }], metrics: [{ name: "eventCount" }, { name: "totalUsers" }], limit: "10000",
})
const metadata = await request(`https://analyticsdata.googleapis.com/v1beta/properties/${property}/metadata`)
const hasMilestone = metadata.status === "observed" && metadata.response.dimensions?.some((dimension: { apiName: string }) => dimension.apiName === "customEvent:milestone")
const clientMilestones = hasMilestone ? await request(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, {
  dateRanges: [range], dimensions: [{ name: "date" }, { name: "platform" }, { name: "customEvent:milestone" }], metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
  dimensionFilter: { filter: { fieldName: "eventName", stringFilter: { value: "growth_funnel_milestone", matchType: "EXACT" } } }, limit: "10000",
}) : { status: "unavailable", reason: "GA4 event-scoped custom dimension milestone is not readable or registered. Do not infer client stages from the parent event count." }
const searchConsole = await request("https://www.googleapis.com/webmasters/v3/sites/sc-domain%3Aretropa.com/searchAnalytics/query", { ...range, dimensions: ["date", "page"], rowLimit: 25000, dataState: "final" })
const searchQueries = await request("https://www.googleapis.com/webmasters/v3/sites/sc-domain%3Aretropa.com/searchAnalytics/query", { ...range, dimensions: ["query"], rowLimit: 25000, dataState: "final" })
const report = {
  schemaVersion: 1, generatedAt: new Date().toISOString(), property, range,
  streams, eventSummary, clientMilestones, searchConsole, searchQueries,
  asc: { status: "not_collected", reason: "Requires matching ASC campaign/cohort export and verified provider token; web clicks are not installs." },
  interpretation: "Raw source evidence only. Empty, unavailable and not_collected are distinct. Rows can be thresholded or truncated; do not sum daily totalUsers into unique period users or join website and client users.",
}
const directory = resolve(homedir(), ".retropa/official-website/reports")
await mkdir(directory, { recursive: true, mode: 0o700 })
const path = resolve(directory, `${new Date().toISOString().replace(/[:.]/g, "-")}.json`)
await writeFile(path, JSON.stringify(report, null, 2), { mode: 0o600 })
console.log(JSON.stringify({ path, range, streams: streams.status === "observed" ? streams.response.dataStreams?.map((stream: { type: string; displayName: string; webStreamData?: { defaultUri: string; measurementId: string } }) => ({ type: stream.type, displayName: stream.displayName, web: stream.webStreamData })) : streams, eventSummary: eventSummary.status, clientMilestones: clientMilestones.status, searchConsole: searchConsole.status, searchQueries: searchQueries.status, asc: "not_collected" }, null, 2))
