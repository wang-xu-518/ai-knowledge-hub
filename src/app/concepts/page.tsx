import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FAQSection from "@/components/content/FAQSection";
import { SITE_URL, generateArticleSchema } from "@/lib/schema";
import { getTermsByIndustry } from "@/lib/terms";
import { Lightbulb, HeartPulse, Globe, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Concepts - AI Knowledge Hub",
  description:
    "Comprehensive AI concept library covering general AI, healthcare AI, and trade AI terminology with definitions.",
};

const articleSchema = generateArticleSchema({
  headline: "AI Concepts Library - AI Knowledge Hub",
  description:
    "Comprehensive AI concept library covering general AI, healthcare AI, and trade AI terminology.",
  url: `${SITE_URL}/concepts`,
  datePublished: "2024-01-01",
});

const industries = [
  {
    key: "general" as const,
    title: "General AI",
    description: "Core AI and machine learning concepts applicable across all industries.",
    icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    key: "healthcare" as const,
    title: "Healthcare AI",
    description: "AI concepts specific to healthcare delivery, compliance, and clinical applications.",
    icon: HeartPulse,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    key: "trade" as const,
    title: "Trade AI",
    description: "AI concepts for supply chain, logistics, and international commerce.",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

const faqItems = [
  {
    question: "What is a Large Language Model (LLM)?",
    answer:
      "A Large Language Model (LLM) is a type of AI model trained on vast text datasets to understand, generate, and reason with human language. Examples include GPT-4, Claude, and LLaMA.",
  },
  {
    question: "What is the difference between AI and Machine Learning?",
    answer:
      "Artificial Intelligence (AI) is the broad field of creating intelligent machines. Machine Learning (ML) is a subset of AI that enables systems to learn from data without being explicitly programmed.",
  },
  {
    question: "What is RAG (Retrieval-Augmented Generation)?",
    answer:
      "Retrieval-Augmented Generation (RAG) is a technique that enhances LLM outputs by retrieving relevant information from external knowledge bases before generating responses, improving accuracy and reducing hallucinations.",
  },
  {
    question: "How are concepts organized?",
    answer:
      "Concepts are organized by industry (General, Healthcare, Trade) and category. Each concept includes an English name, Chinese name, definition, and related terms for cross-referencing.",
  },
];

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
            <Lightbulb className="h-8 w-8 text-amber-600" />
          </div>
          <Badge variant="secondary" className="mb-4">
            Knowledge Base
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            AI Concepts Library
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            A comprehensive glossary of AI terminology for healthcare and trade professionals.
            Understand the concepts before adopting the technology.
          </p>
        </div>
      </section>

      {/* Industry Concept Cards */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Browse by Industry
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Concepts tailored to your domain.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const terms = getTermsByIndustry(industry.key);
              const categories = Array.from(
                new Set(terms.map((t) => t.category))
              );

              return (
                <Card key={industry.key} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${industry.bgColor}`}
                    >
                      <Icon className={`h-6 w-6 ${industry.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    <CardDescription className="text-base">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Layers className="h-4 w-4" />
                        <span>{terms.length} terms across {categories.length} categories</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categories.slice(0, 4).map((cat) => (
                          <Badge key={cat} variant="outline">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Featured Terms */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Featured Concepts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Key terms every AI practitioner should know.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                term: "Large Language Model (LLM)",
                category: "Core Concepts",
                definition:
                  "A type of AI model trained on vast text datasets to understand, generate, and reason with human language.",
              },
              {
                term: "Electronic Health Record (EHR)",
                category: "Healthcare Systems",
                definition:
                  "A digital version of a patient's paper chart containing medical history, diagnoses, and treatment plans.",
              },
              {
                term: "Supply Chain Optimization",
                category: "Trade AI Applications",
                definition:
                  "The application of algorithms and AI to improve supply chain performance by reducing costs and increasing efficiency.",
              },
              {
                term: "Retrieval-Augmented Generation (RAG)",
                category: "Core Concepts",
                definition:
                  "A technique that enhances LLM outputs by retrieving relevant information from external knowledge bases.",
              },
              {
                term: "Clinical Decision Support (CDS)",
                category: "Healthcare Systems",
                definition:
                  "Health IT systems that analyze data to help healthcare providers make clinical decisions.",
              },
              {
                term: "Demand Forecasting",
                category: "Trade AI Applications",
                definition:
                  "The process of using historical data and AI models to predict future customer demand.",
              },
            ].map((item) => (
              <Card key={item.term} className="transition-all hover:shadow-md">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-base">{item.term}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.definition}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FAQSection items={faqItems} title="Concepts FAQ" />
      </div>
    </div>
  );
}
