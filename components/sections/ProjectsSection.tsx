"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/ui/Carousel";
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
        repoUrl: "https://github.com/cahalagarwalla/malware-behavior-detection"
    },
    {
        id: "hash-lab",
        title: "Password Hash Extraction & Cracking",
        tagline:
            "Compliance-friendly lab that demonstrates credential-hardening guidance using anonymized hashes and safe tooling walkthroughs.",
        image: "/projects/hash-lab.jpg",
        badges: ["Blue Team", "Education"],
        demoUrl: "https://example.com/hash-lab",
        repoUrl: "https://github.com/cahalagarwalla/hash-lab"
    },
    {
        id: "vulnerable-web-app",
        title: "Vulnerable Web App",
        tagline:
            "Intentionally insecure portal used to teach secure coding patterns with sanitized attack narratives and mitigations.",
        image: "/projects/vwa.jpg",
        badges: ["AppSec", "Training"],
        demoUrl: "https://example.com/vulnerable-web-app",
        repoUrl: "https://github.com/cahalagarwalla/vulnerable-web-app"
    },
    {
        id: "cloud-honeypot",
        title: "Cloud Native HoneyPot",
        tagline:
            "Deceptive AWS infrastructure that logs attacker reconnaissance and lateral movement attempts for threat intel generation.",
        image: "/projects/honeypot.jpg",
        badges: ["Cloud Sec", "Deception"],
        demoUrl: "https://example.com/honeypot",
        repoUrl: "https://github.com/cahalagarwalla/cloud-honeypot"
    },
    {
        id: "ransomware-lab",
        title: "Ransomware Analysis Lab",
        tagline:
            "Isolated environment for safe detonation and static analysis of ransomware samples using Remnux and FlareVM.",
        image: "/projects/ransomware.jpg",
        badges: ["Malare Analysis", "Reverse Engineering"],
        demoUrl: "https://example.com/ransomware-lab",
        repoUrl: "https://github.com/cahalagarwalla/ransomware-lab"
    },
    {
        id: "zero-trust-identity",
        title: "Zero Trust Identity Architecture",
        tagline:
            "Implementation of OIDC/OAuth2 flows with strict conditional access policies and continuous verification.",
        image: "/projects/zero-trust.jpg",
        badges: ["IAM", "Architecture"],
        demoUrl: "https://example.com/zero-trust",
        repoUrl: "https://github.com/cahalagarwalla/zero-trust-identity"
    }
];

export default function ProjectsSection({ id }: { id?: string }) {
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
        <section id={id} className="flex flex-col gap-8 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="flex flex-col gap-4">
                        <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
                            Projects
                        </p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                            Safe labs and detection builds.
                        </h2>
                    </div>

                    <label className="relative block w-full md:w-auto md:min-w-[300px]">
                        <span className="sr-only">Filter projects</span>
                        <input
                            type="search"
                            placeholder="Search projects..."
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            className="w-full rounded-2xl border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                        />
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.3em] text-slate-500">
                            Filter
                        </span>
                    </label>
                </div>
            </motion.div>

            {filteredProjects.length > 0 ? (
                <Carousel>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="min-w-[85vw] sm:min-w-[400px] snap-center">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div className="rounded-3xl border border-white/10 bg-black/30 p-8 text-center text-slate-400">
                    No projects match your search yet. Try another keyword.
                </div>
            )}
        </section>
    );
}
