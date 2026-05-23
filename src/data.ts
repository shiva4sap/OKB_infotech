import { Service, PricingPackage, Testimonial, Project, FAQItem, Industry, TimelineEvent } from "./types";

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Stunning, lightweight, ultra-responsive digital storefronts engineered for direct audience engagement and superior speed.",
    benefits: ["Custom layout engineering", "Next-gen React speed optimization", "In-built SEO schema markers"],
    startingPrice: "₹9,999 onward",
    category: "web-app",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Platforms",
    description: "Premium storefront architectures built to convert visitors into loyal, repeat customers. Fast, secure, and user-friendly.",
    benefits: ["Advanced inventory management", "Secure multi-gateway payment checkouts", "Intuitive customer dashboard systems"],
    startingPrice: "₹19,999 onward",
    category: "web-app",
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Feature-rich, enterprise-grade cloud applications built for real-time collaboration, complex operations, and security.",
    benefits: ["Highly interactive user dashboards", "Advanced role-based access", "Automated scaling infrastructure"],
    startingPrice: "₹34,999 onward",
    category: "web-app",
  },
  {
    id: "mobile-apps",
    title: "Android & iOS Apps",
    description: "Immersive, high-performance native-feel mobile solutions tailored to capture users on their primary screen.",
    benefits: ["Cross-platform React Native / Flutter", "Push notification marketing nodes", "Offline-first sync capability"],
    startingPrice: "₹44,999 onward",
    category: "web-app",
  },
  {
    id: "whatsapp-auto",
    title: "WhatsApp Automation",
    description: "Direct-to-consumer automated support, broadcast systems, and automatic ordering workflows directly on the world's favorite messaging app.",
    benefits: ["Official WhatsApp Business API integration", "Seamless automated lead capturing", "Interactive list & quick-reply buttons"],
    startingPrice: "₹14,999 onward",
    category: "automation",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description: "Intellectually trained assistants conversational in customer operations, working 24/7/365 to qualify leads and answer FAQs.",
    benefits: ["Natural language intent detection", "Instant multi-lingual answers", "Direct escalation to human staff"],
    startingPrice: "₹19,999 onward",
    category: "automation",
  },
  {
    id: "crm-erp",
    title: "CRM & ERP Solutions",
    description: "Fully customized panels for tracking sales, human resources, active workflows, inventory, and dynamic business pipelines.",
    benefits: ["Personalized custom data attributes", "Beautiful visual charts & tracking", "Multi-user department sync"],
    startingPrice: "₹39,999 onward",
    category: "enterprise",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    description: "Result-oriented visibility campaigns that position your company directly in front of active high-intent search volumes.",
    benefits: ["Keyword gap analysis and strategy", "Page-speed core web vitals adjustments", "PPC optimization for high ROI"],
    startingPrice: "₹11,999 / month",
    category: "marketing",
  },
  {
    id: "cloud-systems",
    title: "Cloud Based Systems",
    description: "Architectural migrations to bulletproof cloud cloud services like AWS, GCP, and Cloud Run for maximum reliability.",
    benefits: ["Zero-downtime microservice migrations", "Cost-saving infrastructure audits", "Auto-backup routine schedules"],
    startingPrice: "₹29,999 onward",
    category: "enterprise",
  },
  {
    id: "automation-tools",
    title: "Custom Automation Tools",
    description: "Custom scripts and workflows that completely automate monotonous manual Excel / CSV / email scraping routines.",
    benefits: ["Up to 90% human time savings", "No-code connection middleware nodes", "Background cron tasks"],
    startingPrice: "₹9,900 onward",
    category: "automation",
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    description: "Secure, reliable connectors linking legacy systems, payment bridges, social graphs, and internal services.",
    benefits: ["Robust data parsing pipelines", "Modern tokenized authentication rules", "Webhooks for instant actions"],
    startingPrice: "₹7,999 onward",
    category: "enterprise",
  },
  {
    id: "support-maintenance",
    title: "Maintenance & Support",
    description: "24/7 systems vigilance monitoring package renewals, critical security patches, backups, and feature improvements.",
    benefits: ["SLA contracts with rapid responses", "Critical security patch alerts", "Periodic speed checkups"],
    startingPrice: "₹4,999 / month",
    category: "marketing",
  }
];

