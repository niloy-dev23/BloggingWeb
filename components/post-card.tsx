import Link from "next/link";
import { AuthorAvatar } from "./author-avatar";
import { CoverArt } from "./cover-art";
import { getAuthor } from "@/lib/authors";
import { formatShortDate } from "@/lib/format";
import { getReadingTime } from "@/lib/posts";
import { getTopic } from "@/lib/topics";
import type { Post } from "@/lib/types";

type PostCardProps = {
  post: Post;
  variant?: "default" | "featured" | "compact";
  headingLevel?: 2 | 3;
};

export function PostCard({
  post,
  variant = "default",
  headingLevel = 2,
}: PostCardProps) {
  const author = getAuthor(post.author);
  const topic = getTopic(post.topic);
  const href = `/blog/${post.slug}`;
  const readingTime = getReadingTime(post);
  const Heading = headingLevel === 3 ? "h3" : "h2";

  if (variant === "featured") {
    return (
      <article className="group relative flex h-full min-h-[480px] flex-col justify-end overflow-hidden rounded-sm border border-line bg-forest text-paper">
        <CoverArt
          palette={post.art.palette}
          variant={post.art.variant}
          className="absolute inset-0 h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0c1b17] via-[#0c1b17]/60 to-transparent"
          aria-hidden="true"
        />
        <div className="relative p-7 sm:p-9">
          <p className="eyebrow text-paper/60">Featured essay</p>
          <Heading className="mt-3 font-serif text-3xl leading-[1.06] text-balance sm:text-4xl">
            <Link
              href={href}
              className="decoration-paper/40 underline-offset-[6px] transition-colors hover:text-[#f4d8c8] hover:underline"
            >
              {post.title}
            </Link>
          </Heading>
          <p className="mt-3 line-clamp-2 max-w-md text-sm leading-relaxed text-paper/70">
            {post.dek}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-paper/65">
            {author && <AuthorAvatar author={author} size="sm" />}
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatShortDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group grid grid-cols-[92px_1fr] gap-5 py-6 sm:grid-cols-[128px_1fr] sm:gap-6">
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden="true"
          className="relative aspect-square overflow-hidden rounded-sm border border-line"
        >
          <CoverArt
            palette={post.art.palette}
            variant={post.art.variant}
            className="h-full w-full transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </Link>
        <div className="flex min-w-0 flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            {topic && <span className="text-rust">{topic.name}</span>}
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatShortDate(post.publishedAt)}</time>
          </div>
          <Heading className="mt-1.5 font-serif text-xl leading-snug sm:text-2xl">
            <Link
              href={href}
              className="decoration-rust/40 underline-offset-4 transition-colors group-hover:text-rust group-hover:underline"
            >
              {post.title}
            </Link>
          </Heading>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{post.dek}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-muted">
            {post.author} · {readingTime} min read
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[4/3] overflow-hidden rounded-sm border border-line bg-sand"
      >
        <CoverArt
          palette={post.art.palette}
          variant={post.art.variant}
          className="h-full w-full transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
        />
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {topic && (
            <Link href={`/topics/${topic.slug}`} className="text-rust hover:underline">
              {topic.name}
            </Link>
          )}
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formatShortDate(post.publishedAt)}</time>
        </div>
        <Heading className="mt-2 font-serif text-2xl leading-[1.15] text-balance">
          <Link
            href={href}
            className="decoration-rust/40 underline-offset-4 transition-colors group-hover:text-rust group-hover:underline"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">{post.dek}</p>
        <div className="mt-auto flex items-center gap-2.5 pt-5 text-[10px] uppercase tracking-[0.14em] text-muted">
          {author && <AuthorAvatar author={author} size="sm" />}
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{readingTime} min read</span>
        </div>
      </div>
    </article>
  );
}
