import * as React from "react"

export const IconButton = ({ href, label, children, isLarge }) => {
  const sizeClasses = isLarge ? "p-1 md:p-1.5" : "p-1 md:p-1.5"
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`${sizeClasses} inline-flex bg-gray-50 items-center rounded-md md:rounded-lg shadow-fg text-black focus:outline-none focus:ring-4 focus:ring-amber-500`}
    >
      {children}
    </a>
  )
}
