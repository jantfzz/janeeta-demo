import Image from "next/image";
import type { Project } from "@/data/projects";

// Small deterministic random generator so each project gets its own pattern.
function rng(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function Pattern({ project }: { project: Project }) {
  const r = rng(project.slug);
  const stroke = "var(--accent)";

  if (project.category === "Research") {
    // Petri dish with colonies
    const dots = Array.from({ length: 34 }, () => {
      const a = r() * Math.PI * 2;
      const d = Math.sqrt(r()) * 108;
      return { x: 300 + Math.cos(a) * d, y: 170 + Math.sin(a) * d, s: 3 + r() * 9 };
    });
    return (
      <g>
        <circle cx="300" cy="170" r="130" fill="none" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="300" cy="170" r="120" fill="none" stroke={stroke} strokeOpacity="0.25" />
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.s} fill={stroke} fillOpacity={0.25 + (i % 4) * 0.15} />
        ))}
      </g>
    );
  }

  if (project.category === "Design") {
    // Four linked subsystems in a loop
    const boxes = [
      [190, 80],
      [370, 80],
      [370, 220],
      [190, 220],
    ];
    return (
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <path d="M230 80H330M370 102V198M330 220H230M190 198V102" strokeOpacity="0.6" strokeDasharray="5 5" />
        {boxes.map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 40} y={y - 22} width="80" height="44" rx="10" strokeOpacity="0.85" fill="var(--accent)" fillOpacity={0.06 + i * 0.05} />
            <circle cx={x} cy={y} r="4" fill={stroke} />
          </g>
        ))}
        <path d="M300 170m-26 0a26 26 0 1 0 52 0a26 26 0 1 0 -52 0" strokeOpacity="0.4" />
      </g>
    );
  }

  if (project.category === "Data") {
    // Bars with a fitted line
    const n = 14;
    const pts = Array.from({ length: n }, (_, i) => 70 + i * 34 + r() * 40 - 20);
    return (
      <g>
        {pts.map((h, i) => (
          <rect key={i} x={90 + i * 31} y={290 - h * 0.45} width="16" height={h * 0.45} rx="3" fill={stroke} fillOpacity={0.15 + (i / n) * 0.6} />
        ))}
        <path
          d={`M90 ${290 - pts[0] * 0.45 - 30} L ${90 + (n - 1) * 31 + 16} ${290 - pts[n - 1] * 0.45 - 30}`}
          stroke={stroke}
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </g>
    );
  }

  if (project.slug === "ai-platform-go-to-market") return <GtmAnimation />;

  // Business: rising steps with markers
  return (
    <g fill="none" stroke={stroke} strokeWidth="2">
      <path d="M100 270 H180 V220 H260 V185 H340 V130 H420 V80 H500" strokeLinejoin="round" />
      {[
        [180, 220],
        [260, 185],
        [340, 130],
        [420, 80],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={6 + i * 2} fill="var(--accent)" fillOpacity="0.2" />
      ))}
      <path d="M100 290 H500" strokeOpacity="0.3" />
    </g>
  );
}

// Animated go-to-market story: benchmark 6 platforms → find segments → campaign reach climbs.
function GtmAnimation() {
  const bars = [62, 88, 48, 104, 74, 118];
  const segments = [
    [395, 118, 26],
    [450, 92, 18],
    [462, 148, 22],
  ];
  return (
    <g className="gtm">
      {/* 1. Benchmark: six platforms compared */}
      <text x="70" y="62" className="gtm-label">BENCHMARK · 6 PLATFORMS</text>
      {bars.map((h, i) => (
        <rect
          key={i}
          className="gtm-bar"
          style={{ animationDelay: `${i * 0.18}s` }}
          x={74 + i * 34}
          y={290 - h}
          width="22"
          height={h}
          rx="4"
          fill="var(--accent)"
          fillOpacity={i === 5 ? 0.85 : 0.3}
        />
      ))}
      <path d="M64 290H290" stroke="var(--line)" strokeWidth="1.5" />

      {/* 2. Segment: audience clusters */}
      <text x="360" y="62" className="gtm-label">SEGMENTS</text>
      {segments.map(([x, y, r], i) => (
        <g key={i}>
          <circle className="gtm-pulse" style={{ animationDelay: `${0.4 + i * 0.35}s` }} cx={x} cy={y} r={r} fill="var(--accent)" fillOpacity="0.14" stroke="var(--accent)" strokeOpacity="0.6" />
          {Array.from({ length: 5 }, (_, k) => (
            <circle key={k} cx={x + Math.cos(k * 1.3 + i) * r * 0.55} cy={y + Math.sin(k * 1.3 + i) * r * 0.55} r="2.2" fill="var(--accent)" />
          ))}
        </g>
      ))}

      {/* 3. Campaign reach rising */}
      <path className="gtm-line" d="M320 290 C 370 280, 380 250, 420 240 S 480 205, 540 180" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <circle className="gtm-dot" cx="540" cy="180" r="6" fill="var(--accent)" />
      <text x="492" y="232" className="gtm-value">+40%</text>
      <text x="420" y="314" className="gtm-label">REACH 5,000+</text>
    </g>
  );
}

export default function ProjectCover({
  project,
  index,
  priority,
  className = "",
  fit,
}: {
  project: Project;
  index: number;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
}) {
  if (project.image) {
    const contain = fit === "contain" || (fit === undefined && project.imageFit === "contain");
    return (
      <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
        {contain && (
          <Image src={project.image} alt="" aria-hidden="true" fill sizes="10vw" className="scale-110 object-cover opacity-60 blur-2xl" />
        )}
        <Image
          src={project.image}
          alt={`Preview of ${project.title}`}
          fill
          sizes={contain ? "(min-width: 768px) 70vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          priority={priority}
          className={contain ? "object-contain" : "object-cover transition-transform duration-500 group-hover:scale-[1.03]"}
        />
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <svg viewBox="0 0 600 340" className="h-full w-full" role="img" aria-label={`Illustration for ${project.title}`} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`grid-${project.slug}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="var(--line)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="340" fill={`url(#grid-${project.slug})`} />
        <Pattern project={project} />
      </svg>
      <span className="absolute left-4 top-3 font-mono text-xs uppercase tracking-widest text-muted">
        {String(index + 1).padStart(2, "0")} / {project.category}
      </span>
    </div>
  );
}
