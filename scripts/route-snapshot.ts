// Route snapshot: records the published surface of a build (URL, canonical,
// language alternates, robots, H1 count, JSON-LD types) and compares two
// snapshots. The published URL set, canonicals and alternates must match
// exactly across a framework migration; title/description drift is reported
// but does not fail.
//
//   bun scripts/route-snapshot.ts capture [dist] [out.json]
//   bun scripts/route-snapshot.ts compare <baseline.json> [dist]
import { readFile, readdir, writeFile } from "node:fs/promises"
import { join, relative } from "node:path"

type Entry = { canonical: string; alternates: string[]; robots: string; h1: number; jsonLd: string[]; title: string; description: string }
type Snapshot = { generatedAt: string; sitemap: string[]; routes: Record<string, Entry> }

async function htmlFiles(dir: string): Promise<string[]> {
  const out: string[] = []
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name)
    if (item.isDirectory()) out.push(...await htmlFiles(path))
    else if (item.name === "index.html") out.push(path)
  }
  return out
}

const attr = (tag: string, name: string) => new RegExp(`\\b${name}="([^"]*)"`, "i").exec(tag)?.[1] ?? ""
const decode = (value: string) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")

function jsonLdTypes(html: string): string[] {
  const types = new Set<string>()
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    const walk = (value: unknown) => {
      if (Array.isArray(value)) value.forEach(walk)
      else if (value && typeof value === "object") {
        const type = (value as Record<string, unknown>)["@type"]
        if (typeof type === "string") types.add(type)
        Object.values(value).forEach(walk)
      }
    }
    try { walk(JSON.parse(match[1])) } catch { types.add("INVALID") }
  }
  return [...types].sort()
}

export async function capture(dist: string): Promise<Snapshot> {
  const routes: Record<string, Entry> = {}
  for (const file of await htmlFiles(dist)) {
    const html = await readFile(file, "utf8")
    const route = `/${relative(dist, file).replace(/index\.html$/, "")}`
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0])
    const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0])
    routes[route] = {
      canonical: attr(links.find((l) => /rel="canonical"/i.test(l)) ?? "", "href"),
      alternates: links.filter((l) => /rel="alternate"/i.test(l) && /hreflang=/i.test(l)).map((l) => `${attr(l, "hreflang")} ${attr(l, "href")}`).sort(),
      robots: attr(metas.find((m) => /name="robots"/i.test(m)) ?? "", "content"),
      h1: (html.match(/<h1\b/gi) ?? []).length,
      jsonLd: jsonLdTypes(html),
      title: decode(/<title>([\s\S]*?)<\/title>/i.exec(html)?.[1] ?? ""),
      description: decode(attr(metas.find((m) => /name="description"/i.test(m)) ?? "", "content")),
    }
  }
  const sitemapXml = await readFile(join(dist, "sitemap.xml"), "utf8").catch(() => "")
  const sitemap = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort()
  return { generatedAt: new Date().toISOString(), sitemap, routes }
}

export function compare(before: Snapshot, after: Snapshot) {
  const failures: string[] = []
  const warnings: string[] = []
  const a = new Set(Object.keys(before.routes))
  const b = new Set(Object.keys(after.routes))
  for (const route of a) if (!b.has(route)) failures.push(`missing route ${route}`)
  for (const route of b) if (!a.has(route)) failures.push(`unexpected route ${route}`)
  if (before.sitemap.join("\n") !== after.sitemap.join("\n")) failures.push("sitemap URL set differs")
  for (const route of a) {
    const x = before.routes[route], y = after.routes[route]
    if (!y) continue
    if (x.canonical !== y.canonical) failures.push(`${route} canonical ${x.canonical} -> ${y.canonical}`)
    if (x.alternates.join("|") !== y.alternates.join("|")) failures.push(`${route} alternates differ`)
    if (x.robots !== y.robots) failures.push(`${route} robots ${x.robots} -> ${y.robots}`)
    if (y.h1 !== 1) failures.push(`${route} has ${y.h1} h1 elements`)
    for (const type of x.jsonLd) if (!y.jsonLd.includes(type)) failures.push(`${route} lost JSON-LD ${type}`)
    if (x.title !== y.title) warnings.push(`${route} title changed`)
    if (x.description !== y.description) warnings.push(`${route} description changed`)
  }
  return { failures, warnings }
}

if (import.meta.main) {
  const [mode, first, second] = process.argv.slice(2)
  if (mode === "capture") {
    const snapshot = await capture(first ?? "dist")
    const out = second ?? "route-snapshot.json"
    await writeFile(out, JSON.stringify(snapshot, null, 1))
    console.log(`Captured ${Object.keys(snapshot.routes).length} routes, ${snapshot.sitemap.length} sitemap URLs -> ${out}`)
  } else if (mode === "compare" && first) {
    const baseline = JSON.parse(await readFile(first, "utf8")) as Snapshot
    const { failures, warnings } = compare(baseline, await capture(second ?? "dist"))
    for (const line of failures.slice(0, 50)) console.log(`FAIL ${line}`)
    console.log(`Route snapshot: ${failures.length} failures, ${warnings.length} metadata text changes`)
    if (failures.length) process.exit(1)
  } else {
    console.log("usage: route-snapshot.ts capture [dist] [out] | compare <baseline> [dist]")
    process.exit(2)
  }
}
