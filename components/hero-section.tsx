import { Button } from "@/components/ui/button"
import { Shield, Award, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Nyní probíhá nábor nových studentů</span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Vaše cesta k řidičskému průkazu začíná zde
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            Profesionální výuka s individuálním přístupem. Jiří Šťastný vás provede 
            celým procesem získání řidičského oprávnění bezpečně a bez zbytečného stresu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base">
              <a href="#kontakt">Nezávazná konzultace</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <a href="#cenik">Zobrazit ceník</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StatCard 
            icon={<Award className="w-6 h-6" />}
            value="Skupina B"
            label="Řidičské oprávnění"
          />
          <StatCard 
            icon={<Users className="w-6 h-6" />}
            value="Humpolec"
            label="Výcvik ve vašem okolí"
          />
          <StatCard 
            icon={<Shield className="w-6 h-6" />}
            value="3 roky"
            label="Aktivní praxe instruktora"
          />
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
          {value}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}
