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
  ArrowRight,
  Layers,
  User,
  Award,
  Brain,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "企业AI架构师 | 医疗AI·外贸AI·企业RAG知识库",
  description:
    "20年企业IT经验，专注医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设。帮助企业从0到1实现AI转型。",
};

const articleSchema = generateArticleSchema({
  headline: "企业AI架构师 | 医疗AI·外贸AI·企业RAG知识库",
  description:
    "20年企业IT经验，专注医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设。",
  url: SITE_URL,
  datePublished: "2024-01-01",
});

const capabilities = [
  {
    id: "healthcare",
    title: "医疗IT",
    subtitle: "10年深耕",
    description:
      "深耕医疗信息化10年，熟悉医院业务流程、HIS/LIS/PACS系统，擅长将AI技术落地到基层医疗机构。",
    icon: HeartPulse,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    id: "dev",
    title: "日本企业开发",
    subtitle: "10年积淀",
    description:
      "10年日本企业软件开发经验，精通企业级系统架构、敏捷开发、项目管理，具备跨文化技术沟通能力。",
    icon: Layers,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    id: "rag",
    title: "企业RAG",
    subtitle: "知识库建设",
    description:
      "专注企业RAG（检索增强生成）知识库架构设计与实施，帮助企业构建私有AI知识助手。",
    icon: Database,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    id: "eval",
    title: "AI工具评测",
    subtitle: "选型顾问",
    description:
      "持续跟踪国内外AI工具发展，为企业提供AI工具选型、评测、落地路径规划服务。",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
];

const services = [
  {
    title: "医疗AI落地",
    description:
      "面向基层医疗机构和医院，提供AI辅助诊断、智能导诊、病历质控、医疗知识库等解决方案。",
    icon: HeartPulse,
    href: "/healthcare",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    title: "外贸企业AI",
    description:
      "为外贸企业提供AI翻译、智能客服、市场分析、供应链优化等一站式AI转型方案。",
    icon: Globe,
    href: "/trade",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "企业RAG知识库",
    description:
      "基于企业私有数据，构建安全可控的AI知识问答系统，实现文档智能检索与知识管理。",
    icon: Brain,
    href: "/services",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

const quickLinks = [
  {
    title: "AI概念",
    description: "系统学习AI核心概念与技术术语。",
    icon: Lightbulb,
    href: "/concepts",
  },
  {
    title: "AI工具",
    description: "发现并评估适合企业的AI工具。",
    icon: Wrench,
    href: "/tools",
  },
  {
    title: "关于我",
    description: "了解我的20年技术履历与项目经验。",
    icon: User,
    href: "/about",
  },
];

const faqItems = [
  {
    question: "您提供哪些AI咨询服务？",
    answer:
      "我提供三类核心服务：医疗AI落地（辅助诊断、智能导诊、病历质控）、外贸企业AI解决方案（AI翻译、智能客服、市场分析）、企业RAG知识库建设（私有文档智能检索与问答）。",
  },
  {
    question: "企业AI转型的第一步应该怎么做？",
    answer:
      "建议从「痛点识别」开始：梳理当前业务流程中的低效环节，评估AI技术的适用性，选择1-2个高价值、低风险的场景进行试点，验证ROI后再逐步扩展。",
  },
  {
    question: "医疗AI落地需要满足哪些合规要求？",
    answer:
      "医疗AI需满足数据安全合规（等保2.0、数据安全法）、医疗器械监管（如适用NMPA认证）、以及医院内部的信息安全与隐私保护要求。我在医疗IT领域10年经验可帮助客户规避合规风险。",
  },
  {
    question: "企业RAG知识库与通用大模型有什么区别？",
    answer:
      "通用大模型基于公开互联网数据训练，对企业私有知识不了解。RAG（检索增强生成）技术将企业私有文档、知识库与大模型结合，实现「基于企业知识的智能问答」，且数据不出域，安全可控。",
  },
  {
    question: "如何联系您进行咨询？",
    answer:
      "您可以通过网站底部的联系方式或社交媒体直接联系我。初次咨询免费，我会根据您的业务场景提供初步的AI落地建议和路径规划。",
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
            企业AI架构师
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            让企业AI落地更简单
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            20年企业IT经验 · 10年医疗信息化 · 10年日本企业开发
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground">
            专注医疗AI、外贸AI、企业RAG知识库建设，帮助企业从0到1实现AI转型
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium h-9 gap-1.5"
            >
              了解服务
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background hover:bg-muted hover:text-foreground px-4 py-2 text-sm font-medium h-9 gap-1.5"
            >
              关于我
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Matrix */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              核心能力矩阵
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              横跨医疗、外贸、企业IT三大领域的AI落地能力
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={cap.id}
                  className={`group relative overflow-hidden transition-all hover:shadow-lg ${cap.borderColor}`}
                >
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${cap.bgColor}`}
                    >
                      <Icon className={`h-6 w-6 ${cap.color}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-2xl">{cap.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {cap.subtitle}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {cap.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Entry */}
      <section className="w-full border-t bg-muted/20 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              服务领域
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              三大核心服务方向，覆盖企业AI转型全链路
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.bgColor}`}
                    >
                      <Icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={service.href}
                      className="inline-flex w-full items-center justify-center rounded-lg border border-input bg-background hover:bg-muted hover:text-foreground px-3 py-1.5 text-sm font-medium gap-1.5"
                    >
                      了解详情
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              快速导航
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              探索更多AI知识与资源
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
                    <Link
                      href={link.href}
                      className="inline-flex items-center justify-center rounded-md hover:bg-muted px-2 py-1 text-sm font-medium gap-1.5"
                    >
                      查看详情
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FAQSection items={faqItems} title="常见问题" />
      </div>
    </div>
  );
}
