export type Theme = "light" | "dark"
export type ThemePreference = Theme | "system"

const storageKey = "retropa.theme"

function resolveSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function readStoredThemePreference(): ThemePreference | null {
  if (typeof window === "undefined") {
    return null
  }

  const value = window.localStorage.getItem(storageKey)
  return value === "light" || value === "dark" || value === "system" ? value : null
}

export function resolveThemePreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system"
  }

  return readStoredThemePreference() ?? "system"
}

export function resolvePreferredTheme(): Theme {
  const preference = resolveThemePreference()
  return preference === "system" ? resolveSystemTheme() : preference
}

export function applyTheme(preference: ThemePreference): Theme {
  if (typeof document === "undefined") {
    return "dark"
  }

  const theme = preference === "system" ? resolveSystemTheme() : preference
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  root.dataset.theme = theme
  root.dataset.themePreference = preference
  root.style.colorScheme = theme
  return theme
}

export function setTheme(preference: ThemePreference): void {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(storageKey, preference)
  }
  applyTheme(preference)
}
