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

        <div className="mt-14 pt-8 border-t border-border">
          <a
            href="https://share.google/8Xuj8h5xEpxmeMde7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Přečíst všechny recenze na Google
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
