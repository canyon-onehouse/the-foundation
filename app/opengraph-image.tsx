import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "The Foundation — One House Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  // Brand glyph (small SVG) embedded as a data URI.
  const glyph = readFileSync(
    join(process.cwd(), "public/assets/symbol-color.svg"),
  ).toString("base64");
  const glyphSrc = `data:image/svg+xml;base64,${glyph}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(160deg, #1B222C 0%, #16202C 55%, #0E1822 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "0 80px",
        }}
      >
        <img src={glyphSrc} width={104} height={104} alt="" />
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          One House Project
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 132,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          the foundation
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#029AFF",
          }}
        >
          join the project · become a founder
        </div>
      </div>
    ),
    { ...size },
  );
}
