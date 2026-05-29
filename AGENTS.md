# AI Knowledge Hub - AGENTS.md

## 项目概述
AI行业知识站，覆盖基层医疗和外贸两个行业。
目标用户：基层医疗机构、外贸企业、跨境从业者
目标市场：北美（英文为主）

## 技术栈
- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **内容**: MDX (Markdown + JSX)
- **部署**: Cloudflare Pages
- **认证**: Google OAuth
- **结构化数据**: JSON-LD (Article, FAQ, HowTo)

## 目录结构
```
/app
  /[lang]/(lang切换预留)
    /page.tsx                 # 首页
    /concepts/[slug]/         # 通用概念库
    /healthcare/               # 医疗AI
      /ai-tools/               # 工具导航
      /concepts/               # 医疗概念
      /guides/                 # 落地指南
      /cases/                  # 案例
    /trade/                    # 外贸AI
      /ai-tools/
      /concepts/
      /guides/
      /cases/
    /faq/                      # FAQ聚合
    /tools/                    # 全站工具导航
/components
  /content/                    # Article, FAQ, HowTo 组件
  /ui/                         # Shadcn/ui 组件
/content
  /concepts/                   # 概念文章MDX
  /healthcare/                 # 医疗内容MDX
  /trade/                      # 外贸内容MDX
/lib
  /schema.ts                   # 结构化数据工具函数
  /terms.ts                    # 术语表
```

## 硬约束
1. 所有文章必须包含FAQ section + JSON-LD
2. 所有技术概念第一次出现必须定义
3. 英文内容优先，面向北美市场
4. 清晰的HTML语义标签
5. 不使用JS-heavy渲染框架

## 内容规范
- 每个概念页：定义 → 为什么重要 → 如何落地 → FAQ
- 每个工具页：功能 → 定价 → 适用场景 → 竞品对比 → FAQ
- 数据引用必须标注来源（Gartner/IDC/官方数据）

## 验证命令
```bash
pnpm build      # 构建验证
pnpm lint       # ESLint
pnpm typecheck  # TypeScript
```