import { Languages } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { localeLabelByLocale, supportedLocales } from "@/i18n/locales"
import { useI18n } from "@/i18n/context"

export function LanguageSwitcher() {
  const { locale, setLocaleFromValue, messages } = useI18n()
  const currentLocaleLabel = localeLabelByLocale[locale]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 gap-1 rounded-full border-border/65 bg-card/46 px-2.5 text-foreground hover:bg-card/70"
          aria-label={`${messages.shared.language.menuLabel}: ${currentLocaleLabel}. ${messages.shared.language.openMenuLabel}.`}
          title={`${messages.shared.language.menuLabel}: ${currentLocaleLabel}`}
        >
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52 rounded-2xl border-border/70 bg-card/92 p-1.5 text-foreground"
      >
        <DropdownMenuRadioGroup value={locale} onValueChange={setLocaleFromValue}>
          {supportedLocales.map((supportedLocale) => (
            <DropdownMenuRadioItem
              key={supportedLocale}
              value={supportedLocale}
              className="gap-2.5 rounded-xl py-2 pl-2.5"
            >
              <span className="text-xs font-semibold tracking-[0.01em]">{localeLabelByLocale[supportedLocale]}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
