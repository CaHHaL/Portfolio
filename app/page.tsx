"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { motion, useAnimationControls } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";

// Lazy load heavy sections that are below the fold
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"));
const CertificatesSection = dynamic(() => import("@/components/sections/CertificatesSection"));
const AchievementsSection = dynamic(() => import("@/components/sections/AchievementsSection"));
const GithubStatsSection = dynamic(() => import("@/components/sections/GithubStatsSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

// Premium "Cyberpunk" Headline
const HEADLINE_1 = "OFFENSIVE INSIGHT";
const HEADLINE_2 = "RESILIENT DEFENSE";

// Loading fallback suitable for sections
function SectionLoader() {
  return (
    <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-white/5 bg-white/5 p-10 text-slate-500">
      Loading section...
    </div>
  );
}

// Scramble Text Component for that "decoding" effect
const ScrambleText = ({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3; // Controls speed: lower = slower
    }, 30); // Update frequency

    // Start delay
    const startTimeout = setTimeout(() => {
      // Just triggering the interval logic
    }, delay * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(startTimeout);
    }
  }, [text, delay]);

  return (
    <span className={className}>{displayText}</span>
  );
};


export default function HomePage() {
  return (
    <>
      <SEO
        title="Home | Cahal Agarwalla"
        description="Offensive security for resilient systems. Explore Cahal Agarwalla's projects, experience, and credentials."
      />

      {/* Hero Section */}
      <section id="home" className="relative isolate flex min-h-[95vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-8 lg:px-16 scroll-mt-32">
        {/* Dynamic Background */}
        <CyberGridBackground />

        <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-neon">System Online</span>
          </motion.div>

          {/* Main Headline with Smooth Scramble Effect */}
          <div className="flex flex-col items-center leading-tight">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <ScrambleText
                  text={HEADLINE_1}
                  className="font-mono text-5xl font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl"
                  delay={0.2}
                />
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="font-mono text-5xl font-bold tracking-tighter text-slate-500 sm:text-7xl lg:text-8xl">
                  {HEADLINE_2}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Introduction Text - Smooth Fade */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-base text-slate-400 sm:text-lg lg:text-xl"
          >
            Hi, I&apos;m <span className="text-white font-semibold">Cahal Agarwalla</span>. I bridge the gap between <span className="text-neon shadow-neon/50 drop-shadow-[0_0_8px_rgba(77,225,255,0.4)]">adversarial emulation</span> and <span className="text-neon shadow-neon/50 drop-shadow-[0_0_8px_rgba(77,225,255,0.4)]">security engineering</span>.
          </motion.p>

          {/* Call to Actions - Magnetic & Smooth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neon px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-navy transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(77,225,255,0.5)]"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Explore Work</span>
              <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
            </a>

            <a
              href="https://drive.google.com/file/d/1rE2fvomvRUxQOr8s-ZOwr81_y4ZMqPeg/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sections Stack */}
      <div className="flex flex-col gap-24 py-10 lg:gap-32 lg:py-20">
        <AboutSection id="about" />

        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection id="projects" />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection id="experience" />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CertificatesSection id="certificates" />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <GithubStatsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <AchievementsSection id="achievements" />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactSection id="contact" />
        </Suspense>
      </div>
    </>
  );
}

function CyberGridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-black z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"
      />

      {/* Glowing Accent */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[50%] top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px]"
      />

      {/* Secondary Accent */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[120px]"
      />
    </div>
  )
}
