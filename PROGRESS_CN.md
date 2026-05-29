# AI Knowledge Hub → 个人品牌站（中文版）

## 目标
将 myinai.com 从"英文行业知识库"改造为"中文个人品牌站"，定位企业AI架构师

## 新架构
- 首页：个人品牌 + 能力矩阵 + 服务入口
- /about：关于我（20年履历，Person schema）
- /services：我能做什么（医疗/外贸/企业AI）
- /blog：博客（案例、实践）
- /healthcare：医疗AI（中文）
- /trade：外贸AI（中文）
- /concepts：AI概念库（中文）
- /tools：AI工具导航（中文）
- /faq：常见问题（中文）

## 改造清单

### P0 - 核心框架
- [ ] layout.tsx：lang="zh"，metadata 中文，OpenGraph locale="zh_CN"
- [ ] navigation.tsx：全部中文标签
- [ ] 新建 src/app/about/page.tsx：Person schema（完整履历）
- [ ] 新建 src/app/services/page.tsx：三类服务

### P0 - 首页重构
- [ ] page.tsx：个人介绍Hero + 能力矩阵 + 服务卡片 + FAQ

### P1 - 内容翻译
- [ ] healthcare/page.tsx：中文内容 + 中文 schema
- [ ] trade/page.tsx：中文内容 + 中文 schema
- [ ] concepts/page.tsx：中文内容
- [ ] tools/page.tsx：中文内容
- [ ] faq/page.tsx：中文内容

### P2 - 博客系统
- [ ] 新建 src/app/blog/page.tsx：文章列表
- [ ] content/blog/*.mdx：3-5篇案例文章

### P3 - Baidu SEO
- [ ] robots.ts：确认内容可被百度爬取
- [ ] sitemap.ts：正确 sitemap URL

## 约束
- Next.js 14，output: 'export'（静态HTML）
- Tailwind + Shadcn/ui
- 部署：Cloudflare Pages（GitHub Actions）
- 所有页面必须有 FAQ + JSON-LD

## 版本
v2.0.0 - 2026-05-29