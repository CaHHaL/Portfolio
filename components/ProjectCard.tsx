"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      layout
      className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-slate-300">{project.tagline}</p>
        </div>
        <div className="mt-auto grid gap-3 sm:grid-cols-2">
          <Link
            href={project.demoUrl}
            className="inline-flex items-center justify-center rounded-full bg-neon px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-navy transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </Link>
          <Link
            href={project.repoUrl}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

