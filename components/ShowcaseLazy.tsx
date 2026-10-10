"use client";

import dynamic from "next/dynamic";

// Loads the charting library only when the showcase is needed, keeping the first load light.
const Showcase = dynamic(() => import("./Showcase"), {
  ssr: false,
  loading: () => <div className="h-[520px] animate-pulse rounded-2xl border border-line bg-surface" aria-label="Loading charts" />,
});

export default Showcase;
