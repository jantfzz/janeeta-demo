"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { site } from "@/data/site";

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-bg"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent font-display text-sm font-semibold text-accent-ink transition-transform group-hover:-rotate-6">
            {site.initials}
          </span>
          <span className="hidden font-display text-lg tracking-tight sm:block">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-baseline gap-1.5 rounded-full px-3 py-2 text-sm transition-colors hover:text-ink ${
                  isActive(item.href) ? "text-ink" : "text-muted"
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive(item.href) ? "text-accent" : ""}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <ThemeSwitcher />
          </li>
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 6h14M2 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-4 pb-10 md:hidden">
          <ul className="divide-y divide-line">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline gap-4 py-5 font-display text-3xl"
                >
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              <span className="text-accent">06</span> Theme
            </span>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
