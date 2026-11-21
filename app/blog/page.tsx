import type { Metadata } from "next";
import Link from "next/link";
import { BlogExplorer, type ExplorerPost } from "@/components/blog-explorer";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import {
  blogSchema,
  breadcrumbSchema,
  collectionPageSchema,
} from "@/lib/jsonld";
import { getAllPosts, getReadingTime } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { topics } from "@/lib/topics";

export const metadata: Metadata = createMetadata({
  title: "The Journal",
  description:
    "Browse every essay from Meridian: design, engineering, product, and culture, written for people who care about the details.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  const explorerPosts: ExplorerPost[] = posts.map((post) => {
    const topic = topics.find((item) => item.slug === post.topic);
    return {
      slug: post.slug,
      title: post.title,
      dek: post.dek,
      publishedAt: post.publishedAt,
      readingTime: getReadingTime(post),
      author: post.author,
      topicName: topic?.name ?? post.topic,
      topicSlug: post.topic,
      tags: post.tags,
      palette: post.art.palette,
      variant: post.art.variant,
    };
  });

  const explorerTopics = topics.map((topic) => ({
    slug: topic.slug,
    name: topic.name,
    count: posts.filter((post) => post.topic === topic.slug).length,
  }));

  return (
    <>
      <JsonLd
        data={[
          blogSchema(posts),
          collectionPageSchema({
            name: "The Meridian Journal",
            description:
              "Every essay from Meridian on design, engineering, product, and culture.",
            path: "/blog",
            posts,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "The Journal", path: "/blog" },
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
              The Journal
            </span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-rust">The Journal</p>
              <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-balance">
                Essays for the long view.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                Every piece we publish, in one place. Slow writing on design,
                engineering, product, and the culture of making things — updated
                every other week.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-4 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <dt className="eyebrow text-muted">Essays</dt>
                <dd className="mt-1.5 font-serif text-3xl leading-none">
                  {posts.length}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted">Topics</dt>
                <dd className="mt-1.5 font-serif text-3xl leading-none">
                  {topics.length}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted">Since</dt>
                <dd className="mt-1.5 font-serif text-3xl leading-none">
                  {site.founded}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-14"
        aria-label="All essays"
      >
        <BlogExplorer posts={explorerPosts} topics={explorerTopics} />
      </section>

      <NewsletterSection />
    </>
  );
}
