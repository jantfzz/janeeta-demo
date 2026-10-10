import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "./ui";

export default function Footer() {
  const links = [
    site.links.linkedin && { href: site.links.linkedin, label: "LinkedIn", external: true },
    site.links.github && { href: site.links.github, label: "GitHub", external: true },
    { href: `mailto:${site.links.email}`, label: "Email" },
    { href: "/resume", label: "Résumé" },
  ].filter(Boolean) as { href: string; label: string; external?: boolean }[];

  return (
    <footer className="mt-24 border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent font-display text-sm font-semibold text-accent-ink">
            {site.initials}
          </span>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. {site.location}.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              {l.href.startsWith("/") ? (
                <Link href={l.href} className="text-muted hover:text-ink">
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="text-muted hover:text-ink"
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
