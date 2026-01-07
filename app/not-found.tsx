import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <div className="flex max-w-md flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
                <h2 className="text-6xl font-bold text-neon">404</h2>
                <div>
                    <h3 className="text-xl font-semibold text-white">Page Not Found</h3>
                    <p className="mt-2 text-sm text-slate-300">
                        The resource you are looking for does not exist or has been moved.
                    </p>
                </div>
                <Link
                    href="/"
                    className="mx-auto inline-flex items-center justify-center rounded-full bg-neon px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy transition hover:opacity-90"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
