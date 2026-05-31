import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, injectJSONLD } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI家庭医生正在落地：一位基层医疗信息化老兵的观察",
  description: "基层医疗家庭医生签约率背后的困境与AI解决方案：从被动响应到主动管理，如何用AI工具提升家庭医生服务效率",
};

export default function BlogPostPage() {
  const articleSchema = generateArticleSchema({
    headline: "AI家庭医生正在落地：一位基层医疗信息化老兵的观察",
    description: "基层医疗家庭医生签约率背后的困境与AI解决方案：从被动响应到主动管理，如何用AI工具提升家庭医生服务效率",
    url: "https://myinai.com/blog/ai-family-doctor-landing",
    datePublished: "2026-05-31",
    dateModified: "2026-05-31",
  });

  const faqSchema = generateFAQSchema([
    {
      question: "家庭医生签约率要求是多少？",
      answer: "国家卫健委要求家庭医生签约率不低于45%。",
    },
    {
      question: "家庭医生签约服务的三个根本问题是什么？",
      answer: "1. 信息断层：居民在家测的血压血糖，医生看不到；2. 触达成本高：医生想主动关心2000个人不现实；3. 重复劳动多：高血压患者的管理流程是标准化的，但每个患者都要医生亲自动手盯。",
    },
    {
      question: "基层医疗AI的三个创业机会是什么？",
      answer: "1. 数据入口硬件：蓝牙血压计、血糖仪、智能药盒等；2. 公卫流程SaaS：给社区卫生中心提供标准化的公卫工作管理平台；3. AI辅助决策工具：帮家庭医生做风险评估、用药建议、随访计划生成。",
    },
  ]);
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: injectJSONLD(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: injectJSONLD(faqSchema) }}
      />

      {/* Back Link */}
      <div className="border-b">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回博客列表
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="w-full px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {["家庭医生", "基层医疗", "医疗AI", "慢病管理", "公卫服务"].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl mb-6">
            AI家庭医生正在落地：一位基层医疗信息化老兵的观察
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>2026-05-31</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>扫地僧</span>
            </div>
          </div>
        </div>
      </header>

      <Separator />

      {/* Article Content */}
      <article className="w-full px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl prose prose-slate max-w-none">
          <p>
            我去北京某社区卫生服务中心调研那天，墙上贴着「家庭医生签约服务」的海报。主任告诉我一句话：签了，但居民不来。
          </p>
          <p>
            一个家庭医生要对接2000个签约居民。高血压、糖尿病、老年人体检、妇女儿童管理……就算一天跑8小时，也跑不过来。
          </p>
          <p>
            这不是新鲜困境。签而不约、签而不服务，是基层医疗十几年都没解决的老问题。
          </p>
          <p>
            但最近两年，我开始看到变化。
          </p>

          <hr />

          <h2>家庭医生签约率背后的真相</h2>
          <p>
            国家卫健委要求家庭医生签约率不低于45%。这个数字背后藏着什么？
          </p>
          <p>
            藏着两个问题。第一，签约是完成了，但服务跟不上。第二，家庭医生的能力边界在哪里？
          </p>
          <p>
            我调研过十几个社区医院，发现一个共性问题：家庭医生的工作状态是「被动式响应」——等居民找上门，或者等慢病指标异常了再处理。平时没有触达手段，不知道签约居民的状态变化。
          </p>
          <p>这种模式有三个根本问题：</p>
          <ul>
            <li><strong>信息断层</strong>：居民在家测的血压血糖，医生看不到。等患者来的时候，数据已经滞后了。</li>
            <li><strong>触达成本高</strong>：医生想主动关心2000个人，一个个打电话现实吗？不现实。</li>
            <li><strong>重复劳动多</strong>：高血压患者的管理流程是标准化的，但每个患者都要医生亲自动手盯。</li>
          </ul>
          <p>
            这不是医生不努力，是工作模式本身有问题。
          </p>

          <hr />

          <h2>效率困境怎么破</h2>
          <p>
            我见过的做得好的社区医院，都在做一件事：把服务流程标准化，然后用工具放大。
          </p>
          <p>家庭医生签约居民的服务，本质上是一套标准化流程：</p>
          <ol>
            <li><strong>采集数据</strong>（血压血糖、生活习惯、用药情况）</li>
            <li><strong>评估风险</strong>（高危、中危、低危）</li>
            <li><strong>分级干预</strong>（高危一周一联系，中危一月一联系，低危一季度一联系）</li>
            <li><strong>记录归档</strong>（每次沟通的结果要沉淀到档案里）</li>
          </ol>
          <p>
            这套流程以前靠人盯，现在可以靠系统。
          </p>
          <p>
            我接触过一个案例：某东部城市社区卫生中心，用一套AI辅助系统，把家庭医生的工作流重构了。系统会自动给高血压患者发随访提醒，居民在家测完血压数据自动上传，异常情况系统自动预警，医生只需要处理预警就行。
          </p>
          <p>
            一年下来，高血压控制率从62%提升到了79%。
          </p>
          <p>
            医生自己的感受是：「以前我是消防员，天天灭火。现在我是指挥官，系统帮我盯着，我处理真正重要的事。」
          </p>

          <hr />

          <h2>一个可复制的工作流</h2>
          <p>具体怎么做的？我还原一下他们的工作流。</p>

          <h3>第一步：数据入口标准化</h3>
          <p>
            给签约居民配了蓝牙血压计，居民在家测量，数据自动同步到系统里。不用手动记录，不用打电话汇报。
          </p>

          <h3>第二步：风险分层自动化</h3>
          <p>
            系统根据连续数据自动评估风险等级。连续三次血压超标，自动标记为高危患者，推送给家庭医生。
          </p>

          <h3>第三步：随访任务生成</h3>
          <p>
            系统根据风险等级自动生成随访任务，推送到医生的工作台。医生每天打开工作台，就能看到今天要联系谁、联系什么内容。
          </p>

          <h3>第四步：闭环记录</h3>
          <p>
            每次随访的结果在系统里记录，数据沉淀到患者的健康档案里。下次随访的时候，系统能调出历史记录，医生不是从零开始。
          </p>

          <p>
            这套流程跑顺了之后，一个家庭医生管理2000个签约居民，从不可能变成了勉强可能。
          </p>

          <hr />

          <h2>基层医疗AI的三条创业机会</h2>
          <p>说完案例，说说我看到的三个方向。</p>

          <h3>机会一：数据入口硬件</h3>
          <p>
            蓝牙血压计、血糖仪、智能药盒……这些硬件是基层医疗AI的数据入口。硬件铺下去，数据才能流进来。这个方向已经有企业在做，但渗透率还不高。
          </p>

          <h3>机会二：公卫流程SaaS</h3>
          <p>
            给社区卫生中心提供标准化的公卫工作管理平台，把慢病管理、妇儿童管理、老年人体检这些流程线上化。这个方向已经有成熟产品在跑，但体验参差不齐，还有升级空间。
          </p>

          <h3>机会三：AI辅助决策工具</h3>
          <p>
            帮家庭医生做风险评估、用药建议、随访计划生成的AI工具。这个方向最难，但价值也最大。谁能做出真正好用的基层医疗AI辅助决策工具，谁就卡住了这个行业的核心节点。
          </p>

          <hr />

          <h2>写到最后</h2>
          <p>
            家庭医生签约这件事，政策推了十几年。签而不约、签而不服务，是长期存在的困境。这个困境不是靠情怀能解决的，是要靠实实在在的效率提升。
          </p>
          <p>
            AI不能替代家庭医生，但能让一个家庭医生从「拼命管50个人」变成「系统管2000个人」。
          </p>
          <p>
            如果你在基层医疗机构工作，或者在关注医疗AI赛道，欢迎和我交流。我在做的，正是把这些落地方案系统化、标准化，让更多基层医疗机构能用起来。
          </p>

          <hr />

          <h2>联系方式</h2>
          <ul>
            <li>网站：<a href="https://myinai.com/">https://myinai.com/</a></li>
            <li>服务：医疗AI落地 | 外贸AI | 企业RAG知识库</li>
          </ul>

          <hr />

          <h2>FAQ</h2>

          <h3>家庭医生签约率要求是多少？</h3>
          <p>国家卫健委要求家庭医生签约率不低于45%。</p>

          <h3>家庭医生签约服务的三个根本问题是什么？</h3>
          <p>
            1. 信息断层：居民在家测的血压血糖，医生看不到；<br />
            2. 触达成本高：医生想主动关心2000个人不现实；<br />
            3. 重复劳动多：高血压患者的管理流程是标准化的，但每个患者都要医生亲自动手盯。
          </p>

          <h3>基层医疗AI的三个创业机会是什么？</h3>
          <p>
            1. 数据入口硬件：蓝牙血压计、血糖仪、智能药盒等；<br />
            2. 公卫流程SaaS：给社区卫生中心提供标准化的公卫工作管理平台；<br />
            3. AI辅助决策工具：帮家庭医生做风险评估、用药建议、随访计划生成。
          </p>

          <hr />

          <h2>相关概念</h2>
          <ul>
            <li><Link href="/healthcare">医疗AI</Link></li>
          </ul>
        </div>
      </article>
    </div>
  );
}
