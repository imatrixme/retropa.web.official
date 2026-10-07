import { isPublishedLocale, retiredLocaleFallback, supportedLocales } from "../src/i18n/locales"

const args = process.argv.slice(2)
if (args.includes("--help")) {
  console.log("Usage: bun run evidence:http [--base http://127.0.0.1:4178]\nRead-only HTTP checks for static pages, Markdown negotiation (or its absence while the build hides it), legacy redirects and 404 responses.")
  process.exit(0)
}
if (args.length && (args.length !== 2 || args[0] !== "--base")) throw new Error("Expected --base URL")
const base = new URL(args[1] ?? "http://127.0.0.1:4178")
if (!["http:", "https:"].includes(base.protocol) || base.username || base.password || base.pathname !== "/" || base.search || base.hash) throw new Error("Expected an HTTP origin without credentials, path or query")
const build = await Bun.file("dist/build-evidence.json").json()
// The agent-readable layer is served whole or not at all (agentReadable in src/lib/site-config.ts).
const agentReadable = build.agentReadable === true
const issues: string[] = []
let requests = 0
async function request(path: string, method = "GET", headers: Record<string, string> = {}) {
  requests++
  return fetch(new URL(path, base), { method, headers, redirect: "manual", signal: AbortSignal.timeout(15_000) })
}
const varies = (response: Response, name: string) => (response.headers.get("vary") ?? "").split(",").some((value) => value.trim().toLowerCase() === name)
for (const path of build.paths as string[]) {
  const response = await request(path)
  const content = await response.text()
  let canonical = "", h1 = 0, text = "", revision = ""
  await new HTMLRewriter()
    .on("h1", { element() { h1++ } })
    .on("main", { text(chunk) { text += chunk.text } })
    .on('link[rel="canonical"]', { element(element) { canonical = element.getAttribute("href") ?? "" } })
    .on('meta[name="retropa-revision"]', { element(element) { revision = element.getAttribute("content") ?? "" } })
    .transform(new Response(content)).text()
  if (response.status !== 200 || h1 !== 1 || text.trim().length < 120 || canonical !== `https://retropa.com${path}` || revision !== build.revision) issues.push(`${path}: status, static body, canonical or revision mismatch`)
  // The same address answers agents that ask for Markdown, naming the HTML page
  // as canonical; while the layer is hidden they get the HTML page.
  const markdown = await request(path, "GET", { Accept: "text/markdown" })
  const body = await markdown.text()
  const type = markdown.headers.get("content-type") ?? ""
  if (!agentReadable) {
    if (markdown.status !== 200 || !type.startsWith("text/html")) issues.push(`${path}: Markdown served while agentReadable is off`)
    continue
  }
  if (!varies(response, "accept")) issues.push(`${path}: HTML response does not vary on Accept`)
  if (markdown.status !== 200 || !type.startsWith("text/markdown") || !varies(markdown, "accept") || !(markdown.headers.get("link") ?? "").includes(`<https://retropa.com${path}>; rel="canonical"`) || !/^# \S/.test(body)) issues.push(`${path}: Markdown negotiation mismatch`)
}
const home = await request("/", "HEAD")
const homeLink = home.headers.get("link") ?? ""
const llms = await request("/llms.txt")
const llmsBody = await llms.text()
if (agentReadable) {
  if (!homeLink.includes('</llms.txt>; rel="describedby"')) issues.push("Homepage Link header does not describe the site with /llms.txt")
  if (llms.status !== 200 || !(llms.headers.get("content-type") ?? "").startsWith("text/plain") || !llmsBody.startsWith("# Retropa")) issues.push("/llms.txt is missing or not plain text")
} else {
  if (/llms\.txt|text\/markdown/.test(homeLink)) issues.push("Homepage Link header announces the agent-readable layer while agentReadable is off")
  if (llms.status !== 404) issues.push("/llms.txt answers while agentReadable is off")
  const copy = await request("/index.md")
  await copy.text()
  if (copy.status !== 404) issues.push("/index.md answers while agentReadable is off")
}
for (const page of ["/", "/cores/", "/terms/", "/privacy/"]) {
  for (const locale of supportedLocales) {
    const response = await request(`${page}?utm_source=seo-check&lang=${locale}&ct=retropa_web_v1`)
    const target = response.headers.get("location")
    const location = target ? new URL(target, base) : null
    const landing = isPublishedLocale(locale) ? locale : retiredLocaleFallback[locale] ?? "en"
    const expected = `${landing === "en" ? "" : `/${landing}`}${page}`
    if (![301, 308].includes(response.status) || !location || ![base.origin, "https://retropa.com"].includes(location.origin) || location.pathname !== expected || location.searchParams.has("lang") || location.searchParams.get("utm_source") !== "seo-check" || location.searchParams.get("ct") !== "retropa_web_v1") issues.push(`${page} (${locale}): legacy redirect mismatch`)
    await response.body?.cancel()
  }
}
for (const query of ["lang=zh-Hans", "lang=zh-Hans&utm_source=a%26b", "utm_source=a%26b&lang=zh-Hans", "utm_source=a%26b&lang=zh-Hans&ct=retropa_web_v1"]) {
  const response = await request(`/cores/index.html?${query}`, "HEAD")
  const target = response.headers.get("location")
  const location = target ? new URL(target, base) : null
  if (![301, 308].includes(response.status) || location?.pathname !== "/zh-Hans/cores/" || location.searchParams.has("lang") || (query.includes("utm_source") && location.searchParams.get("utm_source") !== "a&b")) issues.push(`HEAD ${query}: query preservation mismatch`)
}
for (const path of ["/seo-evidence-missing", "/seo-evidence-missing?lang=zh-Hans", "/ja/route-does-not-exist/", "/zh-Hans/route-does-not-exist/", "/scripts/social-artwork.html"]) {
  const response = await request(path)
  if (response.status !== 404) issues.push(`${path}: expected 404`)
  await response.body?.cancel()
}
// Retired language prefixes move permanently to the fallback language, keeping the query.
for (const locale of supportedLocales.filter((item) => !isPublishedLocale(item))) {
  const fallback = retiredLocaleFallback[locale] ?? "en"
  for (const path of ["/", "/gba-emulator/", "/cores/"]) {
    const response = await request(`/${locale}${path}?utm_source=retired`)
    const target = response.headers.get("location")
    const location = target ? new URL(target, base) : null
    const expected = `${fallback === "en" ? "" : `/${fallback}`}${path}`
    if (response.status !== 308 || location?.pathname !== expected || location.searchParams.get("utm_source") !== "retired") issues.push(`/${locale}${path}: retired-language redirect mismatch`)
    await response.body?.cancel()
  }
}
for (const query of ["lang=unsupported", "lang=en&lang=zh-Hans"]) {
  const response = await request(`/?${query}`)
  if (response.status !== 200 || response.headers.has("location")) issues.push(`${query}: unexpected migration`)
  await response.body?.cancel()
}
const sitemap = await request("/sitemap.xml")
const sitemapBody = await sitemap.text()
if (sitemap.status !== 200 || (build.paths as string[]).some(path => !sitemapBody.includes(`<loc>https://retropa.com${path}</loc>`))) issues.push("Sitemap does not contain all published routes")
const robots = await request("/robots.txt")
const robotsBody = await robots.text()
if (robots.status !== 200 || !robotsBody.includes("Sitemap: https://retropa.com/sitemap.xml")) issues.push("Robots sitemap reference missing")
if (agentReadable && !/^Content-Signal:\s*\S/m.test(robotsBody)) issues.push("Robots Content-Signal line missing")
if (!agentReadable && /^Content-Signal:/m.test(robotsBody)) issues.push("Robots states Content Signals while agentReadable is off")
console.log(JSON.stringify({ origin: base.origin, revision: build.revision, agentReadable, requests, status: issues.length ? "failed" : "passed", issues, limitations: ["This does not prove indexing, crawler access through all WAF rules, analytics delivery or Core Web Vitals."] }, null, 2))
if (issues.length) process.exitCode = 1
