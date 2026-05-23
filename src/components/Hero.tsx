import React from "react";
import { ArrowRight, Sparkles, MessageSquare, Zap, Target, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const stats = [
    { value: "180+", label: "Projects Delivered", suffix: "" },
    { value: "98.7", label: "Client Satisfaction", suffix: "%" },
    { value: "4.5M+", label: "Automated Workflows", suffix: "" },
    { value: "12X", label: "Client Growth Spark", suffix: "" },
  ];

  const floatingBadges = [
    { icon: MessageSquare, text: "WhatsApp Bots Live", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
    { icon: Zap, text: "0.4s Ultra-Fast Load", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
    { icon: Target, text: "AI Automation Active", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Dynamic tech-themed ambient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" id="hero-ambient-gradients">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-sky-500/10 dark:bg-sky-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-[130px] animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Subtle grid mesh */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: "radial-gradient(circle, #0284c7 1px, transparent 1px)", 
            backgroundSize: "24px 24px" 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text content side */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-text-block">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-200/50 dark:border-sky-800/40 bg-sky-50/50 dark:bg-sky-950/30 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
              Revolutionizing Business Operations
            </motion.div>

            {/* Main title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
              >
                We Build Smart{" "}
                <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 bg-clip-text text-transparent">
                  Digital Solutions
                </span>{" "}
                That Scale Businesses
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans"
              >
                From premium high-performance websites to automated AI-powered WhatsApp pipelines, 
                <strong> OKB INFOTECH</strong> transforms traditional workflows into high-growth digital operations.
              </motion.p>
            </div>

            {/* Micro value props tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2.5 pt-1"
              id="hero-value-props"
            >
              {floatingBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-semibold ${badge.color}`}
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.text}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
              id="hero-ctas"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 hover:from-sky-500 hover:via-indigo-500 hover:to-sky-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection("services")}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-300/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                View Services
              </button>
            </motion.div>

            {/* Animated numeric statistics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-slate-200/60 dark:border-slate-850/60"
              id="hero-stats-panel"
            >
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <span className="block font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-300 bg-clip-text text-transparent">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Visual Dashboard Mock Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
            id="hero-board-graphic"
          >
            {/* Visual backdrop panel glassmorphism mockup */}
            <div className="relative mx-auto max-w-[420px] lg:max-w-none rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl shadow-2xl p-5 overflow-hidden">
              {/* Header simulation */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    okb-growth-engine-v4.0
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-extrabold uppercase animate-pulse">
                  API STATUS: 100%
                </div>
              </div>

              {/* Card visual elements inside mockup */}
              <div className="space-y-4 pt-4">
                {/* Simulated Lead Node */}
                <div className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      WhatsApp Lead Trigger
                    </span>
                    <span className="text-[10px] font-mono font-bold text-sky-500">
                      0.12s Response
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 font-semibold">
                      INCOMING INQUIRY
                    </span>
                    <span>→ Autoprocessed</span>
                  </div>
                </div>

                {/* Simulated Growth Chart */}
                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/85">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      SME Operational Costs Saved
                    </span>
                    <span className="text-emerald-500 font-bold uppercase tracking-wider text-[10px]">
                      -72% overhead
                    </span>
                  </div>
                  {/* Dynamic stylized bar graph lines */}
                  <div className="flex items-end gap-2.5 h-20 pt-2 px-1">
                    <div className="flex-1 rounded-t-md bg-slate-200 dark:bg-slate-800 h-1/5" />
                    <div className="flex-1 rounded-t-md bg-slate-200 dark:bg-slate-800 h-2/5" />
                    <div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500 to-indigo-500 h-3/5" />
                    <div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500 to-indigo-500 h-4/5" />
                    <div className="flex-1 rounded-t-md bg-gradient-to-t from-sky-500 to-indigo-500 h-full animate-pulse" />
                  </div>
                </div>

                {/* Tech connectors checkboard */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-850 bg-slate-50/40 dark:bg-slate-900/60 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        ERP SYNC
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Activated
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-850 bg-slate-50/40 dark:bg-slate-900/60 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        CLOUD ENGINE
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        99.9% Uptime
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing tech card floating behind it */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
