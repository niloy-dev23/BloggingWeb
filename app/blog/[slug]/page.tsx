import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { AuthorAvatar } from "@/components/author-avatar";
import { CoverArt } from "@/components/cover-art";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import { PostCard } from "@/components/post-card";
import { SectionHeader } from "@/components/section-header";
import { ShareLinks } from "@/components/share-links";
import { TableOfContents } from "@/components/table-of-contents";
import { getAuthor } from "@/lib/authors";
import { absoluteUrl, formatDate, toIsoDate } from "@/lib/format";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/jsonld";
import {
  getAllPosts,
  getAdjacentPosts,
  getOutline,
  getPost,
  getReadingTime,
  getRelatedPosts,
} from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import { getTopic } from "@/lib/topics";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Essay not found",
      robots: { index: false, follow: false },
    };
  }

  const author = getAuthor(post.author);
  const topic = getTopic(post.topic);

  return createMetadata({
    title: post.title,
    description: post.dek,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    authors: author ? [author.name] : [post.author],
    section: topic?.name,
    tags: post.tags,
    imagePath: `/blog/${post.slug}/opengraph-image`,
    imageAlt: `Cover image for the essay ${post.title}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const author = getAuthor(post.author);
  const topic = getTopic(post.topic);

  if (!author || !topic) notFound();

  const outline = getOutline(post);
  const related = getRelatedPosts(post, 3);
  const { newer, older } = getAdjacentPosts(post.slug);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const updatedAt =
    post.updatedAt && post.updatedAt !== post.publishedAt
      ? post.updatedAt
      : undefined;

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post, author, topic),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: topic.name, path: `/topics/${topic.slug}` },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        <div className="mx-auto max-w-6xl px-5 pt-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-rust">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="transition-colors hover:text-rust">
              Journal
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/topics/${topic.slug}`}
              className="transition-colors hover:text-rust"
            >
              {topic.name}
            </Link>
          </nav>
        </div>

        <header className="mx-auto max-w-3xl px-5 pb-10 pt-10 lg:px-8">
          <Link
            href={`/topics/${topic.slug}`}
            className="eyebrow text-rust transition-colors hover:text-rust-dark"
          >
            {topic.name}
          </Link>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,5.4vw,4.4rem)] leading-[1.01] tracking-[-0.03em] text-balance">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            {post.dek}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-line pt-5">
            <div className="flex items-center gap-3">
              <AuthorAvatar author={author} size="md" />
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Written by
                </p>
                <Link
                  href={`/authors/${author.slug}`}
                  className="text-sm font-medium text-ink transition-colors hover:text-rust"
                >
                  {author.name}
                </Link>
              </div>
            </div>
            <span className="hidden h-8 w-px bg-line sm:block" aria-hidden="true" />
            <div className="text-[10px] uppercase tracking-[0.14em] text-muted">
              <time dateTime={toIsoDate(post.publishedAt)}>
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden="true"> · </span>
              {getReadingTime(post)} min read
              {updatedAt && (
                <span className="mt-1 block text-[10px] normal-case tracking-normal text-muted/80">
                  Updated {formatDate(updatedAt)}
                </span>
              )}
            </div>
          </div>
        </header>

        <figure className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-sm border border-line">
            <CoverArt
              palette={post.art.palette}
              variant={post.art.variant}
              decorative={false}
              label={`Abstract illustration for the essay ${post.title}`}
              className="aspect-[16/9] w-full"
            />
          </div>
          <figcaption className="mt-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
            Illustration by Meridian Studio
          </figcaption>
        </figure>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-16 lg:px-8 lg:py-16">
          <div className="mx-auto w-full max-w-[44rem] lg:mx-0">
            <ArticleBody post={post} />

            <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <ShareLinks url={url} title={post.title} />
              <Link
                href={`/topics/${topic.slug}`}
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-rust"
              >
                More in {topic.name} <span aria-hidden="true">→</span>
              </Link>
            </div>

            <section
              aria-labelledby="author-bio-heading"
              className="mt-12 border-t border-line pt-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                <AuthorAvatar author={author} size="lg" />
                <div>
                  <p className="eyebrow text-muted">About the author</p>
                  <h2
                    id="author-bio-heading"
                    className="mt-1.5 font-serif text-2xl leading-tight"
                  >
                    <Link
                      href={`/authors/${author.slug}`}
                      className="transition-colors hover:text-rust"
                    >
                      {author.name}
                    </Link>
                  </h2>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                    {author.role} · {author.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {author.shortBio}
                  </p>
                  <Link
                    href={`/authors/${author.slug}`}
                    className="mt-4 inline-flex items-center gap-2 border-b border-line-strong pb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-rust hover:text-rust"
                  >
                    All essays by {author.name.split(" ")[0]}{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </section>

            <nav
              aria-label="More essays"
              className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
            >
              {newer && (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="group border border-line p-5 transition-colors hover:border-ink"
                >
                  <p className="eyebrow text-muted">Newer essay</p>
                  <p className="mt-2 font-serif text-lg leading-snug transition-colors group-hover:text-rust">
                    {newer.title}
                  </p>
                </Link>
              )}
              {older && (
                <Link
                  href={`/blog/${older.slug}`}
                  className="group border border-line p-5 transition-colors hover:border-ink sm:text-right"
                >
                  <p className="eyebrow text-muted">Older essay</p>
                  <p className="mt-2 font-serif text-lg leading-snug transition-colors group-hover:text-rust">
                    {older.title}
                  </p>
                </Link>
              )}
            </nav>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <TableOfContents items={outline} />

              <div className="border-t border-line pt-5">
                <ShareLinks url={url} title={post.title} />
              </div>

              <div className="border border-line bg-paper-soft p-5">
                <p className="eyebrow text-rust">The Meridian Letter</p>
                <p className="mt-2 font-serif text-xl leading-snug">
                  One good essay, every other Sunday.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  A short letter with one idea worth keeping. No spam.
                </p>
                <Link
                  href="/subscribe"
                  className="mt-4 inline-flex h-9 items-center rounded-full bg-ink px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rust"
                >
                  Subscribe <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section
        className="border-t border-line bg-paper-soft"
        aria-labelledby="related-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <SectionHeader
            id="related-heading"
            eyebrow="Keep reading"
            title="Related essays"
            description={`More from the ${topic.name} desk, and a few adjacent ideas.`}
            href={`/topics/${topic.slug}`}
            linkLabel={`All ${topic.name}`}
          />
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
