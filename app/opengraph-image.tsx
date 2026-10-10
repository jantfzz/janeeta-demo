import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social-share card. Also used by Twitter/X via the summary_large_image card.
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111310",
          color: "#ecede6",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              background: "#a8cc7c",
              color: "#111310",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 30, color: "#9da296" }}>{site.name}</div>
        </div>
        <div style={{ fontSize: 68, lineHeight: 1.1, maxWidth: 1000, letterSpacing: -1.5 }}>{site.headline}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9da296" }}>
          <span>{site.role}</span>
          <span style={{ color: "#a8cc7c" }}>ITB · Bandung</span>
        </div>
      </div>
    ),
    size
  );
}
