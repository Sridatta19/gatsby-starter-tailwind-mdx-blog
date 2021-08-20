export const themeStorageKey = "blog-theme"

export const getTheme = (): string => {
  if (typeof window === "undefined") return "dark"
  return localStorage.getItem(themeStorageKey) || "dark"
}

export const setLightMode = (): void => {
  try {
    localStorage.setItem(themeStorageKey, "light")
    document.documentElement.classList.remove("dark")
  } catch (err) {
    console.error(err)
  }
}

export const setDarkMode = (): void => {
  try {
    localStorage.setItem(themeStorageKey, "dark")
    document.documentElement.classList.add("dark")
  } catch (err) {
    console.error(err)
  }
}
