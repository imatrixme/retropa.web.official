// Production build: Astro renders every published page to static HTML, then
// this script writes crawl assets and build evidence and runs the gates on
// exactly what will be deployed.
import { spawnSync } from "node:child_process"
import { mkdir, readFile, readdir, rm, rmdir, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import subsetFont from "subset-font"
import { publishedPages } from "../src/lib/metadata.ts"
import { localizedPath } from "../src/lib/routes.ts"
import { analyticsConfig } from "../src/lib/analytics.ts"
import { isShipped, shippedVersion } from "../src/content/releases.ts"
import { agentReadable } from "../src/lib/site-config.ts"
import { writeAgentAssets } from "./agent-assets.ts"

const run = (command: string, args: string[]) => {
  const result = spawnSync(command, args, { stdio: "inherit" })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run("bun", ["--bun", "x", "astro", "build"])

// Chinese display face: subset Smiley Sans to the characters that display
// headings on Simplified Chinese pages actually use.
async function htmlFiles(dir: string): Promise<string[]> {
  const out: string[] = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await htmlFiles(path))
    else if (entry.name.endsWith(".html")) out.push(path)
  }
  return out
}
async function displayCharacters(files: readonly string[], selector = "[class~=display], h1, h2, h3") {
  const characters = new Set<string>()
  for (const file of files) {
    const html = await readFile(file, "utf8")
    let depth = 0
    const rewriter = new HTMLRewriter().on(selector, {
      element(element) { depth++; element.onEndTag(() => { depth-- }) },
      text(chunk) { if (depth > 0) for (const character of chunk.text) characters.add(character) },
    })
    await rewriter.transform(new Response(html)).text()
  }
  for (const character of "0123456789。，、？！：；“”（）·—…") characters.add(character)
  return characters
}
const source = await readFile("fonts-src/SmileySans-Oblique.ttf")
await mkdir("dist/fonts", { recursive: true })
// A site-wide subset, plus a tiny one holding only the homepage headline, so
// the first paint waits on a few kilobytes; other headings fall back to the
// site-wide face as they scroll in.
for (const [name, files, selector] of [["smiley-zh-hans", await htmlFiles("dist/zh-Hans"), undefined], ["smiley-zh-hans-home", ["dist/zh-Hans/index.html"], "h1"]] as const) {
  const characters = await displayCharacters(files, selector)
  const subset = await subsetFont(source, [...characters].join(""), { targetFormat: "woff2" })
  await writeFile(`dist/fonts/${name}.woff2`, subset)
  console.log(`Smiley Sans ${name}: ${characters.size} characters, ${(subset.length / 1024).toFixed(1)} KB`)
}

// Media of an unreleased App version never ships: remove it from the output and
// make sure no page points at it (src/content/media.ts hides it from templates).
const raw = JSON.parse(await readFile("public/media/manifest.json", "utf8"))
const manifest: { path: string; release?: string }[] = Array.isArray(raw) ? raw : raw.entries ?? []
const held = manifest.filter((entry) => entry.release && !isShipped(entry.release)).map((entry) => entry.path.replace(/^\.?\//, ""))
for (const path of held) await rm(`dist/media/${path}`, { force: true })
// Folders left empty go too; a folder that still holds shipped media stays.
for (const folder of [...new Set(held.map((path) => dirname(`dist/media/${path}`)))].sort((a, b) => b.length - a.length)) {
  await rmdir(folder).catch(() => {})
  await rmdir(dirname(folder)).catch(() => {})
}
const pages = await htmlFiles("dist")
const leaks: string[] = []
for (const file of pages) {
  const html = await readFile(file, "utf8")
  for (const path of held) if (html.includes(`/media/${path}`)) leaks.push(`${file} references unreleased media ${path}`)
}
for (const leak of leaks) console.log(`FAIL ${leak}`)
if (leaks.length) process.exit(1)
console.log(`App version ${shippedVersion}: ${held.length} media files held for a later release.`)

if (agentReadable) {
  const agent = await writeAgentAssets("dist")
  for (const failure of agent.failures) console.log(`FAIL ${failure}`)
  if (agent.failures.length) process.exit(1)
  console.log(`Agent assets: ${agent.pages} Markdown pages, llms.txt and Content Signals.`)
} else console.log("Agent assets: hidden (agentReadable is off in src/lib/site-config.ts).")

const paths = publishedPages.map(({ page, locale }) => localizedPath(page, locale))
const guideLanguages = publishedPages.filter(({ page }) => page === "guides").map(({ locale }) => locale)
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>https://retropa.com${path}</loc></url>`).join("")}</urlset>`)
await writeFile("dist/build-evidence.json", JSON.stringify({
  schemaVersion: 1, revision: analyticsConfig.revision, appVersion: shippedVersion, agentReadable, generatedAt: new Date().toISOString(), paths,
  analyticsConfigured: /^G-[A-Z0-9]+$/.test(analyticsConfig.measurementId),
  campaignProviderConfigured: /^\d+$/.test(analyticsConfig.providerToken),
  attribution: "aggregate_only", guideLanguages,
}, null, 2))
console.log(`Prerendered ${paths.length} localized pages and 404.html.`)

run("bun", ["scripts/verify-media.ts"])
run("bun", ["scripts/verify-integrity.ts"])
