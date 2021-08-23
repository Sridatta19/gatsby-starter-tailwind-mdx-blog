import React from "react"
import { wrapRootElement as wrap } from "./wrapRootElement"

function setTheme() {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("blog-theme")

    let selectedTheme
    if (typeof theme === "string") {
      selectedTheme = theme
    } else {
      selectedTheme = "dark"
    }

    if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
}

const ScriptTag = () => {
  const boundFn = String(setTheme)

  let calledFunction = `(${boundFn})()`

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ScriptTag />)
}

export const wrapPageElement = wrap
