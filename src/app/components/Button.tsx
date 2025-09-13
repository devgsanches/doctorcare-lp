import React from 'react'

interface ButtonProps {
  icon: React.ReactNode
  text: string
  className: string
}

export function Button({ icon, text, className }: ButtonProps) {
  return (
    <button
      className={`px-8 flex justify-between items-center gap-4 py-4 rounded-4xl ${className}`}
    >
      {icon}
      <p className="uppercase font-bold">{text}</p>
    </button>
  )
}
