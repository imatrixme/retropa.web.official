import { resolve, extname } from "node:path"
import { stat } from "node:fs/promises"
import { legacyLocaleTarget } from "../src/lib/legacy-locale"

// Local preview with the production behavior that matters for checks: legacy
// redirects, index.html canonicalization, gzip, and the Markdown negotiation
// documented in deploy/nginx.conf.example.
const root = resolve("dist")
const port = Number(process.env.RETROPA_PREVIEW_PORT ?? 4178)
const site = "https://retropa.com"
const homeLinks = '</llms.txt>; rel="describedby"; type="text/plain", </index.md>; rel="alternate"; type="text/markdown"'

/** True when the request lists text/markdown without q=0, as agents that want Markdown do. */
const prefersMarkdown = (request: Request) => (request.headers.get("accept") ?? "").split(",").some((part) => {
  const [type, ...parameters] = part.split(";").map((value) => value.trim().toLowerCase())
  return type === "text/markdown" && !parameters.some((parameter) => /^q=0(?:\.0*)?$/.test(parameter))
})

const server = Bun.serve({
  hostname: "127.0.0.1", port,
  async fetch(request) {
    if (!["GET", "HEAD"].includes(request.method)) return new Response(null, { status: 405 })
    const url = new URL(request.url)
    const legacy = legacyLocaleTarget(url)
    if (legacy) return Response.redirect(legacy.href, 308)
    let pathname: string
    try { pathname = decodeURIComponent(url.pathname) } catch { return new Response(null, { status: 400 }) }
    const path = resolve(root, `.${pathname}`)
    if (path !== root && !path.startsWith(`${root}/`)) return new Response(null, { status: 403 })
    if (pathname.endsWith("/index.html") && await Bun.file(path).exists()) {
      url.pathname = pathname.slice(0, -10)
      return Response.redirect(url.href, 308)
    }
    const info = await stat(path).catch(() => null)
    if (info?.isDirectory() && !pathname.endsWith("/")) {
      url.pathname += "/"
      return Response.redirect(url.href, 308)
    }
    const page = info?.isDirectory() === true
    const markdown = page && prefersMarkdown(request) && await Bun.file(`${path}/index.md`).exists()
    const file = Bun.file(page ? `${path}/index.${markdown ? "md" : "html"}` : path)
    const exists = await file.exists()
    const content = exists ? file : Bun.file(`${root}/404.html`)
    const headers: Record<string, string> = { "Content-Type": content.type, "Cache-Control": exists && pathname.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "no-cache", "X-Content-Type-Options": "nosniff" }
    if (extname(path) === ".html" || (page && !markdown) || !exists) headers["Content-Type"] = "text/html;charset=utf-8"
    // Pages have two representations, so caches must key on Accept; the
    // Markdown copy names its HTML page as canonical so it never competes with it.
    if (page) headers.Vary = "Accept"
    if (markdown || (exists && pathname.endsWith("/index.md"))) {
      headers["Content-Type"] = "text/markdown; charset=utf-8"
      headers.Link = `<${site}${markdown ? pathname : pathname.slice(0, -8)}>; rel="canonical"`
    } else if (page && pathname === "/") headers.Link = homeLinks
    const status = exists && pathname !== "/404.html" ? 200 : 404
    // Mirror production text compression so local performance checks are comparable.
    const compressible = /^(?:text\/|application\/(?:javascript|json|xml)|image\/svg)/.test(headers["Content-Type"])
    if (compressible && request.method !== "HEAD" && /\bgzip\b/.test(request.headers.get("accept-encoding") ?? "")) {
      return new Response(Bun.gzipSync(new Uint8Array(await content.arrayBuffer())), { status, headers: { ...headers, "Content-Encoding": "gzip", Vary: headers.Vary ? "Accept, Accept-Encoding" : "Accept-Encoding" } })
    }
    return new Response(request.method === "HEAD" ? null : content, { status, headers })
  },
})
console.log(`Retropa preview: ${server.url}`)
