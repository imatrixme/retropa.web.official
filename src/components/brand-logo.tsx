import { cn } from "@/lib/utils"

type BrandLogoProps = {
  size?: "sm" | "md" | "lg"
  showWordmark?: boolean
  className?: string
}

const imageSizeClassMap = {
  sm: "h-9 w-9 rounded-xl",
  md: "h-12 w-12 rounded-2xl",
  lg: "h-16 w-16 rounded-[1.4rem]",
} satisfies Record<NonNullable<BrandLogoProps["size"]>, string>

export function BrandLogo({
  size = "md",
  showWordmark = true,
  className,
}: BrandLogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative overflow-hidden ring-1 ring-white/20 shadow-[0_14px_40px_-16px_rgba(133,96,255,0.8)]",
          imageSizeClassMap[size]
        )}
      >
        <img
          src="/brand/retropa-app-logo.png"
          alt="Retropa app logo"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      {showWordmark ? (
        <div className="leading-tight">
          <p className="brand-display text-xl tracking-[0.08em] text-white">Retropa</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
            iOS Retro Studio
          </p>
        </div>
      ) : null}
    </div>
  )
}
