import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CoverArt } from "@/components/cover-art";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import { PostCard } from "@/components/post-card";
import { pluralize } from "@/lib/format";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/jsonld";
import { getPostsByTopic } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import { getTopic, topics } from "@/lib/topics";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic) {
    return {
      title: "Topic not found",
      robots: { index: false, follow: false },
    };
  }

  return createMetadata({
    title: `${topic.name} essays`,
    description: topic.longDescription,
    path: `/topics/${topic.slug}`,
  });
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic) notFound();

  const posts = getPostsByTopic(topic.slug);
  const otherTopics = topics.filter((item) => item.slug !== topic.slug);

  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema({
            name: `${topic.name} — Meridian`,
            description: topic.longDescription,
            path: `/topics/${topic.slug}`,
            posts,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Topics", path: "/topics" },
            { name: topic.name, path: `/topics/${topic.slug}` },
          ]),
        ]}
      />

      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-6 lg:px-8 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-rust">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/topics" className="transition-colors hover:text-rust">
              Topics
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">
              {topic.name}
            </span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow text-rust">Department</p>
              <h1 className="mt-4 font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.035em]">
                {topic.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {topic.longDescription}
              </p>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {posts.length} {pluralize(posts.length, "essay")} in this
                department
              </p>
            </div>

            <div className="overflow-hidden rounded-sm border border-line">
              <CoverArt
                palette={topic.art.palette}
                variant={topic.art.variant}
                decorative={false}
                label={`Abstract illustration for the ${topic.name} department`}
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20"
        aria-label={`${topic.name} essays`}
      >
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <nav
          aria-label="Other topics"
          className="mt-16 border-t border-line pt-8"
        >
          <p className="eyebrow text-muted">Other departments</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherTopics.map((item) => (
              <Link
                key={item.slug}
                href={`/topics/${item.slug}`}
                className="inline-flex h-9 items-center rounded-full border border-line px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-ink hover:text-rust"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/blog"
              className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rust"
            >
              All essays
            </Link>
          </div>
        </nav>
      </section>

      <NewsletterSection />
    </>
  );
}
