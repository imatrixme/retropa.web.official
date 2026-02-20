import { HomeDocument } from "@/documents/home-document"
import { I18nProvider } from "@/i18n/context"

function App() {
  return (
    <I18nProvider>
      <HomeDocument />
    </I18nProvider>
  )
}

export default App
