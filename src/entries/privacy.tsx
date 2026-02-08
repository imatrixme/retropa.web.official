import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { PrivacyDocument } from "@/documents/privacy-document"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivacyDocument />
  </StrictMode>
)
