import { FileText, ExternalLink } from "lucide-react"

const resources = [
  {
    label: "Žádost o řidičské oprávnění",
    desc: "Formulář ke stažení a vyplnění před zahájením kurzu",
    href: "https://bc7f728771.clvaw-cdnwnd.com/4010d53914322b751a886f174495e0af/200000065-1936619367/%C5%BE%C3%A1dost.pdf?ph=bc7f728771",
  },
  {
    label: "Lékařský posudek",
    desc: "Formulář pro lékaře — povinná součást přihlášky ke kurzu",
    href: "https://bc7f728771.clvaw-cdnwnd.com/4010d53914322b751a886f174495e0af/200000058-4ef2a4ef2b/posudek.pdf?ph=bc7f728771",
  },
  {
    label: "eTesty — příprava na teorii",
    desc: "Oficiální testové otázky Ministerstva dopravy ČR",
    href: "https://etesty.md.gov.cz",
  },
]

export function DownloadsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-xl">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ke stažení
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            Formuláře potřebné před zahájením kurzu a odkaz na přípravu k teorii.
          </p>
        </div>

        <div className="divide-y divide-border">
          {resources.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-7 group"
            >
              <div className="flex items-start gap-5">
                <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div
                    className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {r.label}
                  </div>
                  <div className="text-muted-foreground text-sm mt-0.5">{r.desc}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-colors flex-shrink-0 ml-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
