import Image from "next/image"

export function AboutSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* Left: dark navy text */}
        <div className="bg-[var(--navy)] px-8 sm:px-12 lg:px-16 py-20 flex flex-col justify-center order-2 lg:order-1">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Váš instruktor
          </h2>
          <p className="text-white/65 leading-relaxed mb-4 text-base">
            Jiří Šťastný vyučuje s individuálním přístupem ke každému studentovi.
            Jízdy probíhají v klidném tempu bez zbytečného tlaku — cílem je,
            abyste se za volantem cítili skutečně sebejistě, nejen složili zkoušku.
          </p>
          <p className="text-white/65 leading-relaxed mb-10 text-base">
            Výcvik probíhá na vozidle{" "}
            <strong className="text-white font-semibold">Hyundai i20</strong> —
            moderní a bezpečné auto vhodné pro začátečníky i pokročilé.
          </p>
          <div>
            <div
              className="font-semibold text-white text-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Jiří Šťastný
            </div>
            <div className="text-white/45 text-sm mt-0.5">
              Instruktor autoškoly · Humpolec
            </div>
          </div>
        </div>

        {/* Right: car photo, full bleed */}
        <div className="relative min-h-[360px] lg:min-h-0 order-1 lg:order-2">
          <Image
            src="/stastny3.png"
            alt="Výcvikové vozidlo Hyundai i20"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
