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
  title: "外贸AI - 企业AI架构师",
  description:
    "外贸企业AI解决方案：AI翻译、智能客服、市场分析、供应链优化。帮助外贸企业实现AI驱动的跨境业务增长。",
};

const articleSchema = generateArticleSchema({
  headline: "外贸AI解决方案 - 企业AI架构师",
  description:
    "外贸企业AI解决方案：AI翻译、智能客服、市场分析、供应链优化。",
  url: `${SITE_URL}/trade`,
  datePublished: "2024-01-01",
});

const sections = [
  {
    title: "AI工具",
    description: "发现适用于物流、CRM、营销自动化和分析的AI工具。",
    icon: Wrench,
    href: "/trade/ai-tools",
  },
  {
    title: "概念",
    description: "学习外贸AI核心概念：供应链、需求预测和合规。",
    icon: Brain,
    href: "/trade/concepts",
  },
  {
    title: "指南",
    description: "将AI集成到外贸业务中的分步指南。",
    icon: BookOpen,
    href: "/trade/guides",
  },
  {
    title: "案例",
    description: "外贸和电商领域AI落地的真实案例。",
    icon: FolderOpen,
    href: "/trade/cases",
  },
];

const highlights = [
  {
    title: "供应链优化",
    description:
      "通过路线优化、库存平衡和需求预测，将物流成本降低15-30%的AI算法。",
  },
  {
    title: "需求预测",
    description:
      "分析历史数据和市场信号，以85-95%的准确率预测未来需求的机器学习模型。",
  },
  {
    title: "海关与合规",
    description:
      "使用NLP和规则引擎实现自动化的制裁筛查、关税分类和贸易合规验证。",
  },
];

const faqItems = [
  {
    question: "AI如何优化供应链？",
    answer:
      "AI通过分析历史数据、天气模式和市场趋势来预测需求、优化库存水平并推荐最高效的运输路线，从而优化供应链。",
  },
  {
    question: "外贸中的需求预测是什么？",
    answer:
      "需求预测使用机器学习基于历史销售数据、季节性和外部因素预测未来客户需求，从而实现更好的库存和生产规划。",
  },
  {
    question: "AI可以帮助海关清关吗？",
    answer:
      "是的，AI驱动的海关工具可以自动化HS编码分类、标记潜在合规问题并简化文档处理，将清关时间缩短多达50%。",
  },
  {
    question: "跨境电商AI的投资回报率如何？",
    answer:
      "根据行业数据，跨境电商中的AI实施可以将转化率提高20-35%，并将运营成本降低25-40%。",
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
            外贸AI
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            外贸AI解决方案
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            为出口商、进口商和跨境电商运营者提供的AI解决方案。
            优化供应链，加速全球业务增长。
          </p>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            探索外贸AI
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
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-600" />
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
            正在改变国际贸易的关键AI应用。
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
        <FAQSection items={faqItems} title="外贸AI常见问题" />
      </div>
    </div>
  );
}
