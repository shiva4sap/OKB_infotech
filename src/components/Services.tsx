import React, { useState } from "react";
import { 
  Laptop, ShoppingBag, Code, Smartphone, MessageSquare, Bot, 
  Database, Target, Cloud, Cpu, Layers, Settings, Check, ArrowRight 
} from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface ServicesProps {
  scrollToSection: (id: string) => void;
  setSelectedService: (serviceName: string) => void;
}

export default function Services({ scrollToSection, setSelectedService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { label: "All Solutions", id: "all" },
    { label: "Web & Mobile Platforms", id: "web-app" },
    { label: "AI & WhatsApp Automations", id: "automation" },
    { label: "Enterprise Systems", id: "enterprise" },
    { label: "Marketing & Auditing", id: "marketing" },
  ];

  // Map string categories to specific icon components directly
  const iconMap: Record<string, React.ComponentType<any>> = {
    "web-dev": Laptop,
    "ecommerce": ShoppingBag,
    "web-apps": Code,
    "mobile-apps": Smartphone,
    "whatsapp-auto": MessageSquare,
    "ai-chatbots": Bot,
    "crm-erp": Database,
    "digital-marketing": Target,
    "cloud-systems": Cloud,
    "automation-tools": Cpu,
    "api-integrations": Layers,
    "support-maintenance": Settings,
  };

  const filteredServices = activeTab === "all" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  const handleInquire = (title: string) => {
    setSelectedService(title);
    scrollToSection("contact");
  };

  return (
    <section
      id="services"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="services-header-container">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Our Offerings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Comprehensive Digital Capabilities Engineered to Deliver
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
            Whether you require speed-optimized catalog storefronts, localized CRM databases, or zero-cost server integrations, OKB INFOTECH provides complete reliability.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="services-tab-row">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === c.id
                  ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md shadow-sky-500/10"
                  : "bg-white dark:bg-slate-950 text-slate-650 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Responsive Service Cards Grid Layout */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          id="services-cards-grid"
        >
          <AnimatePresence mode="popLayoutContainer">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.id] || Laptop;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-950/60 p-6 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-sky-900/5 transition-all text-left group"
                >
                  <div className="space-y-6">
                    {/* Top row: Icon & Pricetag */}
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/10 group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                        <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400">
                          {service.startingPrice}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-450 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Benefits Items */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-900 space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-350 font-medium">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-6 mt-6">
                    <button
                      onClick={() => handleInquire(service.title)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500/30 bg-transparent hover:bg-sky-50/20 dark:hover:bg-sky-955/20 text-xs font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-350 cursor-pointer"
                    >
                      Inquire / Book Consultation
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
