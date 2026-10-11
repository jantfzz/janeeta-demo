import type { Metadata } from "next";
import {
  bookGenres,
  books,
  challenges,
  community,
  hobbiesIntro,
  movies,
  racketSports,
  races,
  runningStyles,
  songs,
  strava,
} from "@/data/hobbies";
import PageHeader from "@/components/PageHeader";
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
  const maxH = Math.max(...strava.weeklyHours.map((w) => w.hours));
  const totalMin = Math.round(strava.weeklyHours.reduce((s, w) => s + w.hours, 0) * 60);
  const racketIcons = ["tennis", "padel", "pickle"] as const;

  return (
    <>
      <PageHeader number="07" eyebrow="Hobbies & Activities" title={hobbiesIntro.title} intro={hobbiesIntro.text} />
      <Container className="space-y-24">
        <ul className="-mt-6 flex flex-wrap gap-2" aria-label="What I do for fun">
          {["Road running", "Trail running", "Mountains", "Tennis", "Padel", "Pickleball", "Reading"].map((h) => (
            <li key={h}>
              <Tag>{h}</Tag>
            </li>
          ))}
        </ul>

        {/* RUNNING */}
        <section aria-labelledby="running">
          <SectionHeader id="running" number="A" title="Running" intro="Road running and trail running are where I recharge: early city loops in Bandung, and hills and forest paths whenever I can get out of town." />

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.2fr]">
            {runningStyles.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className="rounded-2xl border border-line bg-surface p-6">
                <Icon name={i === 0 ? "road" : "trail"} />
                <h3 className="mt-4 font-display text-lg tracking-tight">{r.title}</h3>
                <p className="mt-1 text-sm text-muted">{r.text}</p>
              </Reveal>
            ))}
            <Reveal delay={160} className="flex flex-col rounded-2xl bg-ink p-6 text-bg">
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">On Strava · {strava.location}</p>
              <p className="mt-3 font-display text-5xl">{strava.activitiesLast4Weeks}</p>
              <p className="text-sm opacity-80">activities in the last 4 weeks</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-display text-2xl">{strava.activitiesPerWeek}</p>
                  <p className="text-xs opacity-70">activities / week</p>
                </div>
                <div>
                  <p className="font-display text-2xl">{strava.avgDistancePerWeekKm} km</p>
                  <p className="text-xs opacity-70">avg distance / week</p>
                </div>
              </div>
              <a
                href={strava.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-bg px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-accent hover:text-accent-ink"
              >
                Follow me on Strava <Arrow />
              </a>
            </Reveal>
          </div>

          <div className="mt-14 space-y-14">
            <Sub n="01" title="Training log">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="text-sm text-muted">
                    Moving time per week, last 4 weeks · {Math.floor(totalMin / 60)}h {totalMin % 60}m in total
                  </p>
                  <dl className="mt-4 space-y-3">
                    {strava.weeklyHours.map((w) => (
                      <div key={w.week} className="grid grid-cols-[96px_1fr_64px] items-center gap-3 text-sm">
                        <dt className="text-muted">{w.week}</dt>
                        <dd className="h-3 overflow-hidden rounded-full bg-surface-2" aria-hidden="true">
                          <span className="block h-full rounded-full bg-accent" style={{ width: `${(w.hours / maxH) * 100}%` }} />
                        </dd>
                        <dd className="text-right font-mono text-xs">{w.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-muted">Snapshot from Strava, {strava.asOf}. “This week” is still in progress.</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Local segment achievements</p>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {strava.segments.map((s) => (
                      <li key={s.name} className="flex items-baseline justify-between gap-3 py-2.5 text-sm">
                        <span>
                          {s.name}
                          <span className="block text-xs text-muted">{s.result}</span>
                        </span>
                        <span className="font-mono text-xs">{s.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Sub>

            <Sub n="02" title="Race">
              {races.length > 0 ? (
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {races.map((r) => (
                    <li key={r.name} className="rounded-xl border border-line bg-surface p-5">
                      <p className="font-mono text-xs text-muted">{r.date}</p>
                      <p className="mt-1 font-semibold">{r.name}</p>
                      <p className="mt-1 text-sm text-muted">
                        {r.distance}
                        {r.time && ` · ${r.time}`}
                      </p>
                      {r.note && <p className="mt-2 text-sm">{r.note}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <Empty>My race log is coming soon: road and trail races with distance and finish time.</Empty>
              )}
              <p className="mt-8 text-sm text-muted">Milestones: Strava challenges completed</p>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {challenges.map((c) => (
                  <li key={c.name} className="flex flex-col rounded-xl border border-line bg-surface p-4">
                    <span className="font-display text-xl text-accent">{c.distance}</span>
                    <span className="mt-2 text-sm font-semibold leading-snug">{c.name}</span>
                    <span className="mt-auto pt-2 text-xs text-muted">{c.date}</span>
                  </li>
                ))}
              </ol>
            </Sub>

            <Sub n="03" title="Community">
              <ul className="grid gap-4 md:grid-cols-2">
                {community.map((c) => (
                  <li key={c.title} className="rounded-2xl border border-line bg-surface p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent">{c.role}</p>
                    <h4 className="mt-2 font-display text-lg tracking-tight">{c.title}</h4>
                    <p className="mt-1 text-sm text-muted">{c.text}</p>
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
