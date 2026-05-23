import React, { useState } from "react";
import { ArrowUpRight, FolderGit, Sparkles } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web Application", "CRM & ERP Panel", "Ecommerce Platform", "WhatsApp Automation"];

  const filteredProjects = filter === "All"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter || p.category.includes(filter));

  return (
    <section
      id="portfolio"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" id="portfolio-header">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Case Studies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Our Digital Deliverables in Active Operation
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
            Explore a curation of high-speed web apps, custom real estate dashboards, and microservice automations that represent our engineering standards.
          </p>
        </div>

        {/* Portfolio Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="portfolio-tab-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                  : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-350 border border-slate-200/50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayoutContainer">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white dark:bg-slate-950 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-sky-900/5 transition-all duration-300"
              >
                {/* Visual Cover Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-104 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="inline-flex items-center gap-1 py-1.5 px-3.5 rounded bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wider">
                      <FolderGit className="w-3.5 h-3.5" /> Project Case Log
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-sky-600 dark:text-sky-400 font-extrabold block">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-450 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Tech stack badge list */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-900">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
