"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { impactMetrics, labWork, trialIsSample, trialMetrics, treatments } from "@/data/showcase";

const tabs = ["Impact metrics", "Lab work", "Trial explorer"] as const;
type TabName = (typeof tabs)[number];

const axis = { stroke: "var(--muted)", fontSize: 12, tickLine: false, axisLine: false } as const;

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
        active ? "border-ink bg-ink text-bg" : "border-line text-muted hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ImpactTab() {
  const areas = ["All", ...Array.from(new Set(impactMetrics.map((m) => m.area)))];
  const [area, setArea] = useState("All");
  const data = useMemo(
    () =>
      impactMetrics
        .filter((m) => area === "All" || m.area === area)
        .sort((a, b) => b.value - a.value),
    [area]
  );
  const avg = Math.round(data.reduce((s, m) => s + m.value, 0) / data.length);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by area">
        {areas.map((a) => (
          <Chip key={a} active={area === a} onClick={() => setArea(a)}>
            {a}
          </Chip>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_220px]">
        <div className="h-[340px] min-w-0" aria-label="Bar chart of percentage improvements">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 0 }}>
              <CartesianGrid horizontal={false} stroke="var(--line)" />
              <XAxis type="number" {...axis} unit="%" domain={[0, 70]} />
              <YAxis type="category" dataKey="label" {...axis} width={170} tick={{ fill: "var(--text)", fontSize: 12 }} />
              <Tooltip
                cursor={{ fill: "var(--accent-soft)" }}
                formatter={(v) => [`${v}%`, "Improvement"]}
                labelFormatter={(l) => {
                  const m = impactMetrics.find((x) => x.label === l);
                  return m ? `${l} — ${m.source}` : l;
                }}
              />
              <Bar dataKey="value" fill="var(--accent)" radius={[0, 6, 6, 0]} barSize={16} label={{ position: "right", fill: "var(--muted)", fontSize: 12, formatter: (v: unknown) => `${v}%` }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          <div className="rounded-xl border border-line p-4">
            <dt className="text-xs text-muted">Results shown</dt>
            <dd className="font-display text-3xl">{data.length}</dd>
          </div>
          <div className="rounded-xl border border-line p-4">
            <dt className="text-xs text-muted">Average improvement</dt>
            <dd className="font-display text-3xl text-accent">{avg}%</dd>
          </div>
        </dl>
      </div>
      <p className="mt-4 text-xs text-muted">Figures as reported in my roles. Hover a bar to see where each result came from.</p>
    </div>
  );
}

type SortKey = "lab" | "period" | "experiments";

function LabTab() {
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "experiments", dir: -1 });
  const rows = useMemo(
    () =>
      [...labWork].sort((a, b) => {
        const va = a[sort.key];
        const vb = b[sort.key];
        return (typeof va === "number" ? va - (vb as number) : String(va).localeCompare(String(vb))) * sort.dir;
      }),
    [sort]
  );
  const total = labWork.reduce((s, r) => s + r.experiments, 0);
  const toggle = (key: SortKey) => setSort((s) => ({ key, dir: s.key === key ? (s.dir === 1 ? -1 : 1) : -1 }));

  const Th = ({ k, children, className = "" }: { k: SortKey; children: React.ReactNode; className?: string }) => (
    <th scope="col" aria-sort={sort.key === k ? (sort.dir === 1 ? "ascending" : "descending") : "none"} className={`py-3 pr-4 font-normal ${className}`}>
      <button type="button" onClick={() => toggle(k)} className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted hover:text-ink">
        {children}
        <span aria-hidden="true" className={sort.key === k ? "text-accent" : "opacity-30"}>
          {sort.key === k && sort.dir === 1 ? "▲" : "▼"}
        </span>
      </button>
    </th>
  );

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px] text-left">
          <thead className="border-b border-line">
            <tr>
              <Th k="lab">Laboratory</Th>
              <Th k="period">Period</Th>
              <Th k="experiments" className="text-right">Experiments</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.lab} className="border-b border-line">
                <td className="py-4 pr-4">
                  <span className="font-medium">{r.lab}</span>
                  <span className="block text-sm text-muted">{r.focus}</span>
                </td>
                <td className="py-4 pr-4 text-muted">{r.period}</td>
                <td className="py-4 text-right">
                  <span className="inline-flex items-center gap-3">
                    <span className="hidden h-2 w-28 overflow-hidden rounded-full bg-surface-2 sm:block" aria-hidden="true">
                      <span className="block h-full rounded-full bg-accent" style={{ width: `${(r.experiments / 12) * 100}%` }} />
                    </span>
                    <span className="font-display text-2xl">{r.experiments}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="pt-4 text-sm text-muted" colSpan={2}>Total across three assistantships</td>
              <td className="pt-4 text-right font-display text-2xl text-accent">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted">Select a column header to sort.</p>
    </div>
  );
}

