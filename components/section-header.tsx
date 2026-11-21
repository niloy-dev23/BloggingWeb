import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  href?: string;
  linkLabel?: string;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow text-rust">{eyebrow}</p>
        <h2
          id={id}
          className="mt-3 font-serif text-3xl leading-[1.08] tracking-[-0.015em] text-balance sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{description}</p>
        )}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-2 border-b border-line-strong pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-rust hover:text-rust"
        >
          {linkLabel}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      )}
    </div>
  );
}
