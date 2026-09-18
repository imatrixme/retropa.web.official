export type GuidesIndexContent = {
  /** Page metadata, kept with the copy so a translation cannot leave stale English metadata. */
  /**
   * Optional page metadata. When absent it is derived from the translated title
   * and intro below, so a locale never inherits stale English metadata.
   */
  metaTitle?: string
  description?: string
  breadcrumb: string
  eyebrow: string
  title: string
  intro: string
  allGuides: string
  freeLabel: string
}
