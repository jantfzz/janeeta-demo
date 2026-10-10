"use client";

import { useState } from "react";
import type { Experience } from "@/data/experience";
import ExperienceList from "./ExperienceList";

const types = ["All", "Professional", "Leadership", "Volunteering"] as const;

// Tabs that filter the experience record by type.
export default function ExperienceFilter({ items }: { items: Experience[] }) {
  const [type, setType] = useState<(typeof types)[number]>("All");
  const shown = type === "All" ? items : items.filter((e) => e.type === type);
  const count = (t: (typeof types)[number]) => (t === "All" ? items.length : items.filter((e) => e.type === t).length);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-1.5" role="group" aria-label="Filter experience">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={type === t}
            onClick={() => setType(t)}
            className={`rounded-full border px-3 py-1 text-[13px] transition-colors ${
              type === t ? "border-ink bg-ink text-bg" : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {t} <span className="ml-1 font-mono text-[10px] opacity-70">{count(t)}</span>
          </button>
        ))}
      </div>
      <ExperienceList key={type} items={shown} showDetails />
    </div>
  );
}
