"use client";

import { useEffect, useRef, useState } from "react";

// Counts from 0 to `value` once the number has scrolled into (or past) view.
export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;
    const run = () => {
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - t0) / 1200, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const check = () => {
      if (started) return;
      // Start when the number is on screen or already above it (e.g. after a fast scroll).
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        started = true;
        window.removeEventListener("scroll", check);
        run();
      }
    };

    setN(0);
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", check);
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {n}
        {suffix}
      </span>
    </span>
  );
}
