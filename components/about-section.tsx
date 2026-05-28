"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Váš instruktor
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed mb-4 text-base"
            >
              Jiří Šťastný vyučuje s individuálním přístupem ke každému studentovi.
              Jízdy probíhají v klidném tempu bez zbytečného tlaku. Cílem je,
              abyste se za volantem cítili skutečně sebejistě, nejen složili zkoušku.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.18 }}
              className="text-muted-foreground leading-relaxed text-base"
            >
              Výcvik probíhá na vozidle{" "}
              <strong className="text-foreground font-semibold">Hyundai i20</strong>,
              moderní auto vhodné pro začátečníky i pokročilé.
              Výuka dostupná v Humpolci a blízkém okolí.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease, delay: 0.08 }}
            className="flex flex-col gap-6 pt-2 lg:pt-10"
          >
            <div>
              <div
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Jiří Šťastný
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Instruktor autoškoly · Humpolec
              </div>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              {[
                "Výuka skupiny B",
                "Individuální tempo bez stresu",
                "Vozidlo Hyundai i20",
                "Humpolec a okolí",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
