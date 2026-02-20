import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { HomeDocument } from "@/documents/home-document"
import { I18nProvider } from "@/i18n/context"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <HomeDocument />
    </I18nProvider>
  </StrictMode>
)
