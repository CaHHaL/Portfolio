"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const initialForm: FormState = {
    name: "",
    email: "",
    subject: "",
    message: ""
};

const SOCIAL_LINKS = [
    { label: "Email", href: "mailto:cahal.agarwalla@example.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/cahalagarwalla" },
    { label: "GitHub", href: "https://github.com/cahalagarwalla" },
    { label: "Twitter", href: "https://twitter.com/cahalagarwalla" }
];

export default function ContactSection({ id }: { id?: string }) {
    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [message, setMessage] = useState("");

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");
        setMessage("");

        // TODO: Attach reCAPTCHA token here.

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            setStatus("success");
            setMessage("Message delivered. Expect a response soon.");
            setForm(initialForm);
        } catch (error) {
            setStatus("error");
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    };

    return (
        <section id={id} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#050b21] via-[#09133b] to-[#02040a] p-6 sm:p-10"
            >
                <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
                    Contact
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                    Let’s collaborate on secure, resilient systems.
                </h2>
                <p className="mt-4 text-sm text-slate-300">
                    I’m open to pentesting engagements, threat-modeling reviews, speaking
                    opportunities, and research collabs. Drop a note or connect via any
                    of the channels below.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-neon/60 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur sm:p-8"
            >
                <div className="grid gap-4">
                    <label className="flex flex-col gap-2 text-sm text-slate-200">
                        Name
                        <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                            placeholder="Full Name"
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-slate-200">
                        Email
                        <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                            placeholder="you@example.com"
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-slate-200">
                        Subject
                        <input
                            required
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                            placeholder="How can I help?"
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-slate-200">
                        Message
                        <textarea
                            required
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/80"
                            placeholder="Share a few details..."
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-neon px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-navy transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {message ? (
                    <p
                        className={`mt-4 text-sm ${status === "success" ? "text-green-300" : "text-rose-300"
                            }`}
                    >
                        {message}
                    </p>
                ) : null}
                <p className="mt-6 text-xs text-slate-500">
                    {/* TODO: Insert reCAPTCHA widget/token validation here. */}
                    Submission protected by layered spam controls; rate limiting enforced at API
                    boundary.
                </p>
            </motion.form>
        </section>
    );
}
