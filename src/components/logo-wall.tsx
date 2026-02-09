import type { LogoWallItem } from "@/content/emulator-catalog"
import { cn } from "@/lib/utils"

type LogoWallProps = {
  items: LogoWallItem[]
  className?: string
  tileClassName?: string
  direction?: "left" | "right"
  durationSeconds?: number
}

export function LogoWall({
  items,
  className,
  tileClassName,
  direction = "left",
  durationSeconds = 36,
}: LogoWallProps) {
  const loopItems = [...items, ...items]

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "logo-marquee-track pointer-events-none flex w-max items-stretch gap-3 py-1 select-none",
          direction === "right" ? "logo-marquee-right" : "logo-marquee-left"
        )}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {loopItems.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            aria-hidden={index >= items.length}
            className={cn(
              "w-[170px] shrink-0 rounded-2xl border border-border/70 bg-card/82 p-3 md:w-[190px]",
              tileClassName
            )}
          >
            <div className="flex h-20 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-background/45">
              <img
                src={item.logoPath}
                alt={item.alt}
                className="h-full w-full object-contain p-2"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.11em] text-foreground/88">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
