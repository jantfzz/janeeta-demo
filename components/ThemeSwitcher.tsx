"use client";

import { useEffect, useState } from "react";

// On/off switch: ON = light theme, OFF = dark theme.
// Before the visitor chooses, it follows their device setting.
export default function ThemeSwitcher() {
  const [light, setLight] = useState(true);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {}
    if (saved === "light" || saved === "dark") setLight(saved === "light");
    else setLight(!window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    const theme = next ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={light}
      aria-label="Light mode"
      title={light ? "Light mode on" : "Light mode off (dark)"}
      onClick={toggle}
      className="group inline-flex items-center gap-2 rounded-full border border-line py-1 pl-1 pr-2.5 text-xs text-muted transition-colors hover:text-ink"
    >
      <span className={`relative h-5 w-9 rounded-full transition-colors duration-300 ${light ? "bg-accent" : "bg-surface-2"}`}>
        <span
          className={`absolute top-0.5 grid h-4 w-4 place-items-center rounded-full bg-bg shadow transition-transform duration-300 motion-reduce:transition-none ${
            light ? "translate-x-[18px]" : "translate-x-0.5"
          }`}
        >
          {light ? (
            <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true" className="text-accent">
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true" className="text-ink">
              <path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" fill="currentColor" />
            </svg>
          )}
        </span>
      </span>
      <span className="font-mono uppercase tracking-widest">{light ? "On" : "Off"}</span>
    </button>
  );
}
