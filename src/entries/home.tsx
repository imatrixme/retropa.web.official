import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { HomeDocument } from "@/documents/home-document"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomeDocument />
  </StrictMode>
)
