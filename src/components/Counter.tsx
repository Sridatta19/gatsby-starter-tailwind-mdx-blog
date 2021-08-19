import React, { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/outline"
import { SvgButton } from "@/components/button"
import { EmptyProps } from "@/definitions"

const Counter: React.FC<EmptyProps> = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="text-center bg-amber-500 p-5 text-black">
      <p style={{ marginTop: 0, color: "black" }} className="font-yrsa text-xl">
        Counter (JSX)
      </p>
      <div className="grid grid-cols-3 justify-items-center items-center">
        <SvgButton label="Decrease" onClick={() => setCount(count - 1)}>
          <MinusIcon className="h-12 md:h-16 w-12 md:w-16" aria-hidden="true" />
        </SvgButton>
        <span className="font-exo text-6xl">{count}</span>
        <SvgButton label="Increase" onClick={() => setCount(count + 1)}>
          <PlusIcon className="h-12 md:h-16 w-12 md:w-16" aria-hidden="true" />
        </SvgButton>
      </div>
    </div>
  )
}

export default Counter
