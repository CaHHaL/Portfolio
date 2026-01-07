"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SkillsGrid from "@/components/SkillsGrid";
import { FaTerminal, FaShieldAlt, FaBolt, FaGlobe } from "react-icons/fa";

export default function AboutSection({ id }: { id?: string }) {
  return (
    <div id={id} className="flex flex-col gap-10 scroll-mt-24">
      {/* Bento Grid Layout */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">

        {/* 1. Main Profile Card (Large, 2x2 on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative col-span-1 row-span-2 flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:col-span-2"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-80 transition-opacity duration-700 group-hover:opacity-100">
            <Image
              src="/images/profile.jpg"
              alt="Cahal Agarwalla"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
          </div>

          {/* Scanner Line Effect */}
          <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,transparent,rgba(77,225,255,0.1),transparent)] bg-[length:100%_200%] opacity-0 bg-no-repeat transition-opacity duration-500 group-hover:animate-scan group-hover:opacity-100" />

          {/* Text Content */}
          <div className="relative z-20">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-green-500" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white">Open to Work</span>
            </div>
            <h2 className="font-mono text-3xl font-bold text-white lg:text-4xl">Cahal Agarwalla</h2>
            <p className="mt-2 text-slate-300">Targeting the intersection of offensive security and defensive engineering.</p>
          </div>
        </motion.div>

        {/* 2. Bio Card (Wide 2x1) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10 sm:col-span-2 lg:col-span-2"
        >
          <div className="flex items-center gap-2 text-neon">
            <FaTerminal className="text-xl" />
            <h3 className="font-mono text-sm uppercase tracking-widest">Operator&apos;s Log</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            I don&apos;t just break systems; I analyze the debris to build stronger ones.
            My work spans <span className="text-white">Red Team engagements</span>, <span className="text-white">Purple Team drills</span>, and <span className="text-white">Automated Detection</span>.
            I translate technical vulnerabilities into business risk, ensuring that security is a verified constant, not a variable.
          </p>
        </motion.div>

        {/* 3. Stat Card: Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-colors hover:border-neon/50"
        >
          <div className="rounded-full bg-white/10 p-3 text-neon">
            <FaGlobe className="text-xl" />
          </div>
          <div>
            <span className="block font-mono text-sm uppercase text-slate-400">Base</span>
            <span className="block text-lg font-semibold text-white">India</span>
          </div>
        </motion.div>

        {/* 4. Stat Card: Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-colors hover:border-neon/50"
        >
          <div className="rounded-full bg-white/10 p-3 text-neon">
            <FaShieldAlt className="text-xl" />
          </div>
          <div>
            <span className="block font-mono text-sm uppercase text-slate-400">Profile</span>
            <span className="block text-lg font-semibold text-white">Cybersecurity</span>
          </div>
        </motion.div>

      </section>

      <SkillsGrid />
    </div>
  );
}
