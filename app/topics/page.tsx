import type { Metadata } from "next";
import Link from "next/link";
import { CoverArt } from "@/components/cover-art";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import { pluralize } from "@/lib/format";
import {
  breadcrumbSchema,
  collectionPageSchema,
  webPageSchema,
} from "@/lib/jsonld";
import { getAllPosts, getPostsByTopic } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import { topics } from "@/lib/topics";

export const metadata: Metadata = createMetadata({
  title: "Topics",
  description:
    "Four running conversations: design, engineering, product, and culture. Browse every Meridian essay by topic.",
  path: "/topics",
});

export default function TopicsPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            name: "Topics",
            description:
              "Four running conversations: design, engineering, product, and culture.",
            path: "/topics",
            posts,
          }),
          webPageSchema({
            name: "Topics — Meridian",
            description:
              "Browse Meridian essays by topic: design, engineering, product, and culture.",
            path: "/topics",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Topics", path: "/topics" },
          ]),
        ]}
      />

      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-6 lg:px-8 lg:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-rust">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">
              Topics
            </span>
          </nav>

          <p className="eyebrow mt-10 text-rust">Departments</p>
          <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-balance">
            Four conversations, one journal.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Each department has its own editor and its own point of view. Read
            across all four, or follow the thread that matters to you.
          </p>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-5 lg:px-8"
        aria-label="All topics"
      >
        {topics.map((topic) => {
          const topicPosts = getPostsByTopic(topic.slug);
          const latest = topicPosts[0];

          return (
            <article
              key={topic.slug}
              className="grid gap-7 border-b border-line py-12 sm:grid-cols-[1fr_1.45fr] sm:gap-12 lg:py-14"
            >
              <Link
                href={`/topics/${topic.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm border border-line"
              >
                <CoverArt
                  palette={topic.art.palette}
                  variant={topic.art.variant}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </Link>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-serif text-4xl leading-none tracking-[-0.02em]">
                    <Link
                      href={`/topics/${topic.slug}`}
                      className="transition-colors hover:text-rust"
                    >
                      {topic.name}
                    </Link>
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-muted">
                    {topicPosts.length} {pluralize(topicPosts.length, "essay")}
                  </span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {topic.longDescription}
                </p>

                {latest && (
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                    <span className="eyebrow mr-2 text-muted">Latest</span>
                    <Link
                      href={`/blog/${latest.slug}`}
                      className="font-medium text-ink decoration-rust/40 underline-offset-4 hover:text-rust hover:underline"
                    >
                      {latest.title}
                    </Link>
                  </p>
                )}

                <Link
                  href={`/topics/${topic.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-line-strong pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust hover:text-rust"
                >
                  Explore {topic.name} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <NewsletterSection />
    </>
  );
}
