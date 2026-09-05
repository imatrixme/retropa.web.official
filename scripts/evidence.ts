import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { startFAQ } from "../src/content/start-faq"
import { renderToStaticMarkup } from "react-dom/server"

const build = JSON.parse(await readFile("dist/build-evidence.json", "utf8"))
const issues: string[] = []
for (const path of build.paths as string[]) {
  const html = await readFile(`dist${path}index.html`, "utf8")
  const found = { h1: 0, mainText: "", canonical: "", locale: "", alternates: 0, jsonLd: "" }
  const rewriter = new HTMLRewriter()
    .on("html", { element(element) { found.locale = element.getAttribute("lang") ?? "" } })
    .on("h1", { element() { found.h1++ } })
    .on("main", { text(chunk) { found.mainText += chunk.text } })
    .on('link[rel="canonical"]', { element(element) { found.canonical = element.getAttribute("href") ?? "" } })
    .on('link[hreflang]', { element() { found.alternates++ } })
    .on('script[type="application/ld+json"]', { text(chunk) { found.jsonLd += chunk.text } })
    .on('img[src]', { element(element) {
      const source = element.getAttribute("src") ?? ""
      if (source.startsWith("/") && !Bun.file(`dist${source}`).size) issues.push(`${path}: missing image ${source}`)
      if (!element.hasAttribute("alt")) issues.push(`${path}: missing image alt attribute`)
    } })
    .on('a[href]', { element(element) {
      const href = element.getAttribute("href") ?? ""
      if (href.startsWith("https://apps.apple.com/") && !new URL(href).searchParams.has("ct")) issues.push(`${path}: untagged download link`)
      if (href.startsWith("/") && !href.startsWith("//")) {
        const target = new URL(href, "https://retropa.com").pathname
        if (target.endsWith("/") && !build.paths.includes(target)) issues.push(`${path}: unpublished internal route ${target}`)
      }
    } })
  await rewriter.transform(new Response(html)).text()
  if (found.h1 !== 1) issues.push(`${path}: expected one H1, found ${found.h1}`)
  if (found.mainText.trim().length < 120) issues.push(`${path}: insufficient prerendered body`)
  if (found.canonical !== `https://retropa.com${path}`) issues.push(`${path}: canonical mismatch`)
  if (!found.locale || found.alternates < 3) issues.push(`${path}: missing language metadata`)
  if (path === "/start/" || path === "/zh-Hans/start/") {
    const questions = startFAQ(path.startsWith("/zh-Hans/"))
    if (questions.length < 15 || new Set(questions.map(item => item.id)).size !== questions.length) issues.push(`${path}: insufficient or duplicate FAQ entries`)
    for (const item of questions) {
      // HTMLRewriter preserves character references in text chunks.
      if (!found.mainText.includes(renderToStaticMarkup(item.question)) || !found.mainText.includes(renderToStaticMarkup(item.answer))) issues.push(`${path}: missing static FAQ ${item.id}`)
      if (!html.includes(`id="faq-${item.id}"`)) issues.push(`${path}: missing FAQ anchor ${item.id}`)
    }
  }
  try {
    const data = JSON.parse(found.jsonLd)
    if (data.url !== found.canonical || data.inLanguage !== found.locale) issues.push(`${path}: structured data disagrees with page identity`)
  } catch { issues.push(`${path}: invalid structured data`) }
}

const eventsIndex = process.argv.indexOf("--events")
const eventFile = eventsIndex >= 0 ? process.argv[eventsIndex + 1] : null
if (eventsIndex >= 0 && (!eventFile || eventFile.startsWith("--"))) throw new Error("--events requires an exported JSON file")
const raw = eventFile ? JSON.parse(await readFile(resolve(eventFile), "utf8")) : null
const events: Array<{ name?: string; parameters?: { milestone?: string }; delivery?: string }> = raw ? Array.isArray(raw) ? raw : raw.events ?? [] : []
const stages = [
  { id: "web_page", event: "web_page_view", source: "website" },
  { id: "web_download", event: "web_download_clicked", source: "website" },
  { id: "client_first_launch", event: "growth_funnel_milestone", milestone: "first_launch", source: "client" },
  { id: "client_import", event: "growth_funnel_milestone", milestone: "import_succeeded", source: "client" },
  { id: "client_play", event: "growth_funnel_milestone", milestone: "first_gameplay_started", source: "client" },
  { id: "client_60s", event: "growth_funnel_milestone", milestone: "played_60s", source: "client" },
  { id: "client_paywall", event: "growth_funnel_milestone", milestone: "paywall_exposed", source: "client" },
].map(stage => {
  const matches = events.filter(event => event.name === stage.event && (!stage.milestone || event.parameters?.milestone === stage.milestone))
  return { ...stage, status: matches.length ? "observed_in_sample" : "unknown", sampledEventCount: matches.length || null, deliveryStates: [...new Set(matches.map(event => event.delivery ?? "not_supplied"))] }
})
console.log(JSON.stringify({
  artifact: "retropa-acquisition-evidence", revision: build.revision, staticPagesChecked: build.paths.length,
  staticValidation: issues.length ? "failed" : "passed", issues,
  collection: { web: build.analyticsConfigured ? "configured_not_delivery_verified" : "missing_web_measurement_id", ascCampaign: build.campaignProviderConfigured ? "configured_not_attribution_verified" : "missing_provider_token" },
  sample: eventFile ?? "none", stages,
  purchase: { status: "unknown", source: "ASC or RevenueCat transaction/cohort reports; subscriber attributes are not purchase counts" },
  limitations: ["Sample events are not unique users.", "An absent event is unknown, not zero.", "No web-to-install identity join or cross-source conversion rate is inferred.", "Queued events do not prove delivery to GA4."],
}, null, 2))
if (issues.length) process.exitCode = 1
