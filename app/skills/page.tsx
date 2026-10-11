import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import { certifications } from "@/data/recognition";
import { projects } from "@/data/projects";
import { skillGroups, toolGroups, topSkills } from "@/data/skills";
import PageHeader from "@/components/PageHeader";
import SkillsExplorer from "@/components/SkillsExplorer";
import ToolsMarquee from "@/components/ToolsMarquee";
import CertificationGrid from "@/components/CertificationGrid";
import Reveal from "@/components/Reveal";
import { Container, SectionHeader, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Skills",
  description: "Tools, hard, technical, lab, business and soft skills of Janeeta Faiza, plus certifications.",
};

export default function SkillsPage() {
  const titleOf = (slug: string) => projects.find((p) => p.slug === slug)?.title ?? slug;
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);
  return (
    <>
      <PageHeader
        number="06"
        eyebrow="Skills"
        title="What I can do, and where I did it."
        intro={`${total} skills in six categories: tools, hard skills, technical skills, lab skills, business & strategy, and soft skills. Most are tied to the role or project where I used them.`}
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
          <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-6">
            {skillGroups.map((g) => (
              <div key={g.id} className="flex flex-col-reverse bg-bg p-3">
                <dt className="text-[11px] text-muted">{g.title}</dt>
                <dd className="font-display text-2xl">{g.skills.length}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="tools">
          <SectionHeader id="tools" number="A" title="Tools & software" intro="The software stack I work with, from analysis to design." />
          <ToolsMarquee />
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {toolGroups.map((g) => (
              <div key={g.title} className="bg-bg p-5">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-accent">{g.title}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {g.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="explore">
          <SectionHeader id="explore" number="B" title="Skill explorer" intro="Filter by category or search a skill, tool or place." />
          <SkillsExplorer />
        </section>

        <section aria-labelledby="proof">
          <SectionHeader id="proof" number="C" title="Skills in practice" intro="Grouped by what they do, with the case previews that show them." />
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

        <section aria-labelledby="certifications-title" id="certifications" className="scroll-mt-20">
          <SectionHeader
            id="certifications-title"
            number="D"
            title="Licenses & certifications"
            intro={`${certifications.length} certificates in programming, data & AI, soft skills and language.`}
          />
          <CertificationGrid />
        </section>
      </Container>
    </>
  );
}
