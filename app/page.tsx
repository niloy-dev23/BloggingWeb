import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import { PostCard } from "@/components/post-card";
import { SectionHeader } from "@/components/section-header";
import { TopicCard } from "@/components/topic-card";
import { blogSchema, webPageSchema } from "@/lib/jsonld";
import { getAllPosts } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { topics } from "@/lib/topics";

export const metadata: Metadata = createMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const latest = posts.filter((post) => post.slug !== featured.slug);
  const cards = latest.slice(0, 3);
  const rows = latest.slice(3, 6);

  return (
    <>
      <JsonLd
        data={[
          blogSchema(posts),
          webPageSchema({
            name: site.title,
            description: site.description,
            path: "/",
          }),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-line" aria-labelledby="home-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="h-px w-8 bg-rust" aria-hidden="true" />
              Independent journal · Est. {site.founded}
            </p>
            <h1
              id="home-heading"
              className="mt-6 max-w-3xl font-serif text-[clamp(2.9rem,6.4vw,5.4rem)] leading-[0.96] tracking-[-0.03em] text-balance"
            >
              Ideas for people who <em className="italic text-rust">make</em>{" "}
              things.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Meridian publishes thoughtful essays on design, engineering,
              product, and the culture of building software — for practitioners
              who care about the details.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-rust"
              >
                Read the latest <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/topics"
                className="inline-flex h-11 items-center rounded-full border border-line-strong px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:text-rust"
              >
                Browse topics
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
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
                <dt className="eyebrow text-muted">Cadence</dt>
                <dd className="mt-1.5 font-serif text-xl leading-none">
                  Biweekly
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <PostCard post={featured} variant="featured" />
          </div>
        </div>
      </section>

      {/* Latest essays */}
      <section
        className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20"
        aria-labelledby="latest-heading"
      >
        <SectionHeader
          id="latest-heading"
          eyebrow="Latest"
          title="Recent essays"
          description="New writing on the decisions, habits, and details that make good work possible."
          href="/blog"
          linkLabel="All essays"
        />

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((post) => (
            <PostCard key={post.slug} post={post} headingLevel={3} />
          ))}
        </div>

        {rows.length > 0 && (
          <div className="mt-14 divide-y divide-line border-t border-line">
            {rows.map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" headingLevel={3} />
            ))}
          </div>
        )}
      </section>

      {/* Topics */}
      <section
        className="border-y border-line bg-paper-soft"
        aria-labelledby="topics-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeader
            id="topics-heading"
            eyebrow="Departments"
            title="Browse by topic"
            description="Four running conversations, each with its own editor and point of view."
            href="/topics"
            linkLabel="All topics"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <TopicCard
                key={topic.slug}
                topic={topic}
                count={posts.filter((post) => post.topic === topic.slug).length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Point of view */}
      <section className="border-b border-line" aria-labelledby="pov-heading">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:py-24">
          <p className="eyebrow text-rust">A point of view</p>
          <h2 id="pov-heading" className="sr-only">
            Our point of view
          </h2>
          <blockquote className="mt-6 font-serif text-3xl leading-[1.18] tracking-[-0.01em] text-balance sm:text-4xl">
            “We publish for the people who notice the seams — and then go
            looking for them.”
          </blockquote>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            The editors
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-line-strong pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust hover:text-rust"
          >
            Read our editorial principles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
