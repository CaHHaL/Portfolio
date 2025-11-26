"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiBurpsuite,
  SiCisco,
  SiKalilinux,
  SiPython,
  SiTypescript,
  SiWireshark,
  SiGnubash
} from "react-icons/si";
import { FaShieldAlt, FaCloud } from "react-icons/fa";
import { useIntersection } from "@/hooks/useIntersection";

type SkillCategory = {
  name: "Tools" | "Languages" | "Domains";
  skills: Skill[];
};

type Skill = {
  label: string;
  level: "Core" | "Advanced" | "Exploring";
  tags: string[];
  icon: IconType;
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Tools",
    skills: [
      { label: "Burp Suite", level: "Advanced", tags: ["Web App"], icon: SiBurpsuite },
      { label: "Wireshark", level: "Core", tags: ["Packet Analysis"], icon: SiWireshark },
      { label: "Kali Linux", level: "Advanced", tags: ["OffSec"], icon: SiKalilinux }
    ]
  },
  {
    name: "Languages",
    skills: [
      { label: "Python", level: "Advanced", tags: ["Automation"], icon: SiPython },
      { label: "TypeScript", level: "Core", tags: ["Frontline UI"], icon: SiTypescript },
      { label: "Bash", level: "Core", tags: ["Scripting"], icon: SiGnubash }
    ]
  },
  {
    name: "Domains",
    skills: [
      { label: "Incident Response", level: "Core", tags: ["Detection"], icon: FaShieldAlt },
      { label: "Cloud Security", level: "Exploring", tags: ["Azure"], icon: FaCloud },
      { label: "Network Defense", level: "Advanced", tags: ["Blue Team"], icon: SiCisco }
    ]
  }
];

export default function SkillsGrid() {
  const { ref, hasIntersected } = useIntersection<HTMLDivElement>({
    rootMargin: "-20% 0px"
  });

  return (
    <motion.section
      ref={ref}
      aria-labelledby="skills-heading"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur"
      initial={{ opacity: 0, y: 40 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col gap-4 pb-6">
        <p className="text-xs uppercase tracking-[0.4em] text-neon/90">Skills</p>
        <h2 id="skills-heading" className="text-2xl font-semibold text-white">
          Operational reach across tools, languages, and domains.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
            role="group"
            aria-labelledby={`${category.name}-label`}
          >
            <div className="flex items-center justify-between">
              <h3
                id={`${category.name}-label`}
                className="text-lg font-semibold text-white"
              >
                {category.name}
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {category.skills.length} items
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill.label}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <skill.icon className="h-6 w-6 text-neon" aria-hidden />
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-sm font-semibold text-white">
                      {skill.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {skill.level}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

