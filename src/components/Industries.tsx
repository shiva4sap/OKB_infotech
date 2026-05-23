import React from "react";
import { 
  Home, ShoppingBag, HeartPulse, GraduationCap, 
  Utensils, Factory, Coins, Users 
} from "lucide-react";
import { INDUSTRIES } from "../data";
import { motion } from "motion/react";

export default function Industries() {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Home: Home,
    ShoppingBag: ShoppingBag,
    HeartPulse: HeartPulse,
    GraduationCap: GraduationCap,
    Utensils: Utensils,
    Factory: Factory,
    Coins: Coins,
    Users: Users
  };

  return (
    <section
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Sectors We Elevate
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailor-Made Operational Architectures Built For Your Industry
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
            Every market sector operates on distinct schedules, catalogs, and transaction shapes. We build workflows mapped to the native patterns of your industry.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left" id="industries-bento">
          {INDUSTRIES.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Home;
            return (
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                key={ind.id}
                className="p-6 rounded-2xl border border-slate-150 dark:border-slate-850 bg-slate-50/40 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 dark:from-sky-455/5 dark:to-indigo-300/5 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4 border border-sky-500/10 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-450 leading-relaxed">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
