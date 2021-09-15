import React, { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"
import { ButtonProps } from "../button"

const Button: React.FC<ButtonProps> = ({ children, label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="text-center p-2 border border-transparent rounded-xl shadow-light dark:shadow-button bg-skin-focus focus:outline-none focus:ring-2 focus:ring-skin-focus"
    >
      {children}
    </button>
  )
}

const Counter: React.FC<EmptyProps> = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="text-center bg-skin-focus p-5 text-skin-base">
      <p style={{ marginTop: 0 }} className="font-yrsa text-xl">
        Counter (JSX)
      </p>
      <div className="grid grid-cols-3 justify-items-center items-center">
        <Button label="Decrease" onClick={() => setCount(count - 1)}>
          <MinusIcon className="h-12 md:h-16 w-12 md:w-16" aria-hidden="true" />
        </Button>
        <span className="font-exo text-6xl">{count}</span>
        <Button label="Increase" onClick={() => setCount(count + 1)}>
          <PlusIcon className="h-12 md:h-16 w-12 md:w-16" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}

export default Counter
