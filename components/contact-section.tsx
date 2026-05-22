"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-xl">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <dl className="space-y-7 mb-12">
              <div>
                <dt className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-1.5">
                  Telefon
                </dt>
                <dd>
                  <a
                    href="tel:+420720077921"
                    className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    +420 720 077 921
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-1.5">
                  E-mail
                </dt>
                <dd>
                  <a
                    href="mailto:stastny.post@seznam.cz"
                    className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    stastny.post@seznam.cz
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-1.5">
                  Adresa
                </dt>
                <dd>
                  <a
                    href="https://maps.google.com/?q=Hálkova+591+Humpolec"
                    className="text-lg text-foreground hover:text-accent transition-colors leading-relaxed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hálkova 591<br />396 01 Humpolec
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-1.5">
                  Platba
                </dt>
                <dd className="text-lg text-foreground">Hotovost i převodem na účet</dd>
              </div>
            </dl>

            <a
              href="https://maps.google.com/?q=Hálkova+591+Humpolec"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-2 overflow-hidden border border-border group"
              aria-label="Otevřít v Google Maps"
            >
              <div className="relative h-40">
                <Image
                  src="/stastny1.jpg"
                  alt="Humpolec — náměstí"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-40">
                <Image
                  src="/stastny2.jpg"
                  alt="Humpolec — pohled z výšky"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </a>
          </div>

          <div>
            {submitted ? (
              <div className="py-16">
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Děkujeme!
                </h3>
                <p className="text-muted-foreground">
                  Vaši zprávu jsme přijali. Brzy se ozveme.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+420 …"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Zpráva *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Mám zájem o kurz autoškoly…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--navy)] text-white px-8 py-4 text-base font-semibold hover:bg-[var(--navy-deep)] transition-colors"
                >
                  Odeslat zprávu
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Odesláním souhlasíte se zpracováním osobních údajů.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
