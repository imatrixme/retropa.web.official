import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { PrivacyDocument } from "@/documents/privacy-document"
import { I18nProvider } from "@/i18n/context"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <PrivacyDocument />
    </I18nProvider>
  </StrictMode>
)
