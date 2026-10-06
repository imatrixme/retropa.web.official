import { readFile, readdir, stat, writeFile } from "node:fs/promises"
import { publishedLocales as supportedLocales } from "../src/i18n/locales.ts"

type Check = "metadata" | "crawl-assets" | "image-alt" | "structured-data" | "language-coverage" | "english-residue" | "capability-claims" | "pricing" | "content-quality"
type Position = { file: string; offset: number; line: number; column: number; context: string; jsonPointer?: string }
type Finding = { path: string; check: Check; severity: "fail" | "warn"; detail: string; position: Position }
type Source = { file: string; route: string; html: string }
type Tag = { name: string; offset: number; attrs: Map<string, { value: string; offset: number; offsets: number[] }> }
type Text = { text: string; offsets: number[]; context: string }
type Alternate = { lang: string; href: string; offset: number }
type Page = Source & { locale: string; canonical: string; indexable: boolean; alternates: Alternate[] }

const brand = "https://retropa.com"
const reportOnly = process.argv.includes("--report")
const findings: Finding[] = []
const checks: Check[] = ["metadata", "crawl-assets", "image-alt", "structured-data", "language-coverage", "english-residue", "capability-claims", "pricing", "content-quality"]

function record(source: Source, check: Check, detail: string, offset = 0, context = "document", severity: "fail" | "warn" = "fail", jsonPointer?: string) {
  const before = source.html.slice(0, offset)
  findings.push({
    path: source.route, check, severity, detail,
    position: { file: source.file, offset, line: before.split("\n").length, column: offset - before.lastIndexOf("\n"), context, ...(jsonPointer === undefined ? {} : { jsonPointer }) },
  })
}

const entities: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ndash: "–", mdash: "—", hellip: "…",
  lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”", dollar: "$", euro: "€", pound: "£", yen: "¥", cent: "¢",
}

