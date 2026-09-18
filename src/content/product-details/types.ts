export const productPages = ["gba-emulator", "ds-emulator", "arcade", "delta-skins", "crt-filters"] as const
export type ProductPage = typeof productPages[number]

export type ProductSection = { title: string; body: string; points?: string[] }

export type ProductDetail = {
  title: string
  summary: string
  label: string
  image: "material" | "filter" | "library"
  imageAlt: string
  sections: ProductSection[]
  link: string
  linkLabel: string
}
