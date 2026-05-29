"use client";

import { generateFAQSchema } from "@/lib/schema";
import { Separator } from "@/components/ui/separator";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSection({
  items,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const faqSchema = generateFAQSchema(items);

  return (
    <section className="w-full py-12 md:py-16" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Separator className="mb-12" />
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          {title}
        </h2>
        <div className="space-y-6">
          {items.map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border bg-card p-4 transition-all open:ring-1 open:ring-foreground/10 md:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                <span>{item.question}</span>
                <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
