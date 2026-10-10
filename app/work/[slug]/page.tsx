import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";
import { Arrow, Button, Container, Tag } from "@/components/ui";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  };
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
      <h2 className="flex items-baseline gap-3 font-display text-xl tracking-tight">
        <span className="font-mono text-sm text-accent">{n}</span>
        {title}
      </h2>
      <div className="max-w-2xl text-muted">{children}</div>
    </Reveal>
  );
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <Container className="pt-10 md:pt-14">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          <span aria-hidden="true">←</span> All work
        </Link>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> {project.category} · {project.organization} · {project.year}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-3xl leading-[1.08] tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-base text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <Button href={project.demo} external>
              Visit / Demo <Arrow />
            </Button>
          )}
          {project.source && (
            <Button href={project.source} external variant="ghost">
              Source <Arrow />
            </Button>
          )}
        </div>

        <ProjectCover project={project} index={index} priority className="mt-10 aspect-[16/8] rounded-2xl border border-line" />

        <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse bg-bg p-6">
              <dt className="mt-1 text-sm text-muted">{m.label}</dt>
              <dd className="font-display text-3xl text-accent">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12">
          <Block n="01" title="Context">
            <p>{project.context}</p>
          </Block>
          <Block n="02" title="Challenge">
            <p>{project.challenge}</p>
          </Block>
          <Block n="03" title="My role">
            <p>{project.role}</p>
          </Block>
          <Block n="04" title="Approach">
            <ol className="space-y-3">
              {project.approach.map((a, i) => (
                <li key={a} className="flex gap-4">
                  <span className="mt-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </Block>
          <Block n="05" title="Results">
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3 text-ink">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block n="06" title="Tools used">
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-6 flex items-center justify-between gap-6 rounded-2xl border border-line p-6 transition-colors hover:border-accent md:p-8"
        >
          <span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Next project</span>
            <span className="mt-2 block font-display text-xl tracking-tight md:text-2xl">{next.title}</span>
          </span>
          <Arrow className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Container>
    </article>
  );
}
