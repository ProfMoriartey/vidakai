"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { navLinks } from "../types/nav"
import { useCursor } from "../context/CursorContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { setCursorType, setCursorText } = useCursor()

  const handleMouseEnter = () => {
    setCursorType("pointer")
    setCursorText("Go to")
  }

  const handleMouseLeave = () => {
    setCursorType("default")
    setCursorText("")
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tighter"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            VidaKai
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden relative">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Menu className="h-6 w-6" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}