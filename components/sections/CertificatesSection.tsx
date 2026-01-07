"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Carousel from "@/components/ui/Carousel";

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
    },
    {
        id: "aws-security",
        name: "AWS Certified Security - Specialty",
        issuer: "Amazon Web Services",
        issued: "Sep 2023",
        link: "https://example.com/aws-security.pdf",
        preview: "/certificates/aws-security.jpg",
        tags: ["Cloud", "AWS"]
    },
    {
        id: "cissp",
        name: "Certified Information Systems Security Professional",
        issuer: "ISC2",
        issued: "Aug 2023",
        link: "https://example.com/cissp.pdf",
        preview: "/certificates/cissp.jpg",
        tags: ["Management", "Strategy"]
    },
    {
        id: "oscp",
        name: "Offensive Security Certified Professional",
        issuer: "OffSec",
        issued: "July 2023",
        link: "https://example.com/oscp.pdf",
        preview: "/certificates/oscp.jpg",
        tags: ["Offensive", "Red Team"]
    }
];

export default function CertificatesSection({ id }: { id?: string }) {
    const [filter, setFilter] = useState("");

    const filteredCerts = useMemo(() => {
        const normalized = filter.toLowerCase();
        if (!normalized) return CERTIFICATES;
        return CERTIFICATES.filter((cert) =>
            [cert.name, cert.issuer, cert.tags.join(" ")].join(" ").toLowerCase().includes(normalized)
        );
    }, [filter]);

    return (
        <section id={id} className="flex flex-col gap-8 scroll-mt-24">
            <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-left">
                <div className="flex flex-col gap-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                        Certificates
                    </p>
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Values across offensive, defensive, and cloud domains.
                    </h2>
                </div>
                <input
                    type="search"
                    placeholder="Filter certificates..."
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    className="w-full md:w-auto md:min-w-[300px] rounded-2xl border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                />
            </header>

            {filteredCerts.length > 0 ? (
                <Carousel>
                    {filteredCerts.map((cert, index) => (
                        <motion.article
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex flex-col gap-4 min-w-[85vw] sm:min-w-[350px] snap-center rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                        >
                            {/* Preview placeholder */}
                            <div className="h-32 rounded-2xl border border-dashed border-white/15 bg-black/20" />

                            <div>
                                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
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

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-auto inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                            >
                                View Credential
                            </a>
                        </motion.article>
                    ))}
                </Carousel>
            ) : (
                <div className="rounded-3xl border border-white/10 bg-black/30 p-8 text-center text-slate-400">
                    No certificates match your query yet.
                </div>
            )}
        </section>
    );
}
