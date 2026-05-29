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
  HeartPulse,
  Stethoscope,
  Brain,
  BookOpen,
  FolderOpen,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "医疗AI - 企业AI架构师",
  description:
    "医疗AI落地解决方案：AI辅助诊断、智能导诊、病历质控、医疗知识库。基于10年医疗信息化经验，帮助医疗机构实现AI转型。",
};

const articleSchema = generateArticleSchema({
  headline: "医疗AI落地 - 企业AI架构师",
  description:
    "医疗AI落地解决方案：AI辅助诊断、智能导诊、病历质控、医疗知识库。",
  url: `${SITE_URL}/healthcare`,
  datePublished: "2024-01-01",
});

const sections = [
  {
    title: "AI工具",
    description: "发现适用于诊断、患者监护和临床工作流的AI工具。",
    icon: Stethoscope,
    href: "/healthcare/ai-tools",
  },
  {
    title: "概念",
    description: "学习医疗AI核心概念：电子病历、临床决策支持、医学影像、合规要求。",
    icon: Brain,
    href: "/healthcare/concepts",
  },
  {
    title: "指南",
    description: "在医疗机构中实施AI的分步指南。",
    icon: BookOpen,
    href: "/healthcare/guides",
  },
  {
    title: "案例",
    description: "医疗机构AI落地的真实案例。",
    icon: FolderOpen,
    href: "/healthcare/cases",
  },
];

const highlights = [
  {
    title: "临床决策支持（CDS）",
    description:
      "分析患者数据以协助医生进行诊断和治疗建议的AI系统。",
  },
  {
    title: "医学影像AI",
    description:
      "在X光、CT、MRI中检测异常的人工智能模型，准确率接近放射科医生水平。",
  },
  {
    title: "合规解决方案",
    description:
      "以健康数据隐私为核心设计的AI工具，确保患者信息保护和监管合规。",
  },
];

const faqItems = [
  {
    question: "什么是临床决策支持（CDS）？",
    answer:
      "临床决策支持（CDS）是指分析数据以帮助医疗提供者做出临床决策的健康信息系统，包括警报、提醒和诊断建议。",
  },
  {
    question: "AI如何改善医学影像？",
    answer:
      "AI医学影像利用计算机视觉分析X光、CT和MRI，帮助放射科医生更快、更准确地检测异常。",
  },
  {
    question: "医疗AI是否符合数据安全合规？",
    answer:
      "许多医疗AI解决方案都设计为符合合规要求，但必须验证每个供应商的数据处理实践、加密标准和业务合作协议。",
  },
  {
    question: "基层医疗AI的投资回报率如何？",
    answer:
      "根据行业研究，基层医疗中的AI实施可以减少30-40%的管理负担，并将诊断准确率提高15-25%，具体取决于使用场景。",
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
            医疗AI
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            医疗AI落地
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            专为基层医疗机构、诊所和医院管理者设计的AI解决方案。
            改善患者治疗效果，提升运营效率。
          </p>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            探索医疗AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            浏览工具、概念、指南和真实案例。
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
                    <Link href={section.href} className="inline-flex items-center justify-center rounded-lg border border-input bg-background hover:bg-muted hover:text-foreground px-3 py-1.5 text-sm font-medium">探索 <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
            核心关注领域
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            正在改变医疗服务交付的关键AI应用。
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
        <FAQSection items={faqItems} title="医疗AI常见问题" />
      </div>
    </div>
  );
}