function decode(raw: string, offset: number, context: string): Text {
  let text = ""
  const offsets: number[] = []
  for (const match of raw.matchAll(/&#(?:x[0-9a-f]+|\d+);|&[a-z]+;|[\s\S]/gi)) {
    const token = match[0]
    let value = token
    if (token.startsWith("&#")) {
      const code = token[2].toLowerCase() === "x" ? parseInt(token.slice(3, -1), 16) : Number(token.slice(2, -1))
      value = code > 0 && code <= 0x10ffff && !(code >= 0xd800 && code <= 0xdfff) ? String.fromCodePoint(code) : "\ufffd"
    } else if (token.startsWith("&")) value = entities[token.slice(1, -1)] ?? token
    text += value
    for (let index = 0; index < value.length; index++) offsets.push(offset + match.index)
  }
  return { text, offsets, context }
}

function tags(html: string): Tag[] {
  return [...html.matchAll(/<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>|<[a-z][^>]*>/gi)].flatMap((match) => {
    const name = /^<([a-z][\w-]*)/i.exec(match[0])?.[1].toLowerCase()
    if (!name) return []
    const opening = match[0].slice(0, match[0].indexOf(">") + 1)
    const attrs: Tag["attrs"] = new Map()
    const start = name.length + 1
    for (const attr of opening.slice(start).matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      const raw = attr[2] ?? attr[3] ?? attr[4] ?? ""
      const valueStart = attr[0].indexOf("=") < 0 ? 0 : attr[0].indexOf("=") + 1
      const relative = raw ? attr[0].indexOf(raw, valueStart) : 0
      const offset = match.index + start + attr.index + relative
      const decoded = decode(raw, offset, attr[1])
      attrs.set(attr[1].toLowerCase(), { value: decoded.text, offset, offsets: decoded.offsets })
    }
    return [{ name, offset: match.index, attrs }]
  })
}

const attribute = (tag: Tag | undefined, name: string) => tag?.attrs.get(name)?.value ?? ""
const hasRel = (tag: Tag, rel: string) => attribute(tag, "rel").toLowerCase().split(/\s+/).includes(rel)

function visibleText(html: string): Text {
  const result: Text = { text: "", offsets: [], context: "visible text" }
  for (const match of html.matchAll(/<!--[\s\S]*?-->|<(script|style|svg|head|template)\b[^>]*>[\s\S]*?<\/\1\s*>|<[^>]+>|[^<]+/gi)) {
    if (match[0].startsWith("<")) {
      if (/^<\/?(?:address|article|aside|blockquote|br|button|dd|details|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|hr|li|main|nav|ol|option|p|section|select|summary|table|td|th|tr|ul)\b/i.test(match[0]) || match[1]) {
        result.text += "\n"
        result.offsets.push(match.index)
      }
      continue
    }
    const decoded = decode(match[0], match.index, result.context)
    result.text += decoded.text
    result.offsets.push(...decoded.offsets)
  }
  return result
}

const NON_LATIN_LOCALES = new Set(["ja", "ko", "zh-hans", "zh-hant", "th", "ru"])
const TERM_ALLOWLIST = [
  "Retropa Plus", "Retropa CRT V4", "Retropa Trinitron V1", "Retropa DMG", "Retropa", "iPhone", "iPad", "iOS", "Apple", "App Store", "Delta",
  "Nintendo Entertainment System", "Super Nintendo Entertainment System", "Nintendo Game Boy Advance", "Game Boy Advance", "Game Boy Color", "Game Boy", "Nintendo DS",
  "Sega Genesis", "Sega Mega Drive", "Mega Drive", "Genesis", "Sega Game Gear", "Game Gear", "Sega Master System", "Master System", "WonderSwan Color", "WonderSwan",
  "Neo Geo Pocket Color", "Neo Geo Pocket", "Neo Geo", "Super Famicom", "Famicom", "Nintendo", "Sega", "Bandai", "SNK", "Capcom", "Irem", "PolyGame Master",
  "mGBA", "SkyEmu", "SameBoy", "RusticoNES", "Rustico", "TetaNES", "LakeSnes", "JGenesis", "ares", "RetroArch", "CRT Lite", "LCD Grid", "Trinitron V1",
  "GBA", "DS", "NDS", "GB", "GBC", "NES", "SNES", "MD", "GEN", "GG", "SMS", "WS", "WSC", "NGP", "NGPC", "CPS", "CPS1", "CPS2", "CPS3", "PGM", "M92", "DMG",
  "ROM", "ROMs", "BIOS", "ZIP", "deltaskin", "retropack", "fds", "nsf", "nsfe", "unf", "unif", "sfc", "smc", "fig", "swc", "bs", "st", "smd", "ngc", "nsp",
  "slang", "slangp", "CRT", "LCD", "HD", "RGB", "WebGL", "WebGL2", "PNG", "WebP", "JPG", "PC", "USB", "API", "URL", "Wi-Fi",
]
const escapeRegex = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const allowedTerms = new RegExp(`(?<![\\p{L}\\p{N}_])(?:${TERM_ALLOWLIST.sort((a, b) => b.length - a.length).map((term) => escapeRegex(term).replace(/ /g, "[ \\t]+" )).join("|")})(?![\\p{L}\\p{N}_])`, "giu")
/**
 * English clause shapes. Every branch anchors on at least one English-only
 * function word, because the Romance languages share verb and article forms with
 * English: Portuguese "Use a imagem" and Italian "usa a" are not English, so a
 * verb followed by an article is not evidence of anything. "your" and "the" have
 * no cognate in any supported language, which is why they carry the signal here.
 */
const ENGLISH_CLAUSES = /\b(?:(?:you|we|they)\s+(?:can|will|have|are|should|must|need)|(?:this|that|there|it)\s+(?:is|was|will)|(?:these|those)\s+are|(?:your|the)\s+(?:own\s+)?(?:games?|files?|controller|device|library|screen|settings|saves?)|(?:download|import|play|open|choose|select|connect|save|use)\s+(?:your|the)|(?:with|from|into|before|after)\s+(?:your|the)|(?:does|do|will|can)\s+not)\b/i
const ENGLISH_MARKERS = new Set(["the", "your", "with", "from", "this", "that", "these", "those", "which", "when", "where", "would", "should", "could", "have", "been", "they", "their", "there", "you", "and", "does", "into", "before", "after"])
const LEGAL_ROUTES = /(^|\/)(terms|privacy)\/$/

function englishResidue(locale: string, text: string): { text: string; index: number }[] {
  if (locale.toLowerCase() === "en") return []
  const residue: { text: string; index: number }[] = []
  for (const run of text.matchAll(/[\p{Script=Latin}][\p{Script=Latin}\p{M}\d'’]*(?:[ \t\u00a0]+[\p{Script=Latin}][\p{Script=Latin}\p{M}\d'’]*)*/gu)) {
    const prose = run[0].replace(allowedTerms, (term) => " ".repeat(term.length))
    const words = prose.toLowerCase().match(/[\p{Script=Latin}][\p{Script=Latin}\p{M}'’]*/gu) ?? []
    const markers = new Set(words.filter((word) => ENGLISH_MARKERS.has(word)))
    const clause = run[0].split(/[ \t\u00a0]+/).length >= 3 && (ENGLISH_CLAUSES.test(prose) || (words.length >= 4 && markers.size >= 2))
    if (clause || (NON_LATIN_LOCALES.has(locale.toLowerCase()) && words.length >= 4)) residue.push({ text: run[0], index: run.index })
  }
  return residue
}

const UNSUPPORTED_CLAIMS = ["playstation", "psp", "ps1", "ps2", "psx", "nintendo 64", "n64", "gamecube", "wii u", "wii", "sega saturn", "dreamcast", "atari jaguar", "virtual boy", "pc engine", "turbografx", "msx", "commodore", "amiga", "nintendo 3ds", "3ds"]
const unsupportedTerms = new RegExp(`(?<![\\p{L}\\p{N}_])(?:${UNSUPPORTED_CLAIMS.map(escapeRegex).join("|")})(?![\\p{L}\\p{N}_])`, "giu")
const PRICING_PATTERNS: { id: string; pattern: RegExp; requireContiguous?: boolean }[] = [
  { id: "currency-symbol", pattern: /\p{Sc}/u },
  { id: "amount-currency-code", pattern: /(?:\d+(?:[.,]\d+)?[ \t]*(?:USD|EUR|GBP|CNY|JPY|RMB|KRW|RUB|BRL|TRY|VND|THB|IDR)\b|\b(?:USD|EUR|GBP|CNY|JPY|RMB|KRW|RUB|BRL|TRY|VND|THB|IDR)[ \t]*\d+)/ },
  // Currency words after an amount, in three shapes.
  //
  // Latin currency words tolerate a space, because "9.99 dollars" is normal.
  //
  // CJK unit characters must be written tight against the number, as prices are
  // ("1000円", "5000원", "99元"), and the match must be contiguous in the source.
  // The contiguity requirement is what separates a price from an ordered-list
  // marker: the article index renders "<span>04</span>" next to a section title,
  // so text from two different elements concatenates into "04元の画面" — where 元
  // is the Japanese word for "original", not the yuan. Contiguity also keeps the
  // spaced rate form ("99 元/月", "1000 円 / 年") detectable, since that is still
  // one text node.
  { id: "amount-currency-name-latin", pattern: /\d+(?:[.,]\d+)?[ \t]*(?:euros?|dollars?|yuan|renminbi|yen|won)\b/i },
  { id: "amount-currency-name-cjk", pattern: /\d+(?:[.,]\d+)?[ \t]*(?:円|元|원|人民币|美元|日元|欧元|руб(?:лей)?|บาท|đồng)(?:\s*[/／]?\s*(?:月|年|개월|달))?/i, requireContiguous: true },
  { id: "per-period", pattern: /(?:\bper\s+|\/\s*)(?:month|year|mo|yr|monthly|yearly|annual)\b/i },
  { id: "discount", pattern: /\b\d+\s?%\s?(?:off|discount)\b|打折|折扣|セール|descuento|rabatt/i },
  { id: "trial-duration", pattern: /\b\d+[- ]?(?:day|week|month)s?\s+(?:free\s+)?trial\b|\btrial\s+(?:for\s+)?\d+\s+(?:days?|weeks?|months?)\b|免费试用|無料トライアル|test gratuit/i },
  { id: "tier-name", pattern: /\b(?:basic|standard|premium|pro|ultimate|lifetime)\s+(?:plan|tier|package|subscription)\b/i },
]

function scanText(source: Source, text: Text, locale: string, localized = true, jsonPointer?: string) {
  if (localized && !LEGAL_ROUTES.test(source.route)) {
    for (const match of englishResidue(locale, text.text)) record(source, "english-residue", `${locale} page keeps a possible English clause: ${match.text}`, text.offsets[match.index] ?? 0, text.context)
  }
  // The site supports a fixed, published set of systems. Naming a platform the
  // product does not run is a false capability claim regardless of phrasing, so
  // it blocks the build rather than asking a reviewer to decide. Pages that need
  // to name an unsupported platform in order to deny support should be reworded
  // to avoid the bare product name.
  for (const match of text.text.matchAll(unsupportedTerms)) record(source, "capability-claims", `names an unsupported platform: ${match[0]}`, text.offsets[match.index] ?? 0, text.context, "fail", jsonPointer)
  for (const { id, pattern, requireContiguous } of PRICING_PATTERNS) {
    for (const match of text.text.matchAll(new RegExp(pattern.source, `${pattern.flags}g`))) {
      // A match that spans a tag boundary is text from two different elements that
      // only appear adjacent once the tags are stripped. That is how an ordered-list
      // marker ("<span>04</span>") ends up glued to the next heading, and it is not
      // evidence that the page states a price. Verify the matched source characters
      // were actually adjacent before reporting.
      if (requireContiguous) {
        const start = text.offsets[match.index]
        const end = text.offsets[match.index + match[0].length - 1]
        if (start === undefined || end === undefined || end - start !== match[0].length - 1) continue
      }
      record(source, "pricing", `publishes pricing (${id}): ${match[0]}`, text.offsets[match.index] ?? 0, text.context, "fail", jsonPointer)
    }
  }
}

async function load(file: string, route: string): Promise<Source> {
  try { return { file, route, html: await readFile(file, "utf8") } }
  catch (error) {
    const source = { file, route, html: "" }
    record(source, "crawl-assets", `cannot read artifact: ${error instanceof Error ? error.message : String(error)}`)
    return source
  }
}

async function htmlInventory(directory: string): Promise<string[]> {
  const files: string[] = []
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    const file = `${directory}/${entry.name}`
    if (entry.isDirectory()) files.push(...await htmlInventory(file))
    else if (entry.isFile() && /\.html?$/i.test(entry.name)) files.push(file)
    else if (entry.isSymbolicLink()) record({ file, route: `/${file.slice(5)}`, html: "" }, "crawl-assets", "symlink not inspected; build output must contain regular files and directories")
  }
  return files
}

function siteRoute(href: string): string | null {
  try {
    const url = new URL(href)
    return url.origin === brand && !url.username && !url.password && !url.search && !url.hash && url.href === href ? url.pathname : null
  } catch { return null }
}

function inspectJson(source: Source, script: Tag, canonical: string, locale: string, block: number) {
  const start = source.html.indexOf(">", script.offset) + 1
  const closing = /<\/script\s*>/gi
  closing.lastIndex = start
  const end = closing.exec(source.html)?.index ?? -1
  const raw = source.html.slice(start, end < 0 ? undefined : end)
  const context = `JSON-LD block ${block}`
  let data: unknown
  try { data = JSON.parse(raw) }
  catch (error) {
    record(source, "structured-data", `invalid JSON-LD: ${error instanceof Error ? error.message : String(error)}`, start, context)
    return
  }
  if (data === null || typeof data !== "object") record(source, "structured-data", "JSON-LD must be an object or array", start, context)
  const tokens = [...raw.matchAll(/"(?:\\[\s\S]|[^"\\])*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null|[{}[\]:,]/g)]
  let cursor = 0
  function visit(pointer: string, root: boolean): unknown {
    const token = tokens[cursor++]
    if (token[0] === "{") {
      const object: Record<string, unknown> = {}
      const fields: { key: string; pointer: string; offset: number }[] = []
      while (tokens[cursor][0] !== "}") {
        const keyToken = tokens[cursor++]
        const key = JSON.parse(keyToken[0]) as string
        cursor++
        const child = `${pointer}/${key.replace(/~/g, "~0").replace(/\//g, "~1")}`
        const offset = start + keyToken.index
        if (Object.hasOwn(object, key)) record(source, "structured-data", `duplicate JSON property: ${key}`, offset, context, "fail", child)
        const value = visit(child, false)
        Object.defineProperty(object, key, { value, enumerable: true, configurable: true })
        fields.push({ key, pointer: child, offset })
        if (/^(?:price|lowPrice|highPrice|minPrice|maxPrice|priceCurrency|priceSpecification|discount|discountCode|trialPeriod|trialDuration)$/i.test(key)) record(source, "pricing", `structured pricing field is forbidden, including zero: ${key}=${JSON.stringify(value)}`, offset, context, "fail", child)
        if (/^(?:aggregateRating|ratingValue|reviewCount|ratingCount|review|reviews)$/i.test(key)) record(source, "structured-data", `unverified rating or review field: ${key}`, offset, context, "fail", child)
        if (tokens[cursor][0] === ",") cursor++
      }
      cursor++
      const types = Array.isArray(object["@type"]) ? object["@type"] : [object["@type"]]
      const pageEntity = types.some((type) => typeof type === "string" && /^(?:WebPage|FAQPage|HowTo|SoftwareApplication)$/.test(type))
      for (const field of fields) {
        const value = object[field.key]
        if ((root || pageEntity) && field.key === "url" && value !== canonical) record(source, "structured-data", "page entity URL disagrees with canonical", field.offset, context, "fail", field.pointer)
        if ((root || pageEntity) && field.key === "inLanguage" && (typeof value !== "string" || value.toLowerCase() !== locale.toLowerCase())) record(source, "structured-data", "page entity inLanguage disagrees with html lang", field.offset, context, "fail", field.pointer)
      }
      return object
    }
    if (token[0] === "[") {
      const array: unknown[] = []
      while (tokens[cursor][0] !== "]") {
        array.push(visit(`${pointer}/${array.length}`, root))
        if (tokens[cursor][0] === ",") cursor++
      }
      cursor++
      return array
    }
    const value: unknown = JSON.parse(token[0])
    if (typeof value === "string" && !/^(?:https?:|\/)/.test(value)) {
      const offsets: number[] = []
      for (const character of token[0].slice(1, -1).matchAll(/\\u[0-9a-f]{4}|\\[\s\S]|[^\\]/gi)) offsets.push(start + token.index + 1 + character.index)
      scanText(source, { text: value, offsets, context }, locale, false, pointer)
    }
    return value
  }
  visit("", true)
}

