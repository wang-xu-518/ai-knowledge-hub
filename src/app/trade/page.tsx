import type { Metadata } from "next";
import Link from "next/link";
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
import {
  Globe,
  Wrench,
  Brain,
  BookOpen,
  FolderOpen,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trade AI - AI Knowledge Hub",
  description:
    "Discover AI applications in international trade: supply chain optimization, demand forecasting, cross-border e-commerce, and customs compliance.",
};

const articleSchema = generateArticleSchema({
  headline: "Trade AI - AI Knowledge Hub",
  description:
    "Discover AI applications in international trade and cross-border e-commerce.",
  url: `${SITE_URL}/trade`,
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
});

const sections = [
  {
    title: "AI Tools",
    description: "Navigate AI-powered tools for logistics, CRM, marketing automation, and analytics.",
    icon: Wrench,
    href: "/trade/ai-tools",
  },
  {
    title: "Concepts",
    description: "Learn key trade AI concepts: supply chain, demand forecasting, and compliance.",
    icon: Brain,
    href: "/trade/concepts",
  },
  {
    title: "Guides",
    description: "Step-by-step guides for integrating AI into trade operations.",
    icon: BookOpen,
    href: "/trade/guides",
  },
  {
    title: "Cases",
    description: "Real-world case studies of AI adoption in trade and e-commerce.",
    icon: FolderOpen,
    href: "/trade/cases",
  },
];

const highlights = [
  {
    title: "Supply Chain Optimization",
    description:
      "AI algorithms that reduce logistics costs by 15-30% through route optimization, inventory balancing, and demand prediction.",
  },
  {
    title: "Demand Forecasting",
    description:
      "Machine learning models that analyze historical data and market signals to predict future demand with 85-95% accuracy.",
  },
  {
    title: "Customs & Compliance",
    description:
      "Automated sanctions screening, tariff classification, and trade compliance verification using NLP and rules engines.",
  },
];

const faqItems = [
  {
    question: "How does AI optimize supply chains?",
    answer:
      "AI optimizes supply chains by analyzing historical data, weather patterns, and market trends to predict demand, optimize inventory levels, and recommend the most efficient shipping routes.",
  },
  {
    question: "What is demand forecasting in trade?",
    answer:
      "Demand forecasting uses machine learning to predict future customer demand based on historical sales data, seasonality, and external factors, enabling better inventory and production planning.",
  },
  {
    question: "Can AI help with customs clearance?",
    answer:
      "Yes, AI-powered customs tools can automate HS code classification, flag potential compliance issues, and streamline documentation, reducing clearance time by up to 50%.",
  },
  {
    question: "What is the ROI of AI for cross-border e-commerce?",
    answer:
      "According to industry data, AI implementation in cross-border e-commerce can increase conversion rates by 20-35% and reduce operational costs by 25-40%.",
  },
];

export default function TradePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
          <Badge variant="secondary" className="mb-4">
            International Trade
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Trade AI
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            AI solutions for exporters, importers, and cross-border e-commerce operators.
            Optimize your supply chain and accelerate global growth.
          </p>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Explore Trade AI
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse tools, concepts, guides, and real-world cases.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card
                  key={section.title}
                  className="group transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={section.href} className="inline-flex items-center justify-center rounded-lg border border-input bg-background hover:bg-muted hover:text-foreground px-3 py-1.5 text-sm font-medium">Explore <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Highlights */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Key Focus Areas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Essential AI applications transforming international trade.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="border-0 shadow-none">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FAQSection items={faqItems} title="Trade AI FAQ" />
      </div>
    </div>
  );
}
