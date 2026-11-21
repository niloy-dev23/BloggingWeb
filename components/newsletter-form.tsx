"use client";

import { useId, useState } from "react";

export function NewsletterForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const dark = tone === "dark";

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`flex items-start gap-3 border p-5 ${
          dark ? "border-paper/25 bg-paper/5 text-paper" : "border-line bg-paper-soft text-ink"
        }`}
      >
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
            dark ? "bg-paper text-forest" : "bg-forest text-paper"
          }`}
        >
          ✓
        </span>
        <div>
          <p className="text-sm font-semibold">You’re on the list.</p>
          <p className={`mt-1 text-sm ${dark ? "text-paper/65" : "text-muted"}`}>
            Look out for the next letter on Sunday. You can unsubscribe at any
            time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("success");
      }}
      noValidate={false}
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          id={id}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={`h-12 min-w-0 flex-1 rounded-sm border px-4 text-sm outline-none transition-colors ${
            dark
              ? "border-paper/25 bg-transparent text-paper placeholder:text-paper/40 focus:border-paper/70"
              : "border-line bg-paper-soft text-ink placeholder:text-muted/60 focus:border-rust"
          }`}
        />
        <button
          type="submit"
          className={`h-12 shrink-0 rounded-sm px-6 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
            dark
              ? "bg-paper text-ink hover:bg-white"
              : "bg-ink text-paper hover:bg-rust"
          }`}
        >
          Subscribe
        </button>
      </div>
      <p className={`mt-3 text-xs leading-relaxed ${dark ? "text-paper/45" : "text-muted"}`}>
        One essay every other Sunday. No spam, no tracking pixels. Unsubscribe
        anytime.
      </p>
    </form>
  );
}
