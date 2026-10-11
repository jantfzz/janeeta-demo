"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import AnimatedLogo from "./AnimatedLogo";
import { site } from "@/data/site";
import { navItems } from "@/data/nav";
import { Icon } from "./Icons";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      barRef.current?.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);
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
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="rounded-md text-ink transition-colors hover:text-accent" aria-label={`${site.name}, home`}>
          <AnimatedLogo />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-baseline gap-1 whitespace-nowrap rounded-full px-2 py-1.5 text-[13px] transition-colors hover:text-ink ${
                  isActive(item.href) ? "text-ink" : "text-muted"
                }`}
              >
                <span className={`font-mono text-[9px] ${isActive(item.href) ? "text-accent" : ""}`}>
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

        <div className="flex items-center gap-2 xl:hidden">
          <span className="hidden sm:block">
            <ThemeSwitcher />
          </span>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 6h14M2 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div aria-hidden="true" className={`absolute inset-x-0 top-14 h-[2px] ${open ? "hidden" : ""}`}>
        <div ref={barRef} className="scroll-progress h-full bg-accent" />
      </div>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-line bg-bg px-4 pb-10 xl:hidden">
          <ul className="divide-y divide-line">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-center gap-4 py-4 font-display text-2xl"
                >
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <Icon name={item.icon} size={20} className="text-muted" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-end sm:hidden">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
