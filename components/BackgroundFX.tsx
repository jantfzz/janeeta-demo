"use client";

import { useEffect, useRef } from "react";

// A quiet animated backdrop: drifting cells and bacteria (biology), hexagon molecules (lab),
// a slowly turning DNA helix (science) and a network of linked data points (data / tech).
// Colors come from the theme tokens, so it re-tints itself for light and dark mode.
// Respects reduced motion (draws one still frame) and pauses when the tab is hidden.

type Node = { x: number; y: number; vx: number; vy: number };
type Cell = { x: number; y: number; r: number; vx: number; vy: number; rod: boolean; a: number; va: number };
type Mol = { x: number; y: number; r: number; a: number; va: number; vy: number };

export default function BackgroundFX() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let colors = { a: "#3e6b2a", b: "#3c6e8f", dark: false };

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      const bg = cs.getPropertyValue("--bg").trim();
      colors = {
        a: cs.getPropertyValue("--accent").trim() || "#3e6b2a",
        b: cs.getPropertyValue("--series-3").trim() || "#3c6e8f",
        dark: bg.toLowerCase() === "#111310",
      };
    };

    const rand = (min: number, max: number) => min + Math.random() * (max - min);
    let nodes: Node[] = [];
    let cells: Cell[] = [];
    let mols: Mol[] = [];

    const seed = () => {
      const small = w < 700;
      nodes = Array.from({ length: small ? 18 : 34 }, () => ({
        x: rand(0, w), y: rand(0, h), vx: rand(-0.12, 0.12), vy: rand(-0.12, 0.12),
      }));
      cells = Array.from({ length: small ? 4 : 7 }, () => ({
        x: rand(0, w), y: rand(0, h), r: rand(14, 34), vx: rand(-0.08, 0.08), vy: rand(-0.06, 0.06),
        rod: Math.random() < 0.45, a: rand(0, Math.PI), va: rand(-0.002, 0.002),
      }));
      mols = Array.from({ length: small ? 3 : 6 }, () => ({
        x: rand(0, w), y: rand(0, h), r: rand(10, 18), a: rand(0, Math.PI), va: rand(-0.003, 0.003), vy: rand(-0.1, -0.03),
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const wrap = (p: { x: number; y: number }, m = 40) => {
      if (p.x < -m) p.x = w + m;
      if (p.x > w + m) p.x = -m;
      if (p.y < -m) p.y = h + m;
      if (p.y > h + m) p.y = -m;
    };

    const hexagon = (m: Mol) => {
      ctx.beginPath();
      for (let i = 0; i <= 6; i++) {
        const ang = m.a + (i * Math.PI) / 3;
        const px = m.x + Math.cos(ang) * m.r;
        const py = m.y + Math.sin(ang) * m.r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      // a side chain, like a functional group
      const ang = m.a;
      ctx.beginPath();
      ctx.moveTo(m.x + Math.cos(ang) * m.r, m.y + Math.sin(ang) * m.r);
      ctx.lineTo(m.x + Math.cos(ang) * m.r * 1.9, m.y + Math.sin(ang) * m.r * 1.9);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(m.x + Math.cos(ang) * m.r * 2.05, m.y + Math.sin(ang) * m.r * 2.05, 2.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const cell = (c: Cell) => {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.a);
      ctx.beginPath();
      if (c.rod) {
        const len = c.r * 1.6;
        const rr = c.r * 0.45;
        ctx.moveTo(-len / 2, -rr);
        ctx.lineTo(len / 2, -rr);
        ctx.arc(len / 2, 0, rr, -Math.PI / 2, Math.PI / 2);
        ctx.lineTo(-len / 2, rr);
        ctx.arc(-len / 2, 0, rr, Math.PI / 2, (3 * Math.PI) / 2);
      } else {
        ctx.arc(0, 0, c.r, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      if (c.rod) {
        ctx.moveTo(-c.r * 0.5, 0);
        ctx.lineTo(c.r * 0.5, 0);
      } else {
        ctx.arc(c.r * 0.2, -c.r * 0.15, c.r * 0.32, 0, Math.PI * 2);
      }
      ctx.stroke();
      ctx.restore();
    };

    const helix = () => {
      const x0 = w > 900 ? w - 70 : w - 36;
      const amp = w > 900 ? 22 : 14;
      const step = 22;
      for (let y = -step; y < h + step; y += step) {
        const ph = y * 0.02 + t * 0.006;
        const x1 = x0 + Math.sin(ph) * amp;
        const x2 = x0 - Math.sin(ph) * amp;
        ctx.globalAlpha = (colors.dark ? 0.16 : 0.12) * (0.5 + 0.5 * Math.abs(Math.cos(ph)));
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x1, y, 2.2, 0, Math.PI * 2);
        ctx.arc(x2, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const base = colors.dark ? 0.2 : 0.14;

      // data network
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.b;
      ctx.fillStyle = colors.b;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < 150) {
            ctx.globalAlpha = base * 0.7 * (1 - d / 150);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = base;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // cells and bacteria
      ctx.strokeStyle = colors.a;
      ctx.lineWidth = 1.2;
      for (const c of cells) {
        ctx.globalAlpha = base * 0.9;
        ctx.fillStyle = colors.dark ? "rgba(168,204,124,0.03)" : "rgba(62,107,42,0.035)";
        cell(c);
      }

      // molecules
      ctx.fillStyle = colors.a;
      ctx.lineWidth = 1.1;
      ctx.globalAlpha = base * 0.9;
      for (const m of mols) hexagon(m);

      // DNA helix on the right edge
      ctx.strokeStyle = colors.a;
      ctx.fillStyle = colors.a;
      ctx.lineWidth = 1;
      helix();
      ctx.globalAlpha = 1;
    };

    const step = () => {
      t += 1;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        wrap(n);
      }
      for (const c of cells) {
        c.x += c.vx;
        c.y += c.vy;
        c.a += c.va;
        wrap(c, 60);
      }
      for (const m of mols) {
        m.y += m.vy;
        m.a += m.va;
        wrap(m, 50);
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduce.matches || document.hidden) draw();
      else raf = requestAnimationFrame(step);
    };

    readColors();
    resize();
    start();

    const onResize = () => {
      resize();
      if (reduce.matches) draw();
    };
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start());
    const onTheme = () => {
      readColors();
      draw();
    };
    const mo = new MutationObserver(onTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const dark = window.matchMedia("(prefers-color-scheme: dark)");

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    dark.addEventListener("change", onTheme);
    reduce.addEventListener("change", start);
    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      dark.removeEventListener("change", onTheme);
      reduce.removeEventListener("change", start);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
}
