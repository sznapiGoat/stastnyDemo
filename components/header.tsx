"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Služby", href: "#sluzby" },
  { label: "Ceník", href: "#cenik" },
  { label: "Reference", href: "#reference" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--navy)]/97 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-bold text-xl tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Autoškola Šťastný
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="text-sm font-semibold bg-[var(--amber)] text-[var(--navy-deep)] px-4 py-2 hover:bg-[var(--amber)]/90 transition-colors"
            >
              Začít kurz
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--navy)] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mt-3 inline-block text-center text-sm font-semibold bg-[var(--amber)] text-[var(--navy-deep)] px-4 py-3 hover:bg-[var(--amber)]/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Začít kurz
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
