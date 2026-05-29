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
  title: "AI工具导航 - 企业AI架构师",
  description:
    "AI工具导航：为医疗和外贸行业精选AI工具，比较功能、价格和适用场景，找到适合您的解决方案。",
};

const articleSchema = generateArticleSchema({
  headline: "AI工具导航 - 企业AI架构师",
  description:
    "AI工具导航：为医疗和外贸行业精选AI工具，比较功能、价格和适用场景。",
  url: `${SITE_URL}/tools`,
  datePublished: "2024-01-01",
});

const healthcareTools = [
  {
    name: "医学影像AI",
    category: "医学影像",
    description:
      "AI驱动的放射学工具，检测X光、CT和MRI中的异常。",
    icon: Zap,
    useCase: "基层诊所，放射科",
  },
  {
    name: "临床NLP引擎",
    category: "数据处理",
    description:
      "从临床笔记和EHR数据中提取洞察的自然语言处理工具。",
    icon: BarChart3,
    useCase: "医疗系统，科研机构",
  },
];

const tradeTools = [
  {
    name: "需求预测平台",
    category: "分析",
    description:
      "用于库存规划和供应链优化的ML驱动的需求预测。",
    icon: BarChart3,
    useCase: "电商，零售，制造",
  },
  {
    name: "海关自动化套件",
    category: "合规",
    description:
      "自动化的HS编码分类、制裁筛查和海关文档处理。",
    icon: Package,
    useCase: "进口商，出口商，货运代理",
  },
];

const comparisonCategories = [
  {
    title: "医疗AI工具",
    icon: HeartPulse,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    tools: healthcareTools,
  },
  {
    title: "外贸AI工具",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    tools: tradeTools,
  },
];

const faqItems = [
  {
    question: "工具是如何评估的？",
    answer:
      "我们从功能、定价透明度、易于集成、合规认证（HIPAA、SOC 2）和真实用户反馈等方面评估AI工具。",
  },
  {
    question: "每个工具包含哪些信息？",
    answer:
      "每个工具页面包含功能概述、定价详情、适用场景、竞品比较和专门的FAQ部分。",
  },
  {
    question: "这些工具适合小型企业吗？",
    answer:
      "我们会标注每个工具的目标企业规模。许多AI工具现在提供适合小型诊所和初创企业的分层定价。",
  },
  {
    question: "工具目录更新频率是多少？",
    answer:
      "我们每季度审查和更新目录，以反映新产品发布、价格变化和用户评价。",
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
            工具导航
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            AI工具导航
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            为医疗和外贸行业发现和比较AI工具。
            为您的特定需求找到正确的解决方案。
          </p>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              按行业浏览
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              为医疗和外贸专业人员精选的工具。
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
                              <span>适用场景：{tool.useCase}</span>
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
              评估标准
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              我们如何评估和分类AI工具。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "功能",
                description: "核心功能和能力",
                icon: Zap,
              },
              {
                title: "定价",
                description: "透明的成本结构",
                icon: DollarSign,
              },
              {
                title: "适用场景",
                description: "适用场景和行业",
                icon: Users,
              },
              {
                title: "合规",
                description: "安全和监管认证",
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
        <FAQSection items={faqItems} title="工具导航常见问题" />
      </div>
    </div>
  );
}
