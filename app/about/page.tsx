import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import { capabilities } from "@/data/capabilities";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SchoolLogo from "@/components/SchoolLogo";
import { Arrow, Button, Container, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: Bio-Agricultural Engineering graduate from ITB working in data, business and agri-tech.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader number="04" eyebrow="About" title={`${site.identity.practice} ${site.identity.foundation}`} />
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-2">
              <Image src="/portrait.jpg" alt={`${site.name} at ITB`} fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover object-[50%_72%]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 text-base text-muted">
              <p className="text-ink">
                Hi, I&rsquo;m {site.name}. Friends call me {site.shortName}. I graduated in Bio-Agricultural Engineering from
                Institut Teknologi Bandung and I&rsquo;m based in {site.location}.
              </p>
              {site.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                Outside work and the lab, I&rsquo;ve spent my campus years in KPA-ITB, the university angklung ensemble, first in
                human resources and then running its fundraising and budget. Off the clock, I&rsquo;m usually outdoors: running roads and trails, or on a court.
              </p>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              {site.aboutFacts.map((f) => (
                <div key={f.label} className="border-t border-line pt-3">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">{f.label}</dt>
                  <dd className="mt-1 font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-12 font-display text-2xl tracking-tight">Toolkit</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {Array.from(new Set(capabilities.flatMap((c) => c.skills))).map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/resume">
                View resume <Arrow />
              </Button>
              <Button href={`mailto:${site.links.email}`} variant="ghost">
                Email me
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="rounded-3xl border border-line bg-surface p-7">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-muted">Education</h2>
            <ul className="mt-5 space-y-6">
              {site.education.map((e) => (
                <li key={e.school} className="flex gap-4">
                  <SchoolLogo src={e.logo} name={e.school} size={52} />
                  <div>
                    <p className="font-semibold">{e.school}</p>
                    <p className="font-display text-accent">{e.degree}</p>
                    <p className="text-sm text-muted">
                      {e.detail} · {e.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl bg-accent p-7 text-accent-ink">
            <h2 className="flex items-center gap-2 font-display text-xl">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <circle cx="9" cy="9" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11.8 6.2L10 10 6.2 11.8 8 8z" fill="currentColor" />
              </svg>
              Core focus & future vision
            </h2>
            <p className="mt-4 leading-relaxed opacity-90">{site.vision}</p>
          </Reveal>
        </div>

        <section aria-labelledby="journey" className="mt-20">
          <h2 id="journey" className="font-display text-2xl tracking-tight">
            Journey so far
          </h2>
          <ol className="relative mt-8 space-y-8 border-l border-line pl-8">
            {site.journey.map((j, i) => (
              <Reveal as="li" key={j.year + j.title} delay={i * 60} className="relative">
                <span aria-hidden="true" className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                <p className="font-mono text-xs text-accent">{j.year}</p>
                <p className="mt-1 font-semibold">{j.title}</p>
                <p className="mt-1 max-w-2xl text-sm text-muted">{j.text}</p>
              </Reveal>
            ))}
          </ol>
        </section>
      </Container>
    </>
  );
}
