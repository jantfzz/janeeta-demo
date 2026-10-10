import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";
import { Arrow } from "./ui";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
      <Link href={`/work/${project.slug}`} tabIndex={-1} aria-hidden="true">
        <ProjectCover project={project} index={index} className="aspect-[16/9]" />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {project.organization} · {project.year}
        </p>
        <h3 className="mt-2 font-display text-2xl tracking-tight">
          <Link href={`/work/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-muted">{project.summary}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-display text-xl text-ink">{m.value}</dd>
              <dd className="text-xs leading-snug text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm text-bg transition-colors hover:bg-accent hover:text-accent-ink"
          >
            Case study <Arrow />
          </Link>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm hover:border-ink">
              Visit / Demo <Arrow />
            </a>
          )}
          {project.source && (
            <a href={project.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm hover:border-ink">
              Source <Arrow />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
