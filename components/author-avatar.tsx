import type { Author } from "@/lib/types";

const sizes = {
  sm: "h-7 w-7 text-[10px]",
  md: "h-9 w-9 text-xs",
  lg: "h-14 w-14 text-base",
  xl: "h-24 w-24 text-2xl",
} as const;

export function AuthorAvatar({
  author,
  size = "md",
  className = "",
}: {
  author: Author;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-serif font-medium tracking-wide ring-1 ring-black/5 ${sizes[size]} ${className}`}
      style={{ backgroundColor: author.tone.bg, color: author.tone.fg }}
    >
      {author.initials}
    </span>
  );
}
