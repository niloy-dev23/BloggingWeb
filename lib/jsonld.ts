import { absoluteUrl } from "./format";
import { getReadingTime, getWordCount } from "./posts";
import { site } from "./site";
import type { Author, Post, Topic } from "./types";

type Schema = Record<string, unknown>;

function publisherNode(): Schema {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon-512.png"),
      width: 512,
      height: 512,
    },
  };
}

export function organizationSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon-512.png"),
      width: 512,
      height: 512,
    },
    foundingDate: site.founded,
    email: site.email,
    sameAs: [site.twitterUrl, site.linkedinUrl, site.githubUrl],
  };
}

export function websiteSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function blogSchema(posts: Post[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}/#blog`,
    name: `${site.name} — The Journal`,
    description:
      "Essays on design, engineering, product, and the culture of building software.",
    url: absoluteUrl("/blog"),
    inLanguage: site.language,
    publisher: publisherNode(),
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      author: { "@type": "Person", name: post.author },
    })),
  };
}

export function blogPostingSchema(
  post: Post,
  author: Author,
  topic: Topic,
): Schema {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.dek,
    image: [absoluteUrl(`/blog/${post.slug}/opengraph-image`)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: author.name,
      url: absoluteUrl(`/authors/${author.slug}`),
    },
    publisher: publisherNode(),
    articleSection: topic.name,
    keywords: post.tags.join(", "),
    inLanguage: site.language,
    isPartOf: { "@id": `${site.url}/#blog` },
    wordCount: getWordCount(post),
    timeRequired: `PT${getReadingTime(post)}M`,
    url,
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function collectionPageSchema({
  name,
  description,
  path,
  posts,
}: {
  name: string;
  description: string;
  path: string;
  posts: Post[];
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#collection`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: site.language,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };
}

export function personSchema(author: Author): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl(`/authors/${author.slug}`)}#person`,
    name: author.name,
    jobTitle: author.role,
    description: author.shortBio,
    url: absoluteUrl(`/authors/${author.slug}`),
    worksFor: { "@id": `${site.url}/#organization` },
    email: author.socials.find((social) => social.href.startsWith("mailto:"))
      ?.href,
    sameAs: author.socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
  };
}

export function profilePageSchema(author: Author, posts: Post[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(`/authors/${author.slug}`)}#profile`,
    url: absoluteUrl(`/authors/${author.slug}`),
    name: `${author.name} — ${author.role}`,
    description: author.shortBio,
    inLanguage: site.language,
    mainEntity: { "@id": `${absoluteUrl(`/authors/${author.slug}`)}#person` },
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
    })),
  };
}

export function aboutPageSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl("/about")}#about`,
    url: absoluteUrl("/about"),
    name: `About ${site.name}`,
    description: `The story, principles, and editorial standards behind ${site.name}.`,
    inLanguage: site.language,
    mainEntity: { "@id": `${site.url}/#organization` },
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: site.language,
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}
