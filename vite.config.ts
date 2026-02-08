import path from "path"

import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "index.html"),
        terms: path.resolve(__dirname, "terms/index.html"),
        privacy: path.resolve(__dirname, "privacy/index.html"),
      },
    },
  },
})
