import { supportedLocales } from "../src/i18n/locales"

const args = process.argv.slice(2)
if (args.includes("--help")) {
  console.log("Usage: bun run evidence:http [--base http://127.0.0.1:4178]\nRead-only HTTP checks for static pages, legacy redirects and 404 responses.")
  process.exit(0)
}
if (args.length && (args.length !== 2 || args[0] !== "--base")) throw new Error("Expected --base URL")
const base = new URL(args[1] ?? "http://127.0.0.1:4178")
if (!["http:", "https:"].includes(base.protocol) || base.username || base.password || base.pathname !== "/" || base.search || base.hash) throw new Error("Expected an HTTP origin without credentials, path or query")
const build = await Bun.file("dist/build-evidence.json").json()
const issues: string[] = []
let requests = 0
async function request(path: string, method = "GET") {
  requests++
  return fetch(new URL(path, base), { method, redirect: "manual", signal: AbortSignal.timeout(15_000) })
}
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
}
for (const page of ["/", "/cores/", "/terms/", "/privacy/"]) {
  for (const locale of supportedLocales) {
    const response = await request(`${page}?utm_source=seo-check&lang=${locale}&ct=retropa_web_v1`)
    const target = response.headers.get("location")
    const location = target ? new URL(target, base) : null
    const expected = `${locale === "en" ? "" : `/${locale}`}${page}`
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
for (const path of ["/seo-evidence-missing", "/seo-evidence-missing?lang=zh-Hans", "/ja/arcade/", "/ja/gba-emulator/", "/de/ds-emulator/", "/scripts/social-artwork.html"]) {
  const response = await request(path)
  if (response.status !== 404) issues.push(`${path}: expected 404`)
  await response.body?.cancel()
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
if (robots.status !== 200 || !(await robots.text()).includes("Sitemap: https://retropa.com/sitemap.xml")) issues.push("Robots sitemap reference missing")
console.log(JSON.stringify({ origin: base.origin, revision: build.revision, requests, status: issues.length ? "failed" : "passed", issues, limitations: ["This does not prove indexing, crawler access through all WAF rules, analytics delivery or Core Web Vitals."] }, null, 2))
if (issues.length) process.exitCode = 1
