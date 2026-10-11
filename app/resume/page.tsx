import type { Metadata } from "next";
import { site } from "@/data/site";
import { experience, experienceTypes } from "@/data/experience";
import { certificationCategories, certifications, recognition } from "@/data/recognition";
import { skillGroups } from "@/data/skills";
import PageHeader from "@/components/PageHeader";
import SchoolLogo from "@/components/SchoolLogo";
import { Button, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name}. Download the PDF or read it here.`,
};

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="border-b border-line pb-2 font-mono text-[11px] uppercase tracking-widest text-muted">{children}</h3>;
}

export default function ResumePage() {
  return (
    <>
      <PageHeader number="05" eyebrow="Resume" title="Resume" intro="Read it here, or download the PDF version." />
      <Container>
        <div className="flex flex-wrap gap-3">
          <Button href={site.resumePdf} download>
            Download PDF
          </Button>
          <Button href={site.resumePdf} external variant="ghost">
            Open in new tab
          </Button>
        </div>

        <div className="mt-10 grid gap-12 rounded-2xl border border-line bg-surface p-6 md:grid-cols-[1fr_2fr] md:p-10">
          <aside className="space-y-9 text-sm">
            <div>
              <h2 className="font-display text-2xl">{site.name}</h2>
              <p className="mt-1 text-muted">{site.role}</p>
              <ul className="mt-3 space-y-0.5 text-muted">
                <li>{site.location}</li>
                <li>
                  <a href={`mailto:${site.links.email}`} className="text-accent hover:underline">
                    {site.links.email}
                  </a>
                </li>
                {site.links.linkedin && <li>linkedin.com/in/janeeta-faiza</li>}
                {site.links.instagram && <li>instagram.com/jantfzz</li>}
                {site.links.youtube && <li>youtube.com/@jantfzz</li>}
              </ul>
            </div>

            <div>
              <Heading>Education</Heading>
              {site.education.map((e) => (
                <div key={e.school} className="mt-3 flex gap-3">
                  <SchoolLogo src={e.logo} name={e.school} size={36} />
                  <div>
                    <p className="font-semibold">{e.school}</p>
                    <p className="text-muted">{e.degree}</p>
                    <p className="text-xs text-muted">{e.period}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Heading>Skills</Heading>
              <div className="mt-3 space-y-4">
                {skillGroups.map((g) => (
                  <div key={g.id}>
                    <p className="text-xs font-semibold text-accent">{g.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{g.skills.map((s) => s.name).join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Heading>Certifications</Heading>
              <div className="mt-3 space-y-4">
                {certificationCategories.map((cat) => (
                  <div key={cat}>
                    <p className="text-xs font-semibold text-accent">{cat}</p>
                    <ul className="mt-1 space-y-1.5">
                      {certifications
                        .filter((c) => c.category === cat)
                        .map((c) => (
                          <li key={c.title}>
                            {c.title}
                            <span className="block text-xs text-muted">
                              {c.issuer}
                              {c.date && ` · ${c.date}`}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            {experienceTypes.map((type) => (
              <section key={type}>
                <Heading>{type === "Volunteer" ? "Volunteer" : `${type} experience`}</Heading>
                <ul className="mt-4 space-y-5">
                  {experience
                    .filter((e) => e.type === type)
                    .map((e) => (
                      <li key={e.organization + e.role}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <p className="font-semibold">{e.role}</p>
                          <p className="text-xs text-muted">{e.period}</p>
                        </div>
                        <p className="text-sm text-muted">{e.organization}</p>
                        <p className="mt-1.5 text-sm">{e.highlight}</p>
                      </li>
                    ))}
                </ul>
              </section>
            ))}

            <section>
              <Heading>Awards</Heading>
              <ul className="mt-4 space-y-5 text-sm">
                {recognition.map((r) => (
                  <li key={r.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <p className="font-semibold">{r.title}</p>
                      <p className="text-xs text-muted">{r.date}</p>
                    </div>
                    <p className="text-muted">
                      {r.issuer} · {r.level} · {r.field}
                    </p>
                    <p className="mt-1.5">{r.description}</p>
                    <p className="mt-1 text-muted">{r.impact}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
