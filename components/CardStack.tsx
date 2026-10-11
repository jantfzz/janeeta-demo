"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// A stack of image cards. Next/Previous moves the top card to the back of the pile;
// clicking the top card opens it full size.
export default function CardStack({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0);
  const [leaving, setLeaving] = useState<null | "next" | "prev">(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const n = images.length;

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (leaving) return;
      setLeaving(dir);
      window.setTimeout(() => {
        setI((v) => (dir === "next" ? (v + 1) % n : (v - 1 + n) % n));
        setLeaving(null);
      }, 260);
    },
    [leaving, n],
  );

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (!d.open) return;
      if (e.key === "ArrowRight") setI((v) => (v + 1) % n);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  if (n === 0) return null;
  const visible = Math.min(n, 4);

  return (
    <div>
      <div
        className="relative mx-auto aspect-[16/10] w-full max-w-3xl"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} images`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go("next");
          if (e.key === "ArrowLeft") go("prev");
        }}
      >
        {Array.from({ length: visible }, (_, k) => visible - 1 - k).map((depth) => {
          const idx = (i + depth) % n;
          const top = depth === 0;
          const rot = [0, -2.5, 2, -1.2][depth];
          const shift = depth * 12;
          const out = top && leaving;
          return (
            <button
              key={idx}
              type="button"
              tabIndex={top ? 0 : -1}
              aria-hidden={top ? undefined : true}
              aria-label={top ? `Open image ${idx + 1} of ${n} full size` : undefined}
              onClick={top ? () => dialogRef.current?.showModal() : undefined}
              className={`absolute inset-0 overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] transition-all duration-300 ease-out motion-reduce:transition-none ${
                top ? "cursor-zoom-in" : "pointer-events-none"
              }`}
              style={{
                zIndex: 10 - depth,
                transform: out
                  ? `translateX(${leaving === "next" ? "-" : ""}38%) rotate(${leaving === "next" ? -8 : 8}deg)`
                  : `translateY(${shift}px) rotate(${rot}deg) scale(${1 - depth * 0.035})`,
                opacity: out ? 0 : depth > 2 ? 0.5 : 1,
              }}
            >
              <Image
                src={images[idx]}
                alt={top ? `${title}, image ${idx + 1} of ${n}` : ""}
                fill
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-contain"
              />
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go("prev")}
          className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-ink"
          aria-label="Previous image"
        >
          ←
        </button>
        <div className="flex flex-wrap items-center justify-center gap-1.5" aria-hidden="true">
          {images.map((_, k) => (
            <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? "w-5 bg-accent" : "w-1.5 bg-line"}`} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go("next")}
          className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-ink"
          aria-label="Next image"
        >
          →
        </button>
      </div>
      <p className="mt-3 text-center font-mono text-xs text-muted" aria-live="polite">
        {i + 1} / {n} · click the card to enlarge
      </p>

      <dialog
        ref={dialogRef}
        className="m-auto h-[90vh] w-[94vw] max-w-6xl rounded-2xl bg-bg p-0 text-ink backdrop:bg-black/80"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 text-sm">
            <span className="font-mono text-xs text-muted">
              {i + 1} / {n}
            </span>
            <div className="flex gap-2">
              <button type="button" onClick={() => setI((v) => (v - 1 + n) % n)} className="rounded-full border border-line px-3 py-1 hover:border-ink" aria-label="Previous image">
                ←
              </button>
              <button type="button" onClick={() => setI((v) => (v + 1) % n)} className="rounded-full border border-line px-3 py-1 hover:border-ink" aria-label="Next image">
                →
              </button>
              <button type="button" onClick={() => dialogRef.current?.close()} className="rounded-full bg-ink px-3 py-1 text-bg">
                Close
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <Image src={images[i]} alt={`${title}, image ${i + 1} of ${n}`} fill sizes="94vw" className="object-contain p-3" />
          </div>
        </div>
      </dialog>
    </div>
  );
}