const evidence = await load("dist/build-evidence.json", "/build-evidence.json")
let revision: string | null = null
let declaredPaths: string[] = []
try {
  const build: unknown = JSON.parse(evidence.html)
  if (!build || typeof build !== "object" || !("paths" in build) || !Array.isArray(build.paths) || !build.paths.every((path) => typeof path === "string")) throw new Error("expected paths array")
  declaredPaths = build.paths
  if (!("revision" in build) || typeof build.revision !== "string" || !build.revision.trim()) throw new Error("missing build revision")
  revision = build.revision
} catch (error) { record(evidence, "crawl-assets", `invalid build evidence: ${error instanceof Error ? error.message : String(error)}`) }

const pages = new Map<string, Page>()
const metadata = new Map<string, Map<string, { source: Source; offset: number }[]>>(["title", "description", "canonical"].map((key) => [key, new Map()]))
let inventory: string[] = []
try { inventory = await htmlInventory("dist") }
catch (error) { record(evidence, "crawl-assets", `cannot inventory dist: ${error instanceof Error ? error.message : String(error)}`) }

for (const file of inventory) {
  const route = `/${file.slice(5)}`.replace(/index\.html$/, "")
  const source = await load(file, route)
  const allTags = tags(source.html)
  const meta = allTags.filter((tag) => tag.name === "meta")
  const links = allTags.filter((tag) => tag.name === "link")
  const locale = attribute(allTags.find((tag) => tag.name === "html"), "lang")
  const canonicalTags = links.filter((tag) => hasRel(tag, "canonical"))
  const canonical = attribute(canonicalTags[0], "href")
  const indexable = !meta.some((tag) => /^(robots|googlebot)$/i.test(attribute(tag, "name")) && /(?:^|[\s,])(?:noindex|none)(?:$|[\s,])/i.test(attribute(tag, "content")))
  const alternates = links.filter((tag) => hasRel(tag, "alternate") && tag.attrs.has("hreflang")).map((tag) => ({ lang: attribute(tag, "hreflang").toLowerCase(), href: attribute(tag, "href"), offset: tag.offset }))
  const page: Page = { ...source, locale, canonical, indexable, alternates }
  pages.set(route, page)
  const text = visibleText(source.html)
  scanText(source, text, locale)
  if (route === "/404.html" && indexable) record(source, "crawl-assets", "404 page is not marked noindex")
  const titles = [...source.html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/gi)]
  const titleMatch = titles[0]
  const title = decode(titleMatch?.[1] ?? "", titleMatch ? titleMatch.index + titleMatch[0].indexOf(">") + 1 : 0, "title")
  const descriptionTags = meta.filter((tag) => attribute(tag, "name").toLowerCase() === "description")
  const descriptionTag = descriptionTags[0]
  const description = attribute(descriptionTag, "content")
  for (const tag of [...meta, ...allTags.filter((tag) => tag.name === "img" || tag.attrs.has("aria-label"))]) {
    const fields = tag.name === "meta" && /^(?:description|og:title|og:description|og:image:alt|twitter:title|twitter:description|twitter:image:alt)$/i.test(attribute(tag, "name") || attribute(tag, "property")) ? ["content"] : ["alt", "aria-label", "title"]
    for (const field of fields) {
      const attr = tag.attrs.get(field)
      if (attr) scanText(source, { text: attr.value, offsets: attr.offsets, context: `${tag.name}[${attribute(tag, "name") || attribute(tag, "property")}]@${field}` }, locale)
    }
  }
  scanText(source, title, locale)
  for (const image of allTags.filter((tag) => tag.name === "img")) {
    const src = attribute(image, "src")
    // Images hidden from assistive technology are decorative by declaration; their
    // content is carried by adjacent text (for example a channel name or card title).
    const decorative = src.startsWith("/brand/") || src.startsWith("/logo-wall/") || attribute(image, "aria-hidden") === "true"
    if (!image.attrs.has("alt") || (!attribute(image, "alt").trim() && !decorative)) record(source, "image-alt", `content image without alternative text: ${src}`, image.offset, "img@alt")
  }
  const scripts = allTags.filter((tag) => tag.name === "script" && attribute(tag, "type").toLowerCase().split(";")[0].trim() === "application/ld+json")
  scripts.forEach((script, index) => inspectJson(source, script, canonical, locale, index + 1))
  if (!indexable) continue
  if (!scripts.length) record(source, "structured-data", "missing structured data")
  const h1s = [...source.html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/gi)]
  if (titles.length !== 1 || !title.text.trim()) record(source, "metadata", `expected one nonempty title, found ${titles.length}`, titleMatch?.index, "title")
  if (descriptionTags.length !== 1 || !description.trim()) record(source, "metadata", `expected one nonempty description, found ${descriptionTags.length}`, descriptionTag?.offset, "meta[name=description]")
  if (canonicalTags.length !== 1 || canonical !== `${brand}${route}`) record(source, "metadata", `expected one self canonical ${brand}${route}, found ${canonicalTags.length}: ${canonical}`, canonicalTags[0]?.offset, "link[rel=canonical]")
  if (h1s.length !== 1 || !visibleText(h1s[0]?.[1] ?? "").text.trim()) record(source, "metadata", `expected exactly one nonempty H1, found ${h1s.length}`, h1s[0]?.index, "h1")
  const routeLocale = supportedLocales.find((candidate) => route.startsWith(`/${candidate}/`)) ?? "en"
  if (locale.toLowerCase() !== routeLocale.toLowerCase()) record(source, "metadata", `html lang ${locale || "(missing)"} does not match route locale ${routeLocale}`, allTags.find((tag) => tag.name === "html")?.offset, "html@lang")
  for (const [field, value, offset] of [["title", title.text, titleMatch?.index ?? 0], ["description", description, descriptionTag?.offset ?? 0], ["canonical", canonical, canonicalTags[0]?.offset ?? 0]] as const) {
    const normalized = value.normalize("NFC").replace(/\s+/g, " ").trim()
    if (!normalized) continue
    const entries = metadata.get(field)!
    entries.set(normalized, [...(entries.get(normalized) ?? []), { source, offset }])
    if (field === "canonical") continue
    const graphemes = [...new Intl.Segmenter(locale || "en", { granularity: "grapheme" }).segment(normalized)]
    const width = graphemes.reduce((sum, item) => sum + (/\p{Script=Han}|\p{Script=Hiragana}|\p{Script=Katakana}|\p{Script=Hangul}/u.test(item.segment) ? 2 : 1), 0)
    const [minimum, maximum] = field === "title" ? [12, 80] : [40, 240]
    if (width < minimum || width > maximum) record(source, "metadata", `${field} estimated display units ${width} outside advisory ${minimum}–${maximum} (${graphemes.length} graphemes)`, offset, field, "warn")
  }
}

