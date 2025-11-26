"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Certificates", href: "/certificates" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" }
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = () => setIsOpen(false);
  const modeLabel = mounted ? (theme === "light" ? "Dark" : "Light") : "Toggle";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link
          href="#home"
          className="text-lg font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
        >
          Cahal<span className="text-neon">.</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href={link.href}
                className="text-sm text-slate-200 transition hover:text-neon focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
          >
            {modeLabel} Mode
          </button>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80 md:hidden"
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
            className="border-t border-white/10 bg-navy/90 px-4 pb-6 pt-2 backdrop-blur sm:px-6"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 text-sm text-slate-100 transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                  >
                    {link.label}
                    <motion.span
                      className="h-2 w-2 rounded-full bg-neon"
                      layoutId="nav-indicator"
                    />
                  </Link>
                </li>
              ))}
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
              >
                {modeLabel} Mode
              </button>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

