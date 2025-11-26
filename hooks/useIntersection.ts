"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function useIntersection<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const settings = useMemo(
    () => ({
      threshold: 0.2,
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? "0px",
      ...(options?.threshold ? { threshold: options.threshold } : {})
    }),
    [options?.root, options?.rootMargin, options?.threshold]
  );

  const ref = useRef<T | null>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasIntersected(true);
        observer.unobserve(entry.target);
      }
    }, settings);
    observer.observe(node);
    return () => observer.disconnect();
  }, [settings]);

  return { ref, hasIntersected };
}

