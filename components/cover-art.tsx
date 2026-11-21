import type { CSSProperties } from "react";

const palettes = [
  { bg: "#17372f", fg: "#f1e7d3", accent: "#c96a3f", soft: "#285145" },
  { bg: "#a63a1e", fg: "#f6ecda", accent: "#e3b04b", soft: "#8a2d16" },
  { bg: "#e6dcc8", fg: "#20262b", accent: "#a63a1e", soft: "#d3c6ad" },
  { bg: "#1e2c45", fg: "#eee3cf", accent: "#d9a441", soft: "#2c3f5e" },
  { bg: "#d8c5a5", fg: "#241f1a", accent: "#7a3b2e", soft: "#c6b08c" },
  { bg: "#3b2b3c", fg: "#f0e4d2", accent: "#c98b5f", soft: "#4e3a4f" },
];

type CoverArtProps = {
  palette?: number;
  variant?: number;
  className?: string;
  style?: CSSProperties;
  decorative?: boolean;
  label?: string;
};

export function CoverArt({
  palette = 0,
  variant = 0,
  className,
  style,
  decorative = true,
  label,
}: CoverArtProps) {
  const p = palettes[Math.abs(palette) % palettes.length];
  const v = Math.abs(variant) % 6;

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={style}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : (label ?? "Abstract geometric illustration")}
      focusable="false"
    >
      <rect width="800" height="600" fill={p.bg} />

      {v === 0 && (
        <g>
          <circle cx="560" cy="270" r="168" fill={p.accent} />
          <circle
            cx="560"
            cy="270"
            r="206"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <circle
            cx="560"
            cy="270"
            r="246"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.14"
          />
          <line
            x1="70"
            y1="450"
            x2="730"
            y2="450"
            stroke={p.fg}
            strokeOpacity="0.35"
          />
          <circle cx="140" cy="150" r="9" fill={p.fg} />
          <rect x="70" y="480" width="96" height="6" fill={p.fg} fillOpacity="0.8" />
        </g>
      )}

      {v === 1 && (
        <g>
          <path d="M0 600 L800 0 L800 600 Z" fill={p.soft} />
          <rect x="92" y="92" width="256" height="376" fill={p.fg} fillOpacity="0.07" />
          <circle cx="250" cy="300" r="118" fill={p.accent} />
          <line
            x1="0"
            y1="600"
            x2="800"
            y2="0"
            stroke={p.fg}
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <g fill={p.fg} fillOpacity="0.75">
            {Array.from({ length: 18 }).map((_, index) => (
              <circle
                key={index}
                cx={560 + (index % 6) * 32}
                cy={470 + Math.floor(index / 6) * 32}
                r="3"
              />
            ))}
          </g>
        </g>
      )}

      {v === 2 && (
        <g>
          <g fill={p.fg} fillOpacity="0.24">
            {Array.from({ length: 88 }).map((_, index) => (
              <circle
                key={index}
                cx={100 + (index % 11) * 60}
                cy={100 + Math.floor(index / 11) * 60}
                r="2.2"
              />
            ))}
          </g>
          <rect x="140" y="150" width="300" height="300" fill={p.accent} />
          <rect
            x="410"
            y="250"
            width="250"
            height="250"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.8"
            strokeWidth="2"
          />
          <circle cx="410" cy="250" r="14" fill={p.fg} />
          <line x1="70" y1="530" x2="730" y2="530" stroke={p.fg} strokeOpacity="0.4" />
        </g>
      )}

      {v === 3 && (
        <g>
          <path d="M170 540 L170 310 A230 230 0 0 1 630 310 L630 540 Z" fill={p.accent} />
          <path
            d="M235 540 L235 318 A165 165 0 0 1 565 318 L565 540"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.65"
            strokeWidth="2"
          />
          <circle cx="400" cy="250" r="42" fill={p.fg} />
          <line
            x1="400"
            y1="40"
            x2="400"
            y2="160"
            stroke={p.fg}
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <line x1="70" y1="540" x2="730" y2="540" stroke={p.fg} strokeOpacity="0.4" />
        </g>
      )}

      {v === 4 && (
        <g>
          <path
            d="M0 390 C140 320 260 450 400 390 S660 320 800 390 L800 600 L0 600 Z"
            fill={p.soft}
          />
          <path
            d="M0 300 C140 240 260 350 400 300 S660 230 800 300"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <path
            d="M0 220 C140 170 260 260 400 220 S660 160 800 220"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.25"
          />
          <circle cx="610" cy="160" r="82" fill={p.accent} />
          <circle
            cx="610"
            cy="160"
            r="112"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.25"
          />
          <rect x="80" y="470" width="140" height="6" fill={p.fg} fillOpacity="0.7" />
        </g>
      )}

      {v === 5 && (
        <g>
          <circle cx="590" cy="410" r="150" fill={p.soft} />
          <rect x="150" y="100" width="104" height="400" fill={p.fg} fillOpacity="0.92" />
          <rect x="296" y="180" width="104" height="320" fill={p.accent} />
          <rect
            x="442"
            y="60"
            width="150"
            height="440"
            fill="none"
            stroke={p.fg}
            strokeOpacity="0.7"
            strokeWidth="2"
          />
          <line x1="70" y1="530" x2="730" y2="530" stroke={p.fg} strokeOpacity="0.4" />
        </g>
      )}

      <g stroke={p.fg} strokeOpacity="0.55" strokeWidth="1.5">
        <line x1="66" y1="70" x2="86" y2="70" />
        <line x1="76" y1="60" x2="76" y2="80" />
      </g>
    </svg>
  );
}
