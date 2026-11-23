import { ImageResponse } from "next/og";
import { site } from "~/data/site";

export const alt = "Vidakai Studio: websites for your business, designed, built and launched";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121418",
          color: "#eef0f3",
          padding: 72,
          border: "24px solid #121418",
          outline: "1px solid rgba(240,243,247,0.22)",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#9499a2" }}>{site.name}</div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>
          Websites for your business, designed, built and launched
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 120, height: 4, background: "#ef6a3d" }} />
          <div style={{ fontSize: 28, color: "#c1c5cc" }}>Design · Build · Hosting · Launch</div>
        </div>
      </div>
    ),
    size,
  );
}
