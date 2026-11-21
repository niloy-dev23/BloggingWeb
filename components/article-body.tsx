import Link from "next/link";
import type { ReactNode } from "react";
import { getOutline, slugifyHeading } from "@/lib/posts";
import type { Post } from "@/lib/types";

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function renderInline(text: string): ReactNode[] {
  const parts = text.split(INLINE_PATTERN);

  return parts.map((part, index) => {
    if (!part) return null;

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = /^https?:\/\//.test(href);
      if (external) {
        return (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      }
      return (
        <Link key={index} href={href}>
          {label}
        </Link>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

type AnnotatedBlock = {
  block: Post["body"][number];
  id?: string;
  isFirstParagraph: boolean;
};

function annotateBlocks(post: Post): AnnotatedBlock[] {
  const outline = getOutline(post);
  let h2Index = 0;
  let h3Index = 0;
  let paragraphIndex = 0;

  return post.body.map((block) => {
    switch (block.type) {
      case "h2": {
        const id = outline[h2Index]?.id;
        h2Index += 1;
        return { block, id, isFirstParagraph: false };
      }
      case "h3": {
        h3Index += 1;
        return {
          block,
          id: `${slugifyHeading(block.text)}-${h3Index}`,
          isFirstParagraph: false,
        };
      }
      case "p": {
        const isFirstParagraph = paragraphIndex === 0;
        paragraphIndex += 1;
        return { block, isFirstParagraph };
      }
      default:
        return { block, isFirstParagraph: false };
    }
  });
}

export function ArticleBody({ post }: { post: Post }) {
  const blocks = annotateBlocks(post);

  return (
    <div className="article-body">
      {blocks.map(({ block, id, isFirstParagraph }, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} id={id}>
                {renderInline(block.text)}
                <a
                  href={`#${id}`}
                  aria-label={`Link to section: ${block.text}`}
                  className="heading-anchor"
                >
                  #
                </a>
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} id={id}>
                {renderInline(block.text)}
              </h3>
            );
          case "p":
            return (
              <p key={index} className={isFirstParagraph ? "drop-cap" : undefined}>
                {renderInline(block.text)}
              </p>
            );
          case "quote":
            return (
              <blockquote key={index}>
                <p>“{renderInline(block.text)}”</p>
                {block.cite && <cite>— {block.cite}</cite>}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside key={index} className="callout">
                <p className="callout-title">{block.title}</p>
                <p>{renderInline(block.text)}</p>
              </aside>
            );
          case "code":
            return (
              <pre key={index}>
                <code className={`language-${block.language}`}>{block.code}</code>
              </pre>
            );
          case "hr":
            return <hr key={index} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