for (const [field, values] of metadata) {
  for (const entries of values.values()) {
    if (entries.length > 1) for (const entry of entries) record(entry.source, "metadata", `duplicate ${field} shared by ${entries.filter((other) => other !== entry).map((other) => other.source.route).join(", ")}`, entry.offset, field)
  }
}

for (const page of pages.values()) {
  if (!page.indexable) continue
  const languages = new Set<string>()
  if (!page.alternates.some((alternate) => alternate.lang === page.locale.toLowerCase() && alternate.href === `${brand}${page.route}`)) record(page, "language-coverage", "missing self alternate with both matching locale and page URL")
  if (!page.alternates.some((alternate) => alternate.lang === "x-default")) record(page, "language-coverage", "missing x-default alternate")
  for (const alternate of page.alternates) {
    if (languages.has(alternate.lang)) record(page, "language-coverage", `duplicate alternate locale: ${alternate.lang}`, alternate.offset, "link[rel=alternate]")
    languages.add(alternate.lang)
    const targetRoute = siteRoute(alternate.href)
    const target = targetRoute === null ? undefined : pages.get(targetRoute)
    if (!target?.indexable) {
      record(page, "language-coverage", `alternate URL is invalid, nonindexable or unpublished: ${alternate.href}`, alternate.offset, "link[rel=alternate]")
      continue
    }
    if (alternate.href !== target.canonical) record(page, "language-coverage", `alternate URL differs from target canonical: ${target.canonical}`, alternate.offset, "link[rel=alternate]")
    if (alternate.lang !== "x-default" && alternate.lang !== target.locale.toLowerCase()) record(page, "language-coverage", `alternate locale ${alternate.lang} differs from target html lang ${target.locale}`, alternate.offset, "link[rel=alternate]")
    if (!target.alternates.some((back) => back.lang === page.locale.toLowerCase() && back.href === `${brand}${page.route}`)) record(page, "language-coverage", `alternate ${alternate.href} does not reciprocate ${page.locale} ${brand}${page.route}`, alternate.offset, "link[rel=alternate]")
    for (const sibling of page.alternates) {
      if (!target.alternates.some((entry) => entry.lang === sibling.lang && entry.href === sibling.href)) record(page, "language-coverage", `alternate cluster differs at ${alternate.href}: missing ${sibling.lang} ${sibling.href}`, alternate.offset, "link[rel=alternate]")
    }
  }
}

