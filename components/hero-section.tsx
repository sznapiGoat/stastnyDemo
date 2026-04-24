import { Button } from "@/components/ui/button"
import { Shield, Award, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
          alt="Řízení auta"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Shield className="w-4 h-4" />
            <span>Nyní probíhá nábor nových studentů</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Vaše cesta k řidičskému průkazu začíná zde
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Profesionální výuka s individuálním přístupem. Jiří Šťastný vás provede
            celým procesem získání řidičského oprávnění bezpečně a bez zbytečného stresu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <a href="#kontakt">Nezávazná konzultace</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-background/50 backdrop-blur-sm">
              <a href="#cenik">Zobrazit ceník</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-2xl">
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

ffunction StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xl font-bold text-foreground whitespace-nowrap" style={{ fontFamily: 'var(--font-heading)' }}>
          {value}
        </div>
        <div className="text-xs text-muted-foreground whitespace-nowrap">{label}</div>
      </div>
    </div>
  )

}