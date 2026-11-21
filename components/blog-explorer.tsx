"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { CoverArt } from "./cover-art";
import { formatShortDate } from "@/lib/format";

export type ExplorerPost = {
  slug: string;
  title: string;
  dek: string;
  publishedAt: string;
  readingTime: number;
  author: string;
  topicName: string;
  topicSlug: string;
  tags: string[];
  palette: number;
  variant: number;
};

type ExplorerTopic = {
  slug: string;
  name: string;
  count: number;
};

export function BlogExplorer({
  posts,
  topics,
}: {
  posts: ExplorerPost[];
  topics: ExplorerTopic[];
}) {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesTopic =
        activeTopic === "all" || post.topicSlug === activeTopic;
      if (!matchesTopic) return false;
      if (!needle) return true;

      const haystack = [
        post.title,
        post.dek,
        post.author,
        post.topicName,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(needle);
    });
  }, [posts, deferredQuery, activeTopic]);

  const isFiltering = query.trim() !== "" || activeTopic !== "all";

  return (
    <div>
      <div className="border-y border-line py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter essays by topic"
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              onClick={() => setActiveTopic("all")}
              aria-pressed={activeTopic === "all"}
              className={`inline-flex h-8 items-center gap-2 rounded-full border px-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                activeTopic === "all"
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-soft hover:border-line-strong hover:text-rust"
              }`}
            >
              All <span className="opacity-60">{posts.length}</span>
            </button>
            {topics.map((topic) => (
              <button
                key={topic.slug}
                type="button"
                onClick={() => setActiveTopic(topic.slug)}
                aria-pressed={activeTopic === topic.slug}
                className={`inline-flex h-8 items-center gap-2 rounded-full border px-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  activeTopic === topic.slug
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft hover:border-line-strong hover:text-rust"
                }`}
              >
                {topic.name} <span className="opacity-60">{topic.count}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor="essay-search" className="sr-only">
              Search essays
            </label>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
            <input
              id="essay-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, topic, or author…"
              className="h-10 w-full rounded-full border border-line bg-paper-soft pl-10 pr-10 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-rust [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper hover:text-ink"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      <p
        aria-live="polite"
        className="mt-5 text-[10px] uppercase tracking-[0.16em] text-muted"
      >
        {filtered.length} of {posts.length} essays
        {isFiltering && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveTopic("all");
            }}
            className="ml-3 text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            Reset filters
          </button>
        )}
      </p>

      <div className="mt-2">
        {filtered.map((post, index) => (
          <article
            key={post.slug}
            className="group grid gap-5 border-b border-line py-8 sm:grid-cols-[2.5rem_1fr_170px] sm:gap-6 lg:grid-cols-[2.5rem_1fr_210px]"
          >
            <div
              aria-hidden="true"
              className="hidden pt-1 font-mono text-[11px] text-muted sm:block"
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                <Link
                  href={`/topics/${post.topicSlug}`}
                  className="text-rust transition-colors hover:text-rust-dark"
                >
                  {post.topicName}
                </Link>
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedAt}>
                  {formatShortDate(post.publishedAt)}
                </time>
              </div>
              <h2 className="mt-2 font-serif text-2xl leading-[1.12] text-balance sm:text-3xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="decoration-rust/40 underline-offset-4 transition-colors group-hover:text-rust group-hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {post.dek}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-muted">
                {post.author} <span aria-hidden="true">·</span>{" "}
                {post.readingTime} min read
              </p>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              tabIndex={-1}
              aria-hidden="true"
              className="relative order-first aspect-[4/3] overflow-hidden rounded-sm border border-line sm:order-none sm:aspect-[4/3]"
            >
              <CoverArt
                palette={post.palette}
                variant={post.variant}
                className="h-full w-full transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </Link>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="border-b border-line py-16 text-center">
            <p className="font-serif text-2xl text-ink">No essays found.</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
              Try a different word, or clear the filters to see the full
              archive.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveTopic("all");
              }}
              className="mt-5 inline-flex h-9 items-center rounded-full bg-ink px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rust"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
