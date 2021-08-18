import React, { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/outline"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="text-center bg-amber-500 p-5 text-black">
      <h3
        style={{ marginTop: 0, color: "black" }}
        className="font-yrsa text-xl"
      >
        Counter (JSX)
      </h3>
      <div className="grid grid-cols-3 justify-items-center items-center">
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className="text-center p-2 border border-transparent rounded-sm shadow-button  bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <MinusIcon className="h-12 md:h-16 w-12 md:w-16" aria-hidden="true" />
        </button>
        <span className="font-exo text-6xl">{count}</span>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="text-center p-2 border border-transparent rounded-sm shadow-button  bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <PlusIcon className="h-12 md:h-16 w-12 md:w-16" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default Counter
