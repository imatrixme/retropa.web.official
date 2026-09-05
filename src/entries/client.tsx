import { createRoot, hydrateRoot } from "react-dom/client"
import { Site } from "@/site"
import { legacyLocaleRedirect, routeFromPath } from "@/lib/routes"
import { getPageMetadata } from "@/lib/metadata"
import "@/index.css"

legacyLocaleRedirect()
const route = routeFromPath(location.pathname)
const root = document.getElementById("root")!
const app = <Site {...route} />
if (root.hasChildNodes()) hydrateRoot(root, app)
else {
  document.documentElement.lang = route.locale
  document.title = getPageMetadata(route.page, route.locale).title
  createRoot(root).render(app)
}
