const faqData = {
  healthcare: [
    { q: "What is AI in healthcare?", a: "AI in healthcare refers to the use of artificial intelligence technologies to improve patient care, diagnosis, and operational efficiency in medical settings." },
    { q: "How to implement AI in clinics?", a: "Start with identifying pain points, evaluate AI solutions that address those needs, ensure HIPAA compliance, and train staff gradually." },
    { q: "What are the costs of healthcare AI?", a: "Costs vary widely - from $500/month for basic AI tools to enterprise solutions costing $50,000+ annually." },
    { q: "Is healthcare AI secure?", a: "HIPAA-compliant AI solutions must use encrypted data, access controls, and audit logs to protect patient information." },
  ],
  trade: [
    { q: "What is AI foreign trade?", a: "AI foreign trade refers to using AI tools to automate and optimize international business operations including translation, customer service, and logistics." },
    { q: "How to use AI for global business?", a: "Begin by identifying language barriers, implement AI translation and customer service tools, then expand to AI-powered analytics and marketing." },
    { q: "What AI tools do I need for import/export?", a: "Essential tools include AI translation (DeepL/Google Translate), AI customer service (Intercom/Zendesk), AI analytics (Tableau/Power BI with AI), and AI marketing tools." },
    { q: "How to ensure AI compliance in trade?", a: "Work with legal counsel to understand import/export regulations in each target market, and verify AI tools meet local data protection laws." },
  ],
}

export default function FAQPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Healthcare AI</h2>
          {faqData.healthcare.map((item, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-medium">{item.q}</h3>
              <p className="text-muted-foreground mt-2">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Trade AI</h2>
          {faqData.trade.map((item, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-medium">{item.q}</h3>
              <p className="text-muted-foreground mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}