import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://myinai.com";

export const metadata: Metadata = {
  metadataBase: new URL("https://myinai.com"),
  title: {
    default: "企业AI架构师 | 医疗AI·外贸AI·企业RAG知识库",
    template: "%s | 企业AI架构师",
  },
  description:
    "20年企业IT经验，专注医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设。帮助企业从0到1实现AI转型。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    siteName: "企业AI架构师",
    title: "企业AI架构师 | 医疗AI·外贸AI·企业RAG知识库",
    description:
      "20年企业IT经验，专注医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "企业AI架构师",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "企业AI架构师 | 医疗AI·外贸AI·企业RAG知识库",
    description:
      "20年企业IT经验，专注医疗AI落地、外贸企业AI解决方案、企业RAG知识库建设。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={cn("font-sans", inter.variable)}>
      <body className={cn("antialiased", inter.variable)}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
