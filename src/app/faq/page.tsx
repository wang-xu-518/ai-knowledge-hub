import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "常见问题 - 企业AI架构师",
  description:
    "关于医疗AI、外贸AI和企业RAG知识库的常见问题解答。帮助您了解AI落地的关键问题。",
};

const faqItems = [
  {
    question: "什么是医疗AI？",
    answer:
      "医疗AI是指在医疗场景中使用人工智能技术来改善患者护理、诊断和运营效率。涵盖AI辅助诊断、智能导诊、病历质控、医疗知识库等应用。",
  },
  {
    question: "诊所如何实施AI？",
    answer:
      "首先识别痛点，评估解决这些需求的AI解决方案，确保数据安全和合规，然后逐步培训员工。建议从简单场景开始，如智能客服或病历录入辅助。",
  },
  {
    question: "医疗AI的成本是多少？",
    answer:
      "成本差异很大——从每月500元的基础AI工具到每年50万元以上的企业级解决方案不等。根据机构规模和需求选择合适方案。",
  },
  {
    question: "医疗AI安全吗？",
    answer:
      "合规的医疗AI解决方案必须使用加密数据、访问控制和审计日志来保护患者信息。选择有相关认证（如等保三级）的供应商。",
  },
  {
    question: "什么是外贸AI？",
    answer:
      "外贸AI是指使用AI工具来自动化和优化国际业务运营，包括AI翻译、智能客服、市场分析和供应链优化。帮助外贸企业实现AI驱动的跨境业务增长。",
  },
  {
    question: "外贸企业如何使用AI？",
    answer:
      "首先识别语言障碍，实施AI翻译和智能客服工具，然后扩展到AI驱动的分析和营销自动化。持续优化迭代。",
  },
  {
    question: "进出口需要哪些AI工具？",
    answer:
      "必备工具包括：AI翻译（DeepL/谷歌翻译）、AI客服（Intercom/Zendesk）、AI分析（Tableau/Power BI + AI）、AI营销工具。根据业务需求逐步添加工具。",
  },
  {
    question: "如何确保外贸AI合规？",
    answer:
      "与法务团队合作了解每个目标市场的进出口法规，验证AI工具是否符合当地数据保护法律。建议选择有合规经验的供应商。",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative w-full border-b bg-muted/30 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            常见问题
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            关于医疗AI、外贸AI和企业RAG知识库的常见问题解答
          </p>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* 医疗AI */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">医疗AI</CardTitle>
                <CardDescription>
                  关于医疗机构AI落地的常见问题
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.slice(0, 4).map((item, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">{item.question}</h3>
                    <p className="text-muted-foreground text-sm">{item.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 外贸AI */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">外贸AI</CardTitle>
                <CardDescription>
                  关于外贸企业AI解决方案的常见问题
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.slice(4, 8).map((item, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">{item.question}</h3>
                    <p className="text-muted-foreground text-sm">{item.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t bg-muted/20 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">还有其他问题？</h2>
          <p className="text-muted-foreground mb-6">
            如果您有更多关于AI落地的问题，欢迎通过网站联系与我交流。
          </p>
        </div>
      </section>
    </div>
  );
}