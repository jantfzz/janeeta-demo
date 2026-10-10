import type { Metadata } from "next";
import { site } from "@/data/site";
import { experience } from "@/data/experience";
import { certifications, recognition } from "@/data/recognition";
import { capabilities } from "@/data/capabilities";
import PageHeader from "@/components/PageHeader";
import { Button, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name}. Download the PDF or read it here.`,
};

export default function ResumePage() {
  return (
    <>
      <PageHeader number="05" eyebrow="Résumé" title="Résumé" intro="Read it here, or download the PDF version." />
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
          <aside className="space-y-8 text-sm">
            <div>
              <h2 className="font-display text-2xl">{site.name}</h2>
              <p className="mt-1 text-muted">{site.role}</p>
              <p className="mt-3 text-muted">{site.location}</p>
              {site.links.instagram && <p className="text-muted">Instagram {site.links.instagramHandle}</p>}
              <p>
                <a href={`mailto:${site.links.email}`} className="text-accent hover:underline">{site.links.email}</a>
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">Education</h3>
              {site.education.map((e) => (
                <div key={e.school} className="mt-2">
                  <p className="font-semibold">{e.school}</p>
                  <p className="text-muted">{e.degree}</p>
                  <p className="text-muted">{e.period}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">Skills</h3>
              <ul className="mt-2 space-y-1">
                {capabilities.flatMap((c) => c.skills).slice(0, 14).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">Certifications</h3>
              <ul className="mt-2 space-y-2">
                {certifications.map((c) => (
                  <li key={c.title}>
                    {c.title}
                    <span className="block text-xs text-muted">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="space-y-10">
            <section>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">Experience</h3>
              <ul className="mt-4 space-y-6">
                {experience.map((e) => (
                  <li key={e.organization + e.role}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <p className="font-semibold">{e.role}</p>
                      <p className="text-sm text-muted">{e.period}</p>
                    </div>
                    <p className="text-sm text-muted">{e.organization} · {e.type}</p>
                    <p className="mt-2 text-sm">{e.highlight}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted">Awards</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {recognition.map((r) => (
                  <li key={r.title}>
                    <span className="font-semibold">{r.title}</span>, {r.issuer} ({r.date})
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
