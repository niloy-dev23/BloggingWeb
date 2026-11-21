export type TopicSlug = "design" | "engineering" | "product" | "culture";

export type ArtConfig = {
  palette: number;
  variant: number;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "hr" };

export type Post = {
  slug: string;
  title: string;
  dek: string;
  topic: TopicSlug;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
  art: ArtConfig;
  body: Block[];
};

export type AuthorTone = {
  bg: string;
  fg: string;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  tone: AuthorTone;
  shortBio: string;
  bio: string[];
  socials: { label: string; href: string }[];
  joined: string;
};

export type Topic = {
  slug: TopicSlug;
  name: string;
  description: string;
  longDescription: string;
  art: ArtConfig;
};

export type OutlineItem = {
  id: string;
  text: string;
};
