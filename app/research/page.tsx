import type { Metadata } from "next";
import Link from "next/link";
import { research } from "@/data/research";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Arrow, Container, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Research",
  description: "Theses and award-winning research papers in agricultural microbiology, bioremediation and bioenergy.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        number="02"
        eyebrow="Research"
        title="Microbes, waste and the systems around them."
        intro="Two theses and a run of competition papers, most of them asking how biological processes can turn waste into something useful."
      />
      <Container>
        <ol className="divide-y divide-line border-y border-line">
          {research.map((r, i) => (
            <Reveal as="li" key={r.title} className="grid gap-3 py-8 md:grid-cols-[64px_140px_1fr] md:gap-8">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-muted">{r.year}</span>
              <div>
                <Tag>{r.type}</Tag>
                <h2 className="mt-3 font-display text-2xl leading-snug tracking-tight">{r.title}</h2>
                <p className="mt-1 text-sm font-semibold">{r.venue}</p>
                <p className="mt-3 max-w-2xl text-muted">{r.summary}</p>
                {r.project && (
                  <Link href={`/work/${r.project}`} className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                    Read the case study <Arrow />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </>
  );
}
