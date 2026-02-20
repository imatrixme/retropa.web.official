import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { CoresDocument } from "@/documents/cores-document"
import { I18nProvider } from "@/i18n/context"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <CoresDocument />
    </I18nProvider>
  </StrictMode>
)
