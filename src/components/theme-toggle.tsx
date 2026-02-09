import { ChevronDown, Laptop, MoonStar, SunMedium } from "lucide-react"
import { useEffect, useState } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { applyTheme, resolveThemePreference, setTheme, type ThemePreference } from "@/lib/theme"

const themeOptions: Array<{
  value: ThemePreference
  label: string
  icon: typeof Laptop
}> = [
  { value: "system", label: "System", icon: Laptop },
  { value: "light", label: "Light", icon: SunMedium },
  { value: "dark", label: "Dark", icon: MoonStar },
]

const themeTitle: Record<ThemePreference, string> = {
  system: "Theme: System",
  light: "Theme: Light",
  dark: "Theme: Dark",
}

function isThemePreference(value: string): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark"
}

export function ThemeToggle() {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => resolveThemePreference())

  useEffect(() => {
    if (typeof window === "undefined" || themePreference !== "system") {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      applyTheme("system")
    }

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange)
      return () => {
        mediaQuery.removeEventListener("change", handleChange)
      }
    }

    mediaQuery.addListener(handleChange)
    return () => {
      mediaQuery.removeListener(handleChange)
    }
  }, [themePreference])

  const currentOption = themeOptions.find((option) => option.value === themePreference) ?? themeOptions[0]
  const CurrentIcon = currentOption.icon

  const handleThemeChange = (value: string) => {
    if (!isThemePreference(value)) {
      return
    }

    setTheme(value)
    setThemePreference(value)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 gap-1 rounded-full border-border/65 bg-card/46 px-2.5 text-foreground hover:bg-card/70"
          aria-label={`${themeTitle[themePreference]}. Open theme menu.`}
          title={themeTitle[themePreference]}
        >
          <CurrentIcon className="h-4 w-4" />
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 rounded-2xl border-border/70 bg-card/92 p-1.5 text-foreground"
      >
        <DropdownMenuRadioGroup value={themePreference} onValueChange={handleThemeChange}>
          {themeOptions.map((option) => {
            const OptionIcon = option.icon
            return (
              <DropdownMenuRadioItem
                key={option.value}
                value={option.value}
                className="gap-2.5 rounded-xl py-2 pl-2.5"
              >
                <OptionIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">{option.label}</span>
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
