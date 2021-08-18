import React from "react"

const ListItem = ({ title, date, description, tags }) => {
  return (
    <div className="py-12 space-y-3">
      <small className="font-yrsa text-gray-600">{date}</small>
      <h2 className="text-2xl font-exo font-black text-black">{title}</h2>
      <p className="text-lg font-yrsa text-gray-700">{description}</p>
      <div className="font-yrsa text-gray-600 uppercase md:text-sm space-x-2">
        {tags
          .split(",")
          .map(s => s.trim())
          .map(s => (
            <span key={s}>{`#${s}`}</span>
          ))}
      </div>
    </div>
  )
}

export default ListItem
