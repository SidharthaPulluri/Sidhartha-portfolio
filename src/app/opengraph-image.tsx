import { ImageResponse } from "next/og";

import { selfData } from "@/constant";

export const runtime = "edge";
export const alt = `${selfData.name} portfolio preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(96,165,250,0.24), transparent 35%), radial-gradient(circle at bottom right, rgba(148,163,184,0.22), transparent 32%), linear-gradient(180deg, #08111d 0%, #0f172a 52%, #111827 100%)",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "62px",
                height: "62px",
                borderRadius: "9999px",
                border: "1px solid rgba(148,163,184,0.35)",
                background: "rgba(37,99,235,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#dbeafe",
              }}
            >
              SP
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "18px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#93c5fd" }}>
                AI / ML Engineer Portfolio
              </div>
              <div style={{ fontSize: "22px", color: "#cbd5e1" }}>{selfData.current_location.city}, {selfData.current_location.state}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <div style={{ fontSize: "82px", lineHeight: 0.94, fontWeight: 700, letterSpacing: "-0.06em" }}>
            {selfData.name}
          </div>
          <div style={{ fontSize: "34px", lineHeight: 1.25, color: "#e2e8f0", maxWidth: "880px" }}>
            Building production-ready AI systems from research-driven ideas.
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {selfData.focus_areas.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "12px 18px",
                borderRadius: "9999px",
                background: "rgba(15,23,42,0.72)",
                border: "1px solid rgba(148,163,184,0.22)",
                color: "#e2e8f0",
                fontSize: "20px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
