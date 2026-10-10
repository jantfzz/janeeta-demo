import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { certifications, recognition } from "@/data/recognition";
import { site } from "@/data/site";
import PageHeader from "@/components/PageHeader";
import ExperienceFilter from "@/components/ExperienceFilter";
import { Arrow, Container, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional, laboratory, leadership and volunteering experience of Janeeta Faiza.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        number="03"
        eyebrow="Experience"
        title="The full record."
        intro={`${experience.length} roles across industry, three ITB laboratories, campus organizations and volunteering. Filter by type below.`}
      />
      <Container className="space-y-20">
        <section aria-label="Experience record">
          <ExperienceFilter items={experience} />
        </section>

        <section aria-labelledby="edu">
          <SectionHeader id="edu" number="B" title="Education" />
          <ul className="grid gap-4 md:grid-cols-2">
            {site.education.map((e) => (
              <li key={e.school} className="rounded-2xl border border-line p-6">
                <p className="font-mono text-xs text-muted">{e.period}</p>
                <h3 className="mt-2 font-display text-lg tracking-tight">{e.school}</h3>
                <p className="mt-1 text-sm font-semibold">{e.degree}</p>
                <p className="mt-1 text-sm text-muted">{e.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="awards" className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeader id="awards" number="C" title="Awards" />
            <ul className="space-y-5">
              {recognition.map((r) => (
                <li key={r.title}>
                  <p className="font-mono text-xs text-muted">
                    {r.date} · {r.issuer}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{r.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader id="certs" number="D" title="Certifications" />
            <ul className="space-y-2.5 text-sm">
              {certifications.map((c) => (
                <li key={c.title} className="flex justify-between gap-4 border-b border-line pb-2.5">
                  <span>
                    {c.title}
                    <span className="block text-xs text-muted">{c.issuer}</span>
                  </span>
                  <span className="shrink-0 text-xs text-muted">{c.date}</span>
                </li>
              ))}
            </ul>
            <Link href="/skills#certifications" className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
              See them as cards <Arrow />
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
