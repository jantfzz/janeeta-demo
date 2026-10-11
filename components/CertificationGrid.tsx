"use client";

import { useState } from "react";
import { certificationCategories, certifications } from "@/data/recognition";
import { Arrow } from "./ui";

const tabs = ["All", ...certificationCategories] as const;

export default function CertificationGrid() {
  const [cat, setCat] = useState<(typeof tabs)[number]>("All");
  const shown = cat === "All" ? certifications : certifications.filter((c) => c.category === cat);
  const count = (t: (typeof tabs)[number]) => (t === "All" ? certifications.length : certifications.filter((c) => c.category === t).length);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-1.5" role="group" aria-label="Filter certifications by category">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={cat === t}
            onClick={() => setCat(t)}
            className={`rounded-full border px-3 py-1 text-[13px] transition-colors ${
              cat === t ? "border-ink bg-ink text-bg" : "border-line bg-bg text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {t} <span className="ml-1 font-mono text-[10px] opacity-70">{count(t)}</span>
          </button>
        ))}
      </div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c, i) => (
          <li key={c.title} className="flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px]">{c.category}</span>
            </div>
            <h3 className="mt-3 font-semibold leading-snug">{c.title}</h3>
            <p className="mt-1 text-sm text-muted">{c.issuer}</p>
            <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted">
              <span>{c.date ? `Issued ${c.date}` : ""}</span>
              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                  Show credential <Arrow />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
