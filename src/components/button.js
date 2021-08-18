import * as React from "react"

export const IconButton = ({ href, children, isLarge, additionalClasses }) => {
  const sizeClasses = isLarge ? "p-1 md:p-1.5" : "p-1 md:p-1.5"
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${additionalClasses} ${sizeClasses} inline-flex items-center rounded-md md:rounded-lg shadow-fg text-skin-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-base`}
    >
      {children}
    </a>
  )
}
