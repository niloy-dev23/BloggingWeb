export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.5" />
      <ellipse
        cx="16"
        cy="16"
        rx="7"
        ry="14.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <line
        x1="16"
        y1="1.5"
        x2="16"
        y2="30.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <line
        x1="1.5"
        y1="16"
        x2="30.5"
        y2="16"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  );
}
