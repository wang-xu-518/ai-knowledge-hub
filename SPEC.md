# 个人品牌站 v2.0.0 - 中文本地化

## 目标
将 myinai.com 从英文行业知识库改造为中文个人品牌站，定位**企业AI架构师**

## 背景
- 用户背景：10年日本企业开发 + 10年医疗IT，定位企业AI架构师
- 能力：管理/运营/产品/信息架构，专注医疗AI、外贸AI、企业RAG知识库、AI工具评测
- 目标市场：中国大陆（百度主导）

## 新架构
```
首页 /
├── Hero：个人品牌 + 核心定位
├── 能力矩阵：4大核心能力
├── 服务入口：医疗AI | 外贸AI | 企业通用AI
└── FAQ

/about
├── 个人履历（20年）
├── 技术栈
└── 核心案例

/services
├── 医疗AI落地（10年医疗IT经验）
├── 外贸企业AI解决方案
└── 企业RAG知识库建设

/healthcare（中文）
/trade（中文）
/concepts（中文）
/tools（中文）
/faq（中文）
/blog
```

## 改造清单

### P0 - 核心框架
- [ ] `layout.tsx`：lang="zh-CN"，metadata 中文，OpenGraph locale="zh_CN"，title/description 中文
- [ ] `navigation.tsx`：标签全部换成中文（首页|关于我|服务|案例|医疗AI|外贸AI|AI概念|工具|FAQ）
- [ ] 新建 `src/app/about/page.tsx`：Person schema（姓名、职位、履历）
- [ ] 新建 `src/app/services/page.tsx`：三类服务，每类一个服务卡片

### P0 - 首页重构
- [ ] `page.tsx` 完全重写：
  - Hero：个人介绍 + 定位"企业AI架构师"
  - 能力矩阵：医疗IT(10年)|日本企业开发(10年)|企业RAG|AI工具评测
  - 服务入口卡片
  - FAQ（中文）

### P1 - 内容翻译（中文）
- [ ] `healthcare/page.tsx`：中文内容 + 中文 JSON-LD
- [ ] `trade/page.tsx`：中文内容 + 中文 JSON-LD
- [ ] `concepts/page.tsx`：中文内容
- [ ] `tools/page.tsx`：中文内容
- [ ] `faq/page.tsx`：中文内容

### P2 - 博客系统
- [ ] 新建 `src/app/blog/page.tsx`
- [ ] 新建 `content/blog/医疗AI落地案例.mdx`
- [ ] 新建 `content/blog/企业RAG实战.mdx`
- [ ] 新建 `content/blog/日本企业AI转型.mdx`

### P3 - Baidu SEO
- [ ] `robots.ts`：允许百度爬取
- [ ] `sitemap.ts`：更新 URL 列表

## 约束
- Next.js 14，output: 'export'（静态HTML）
- Tailwind + Shadcn/ui
- 部署：Cloudflare Pages（已有 CI/CD）
- 所有页面必须包含 FAQ section + JSON-LD（Article 或 FAQPage）
- 所有内容：**简体中文**，非繁体
- 所有 meta title/description：**中文**

## 技术栈
- Next.js 14.2.35 (App Router)
- TypeScript
- Tailwind CSS + Shadcn/ui
- Lucide React icons
- 部署：Cloudflare Pages via GitHub Actions
- 域名：https://myinai.com

## 版本
v2.0.0 - 2026-05-29