const seriesColor = { P1: "var(--series-1)", P2: "var(--series-2)", P3: "var(--series-3)" } as const;

function TrialTab() {
  const metricNames = Object.keys(trialMetrics) as (keyof typeof trialMetrics)[];
  const [metric, setMetric] = useState(metricNames[0]);
  const [visible, setVisible] = useState<Record<keyof typeof treatments, boolean>>({ P1: true, P2: true, P3: true });
  const data = trialMetrics[metric] as unknown as Record<string, number | string>[];
  const last = data[data.length - 1];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <label className="flex items-center gap-3 text-sm">
          <span className="text-muted">Metric</span>
          <select
            value={metric}
            onChange={(e) => setMetric(e.target.value as typeof metric)}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm"
          >
            {metricNames.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Show treatments">
          {(Object.keys(treatments) as (keyof typeof treatments)[]).map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={visible[k]}
              onClick={() => setVisible((v) => ({ ...v, [k]: !v[k] }))}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-opacity ${visible[k] ? "border-line" : "border-line opacity-40"}`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: seriesColor[k] }} aria-hidden="true" />
              {k} · {treatments[k]}
            </button>
          ))}
        </div>
      </div>

      {trialIsSample && (
        <p className="mt-4 inline-block rounded-md bg-accent-soft px-3 py-1.5 text-xs text-ink">
          Sample values for layout — real TA-1 measurements go in <code className="font-mono">data/showcase.ts</code>.
        </p>
      )}

      <div className="mt-4 h-[300px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 16, bottom: 0, left: -10 }}>
            <CartesianGrid vertical={false} stroke="var(--line)" />
            <XAxis dataKey="week" {...axis} />
            <YAxis {...axis} />
            <Tooltip />
            {(Object.keys(treatments) as (keyof typeof treatments)[]).map((k) =>
              visible[k] ? (
                <Line key={k} type="monotone" dataKey={k} name={`${k} · ${treatments[k]}`} stroke={seriesColor[k]} strokeWidth={2.5} dot={{ r: 3 }} />
              ) : null
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-3">
        {(Object.keys(treatments) as (keyof typeof treatments)[]).map((k) => (
          <div key={k} className="rounded-xl border border-line p-3">
            <dt className="text-xs text-muted">{k} · final week</dt>
            <dd className="font-display text-2xl">{last[k]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Showcase() {
  const [tab, setTab] = useState<TabName>("Impact metrics");
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 sm:p-8">
      <div role="tablist" aria-label="Showcase views" className="mb-6 flex gap-1 overflow-x-auto border-b border-line">
        {tabs.map((t, i) => (
          <button
            key={t}
            id={`tab-${i}`}
            role="tab"
            type="button"
            aria-selected={tab === t}
            aria-controls={`panel-${i}`}
            onClick={() => setTab(t)}
            className={`-mb-px whitespace-nowrap border-b-2 px-3 py-3 text-sm transition-colors ${
              tab === t ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            <span className="mr-1.5 font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</span>
            {t}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t} id={`panel-${i}`} role="tabpanel" aria-labelledby={`tab-${i}`} hidden={tab !== t}>
          {tab === t && (t === "Impact metrics" ? <ImpactTab /> : t === "Lab work" ? <LabTab /> : <TrialTab />)}
        </div>
      ))}
    </div>
  );
}
