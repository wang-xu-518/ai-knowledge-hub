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
import FAQSection from "@/components/content/FAQSection";
import { SITE_URL, generateArticleSchema } from "@/lib/schema";
import {
  HeartPulse,
  Globe,
  Lightbulb,
  Wrench,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Knowledge Hub - AI for Healthcare & Trade",
  description:
    "Industry-leading AI knowledge hub for healthcare providers and trade professionals. Explore AI tools, concepts, guides, and real-world cases.",
};

const articleSchema = generateArticleSchema({
  headline: "AI Knowledge Hub - AI for Healthcare & Trade",
  description:
    "Industry-leading AI knowledge hub for healthcare providers and trade professionals.",
  url: SITE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
});

const industries = [
  {
    id: "healthcare",
    title: "Healthcare AI",
    description:
      "AI solutions for primary care, clinical decision support, medical imaging, and patient engagement.",
    icon: HeartPulse,
    href: "/healthcare",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    id: "trade",
    title: "Trade AI",
    description:
      "AI-powered tools for cross-border e-commerce, supply chain optimization, demand forecasting, and customs compliance.",
    icon: Globe,
    href: "/trade",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

const quickLinks = [
  {
    title: "Concepts",
    description: "Understand core AI terminology and frameworks.",
    icon: Lightbulb,
    href: "/concepts",
  },
  {
    title: "Tools",
    description: "Navigate AI tools for healthcare and trade.",
    icon: Wrench,
    href: "/tools",
  },
  {
    title: "FAQ",
    description: "Get answers to common AI questions.",
    icon: HelpCircle,
    href: "/faq",
  },
];

const faqItems = [
  {
    question: "What is AI Knowledge Hub?",
    answer:
      "AI Knowledge Hub is an industry-focused knowledge platform that helps healthcare and trade professionals understand, evaluate, and adopt AI technologies.",
  },
  {
    question: "Who is the target audience?",
    answer:
      "Our primary audience includes primary care providers, healthcare administrators, export/import businesses, and cross-border e-commerce operators in North America.",
  },
  {
    question: "Is the content free?",
    answer:
      "Yes, all educational content on AI Knowledge Hub is freely accessible. We aim to democratize AI knowledge across industries.",
  },
  {
    question: "How often is content updated?",
    answer:
      "We update our content regularly to reflect the latest developments in AI technology, industry regulations, and real-world case studies.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-20 md:px-6 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Industry-Focused AI Knowledge
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Navigate AI with Confidence
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Curated AI knowledge for healthcare and trade professionals.
            From concepts to implementation, we guide your AI journey.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/healthcare" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium h-9 gap-1.5">
              Explore Healthcare AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/trade" className="inline-flex items-center justify-center rounded-lg border border-input bg-background hover:bg-muted hover:text-foreground px-4 py-2 text-sm font-medium h-9 gap-1.5">
              Explore Trade AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Entry Points */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Choose Your Industry
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored AI resources for healthcare and international trade.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={industry.id}
                  className={`group relative overflow-hidden transition-all hover:shadow-lg ${industry.borderColor}`}
                >
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
                    <Link href={industry.href} className="inline-flex w-full items-center justify-center rounded-lg border border-input bg-background hover:bg-muted hover:text-foreground px-3 py-1.5 text-sm font-medium gap-1.5">Explore {industry.title}<ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full border-t bg-muted/20 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Quick Access
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Jump to the resources you need.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Card
                  key={link.title}
                  className="group transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={link.href} className="inline-flex items-center justify-center rounded-md hover:bg-muted px-2 py-1 text-sm font-medium gap-1.5">Learn more<ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
