import Link from "next/link";
import { site } from "@/data/site";
import { navItems } from "@/data/nav";
import { Container } from "./ui";
import BackToTop from "./BackToTop";
import { Icon, type IconName } from "./Icons";

export default function Footer() {
  const social = [
    site.links.linkedin && { href: site.links.linkedin, label: "LinkedIn", icon: "linkedin" },
    site.links.instagram && { href: site.links.instagram, label: "Instagram", icon: "instagram" },
    site.links.youtube && { href: site.links.youtube, label: "YouTube", icon: "youtube" },
    site.links.strava && { href: site.links.strava, label: "Strava", icon: "strava" },
    site.links.medium && { href: site.links.medium, label: "Medium", icon: "medium" },
    site.links.substack && { href: site.links.substack, label: "Substack", icon: "substack" },
    site.links.github && { href: site.links.github, label: "GitHub", icon: "github" },
  ].filter(Boolean) as { href: string; label: string; icon: IconName }[];
  const row = "inline-flex items-center gap-2";

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
                <Link href={n.href} className={`${row} text-muted hover:text-ink`}>
                  <Icon name={n.icon} size={14} />
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
              <a href={`mailto:${site.links.email}`} className={`${row} text-ink hover:text-accent`}>
                <Icon name="mail" size={14} />
                {site.links.email}
              </a>
            </li>
            {site.links.instagram && (
              <li>
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className={`${row} text-ink hover:text-accent`}>
                  <Icon name="instagram" size={14} />
                  Instagram
                </a>
              </li>
            )}
            {site.links.youtube && (
              <li>
                <a href={site.links.youtube} target="_blank" rel="noopener noreferrer" className={`${row} text-ink hover:text-accent`}>
                  <Icon name="youtube" size={14} />
                  YouTube
                </a>
              </li>
            )}
            <li className={`${row} text-muted`}>
              <Icon name="pin" size={14} />
              {site.location}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted">Elsewhere</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {social.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={`${row} text-muted hover:text-ink`}>
                  <Icon name={l.icon} size={14} />
                  {l.label} ↗
                </a>
              </li>
            ))}
            <li>
              <Link href="/resume" className={`${row} text-muted hover:text-ink`}>
                <Icon name="resume" size={14} />
                Resume
              </Link>
            </li>
            <li>
              <a href={site.resumePdf} download className={`${row} text-muted hover:text-ink`}>
                <Icon name="download" size={14} />
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
