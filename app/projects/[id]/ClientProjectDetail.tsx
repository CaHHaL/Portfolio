"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ProjectDetail } from "@/types/project";

export default function ClientProjectDetail({ project }: { project: ProjectDetail }) {
  return (
    <article className="flex flex-col gap-10">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#050b21] via-[#0a1643] to-[#04090f] p-6 sm:p-10"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
          Project Detail
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-white">
          {project.title}
        </h1>
        <p className="mt-4 text-slate-200">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-neon px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-navy transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Live Demo
          </Link>
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
          >
            View Repository
          </Link>
        </div>
      </motion.header>

      <section className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <h2 className="text-2xl font-semibold text-white">Problem</h2>
          <p className="mt-3 text-slate-200">{project.problem}</p>
          <h3 className="mt-6 text-lg font-semibold text-white">Approach</h3>
          <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-300">
            {project.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-black/30 p-6"
        >
          <h2 className="text-2xl font-semibold text-white">Architecture</h2>
          <p className="mt-2 text-sm text-slate-300">
            Simplified view showing how telemetry flows into scoring engines and
            reporting surfaces.
          </p>
          <div className="mt-4 rounded-2xl bg-white/5 p-4">
            <ArchitectureDiagram />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6"
      >
        <h2 className="text-2xl font-semibold text-white">Screenshots</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.screenshots.map((shot) => (
            <div
              key={shot.src}
              className="relative h-60 overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </motion.section>
    </article>
  );
}

function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 400 220"
      role="img"
      aria-label="Architecture flow showing data intake, analysis, and reporting."
    >
      <defs>
        <linearGradient id="line" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#4de1ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4de1ff" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect x="10" y="30" width="110" height="60" rx="12" fill="#081230" stroke="#4de1ff" strokeWidth="2" />
      <text x="65" y="65" textAnchor="middle" fill="#d4f5ff" fontSize="12">
        Data Intake
      </text>
      {/* ... rest of diagram omitted for brevity ... */}
    </svg>
  );
}