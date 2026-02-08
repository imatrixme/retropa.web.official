import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { TermsDocument } from "@/documents/terms-document"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TermsDocument />
  </StrictMode>
)