// Every page must expose the language selector, and every supported language must
// have a published homepage to land on. The selector falls back to the requested
// language's homepage when a page is untranslated, so a missing homepage would
// strand a visitor on the language they were trying to leave.
for (const page of pages.values()) {
  if (!page.indexable) continue
  // Either a labelled <select> or a labelled disclosure marked as the language
  // selector (links work without JavaScript) satisfies this check.
  if (!/<select[^>]*aria-label/.test(page.html) && !/<details[^>]*data-language-selector[^>]*>\s*<summary[^>]*aria-label/.test(page.html)) record(page, "language-coverage", "page does not expose the language selector")
}
for (const locale of supportedLocales) {
  const route = locale.toLowerCase() === "en" ? "/" : `/${locale}/`
  if (!pages.get(route)?.indexable) record({ file: `dist${route}index.html`, route, html: "" }, "language-coverage", `supported language ${locale} has no published homepage`)
}

// Page-type labels ("Import games", "Controllers", "Saves") render in breadcrumbs
// and related-link lists as short phrases. They are too short for the residue
// heuristic above, which needs four words or two English markers, so a page could
// show English navigation labels on an otherwise translated page and pass.
//
// Only slugs whose label is descriptive prose are checked. System and core slugs
// are excluded, because their labels are product names that stay in English in
// every language ("Game Gear", "Ares"), and requiring a translation there would
// be wrong rather than merely noisy. A label is reported only when it is
// byte-identical to the English label, so a legitimate shared form such as the
// Indonesian "Retropa vs Delta" is not flagged.
import { searchPageContent, searchPageSlugs } from "../src/content/search-pages/index.ts"
import { productDetail, productPages } from "../src/content/product-details.ts"

/**
 * Slugs whose label is a descriptive phrase rather than a product name. `plus`
 * is excluded because "Retropa Plus" is a product name that stays untranslated
 * in every language, exactly like a system name.
 */
const DESCRIPTIVE_LABEL_SLUGS = /(?:alternative|vs-|^import-|^connect-|^save-|wont-load$)/
const englishLabels = new Map<string, string>()
for (const slug of searchPageSlugs) {
  if (DESCRIPTIVE_LABEL_SLUGS.test(slug)) englishLabels.set(searchPageContent(slug, "en")!.label, slug)
}

for (const page of pages.values()) {
  if (!page.indexable || page.locale.toLowerCase() === "en") continue
  const breadcrumb = /<nav[^>]*class="[^"]*\bbreadcrumbs\b[^"]*"[^>]*>([\s\S]*?)<\/nav>/i.exec(page.html)
  if (!breadcrumb) continue
  const items = [...breadcrumb[1].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)].map((match) => decode(match[1].replace(/<[^>]+>/g, ""), 0, "label").text.trim())
  const label = items[items.length - 1]
  const slug = label && englishLabels.get(label)
  if (slug) record(page, "english-residue", `${page.locale} page shows the English navigation label for "${slug}": ${label}`, 0, "label")
}

// Product pages render their own label in the breadcrumb and the eyebrow. "GBA"
// and "DS" are product codes and never change, but "Arcade", "Skins" and
// "Filters" are ordinary words that each language either translates or keeps as a
// borrowing. The distinction is per language, not global: German keeps "Skins"
// while Spanish says "Diseños", and Turkish says "Temalar". A single global list
// of English words would therefore be arbitrary — it would let one language keep
// a word and forbid another — so the accepted shared forms are recorded per
// locale, which is the reviewed outcome rather than a rule that happens to pass.
const SHARED_PRODUCT_LABELS: Record<string, Set<string>> = {
  de: new Set(["Arcade", "Skins", "Filter"]),
  es: new Set(["Arcade"]),
  fr: new Set(["Arcade"]),
  it: new Set(["Arcade", "Skin"]),
  id: new Set(["Arcade", "Skin", "Filter"]),
  tr: new Set(["Arcade"]),
  vi: new Set(["Arcade"]),
  "pt-br": new Set(["Arcade", "Skins"]),
}
const PRODUCT_LABEL_CODES = new Set(["GBA", "DS"])
const englishProductLabels = new Map(productPages.map((page) => [productDetail(page, "en").label, page]))
for (const page of pages.values()) {
  if (!page.indexable || page.locale.toLowerCase() === "en") continue
  const breadcrumb = /<nav[^>]*class="[^"]*\bbreadcrumbs\b[^"]*"[^>]*>([\s\S]*?)<\/nav>/i.exec(page.html)
  if (!breadcrumb) continue
  const items = [...breadcrumb[1].matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)].map((match) => decode(match[1].replace(/<[^>]+>/g, ""), 0, "label").text.trim())
  const label = items[items.length - 1]
  const productPage = label && englishProductLabels.get(label)
  if (!productPage || PRODUCT_LABEL_CODES.has(label)) continue
  // A label identical to the English source is only acceptable when this locale is
  // recorded as using that exact form. Anything else means the label was left
  // untranslated on an otherwise translated page.
  const shared = SHARED_PRODUCT_LABELS[page.locale.toLowerCase()] ?? new Set<string>()
  if (shared.has(label)) continue
  record(page, "english-residue", `${page.locale} product page shows the English label for "${productPage}": ${label}`, 0, "label")
}

const published = new Set([...pages.values()].filter((page) => page.indexable).map((page) => page.route))

