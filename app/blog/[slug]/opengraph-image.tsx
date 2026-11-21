import { ImageResponse } from "next/og";
import { getAuthor } from "@/lib/authors";
import { getAllPosts, getPost, getReadingTime } from "@/lib/posts";
import { getTopic } from "@/lib/topics";

export const alt = "An essay from Meridian";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const author = post ? getAuthor(post.author) : undefined;
  const topic = post ? getTopic(post.topic) : undefined;

  const title = post?.title ?? "Meridian";
  const readingTime = post ? getReadingTime(post) : 5;
  const titleSize = title.length > 78 ? 46 : title.length > 52 ? 54 : 62;

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
          background: "#17372f",
          color: "#f1e7d3",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-90px",
            bottom: "-150px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            border: "1px solid rgba(241,231,211,0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "60px",
            top: "50px",
            width: "120px",
            height: "120px",
            borderRadius: "999px",
            background: "#c96a3f",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>Meridian</span>
          <span style={{ color: "#d8b9a2" }}>{topic?.name ?? "Essay"}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            maxWidth: "940px",
          }}
        >
          <div
            style={{
              fontSize: `${titleSize}px`,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontWeight: 700,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: "23px", color: "#b7c7bd" }}>
            {`${author?.name ?? "Meridian"} · ${readingTime} min read`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #3a5a50",
            paddingTop: "24px",
            fontSize: "19px",
            color: "#9fb8ae",
          }}
        >
          <span>meridianjournal.com</span>
          <span>Essays on design, technology, and craft</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
