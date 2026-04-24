"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Car } from "lucide-react"

const navItems = [
  { label: "Služby", href: "#sluzby" },
  { label: "Ceník", href: "#cenik" },
  { label: "Reference", href: "#reference" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-lg leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Autoškola Šťastný
              </span>
              <span className="text-xs text-muted-foreground">Humpolec</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild>
              <a href="#kontakt">Začít kurz</a>
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#kontakt" onClick={() => setMobileMenuOpen(false)}>
                Začít kurz
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
