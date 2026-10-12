import { capabilities } from "@/data/capabilities";

// One scrolling row per skill group, alternating direction. Pauses on hover;
// with reduced motion it becomes a plain wrapped list (see .marquee in globals.css).
export default function SkillsMarquee() {
  return (
    <div className="space-y-3" aria-label="Skills by category">
      {capabilities.map((c, r) => (
        <div key={c.title} className="grid items-center gap-2 md:grid-cols-[200px_1fr] md:gap-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{c.title}</p>
          <div className="marquee overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
            <div className="marquee-track flex w-max gap-2" data-reverse={r % 2 === 1 ? "" : undefined}>
              {[...c.skills, ...c.skills].map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  aria-hidden={i >= c.skills.length ? "true" : undefined}
                  className="whitespace-nowrap rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
