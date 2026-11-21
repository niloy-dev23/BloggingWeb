import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background: "#17140f",
          color: "#f5f1e8",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-110px",
            top: "-110px",
            width: "430px",
            height: "430px",
            borderRadius: "999px",
            border: "1px solid rgba(245,241,232,0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "-40px",
            width: "300px",
            height: "300px",
            borderRadius: "999px",
            background: "#a83a1c",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "999px",
                border: "2px solid #f5f1e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background: "#c96a3f",
                  display: "flex",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "26px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Meridian
            </div>
          </div>
          <div
            style={{
              fontSize: "18px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#a99e8c",
            }}
          >
            Independent journal
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "78px",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Ideas for people who make things.
          </div>
          <div style={{ fontSize: "26px", color: "#b9ae9c" }}>
            Essays on design, engineering, product, and culture.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #3a342b",
            paddingTop: "24px",
            fontSize: "19px",
            color: "#8d8374",
          }}
        >
          <span>meridianjournal.com</span>
          <span>{`Independent since ${site.founded}`}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
