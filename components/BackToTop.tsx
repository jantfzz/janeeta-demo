"use client";

import { useEffect, useState } from "react";

// Footer "Back to top" link plus a floating button that appears after scrolling.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  };

  return (
    <>
      <button type="button" onClick={toTop} className="hover:text-ink">
        Back to top ↑
      </button>
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={show ? 0 : -1}
        className={`fixed bottom-5 right-5 z-40 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink shadow-sm transition-all duration-300 hover:border-accent hover:text-accent ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M7 12V2M3 6l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
