import { tools } from "@/data/skills";

// Two rows of tool chips scrolling in opposite directions. Pauses on hover;
// with reduced motion it becomes a plain wrapped list.
export default function ToolsMarquee() {
  const half = Math.ceil(tools.length / 2);
  const rows = [tools.slice(0, half), tools.slice(half)];

  return (
    <div className="marquee space-y-2 overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-label="Tools I use">
      {rows.map((row, r) => (
        <div key={r} className="marquee-track flex w-max gap-2" data-reverse={r === 1 ? "" : undefined}>
          {[...row, ...row].map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i >= row.length ? "true" : undefined}
              className="whitespace-nowrap rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px]"
            >
              {t}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
