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
import { generateArticleSchema } from "@/lib/schema";
import {
  HeartPulse,
  Stethoscope,
  Brain,
  BookOpen,
  FolderOpen,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare AI - AI Knowledge Hub",
  description:
    "Discover AI applications in healthcare: clinical decision support, medical imaging, drug discovery, and telemedicine for primary care providers.",
};

const articleSchema = generateArticleSchema({
  headline: "Healthcare AI - AI Knowledge Hub",
  description:
    "Discover AI applications in healthcare for primary care providers.",
  url: "https://aiknowledgehub.com/healthcare",
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
});

const sections = [
  {
    title: "AI Tools",
    description: "Navigate AI-powered tools for diagnostics, patient monitoring, and clinical workflows.",
    icon: Stethoscope,
    href: "/healthcare/ai-tools",
  },
  {
    title: "Concepts",
    description: "Learn key healthcare AI concepts: EHR, CDS, medical imaging, and compliance.",
    icon: Brain,
    href: "/healthcare/concepts",
  },
  {
    title: "Guides",
    description: "Step-by-step guides for implementing AI in primary care settings.",
    icon: BookOpen,
    href: "/healthcare/guides",
  },
  {
    title: "Cases",
    description: "Real-world case studies of AI adoption in healthcare organizations.",
    icon: FolderOpen,
    href: "/healthcare/cases",
  },
];

const highlights = [
  {
    title: "Clinical Decision Support (CDS)",
    description:
      "AI systems that analyze patient data to assist providers with diagnosis and treatment recommendations.",
  },
  {
    title: "Medical Imaging AI",
    description:
      "Computer vision models that detect abnormalities in X-rays, CT scans, and MRIs with radiologist-level accuracy.",
  },
  {
    title: "HIPAA-Compliant Solutions",
    description:
      "AI tools designed with health data privacy in mind, ensuring PHI protection and regulatory compliance.",
  },
];

const faqItems = [
  {
    question: "What is Clinical Decision Support (CDS)?",
    answer:
      "Clinical Decision Support (CDS) refers to health IT systems that analyze data to help healthcare providers make clinical decisions, including alerts, reminders, and diagnostic suggestions.",
  },
  {
    question: "How does AI improve medical imaging?",
    answer:
      "AI-powered medical imaging uses computer vision to analyze X-rays, CT scans, and MRIs, helping radiologists detect abnormalities faster and with greater accuracy.",
  },
  {
    question: "Is AI in healthcare HIPAA-compliant?",
    answer:
      "Many AI healthcare solutions are designed to be HIPAA-compliant, but it's essential to verify each vendor's data handling practices, encryption standards, and Business Associate Agreements (BAAs).",
  },
  {
    question: "What is the ROI of AI for primary care?",
    answer:
      "According to industry studies, AI implementation in primary care can reduce administrative burden by 30-40% and improve diagnostic accuracy by 15-25%, depending on the use case.",
  },
];

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100">
            <HeartPulse className="h-8 w-8 text-rose-600" />
          </div>
          <Badge variant="secondary" className="mb-4">
            Healthcare
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Healthcare AI
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            AI solutions designed for primary care providers, clinics, and healthcare administrators.
            Improve patient outcomes and operational efficiency.
          </p>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Explore Healthcare AI
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
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100">
                      <Icon className="h-5 w-5 text-rose-600" />
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
              Essential AI applications transforming healthcare delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="border-0 shadow-none">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <ShieldCheck className="h-5 w-5 text-primary" />
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
        <FAQSection items={faqItems} title="Healthcare AI FAQ" />
      </div>
    </div>
  );
}
