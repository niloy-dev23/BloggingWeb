import Link from "next/link";
import { CoverArt } from "./cover-art";
import { pluralize } from "@/lib/format";
import type { Topic } from "@/lib/types";

export function TopicCard({ topic, count }: { topic: Topic; count: number }) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-line bg-paper-soft transition-colors hover:border-line-strong"
    >
      <div className="relative h-24 overflow-hidden border-b border-line">
        <CoverArt
          palette={topic.art.palette}
          variant={topic.art.variant}
          className="h-full w-full transition-transform duration-700 group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl tracking-[-0.01em] transition-colors group-hover:text-rust">
            {topic.name}
          </h3>
          <span className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-muted">
            {count} {pluralize(count, "essay")}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
        <span className="mt-auto pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-rust">
          Explore {topic.name} <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