// Search pages need distinct explanations even when they share the same import,
// save and Plus constraints. Compare the rendered English core pages so this
// check measures what a visitor reads, rather than source formatting. The check
// is intentionally a warning: shared product facts are allowed, while a high
// overlap score is a review signal that a new page may have been generated from
// an unchanged template.
const CORE_ROUTES = ["ares-core", "jgenesis-core", "lakesnes-core", "mgba-core", "rusticones-core", "sameboy-core", "skyemu-core", "tetanes-core"]
const sentenceSet = (html: string) => new Set(
  visibleText(html).text
    .split(/[.!?。！？]+/)
    .map((sentence) => sentence.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim())
    .filter((sentence) => sentence.split(/\s+/).length >= 5),
)
const coreSentences = new Map<string, Set<string>>()
for (const route of CORE_ROUTES) {
  const page = pages.get(`/${route}/`)
  if (page?.indexable) coreSentences.set(route, sentenceSet(page.html))
}
for (let left = 0; left < CORE_ROUTES.length; left++) {
  for (let right = left + 1; right < CORE_ROUTES.length; right++) {
    const leftSet = coreSentences.get(CORE_ROUTES[left])
    const rightSet = coreSentences.get(CORE_ROUTES[right])
    if (!leftSet || !rightSet || !leftSet.size || !rightSet.size) continue
    const shared = [...leftSet].filter((sentence) => rightSet.has(sentence)).length
    const overlap = shared / Math.min(leftSet.size, rightSet.size)
    if (overlap >= 0.35) {
      const page = pages.get(`/${CORE_ROUTES[left]}/`)!
      record(page, "content-quality", `English core pages ${CORE_ROUTES[left]} and ${CORE_ROUTES[right]} share ${Math.round(overlap * 100)}% of their sentences`, 0, "rendered content", "warn")
    }
  }
}

const openingCounts = new Map<string, string[]>()
for (const [route, sentences] of coreSentences) {
  const opening = [...sentences][0]
  if (opening) openingCounts.set(opening, [...(openingCounts.get(opening) ?? []), route])
}
for (const [opening, routes] of openingCounts) {
  if (routes.length >= 3) {
    const page = pages.get(`/${routes[0]}/`)!
    record(page, "content-quality", `the same opening sentence appears on ${routes.length} English core pages: ${opening}`, 0, "rendered content", "warn")
  }
}

// Nintendo DS is currently a SkyEmu-only beta path in the app and its
// emulation-settings specification. Every localized SkyEmu page must say so;
// silently downgrading this to an ordinary support claim would overstate the
// tested surface and recreate the drift this change corrected.
const DS_BETA_MARKERS: Record<string, RegExp> = {
  en: /\bbeta\b/i,
  de: /beta/i,
  es: /beta/i,
  fr: /b[êe]ta/i,
  id: /beta/i,
  it: /beta/i,
  ja: /ベータ/i,
  ko: /베타/i,
  "pt-br": /beta/i,
  ru: /бета/i,
  th: /เบต้า/i,
  tr: /beta/i,
  vi: /beta/i,
  "zh-hans": /Beta|测试版/i,
  "zh-hant": /Beta|測試版/i,
}
for (const page of pages.values()) {
  if (!page.indexable || !page.route.endsWith("/skyemu-core/") && page.route !== "/skyemu-core/") continue
  const marker = DS_BETA_MARKERS[page.locale.toLowerCase()]
  if (marker && !marker.test(visibleText(page.html).text)) record(page, "content-quality", "SkyEmu page does not identify the Nintendo DS path as beta")
}

// A meta description and the page summary serve different search surfaces. A
// high token-level Jaccard score usually means one was copied from the other,
// wasting the second opportunity to describe the page. Keep this advisory so
// a short, naturally overlapping description does not block a release.
const tokenSet = (value: string) => new Set(value.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) ?? [])
const jaccard = (left: string, right: string) => {
  const a = tokenSet(left)
  const b = tokenSet(right)
  const union = new Set([...a, ...b]).size
  return union ? [...a].filter((token) => b.has(token)).length / union : 0
}
for (const slug of searchPageSlugs) {
  const content = searchPageContent(slug, "en")
  const page = pages.get(`/${slug}/`)
  if (!content?.description || !content.summary || !page?.indexable) continue
  const overlap = jaccard(content.description, content.summary)
  if (overlap >= 0.6) record(page, "content-quality", `English meta description and summary share ${Math.round(overlap * 100)}% of their tokens`, 0, "metadata/content", "warn")
}
for (const slug of productPages) {
  // Product details carry no separate description today, so this check is inert
  // until one is authored; the type keeps that field optional.
  const content = productDetail(slug, "en") as ReturnType<typeof productDetail> & { description?: string }
  const page = pages.get(`/${slug}/`)
  if (!content?.description || !content.summary || !page?.indexable) continue
  const overlap = jaccard(content.description, content.summary)
  if (overlap >= 0.6) record(page, "content-quality", `English meta description and summary share ${Math.round(overlap * 100)}% of their tokens`, 0, "metadata/content", "warn")
}

