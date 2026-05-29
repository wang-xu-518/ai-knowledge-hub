import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://ai-knowledge-hub-3ts.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Knowledge Hub - AI for Healthcare & Trade",
    template: "%s | AI Knowledge Hub",
  },
  description:
    "Industry-leading AI knowledge hub for healthcare providers and trade professionals. Explore AI tools, concepts, guides, and real-world cases.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AI Knowledge Hub",
    title: "AI Knowledge Hub - AI for Healthcare & Trade",
    description:
      "Industry-leading AI knowledge hub for healthcare providers and trade professionals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Knowledge Hub - AI for Healthcare & Trade",
    description:
      "Industry-leading AI knowledge hub for healthcare providers and trade professionals.",
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
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={cn("antialiased", inter.variable)}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
