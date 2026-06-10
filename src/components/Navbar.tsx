"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "../types/nav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            VidaKai
          </Link>

          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md border border-gray-100 bg-white py-1 shadow-lg">
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
  );
}
