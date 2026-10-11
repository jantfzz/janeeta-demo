"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";
const options: { value: Theme; label: string }[] = [
  { value: "system", label: "Default" },
  { value: "light", label: "I" },
  { value: "dark", label: "O" },
];

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {}
  }, []);

  const choose = (t: Theme) => {
    setTheme(t);
    apply(t);
    try {
      if (t === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", t);
    } catch {}
  };

  return (
    <div role="radiogroup" aria-label="Color theme" className="flex rounded-full border border-line p-0.5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={theme === o.value}
          onClick={() => choose(o.value)}
          className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
            theme === o.value ? "bg-ink text-bg" : "text-muted hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
