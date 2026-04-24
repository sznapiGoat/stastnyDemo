import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Lucie Sladěná",
    role: "Absolventka",
    content: "Výborná autoškola! Instruktor byl velmi trpělivý a vždy se věnoval individuálně každému žákovi. Díky němu jsem úspěšně složila zkoušku a teď už se s jistotou pohybuji na silnicích. Mohu jen doporučit.",
    rating: 5
  },
  {
    name: "Jan Marek",
    role: "Absolvent",
    content: "Jsem velmi spokojený s výcvikem v autoškole v Humpolci. Instruktor byl velmi trpělivý a vždy ochotně odpovídal na mé dotazy. Díky jeho přístupu jsem se rychle naučil jezdit a úspěšně složil zkoušky.",
    rating: 5
  },
  {
    name: "Jaroslav Dvořák",
    role: "Absolvent",
    content: "Autoškola v Humpolci je skvělá volba pro každého, kdo chce získat řidičský průkaz rychle a bez stresu. Instruktor je přátelský a vždy se snaží vám vyjít vstříc. Navíc jsou ceny velmi příznivé.",
    rating: 5
  },
  {
    name: "Petr Svoboda",
    role: "Absolvent",
    content: "Autoškola v Humpolci je skvělá volba pro každého, kdo se chce naučit řídit. Instruktor je zkušený a vždy vám poradí, jak si zlepšit techniku řízení. Jsem rád, že jsem si vybral právě tuto autoškolu.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="reference" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Co říkají naši absolventi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Přečtěte si zkušenosti těch, kteří u nás úspěšně získali řidičské oprávnění.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
