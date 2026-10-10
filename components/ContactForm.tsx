"use client";

import { useState } from "react";
import { site } from "@/data/site";

const topics = ["Job opportunity", "Internship", "Research collaboration", "Freelance / project", "Just saying hi"];

// No backend needed: the form opens the visitor's email app with everything filled in.
export default function ContactForm() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `[${f.get("topic")}] from ${f.get("name")}`;
    const body = `${f.get("message")}\n\n— ${f.get("name")}${f.get("org") ? `, ${f.get("org")}` : ""}`;
    window.location.href = `mailto:${site.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field = "mt-1.5 w-full rounded-xl border border-line bg-bg px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Your name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="e.g. Dewi Lestari" />
        </label>
        <label className="block text-sm">
          <span className="font-medium">
            Company or institution <span className="text-muted">(optional)</span>
          </span>
          <input name="org" autoComplete="organization" className={field} />
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="font-medium">Topic</span>
        <select name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block text-sm">
        <span className="font-medium">Message</span>
        <textarea name="message" required rows={5} className={field} placeholder="Tell me a little about the role or project…" />
      </label>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="submit" className="rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink">
          Open in my email app
        </button>
        <button type="button" onClick={copy} className="rounded-full border border-line px-4 py-2 text-[13px] hover:border-ink">
          {copied ? "Copied ✓" : "Copy email address"}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </span>
      </div>
      <p className="mt-3 text-xs text-muted">The form opens your email app with the message filled in; nothing is stored on this site.</p>
    </form>
  );
}