export const PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: "₹9,999",
    description: "Best for startups and small physical businesses looking to build a clean, high-speed modern digital address.",
    features: [
      "Custom 5-Page Responsive Layout",
      "Core SEO Ready Schema Structure",
      "Full Mobile & Tablet Layout Design",
      "Integrated Contact & Inquiry Form",
      "Fast 10-Day Rapid Delivery",
      "1 Month Free technical Support",
      "Dynamic Slider & Premium UI Sections"
    ],
    ctaText: "Get Started Now"
  },
  {
    id: "business",
    name: "Business Package",
    price: "₹24,999",
    description: "Highly recommended for fast-growing companies requiring custom administration, analytics, and messaging.",
    features: [
      "Dynamic Web Architecture",
      "Custom Admin Panel / Dashboard",
      "Premium WhatsApp Direct API Config",
      "Lead Management Google Sheets Integration",
      "Enhanced SEO Coverage & Core Web Vitals",
      "Advanced Dynamic Blog / Portfolio Modules",
      "Speed Optimization & Cloud Hosting Config",
      "3 Months Complete Priority Maintenance"
    ],
    ctaText: "Choose Business Pack",
    isPopular: true
  },
  {
    id: "premium",
    name: "Premium Automation Pack",
    price: "₹49,999",
    description: "The ultimate digital arsenal. Integrates AI assistants, internal pipelines, and dashboards to reduce operational overhead.",
    features: [
      "Advanced Dynamic Client portal",
      "Fully Integrated Custom CRM/ERP Panel",
      "Trained AI Chatbot Web Integration",
      "Official WhatsApp Automated Broadcast Setup",
      "Interactive Multi-level Business Flowchart",
      "Custom Database Integration (PostgreSQL/Mongo)",
      "High-fidelity custom animations",
      "6 Months Premium Support & Scalable Upgrades"
    ],
    ctaText: "Secure Premium Solution"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "realestate",
    name: "Real Estate",
    description: "Instant listings, digital catalogs, and CRM automation nodes filtering valid leads securely.",
    iconName: "Home"
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Online checkouts, rapid cart conversions, and automated inventory logistics reminders.",
    iconName: "ShoppingBag"
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    description: "Instant clinic reservations, custom doctor profiles, patient reminders, and records portal.",
    iconName: "HeartPulse"
  },
  {
    id: "education",
    name: "Education & Institutes",
    description: "Digital course management portals, admission inquiries automation, and fee trackers.",
    iconName: "GraduationCap"
  },
  {
    id: "hospitality",
    name: "Hospitality & Food",
    description: "Interactive food menus, simple booking forms, dynamic loyalty workflows.",
    iconName: "Utensils"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Enterprise supply chain audits, factory stock tracking, and dealer lead systems.",
    iconName: "Factory"
  },
  {
    id: "finance",
    name: "Finance & Fintech",
    description: "Multi-layered encrypted calculation dashboards, payment records, and client trackers.",
    iconName: "Coins"
  },
  {
    id: "associations",
    name: "Associations & Forums",
    description: "Premium members portal, event management pipelines, and community newsletter broadcasts.",
    iconName: "Users"
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "Our Spark",
    title: "Inception & Core Purpose",
    description: "OKB INFOTECH was founded to bridge the gap between heavy enterprise technology and modern agile startups, with a clear focus on lightweight, highly optimized web architectures."
  },
  {
    year: "Expanding Horizon",
    title: "Pivoting to Intelligent Automations",
    description: "Recognizing that custom work is only part of the puzzle, we launched smart WhatsApp API sequences and customized CRM connectors, saving thousands of manual hours for our client partners."
  },
  {
    year: "The Present Vibe",
    title: "Global Technology Collaborations",
    description: "Working actively with startups, manufacturers, and corporate brands globally of all scales, turning traditional architectures into premium custom-engineered digital systems."
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "ZenStore — Next-Gen B2B Retail",
    description: "Speed-optimized headless commerce application handling over 35,000+ daily inventory SKU items with state-of-the-art catalog filters and visual checkout graphs.",
    category: "Ecommerce Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "TailwindCSS", "Node.js", "GraphQL"]
  },
  {
    id: "proj2",
    title: "AuraCRM — Real Estate Automation",
    description: "Dynamic CRM solution automating WhatsApp follow-ups, virtual property inquiries, and broker lead assignments in less than 3 seconds per entry.",
    category: "CRM & ERP Panel",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    tech: ["Vite", "TypeScript", "Express", "MongoDB", "WhatsApp API"]
  },
  {
    id: "proj3",
    title: "CulinaryGo — Automated Order Chain",
    description: "Interactive multi-branch food reservation application featuring real-time cook progress alerts and cloud database integrations for multi-level dashboard tracking.",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Custom Audio Engine", "Firebase Socket", "Tailwind"]
  },
  {
    id: "proj4",
    title: "EduLink AI — Intelligent Admin Suite",
    description: "A complete institutional dashboard automating circular distributions, automated PDF report generators, and AI chatbot answering parent inquiries 24/7.",
    category: "AI Chatbots & Management",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    tech: ["NextJS", "Gemini AI", "TailwindCSS", "PostgreSQL"]
  },
  {
    id: "proj5",
    title: "VeloDash — Business Intelligence Log",
    description: "Modern operations dashboard integrating Google Sheets data alongside active pipeline visual graphs, giving executives a unified view of weekly sales volumes.",
    category: "Enterprise System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "D3.js", "Tailwind CSS", "Sheets API"]
  },
  {
    id: "proj6",
    title: "NexusBot — Conversational WhatsApp API",
    description: "Industrial grade WhatsApp automation script parsing high payload customer catalogs and initiating automatic digital bills PDF delivery.",
    category: "WhatsApp Automation",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tech: ["NodeJS", "WhatsApp Business Core", "AWS Lambda", "MongoDB"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Arun Kumar",
    role: "Managing Director",
    company: "Apex Properties Ltd.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    content: "OKB INFOTECH completely revolutionized how we interact with potential real estate buyers. Their automated CRM WhatsApp integration was deployed in under two weeks. We saw an immediate 40% reduction in lead response times!"
  },
  {
    id: "test2",
    name: "Sanya Mehta",
    role: "Founder",
    company: "Curated Styles Online",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    content: "The custom B2B e-commerce platform designed by OKB has cut down database overhead with incredibly high fidelity loading on mobile. Our load speeds dropped down to a stellar 0.6 seconds! Our clients literally praise the interface's fluid simplicity."
  },
  {
    id: "test3",
    name: "Dr. Rohit Deshmukh",
    role: "Administrative Head",
    company: "CareFirst Multispeciality Hospital",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5,
    content: "We hired OKB to construct a patient inquiry scheduling app. The timeline was extremely strict, yet they delivered with total reliability, clean documentation, and thorough training. Highly recommended as a solid, secure technology partner."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer tailored custom solutions besides the starter packages?",
    answer: "Absolutely! Actually, more than 70% of our projects are fully tailored, customized web applications, ERPs, API integrations, and specialized AI sequences built specifically according to concrete corporate workflows. Let's discuss your requirements!"
  },
  {
    question: "How long does it take to deliver a typical business website?",
    answer: "A basic corporate showcase or Starter Package takes around 10 business days to complete from start to finish. More complex dynamic portals, customized CRM engines, and advanced automated structures typically span 3 to 6 weeks depending on features."
  },
  {
    question: "What technical stack does OKB INFOTECH specialize in?",
    answer: "We develop on the finest, highly optimized modern stacks. Our primary tools include React.js, Vite, Tailwind CSS, TypeScript, Node.js, and popular cloud services (AWS, Google Cloud Run, Vercel). This guarantees incredible load speeds and zero server overhead."
  },
  {
    question: "What is your approach to post-launch technical maintenance?",
    answer: "We strongly believe delivery is only the beginning. All our packages include dedicated after-launch technical support. We offer professional SLA support options covering regular security checks, scheduled data backups, and feature increments."
  },
  {
    question: "Does the pricing cover domain registration and hosting costs?",
    answer: "Our direct packages focus purely on custom design, software engineering, and software stack setups. Domain registry and hosting charges depend on your provider, but we guide you step-by-step through setting up direct accounts in your name for safety."
  },
  {
    question: "Can we migrate our current offline manual workflow into mobile apps?",
    answer: "Yes, we regularly assist physical SMEs, manufacturer hubs, and associations in digitizing their manual spreadsheets / paperwork into secure web systems or Android/iOS applications, optimizing overall team operational productivity."
  }
];

