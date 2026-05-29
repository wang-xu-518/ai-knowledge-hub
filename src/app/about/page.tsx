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
  User,
  Briefcase,
  GraduationCap,
  Code2,
  HeartPulse,
  Globe,
  Database,
  Calendar,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "关于我 - 企业AI架构师",
  description:
    "20年企业IT经验，10年日本企业开发，10年医疗信息化。专注医疗AI、外贸AI、企业RAG知识库建设。",
};

const articleSchema = generateArticleSchema({
  headline: "关于我 - 企业AI架构师",
  description:
    "20年企业IT经验，10年日本企业开发，10年医疗信息化。专注医疗AI、外贸AI、企业RAG知识库建设。",
  url: `${SITE_URL}/about`,
  datePublished: "2024-01-01",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "企业AI架构师",
  jobTitle: "企业AI架构师",
  description:
    "20年企业IT经验，专注医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设。",
  url: `${SITE_URL}/about`,
  sameAs: [],
  knowsAbout: [
    "医疗AI",
    "外贸AI",
    "企业RAG知识库",
    "医疗信息化",
    "企业软件开发",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "日本企业开发经历",
  },
  worksFor: {
    "@type": "Organization",
    name: "独立AI顾问",
  },
};

const experiences = [
  {
    period: "2014 - 至今",
    title: "医疗信息化专家 / 技术负责人",
    company: "国内医疗IT企业",
    description:
      "负责医院HIS/LIS/PACS系统架构设计与实施，主导多个三甲医院信息化项目。近年来专注医疗AI落地，包括AI辅助诊断、智能导诊、病历质控等场景的落地实践。",
    icon: HeartPulse,
  },
  {
    period: "2004 - 2014",
    title: "软件工程师 / 项目经理",
    company: "日本企业",
    description:
      "在日本企业从事软件开发10年，参与多个大型企业级系统的设计与开发。精通企业级架构设计、敏捷开发方法论，具备扎实的跨文化技术沟通与项目管理能力。",
    icon: Briefcase,
  },
];

const skills = [
  {
    category: "医疗IT",
    items: ["HIS/LIS/PACS系统", "医疗数据标准", "AI辅助诊断", "病历质控"],
    icon: HeartPulse,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    category: "企业开发",
    items: ["系统架构设计", "敏捷开发", "项目管理", "跨文化沟通"],
    icon: Code2,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    category: "AI技术",
    items: ["RAG知识库", "大模型应用", "AI工具评测", "Prompt工程"],
    icon: Database,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    category: "外贸AI",
    items: ["AI翻译", "智能客服", "市场分析", "供应链优化"],
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

const highlights = [
  {
    title: "20年",
    subtitle: "企业IT经验",
    description: "横跨日本企业开发与国内医疗信息化",
    icon: Calendar,
  },
  {
    title: "10年",
    subtitle: "日本企业开发",
    description: "大型企业级系统架构与项目管理",
    icon: Briefcase,
  },
  {
    title: "10年",
    subtitle: "医疗信息化",
    description: "三甲医院HIS/LIS/PACS系统落地",
    icon: HeartPulse,
  },
];

const faqItems = [
  {
    question: "您的核心优势是什么？",
    answer:
      "我兼具技术深度与行业广度：10年日本企业开发积累了扎实的企业级系统架构能力；10年医疗信息化让我深刻理解医疗行业痛点与合规要求；同时我持续跟踪AI前沿发展，能够将最新AI技术与实际业务场景结合。",
  },
  {
    question: "您服务过哪些类型的客户？",
    answer:
      "我的客户涵盖基层医疗机构、三甲医院、外贸企业、跨境电商、以及希望构建私有AI知识库的传统企业。我会根据客户的规模、预算和技术成熟度提供差异化的解决方案。",
  },
  {
    question: "如何确保AI项目的成功率？",
    answer:
      "我采用「小步快跑、持续验证」的方法论：从1-2个高价值场景试点开始，设定明确的ROI指标，快速验证效果后再扩展。同时，我注重数据质量、合规安全和用户培训，这些都是AI项目成功的关键要素。",
  },
  {
    question: "您提供远程咨询服务吗？",
    answer:
      "是的，我提供远程咨询与实施服务。对于需要现场支持的项目，我也可以根据客户需求安排现场服务。初次咨询免费，欢迎随时联系。",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <User className="h-8 w-8 text-primary" />
          </div>
          <Badge variant="secondary" className="mb-4">
            关于我
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            企业AI架构师
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            20年企业IT经验，专注医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>中国</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>独立AI顾问</span>
            </div>
            <div className="flex items-center gap-1">
              <GraduationCap className="h-4 w-4" />
              <span>持续学习AI前沿</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="text-center transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">{item.title}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {item.subtitle}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Experience */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              职业履历
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              20年横跨日本企业开发与国内医疗信息化的技术积累
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <Card
                  key={exp.period}
                  className="transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription>{exp.company}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              技术栈
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              覆盖医疗、外贸、企业IT的复合型技术能力
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.category}
                  className="transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${skill.bgColor}`}
                      >
                        <Icon className={`h-5 w-5 ${skill.color}`} />
                      </div>
                      <CardTitle className="text-lg">
                        {skill.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FAQSection items={faqItems} title="常见问题" />
      </div>
    </div>
  );
}
