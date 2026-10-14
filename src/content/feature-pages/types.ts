export const featurePages = ["controls", "import", "packhub", "products"] as const
export type FeaturePage = typeof featurePages[number]

export type FeatureTable = { head: string[]; rows: string[][] }
export type FeatureSection = {
  id: string
  title: string
  body: string
  points?: string[]
  /** Marks a section whose capability needs Retropa Plus. */
  plus?: boolean
  /** A published `ui/*` screenshot and its alternative text. */
  shot?: { name: string; alt: string }
  table?: FeatureTable
  /** Embeds the Touch Lab demonstration after the body. */
  lab?: boolean
  /** Link cards rendered after the body: PackHub catalogs, or the products on the products page. */
  catalogs?: FeatureCatalog[]
}
/**
 * A link card. It points at exactly one of: the App Store (`appStore`, tagged
 * with the page's campaign), a page on this site (`page`, same tab) or an
 * outside URL (`href`, new tab). `note` is the one-line summary the header's
 * product menu shows.
 */
export type FeatureCatalog = {
  title: string
  body: string
  action: string
  note?: string
} & ({ href: string; page?: never; appStore?: never } | { page: string; href?: never; appStore?: never } | { appStore: true; href?: never; page?: never })
export type FeatureFaq = { id: string; question: string; answer: string }

export type FeatureContent = {
  metaTitle: string
  description: string
  label: string
  eyebrow: string
  title: string
  intro: string
  sections: FeatureSection[]
  faqTitle: string
  faqs: FeatureFaq[]
  related: string
  /** Last item of the header's product menu, linking to this page. Only the products page sets it. */
  menuAll?: string
}
