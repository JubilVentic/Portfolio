import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = "Jubil Leo Ventic — Full-Stack Developer & SEO Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#fafafa",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#161618",
            color: "#ffffff",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          {site.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 32, color: "#5b8def", fontWeight: 600 }}>
            {site.title}
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 24,
              color: "#a1a1aa",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Fast websites. Technical SEO. Measurable results.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
