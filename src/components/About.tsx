import React from "react";
import { ShieldCheck, Target, Heart, Milestone, Sparkles } from "lucide-react";
import { TIMELINE } from "../data";
import { motion } from "motion/react";

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Reliability & Integrity",
      description: "We translate complex codebase solutions into straightforward, business-first workflows with zero hidden charges.",
    },
    {
      icon: Target,
      title: "Growth Acceleration",
      description: "Every single website, script, or automated chatbot we build is architected with one single objective: scaling your operations.",
    },
    {
      icon: Heart,
      title: "Client-First Support",
      description: "We function as an integrated extension of your own division, providing swift post-launch maintenance SLA contracts.",
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20" id="about-header-container">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            About OKB INFOTECH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connecting Digital Strategy with Business Growth
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
            OKB INFOTECH is a premium technology solutions enterprise helping startups, SMEs, and large global manufacturers automate and scale. By replacing complex legacy overheads with clean custom software, we set growth engines in motion.
          </p>
        </div>

        {/* Philosophy / Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24" id="philosophy-values-grid">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                key={idx}
                className="p-6 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/35 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 dark:from-sky-400/5 dark:to-indigo-300/5 flex items-center justify-center text-sky-600 dark:text-sky-450 mb-5 border border-sky-500/10">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Two-Column Detail Frame (Mission/Vision on one side, Journey on the other) */}
        <div className="grid lg:grid-cols-12 gap-12 items-start" id="timeline-vision-block">
          {/* Left Column: Mission, Vision, and Strengths */}
          <div className="lg:col-span- così lg:col-span-5 space-y-8 text-left" id="mv-container">
            <div className="p-6.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/30 dark:to-slate-950 border border-slate-100 dark:border-slate-900 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-[10px] uppercase font-mono font-bold text-sky-500 tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" /> Our Purpose
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-sky-650 dark:text-sky-400 tracking-wider mb-2">
                    Our Mission
                  </h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    To deliver affordable, robust, and highly scalable custom digital architectures, allowing physical and traditional companies to transform operations with maximum efficiency and reliability.
                  </p>
                </div>
                
                <div className="pt-5 border-t border-slate-100 dark:border-slate-900">
                  <h4 className="font-sans font-bold text-xs uppercase text-sky-655 dark:text-sky-400 tracking-wider mb-2">
                    Our Vision
                  </h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    To establish OKB INFOTECH as a highly trusted, premier global software consulting and business automation agency renowned for clean systems engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Clients Tags Panel */}
            <div className="space-y-3 p-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Core Sectors We Support
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Tech Startups",
                  "Retail & D2C",
                  "Real Estate agencies",
                  "Healthcare Hubs",
                  "Educational institutes",
                  "Local SMBs",
                  "Manufacturers"
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-650 dark:text-slate-350"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Creative Growth Journey Timeline */}
          <div className="lg:col-span-7 col-span-12" id="timeline-container">
            <div className="flex items-center gap-2 mb-8 select-none">
              <Milestone className="w-5 h-5 text-sky-500 shrink-0" />
              <h3 className="font-display font-extrabold text-xl text-slate-950 dark:text-white uppercase tracking-wider">
                Our Evolution Pathway
              </h3>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 pl-8 space-y-10 text-left">
              {TIMELINE.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Point Indicator */}
                  <div className="absolute -left-12 top-1.5 w-8 h-8 rounded-full border border-sky-200/80 dark:border-sky-800 bg-white dark:bg-slate-950 flex items-center justify-center text-sky-600 dark:text-sky-400 font-mono text-xs font-bold shadow-sm group-hover:scale-110 group-hover:border-sky-500 transition-all duration-300">
                    {idx + 1}
                  </div>

                  {/* Year Tag */}
                  <div className="inline-block px-2.5 py-0.5 rounded bg-sky-50 dark:bg-sky-950/40 border border-sky-305/10 dark:border-sky-800/10 text-xs font-mono font-extrabold text-sky-600 dark:text-sky-400 mb-2">
                    {step.year}
                  </div>

                  {/* Title & Desc */}
                  <h4 className="font-display font-bold text-base text-slate-905 dark:text-slate-100 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
