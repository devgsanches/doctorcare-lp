import { Menu } from 'lucide-react'
import React from 'react'

export function Header() {
  return (
    <header className="px-6 py-4 flex justify-between bg-[#DCE9E2]">
      <h1 className="text-2xl text-[#212529]">
        Doctor<span className="font-semibold text-[#00856F]">Care</span>
      </h1>
      <Menu color="#00856F" />
    </header>
  )
}
