import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Frictionless Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-505 to-indigo-500 rounded-full mx-auto" />
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            Have query lines about domain mappings, security, or payment milestones? Here is a basic overview.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4 text-left" id="faq-accordions">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-205/60 dark:border-slate-800 bg-white dark:bg-slate-950/60 overflow-hidden shadow-sm"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors cursor-pointer"
                  id={`faq-toggle-${idx}`}
                >
                  <span className="font-display font-bold text-slate-900 dark:text-slate-100 pr-5 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-905 text-slate-500 dark:text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-350 leading-relaxed border-t border-slate-100 dark:border-slate-900 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
