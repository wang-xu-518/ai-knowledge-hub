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
import {
  Wrench,
  HeartPulse,
  Globe,
  Zap,
  DollarSign,
  Users,
  BarChart3,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Tools - AI Knowledge Hub",
  description:
    "Navigate AI tools for healthcare and trade. Compare features, pricing, and use cases.",
};

const articleSchema = generateArticleSchema({
  headline: "AI Tools Directory - AI Knowledge Hub",
  description:
    "Navigate AI tools for healthcare and trade. Compare features, pricing, and use cases.",
  url: `${SITE_URL}/tools`,
  datePublished: "2024-01-01",
});

const healthcareTools = [
  {
    name: "Diagnostic Imaging AI",
    category: "Medical Imaging",
    description:
      "AI-powered radiology tools that detect anomalies in X-rays, CT scans, and MRIs.",
    icon: Zap,
    useCase: "Primary care clinics, radiology departments",
  },
  {
    name: "Clinical NLP Engine",
    category: "Data Processing",
    description:
      "Natural language processing tools for extracting insights from clinical notes and EHR data.",
    icon: BarChart3,
    useCase: "Health systems, research institutions",
  },
];

const tradeTools = [
  {
    name: "Demand Forecasting Platform",
    category: "Analytics",
    description:
      "ML-powered demand prediction for inventory planning and supply chain optimization.",
    icon: BarChart3,
    useCase: "E-commerce, retail, manufacturing",
  },
  {
    name: "Customs Automation Suite",
    category: "Compliance",
    description:
      "Automated HS code classification, sanctions screening, and customs documentation.",
    icon: Package,
    useCase: "Importers, exporters, freight forwarders",
  },
];

const comparisonCategories = [
  {
    title: "Healthcare AI Tools",
    icon: HeartPulse,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    tools: healthcareTools,
  },
  {
    title: "Trade AI Tools",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    tools: tradeTools,
  },
];

const faqItems = [
  {
    question: "How are tools evaluated?",
    answer:
      "We evaluate AI tools based on functionality, pricing transparency, ease of integration, compliance certifications (HIPAA, SOC 2), and real-world user feedback.",
  },
  {
    question: "What information is included for each tool?",
    answer:
      "Each tool page includes a feature overview, pricing details, applicable use cases, competitor comparisons, and a dedicated FAQ section.",
  },
  {
    question: "Are these tools recommended for small businesses?",
    answer:
      "We indicate the target business size for each tool. Many AI tools now offer tiered pricing suitable for small clinics and startups.",
  },
  {
    question: "How often is the tools directory updated?",
    answer:
      "We review and update the directory quarterly to reflect new product launches, pricing changes, and user reviews.",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
            <Wrench className="h-8 w-8 text-emerald-600" />
          </div>
          <Badge variant="secondary" className="mb-4">
            Directory
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            AI Tools Directory
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Discover and compare AI tools for healthcare and trade.
            Find the right solution for your specific needs.
          </p>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Browse by Industry
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Curated tools for healthcare and trade professionals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {comparisonCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title}>
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${category.bgColor}`}
                    >
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.tools.map((tool) => {
                      const ToolIcon = tool.icon;
                      return (
                        <Card
                          key={tool.name}
                          className="transition-all hover:shadow-md"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                                  <ToolIcon className="h-4 w-4 text-primary" />
                                </div>
                                <CardTitle className="text-base">
                                  {tool.name}
                                </CardTitle>
                              </div>
                              <Badge variant="outline">{tool.category}</Badge>
                            </div>
                            <CardDescription className="mt-2">
                              {tool.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Users className="h-3.5 w-3.5" />
                              <span>Use case: {tool.useCase}</span>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Evaluation Criteria */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Evaluation Criteria
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              How we assess and categorize AI tools.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Functionality",
                description: "Core features and capabilities",
                icon: Zap,
              },
              {
                title: "Pricing",
                description: "Transparent cost structures",
                icon: DollarSign,
              },
              {
                title: "Use Cases",
                description: "Applicable scenarios and industries",
                icon: Users,
              },
              {
                title: "Compliance",
                description: "Security and regulatory certifications",
                icon: BarChart3,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-0 shadow-none">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FAQSection items={faqItems} title="Tools Directory FAQ" />
      </div>
    </div>
  );
}
