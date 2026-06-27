import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const routeOgSize = {
  width: 1200,
  height: 630
};

export const routeOgContentType = "image/png";

export function createRouteOgImage({
  kicker,
  title,
  description
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #101114 0%, #272017 48%, #0f1720 100%)",
          color: "white",
          padding: 72
        }}
      >
        <div style={{ fontSize: 32, color: "#facc15", fontWeight: 800 }}>{kicker}</div>
        <div style={{ marginTop: 24, fontSize: 72, lineHeight: 1, fontWeight: 900 }}>{title}</div>
        <div style={{ marginTop: 22, fontSize: 28, color: "rgba(255,255,255,0.76)" }}>{siteConfig.name}</div>
        <div style={{ marginTop: 20, maxWidth: 940, fontSize: 28, lineHeight: 1.35, color: "rgba(255,255,255,0.72)" }}>
          {description}
        </div>
      </div>
    ),
    routeOgSize
  );
}
