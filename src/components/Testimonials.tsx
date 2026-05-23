import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Client Success
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Our Business Partners Say About OKB
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
            Read comments and evaluations provided by company managers, startup entrepreneurs, and medical coordinators.
          </p>
        </div>

        {/* Testimonials Grid representation */}
        <div className="grid md:grid-cols-3 gap-8 text-left" id="testimonials-cards-grid">
          {TESTIMONIALS.map((test) => (
            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.2 }}
              key={test.id}
              className="p-6 rounded-2xl border border-slate-150 dark:border-slate-850 bg-slate-50/40 dark:bg-slate-900/30 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              {/* Review block */}
              <div className="space-y-4">
                {/* Star rating selection */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-650 dark:text-slate-350 italic leading-relaxed">
                  "{test.content}"
                </p>
              </div>

              {/* Author metadata panel */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100 dark:border-slate-850">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                  loading="lazy"
                />
                <div className="text-left leading-tight">
                  <span className="block font-sans font-bold text-sm text-slate-900 dark:text-white">
                    {test.name}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {test.role}, <strong className="text-sky-655 dark:text-sky-450">{test.company}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
