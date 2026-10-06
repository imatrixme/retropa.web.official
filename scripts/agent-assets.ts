// Agent-readable copies of the published site, written after Astro renders it:
// an index.md beside every indexable page (that page's <main> as Markdown) and
// /llms.txt, the site overview. They carry the same facts as the HTML, without
// navigation, scripts or decoration; deploy/nginx.conf.example serves them to
// requests that prefer text/markdown.
import { readFile, writeFile } from "node:fs/promises"
import { getPageMetadata, publishedPages } from "../src/lib/metadata.ts"
import { localizedPath } from "../src/lib/routes.ts"
import { siteConfig } from "../src/lib/site-config.ts"
import { shippedVersion } from "../src/content/releases.ts"
import { isSearchPage, searchPageContent } from "../src/content/search-pages/index.ts"
import { acquisitionCopy } from "../src/content/acquisition.ts"

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"])
/** Interactive, decorative or navigational subtrees: not page content. */
const SKIP = new Set(["script", "style", "noscript", "svg", "template", "button", "input", "select", "textarea", "video", "audio", "canvas", "iframe", "nav", "form", "dialog", "astro-island"])
/** Elements that join their text to the surrounding text without a break. */
const INLINE = new Set(["a", "strong", "em", "b", "i", "code", "time", "abbr", "sup", "sub", "mark", "q", "cite", "s", "u", "small"])
const BLOCK = new Set(["p", "summary", "figcaption", "dt", "dd", "blockquote", "caption", "legend"])
const CONTAINER = new Set(["div", "section", "article", "header", "footer", "aside", "figure", "details", "fieldset", "dl"])

const entities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " }
const decode = (text: string) => text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, name: string) => {
  if (name[0] === "#") return String.fromCodePoint(name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : Number(name.slice(1)))
  return entities[name.toLowerCase()] ?? match
})
// Sentence punctuation closes up to the word before it; a dot or bang that starts
// a token (".gba", "![image]") keeps its space.
const clean = (text: string) => text.replace(/\s+/g, " ").replace(/ ([,.;:!?)](?=\s|$)|[，。、；：！？）」』])/g, "$1").trim()

