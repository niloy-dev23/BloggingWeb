import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { NewsletterForm } from "@/components/newsletter-form";
import { absoluteUrl } from "@/lib/format";
import { breadcrumbSchema, webPageSchema } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "The Meridian Letter",
  description:
    "One good essay every other Sunday. Join the Meridian Letter for slow writing on design, engineering, product, and culture.",
  path: "/subscribe",
});

export default function SubscribePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: "The Meridian Letter — Subscribe",
            description:
              "One good essay every other Sunday from Meridian.",
            path: "/subscribe",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Subscribe", path: "/subscribe" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "SubscribeAction",
            target: absoluteUrl("/subscribe"),
            name: "Subscribe to the Meridian Letter",
          },
        ]}
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_440px] lg:items-center lg:gap-20 lg:px-8 lg:py-24">
          <div>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
            >
              <Link href="/" className="transition-colors hover:text-rust">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-ink">
                Subscribe
              </span>
            </nav>

            <p className="eyebrow mt-10 text-rust">The Meridian Letter</p>
            <h1 className="mt-4 font-serif text-[clamp(2.75rem,6vw,5rem)] leading-[0.96] tracking-[-0.03em] text-balance">
              One good essay, every other Sunday.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              A short letter with the best thing we read, one idea worth
              keeping, and a note from the editor. No links roundups. No growth
              hacks. No pop-ups.
            </p>

            <ul className="mt-8 space-y-3 border-t border-line pt-6 text-sm text-ink-soft">
              {[
                "One carefully edited essay, chosen from the archive or commissioned for the letter.",
                "A short note on why it matters, and what we are still thinking about.",
                "Occasional dispatches from the desk: corrections, updates, and what is coming next.",
              ].map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="font-mono text-[10px] text-rust"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line bg-paper-soft p-6 sm:p-8">
            <p className="eyebrow text-rust">Join the letter</p>
            <h2 className="mt-2 font-serif text-3xl leading-tight">
              Free, and easy to leave.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Enter your email and we will send the next letter. You can
              unsubscribe from any issue with one click.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
            <div className="mt-8 space-y-3 border-t border-line pt-5 text-xs leading-relaxed text-muted">
              <p>
                <strong className="font-semibold text-ink">No tracking.</strong>{" "}
                We do not use open pixels or sell subscriber data.
              </p>
              <p>
                <strong className="font-semibold text-ink">One list.</strong>{" "}
                Subscribing adds you to the letter only — not to a dozen
                automated sequences.
              </p>
              <p>
                <strong className="font-semibold text-ink">A real archive.</strong>{" "}
                Every essay stays free on the site. The letter is a convenience,
                not a paywall.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="border-t border-line pt-6">
            <p className="eyebrow text-rust">Who it is for</p>
            <h2 className="mt-3 font-serif text-2xl leading-tight">
              People who make things, and care how.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Designers, engineers, writers, founders, and the merely curious.
              If you have ever argued about a line height or a default setting,
              you will feel at home.
            </p>
          </div>
          <div className="border-t border-line pt-6">
            <p className="eyebrow text-rust">What to expect</p>
            <h2 className="mt-3 font-serif text-2xl leading-tight">
              A letter, not a feed.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              One email every two weeks. Roughly a five-minute read. Written by
              an editor, not assembled by a marketing platform.
            </p>
          </div>
          <div className="border-t border-line pt-6">
            <p className="eyebrow text-rust">Privacy</p>
            <h2 className="mt-3 font-serif text-2xl leading-tight">
              Your inbox is not inventory.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We store your email with our newsletter provider, use it only to
              send the letter, and delete it on request. Write to{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-rust underline decoration-rust/30 underline-offset-2 hover:decoration-rust"
              >
                {site.email}
              </a>{" "}
              with any questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
