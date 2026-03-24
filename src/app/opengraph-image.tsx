import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FullerOps | AI-Powered Business Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a2e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            letterSpacing: "-2px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "#e94560",
              borderRadius: "14px",
              width: "72px",
              height: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "14px",
                width: "0",
                height: "0",
                borderTop: "18px solid transparent",
                borderBottom: "18px solid transparent",
                borderRight: "14px solid white",
              }}
            />
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "white",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "14px",
                width: "0",
                height: "0",
                borderTop: "18px solid transparent",
                borderBottom: "18px solid transparent",
                borderLeft: "14px solid white",
              }}
            />
          </div>
          <span>
            Fuller<span style={{ color: "#e94560" }}>Ops</span>
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#e94560",
            marginBottom: 40,
            fontWeight: 600,
          }}
        >
          AI-Powered Business Operations
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#9ca3af",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Website, content, leads, follow-ups, reviews. One person, everything
          included.
        </div>
      </div>
    ),
    { ...size },
  );
}
