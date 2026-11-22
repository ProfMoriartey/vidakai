"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "~/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-sm">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display-wide text-lg tracking-tight" onClick={() => setOpen(false)}>
          Vidakai <span className="font-medium text-fg-3">Studio</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-[15px] text-fg-2 transition-colors hover:text-fg">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" className="btn btn-primary min-h-10 px-4 text-[15px]">
              Start your website
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="-me-2 flex size-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 7h16M3 15h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink md:hidden">
          <ul className="mx-auto flex max-w-[1200px] flex-col px-4 py-4 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-12 items-center text-lg text-fg-2 hover:text-fg" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/#contact" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                Start your website
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
