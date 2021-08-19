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
      className={`${sizeClasses} inline-flex bg-gray-50 items-center rounded-md md:rounded-lg shadow-fg text-black focus:outline-none focus:ring-4 focus:ring-amber-500`}
    >
      {children}
    </a>
  )
}

interface ButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  label?: string
  isLarge?: boolean
}

export const SvgButton: React.FC<ButtonProps> = ({
  children,
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="text-center p-2 border border-transparent rounded-sm shadow-button  bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
    >
      {children}
    </button>
  )
}
