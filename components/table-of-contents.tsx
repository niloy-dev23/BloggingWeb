import type { OutlineItem } from "@/lib/types";

export function TableOfContents({ items }: { items: OutlineItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="border-t border-line pt-5">
      <p className="eyebrow text-muted">In this essay</p>
      <ol className="mt-4 space-y-2.5 text-sm">
        {items.map((item, index) => (
          <li key={item.id} className="flex gap-3">
            <span className="pt-0.5 font-mono text-[10px] text-muted" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              className="leading-snug text-ink-soft transition-colors hover:text-rust"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
