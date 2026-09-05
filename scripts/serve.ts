import { resolve, extname } from "node:path"
import { stat } from "node:fs/promises"

const root = resolve("dist")
const port = Number(process.env.RETROPA_PREVIEW_PORT ?? 4178)
const server = Bun.serve({
  hostname: "127.0.0.1", port,
  async fetch(request) {
    if (!["GET", "HEAD"].includes(request.method)) return new Response(null, { status: 405 })
    const url = new URL(request.url)
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
    const file = Bun.file(info?.isDirectory() ? `${path}/index.html` : path)
    const exists = await file.exists()
    const content = exists ? file : Bun.file(`${root}/404.html`)
    const headers = { "Content-Type": content.type, "Cache-Control": exists && pathname.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "no-cache", "X-Content-Type-Options": "nosniff" }
    if (extname(path) === ".html") headers["Content-Type"] = "text/html;charset=utf-8"
    return new Response(request.method === "HEAD" ? null : content, { status: exists && pathname !== "/404.html" ? 200 : 404, headers })
  },
})
console.log(`Retropa preview: ${server.url}`)
