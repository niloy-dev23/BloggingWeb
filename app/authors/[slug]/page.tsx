import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorAvatar } from "@/components/author-avatar";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import { PostCard } from "@/components/post-card";
import { authors, getAuthor } from "@/lib/authors";
import { formatMonthYear, pluralize } from "@/lib/format";
import { breadcrumbSchema, personSchema, profilePageSchema } from "@/lib/jsonld";
import { getPostsByAuthor } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) {
    return {
      title: "Author not found",
      robots: { index: false, follow: false },
    };
  }

  return createMetadata({
    title: `${author.name}, ${author.role}`,
    description: author.shortBio,
    path: `/authors/${author.slug}`,
  });
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) notFound();

  const posts = getPostsByAuthor(author.name);

  return (
    <>
      <JsonLd
        data={[
          personSchema(author),
          profilePageSchema(author, posts),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Authors", path: "/authors" },
            { name: author.name, path: `/authors/${author.slug}` },
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
            <Link href="/authors" className="transition-colors hover:text-rust">
              Authors
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">
              {author.name}
            </span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-5">
                <AuthorAvatar author={author} size="xl" />
                <div>
                  <p className="eyebrow text-rust">{author.role}</p>
                  <h1 className="mt-2 font-serif text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[0.98] tracking-[-0.03em]">
                    {author.name}
                  </h1>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-soft">
                {author.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {author.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex h-9 items-center rounded-full border border-line px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft transition-colors hover:border-ink hover:text-rust"
                  >
                    {social.label}{" "}
                    <span aria-hidden="true" className="ml-1.5">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <aside className="border border-line bg-paper-soft p-6">
              <p className="eyebrow text-muted">At a glance</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Based in</dt>
                  <dd className="text-right text-ink">{author.location}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Department</dt>
                  <dd className="text-right text-ink">{author.role}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">With Meridian since</dt>
                  <dd className="text-right text-ink">
                    {formatMonthYear(author.joined)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Essays</dt>
                  <dd className="text-right text-ink">
                    {posts.length} {pluralize(posts.length, "essay")}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20"
        aria-labelledby="author-essays-heading"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-rust">Selected work</p>
            <h2
              id="author-essays-heading"
              className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
            >
              Essays by {author.name.split(" ")[0]}
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden shrink-0 border-b border-line-strong pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust hover:text-rust sm:block"
          >
            All essays
          </Link>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} headingLevel={3} />
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
