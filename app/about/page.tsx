"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SkillsGrid from "@/components/SkillsGrid";

const bioParagraphs = [
  "Cahal Agarwalla is a cybersecurity enthusiast who bridges offensive testing with defensive design. She has led capture-the-flag teams, facilitated red-team exercises, and built detection content to shrink mean time to respond.",
  "Her curiosity extends across threat intelligence, adversary emulation, and purple-team drills that stress-test every layer. Sakshi documents findings responsibly and translates them into actionable roadmaps for engineering and leadership alike."
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#050b21] via-[#071133] to-[#040817] p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]"
      >
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <div className="relative h-48 w-48">
            <div className="absolute inset-0 rounded-full bg-neon/30 blur-2xl" />
            <Image
              src="/CaHHHHaL.jpg"
              alt="Portrait of Cahal Agarwalla"
              fill
              priority
              className="rounded-full border-4 border-white/10 object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-300">
              About
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Threat-driven builder with an analyst&apos;s rigor.
            </h1>
          </div>
          <Link
            href={"/Sakshi_Agarwalla_Resume.pdf" as unknown as import("next").Route}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
          >
            Download Resume
          </Link>
        </div>
        <div className="space-y-6 text-base text-slate-200">
          {bioParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-300">
            <p>
              Currently exploring adversary emulation frameworks, building
              automation for purple-team dashboards, and documenting red/blue
              postures for leadership readiness reviews.
            </p>
          </div>
        </div>
      </motion.section>
      <SkillsGrid />
    </div>
  );
}

