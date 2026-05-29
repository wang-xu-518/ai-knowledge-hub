export const SITE_URL = "https://myinai.com";
export const LAST_UPDATED = new Date().toISOString().split("T")[0];
/**
 * JSON-LD Structured Data Generators
 * Supports: Article, FAQPage, HowTo, BreadcrumbList
 * Reference: https://schema.org
 */

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToSchemaInput {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  image?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateArticleSchema(input: ArticleSchemaInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName || "AI Knowledge Hub Editorial Team",
      url: input.authorUrl || SITE_URL,
      jobTitle: "AI Education Specialist",
    },
    publisher: {
      "@type": "Organization",
      name: input.publisherName || "AI Knowledge Hub",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: input.publisherLogo || `${SITE_URL}/logo.png`,
      },
    },
  };

  if (input.image) {
    schema.image = input.image;
  }

  schema.dateModified = input.dateModified || LAST_UPDATED;

  // SpeakableSpecification for AI citation
  schema.speakable = {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".faq-item question"],
    xpath: "/html/head/title",
  };

  return schema;
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateHowToSchema(input: HowToSchemaInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
      image: step.image,
    })),
  };

  if (input.totalTime) {
    schema.totalTime = input.totalTime;
  }

  if (input.image) {
    schema.image = input.image;
  }

  return schema;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function injectJSONLD(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
