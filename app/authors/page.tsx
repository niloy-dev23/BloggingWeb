import type { Metadata } from "next";
import Link from "next/link";
import { AuthorCard } from "@/components/author-card";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import { authors } from "@/lib/authors";
import { absoluteUrl } from "@/lib/format";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { getPostsByAuthor } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Authors",
  description:
    "Meet the editors and writers behind Meridian: designers, engineers, and writers publishing thoughtful work on the craft of building software.",
  path: "/authors",
});

export default function AuthorsPage() {
  const peopleSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/authors")}#collection`,
    name: `Authors — ${site.name}`,
    description:
      "The editors and writers behind Meridian, an independent journal on design, engineering, product, and culture.",
    url: absoluteUrl("/authors"),
    inLanguage: site.language,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: authors.length,
      itemListElement: authors.map((author, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/authors/${author.slug}`),
        name: author.name,
      })),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          peopleSchema,
          webPageSchema({
            name: "Authors — Meridian",
            description:
              "Meet the editors and writers behind Meridian.",
            path: "/authors",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Authors", path: "/authors" },
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
              Authors
            </span>
          </nav>

          <p className="eyebrow mt-10 text-rust">Masthead</p>
          <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.03em] text-balance">
            The people behind Meridian.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            A small editorial team with strong opinions and a shared allergy to
            filler. Each editor runs a department and writes for the others.
          </p>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20"
        aria-label="Meridian authors"
      >
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {authors.map((author) => (
            <AuthorCard
              key={author.slug}
              author={author}
              count={getPostsByAuthor(author.name).length}
              headingLevel={2}
            />
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow text-rust">How we work</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">
              Editors who write, writers who edit.
            </h2>
          </div>
          <div className="text-sm leading-relaxed text-muted">
            <p>
              Every essay is edited by someone other than its author. We fact
              check what can be checked, name what cannot, and publish
              corrections in place rather than quietly rewriting the record.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 border-b border-line-strong pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust hover:text-rust"
            >
              Read our editorial standards <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
