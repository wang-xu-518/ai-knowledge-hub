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
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "博客 - 企业AI架构师",
  description:
    "AI落地实战案例、医疗AI、外贸AI、企业RAG知识库建设的深度观察与实践分享。",
};

const articleSchema = generateArticleSchema({
  headline: "博客 - 企业AI架构师",
  description:
    "AI落地实战案例、医疗AI、外贸AI、企业RAG知识库建设的深度观察与实践分享。",
  url: `${SITE_URL}/blog`,
  datePublished: "2024-01-01",
});

const faqItems = [
  {
    question: "博客主要分享什么内容？",
    answer:
      "博客主要分享医疗AI落地实战、外贸AI解决方案、企业RAG知识库建设、AI工具评测等内容，基于20年的企业开发和医疗IT经验。",
  },
  {
    question: "如何联系作者？",
    answer:
      "可以通过网站 https://myinai.com/ 联系作者，或者查看服务页面了解更多合作方式。",
  },
  {
    question: "文章可以转载吗？",
    answer:
      "转载请注明出处和原文链接，如有商业使用需求请提前联系作者获得授权。",
  },
];

export default function BlogPage() {
  const posts = [
    {
      slug: "ai-family-doctor-landing",
      title: "AI家庭医生正在落地：一位基层医疗信息化老兵的观察",
      description: "基层医疗家庭医生签约率背后的困境与AI解决方案：从被动响应到主动管理，如何用AI工具提升家庭医生服务效率",
      datePublished: "2026-05-31",
      tags: ["家庭医生", "基层医疗", "医疗AI", "慢病管理", "公卫服务"],
      author: "扫地僧",
    },
  ];

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
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
          <Badge variant="secondary" className="mb-4">
            博客
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            深度观察与实战分享
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            基于20年企业开发和医疗IT经验，分享AI落地实战案例、医疗AI、外贸AI、企业RAG知识库建设。
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">暂无文章，敬请期待...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                  <Card className="transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.datePublished}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-blue-600 font-medium">
                          <span>阅读全文</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <FAQSection items={faqItems} title="博客常见问题" />
      </div>
    </div>
  );
}
