"use client";

import { motion } from "framer-motion";

type Achievement = {
    id: string;
    title: string;
    category: "Bug Bounty" | "CTF" | "Talk";
    description: string;
    link: string;
    date: string;
};

const ACHIEVEMENTS: Achievement[] = [
    {
        id: "bug-bounty",
        title: "Responsible Disclosure · Fintech API",
        category: "Bug Bounty",
        description:
            "Reported broken object level authorization that exposed transaction metadata. Collaborated on fix and mitigation playbook.",
        link: "https://example.com/fintech-disclosure",
        date: "Aug 2024"
    },
    {
        id: "ctf",
        title: "First Place · National Cyber League Team Challenge",
        category: "CTF",
        description:
            "Led reversing + forensics tracks, building playbooks that helped teammates complete crypto and web tracks faster.",
        link: "https://example.com/ncl-recap",
        date: "May 2024"
    },
    {
        id: "talk",
        title: "Talk: Threat Hunting with Behavioral Telemetry",
        category: "Talk",
        description:
            "Presented workflows for sliding-window detections at a regional security meetup, sharing sanitized case studies.",
        link: "https://example.com/threat-hunting-talk",
        date: "Jan 2024"
    }
];

export default function AchievementsSection({ id }: { id?: string }) {
    return (
        <section id={id} className="flex flex-col gap-8 scroll-mt-24">
            <header className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
                    Achievements
                </p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Highlights across disclosures, competitions, and talks.
                </h2>
            </header>
            <div className="grid gap-6 lg:grid-cols-3">
                {ACHIEVEMENTS.map((achievement, index) => (
                    <motion.article
                        key={achievement.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                        <div className="flex items-center justify-between">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-neon">
                                {achievement.category}
                            </span>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                                {achievement.date}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                {achievement.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-300">{achievement.description}</p>
                        </div>
                        <a
                            href={achievement.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                        >
                            Read More
                        </a>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
