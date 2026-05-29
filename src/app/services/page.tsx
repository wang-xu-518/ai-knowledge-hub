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
  HeartPulse,
  Globe,
  Database,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  FileText,
  BrainCircuit,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务 - 企业AI架构师",
  description:
    "提供医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设三大核心服务，帮助企业从0到1实现AI转型。",
};

const articleSchema = generateArticleSchema({
  headline: "服务 - 企业AI架构师",
  description:
    "提供医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设三大核心服务。",
  url: `${SITE_URL}/services`,
  datePublished: "2024-01-01",
});

const services = [
  {
    id: "healthcare",
    title: "医疗AI落地",
    subtitle: "10年医疗IT经验",
    description:
      "基于10年医疗信息化经验，为基层医疗机构和医院提供可落地的AI解决方案。从需求分析到系统上线，全程陪伴。",
    icon: HeartPulse,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    features: [
      {
        icon: Stethoscope,
        title: "AI辅助诊断",
        description: "基于医学影像和病历数据的智能辅助诊断系统",
      },
      {
        icon: MessageSquare,
        title: "智能导诊",
        description: "AI驱动的患者分诊与科室推荐系统",
      },
      {
        icon: FileText,
        title: "病历质控",
        description: "自动化病历完整性检查与质量评分",
      },
      {
        icon: BrainCircuit,
        title: "医疗知识库",
        description: "基于医院私有数据的RAG知识问答系统",
      },
    ],
  },
  {
    id: "trade",
    title: "外贸企业AI",
    subtitle: "跨境业务赋能",
    description:
      "为外贸企业和跨境电商提供一站式AI解决方案，覆盖营销、客服、翻译、分析全链路。",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: [
      {
        icon: MessageSquare,
        title: "AI智能客服",
        description: "7x24小时多语言智能客服，降低人力成本",
      },
      {
        icon: BarChart3,
        title: "市场分析",
        description: "AI驱动的海外市场趋势分析与竞品监控",
      },
      {
        icon: FileText,
        title: "AI翻译",
        description: "专业外贸术语翻译，支持多语种内容本地化",
      },
      {
        icon: BrainCircuit,
        title: "供应链优化",
        description: "基于AI的需求预测与库存优化建议",
      },
    ],
  },
  {
    id: "rag",
    title: "企业RAG知识库",
    subtitle: "私有AI助手",
    description:
      "基于企业私有数据，构建安全可控的AI知识问答系统。数据不出域，知识可追溯。",
    icon: Database,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    features: [
      {
        icon: FileText,
        title: "文档智能解析",
        description: "支持PDF、Word、Excel等多格式文档解析与向量化",
      },
      {
        icon: BrainCircuit,
        title: "精准检索问答",
        description: "基于语义检索的知识问答，减少大模型幻觉",
      },
      {
        icon: ShieldCheck,
        title: "数据安全",
        description: "私有化部署，数据不出域，支持权限分级管理",
      },
      {
        icon: Clock,
        title: "持续学习",
        description: "支持新文档自动入库与知识库持续更新",
      },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "需求诊断",
    description: "深入了解业务痛点，评估AI技术适用性",
  },
  {
    step: "02",
    title: "方案设计",
    description: "制定AI落地路径，明确ROI目标",
  },
  {
    step: "03",
    title: "试点验证",
    description: "选择1-2个场景快速试点，验证效果",
  },
  {
    step: "04",
    title: "全面推广",
    description: "基于试点经验，逐步扩展至全业务",
  },
];

const faqItems = [
  {
    question: "医疗AI落地需要多长时间？",
    answer:
      "根据项目复杂度，通常3-6个月可完成试点上线。简单场景（如智能导诊）可能1-2个月即可见效，复杂场景（如AI辅助诊断）需要更长的数据准备和模型调优周期。",
  },
  {
    question: "外贸企业AI的投入产出比如何？",
    answer:
      "根据客户反馈，AI智能客服可降低60-80%的人工客服成本；AI市场分析工具可节省50%以上的市场调研时间。通常3-6个月即可收回初期投入。",
  },
  {
    question: "企业RAG知识库对数据量有要求吗？",
    answer:
      "RAG知识库对数据量没有硬性门槛，几千字的文档也能构建基础问答。但数据量越大、质量越高，问答效果越好。建议至少准备核心业务的100+份文档。",
  },
  {
    question: "是否支持私有化部署？",
    answer:
      "是的，企业RAG知识库支持完全私有化部署，数据不出域。医疗AI方案也遵循医院信息安全要求，支持院内服务器部署或私有云部署。",
  },
  {
    question: "如何开始合作？",
    answer:
      "您可以通过网站联系方式预约免费初步咨询。我会根据您的业务场景进行需求分析，并提供初步的AI落地建议和报价方案。",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <Badge variant="secondary" className="mb-4">
            服务
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            企业AI落地服务
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            三大核心服务方向，覆盖企业AI转型全链路。
            从需求诊断到全面推广，全程陪伴您的AI转型之旅。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id}>
                <Card
                  className={`overflow-hidden transition-all hover:shadow-lg ${service.borderColor}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.bgColor}`}
                        >
                          <Icon className={`h-7 w-7 ${service.color}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-2xl">
                              {service.title}
                            </CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {service.subtitle}
                            </Badge>
                          </div>
                          <CardDescription className="mt-1 text-base max-w-xl">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Link
                        href={`/${service.id === "rag" ? "services" : service.id}`}
                        className="inline-flex items-center justify-center rounded-lg border border-input bg-background hover:bg-muted hover:text-foreground px-3 py-1.5 text-sm font-medium gap-1.5 shrink-0"
                      >
                        了解详情
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div
                            key={feature.title}
                            className="flex gap-3 rounded-lg border p-4"
                          >
                            <div className="mt-0.5 shrink-0">
                              <FeatureIcon
                                className={`h-5 w-5 ${service.color}`}
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      <Separator />

      {/* Process */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              服务流程
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              四步落地法，确保AI项目成功交付
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <Card
                key={item.step}
                className="text-center transition-all hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-3 text-3xl font-bold text-primary/30">
                    {item.step}
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
        <FAQSection items={faqItems} title="常见问题" />
      </div>
    </div>
  );
}
