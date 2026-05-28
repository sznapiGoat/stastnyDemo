"use client"

import { motion } from "framer-motion"

const pricingItems = [
  {
    name: "Kurz skupiny B",
    price: "20 000 Kč",
    note: "Kompletní kurz — teorie + 28 hodin jízd s instruktorem",
  },
  {
    name: "Kondiční jízdy",
    price: "700 Kč / hod",
    note: "Individuální jízdy pro zkušené i začínající řidiče",
  },
  {
    name: "Vrácení řidičského oprávnění",
    price: "2 400 Kč",
    note: "1 jízda + zkouška",
  },
  {
    name: "Školení začínajících řidičů",
    price: "2 400 Kč",
    note: "Zákonem povinné při dosažení 6 bodů v prvních 2 letech",
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function PricingSection() {
  return (
    <section id="cenik" className="py-20 md:py-28 bg-[var(--navy)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ceník
          </h2>
          <p className="mt-4 text-white/55 text-base max-w-sm">
            Transparentní ceny bez skrytých poplatků. Platba hotovostí i převodem na účet.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10">
          {pricingItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between py-8 gap-2"
            >
              <div>
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.name}
                </h3>
                <p className="text-white/45 text-sm mt-1">{item.note}</p>
              </div>
              <span
                className="text-2xl md:text-3xl font-bold text-[var(--amber)] tabular-nums flex-shrink-0"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--navy-deep)] px-8 py-4 text-base font-semibold hover:bg-[var(--amber)]/90 transition-colors"
          >
            Mám zájem o kurz
          </a>
        </motion.div>
      </div>
    </section>
  )
}
