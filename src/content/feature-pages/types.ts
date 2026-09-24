export const featurePages = ["controls", "import"] as const
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
}
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
}
