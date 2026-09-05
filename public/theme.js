(() => {
  let theme = "light"
  try {
    const stored = localStorage.getItem("retropa.theme")
    theme = stored === "dark" ? "dark" : stored === "system" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  } catch { /* Browsing still works when storage is unavailable. */ }
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.style.colorScheme = theme
})()
