const testimonials = [
  {
    name: "Lucie Sladěná",
    content:
      "Instruktor byl velmi trpělivý a vždy se věnoval každému individuálně. Díky němu jsem úspěšně složila zkoušku a teď se s jistotou pohybuji na silnicích.",
  },
  {
    name: "Jan Marek",
    content:
      "Jsem velmi spokojený s výcvikem. Instruktor vždy ochotně odpovídal na mé dotazy a díky jeho přístupu jsem se rychle naučil jezdit.",
  },
  {
    name: "Jaroslav Dvořák",
    content:
      "Skvělá volba pro každého, kdo chce získat řidičský průkaz bez zbytečného stresu. Instruktor je přátelský a vždy se snaží vám vyjít vstříc.",
  },
  {
    name: "Petr Svoboda",
    content:
      "Instruktor je zkušený a vždy poradí, jak si zlepšit techniku řízení. Jsem rád, že jsem si vybral právě tuto autoškolu.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reference" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-xl">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Co říkají absolventi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          {testimonials.map((t, i) => (
            <blockquote key={i}>
              <p
                className="text-lg text-foreground leading-relaxed mb-4 italic"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                „{t.content}"
              </p>
              <footer className="text-sm text-muted-foreground font-medium tracking-wide">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
