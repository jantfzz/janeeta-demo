"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Experience } from "@/data/experience";
import Reveal from "./Reveal";

function DetailsDialog({ e, onClose }: { e: Experience; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [photo, setPhoto] = useState(0);
  const photos = e.photos ?? [];

  return (
    <dialog
      ref={(el) => {
        ref.current = el;
        if (el && !el.open) el.showModal();
      }}
      onClose={onClose}
      onClick={(ev) => ev.target === ref.current && ref.current?.close()}
      aria-labelledby="exp-dialog-title"
      className="m-auto w-[min(720px,calc(100vw-2rem))] max-h-[85dvh] overflow-hidden rounded-2xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-4 bg-accent px-6 py-5 text-accent-ink">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">{e.type}</p>
          <h2 id="exp-dialog-title" className="mt-1 font-display text-xl leading-snug">
            {e.role}
          </h2>
          <p className="mt-1 text-sm opacity-90">
            {e.organization} · {e.period}
          </p>
        </div>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/15 hover:bg-black/25"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <div className="max-h-[calc(85dvh-7rem)] overflow-y-auto p-6">
        {photos.length > 0 && (
          <div className="mb-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-surface-2">
              <Image src={photos[photo]} alt={`${e.role} at ${e.organization}, photo ${photo + 1}`} fill sizes="720px" className="object-cover" />
            </div>
            {photos.length > 1 && (
              <div className="mt-3 flex justify-center gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show photo ${i + 1}`}
                    aria-current={i === photo}
                    onClick={() => setPhoto(i)}
                    className={`h-2 rounded-full transition-all ${i === photo ? "w-6 bg-accent" : "w-2 bg-line"}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Key responsibilities & impact</p>
        <ul className="mt-3 space-y-2.5 text-sm">
          {[e.highlight, ...(e.details ?? [])].map((d) => (
            <li key={d} className="flex gap-3">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        {e.skills && (
          <>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted">Skills used</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {e.skills.map((k) => (
                <li key={k} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs">
                  {k}
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-6 text-xs text-muted">{e.location}</p>
      </div>
    </dialog>
  );
}

export default function ExperienceList({ items, showDetails = false }: { items: Experience[]; showDetails?: boolean }) {
  const [open, setOpen] = useState<Experience | null>(null);

  return (
    <>
      <ol className="divide-y divide-line border-y border-line">
        {items.map((e, i) => (
          <Reveal as="li" key={`${e.organization}-${e.role}`} className="grid gap-3 py-6 md:grid-cols-[56px_1fr_1.3fr] md:gap-8">
            <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-lg tracking-tight">{e.organization}</h3>
              <p className="mt-1 text-sm text-muted">{e.location}</p>
              <p className="mt-3 text-sm">
                <span className="text-muted">{e.period}</span>
                <span className="mx-2 text-line">·</span>
                <span className="font-semibold">{e.role}</span>
              </p>
              {showDetails && (
                <span className="mt-2 inline-block rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">{e.type}</span>
              )}
            </div>
            <div className="text-sm text-muted">
              <p className="text-ink/90">{e.highlight}</p>
              {showDetails && e.skills && (
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Skills used">
                  {e.skills.map((k) => (
                    <li key={k} className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] text-muted">
                      {k}
                    </li>
                  ))}
                </ul>
              )}
              <button
                type="button"
                onClick={() => setOpen(e)}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-accent hover:underline"
              >
                View details <span aria-hidden="true">→</span>
              </button>
            </div>
          </Reveal>
        ))}
      </ol>
      {open && <DetailsDialog e={open} onClose={() => setOpen(null)} />}
    </>
  );
}
