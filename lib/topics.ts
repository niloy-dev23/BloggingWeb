import type { Topic, TopicSlug } from "./types";

export const topics: Topic[] = [
  {
    slug: "design",
    name: "Design",
    description:
      "Interfaces, typography, systems, and the details that shape how software feels.",
    longDescription:
      "Design at Meridian is about the decisions people feel before they can name them: the default setting, the width of a column, the moment a product remembers something for you. Essays here are practical, opinionated, and allergic to decoration for its own sake.",
    art: { palette: 0, variant: 0 },
  },
  {
    slug: "engineering",
    name: "Engineering",
    description:
      "Performance, architecture, and the craft of building reliable software.",
    longDescription:
      "Engineering coverage at Meridian is written for people who have to keep the system running after the launch post is published. We write about performance budgets, smaller architectures, and the quiet discipline of choosing tools that will still make sense in five years.",
    art: { palette: 3, variant: 1 },
  },
  {
    slug: "product",
    name: "Product",
    description:
      "Strategy, research, and the decisions behind things people use.",
    longDescription:
      "Product work is where intent meets evidence. These essays look at onboarding and return visits, documentation as a product surface, and the research habits that help teams decide what not to build.",
    art: { palette: 2, variant: 2 },
  },
  {
    slug: "culture",
    name: "Culture",
    description:
      "Work, attention, and the ideas that shape how we build.",
    longDescription:
      "Culture is the part of the work that does not fit in a roadmap: how teams make room for slow ideas, how attention is spent, and what it means to sustain a creative practice over years rather than sprints.",
    art: { palette: 1, variant: 4 },
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function isTopicSlug(slug: string): slug is TopicSlug {
  return topics.some((topic) => topic.slug === slug);
}
