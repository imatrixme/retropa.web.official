// Production build: Astro renders every published page to static HTML, then
// this script writes crawl assets and build evidence and runs the gates on
// exactly what will be deployed.
import { spawnSync } from "node:child_process"
import { mkdir, readFile, readdir, rm, rmdir, stat, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import sharp from "sharp"
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

// WebP has no progressive mode, so every large local image carries a blurred
// preview (a 24px WebP under an SVG blur, about half a kilobyte) that paints with
// the HTML. The head script removes data-lqip once the image has loaded, so the
// preview never shows through transparent pixels; without JavaScript it is unused.
const previewSources = new Set<string>()
for (const file of pages) {
  await new HTMLRewriter().on("img[src^='/']:not([hidden])", {
    element(element) { previewSources.add(element.getAttribute("src")!) },
  }).transform(new Response(await readFile(file, "utf8"))).text()
}
const previews = new Map<string, string>()
for (const src of previewSources) {
  const path = join("dist", src)
  const size = (await stat(path).catch(() => null))?.size ?? 0
  if (size < 40 * 1024) continue
  const { data, info } = await sharp(path).resize(24, 24, { fit: "inside" }).webp({ quality: 50 }).toBuffer({ resolveWithObject: true })
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${info.width} ${info.height}' preserveAspectRatio='none'><filter id='b'><feGaussianBlur stdDeviation='1'/></filter><image width='100%' height='100%' preserveAspectRatio='none' filter='url(#b)' href='data:image/webp;base64,${data.toString("base64")}'/></svg>`
  previews.set(src, `url("data:image/svg+xml,${svg.replace(/[%#<>]/g, encodeURIComponent)}")`)
}

// Cloudflare Rocket Loader is on for the zone and rewrites every script to run
// after the page has loaded, so the html.js class, the reveal observer and the
// islands start late, and shown content fades out and back in. data-cfasync
// opts a script out; these scripts are already modules or a few inline bytes.
for (const file of pages) {
  const html = await readFile(file, "utf8")
  await writeFile(file, await new HTMLRewriter().on("script:not([type='application/ld+json'])", {
    element(element) { element.setAttribute("data-cfasync", "false") },
  }).on("img[src^='/']:not([hidden])", {
    element(element) {
      const preview = previews.get(element.getAttribute("src")!)
      if (!preview) return
      const style = element.getAttribute("style")
      element.setAttribute("style", `${style ? `${style};` : ""}--lqip:${preview}`)
      element.setAttribute("data-lqip", "")
    },
  }).transform(new Response(html)).text())
}
console.log(`Blurred previews: ${previews.size} images of 40 KB or more.`)

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
