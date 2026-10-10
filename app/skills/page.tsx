import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { certifications } from "@/data/recognition";
import { projects } from "@/data/projects";
import { tools, topSkills } from "@/data/skills";
import PageHeader from "@/components/PageHeader";
import SkillsExplorer from "@/components/SkillsExplorer";
import Reveal from "@/components/Reveal";
import { Arrow, Container, SectionHeader, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills, tools and certifications of Janeeta Faiza across data, lab research, marketing, finance and leadership.",
};

export default function SkillsPage() {
  const titleOf = (slug: string) => projects.find((p) => p.slug === slug)?.title ?? slug;
  return (
    <>
      <PageHeader
        number="06"
        eyebrow="Skills"
        title="What I can do, and where I did it."
        intro="Every skill below is tied to a role, course or project, so you can see where it was used. Filter by category or search."
      />
      <Container className="space-y-20">
        <section aria-labelledby="top">
          <h2 id="top" className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Top skills
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {topSkills.map((s) => (
              <li key={s} className="rounded-full bg-accent px-3.5 py-1.5 text-[13px] font-medium text-accent-ink">
                {s}
              </li>
            ))}
          </ul>
          <h2 className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted">Tools</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tools.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="explore">
          <SectionHeader id="explore" number="A" title="Skill explorer" />
          <SkillsExplorer />
        </section>

        <section aria-labelledby="proof">
          <SectionHeader id="proof" number="B" title="Skills in practice" intro="Grouped by what they do, with the case studies that show them." />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} className="bg-bg p-6">
                <h3 className="flex items-baseline gap-3 font-display text-lg tracking-tight">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {c.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">
                  Demonstrated in{" "}
                  {c.projects.map((slug, j) => (
                    <span key={slug}>
                      {j > 0 && " · "}
                      <Link href={`/work/${slug}`} className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
                        {titleOf(slug)}
                      </Link>
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="certifications" id="certifications" className="scroll-mt-20">
          <SectionHeader id="certifications-title" number="C" title="Licenses & certifications" intro={`${certifications.length} certificates across data, AI, programming and English.`} />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 3) * 60} className="flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[11px] text-muted">{c.category}</span>
                </div>
                <h3 className="mt-3 font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted">
                  <span>{c.date ? `Issued ${c.date}` : ""}</span>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                      Show credential <Arrow />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>
      </Container>
    </>
  );
}
