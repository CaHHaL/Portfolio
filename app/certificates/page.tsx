"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Certificate = {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  link: string;
  preview: string;
  tags: string[];
};

const CERTIFICATES: Certificate[] = [
  {
    id: "eJPT",
    name: "eJPT v2",
    issuer: "INE Security",
    issued: "Jun 2024",
    link: "https://example.com/ejpt.pdf",
    preview: "/certificates/ejpt-thumb.jpg",
    tags: ["Offensive", "Penetration Testing"]
  },
  {
    id: "az500",
    name: "Microsoft Azure Security Engineer",
    issuer: "Microsoft",
    issued: "Mar 2024",
    link: "https://example.com/az500.pdf",
    preview: "/certificates/az500-thumb.jpg",
    tags: ["Cloud", "Azure"]
  },
  {
    id: "splunk",
    name: "Splunk Core Certified Power User",
    issuer: "Splunk",
    issued: "Oct 2023",
    link: "https://example.com/splunk.pdf",
    preview: "/certificates/splunk-thumb.jpg",
    tags: ["Detection", "SIEM"]
  }
];

export default function CertificatesPage() {
  const [filter, setFilter] = useState("");

  const filteredCerts = useMemo(() => {
    const normalized = filter.toLowerCase();
    if (!normalized) return CERTIFICATES;
    return CERTIFICATES.filter((cert) =>
      [cert.name, cert.issuer, cert.tags.join(" ")].join(" ").toLowerCase().includes(normalized)
    );
  }, [filter]);

  return (
    <section className="flex flex-col gap-8">
      <header className="flex flex-col gap-4 text-left">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Certificates
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Third-party validation across offensive, defensive, and cloud domains.
        </h1>
        <input
          type="search"
          placeholder="Filter by name, issuer, or tag..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="rounded-2xl border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
        />
      </header>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCerts.map((cert, index) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            {/* Preview placeholder (replace with <Image /> when assets exist) */}
            <div className="h-32 rounded-2xl border border-dashed border-white/15 bg-black/20" />

            <div>
              <h2 className="text-lg font-semibold text-white">{cert.name}</h2>
              <p className="text-sm text-slate-300">{cert.issuer}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{cert.issued}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
            >
              View Credential
            </Link>
          </motion.article>
        ))}

        {filteredCerts.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-white/10 bg-black/30 p-8 text-center text-slate-400">
            No certificates match your query yet.
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}

