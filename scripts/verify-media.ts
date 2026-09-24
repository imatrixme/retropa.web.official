// Media provenance gate: every file under public/media must have a manifest
// entry, every entry must point at an existing file, and gameplay footage must
// name its source and license. Fails the build otherwise.
import { readFile, readdir, stat } from "node:fs/promises"
import { join, relative } from "node:path"

type Entry = { id?: string; kind?: string; path?: string; source?: string; license?: string; title?: string }

const root = "public/media"
const exists = await stat(root).then(() => true, () => false)
if (!exists) { console.log("Media provenance: no public/media directory, nothing to verify."); process.exit(0) }

async function files(dir: string): Promise<string[]> {
  const out: string[] = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await files(path))
    else if (!entry.name.startsWith(".") && entry.name !== "manifest.json") out.push(relative(root, path))
  }
  return out
}

const raw = JSON.parse(await readFile(join(root, "manifest.json"), "utf8").catch(() => "[]"))
const entries: Entry[] = Array.isArray(raw) ? raw : raw.entries ?? []
const listed = new Map(entries.map((entry) => [String(entry.path ?? "").replace(/^\.?\//, ""), entry]))
const failures: string[] = []
for (const file of await files(root)) if (!listed.has(file)) failures.push(`untracked media file: ${file}`)
for (const [path, entry] of listed) {
  if (!await stat(join(root, path)).then(() => true, () => false)) failures.push(`manifest entry points to a missing file: ${path}`)
  if (!entry.source) failures.push(`missing source: ${path}`)
  if (entry.kind === "video" && (!entry.license || !entry.title)) failures.push(`gameplay footage needs title and license: ${path}`)
}
for (const failure of failures) console.log(`FAIL ${failure}`)
console.log(`Media provenance: ${listed.size} entries, ${failures.length} failures`)
if (failures.length) process.exit(1)