/** Converts the `<main>` of a rendered page to Markdown. Headings move one level down, below the page title. */
export async function mainMarkdown(html: string, canonical: string): Promise<string> {
  // Items of one list join with single newlines; every other block is a paragraph.
  const blocks: { text: string; item: boolean; run: number }[] = []
  let buffer = ""
  let prefix = ""
  let suffix = ""
  let item: number | null = null // the list item being written: its number, or 0 for a bullet
  let run = 0 // counts top-level lists, so two adjacent lists stay apart
  let inMain = false
  let skip = 0
  let nested = 0 // inside a heading, list item or table cell: inner blocks run inline
  const lists: { ordered: boolean; count: number }[] = []
  let link: { href: string; text: string } | null = null
  let table: string[][] | null = null
  let row: string[] | null = null
  let cell: string | null = null

  const absolute = (href: string) => {
    if (!href) return ""
    if (href.startsWith("#")) return `${canonical}${href}`
    try { return new URL(href, canonical).href } catch { return href }
  }
  const write = (text: string) => {
    if (cell !== null) cell += text
    else if (link) link.text += text
    else buffer += text
  }
  const flush = () => {
    let text = clean(buffer)
    buffer = ""
    // An item that shows its own number ("01 Files") keeps only the list's.
    if (item) text = text.replace(new RegExp(`^0*${item}\\s+`), "")
    if (text) blocks.push({ text: `${prefix}${text}${suffix}`, item: item !== null, run })
    prefix = ""
    suffix = ""
    item = null
  }
  const block = (start: string, end = "", number: number | null = null) => { flush(); prefix = start; suffix = end; item = number }
  const onEnd = (element: HTMLRewriterTypes.Element, handler: () => void) => { if (!VOID.has(element.tagName) && !element.selfClosing) element.onEndTag(handler) }

  await new HTMLRewriter()
    .on("*", {
      element(element) {
        const tag = element.tagName
        if (tag === "main") { inMain = true; onEnd(element, () => { flush(); inMain = false }); return }
        if (!inMain) return
        if (skip > 0 || SKIP.has(tag) || element.getAttribute("aria-hidden") === "true" || element.hasAttribute("hidden") || (tag === "small" && element.hasAttribute("lang"))) {
          if (!VOID.has(tag) && !element.selfClosing) { skip++; element.onEndTag(() => { skip-- }) }
          return
        }
        const heading = /^h([1-6])$/.exec(tag)
        if (heading) {
          if (nested) { write(" "); return }
          block(`${"#".repeat(Math.min(6, Number(heading[1]) + 1))} `)
          nested++
          onEnd(element, () => { nested--; flush() })
        } else if (tag === "ul" || tag === "ol") {
          if (cell === null) flush()
          if (!lists.length) run++
          lists.push({ ordered: tag === "ol", count: 0 })
          onEnd(element, () => { lists.pop(); if (cell === null) flush() })
        } else if (tag === "li") {
          const list = lists[lists.length - 1]
          if (!list || cell !== null) { write(" "); return }
          list.count++
          block(`${"  ".repeat(lists.length - 1)}${list.ordered ? `${list.count}.` : "-"} `, "", list.ordered ? list.count : 0)
          nested++
          onEnd(element, () => { nested--; flush() })
        } else if (tag === "table") {
          flush()
          table = []
          onEnd(element, () => {
            const rows = table ?? []
            table = null
            const width = Math.max(0, ...rows.map((cells) => cells.length))
            if (!width) return
            const line = (cells: string[]) => `| ${Array.from({ length: width }, (_, index) => cells[index] ?? "").join(" | ")} |`
            blocks.push({ text: [line(rows[0]), line(Array(width).fill("---")), ...rows.slice(1).map(line)].join("\n"), item: false, run })
          })
        } else if (tag === "tr") {
          row = []
          onEnd(element, () => { if (row && table) table.push(row); row = null })
        } else if (tag === "td" || tag === "th") {
          cell = ""
          onEnd(element, () => { row?.push(clean(cell ?? "").replace(/\|/g, "\\|")); cell = null })
        } else if (tag === "a") {
          const href = absolute(decode(element.getAttribute("href") ?? ""))
          const outer = link
          link = { href, text: "" }
          onEnd(element, () => {
            const inner = link!
            link = outer
            const text = clean(inner.text).replace(/[[\]]/g, "\\$&")
            if (text) write(inner.href ? `[${text}](${inner.href})` : text)
          })
        } else if (tag === "img") {
          const alt = clean(decode(element.getAttribute("alt") ?? ""))
          if (!alt) return
          write(link || cell !== null ? ` ${alt} ` : ` ![${alt.replace(/[[\]]/g, "\\$&")}](${absolute(decode(element.getAttribute("src") ?? ""))}) `)
        } else if (tag === "br") {
          write(" ")
        } else if (BLOCK.has(tag)) {
          if (nested || cell !== null) { write(" "); onEnd(element, () => write(" ")); return }
          if (tag === "summary") block("**", "**")
          else block(tag === "blockquote" ? "> " : "")
          onEnd(element, flush)
        } else if (CONTAINER.has(tag)) {
          if (nested || cell !== null) { write(" "); onEnd(element, () => write(" ")); return }
          flush()
          onEnd(element, flush)
        } else if (!INLINE.has(tag) && !element.getAttribute("class")?.split(/\s+/).includes("phrase")) {
          // A span or label laid out as its own line keeps a word break.
          write(" ")
          onEnd(element, () => write(" "))
        }
      },
    })
    .onDocument({
      text(chunk) { if (inMain && skip === 0) write(decode(chunk.text)) },
    })
    .transform(new Response(html)).text()
  flush()
  return blocks.map((entry, index) => {
    const previous = blocks[index - 1]
    return `${!previous ? "" : entry.item && previous.item && entry.run === previous.run ? "\n" : "\n\n"}${entry.text}`
  }).join("")
}

const pageUrl = (page: string, locale: string) => new URL(localizedPath(page, locale as never), siteConfig.siteUrl).href
const markdownUrl = (page: string, locale: string) => `${pageUrl(page, locale)}index.md`
const languageName: Record<string, string> = { en: "English", "zh-Hans": "简体中文", ja: "日本語" }
const otherLanguages: Record<string, string> = { en: "Other languages", "zh-Hans": "其他语言", ja: "他の言語" }

