"use client";

import SEO from "@/components/SEO";
import Link from "next/link";
import { motion } from "framer-motion";

const HEADLINE =
  "Crafting resilient cyber defenses through offensive insight.";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home | Cahal Agarwalla"
        description="Offensive security for resilient systems. Explore Cahal Agarwalla's projects, experience, and credentials."
      />
      <section className="relative isolate flex min-h-[90vh] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#050b21] via-[#071133] to-[#020411] px-4 py-16 text-white shadow-[0_0_80px_rgba(0,0,0,0.4)] sm:px-8 lg:px-16">
        <AnimatedBackground />
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-slate-300"
          >
            Cybersecurity · Pentesting · Blue Teaming
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <TypewriterText text={HEADLINE} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-slate-300 sm:text-lg"
          >
            Cahal Agarwalla fuses adversarial testing and security analytics to
            uncover weaknesses before attackers do—while building defenses that
            adapt, alert, and endure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-neon px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-navy transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              View Projects
              <motion.span
                aria-hidden
                className="inline-block"
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="/Cahal_Agarwalla_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
            >
              Download Resume
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function TypewriterText({ text }: { text: string }) {
  return (
    <span aria-label={text} className="inline-flex flex-wrap justify-center">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.03 * index, duration: 0.4, ease: "easeOut" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-neon/30 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-32 h-60 w-60 rounded-full bg-indigo-500/30 blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle,_rgba(77,225,255,0.3),_transparent_65%)]"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </div>
  );
}

