import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
          alt="Řízení auta"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/92 via-[var(--navy-deep)]/70 to-[var(--navy-deep)]/25" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-[var(--amber)] text-xs font-medium tracking-[0.2em] uppercase mb-8">
            Humpolec · Skupina B
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white mb-6 leading-[1.0]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vaše cesta<br />
            <em className="font-light text-[var(--amber)]">za volant</em>
          </h1>
          <p className="text-lg md:text-xl text-white/65 mb-10 leading-relaxed max-w-lg">
            Jiří Šťastný — zkušený instruktor s individuálním přístupem.
            Od první lekce po složení závěrečné zkoušky.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--navy-deep)] px-8 py-4 text-base font-semibold hover:bg-[var(--amber)]/90 transition-colors"
            >
              Nezávazná konzultace
            </a>
            <a
              href="#cenik"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-base font-medium hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              Zobrazit ceník
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
