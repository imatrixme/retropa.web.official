import { Download } from "lucide-react"

import { useI18n } from "@/i18n/context"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

type PrismaticDownloadButtonProps = {
  label?: string
  size?: "sm" | "lg"
  className?: string
}

const sizeClassByVariant: Record<NonNullable<PrismaticDownloadButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-[11px] tracking-[0.12em]",
  lg: "h-11 px-7 text-sm tracking-[0.13em]",
}

const iconClassByVariant: Record<NonNullable<PrismaticDownloadButtonProps["size"]>, string> = {
  sm: "h-3.5 w-3.5",
  lg: "h-4 w-4",
}

export function PrismaticDownloadButton({
  label,
  size = "lg",
  className,
}: PrismaticDownloadButtonProps) {
  const { messages } = useI18n()
  const resolvedLabel = label ?? messages.home.downloadForIOSLabel

  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "cta-prismatic group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase text-white",
        sizeClassByVariant[size],
        className
      )}
    >
      <span className="cta-prismatic-shimmer" aria-hidden="true" />
      <Download className={cn("relative z-[2] transition-transform duration-300 group-hover:-translate-y-0.5", iconClassByVariant[size])} />
      <span className="relative z-[2] whitespace-nowrap">{resolvedLabel}</span>
    </a>
  )
}
