import { fileURLToPath } from "node:url"
import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"
import tailwindcss from "@tailwindcss/vite"

// Static-first build. Every page renders to HTML without client JavaScript;
// interactive regions hydrate as isolated islands (React API via preact/compat).
export default defineConfig({
  site: "https://retropa.com",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory", assets: "assets" },
  compressHTML: true,
  // Islands are written against the React API and run on preact/compat (~4 KB).
  integrations: [preact({ compat: true })],
  vite: {
    plugins: [tailwindcss()],
    envPrefix: ["VITE_", "PUBLIC_"],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  },
})
