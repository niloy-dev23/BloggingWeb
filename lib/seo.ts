import type { Metadata } from "next";
import { absoluteUrl } from "./format";
import { site } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  imagePath?: string;
  imageAlt?: string;
};

export function createMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  noIndex = false,
  imagePath = "/opengraph-image",
  imageAlt = site.title,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const images = [
    {
      url: imagePath,
      width: 1200,
      height: 630,
      alt: imageAlt,
      type: "image/png",
    },
  ];

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          url,
          title,
          description,
          siteName: site.name,
          locale: site.locale,
          publishedTime,
          modifiedTime,
          authors,
          section,
          tags,
          images,
        }
      : {
          type: "website",
          url,
          title,
          description,
          siteName: site.name,
          locale: site.locale,
          images,
        };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      types: {
        "application/rss+xml": "/feed.xml",
      },
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: site.twitterHandle,
      site: site.twitterHandle,
      images,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
