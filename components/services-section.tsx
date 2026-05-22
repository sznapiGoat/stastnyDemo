const services = [
  {
    num: "01",
    title: "Výuka skupiny B",
    description:
      "Kompletní kurz od teoretické přípravy po složení závěrečné zkoušky. 28 hodin jízd s důrazem na individuální tempo každého studenta.",
  },
  {
    num: "02",
    title: "Vrácení průkazu",
    description:
      "Zákonem povinné školení při dosažení 6 bodů v prvních 2 letech řízení. Profesionální a rychlé vyřízení bez zbytečných průtahů.",
  },
  {
    num: "03",
    title: "Kondiční jízdy",
    description:
      "Pro stávající řidiče, kteří chtějí obnovit sebejistotu nebo zdokonalit techniku. Flexibilní termíny, trasy dle vašich potřeb.",
  },
  {
    num: "04",
    title: "Školení začínajících řidičů",
    description:
      "Povinný program pro nové řidiče ohrožené ztrátou průkazu. Lépe se poradit včas, než řešit problémy za jízdy.",
  },
]

export function ServicesSection() {
  return (
    <section id="sluzby" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-xl">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Co nabízíme
          </h2>
        </div>

        <div className="divide-y divide-border">
          {services.map((service) => (
            <div key={service.num} className="flex gap-8 py-8 md:py-10">
              <span className="text-xs font-mono text-muted-foreground pt-1.5 w-7 flex-shrink-0 select-none">
                {service.num}
              </span>
              <div className="flex-1 md:flex md:items-baseline md:justify-between md:gap-12">
                <h3
                  className="text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-0 md:w-64 flex-shrink-0"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed md:max-w-sm text-[0.95rem]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
