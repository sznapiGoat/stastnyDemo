import { Car } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-background" />
            </div>
            <div>
              <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                Autoškola Šťastný
              </div>
              <div className="text-sm text-background/70">Humpolec</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-background/70">
            <a href="#sluzby" className="hover:text-background transition-colors">Služby</a>
            <a href="#cenik" className="hover:text-background transition-colors">Ceník</a>
            <a href="#reference" className="hover:text-background transition-colors">Reference</a>
            <a href="#kontakt" className="hover:text-background transition-colors">Kontakt</a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {currentYear} Autoškola Jiří Šťastný. Všechna práva vyhrazena.</p>
          <p>Humpolec | Výcvik skupiny B</p>
        </div>
      </div>
    </footer>
  )
}
