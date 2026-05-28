"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
          alt="Řízení auta"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/92 via-[var(--navy-deep)]/70 to-[var(--navy-deep)]/25" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-[var(--amber)] text-xs font-medium tracking-[0.2em] uppercase mb-8"
          >
            Humpolec · Skupina B
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.22 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white mb-6 leading-[1.0]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vaše cesta<br />
            <em className="font-light text-[var(--amber)]">za volant</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.38 }}
            className="text-lg md:text-xl text-white/65 mb-10 leading-relaxed max-w-lg"
          >
            Zkušený instruktor Jiří Šťastný.
            Individuální přístup od první lekce po složení závěrečné zkoušky.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.52 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-[var(--amber)] text-[var(--navy-deep)] px-8 py-4 text-base font-semibold hover:bg-[var(--amber)]/90 transition-colors"
            >
              Nezávazná konzultace
            </a>
            <a
              href="#cenik"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-base font-medium hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              Zobrazit ceník
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
