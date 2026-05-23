import React from "react";
import { Check, Star, Settings, MessageSquare, ArrowRight } from "lucide-react";
import { PACKAGES } from "../data";
import { motion } from "motion/react";

interface PackagesProps {
  scrollToSection: (id: string) => void;
  setSelectedPackage: (packageName: string) => void;
}

export default function Packages({ scrollToSection, setSelectedPackage }: PackagesProps) {
  const handleSelectPackage = (name: string) => {
    setSelectedPackage(name);
    scrollToSection("contact");
  };

  return (
    <section
      id="packages"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="packages-header-container">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Investment Models
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transparent Starting Pricing Plans Matched To Your Scale
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
            No overbilling. No proprietary locks. We offer fully scalable baseline packages alongside customized enterprise-grade software development.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mb-20" id="pricing-packages-cards">
          {PACKAGES.map((pack) => (
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              key={pack.id}
              className={`rounded-2xl p-6.5 flex flex-col justify-between text-left relative ${
                pack.isPopular 
                  ? "border-2 border-sky-500 bg-gradient-to-b from-sky-50/20 to-white dark:from-slate-900/30 dark:to-slate-950 shadow-xl shadow-sky-500/5" 
                  : "border border-slate-200/60 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10"
              }`}
            >
              {/* Popular Badge */}
              {pack.isPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-sky-500 text-white text-[10px] uppercase font-mono font-bold tracking-widest py-1 px-3.5 rounded-full flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Most Popular Pack
                </div>
              )}

              <div className="space-y-6">
                {/* Header (Name, Price & Subtext) */}
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white">
                    {pack.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                      {pack.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      / project starting price
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {pack.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-200/65 dark:bg-slate-800" />

                {/* Features List */}
                <div className="space-y-3.5">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">
                    What's Included:
                  </span>
                  <ul className="space-y-3">
                    {pack.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-850">
                <button
                  onClick={() => handleSelectPackage(pack.name)}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    pack.isPopular
                      ? "bg-gradient-to-r from-sky-600 to-indigo-650 hover:from-sky-500 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/15"
                      : "bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-755 dark:text-slate-250 hover:bg-slate-200 dark:hover:bg-slate-800/80"
                  }`}
                >
                  {pack.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom enterprise solution callout */}
        <div 
          className="rounded-3xl border border-dashed border-sky-300/60 dark:border-sky-850/60 p-8 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 flex flex-col md:flex-row items-center justify-between text-left gap-6 group"
          id="custom-pricing-callout"
        >
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1 py-1 px-2.5 rounded bg-sky-100 dark:bg-sky-950/40 text-[10px] font-bold uppercase tracking-widest text-sky-600 dark:text-sky-300">
              <Settings className="w-3.5 h-3.5" /> Enterprise Tailored Scope
            </div>
            <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
              Need Something Fully Custom-Tailored?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans">
              We engineer specialized microservices, deep legacy database migrations, customized administrative ERP tools, and complex multi-layered CRM setups. Let's map your exact operations specs.
            </p>
          </div>
          <button
            onClick={() => handleSelectPackage("Enterprise Custom Solution")}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-850 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Request Custom quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
