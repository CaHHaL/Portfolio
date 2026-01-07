"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiBurpsuite,
  SiCisco,
  SiKalilinux,
  SiPython,
  SiGo,
  SiWireshark,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiMetasploit,
  SiOwasp,
} from "react-icons/si";
import { FaShieldAlt, FaCloud, FaTerminal, FaSearch, FaLock, FaUserSecret, FaFingerprint } from "react-icons/fa";
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
    name: "Languages",
    skills: [
      { label: "Python", level: "Advanced", tags: ["Automation"], icon: SiPython },
      { label: "HTML", level: "Advanced", tags: ["Structure"], icon: SiHtml5 },
      { label: "CSS", level: "Advanced", tags: ["Styling"], icon: SiCss3 },
      { label: "JavaScript", level: "Advanced", tags: ["Dynamic"], icon: SiJavascript },
      { label: "C++", level: "Core", tags: ["System"], icon: SiCplusplus },
      { label: "SQL", level: "Core", tags: ["Data"], icon: SiMysql },
      { label: "Go", level: "Exploring", tags: ["Cloud Native"], icon: SiGo },
      { label: "MongoDB", level: "Exploring", tags: ["NoSQL"], icon: SiMongodb },
    ]
  },
  {
    name: "Tools",
    skills: [
      { label: "Kali Linux", level: "Advanced", tags: ["OffSec"], icon: SiKalilinux },
      { label: "Burp Suite", level: "Advanced", tags: ["Web App"], icon: SiBurpsuite },
      { label: "Wireshark", level: "Core", tags: ["Packet Analysis"], icon: SiWireshark },
      { label: "React", level: "Core", tags: ["Frontend"], icon: SiReact },
      { label: "NodeJS", level: "Core", tags: ["Backend"], icon: SiNodedotjs },
      // { label: "Tailwind CSS", level: "Advanced", tags: ["UI"], icon: SiTailwindcss },
      { label: "Metasploit", level: "Core", tags: ["Exploitation"], icon: SiMetasploit },
      { label: "Nmap", level: "Advanced", tags: ["Recon"], icon: FaSearch },
      { label: "Linpeas & Winpeas", level: "Advanced", tags: ["PrivEsc"], icon: FaTerminal },
      // { label: "Feroxbuster", level: "Core", tags: ["Enumeration"], icon: FaSearch },
    ]
  },
  {
    name: "Domains",
    skills: [
      { label: "OWASP Top 10", level: "Core", tags: ["AppSec"], icon: SiOwasp },
      { label: "Incident Response", level: "Core", tags: ["Detection"], icon: FaShieldAlt },
      { label: "Cloud Security", level: "Exploring", tags: ["Azure"], icon: FaCloud },
      { label: "Network Defense", level: "Advanced", tags: ["Blue Team"], icon: SiCisco },
      { label: "OSINT", level: "Advanced", tags: ["Intel"], icon: FaSearch },
      { label: "Cryptography", level: "Core", tags: ["Encryption"], icon: FaLock },
      { label: "Threat Intelligence", level: "Exploring", tags: ["Analysis"], icon: FaUserSecret },
      { label: "Digital Forensics", level: "Core", tags: ["Investigation"], icon: FaFingerprint },
    ]
  }
];

const SkillCategoryCard = ({ category, index, hasIntersected, isExpanded }: { category: SkillCategory; index: number; hasIntersected: boolean; isExpanded: boolean }) => {
  const displayedSkills = isExpanded ? category.skills : category.skills.slice(0, 3);

  return (
    <motion.div
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
        <AnimatePresence initial={false} mode="popLayout">
          {displayedSkills.map((skill) => (
            <motion.li
              key={skill.label}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <skill.icon className="h-6 w-6 text-neon flex-shrink-0" aria-hidden />
              <div className="flex flex-col gap-1 text-left min-w-0">
                <span className="text-sm font-semibold text-white truncate">
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
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

export default function SkillsGrid() {
  const { ref, hasIntersected } = useIntersection<HTMLDivElement>({
    rootMargin: "-20% 0px"
  });
  const [areAllExpanded, setAreAllExpanded] = useState(false);

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
          <SkillCategoryCard
            key={category.name}
            category={category}
            index={index}
            hasIntersected={hasIntersected}
            isExpanded={areAllExpanded}
          />
        ))}
      </div>

      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={hasIntersected ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={() => setAreAllExpanded(!areAllExpanded)}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 px-8 py-3 transition-all hover:bg-white/5"
        >
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-white">
              {areAllExpanded ? "Show Less" : "Show More"}
            </span>
            <motion.div
              animate={{ rotate: areAllExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.div>
          </div>
        </button>
      </motion.div>
    </motion.section>
  );
}
