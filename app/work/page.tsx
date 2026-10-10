import type { Metadata } from "next";
import { projects } from "@/data/projects";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in agri-tech research, data analytics and business development by Janeeta Faiza.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        number="01"
        eyebrow="Work"
        title="Selected work"
        intro="Research, data and business projects. Each case study explains the context, my role, the decisions I made and what came of them."
      />
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
