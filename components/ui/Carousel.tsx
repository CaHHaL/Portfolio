"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const { clientWidth } = containerRef.current;
            const scrollAmount = clientWidth * 0.8; // Scroll 80% of view
            containerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={`group relative ${className}`}>
            {/* Container */}
            <div
                ref={containerRef}
                onScroll={checkScroll}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 pb-12 pt-4 -mx-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {children}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-3 mt-4 sm:absolute sm:-top-16 sm:right-0 sm:mt-0">
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neon/10 hover:border-neon/50 hover:text-neon"
                    aria-label="Scroll left"
                >
                    <FaChevronLeft className="h-4 w-4" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neon/10 hover:border-neon/50 hover:text-neon"
                    aria-label="Scroll right"
                >
                    <FaChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
