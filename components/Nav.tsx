"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    setMounted(true);

    // Simple scroll spy logic
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
    setActiveHash(hash);
  };

  const modeLabel = mounted ? (theme === "light" ? "Dark" : "Light") : "Toggle";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-navy/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="text-lg font-semibold tracking-tight text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80 dark:text-white"
        >
          Cahal<span className="text-neon">.</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <a
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`text-sm transition hover:text-neon focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80 ${activeHash === link.href ? "text-neon" : "text-slate-600 dark:text-slate-200"
                  }`}
              >
                {link.label}
              </a>
            </motion.div>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80 dark:border-white/15 dark:text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.span
            className="absolute block h-0.5 w-5 bg-current"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -6 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute block h-0.5 w-5 bg-current"
            animate={{
              opacity: isOpen ? 0 : 1
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute block h-0.5 w-5 bg-current"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 6 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 bg-white/95 px-4 pb-6 pt-2 backdrop-blur dark:border-white/10 dark:bg-navy/90 sm:px-6"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80 dark:border-white/10 ${activeHash === link.href ? "text-neon" : "text-slate-600 dark:text-slate-100"
                      }`}
                  >
                    {link.label}
                    {activeHash === link.href && (
                      <motion.span
                        className="h-2 w-2 rounded-full bg-neon"
                        layoutId="nav-indicator"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
