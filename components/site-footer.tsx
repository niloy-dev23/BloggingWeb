import Link from "next/link";
import { BrandMark } from "./brand";
import { navigation, site } from "@/lib/site";
import { topics } from "@/lib/topics";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Meridian — home">
              <BrandMark className="h-7 w-7 text-rust" />
              <span className="font-serif text-2xl tracking-[-0.02em]">Meridian</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              An independent journal about design, technology, and the craft of
              making things that last.
            </p>
            <Link
              href="/subscribe"
              className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust hover:text-rust"
            >
              Get the newsletter
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <nav aria-label="Explore">
            <h2 className="eyebrow text-muted">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-soft transition-colors hover:text-rust">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/subscribe" className="text-ink-soft transition-colors hover:text-rust">
                  Newsletter
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Topics">
            <h2 className="eyebrow text-muted">Topics</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {topics.map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/topics/${topic.slug}`}
                    className="text-ink-soft transition-colors hover:text-rust"
                  >
                    {topic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-muted">Follow</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="/feed.xml"
                  className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-rust"
                >
                  RSS feed <span className="text-[10px] text-muted">XML</span>
                </a>
              </li>
              <li>
                <a
                  href={site.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft transition-colors hover:text-rust"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft transition-colors hover:text-rust"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-soft transition-colors hover:text-rust"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-[11px] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Meridian. Independent since {site.founded}.</p>
          <p>Made with care in Copenhagen, Tokyo, Bengaluru &amp; London.</p>
        </div>
      </div>
    </footer>
  );
}
