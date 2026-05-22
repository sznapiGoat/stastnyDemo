export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--navy-deep)] text-white/55 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="font-bold text-lg text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Autoškola Šťastný
          </span>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#sluzby" className="hover:text-white transition-colors">Služby</a>
            <a href="#cenik" className="hover:text-white transition-colors">Ceník</a>
            <a href="#reference" className="hover:text-white transition-colors">Reference</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} Autoškola Jiří Šťastný. Všechna práva vyhrazena.</p>
          <p>Humpolec · Skupina B</p>
        </div>
      </div>
    </footer>
  )
}
