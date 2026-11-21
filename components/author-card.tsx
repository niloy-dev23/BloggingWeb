import Link from "next/link";
import { AuthorAvatar } from "./author-avatar";
import { pluralize } from "@/lib/format";
import type { Author } from "@/lib/types";

export function AuthorCard({
  author,
  count,
  headingLevel = 3,
}: {
  author: Author;
  count: number;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="flex h-full flex-col border-t border-line pt-6">
      <div className="flex items-center gap-4">
        <AuthorAvatar author={author} size="lg" />
        <div className="min-w-0">
          <Heading className="font-serif text-2xl leading-tight">
            <Link
              href={`/authors/${author.slug}`}
              className="decoration-rust/40 underline-offset-4 transition-colors hover:text-rust hover:underline"
            >
              {author.name}
            </Link>
          </Heading>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-rust">
            {author.role}
          </p>
          <p className="mt-1 text-xs text-muted">{author.location}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{author.shortBio}</p>
      <p className="mt-auto pt-5 text-[10px] uppercase tracking-[0.14em] text-muted">
        {count} {pluralize(count, "essay")}
        <span aria-hidden="true"> · </span>
        <Link
          href={`/authors/${author.slug}`}
          className="text-ink transition-colors hover:text-rust"
        >
          Read their work →
        </Link>
      </p>
    </article>
  );
}
