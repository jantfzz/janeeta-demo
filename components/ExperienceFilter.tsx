"use client";

import { useState } from "react";
import { experienceTypes, type Experience } from "@/data/experience";
import ExperienceList from "./ExperienceList";

const tabs = ["All", ...experienceTypes] as const;
type TabName = (typeof tabs)[number];

// Tabs that filter the experience record by category.
export default function ExperienceFilter({ items }: { items: Experience[] }) {
  const [type, setType] = useState<TabName>("All");
  const shown = type === "All" ? items : items.filter((e) => e.type === type);
  const count = (t: TabName) => (t === "All" ? items.length : items.filter((e) => e.type === t).length);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-1.5" role="group" aria-label="Filter experience by category">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={type === t}
            onClick={() => setType(t)}
            className={`rounded-full border px-3 py-1 text-[13px] transition-colors ${
              type === t ? "border-ink bg-ink text-bg" : "border-line bg-bg text-muted hover:border-ink hover:text-ink"
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
