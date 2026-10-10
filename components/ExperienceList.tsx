import type { Experience } from "@/data/experience";
import Reveal from "./Reveal";

export default function ExperienceList({ items, showDetails = false }: { items: Experience[]; showDetails?: boolean }) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {items.map((e, i) => (
        <Reveal as="li" key={`${e.organization}-${e.role}`} className="grid gap-3 py-7 md:grid-cols-[64px_1fr_1.3fr] md:gap-8">
          <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="font-display text-xl tracking-tight">{e.organization}</h3>
            <p className="mt-1 text-sm text-muted">{e.location}</p>
            <p className="mt-3 text-sm">
              <span className="text-muted">{e.period}</span>
              <span className="mx-2 text-line">·</span>
              <span className="font-semibold">{e.role}</span>
            </p>
          </div>
          <div className="text-muted">
            <p className="text-ink/90">{e.highlight}</p>
            {showDetails && e.details && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
