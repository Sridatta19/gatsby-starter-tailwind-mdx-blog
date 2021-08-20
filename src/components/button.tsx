import * as React from "react"
import { ReactNode } from "react"

export const IconButton: React.FC<ButtonProps> = ({
  href,
  label,
  children,
  isLarge,
}) => {
  const sizeClasses = isLarge ? "p-1 md:p-1.5" : "p-1 md:p-1.5"
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`${sizeClasses} inline-flex bg-skin-base-md items-center rounded-md md:rounded-lg shadow-fg text-skin-base focus:outline-none focus:ring-4 focus:ring-skin-focus`}
    >
      {children}
    </a>
  )
}

export interface ButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  label?: string
  isLarge?: boolean
}
