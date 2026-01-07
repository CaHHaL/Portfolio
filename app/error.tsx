"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex max-w-md flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
            >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/10 text-3xl">
                    ⚠️
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        Something went wrong!
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">
                        A critical error occurred. It has been logged for review.
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        onClick={() => reset()}
                        className="rounded-full bg-neon px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy transition hover:opacity-90"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                    >
                        Go Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