/** Writes index.md beside every indexable page and /llms.txt; returns the problems found. */
export async function writeAgentAssets(dist: string): Promise<{ pages: number; failures: string[] }> {
  const failures: string[] = []
  for (const { page, locale } of publishedPages) {
    const path = localizedPath(page, locale)
    const meta = getPageMetadata(page, locale)
    const html = await readFile(`${dist}${path}index.html`, "utf8")
    const body = await mainMarkdown(html, meta.canonical)
    const languages = meta.alternates.filter((item) => item.locale !== locale).map((item) => `[${languageName[item.locale] ?? item.locale}](${item.href}index.md)`)
    const markdown = [
      `# ${meta.title}`,
      `> ${meta.description}`,
      [`URL: ${meta.canonical}`, languages.length ? `${otherLanguages[locale] ?? otherLanguages.en}: ${languages.join(" · ")}` : ""].filter(Boolean).join("  \n"),
      body,
    ].join("\n\n") + "\n"
    if (!/^# \S/.test(markdown)) failures.push(`${path}index.md has no H1`)
    if (body.replace(/\s+/g, "").length < 120) failures.push(`${path}index.md has under 120 characters of content`)
    const tag = /<\/?[a-z][a-z0-9-]*(?:\s[^<>]*)?\/?>/i.exec(markdown)
    if (tag) failures.push(`${path}index.md keeps an HTML tag: ${tag[0].slice(0, 60)}`)
    await writeFile(`${dist}${path}index.md`, markdown)
  }

  // Site overview in the llmstxt.org shape: H1, a summary, then annotated links.
  const english = publishedPages.filter((entry) => entry.locale === "en").map((entry) => entry.page)
  const kind = (page: string) => (isSearchPage(page) ? searchPageContent(page, "en")?.kind : undefined)
  const groups: [string, (page: string) => boolean][] = [
    ["Product", (page) => !["terms", "privacy", "start", "guides"].includes(page) && !["guide", "system", "core", "compare"].includes(kind(page) ?? "")],
    ["Guides", (page) => page === "start" || page === "guides" || kind(page) === "guide"],
    ["Systems, cores and comparisons", (page) => ["system", "core", "compare"].includes(kind(page) ?? "")],
  ]
  const entry = (page: string, locale: string, described = true) => {
    const meta = getPageMetadata(page, locale as never)
    return `- [${meta.title}](${markdownUrl(page, locale)})${described ? `: ${meta.description}` : ""}`
  }
  const copy = acquisitionCopy("en")
  const sections = [
    "# Retropa",
    "> Retropa is a retro game emulator for iPhone and iPad. It plays Game Boy, Game Boy Color, Game Boy Advance, Nintendo DS, NES, SNES, Master System, Game Gear, Mega Drive / Genesis, WonderSwan and Neo Geo Pocket games, and arcade boards (CPS I/II/III, Neo Geo, PGM, Irem M92, Midway T/W), from files you import yourself.",
    [
      `Current App version: ${shippedVersion}. ${copy.free} Some features require Retropa Plus. ${copy.noRoms}`,
      `Website: ${siteConfig.siteUrl}/ · App Store: ${siteConfig.appStoreUrl} · Release history: ${markdownUrl("changelog", "en")}`,
      "Every page below is also published as HTML at the same address without index.md. The site is available in English, Simplified Chinese and Japanese.",
    ].join("\n"),
    ...groups.map(([title, test]) => [`## ${title}`, ...english.filter(test).map((page) => entry(page, "en"))].join("\n")),
    ...["zh-Hans", "ja"].map((locale) => [`## ${languageName[locale]}`, ...publishedPages.filter((item) => item.locale === locale && !["terms", "privacy"].includes(item.page)).map((item) => entry(item.page, locale, false))].join("\n")),
    ["## Optional", entry("terms", "en"), entry("privacy", "en")].join("\n"),
  ]
  await writeFile(`${dist}/llms.txt`, `${sections.join("\n\n")}\n`)
  return { pages: publishedPages.length, failures }
}
