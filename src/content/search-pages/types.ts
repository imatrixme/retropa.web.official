import type { Locale } from "@/i18n/locales"

/**
 * A single section of a search landing page. `points` renders as a list under
 * the body and is used for concrete, checkable guidance rather than marketing.
 */
export type SearchSection = {
  title: string
  body: string
  points?: string[]
}

/**
 * A question/answer pair rendered as a `details` block and mirrored into
 * FAQPage structured data. `id` must be unique within the page.
 */
export type SearchFAQ = {
  id: string
  question: string
  answer: string
}

export type SearchPageKind = "system" | "core" | "compare" | "guide" | "capability"

export type SearchPageContent = {
  kind: SearchPageKind
  /** Route slug, also the page key used by the route registry. */
  slug: string
  /** Short label used in breadcrumbs and related-link lists. */
  label: string
  title: string
  description: string
  summary: string
  sections: SearchSection[]
  faqs?: SearchFAQ[]
  /**
   * Optional attribution rendered as a footnote. Comparison pages use it to
   * state that third-party product names belong to their owners and that no
   * affiliation or endorsement is implied.
   */
  attribution?: string
  /** Slugs of related search pages, rendered as cross-links. */
  related?: string[]
}

/**
 * Content for one page across the locales it is actually published in. A locale
 * missing from this map is not published, and is therefore not registered as a
 * language alternate.
 */
export type LocalizedSearchPage = Partial<Record<Locale, SearchPageContent>>

export const searchLocales: readonly Locale[] = ["en", "zh-Hans"]
