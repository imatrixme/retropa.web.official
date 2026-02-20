import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { TermsDocument } from "@/documents/terms-document"
import { I18nProvider } from "@/i18n/context"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <TermsDocument />
    </I18nProvider>
  </StrictMode>
)
