import { SiteLayout } from "@/components/site-layout"
import { HomePage } from "@/pages/home-page"

export function HomeDocument() {
  return (
    <SiteLayout currentPage="home">
      <HomePage />
    </SiteLayout>
  )
}