// Every page must send its own App Store campaign token, and the token must stay
// within Apple's 30-character limit. A site-wide constant would make per-page
// attribution impossible, which is the defect this check exists to prevent.
const CAMPAIGN = /[?&]ct=([^&"]+)/
for (const page of pages.values()) {
  if (!page.indexable) continue
  const tokens = new Set([...page.html.matchAll(/href="(https:\/\/apps\.apple\.com\/[^"]+)"/g)].map((match) => CAMPAIGN.exec(match[1].replace(/&amp;/g, "&"))?.[1]).filter((token): token is string => Boolean(token)))
  if (!tokens.size) continue
  const segments = page.route.split("/").filter(Boolean)
  // Strip a leading locale segment when there is one. This also covers `/de/`,
  // which is the German homepage rather than a page called "de".
  const withoutLocale = segments.length > 0 && supportedLocales.some((locale) => locale.toLowerCase() === segments[0].toLowerCase())
    ? segments.slice(1)
    : segments
  // A localized homepage keeps the homepage token: it is the same page in another
  // language, so splitting its campaign would fragment the homepage signal.
  const expected = withoutLocale.length === 0 ? "retropa_web_v1" : `retropa_${withoutLocale[withoutLocale.length - 1]}`
  for (const token of tokens) {
    if (token.length > 30) record(page, "crawl-assets", `App Store campaign token exceeds Apple's 30-character limit: ${token}`, 0, "a[href]")
    else if (token !== expected) record(page, "crawl-assets", `App Store campaign token does not identify this page: expected ${expected}, found ${token}`, 0, "a[href]")
  }
}

// Every indexable page must be reachable from the homepage by ordinary links
// within four hops, and in its own language. An orphaned landing page cannot
// rank, because nothing on the site points a crawler at it.
{
  const locales = new Set(supportedLocales.map((locale) => locale.toLowerCase()))
  const isLocaleRoot = (route: string) => {
    const [first] = route.split("/").filter(Boolean)
    return first !== undefined && locales.has(first.toLowerCase())
  }
  const linkGraph = new Map<string, string[]>()
  for (const page of pages.values()) {
    if (!page.indexable || isLocaleRoot(page.route)) continue
    const hrefs = [...page.html.matchAll(/<a[^>]*href="(\/[^"#?]*)"/g)].map((match) => match[1])
    linkGraph.set(page.route, hrefs.filter((href) => pages.get(href)?.indexable && !isLocaleRoot(href)))
  }
  const depth = new Map<string, number>([["/", 0]])
  const queue = ["/"]
  while (queue.length) {
    const current = queue.shift()!
    for (const next of linkGraph.get(current) ?? []) {
      if (!depth.has(next)) { depth.set(next, depth.get(current)! + 1); queue.push(next) }
    }
  }
  for (const page of pages.values()) {
    if (!page.indexable || isLocaleRoot(page.route)) continue
    const hops = depth.get(page.route)
    if (hops === undefined) record(page, "crawl-assets", "page is unreachable from the homepage by ordinary links")
    else if (hops > 4) record(page, "crawl-assets", `page is ${hops} hops from the homepage, exceeding the four-hop limit`)
  }
}

// Share artwork is referenced only from metadata, so a missing file is invisible
// in the rendered page while breaking every social preview. Check the referenced
// asset actually exists in the build output.
for (const page of pages.values()) {
  if (!page.indexable) continue
  for (const match of page.html.matchAll(/<meta[^>]+(?:property|name)="(?:og:image|twitter:image)"[^>]*content="([^"]+)"/g)) {
    const href = match[1].replace(/&amp;/g, "&")
    if (!href.startsWith(brand)) continue
    const asset = `dist${href.slice(brand.length)}`
    try { await readFile(asset) }
    catch { record(page, "image-alt", `share image does not exist in the build output: ${href}`, match.index ?? 0, "meta[og:image]") }
  }
}

// A page that names a competing product must carry a trademark attribution, so a
// comparison page can never ship as an implicit endorsement claim.
//
// The check is structural, not lexical: it looks for the rendered attribution
// block rather than matching a word such as "trademark". Matching a literal word
// would only recognise English and Chinese phrasing and would push translators to
// insert the English term into German or Spanish prose, which is the very defect
// the English-residue check exists to prevent. A localized attribution in any
// wording satisfies this check as long as the block is present and non-empty.
const COMPARISON_SLUGS = new Set(["delta-alternative", "retropa-vs-delta"])
for (const page of pages.values()) {
  const slug = page.route.split("/").filter(Boolean).find((segment) => COMPARISON_SLUGS.has(segment))
  if (!slug) continue
  const found = tags(page.html).some((tag) => attribute(tag, "class").split(/\s+/).includes("page-attribution"))
  if (!found) record(page, "capability-claims", `comparison page ${page.route} is missing a trademark attribution footnote`)
}

const declared = new Set(declaredPaths)
for (const route of declared) if (!published.has(route)) record(evidence, "crawl-assets", `build evidence lists a missing or nonindexable page: ${route}`)
for (const route of published) if (!declared.has(route)) record(pages.get(route)!, "crawl-assets", "indexable HTML file is absent from build evidence")
if (declaredPaths.length !== declared.size) record(evidence, "crawl-assets", "build evidence contains duplicate paths")
if (!pages.has("/404.html")) record({ file: "dist/404.html", route: "/404.html", html: "" }, "crawl-assets", "missing 404 page")
const sitemap = await load("dist/sitemap.xml", "/sitemap.xml")
const sitemapPaths = new Set<string>()
for (const match of sitemap.html.matchAll(/<loc\b[^>]*>([^<]*)<\/loc\s*>/gi)) {
  const href = decode(match[1], match.index, "loc").text.trim()
  const route = siteRoute(href)
  if (route === null) { record(sitemap, "crawl-assets", `invalid sitemap URL: ${href}`, match.index, "loc"); continue }
  if (sitemapPaths.has(route)) record(sitemap, "crawl-assets", `duplicate sitemap URL: ${href}`, match.index, "loc")
  sitemapPaths.add(route)
  if (!published.has(route)) record(sitemap, "crawl-assets", `sitemap lists a missing or nonindexable HTML page: ${href}`, match.index, "loc")
}
for (const route of published) if (!sitemapPaths.has(route)) record(pages.get(route)!, "crawl-assets", "indexable HTML file is missing from the sitemap")
const robots = await load("dist/robots.txt", "/robots.txt")
if (!/^Sitemap:\s*https:\/\/retropa\.com\/sitemap\.xml\s*$/im.test(robots.html)) record(robots, "crawl-assets", "robots.txt does not announce the sitemap")
// Content Signals state usage preferences for what the crawl rules let through.
// search and ai-input are always stated; ai-train may stay unstated, which
// neither grants nor restricts it. An open site keeps search=yes, and a closed
// one grants nothing.
const signals = new Map((/^Content-Signal:\s*(.+)$/im.exec(robots.html)?.[1] ?? "").split(",").map((part) => part.split("=").map((value) => value.trim().toLowerCase()) as [string, string]))
const closed = /^Disallow:\s*\/\s*$/im.test(robots.html)
for (const key of ["search", "ai-input", "ai-train"]) {
  const value = signals.get(key)
  if (value === undefined && key === "ai-train") continue
  if (value !== "yes" && value !== "no") record(robots, "crawl-assets", `robots.txt Content-Signal does not declare ${key}=yes or ${key}=no`)
  else if (closed ? value === "yes" : key === "search" && value === "no") record(robots, "crawl-assets", `robots.txt Content-Signal ${key}=${value} disagrees with its ${closed ? "Disallow" : "Allow"} rule`)
}
// Agent-readable copies (scripts/agent-assets.ts): each indexable page declares
// its Markdown, the file exists, and /llms.txt opens with an H1.
for (const route of published) {
  const page = pages.get(route)!
  const declaresMarkdown = tags(page.html).some((tag) => tag.name === "link" && hasRel(tag, "alternate") && attribute(tag, "type") === "text/markdown" && attribute(tag, "href") === `${page.canonical}index.md`)
  if (!declaresMarkdown) record(page, "crawl-assets", "page does not declare its Markdown alternate")
  if (!await stat(`dist${route}index.md`).then(() => true, () => false)) record(page, "crawl-assets", `missing Markdown copy dist${route}index.md`)
}
const llms = await load("dist/llms.txt", "/llms.txt")
if (!/^# \S/.test(llms.html)) record(llms, "crawl-assets", "llms.txt does not open with an H1")

// A locale file that exists on disk but is not registered in its loader is
// invisible: the translation is finished, yet the route silently falls back to
// English. That happened once during this change, so it is checked rather than
// trusted. The loaders import explicitly because they also run under plain bun,
// where `import.meta.glob` does not exist, so registration must be verified.
const CONTENT_FAMILIES = [
  { name: "search-pages", dir: "src/content/search-pages/locales", loader: "src/content/search-pages/index.ts" },
  { name: "product-details", dir: "src/content/product-details/locales", loader: "src/content/product-details.ts" },
  { name: "start-page", dir: "src/content/start-page/locales", loader: "src/content/start-page/index.ts" },
  { name: "guides-index", dir: "src/content/guides-index/locales", loader: "src/content/guides-index/index.ts" },
]
for (const family of CONTENT_FAMILIES) {
  let names: string[] = []
  try {
    names = (await readdir(family.dir)).filter((name) => name.endsWith(".ts")).map((name) => name.replace(/\.ts$/, ""))
  } catch {
    record({ file: family.dir, route: `/${family.name}`, html: "" }, "language-coverage", `missing locale directory for ${family.name}`)
    continue
  }
  const loader = await readFile(family.loader, "utf8")
  for (const locale of names) {
    const body = await readFile(`${family.dir}/${locale}.ts`, "utf8")
    // A placeholder exports an empty map; it is intentionally unregistered.
    if (/\b(?:pages|content)\s*=\s*\{\s*\}\s*as/.test(body)) continue
    if (!loader.includes(`locales/${locale}"`)) {
      record({ file: `${family.dir}/${locale}.ts`, route: `/${family.name}/${locale}`, html: "" }, "language-coverage", `${family.name}/${locale}.ts has content but is not registered in ${family.loader}, so its pages fall back to English`)
    }
  }
}

const failures = findings.filter((finding) => finding.severity === "fail")
const warnings = findings.filter((finding) => finding.severity === "warn")

/**
 * Localization coverage per language. Every route that exists in English but not
 * in a language is listed explicitly, so "this language is not finished" is a
 * number in the build output rather than something a visitor discovers by
 * clicking. Coverage is reported, not enforced: a partially localized site is a
 * legitimate state, a silently misleading one is not.
 */
const localeRoutes = new Map<string, Set<string>>()
for (const route of published) {
  const segments = route.split("/").filter(Boolean)
  const locale = segments.length > 0 && supportedLocales.some((value) => value.toLowerCase() === segments[0].toLowerCase())
    ? segments[0]
    : "en"
  const key = locale.toLowerCase() === "en" ? "en" : supportedLocales.find((value) => value.toLowerCase() === locale.toLowerCase())!
  // The route with its locale prefix removed, so coverage compares like with like.
  // A localized homepage reduces to "/", not "//".
  const rest = segments.slice(1)
  const bare = key.toLowerCase() === "en" ? route : rest.length === 0 ? "/" : `/${rest.join("/")}/`
  if (!localeRoutes.has(key)) localeRoutes.set(key, new Set())
  localeRoutes.get(key)!.add(bare)
}
const englishRoutes = localeRoutes.get("en") ?? new Set<string>()
const coverage: Record<string, { published: number; englishOnly: number; missing: string[] }> = {}
for (const locale of supportedLocales) {
  const own = localeRoutes.get(locale) ?? new Set<string>()
  const missing = [...englishRoutes].filter((route) => !own.has(route)).sort()
  coverage[locale] = { published: own.size, englishOnly: missing.length, missing }
}

const summary = {
  schemaVersion: 1, revision, generatedAt: new Date().toISOString(), mode: reportOnly ? "report" : "enforce",
  pages: published.size, htmlFiles: inventory.length, checks, coverage,
  limitations: [
    "English-residue, pricing prose and capability mentions are heuristic checks, not exhaustive semantic validation.",
    "Capability support, entitlement boundaries and structured-data correspondence to visible facts still require human review; the unsupported-platform check blocks bare platform names but cannot judge whether a supported claim is accurate.",
    "Legal routes retain the previous verifier's English-residue exemption; this is not proof of localization compliance.",
    "Metadata lengths are multilingual display-width estimates, not search-engine truncation guarantees.",
    "Comparison pages are checked for a trademark attribution footnote, not for the factual accuracy of each comparison.",
    "Localization coverage counts routes that exist; it does not judge translation quality.",
  ],
  failures: failures.length, warnings: warnings.length,
  byCheck: Object.fromEntries(checks.map((check) => [check, failures.filter((finding) => finding.check === check).length])),
  results: Object.fromEntries(checks.map((check) => {
    const failed = failures.filter((finding) => finding.check === check).length
    const warned = warnings.filter((finding) => finding.check === check).length
    return [check, { status: failed ? "fail" : warned ? "warn" : "pass", failures: failed, warnings: warned, ...(check === "capability-claims" ? { semanticReview: "required" } : {}) }]
  })),
  inventory: [...pages.values()].map((page) => ({ path: page.route, file: page.file, indexable: page.indexable })),
  findings,
}
await writeFile("dist/integrity-report.json", JSON.stringify(summary, null, 2))


console.log(`Integrity: ${published.size} indexable pages (${inventory.length} HTML files), ${failures.length} failures, ${warnings.length} warnings`)
console.log("  by check:", JSON.stringify(summary.byCheck))
const incomplete = supportedLocales
  .map((locale) => [locale, coverage[locale]] as const)
  .filter(([locale, entry]) => locale !== "en" && entry.englishOnly > 0)
if (incomplete.length) {
  console.log("  localization coverage (routes still only available in English):")
  for (const [locale, entry] of incomplete) console.log(`    ${locale}: ${entry.published} translated, ${entry.englishOnly} English-only`)
} else {
  console.log("  localization coverage: every supported language covers every route")
}
for (const finding of [...failures.slice(0, 25), ...warnings.slice(0, 10)]) console.log(`  ${finding.severity} [${finding.check}] ${finding.path} ${finding.position.file}:${finding.position.line}:${finding.position.column} (${finding.position.context}${finding.position.jsonPointer === undefined ? "" : ` ${finding.position.jsonPointer}`}) — ${finding.detail}`)
if (failures.length > 25 || warnings.length > 10) console.log("  Full diagnostics: dist/integrity-report.json")
console.log("  Capability and localization semantics still require human review.")
if (failures.length && !reportOnly) process.exit(1)
if (reportOnly && failures.length) console.log("Report mode: not failing the build.")
