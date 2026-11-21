import Link from "next/link";
import { BrandMark } from "./brand";
import { navigation } from "@/lib/site";

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="Meridian — home"
        >
          <BrandMark className="h-7 w-7 text-rust transition-transform duration-500 group-hover:rotate-45" />
          <span className="font-serif text-[1.6rem] leading-none tracking-[-0.02em] text-ink">
            Meridian
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-rust"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/subscribe"
            className="hidden h-9 items-center rounded-full bg-ink px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rust sm:inline-flex"
          >
            Subscribe
          </Link>

          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-paper-soft [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-12 w-64 border border-line bg-paper-soft p-2 shadow-xl shadow-ink/5"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:bg-paper hover:text-rust"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/subscribe"
                className="mt-2 block bg-ink px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-rust"
              >
                Subscribe
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
