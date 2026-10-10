"use client";

import { useMemo, useState } from "react";
import { skillGroups } from "@/data/skills";

// Search box + category chips over every skill group.
export default function SkillsExplorer() {
  const [group, setGroup] = useState("all");
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skillGroups
      .filter((g) => group === "all" || g.id === group)
      .map((g) => ({
        ...g,
        skills: g.skills.filter((s) => !q || s.name.toLowerCase().includes(q) || s.where?.toLowerCase().includes(q)),
      }))
      .filter((g) => g.skills.length > 0);
  }, [group, query]);

  const total = groups.reduce((n, g) => n + g.skills.length, 0);
  const chips = [{ id: "all", title: "All" }, ...skillGroups.map((g) => ({ id: g.id, title: g.title }))];

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter skills by category">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={group === c.id}
              onClick={() => setGroup(c.id)}
              className={`rounded-full border px-3 py-1 text-[13px] transition-colors ${
                group === c.id ? "border-ink bg-ink text-bg" : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
        <label className="relative block md:w-64">
          <span className="sr-only">Search skills</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills or places…"
            className="w-full rounded-full border border-line bg-surface px-4 py-2 text-sm placeholder:text-muted focus:border-accent"
          />
        </label>
      </div>

      <p className="mt-4 text-xs text-muted" aria-live="polite">
        Showing {total} skill{total === 1 ? "" : "s"}. <span className="text-accent">★</span> marks a LinkedIn top skill.
      </p>

      <div className="mt-6 space-y-10">
        {groups.map((g) => (
          <section key={g.id} aria-labelledby={`sg-${g.id}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
              <h3 id={`sg-${g.id}`} className="font-display text-xl tracking-tight">
                {g.title}
              </h3>
              <p className="text-xs text-muted">{g.blurb}</p>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {g.skills.map((s) => (
                <li
                  key={s.name}
                  className={`rounded-xl border p-3 transition-colors hover:border-accent/60 ${
                    s.top ? "border-accent/50 bg-accent-soft" : "border-line bg-surface"
                  }`}
                >
                  <p className="text-sm font-semibold">
                    {s.top && (
                      <span className="mr-1 text-accent" aria-label="Top skill">
                        ★
                      </span>
                    )}
                    {s.name}
                  </p>
                  {s.where && <p className="mt-0.5 text-xs text-muted">{s.where}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
        {groups.length === 0 && <p className="text-sm text-muted">No skills match “{query}”.</p>}
      </div>
    </div>
  );
}
