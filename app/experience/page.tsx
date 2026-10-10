import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { certifications, recognition } from "@/data/recognition";
import PageHeader from "@/components/PageHeader";
import ExperienceList from "@/components/ExperienceList";
import { Container, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional, laboratory and leadership experience of Janeeta Faiza.",
};

export default function ExperiencePage() {
  const pro = experience.filter((e) => e.type === "Professional");
  const lead = experience.filter((e) => e.type === "Leadership");
  return (
    <>
      <PageHeader
        number="03"
        eyebrow="Experience"
        title="The full record."
        intro="Industry roles, laboratory assistantships and the campus organizations where I managed budgets, teams and audiences."
      />
      <Container className="space-y-20">
        <section aria-labelledby="pro">
          <SectionHeader id="pro" number="A" title="Professional & laboratory" />
          <ExperienceList items={pro} showDetails />
        </section>
        <section aria-labelledby="lead">
          <SectionHeader id="lead" number="B" title="Organizations & leadership" />
          <ExperienceList items={lead} showDetails />
        </section>
        <section aria-labelledby="awards" className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeader id="awards" number="C" title="Awards" />
            <ul className="space-y-6">
              {recognition.map((r) => (
                <li key={r.title}>
                  <p className="font-mono text-xs text-muted">{r.date} · {r.issuer}</p>
                  <p className="mt-1 font-semibold">{r.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader id="certs" number="D" title="Certifications" />
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="border-b border-line pb-3">{c}</li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </>
  );
}
