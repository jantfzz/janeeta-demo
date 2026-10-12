import type { Metadata } from "next";
import Image from "next/image";
import {
  bookGenres,
  books,
  community,
  highlights,
  hobbiesIntro,
  movies,
  personalBests,
  photography,
  racketSports,
  races,
  runningStyles,
  songs,
  strava,
  writing,
} from "@/data/hobbies";
import PageHeader from "@/components/PageHeader";
import StravaWidget from "@/components/StravaWidget";
import { Icon as UiIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { Arrow, Button, Container, SectionHeader, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hobbies & Activities",
  description: "Running, racket sports, books and more: what Janeeta Faiza does outside work, mostly outdoors.",
};

function Sub({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-line pt-6">
      <h3 className="flex items-baseline gap-3 font-display text-xl tracking-tight">
        <span className="font-mono text-xs text-accent">{n}</span>
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="rounded-xl border border-dashed border-line bg-surface/60 p-5 text-sm text-muted">{children}</p>;
}

function Icon({ name }: { name: "road" | "trail" | "tennis" | "padel" | "pickle" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" className="text-accent">
      {name === "road" && (
        <g {...common}>
          <path d="M9 25L12 3M19 25L16 3" />
          <path d="M14 6v3M14 13v3M14 20v3" />
        </g>
      )}
      {name === "trail" && (
        <g {...common}>
          <path d="M2 23l7-11 4 6 4-8 9 13z" />
          <path d="M9 12l2 3" />
        </g>
      )}
      {name === "tennis" && (
        <g {...common}>
          <circle cx="14" cy="14" r="10" />
          <path d="M6 7c4 3 4 11 0 14M22 7c-4 3-4 11 0 14" />
        </g>
      )}
      {name === "padel" && (
        <g {...common}>
          <rect x="7" y="2.5" width="14" height="15" rx="7" />
          <path d="M14 17.5V26" />
          <circle cx="11.5" cy="8" r=".8" />
          <circle cx="16.5" cy="8" r=".8" />
          <circle cx="14" cy="11.5" r=".8" />
        </g>
      )}
      {name === "pickle" && (
        <g {...common}>
          <circle cx="14" cy="14" r="10" />
          <circle cx="10" cy="10" r="1.2" />
          <circle cx="17" cy="9" r="1.2" />
          <circle cx="18" cy="16" r="1.2" />
          <circle cx="11" cy="17" r="1.2" />
          <circle cx="14" cy="13" r="1.2" />
        </g>
      )}
    </svg>
  );
}

export default function HobbiesPage() {
  const racketIcons = ["tennis", "padel", "pickle"] as const;

  return (
    <>
      <PageHeader number="07" eyebrow="Hobbies & Activities" title={hobbiesIntro.title} intro={hobbiesIntro.text} />
      <Container className="space-y-24">
        <ul className="-mt-6 flex flex-wrap gap-2" aria-label="What I do for fun">
          {["Road running", "Trail running", "Mountains", "Tennis", "Padel", "Pickleball", "Reading", "Writing", "Photography"].map((h) => (
            <li key={h}>
              <Tag>{h}</Tag>
            </li>
          ))}
        </ul>

        <section aria-label="Highlights" className="-mt-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Highlights</p>
          <ul className="mt-3 flex flex-wrap gap-4">
            {highlights.map((h) => (
              <li key={h.src} className="w-40 sm:w-48">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-surface-2">
                  <Image src={h.src} alt={h.alt} fill sizes="192px" className="object-cover" />
                </div>
                <p className="mt-1.5 text-xs text-muted">{h.caption}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* RUNNING */}
        <section aria-labelledby="running">
          <SectionHeader id="running" number="A" title="Running" intro="Road running and trail running are where I recharge: early city loops in Bandung, and hills and forest paths whenever I can get out of town." />

          <div className="grid gap-4 md:grid-cols-2">
            {runningStyles.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
                <Icon name={i === 0 ? "road" : "trail"} />
                <div>
                  <h3 className="font-display text-lg tracking-tight">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <StravaWidget />
          </Reveal>

          <div className="mt-14 space-y-14">
            <Sub n="01" title="Race">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
                {personalBests.map((p) => (
                  <div key={p.label} className="flex flex-col-reverse bg-bg p-5">
                    <dt className="mt-1 text-xs text-muted">
                      {p.label} · {p.detail}
                    </dt>
                    <dd className="font-display text-2xl text-accent">{p.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {races.map((r) => (
                  <li
                    key={r.name}
                    className={`flex gap-4 rounded-2xl border bg-surface p-3 ${r.category.includes("PB") ? "border-accent" : "border-line"}`}
                  >
                    {r.photo && (
                      <div className="relative h-24 w-[72px] shrink-0 overflow-hidden rounded-lg bg-surface-2">
                        <Image src={r.photo} alt={`Janeeta at ${r.name}`} fill sizes="72px" className="object-cover object-top" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
                        {r.date}
                        <span className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest ${r.category.includes("PB") ? "bg-accent text-accent-ink" : "bg-accent-soft text-ink"}`}>
                          {r.category}
                        </span>
                      </p>
                      <p className="mt-1 font-semibold leading-snug">{r.name}</p>
                      <p className="mt-1 font-mono text-xs">
                        {r.distanceKm.toFixed(2)} km · {r.time}
                        {r.pace && ` · ${r.pace}`}
                        {r.elevation && ` · ${r.elevation}`}
                      </p>
                      {r.note && <p className="mt-1 text-sm text-accent">{r.note}</p>}
                    </div>
                  </li>
                ))}
              </ul>

            </Sub>

            <Sub n="02" title="Community">
              <ul className="flex flex-wrap gap-3">
                {community.map((c) => (
                  <li key={c} className="rounded-full border border-line bg-surface px-5 py-2.5 font-display text-lg tracking-tight">
                    {c}
                  </li>
                ))}
              </ul>
            </Sub>
          </div>
        </section>

        {/* RACKET SPORTS */}
        <section aria-labelledby="racket">
          <SectionHeader id="racket" number="B" title="Racket sports" intro="When I want a game rather than a long run." />
          <ul className="grid gap-4 md:grid-cols-3">
            {racketSports.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 80} className="rounded-2xl border border-line bg-surface p-6">
                <Icon name={racketIcons[i] ?? "tennis"} />
                <h3 className="mt-4 font-display text-lg tracking-tight">{r.title}</h3>
                <p className="mt-1 text-sm text-muted">{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* BOOKS */}
        <section aria-labelledby="books">
          <SectionHeader id="books" number="C" title="Books I’ve read" intro="Mostly fantasy, sci-fi, thrillers and mysteries: stories with big worlds or a good puzzle." />
          <ul className="mb-6 flex flex-wrap gap-2">
            {bookGenres.map((g) => (
              <li key={g} className="rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px]">
                {g}
              </li>
            ))}
          </ul>
          {books.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {books.map((b) => (
                <li key={b.title} className="rounded-xl border border-line bg-surface p-5">
                  <p className="text-[11px] text-accent">{b.genre}</p>
                  <p className="mt-1 font-display text-lg leading-snug">{b.title}</p>
                  <p className="text-sm text-muted">{b.author}</p>
                  {b.note && <p className="mt-2 text-sm">{b.note}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <Empty>My bookshelf is coming soon.</Empty>
          )}
        </section>

        {/* MOVIES & SONGS */}
        <section aria-labelledby="media">
          <SectionHeader id="media" number="D" title="Movies & songs" intro="What’s on my screen and in my headphones." />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Movies", items: movies },
              { title: "Songs", items: songs },
            ].map((m) => (
              <div key={m.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-display text-lg tracking-tight">{m.title}</h3>
                {m.items.length > 0 ? (
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {m.items.map((it) => (
                      <li key={it.title}>
                        {it.title}
                        {it.by && <span className="text-muted"> · {it.by}</span>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-muted">Coming soon. I’m putting my list together.</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* WRITING */}
        <section aria-labelledby="writing">
          <SectionHeader id="writing" number="E" title="I also write things" intro="Essays, notes and the occasional long read." />
          <ul className="grid gap-4 md:grid-cols-2">
            {writing.map((w, i) => (
              <Reveal as="li" key={w.platform} delay={i * 80}>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-5 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-bg">
                    <UiIcon name={w.icon} size={26} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl tracking-tight">{w.platform}</span>
                    <span className="block font-mono text-xs text-muted">{w.handle}</span>
                    <span className="mt-1 block text-sm text-muted">{w.text}</span>
                  </span>
                  <Arrow className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* PHOTOGRAPHY */}
        <section aria-labelledby="photography">
          <SectionHeader id="photography" number="F" title="I also like photography and documenting things" />
          <Reveal>
            <a
              href={photography.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-accent md:flex-row md:items-center"
            >
              <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border-[18px] border-accent/15" />
              <span className="relative grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-ink text-bg">
                <UiIcon name="camera" size={34} />
              </span>
              <span className="relative flex-1">
                <span className="flex items-center gap-2 font-mono text-xs text-muted">
                  <UiIcon name="instagram" size={14} /> Instagram · {photography.handle}
                </span>
                <span className="mt-2 block font-display text-2xl tracking-tight">See the photo diary</span>
                <span className="mt-1 block text-sm text-muted">{photography.text}</span>
              </span>
              <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-bg transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                Open Instagram <Arrow />
              </span>
            </a>
          </Reveal>
        </section>

        <Reveal className="rounded-3xl border border-line bg-surface p-8 text-center">
          <p className="font-display text-2xl tracking-tight">Up for a run, a match or a book swap?</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button href={strava.url} external>
              Strava <Arrow />
            </Button>
            <Button href="/contact" variant="ghost">
              Say hi
            </Button>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
