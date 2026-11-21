import type { Author } from "./types";

export const authors: Author[] = [
  {
    slug: "elena-marsh",
    name: "Elena Marsh",
    role: "Design Director",
    location: "Copenhagen, Denmark",
    initials: "EM",
    tone: { bg: "#1c3a32", fg: "#f1e7d3" },
    shortBio:
      "Elena writes about interfaces, typography, and the quiet decisions that shape how software feels.",
    bio: [
      "Elena Marsh is a design director and writer based in Copenhagen. She leads design systems work for a small software studio and has spent the last twelve years helping teams make complex products feel calmer.",
      "Her essays for Meridian explore the unglamorous parts of design: defaults, documentation, spacing, and the small acts of care that decide whether a product is pleasant to use on its thousandth day.",
    ],
    socials: [
      { label: "Email", href: "mailto:elena@meridianjournal.com" },
      { label: "X", href: "https://x.com/meridianjournal" },
    ],
    joined: "2024-02-12",
  },
  {
    slug: "theo-nakamura",
    name: "Theo Nakamura",
    role: "Engineering Editor",
    location: "Lisbon, Portugal",
    initials: "TN",
    tone: { bg: "#1e2c45", fg: "#eee3cf" },
    shortBio:
      "Theo writes about performance, architecture, and the craft of building software that stays reliable.",
    bio: [
      "Theo Nakamura is a staff engineer working on web platforms and distributed systems. He has spent most of his career making slow products fast and complicated systems legible.",
      "At Meridian he edits the engineering section and writes about the trade-offs that rarely make it into launch announcements: maintenance, subtraction, and the value of choosing boring tools on purpose.",
    ],
    socials: [
      { label: "Email", href: "mailto:theo@meridianjournal.com" },
      { label: "GitHub", href: "https://github.com/meridianjournal" },
    ],
    joined: "2024-03-04",
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    role: "Product Writer",
    location: "Bengaluru, India",
    initials: "PR",
    tone: { bg: "#a63a1e", fg: "#f6ecda" },
    shortBio:
      "Priya writes about documentation, product strategy, and the words that help people find their way.",
    bio: [
      "Priya Raman is a product writer and researcher. She has built documentation practices at two developer-tools companies and writes about the relationship between clear language and good products.",
      "Her work for Meridian focuses on the moments after onboarding: the second visit, the half-remembered feature, the page someone reads when they are tired and something has gone wrong.",
    ],
    socials: [
      { label: "Email", href: "mailto:priya@meridianjournal.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/meridianjournal" },
    ],
    joined: "2024-05-20",
  },
  {
    slug: "marcus-bell",
    name: "Marcus Bell",
    role: "Culture Editor",
    location: "London, United Kingdom",
    initials: "MB",
    tone: { bg: "#3b2b3c", fg: "#f0e4d2" },
    shortBio:
      "Marcus writes about attention, creative practice, and the culture of making things over time.",
    bio: [
      "Marcus Bell is a writer and editor based in London. He spent a decade in magazine publishing before joining Meridian to lead its culture coverage.",
      "He is interested in the conditions that let good work happen: time, silence, notebooks, and the courage to keep a project in the drawer for another month.",
    ],
    socials: [
      { label: "Email", href: "mailto:marcus@meridianjournal.com" },
      { label: "X", href: "https://x.com/meridianjournal" },
    ],
    joined: "2024-04-08",
  },
];

export function getAuthor(slugOrName: string): Author | undefined {
  return authors.find(
    (author) => author.slug === slugOrName || author.name === slugOrName,
  );
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((author) => author.name === name);
}
