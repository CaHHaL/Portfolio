"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";

const PROJECTS: Project[] = [
  {
    id: "malware-detection",
    title: "Malware Behavior Detection",
    tagline:
      "Sandbox telemetry + behavior scoring to surface anomalous process chains without executing dangerous payloads.",
    image: "/projects/malware-detection.jpg",
    badges: ["Behavioral AI", "EDR"],
    demoUrl: "https://example.com/malware-detection-demo",
    repoUrl: "https://github.com/sakshiagarwalla/malware-behavior-detection"
  },
  {
    id: "hash-lab",
    title: "Password Hash Extraction & Cracking (Sanitized)",
    tagline:
      "Compliance-friendly lab that demonstrates credential-hardening guidance using anonymized hashes and safe tooling walkthroughs.",
    image: "/projects/hash-lab.jpg",
    badges: ["Blue Team", "Education"],
    demoUrl: "https://example.com/hash-lab",
    repoUrl: "https://github.com/sakshiagarwalla/hash-lab"
  },
  {
    id: "vulnerable-web-app",
    title: "Vulnerable Web App",
    tagline:
      "Intentionally insecure portal used to teach secure coding patterns with sanitized attack narratives and mitigations.",
    image: "/projects/vwa.jpg",
    badges: ["AppSec", "Training"],
    demoUrl: "https://example.com/vulnerable-web-app",
    repoUrl: "https://github.com/sakshiagarwalla/vulnerable-web-app"
  }
];

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalized = query.toLowerCase();
    if (!normalized) return PROJECTS;
    return PROJECTS.filter((project) =>
      [project.title, project.tagline, project.badges.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [query]);

  return (
    <section className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
          Projects
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Safe labs and detection builds that drive resilient security posture.
        </h1>
        <label className="relative block">
          <span className="sr-only">Filter projects</span>
          <input
            type="search"
            placeholder="Search by name, focus, or tag..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-2xl border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.3em] text-slate-500">
            Filter
          </span>
        </label>
      </motion.div>

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        transition={{ duration: 0.3 }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-white/10 bg-black/30 p-8 text-center text-slate-400">
            No projects match your search yet. Try another keyword.
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}

