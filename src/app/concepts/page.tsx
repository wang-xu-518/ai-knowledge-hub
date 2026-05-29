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
  title: "AI概念库 - 企业AI架构师",
  description:
    "AI核心概念库：涵盖通用AI、医疗AI、外贸AI的专业术语定义，帮助理解AI技术原理与应用场景。",
};

const articleSchema = generateArticleSchema({
  headline: "AI概念库 - 企业AI架构师",
  description:
    "AI核心概念库：涵盖通用AI、医疗AI、外贸AI的专业术语定义。",
  url: `${SITE_URL}/concepts`,
  datePublished: "2024-01-01",
});

const industries = [
  {
    key: "general" as const,
    title: "通用AI",
    description: "适用于各行业的核心AI和机器学习概念。",
    icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    key: "healthcare" as const,
    title: "医疗AI",
    description: "医疗服务、合规和临床应用相关的AI概念。",
    icon: HeartPulse,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    key: "trade" as const,
    title: "外贸AI",
    description: "供应链、物流和国际商务相关的AI概念。",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

const faqItems = [
  {
    question: "什么是大语言模型（LLM）？",
    answer:
      "大语言模型（LLM）是一种在大量文本数据集上训练的人工智能模型，用于理解、生成和推理人类语言。代表性模型包括GPT-4、Claude、LLaMA等。",
  },
  {
    question: "AI和机器学习有什么区别？",
    answer:
      "人工智能（AI）是创造智能机器的广泛领域。机器学习（ML）是AI的一个子集，使系统能够从数据中学习而无需明确编程。",
  },
  {
    question: "什么是RAG（检索增强生成）？",
    answer:
      "检索增强生成（RAG）是一种通过在生成响应前从外部知识库检索相关信息来增强LLM输出的技术，可提高准确性并减少幻觉。",
  },
  {
    question: "概念是如何组织的？",
    answer:
      "概念按行业（通用、医疗、外贸）和类别组织。每个概念包含英文名、中文名、定义和相关术语，便于交叉参考。",
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
            概念库
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            AI概念库
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            为医疗和外贸专业人员提供的全面AI术语词汇表。
            在采用技术之前先理解概念。
          </p>
        </div>
      </section>

      {/* Industry Concept Cards */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              按行业浏览
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              针对您所在领域的概念。
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
                        <span>{terms.length} 个术语，涵盖 {categories.length} 个类别</span>
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
              精选概念
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              每个AI从业者都应该了解的关键术语。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                term: "大语言模型（LLM）",
                category: "核心概念",
                definition:
                  "在大量文本数据集上训练的人工智能模型，用于理解和生成人类语言。",
              },
              {
                term: "电子病历（EHR）",
                category: "医疗系统",
                definition:
                  "患者纸质病历的数字版本，包含病史、诊断和治疗方案。",
              },
              {
                term: "供应链优化",
                category: "外贸AI应用",
                definition:
                  "通过算法和AI改善供应链性能，降低成本并提高效率。",
              },
              {
                term: "检索增强生成（RAG）",
                category: "核心概念",
                definition:
                  "通过从外部知识库检索相关信息来增强LLM输出的技术。",
              },
              {
                term: "临床决策支持（CDS）",
                category: "医疗系统",
                definition:
                  "分析数据以帮助医疗提供者做出临床决策的健康IT系统。",
              },
              {
                term: "需求预测",
                category: "外贸AI应用",
                definition:
                  "使用历史数据和AI模型预测未来客户需求的过程。",
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
        <FAQSection items={faqItems} title="概念常见问题" />
      </div>
    </div>
  );
}
