/**
 * AI Knowledge Hub - Core Terminology Glossary
 * Covers Healthcare AI and Trade AI domains
 * 50+ terms with English/Chinese names and definitions
 */

export interface Term {
  id: string;
  en: string;
  zh: string;
  definition: string;
  industry: "healthcare" | "trade" | "general";
  category: string;
  relatedTerms?: string[];
}

export const terms: Term[] = [
  // General AI Terms (15)
  {
    id: "artificial-intelligence",
    en: "Artificial Intelligence (AI)",
    zh: "人工智能",
    definition:
      "The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["machine-learning", "deep-learning", "generative-ai"],
  },
  {
    id: "machine-learning",
    en: "Machine Learning (ML)",
    zh: "机器学习",
    definition:
      "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed, using statistical methods.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["artificial-intelligence", "deep-learning", "supervised-learning"],
  },
  {
    id: "deep-learning",
    en: "Deep Learning",
    zh: "深度学习",
    definition:
      "A subset of machine learning based on artificial neural networks with multiple layers, capable of learning complex patterns from large datasets.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["machine-learning", "neural-network", "transformer"],
  },
  {
    id: "neural-network",
    en: "Neural Network",
    zh: "神经网络",
    definition:
      "A computing system inspired by biological neural networks, consisting of interconnected nodes that process information in layers.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["deep-learning", "transformer", "computer-vision"],
  },
  {
    id: "transformer",
    en: "Transformer",
    zh: "Transformer架构",
    definition:
      "A deep learning architecture introduced in 2017 that uses self-attention mechanisms, forming the foundation of modern LLMs like GPT.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["large-language-model", "attention-mechanism", "generative-ai"],
  },
  {
    id: "large-language-model",
    en: "Large Language Model (LLM)",
    zh: "大语言模型",
    definition:
      "A type of AI model trained on vast text datasets to understand, generate, and reason with human language. Examples include GPT-4, Claude, and LLaMA.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["transformer", "generative-ai", "prompt-engineering"],
  },
  {
    id: "generative-ai",
    en: "Generative AI",
    zh: "生成式AI",
    definition:
      "AI systems capable of creating new content (text, images, audio, code) by learning patterns from training data, rather than just classifying or predicting.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["large-language-model", "diffusion-model", "prompt-engineering"],
  },
  {
    id: "prompt-engineering",
    en: "Prompt Engineering",
    zh: "提示工程",
    definition:
      "The practice of designing and optimizing input prompts to elicit desired outputs from language models effectively and consistently.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["large-language-model", "generative-ai", "few-shot-learning"],
  },
  {
    id: "natural-language-processing",
    en: "Natural Language Processing (NLP)",
    zh: "自然语言处理",
    definition:
      "A branch of AI focused on enabling computers to understand, interpret, and generate human language in a valuable way.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["large-language-model", "sentiment-analysis", "named-entity-recognition"],
  },
  {
    id: "computer-vision",
    en: "Computer Vision",
    zh: "计算机视觉",
    definition:
      "A field of AI that trains computers to interpret and understand visual information from the world, including images and videos.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["deep-learning", "image-recognition", "medical-imaging"],
  },
  {
    id: "supervised-learning",
    en: "Supervised Learning",
    zh: "监督学习",
    definition:
      "A machine learning approach where models are trained on labeled datasets, learning to map inputs to known outputs.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["machine-learning", "unsupervised-learning", "training-data"],
  },
  {
    id: "unsupervised-learning",
    en: "Unsupervised Learning",
    zh: "无监督学习",
    definition:
      "A machine learning approach where models identify patterns and structures in unlabeled data without predefined output categories.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["machine-learning", "supervised-learning", "clustering"],
  },
  {
    id: "reinforcement-learning",
    en: "Reinforcement Learning (RL)",
    zh: "强化学习",
    definition:
      "A machine learning paradigm where an agent learns to make decisions by performing actions and receiving rewards or penalties.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["machine-learning", "agent", "reward-function"],
  },
  {
    id: "fine-tuning",
    en: "Fine-tuning",
    zh: "微调",
    definition:
      "The process of adapting a pre-trained model to a specific task or domain by training it further on a smaller, targeted dataset.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["pre-trained-model", "transfer-learning", "large-language-model"],
  },
  {
    id: "rag",
    en: "Retrieval-Augmented Generation (RAG)",
    zh: "检索增强生成",
    definition:
      "A technique that enhances LLM outputs by retrieving relevant information from external knowledge bases before generating responses.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["large-language-model", "vector-database", "embedding"],
  },

  // Healthcare AI Terms (20)
  {
    id: "electronic-health-record",
    en: "Electronic Health Record (EHR)",
    zh: "电子健康档案",
    definition:
      "A digital version of a patient's paper chart, containing medical history, diagnoses, medications, treatment plans, and test results.",
    industry: "healthcare",
    category: "Healthcare Systems",
    relatedTerms: ["clinical-decision-support", "interoperability", "hipaa"],
  },
  {
    id: "clinical-decision-support",
    en: "Clinical Decision Support (CDS)",
    zh: "临床决策支持",
    definition:
      "Health IT systems that analyze data to help healthcare providers make clinical decisions, including alerts, reminders, and diagnostic suggestions.",
    industry: "healthcare",
    category: "Healthcare Systems",
    relatedTerms: ["electronic-health-record", "medical-imaging", "diagnostic-ai"],
  },
  {
    id: "medical-imaging",
    en: "Medical Imaging",
    zh: "医学影像",
    definition:
      "The technique and process of creating visual representations of the interior of a body for clinical analysis and medical intervention.",
    industry: "healthcare",
    category: "Healthcare Systems",
    relatedTerms: ["computer-vision", "radiology-ai", "diagnostic-ai"],
  },
  {
    id: "radiology-ai",
    en: "Radiology AI",
    zh: "放射科AI",
    definition:
      "AI systems designed to analyze medical images (X-rays, CT, MRI) to assist radiologists in detecting abnormalities and making diagnoses.",
    industry: "healthcare",
    category: "Healthcare AI Applications",
    relatedTerms: ["medical-imaging", "computer-vision", "diagnostic-ai"],
  },
  {
    id: "diagnostic-ai",
    en: "Diagnostic AI",
    zh: "诊断AI",
    definition:
      "AI systems that analyze patient data and symptoms to assist healthcare providers in identifying diseases and conditions.",
    industry: "healthcare",
    category: "Healthcare AI Applications",
    relatedTerms: ["clinical-decision-support", "radiology-ai", "precision-medicine"],
  },
  {
    id: "precision-medicine",
    en: "Precision Medicine",
    zh: "精准医疗",
    definition:
      "An approach to disease treatment and prevention that considers individual variability in genes, environment, and lifestyle for each person.",
    industry: "healthcare",
    category: "Healthcare AI Applications",
    relatedTerms: ["genomics", "biomarkers", "diagnostic-ai"],
  },
  {
    id: "drug-discovery",
    en: "AI Drug Discovery",
    zh: "AI药物研发",
    definition:
      "The use of AI to accelerate the identification and optimization of potential drug compounds, predict drug-target interactions, and optimize clinical trials.",
    industry: "healthcare",
    category: "Healthcare AI Applications",
    relatedTerms: ["molecular-modeling", "clinical-trials", "biomarkers"],
  },
  {
    id: "clinical-trials",
    en: "Clinical Trials",
    zh: "临床试验",
    definition:
      "Research studies performed on human participants to evaluate the safety and efficacy of medical, surgical, or behavioral interventions.",
    industry: "healthcare",
    category: "Healthcare Systems",
    relatedTerms: ["drug-discovery", "fda-approval", "real-world-evidence"],
  },
  {
    id: "hipaa",
    en: "HIPAA",
    zh: "健康保险流通与责任法案",
    definition:
      "The Health Insurance Portability and Accountability Act of 1996, US legislation providing data privacy and security provisions for safeguarding medical information.",
    industry: "healthcare",
    category: "Healthcare Compliance",
    relatedTerms: [ "phi", "health-data-privacy", "gdpr"],
  },
  {
    id: "phi",
    en: "Protected Health Information (PHI)",
    zh: "受保护的健康信息",
    definition:
      "Any information in a medical record that can be used to identify an individual and that was created, used, or disclosed in the course of providing healthcare services.",
    industry: "healthcare",
    category: "Healthcare Compliance",
    relatedTerms: ["hipaa", "health-data-privacy", "gdpr"],
  },
  {
    id: "health-data-privacy",
    en: "Health Data Privacy",
    zh: "健康数据隐私",
    definition:
      "The protection of personal health information from unauthorized access, use, or disclosure, governed by regulations like HIPAA and GDPR.",
    industry: "healthcare",
    category: "Healthcare Compliance",
    relatedTerms: ["hipaa", "phi", "gdpr"],
  },
  {
    id: "fhir",
    en: "FHIR (Fast Healthcare Interoperability Resources)",
    zh: "快速医疗互操作资源",
    definition:
      "A standard for exchanging healthcare information electronically, developed by HL7 to facilitate interoperability between healthcare systems.",
    industry: "healthcare",
    category: "Healthcare Systems",
    relatedTerms: ["interoperability", "electronic-health-record", "health-data-exchange"],
  },
  {
    id: "interoperability",
    en: "Interoperability",
    zh: "互操作性",
    definition:
      "The ability of different information systems, devices, and applications to access, exchange, integrate, and cooperatively use data in a coordinated way.",
    industry: "healthcare",
    category: "Healthcare Systems",
    relatedTerms: ["fhir", "electronic-health-record", "health-data-exchange"],
  },
  {
    id: "telemedicine",
    en: "Telemedicine",
    zh: "远程医疗",
    definition:
      "The remote delivery of healthcare services using telecommunications technology, enabling virtual consultations and remote patient monitoring.",
    industry: "healthcare",
    category: "Healthcare Delivery",
    relatedTerms: ["remote-patient-monitoring", "virtual-care", "digital-health"],
  },
  {
    id: "remote-patient-monitoring",
    en: "Remote Patient Monitoring (RPM)",
    zh: "远程患者监护",
    definition:
      "Technology to monitor patients outside of conventional clinical settings, such as in the home, using digital devices to collect and transmit health data.",
    industry: "healthcare",
    category: "Healthcare Delivery",
    relatedTerms: ["telemedicine", "wearables", "digital-health"],
  },
  {
    id: "wearables",
    en: "Wearable Health Devices",
    zh: "可穿戴健康设备",
    definition:
      "Electronic devices worn on the body that collect health and fitness data, such as smartwatches, fitness trackers, and continuous glucose monitors.",
    industry: "healthcare",
    category: "Healthcare Delivery",
    relatedTerms: ["remote-patient-monitoring", "digital-health", "iot"],
  },
  {
    id: "digital-health",
    en: "Digital Health",
    zh: "数字健康",
    definition:
      "The convergence of digital technologies with health, healthcare, living, and society to enhance the efficiency of healthcare delivery.",
    industry: "healthcare",
    category: "Healthcare Delivery",
    relatedTerms: ["telemedicine", "digital-therapeutics", "health-informatics"],
  },
  {
    id: "digital-therapeutics",
    en: "Digital Therapeutics (DTx)",
    zh: "数字疗法",
    definition:
      "Evidence-based therapeutic interventions driven by high-quality software programs to prevent, manage, or treat medical disorders or diseases.",
    industry: "healthcare",
    category: "Healthcare Delivery",
    relatedTerms: ["digital-health", "fda-approval", "clinical-trials"],
  },
  {
    id: "fda-approval",
    en: "FDA Approval",
    zh: "FDA批准",
    definition:
      "The process by which the U.S. Food and Drug Administration reviews and approves medical devices, drugs, and software as safe and effective for use.",
    industry: "healthcare",
    category: "Healthcare Compliance",
    relatedTerms: ["clinical-trials", "digital-therapeutics", "medical-device"],
  },
  {
    id: "medical-device",
    en: "Medical Device",
    zh: "医疗器械",
    definition:
      "Any instrument, apparatus, implement, machine, contrivance, or related article intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease.",
    industry: "healthcare",
    category: "Healthcare Compliance",
    relatedTerms: ["fda-approval", "diagnostic-ai", "digital-therapeutics"],
  },

  // Trade AI Terms (20)
  {
    id: "supply-chain",
    en: "Supply Chain",
    zh: "供应链",
    definition:
      "The network of organizations, people, activities, information, and resources involved in moving a product or service from supplier to customer.",
    industry: "trade",
    category: "Trade Operations",
    relatedTerms: ["supply-chain-optimization", "logistics", "inventory-management"],
  },
  {
    id: "supply-chain-optimization",
    en: "Supply Chain Optimization",
    zh: "供应链优化",
    definition:
      "The application of algorithms and AI to improve supply chain performance by reducing costs, improving efficiency, and increasing responsiveness.",
    industry: "trade",
    category: "Trade AI Applications",
    relatedTerms: ["supply-chain", "demand-forecasting", "inventory-management"],
  },
  {
    id: "demand-forecasting",
    en: "Demand Forecasting",
    zh: "需求预测",
    definition:
      "The process of using historical data and AI models to predict future customer demand for products, enabling better inventory and production planning.",
    industry: "trade",
    category: "Trade AI Applications",
    relatedTerms: ["supply-chain-optimization", "inventory-management", "predictive-analytics"],
  },
  {
    id: "inventory-management",
    en: "Inventory Management",
    zh: "库存管理",
    definition:
      "The supervision of non-capitalized assets and stock items, using AI to optimize stock levels, reduce carrying costs, and prevent stockouts.",
    industry: "trade",
    category: "Trade Operations",
    relatedTerms: ["supply-chain", "demand-forecasting", "just-in-time"],
  },
  {
    id: "cross-border-ecommerce",
    en: "Cross-border E-commerce",
    zh: "跨境电商",
    definition:
      "Online trade between businesses and consumers across international borders, involving complex logistics, payments, and regulatory compliance.",
    industry: "trade",
    category: "Trade Operations",
    relatedTerms: ["customs-clearance", "international-trade", "global-marketplace"],
  },
  {
    id: "customs-clearance",
    en: "Customs Clearance",
    zh: "清关",
    definition:
      "The process of passing goods through customs authorities to facilitate import/export, involving documentation, duties, and compliance verification.",
    industry: "trade",
    category: "Trade Operations",
    relatedTerms: ["cross-border-ecommerce", "tariffs", "trade-compliance"],
  },
  {
    id: "tariffs",
    en: "Tariffs",
    zh: "关税",
    definition:
      "Taxes imposed by governments on imported or exported goods, affecting pricing strategies and supply chain decisions in international trade.",
    industry: "trade",
    category: "Trade Operations",
    relatedTerms: ["customs-clearance", "trade-compliance", "international-trade"],
  },
  {
    id: "trade-compliance",
    en: "Trade Compliance",
    zh: "贸易合规",
    definition:
      "The process of ensuring that all aspects of international trade adhere to laws, regulations, and standards of involved countries and organizations.",
    industry: "trade",
    category: "Trade Operations",
    relatedTerms: ["customs-clearance", "tariffs", "sanctions-screening"],
  },
  {
    id: "sanctions-screening",
    en: "Sanctions Screening",
    zh: "制裁筛查",
    definition:
      "The process of checking trade partners and transactions against government sanctions lists to ensure compliance with international regulations.",
    industry: "trade",
    category: "Trade Compliance",
    relatedTerms: ["trade-compliance", "aml", "know-your-customer"],
  },
  {
    id: "aml",
    en: "Anti-Money Laundering (AML)",
    zh: "反洗钱",
    definition:
      "Regulations and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income in international trade.",
    industry: "trade",
    category: "Trade Compliance",
    relatedTerms: ["sanctions-screening", "know-your-customer", "trade-compliance"],
  },
  {
    id: "know-your-customer",
    en: "Know Your Customer (KYC)",
    zh: "了解你的客户",
    definition:
      "The process of verifying the identity of clients and assessing potential risks of illegal intentions in business relationships, especially in financial and trade contexts.",
    industry: "trade",
    category: "Trade Compliance",
    relatedTerms: ["aml", "sanctions-screening", "trade-compliance"],
  },
  {
    id: "predictive-analytics",
    en: "Predictive Analytics",
    zh: "预测分析",
    definition:
      "The use of data, statistical algorithms, and machine learning to identify the likelihood of future outcomes based on historical data.",
    industry: "trade",
    category: "Trade AI Applications",
    relatedTerms: ["demand-forecasting", "machine-learning", "big-data"],
  },
  {
    id: "big-data",
    en: "Big Data",
    zh: "大数据",
    definition:
      "Extremely large datasets that require specialized tools and AI to analyze, revealing patterns, trends, and associations in trade and commerce.",
    industry: "trade",
    category: "Trade Technology",
    relatedTerms: ["predictive-analytics", "data-analytics", "business-intelligence"],
  },
  {
    id: "business-intelligence",
    en: "Business Intelligence (BI)",
    zh: "商业智能",
    definition:
      "Technologies and strategies used by enterprises for data analysis and management of business information, including dashboards and reporting tools.",
    industry: "trade",
    category: "Trade Technology",
    relatedTerms: ["big-data", "data-analytics", "predictive-analytics"],
  },
  {
    id: "data-analytics",
    en: "Data Analytics",
    zh: "数据分析",
    definition:
      "The science of analyzing raw data to make conclusions about information, using automated techniques and algorithms to reveal insights.",
    industry: "trade",
    category: "Trade Technology",
    relatedTerms: ["big-data", "business-intelligence", "predictive-analytics"],
  },
  {
    id: "crm",
    en: "Customer Relationship Management (CRM)",
    zh: "客户关系管理",
    definition:
      "Technology for managing a company's relationships and interactions with current and potential customers, often enhanced with AI for personalization.",
    industry: "trade",
    category: "Trade Technology",
    relatedTerms: ["customer-segmentation", "marketing-automation", "sales-automation"],
  },
  {
    id: "customer-segmentation",
    en: "Customer Segmentation",
    zh: "客户细分",
    definition:
      "The practice of dividing a customer base into groups of individuals with similar characteristics, using AI to identify behavioral and demographic patterns.",
    industry: "trade",
    category: "Trade AI Applications",
    relatedTerms: ["crm", "personalization", "marketing-automation"],
  },
  {
    id: "marketing-automation",
    en: "Marketing Automation",
    zh: "营销自动化",
    definition:
      "Software platforms and technologies designed for marketing departments to more effectively market on multiple channels and automate repetitive tasks using AI.",
    industry: "trade",
    category: "Trade AI Applications",
    relatedTerms: ["crm", "customer-segmentation", "personalization"],
  },
  {
    id: "sales-automation",
    en: "Sales Automation",
    zh: "销售自动化",
    definition:
      "The use of software and AI to automate repetitive, manual sales tasks, including lead scoring, outreach, and pipeline management.",
    industry: "trade",
    category: "Trade AI Applications",
    relatedTerms: ["crm", "lead-scoring", "marketing-automation"],
  },
  {
    id: "lead-scoring",
    en: "Lead Scoring",
    zh: "线索评分",
    definition:
      "A methodology used to rank prospects against a scale that represents the perceived value each lead represents to the organization, often using AI predictive models.",
    industry: "trade",
    category: "Trade AI Applications",
    relatedTerms: ["sales-automation", "crm", "predictive-analytics"],
  },

  // Additional General Terms (5)
  {
    id: "embedding",
    en: "Embedding",
    zh: "嵌入向量",
    definition:
      "A numerical representation of data (text, images, etc.) in a high-dimensional vector space, enabling semantic similarity comparisons and retrieval.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["vector-database", "rag", "similarity-search"],
  },
  {
    id: "vector-database",
    en: "Vector Database",
    zh: "向量数据库",
    definition:
      "A database optimized for storing and querying high-dimensional vectors, essential for semantic search and RAG applications.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["embedding", "rag", "similarity-search"],
  },
  {
    id: "hallucination",
    en: "Hallucination",
    zh: "幻觉（AI）",
    definition:
      "A phenomenon where AI models generate plausible-sounding but factually incorrect or nonsensical information, particularly common in LLMs.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["large-language-model", "rag", "fact-checking"],
  },
  {
    id: "api",
    en: "Application Programming Interface (API)",
    zh: "应用程序接口",
    definition:
      "A set of protocols and tools that allows different software applications to communicate and exchange data with each other.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["integration", "webhook", "sdk"],
  },
  {
    id: "sdk",
    en: "Software Development Kit (SDK)",
    zh: "软件开发工具包",
    definition:
      "A collection of software development tools in one installable package, used to develop applications for a specific platform or framework.",
    industry: "general",
    category: "Core Concepts",
    relatedTerms: ["api", "integration", "developer-tools"],
  },
];

export function getTermsByIndustry(industry: "healthcare" | "trade" | "general"): Term[] {
  return terms.filter((term) => term.industry === industry);
}

export function getTermById(id: string): Term | undefined {
  return terms.find((term) => term.id === id);
}

export function searchTerms(query: string): Term[] {
  const lowerQuery = query.toLowerCase();
  return terms.filter(
    (term) =>
      term.en.toLowerCase().includes(lowerQuery) ||
      term.zh.includes(query) ||
      term.definition.toLowerCase().includes(lowerQuery)
  );
}

export function getTermsByCategory(category: string): Term[] {
  return terms.filter((term) => term.category === category);
}
