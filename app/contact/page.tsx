import type { Metadata } from "next";
import { site } from "@/data/site";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Arrow, Container, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}: email, LinkedIn and Instagram.`,
};

export default function ContactPage() {
  const channels = [
    { label: "Email", value: site.links.email, href: `mailto:${site.links.email}`, note: "Best for roles and collaborations" },
    site.links.linkedin && { label: "LinkedIn", value: "in/janeeta-faiza", href: site.links.linkedin, note: "Experience, endorsements, certificates" },
    site.links.instagram && { label: "Instagram", value: site.links.instagramHandle, href: site.links.instagram, note: "Day-to-day and creative work" },
    { label: "Location", value: site.location, note: "Open to on-site, hybrid and remote" },
  ].filter(Boolean) as { label: string; value: string; href?: string; note: string }[];

  return (
    <>
      <PageHeader
        number="07"
        eyebrow="Contact"
        title="Let’s work together."
        intro="Hiring for a data, business or agri-tech role, or have a research idea? Send me a message and I’ll reply by email."
      />
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <ul className="divide-y divide-line border-y border-line">
            {channels.map((c, i) => (
              <li key={c.label} className="flex items-start gap-4 py-5">
                <span className="mt-0.5 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="mt-1 inline-flex items-center gap-1.5 break-all font-display text-lg hover:text-accent"
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {c.value} {c.href.startsWith("http") && <Arrow />}
                    </a>
                  ) : (
                    <p className="mt-1 font-display text-lg">{c.value}</p>
                  )}
                  <p className="text-xs text-muted">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted">Open to</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {site.openTo.map((r) => (
              <li key={r}>
                <Tag>{r}</Tag>
              </li>
            ))}
          </ul>
          <a href={site.resumePdf} download className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:underline">
            Download my CV (PDF) ↓
          </a>
        </div>
        <ContactForm />
      </Container>
    </>
  );
}
