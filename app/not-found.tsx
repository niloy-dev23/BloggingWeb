import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatShortDate } from "@/lib/format";

export default function NotFound() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center lg:py-32">
      <p className="font-serif text-[clamp(5rem,14vw,9rem)] leading-none text-rust/25">
        404
      </p>
      <h1 className="mt-2 font-serif text-4xl leading-tight text-balance sm:text-5xl">
        This page has wandered off.
      </h1>
      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
        The link may be old, the essay may have moved, or the address may have a
        typo. The journal is still here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-rust"
        >
          Back to home
        </Link>
        <Link
          href="/blog"
          className="inline-flex h-11 items-center rounded-full border border-line-strong px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:text-rust"
        >
          Browse the journal
        </Link>
      </div>

      <div className="mt-16 border-t border-line pt-8 text-left">
        <p className="eyebrow text-rust">While you are here</p>
        <ul className="mt-4 divide-y divide-line">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <span className="font-serif text-xl leading-snug transition-colors group-hover:text-rust">
                  {post.title}
                </span>
                <time
                  dateTime={post.publishedAt}
                  className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-muted"
                >
                  {formatShortDate(post.publishedAt)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
