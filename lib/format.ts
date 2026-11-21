import { site } from "./site";

export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/+$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

const longDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const shortDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string): string {
  return longDate.format(new Date(iso));
}

export function formatShortDate(iso: string): string {
  return shortDate.format(new Date(iso));
}

export function formatMonthYear(iso: string): string {
  return monthYear.format(new Date(iso));
}

export function toIsoDate(iso: string): string {
  return iso.slice(0, 10);
}

export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}
