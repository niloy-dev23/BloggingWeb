const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://meridianjournal.com"
).replace(/\/+$/, "");

export const site = {
  name: "Meridian",
  title: "Meridian — Essays on design, technology, and the craft of making things",
  shortTitle: "Meridian",
  description:
    "Meridian is an independent journal publishing thoughtful essays on design, engineering, product, and the culture of building software — for practitioners who care about the details.",
  tagline: "Ideas for people who make things.",
  url: /^https?:\/\//.test(siteUrl) ? siteUrl : `https://${siteUrl}`,
  locale: "en_US",
  language: "en",
  founded: "2024",
  email: "hello@meridianjournal.com",
  twitterHandle: "@meridianjournal",
  twitterUrl: "https://x.com/meridianjournal",
  linkedinUrl: "https://www.linkedin.com/company/meridianjournal",
  githubUrl: "https://github.com/meridianjournal",
  keywords: [
    "design",
    "engineering",
    "product",
    "culture",
    "software craft",
    "web performance",
    "typography",
    "design systems",
    "product design",
    "technology essays",
  ],
} as const;

export const navigation = [
  { href: "/blog", label: "The Journal" },
  { href: "/topics", label: "Topics" },
  { href: "/authors", label: "Authors" },
  { href: "/about", label: "About" },
] as const;
