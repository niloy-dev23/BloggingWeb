import type { Metadata } from "next";
import Link from "next/link";
import { AuthorCard } from "@/components/author-card";
import { CoverArt } from "@/components/cover-art";
import { JsonLd } from "@/components/json-ld";
import { NewsletterSection } from "@/components/newsletter-section";
import { authors } from "@/lib/authors";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/jsonld";
import { getPostsByAuthor } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Meridian is an independent journal about design, technology, and the craft of making things that last. Read our story, principles, and editorial standards.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-6 lg:px-8 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
          >
            <Link href="/" className="transition-colors hover:text-rust">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-ink">
              About
            </span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end lg:gap-16">
            <div>
              <p className="eyebrow text-rust">About Meridian</p>
              <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.75rem,6vw,5rem)] leading-[0.96] tracking-[-0.03em] text-balance">
                A journal for the long view.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                Meridian is an independent publication about design,
                engineering, product, and the culture of building software. We
                publish slowly, edit carefully, and write for people who care
                about the details.
              </p>
            </div>

            <div className="overflow-hidden rounded-sm border border-line">
              <CoverArt
                palette={0}
                variant={3}
                decorative={false}
                label="Abstract illustration of a meridian arch"
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div className="article-body mx-auto w-full max-w-[44rem] lg:mx-0">
            <h2>Why Meridian exists</h2>
            <p>
              The web is full of writing about building things and short on
              writing about building them <em>well</em>. Launch announcements,
              growth playbooks, and hot takes arrive on schedule. The quieter
              work — the defaults, the maintenance, the second visit — rarely
              gets a paragraph.
            </p>
            <p>
              Meridian began in {site.founded} as a newsletter between four
              friends who kept sending each other long emails about exactly
              that. It has grown into a journal with editors, standards, and a
              small but loyal readership. The ambition has not changed: publish
              the essay we wished we had found when we needed it.
            </p>

            <blockquote>
              <p>“The internet does not need more content. It needs more care.”</p>
              <cite>— The editors</cite>
            </blockquote>

            <h2>What we believe</h2>
            <ol>
              <li>
                <strong>Clarity is a form of respect.</strong> We write to be
                understood, not to be admired. Jargon is a tool, not a
                personality.
              </li>
              <li>
                <strong>Details are the work.</strong> The default setting, the
                empty state, the error message — these are not finishing
                touches. They are the product.
              </li>
              <li>
                <strong>Slow is a feature.</strong> We publish every other week
                because good essays need time to become true. We would rather
                miss a cycle than publish filler.
              </li>
              <li>
                <strong>Independence matters.</strong> Our editorial decisions
                are made by editors, not advertisers. If that ever changes, we
                will say so at the top of the page.
              </li>
            </ol>

            <h2>Editorial standards</h2>
            <p>
              Every essay is edited by someone other than its author. We fact
              check what can be checked, name what cannot, and correct mistakes
              in public. These are the rules we hold ourselves to:
            </p>
            <ul>
              <li>
                <strong>Two editors, one piece.</strong> No essay ships without
                a second reader.
              </li>
              <li>
                <strong>Sources over assertions.</strong> When a claim can be
                linked, we link it.
              </li>
              <li>
                <strong>Corrections in place.</strong> We update the essay and
                note the change with a date.
              </li>
              <li>
                <strong>Disclosure by default.</strong> Authors name relevant
                affiliations, clients, and investments.
              </li>
              <li>
                <strong>No sponsored prose.</strong> Sponsored work, if it ever
                appears, is labeled at the top and kept out of the editorial
                feed.
              </li>
            </ul>

            <h2>How the journal is made</h2>
            <p>
              Essays begin as a question, not a thesis. We research, argue,
              draft, and cut. Most pieces lose a third of their length between
              the first draft and publication. The goal is not to sound
              authoritative; it is to leave the reader with something they can
              use on Monday.
            </p>
            <p>
              We publish in four departments — design, engineering, product, and
              culture — and we commission across all of them. If you have a
              question worth six weeks of thinking,{" "}
              <a href={`mailto:${site.email}`}>write to us</a>.
            </p>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="border border-line bg-paper-soft p-6">
              <p className="eyebrow text-muted">At a glance</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Founded</dt>
                  <dd className="text-ink">{site.founded}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Format</dt>
                  <dd className="text-ink">Independent journal</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">Cadence</dt>
                  <dd className="text-ink">Every other week</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Contact</dt>
                  <dd className="text-right">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-rust underline decoration-rust/30 underline-offset-2 hover:decoration-rust"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="border border-line p-6">
              <p className="eyebrow text-rust">Reader-supported</p>
              <p className="mt-2 font-serif text-xl leading-snug">
                No paywall. No pop-ups. No tracking pixels.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Meridian is funded by readers who choose to support the journal.
                The newsletter is free, and the archive stays open.
              </p>
              <Link
                href="/subscribe"
                className="mt-4 inline-flex h-9 items-center rounded-full bg-ink px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rust"
              >
                Join the letter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="border-y border-line bg-paper-soft"
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-rust">The team</p>
              <h2
                id="team-heading"
                className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
              >
                Four editors, four departments.
              </h2>
            </div>
            <Link
              href="/authors"
              className="shrink-0 border-b border-line-strong pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust hover:text-rust"
            >
              Full masthead <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {authors.map((author) => (
              <AuthorCard
                key={author.slug}
                author={author}
                count={getPostsByAuthor(author.name).length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:py-24">
        <p className="eyebrow text-rust">Say hello</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">
          Have a question worth a long answer?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
          We read every note. Pitches are welcome, but a good question is even
          better. Tell us what you are trying to understand.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-rust"
          >
            {site.email}
          </a>
          <Link
            href="/blog"
            className="inline-flex h-11 items-center rounded-full border border-line-strong px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:text-rust"
          >
            Read the journal
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
