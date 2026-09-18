import { spawnSync } from "node:child_process"
import { mkdir, writeFile, readFile } from "node:fs/promises"
import { resolve } from "node:path"

for (const command of [["tsc", "-b"], ["vite", "build"], ["vite", "build", "--ssr", "src/entry-server.tsx", "--outDir", ".ssr"]]) {
  const result = spawnSync("bun", ["--bun", "x", ...command], { stdio: "inherit" })
  if (result.status !== 0) process.exit(result.status ?? 1)
}
const { renderPage, publishedPages, localizedPath, analyticsConfig } = await import(resolve(".ssr/entry-server.js"))
const manifest = JSON.parse(await readFile("dist/.vite/manifest.json", "utf8"))
const entry = manifest["index.html"]
if (!entry?.file || !entry.css?.length) throw new Error("Missing production assets")
const assets = { script: entry.file, styles: entry.css }
for (const { page, locale } of [...publishedPages, { page: "not-found", locale: "en" }]) {
  const route = localizedPath(page, locale)
  const directory = page === "not-found" ? "dist" : `dist${route}`
  await mkdir(directory, { recursive: true })
  await writeFile(`${directory}/${page === "not-found" ? "404.html" : "index.html"}`, renderPage(page, locale, assets))
}
const paths = publishedPages.map(({ page, locale }: { page: string; locale: string }) => localizedPath(page, locale))
const guideLanguages = publishedPages
  .filter(({ page }: { page: string }) => page === "guides")
  .map(({ locale }: { locale: string }) => locale)
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path: string) => `<url><loc>https://retropa.com${path}</loc></url>`).join("")}</urlset>`)
await writeFile("dist/build-evidence.json", JSON.stringify({
  schemaVersion: 1, revision: analyticsConfig.revision, generatedAt: new Date().toISOString(), paths,
  analyticsConfigured: /^G-[A-Z0-9]+$/.test(analyticsConfig.measurementId),
  campaignProviderConfigured: /^\d+$/.test(analyticsConfig.providerToken),
  attribution: "aggregate_only", guideLanguages,
}, null, 2))
console.log(`Prerendered ${paths.length} localized pages and 404.html.`)

// Integrity gates run after prerendering so they see exactly what will be deployed.
const gate = spawnSync("bun", ["scripts/verify-integrity.ts"], { stdio: "inherit" })
if (gate.status !== 0) process.exit(gate.status ?? 1)
