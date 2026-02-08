import { Navigate, Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/site-layout"
import { HomePage } from "@/pages/home-page"
import { PrivacyPage } from "@/pages/privacy-page"
import { TermsPage } from "@/pages/terms-page"

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
