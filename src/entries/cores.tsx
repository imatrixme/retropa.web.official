import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { CoresDocument } from "@/documents/cores-document"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoresDocument />
  </StrictMode>
)
