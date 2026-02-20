export const pageKeys = ["home", "cores", "terms", "privacy"] as const

export type PageKey = (typeof pageKeys)[number]

export const pagePathByKey: Record<PageKey, string> = {
  home: "/",
  cores: "/cores/",
  terms: "/terms/",
  privacy: "/privacy/",
}
