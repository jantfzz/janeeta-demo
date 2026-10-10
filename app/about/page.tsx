import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import { capabilities } from "@/data/capabilities";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2">
              <Image src="/portrait.jpg" alt={`Portrait of ${site.name}`} fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover object-top" />
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
                human resources and then running its fundraising and budget.
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
                View résumé <Arrow />
              </Button>
              <Button href={`mailto:${site.links.email}`} variant="ghost">
                Email me
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
