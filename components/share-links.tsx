"use client";

import { useState } from "react";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.7 8.65 23 10.9 23 14.3V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
    </svg>
  );
}

export function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const xHref = `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  const baseClass =
    "inline-flex h-8 items-center gap-1.5 rounded-full border border-line px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft transition-colors hover:border-ink hover:text-rust";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="eyebrow mr-1 text-muted">Share</span>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label="Share this essay on X"
      >
        <XIcon /> X
      </a>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label="Share this essay on LinkedIn"
      >
        <LinkedInIcon /> LinkedIn
      </a>
      <button type="button" onClick={copyLink} className={baseClass}>
        <LinkIcon />
        <span aria-live="polite">{copied ? "Copied" : "Copy link"}</span>
      </button>
    </div>
  );
}
