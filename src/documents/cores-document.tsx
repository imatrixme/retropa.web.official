import { SiteLayout } from "@/components/site-layout"
import { CoresPage } from "@/pages/cores-page"

export function CoresDocument() {
  return (
    <SiteLayout currentPage="cores">
      <CoresPage />
    </SiteLayout>
  )
}
