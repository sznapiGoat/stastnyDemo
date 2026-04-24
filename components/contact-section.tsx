"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 720 077 921",
    href: "tel:+420720077921"
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "stastny.post@seznam.cz",
    href: "mailto:stastny.post@seznam.cz"
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Hálkova 591, 396 01 Humpolec",
    href: "https://maps.google.com/?q=Hálkova+591+Humpolec"
  },
  {
    icon: Clock,
    label: "Platba",
    value: "Hotovost i převodem na účet",
    href: null
  }
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Kontaktujte nás
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Máte zájem o kurz nebo otázky? Neváhejte nás kontaktovat. 
            Rádi vám odpovíme a pomůžeme s výběrem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => (
                <Card key={item.label} className="border-border">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-medium">{item.value}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20671.27851738659!2d15.333!3d49.541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d0193e73f9c6d%3A0x400af0f66150a20!2sHumpolec!5e0!3m2!1sen!2scz!4v1699000000000!5m2!1sen!2scz"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Humpolec"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Card>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 
                    className="text-xl font-bold text-foreground mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Děkujeme za váš zájem!
                  </h3>
                  <p className="text-muted-foreground">
                    Vaši zprávu jsme přijali a brzy se vám ozveme.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Jméno a příjmení *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jan@email.cz"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+420 123 456 789"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Zpráva *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Mám zájem o kurz autoškoly..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Odeslat zprávu
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
