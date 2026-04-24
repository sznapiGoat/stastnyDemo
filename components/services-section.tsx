import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Car, FileCheck, Clock, UserCheck, Repeat } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Teoretická výuka",
    description: "Komplexní příprava na teoretickou zkoušku včetně moderních výukových materiálů a testů."
  },
  {
    icon: Car,
    title: "Praktická výuka",
    description: "Jízdy s instruktorem na moderním vozidle. Individuální přístup dle vašich potřeb a tempa."
  },
  {
    icon: FileCheck,
    title: "Příprava na zkoušky",
    description: "Důkladná příprava na závěrečné zkoušky s vysokou úspěšností našich studentů."
  },
  {
    icon: Clock,
    title: "Flexibilní rozvrh",
    description: "Jízdy v čase, který vám vyhovuje. Přizpůsobíme se vašemu pracovnímu a školnímu rozvrhu."
  },
  {
    icon: UserCheck,
    title: "Individuální přístup",
    description: "Každý student je jiný. Výuku přizpůsobujeme vašim potřebám a schopnostem."
  },
  {
    icon: Repeat,
    title: "Kondičné jízdy",
    description: "Pro ty, kteří již mají řidičský průkaz, ale potřebují obnovit své dovednosti."
  }
]

export function ServicesSection() {
  return (
    <section id="sluzby" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Naše služby
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nabízíme kompletní výuku pro získání řidičského oprávnění skupiny B 
            i služby pro stávající řidiče.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-border hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
