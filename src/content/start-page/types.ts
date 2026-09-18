export type StartStep = [string, string]

export type StartFAQ = {
  id: string
  question: string
  answer: string
  link?: string
  linkLabel?: string
}

export type StartPageContent = {
  /** Page metadata, kept with the copy so a translation cannot leave stale English metadata. */
  /**
   * Optional page metadata. When absent it is derived from the translated title
   * and intro below, so a locale never inherits stale English metadata.
   */
  metaTitle?: string
  description?: string
  title: string
  intro: string
  steps: StartStep[]
  faqTitle: string
  systems: string
  support: string
  faqs: StartFAQ[]
}