export const CHATBOT_PRESET_OPTIONS = [
  { id: "services", text: "What services do you provide?" },
  { id: "packages", text: "Can I see your packages and prices?" },
  { id: "booking", text: "How do I book a free consultation?" },
  { id: "custom", text: "I need a tailored custom app" }
];

export const CHATBOT_RESPONSES: Record<string, string> = {
  welcome: "Hello! I am OKB's Virtual Growth Assistant. How can I help you transform your business operations today?",
  services: "We build digital growth engines! Our specializations include: \n\n• Custom Web & App Development\n• WhatsApp Automated Broadcast Systems\n• Trained AI Chatbots & Customer Assistants\n• Customized CRM & ERP Operational Panels\n• Cloud Server Infrastructure Optimization.\n\nWhich sector fits your business needs?",
  packages: "We offer three transparent starting models:\n\n1. **Starter Package (₹9,999)**: 5-Page Responsive SEO Site\n2. **Business Package (₹24,999)**: Dynamic Portal + Admin Control + WhatsApp Direct API\n3. **Premium Automation (₹49,999)**: Advanced Portal + Custom CRM Core + Live AI Bot\n\nWe also design heavy enterprise customizations!",
  booking: "Excellent choice! You can quickly book a completely free corporate strategy consultation. Scroll to our **Contact Section** to fill out the calendar request form, or drop an email directly to **shiva4sap@gmail.com** or send a message to us via the floating WhatsApp button!",
  custom: "Customized solutions are our primary expertise! We specialize in transforming manual Google Sheets, paperwork, and fragmented workflows into robust, speed-optimized React engines. Drop us a brief description in the contact form below and our lead engineer will respond within 12 hours!"
};
