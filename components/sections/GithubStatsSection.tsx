"use client";

import { motion } from "framer-motion";
// Using standard FontAwesome icons for reliability
import {
    FaPython,
    FaJs,
    FaHtml5,
    FaStar,
    FaCodeBranch,
    FaGithub
} from "react-icons/fa";
import { SiTypescript, SiGnubash } from "react-icons/si";
// Using specific FA icons that are definitely in the package
import { FaCode, FaLaptopCode } from "react-icons/fa";

export default function GithubStatsSection() {
    const username = "CaHHaL";

    // Keep the working streak URL
    const streakThemeParams = {
        bg_color: "050A1F",
        title_color: "4DE1FF",
        text_color: "cbd5e1",
        ring: "4DE1FF",
        fire: "4DE1FF",
        currStreakLabel: "4DE1FF",
        stroke: "4DE1FF",
        hide_border: "true"
    };
    const streakQuery = new URLSearchParams(streakThemeParams).toString();
    const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&${streakQuery}`;

    // Demo Data for Stats
    // Using explicit icon components we know exist
    const STATS = [
        { label: "Total Stars", value: "15", icon: FaStar },
        { label: "Total Commits", value: "482", icon: FaCode },
        { label: "Total PRs", value: "34", icon: FaCodeBranch },
        { label: "Contributed to", value: "12", icon: FaGithub },
    ];

    // Demo Data for Languages
    const LANGUAGES = [
        { name: "Python", percent: 45, color: "#3572A5", icon: FaPython },
        { name: "TypeScript", percent: 30, color: "#3178C6", icon: SiTypescript },
        { name: "JavaScript", percent: 15, color: "#F7DF1E", icon: FaJs },
        { name: "Shell", percent: 8, color: "#89E051", icon: SiGnubash },
        { name: "HTML/CSS", percent: 2, color: "#E34C26", icon: FaHtml5 },
    ];

    return (
        <section className="flex flex-col gap-8 scroll-mt-24">
            <header className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
                    Code Activity
                </p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Commitment to code.
                </h2>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Static General Stats Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm backdrop-blur transition hover:border-neon/30 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                    <div className="flex items-center gap-3">
                        <span className="h-6 w-6 text-neon"><FaGithub /></span>
                        <h3 className="text-lg font-semibold text-neon">GitHub Stats</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                    {/* Safe rendering check */}
                                    {stat.icon && <stat.icon className="text-lg" />}
                                    <span className="text-2xl font-bold">{stat.value}</span>
                                </div>
                                <span className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* LIVE Streak Stats (Kept as requested) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm backdrop-blur transition hover:border-neon/30 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={streakUrl}
                        alt="GitHub Streak"
                        className="h-full w-full object-contain"
                        loading="lazy"
                    />
                </motion.div>

                {/* Static Top Languages Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-1 flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm backdrop-blur transition hover:border-neon/30 dark:border-white/10 dark:bg-white/5 dark:shadow-none lg:col-span-2"
                >
                    <div className="flex items-center gap-3">
                        <span className="h-6 w-6 text-neon"><SiTypescript /></span>
                        <h3 className="text-lg font-semibold text-neon">Top Languages</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Progress Bar */}
                        <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-black/40">
                            {LANGUAGES.map((lang) => (
                                <div
                                    key={lang.name}
                                    style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                                    className="h-full first:rounded-l-full last:rounded-r-full"
                                />
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap gap-4 sm:gap-6">
                            {LANGUAGES.map((lang) => (
                                <div key={lang.name} className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }} />
                                    <span className="text-sm font-medium text-slate-900 dark:text-white">{lang.name}</span>
                                    <span className="text-xs text-slate-400">{lang.percent}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="text-center">
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80 dark:border-white/20 dark:bg-white/5 dark:text-white"
                >
                    View GitHub Profile
                </a>
            </div>
        </section>
    );
}
