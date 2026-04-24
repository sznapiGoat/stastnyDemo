import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Kurz skupiny B",
    price: "20 000",
    description: "Kompletní kurz pro získání řidičského oprávnění sk. B",
    features: [
      "Teoretická výuka",
      "Praktická výuka (28 hodin jízd)",
      "Příprava na zkoušky",
      "Individuální přístup dle vašeho tempa",
      "Přátelská atmosféra bez stresu",
    ],
    popular: true
  },
  {
    name: "Kondiční jízdy",
    price: "700",
    priceNote: "/ hodina",
    description: "Pro držitele ŘP, kteří chtějí obnovit jistotu za volantem",
    features: [
      "Individuální přístup",
      "Flexibilní termíny",
      "Výběr trasy dle potřeb",
      "Pro zkušené i začínající řidiče",
    ],
    popular: false
  },
  {
    name: "Školení začínajících řidičů",
    price: "2 400",
    description: "Povinný program pro řidiče s 6 body v prvních 2 letech",
    features: [
      "Záchrana řidičského průkazu",
      "Povinné ze zákona",
      "Profesionální přístup",
      "Rychlé vyřízení",
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="cenik" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ceník služeb
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparentní ceny bez skrytých poplatků. Možnost platby na splátky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-primary border-2 shadow-lg' : 'border-border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Nejoblíbenější
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle 
                  className="text-xl mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span 
                    className="text-4xl font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    Kč{plan.priceNote || ''}
                  </span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href="#kontakt">Mám zájem</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
