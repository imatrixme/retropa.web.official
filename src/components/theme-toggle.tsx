import { MoonStar, SunMedium } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { resolvePreferredTheme, setTheme, type Theme } from "@/lib/theme"

export function ThemeToggle() {
  const [theme, updateTheme] = useState<Theme>(() => resolvePreferredTheme())

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    updateTheme(next)
  }

  const isDark = theme === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="rounded-full border-border/70 bg-card/70 px-3 text-foreground hover:bg-card"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.14em] sm:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </Button>
  )
}
