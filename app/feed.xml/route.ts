import { getAuthor } from "@/lib/authors";
import { absoluteUrl } from "@/lib/format";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { getTopic } from "@/lib/topics";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getAllPosts();
  const lastBuildDate = posts[0]
    ? new Date(posts[0].updatedAt ?? posts[0].publishedAt).toUTCString()
    : new Date("2026-01-01").toUTCString();

  const items = posts
    .map((post) => {
      const author = getAuthor(post.author);
      const topic = getTopic(post.topic);
      const url = absoluteUrl(`/blog/${post.slug}`);

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
        `<description>${escapeXml(post.dek)}</description>`,
        topic ? `<category>${escapeXml(topic.name)}</category>` : "",
        author ? `<dc:creator>${escapeXml(author.name)}</dc:creator>` : "",
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    "<channel>",
    `<title>${escapeXml(site.name)} — Essays on design, technology, and craft</title>`,
    `<link>${absoluteUrl("/")}</link>`,
    `<description>${escapeXml(site.description)}</description>`,
    "<language>en-us</language>",
    `<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    `<atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />`,
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
