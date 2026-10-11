import Link from "next/link";
import { site } from "@/data/site";
import { navItems } from "@/data/nav";
import { Container } from "./ui";
import BackToTop from "./BackToTop";

export default function Footer() {
  const social = [
    site.links.linkedin && { href: site.links.linkedin, label: "LinkedIn" },
    site.links.instagram && { href: site.links.instagram, label: "Instagram" },
    site.links.youtube && { href: site.links.youtube, label: "YouTube" },
    site.links.strava && { href: site.links.strava, label: "Strava" },
    site.links.github && { href: site.links.github, label: "GitHub" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <footer className="mt-24 border-t border-line">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${site.name}, home`}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent font-display text-sm font-semibold text-accent-ink">
              {site.initials}
            </span>
            <span className="font-display text-lg tracking-tight">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted">{site.role}. Open to data, business and agri-tech roles.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted">Pages</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted">Contact</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <a href={`mailto:${site.links.email}`} className="text-ink hover:text-accent">
                {site.links.email}
              </a>
            </li>
            {site.links.instagram && (
              <li>
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent">
                  Instagram {site.links.instagramHandle}
                </a>
              </li>
            )}
            {site.links.youtube && (
              <li>
                <a href={site.links.youtube} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent">
                  YouTube {site.links.youtubeHandle}
                </a>
              </li>
            )}
            <li className="text-muted">{site.location}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted">Elsewhere</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {social.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
                  {l.label} ↗
                </a>
              </li>
            ))}
            <li>
              <Link href="/resume" className="text-muted hover:text-ink">
                Resume
              </Link>
            </li>
            <li>
              <a href={site.resumePdf} download className="text-muted hover:text-ink">
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex items-center justify-between py-5 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <BackToTop />
        </Container>
      </div>
    </footer>
  );
}
