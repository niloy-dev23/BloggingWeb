import type { MetadataRoute } from "next";
import { authors } from "@/lib/authors";
import { absoluteUrl } from "@/lib/format";
import { getAllPosts } from "@/lib/posts";
import { topics } from "@/lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts[0]?.updatedAt ?? posts[0]?.publishedAt;
  const lastModified = latest ? new Date(latest) : new Date("2026-01-01");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/topics"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/authors"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/subscribe"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absoluteUrl(`/blog/${post.slug}/opengraph-image`)],
  }));

  const topicRoutes: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: absoluteUrl(`/topics/${topic.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const authorRoutes: MetadataRoute.Sitemap = authors.map((author) => ({
    url: absoluteUrl(`/authors/${author.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes, ...topicRoutes, ...authorRoutes];
}
