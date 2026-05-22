import Image from "next/image"

export function AboutSection() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Váš instruktor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              Jiří Šťastný vyučuje s individuálním přístupem ke každému studentovi.
              Jízdy probíhají v klidném tempu bez zbytečného tlaku — cílem je,
              abyste se za volantem cítili skutečně sebejistě, nejen složili zkoušku.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Výcvik probíhá na vozidle{" "}
              <strong className="text-foreground font-semibold">Hyundai i20</strong> —
              moderní, bezpečné auto vhodné pro začátečníky i pokročilé.
              Výuka dostupná v Humpolci a blízkém okolí.
            </p>
            <div>
              <div
                className="font-semibold text-foreground text-lg"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Jiří Šťastný
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">
                Instruktor autoškoly · Humpolec
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden w-72 md:w-80 aspect-[3/4]">
              <Image
                src="/stastny3.png"
                alt="Výcvikové vozidlo Hyundai i20"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Humpolec atmosphere strip */}
      <div className="grid grid-cols-2 h-52 md:h-80">
        <div className="relative overflow-hidden">
          <Image
            src="/stastny1.jpg"
            alt="Humpolec — náměstí"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="/stastny2.jpg"
            alt="Humpolec — pohled z výšky"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
