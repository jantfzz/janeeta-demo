import Link from "next/link";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function SectionHeader({
  number,
  title,
  intro,
  id,
}: {
  number: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <div className="mb-10 grid gap-4 border-t border-line pt-8 md:mb-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10">
      <div className="flex items-start gap-4">
        <span aria-hidden="true" className="font-display text-5xl leading-none text-accent md:text-6xl">
          {number}
        </span>
        <h2 id={id} className="pt-1 font-display text-2xl tracking-tight md:text-3xl">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-xl text-sm text-muted md:pt-2 md:text-base">{intro}</p>}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
}) {
  const cls =
    variant === "primary"
      ? "bg-ink text-bg hover:bg-accent hover:text-accent-ink"
      : "border border-line text-ink hover:border-ink";
  const base = `inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${cls}`;
  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className={className}>
      <path d="M3 11L11 3M5 3h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line px-3 py-1 text-xs text-muted">{children}</span>
  );
}
