import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { recognition } from "@/data/recognition";
import { capabilities } from "@/data/capabilities";
import { Arrow, Button, Container, SectionHeader, Tag } from "@/components/ui";
import ProjectCard from "@/components/ProjectCard";
import ProjectCover from "@/components/ProjectCover";
import ExperienceList from "@/components/ExperienceList";
import Showcase from "@/components/ShowcaseLazy";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ToolsMarquee from "@/components/ToolsMarquee";

export default function Home() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const featuredIndex = projects.indexOf(featured);
  const selected = projects.slice(0, 4);
  const titleOf = (slug: string) => projects.find((p) => p.slug === slug)?.title ?? slug;

  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <Container className="pb-14 pt-12 md:pb-20 md:pt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">●</span> {site.role}
          </p>
          <h1 id="hero-title" className="mt-5 max-w-4xl font-display text-[2rem] leading-[1.1] tracking-tight sm:text-[2.6rem] md:text-[3.25rem]">
            I analyze <em className="text-accent">lab data</em> and field systems into statistical insights and business decisions.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-[1.05rem]">{site.intro}</p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <Button href="/work">
              Selected work <Arrow />
            </Button>
            <Button href="/resume" variant="ghost">
              Resume
            </Button>
            <Button href="/skills" variant="ghost">
              Skills
            </Button>
            <Button href="/skills#certifications" variant="ghost">
              Certifications
            </Button>
            <Button href="/experience" variant="ghost">
              Experience
            </Button>
            <Button href="/hobbies" variant="ghost">
              Hobbies & Activities
            </Button>
            <Button href="/contact" variant="ghost">
              Contact me
            </Button>
          </div>

          <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            {site.links.linkedin && (
              <li>
                <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 hover:text-ink hover:underline">
                  LinkedIn
                </a>
              </li>
            )}
            {site.links.instagram && (
              <li>
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 hover:text-ink hover:underline">
                  Instagram
                </a>
              </li>
            )}
            {site.links.github && (
              <li>
                <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 hover:text-ink hover:underline">
                  GitHub
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${site.links.email}`} className="text-muted underline-offset-4 hover:text-ink hover:underline">
                Email
              </a>
            </li>
            <li>
              <a href={site.resumePdf} download className="text-muted underline-offset-4 hover:text-ink hover:underline">
                Download CV (PDF)
              </a>
            </li>
          </ul>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {site.quickFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 80} className="bg-bg p-4">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">{f.label}</dt>
                <dd className="mt-1.5 text-sm font-semibold leading-snug">{f.value}</dd>
              </Reveal>
            ))}
          </dl>

          <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-l-2 border-accent pl-4">
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="font-display text-3xl tracking-tight">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 01 SELECTED WORK */}
      <section aria-labelledby="work-title" className="py-16 md:py-20">
        <Container>
          <SectionHeader
            id="work-title"
            number="01"
            title="Selected work"
            intro="Projects across research, data and business. Each case preview covers the context, my role and the decisions behind the result."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {selected.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <ProjectCard project={p} index={projects.indexOf(p)} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/work" variant="ghost">
              View all {projects.length} projects <Arrow />
            </Button>
          </div>
        </Container>
      </section>

      {/* 02 INTERACTIVE SHOWCASE */}
      <section aria-labelledby="showcase-title" className="py-16 md:py-20">
        <Container>
          <SectionHeader
            id="showcase-title"
            number="02"
            title="Explore the data"
            intro="Don't take my word for it. Filter my results by area, sort my lab record, or step through how a field trial is analysed."
          />
          <Reveal>
            <Showcase />
          </Reveal>
        </Container>
      </section>

      {/* 03 EXPERIENCE */}
      <section aria-labelledby="exp-title" className="py-16 md:py-20">
        <Container>
          <SectionHeader
            id="exp-title"
            number="03"
            title="Experience & leadership"
            intro="Three lab assistantships, industry roles in R&D, data and business development, and campus leadership where budgets and teams were mine to manage."
          />
          <ExperienceList items={experience.slice(0, 6)} />
          <div className="mt-10">
            <Button href="/experience" variant="ghost">
              View the full record <Arrow />
            </Button>
          </div>
        </Container>
      </section>

      {/* 04 RECOGNITION */}
      <section aria-labelledby="rec-title" className="py-16 md:py-20">
        <Container>
          <SectionHeader id="rec-title" number="04" title="Recognition" intro="Scientific paper competitions at provincial and national level." />
          <ol className="grid gap-6 md:grid-cols-3">
            {recognition.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 90} className="flex flex-col rounded-2xl border border-line p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <Tag>
                    {r.date} · {r.level}
                  </Tag>
                </div>
                <h3 className="mt-5 font-display text-lg leading-snug tracking-tight">{r.title}</h3>
                <p className="mt-2 text-sm font-semibold">{r.issuer}</p>
                <p className="mt-3 text-sm text-muted">{r.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* 05 CAPABILITIES */}
      <section aria-labelledby="cap-title" className="py-16 md:py-20">
        <Container>
          <SectionHeader id="cap-title" number="05" title="What I work with" intro="Skills grouped by what they do, with the projects where I've used them." />
          <div className="mb-8">
            <ToolsMarquee />
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} className="bg-bg p-6 md:p-8">
                <h3 className="flex items-baseline gap-3 font-display text-xl tracking-tight">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {c.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted">
                  <span className="font-mono text-[11px] uppercase tracking-widest">Demonstrated in </span>
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
        </Container>
      </section>

      {/* 06 ABOUT */}
      <section aria-labelledby="about-title" className="py-16 md:py-20">
        <Container>
          <div className="grid items-start gap-10 border-t border-line pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2">
                <Image src="/portrait.jpg" alt={`Portrait of ${site.name}`} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover object-top" />
              </div>
              <span aria-hidden="true" className="absolute -bottom-4 -right-2 font-display text-6xl text-accent md:-right-6">
                06
              </span>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">About</p>
              <h2 id="about-title" className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                {site.identity.practice}
                <br />
                <span className="text-accent">{site.identity.foundation}</span>
              </h2>
              <div className="mt-5 space-y-3 text-muted">
                {site.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {site.aboutFacts.map((f) => (
                  <div key={f.label} className="border-t border-line pt-3">
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">{f.label}</dt>
                    <dd className="mt-1 font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <Button href="/about" variant="ghost">
                  Read the full profile <Arrow />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 07 FEATURED */}
      <section aria-labelledby="featured-title" className="py-16 md:py-20">
        <Container>
          <Reveal className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="grid md:grid-cols-2">
              <ProjectCover project={featured} index={featuredIndex} className="aspect-[16/10] md:aspect-auto md:min-h-full" />
              <div className="p-6 sm:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">07 · Featured project</p>
                <h2 id="featured-title" className="mt-4 font-display text-2xl leading-tight tracking-tight md:text-3xl">
                  Designing a farm that pays for itself.
                </h2>
                <p className="mt-4 text-muted">
                  For my design thesis I planned an integrated urban farm for Pasanggrahan, Bandung, where compost, organic
                  fertilizer, lettuce beds and post-harvest handling feed into each other. I chose the design with AHP, proved it
                  physically with mass and energy balances, and tested it financially over ten years. The integrated option
                  reached an R/C ratio of 1.68, ahead of the monoculture alternative.
                </p>
                <dl className="mt-6 grid grid-cols-3 gap-3">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse">
                      <dt className="text-xs text-muted">{m.label}</dt>
                      <dd className="font-display text-2xl">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8">
                  <Button href={`/work/${featured.slug}`}>
                    Read case preview <Arrow />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section aria-labelledby="cta-title" className="pt-16 md:pt-24">
        <Container>
          <Reveal className="border-t border-line pt-12 text-center">
            <h2 id="cta-title" className="font-display text-4xl tracking-tight md:text-5xl">
              Let&rsquo;s work together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Open to roles and conversations in data, business and agri-tech:
            </p>
            <ul className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2">
              {site.openTo.map((r) => (
                <li key={r}>
                  <Tag>{r}</Tag>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.links.email}`}
              className="mt-8 inline-block font-display text-xl text-accent underline decoration-1 underline-offset-8 transition-colors hover:text-ink sm:text-3xl"
            >
              {site.links.email}
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Button href="/contact">
                Send a message <Arrow />
              </Button>
              {site.links.linkedin && (
                <Button href={site.links.linkedin} external variant="ghost">
                  LinkedIn
                </Button>
              )}
              {site.links.instagram && (
                <Button href={site.links.instagram} external variant="ghost">
                  Instagram {site.links.instagramHandle}
                </Button>
              )}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
