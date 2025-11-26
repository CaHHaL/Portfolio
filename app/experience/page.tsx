"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { useIntersection } from "@/hooks/useIntersection";

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "sec-analyst",
    role: "Security Analyst",
    company: "Sentinel Labs (Intern)",
    period: "2024 — Present",
    summary:
      "Built detection coverage for adversary behavior and partnered with engineering to remediate findings.",
    highlights: [
      "Published runbooks that cut MTTR by 28%.",
      "Automated log triage pipelines with Python + Sigma.",
      "Facilitated purple-team drills that validated Zero Trust controls."
    ]
  },
  {
    id: "pentest",
    role: "Pentest Lead",
    company: "Campus Cyber Club",
    period: "2023 — 2024",
    summary:
      "Led student red-team operations, coached peers on reporting, and partnered with IT to fix critical exposures.",
    highlights: [
      "Ran quarterly tabletop exercises aligned to MITRE ATT&CK.",
      "Delivered developer trainings on secure coding patterns.",
      "Launched campus bug bounty awareness campaign."
    ]
  },
  {
    id: "research",
    role: "Security Research Assistant",
    company: "Cyber Defense Lab",
    period: "2022 — 2023",
    summary:
      "Researched malware behavior clustering and contributed to conference submissions.",
    highlights: [
      "Curated safe telemetry datasets for academic sharing.",
      "Co-authored paper on ML-assisted triage heuristics.",
      "Presented findings during internal research symposia."
    ]
  }
];

export default function ExperiencePage() {
  const { ref, hasIntersected } = useIntersection<HTMLOListElement>({
    rootMargin: "-20% 0px"
  });

  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
          Experience
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Timeline of roles shaping my offensive + defensive perspective.
        </h1>
      </header>
      <ol
        ref={ref}
        className="relative space-y-8 pl-6 before:absolute before:left-1 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-neon/30 before:via-white/20 before:to-transparent"
      >
        {EXPERIENCE.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <span className="absolute -left-[1.65rem] top-8 flex h-4 w-4 items-center justify-center rounded-full border border-neon bg-navy">
              <span className="h-2 w-2 rounded-full bg-neon" />
            </span>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {item.role} · {item.company}
                </h2>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {item.period}
                </p>
              </div>
              <span
                className={clsx(
                  "rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em]",
                  index === 0
                    ? "bg-neon/20 text-neon"
                    : "bg-white/10 text-slate-300"
                )}
              >
                {index === 0 ? "Current" : "Previous"}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-200">{item.summary}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-white/5 bg-black/20 px-4 py-2"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
