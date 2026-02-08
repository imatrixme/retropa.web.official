export type Theme = "light" | "dark"

const storageKey = "retropa.theme"

export function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null
  }

  const value = window.localStorage.getItem(storageKey)
  return value === "light" || value === "dark" ? value : null
}

export function resolvePreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark"
  }

  const stored = readStoredTheme()
  if (stored) {
    return stored
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") {
    return
  }

  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  root.dataset.theme = theme
  root.style.colorScheme = theme
}

export function setTheme(theme: Theme): void {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(storageKey, theme)
  }
  applyTheme(theme)
}
