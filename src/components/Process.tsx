import React from "react";
import { MessageSquare, FileText, Code, ShieldCheck, Rocket, LineChart, CornerDownRight } from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Requirement Discussion",
      description: "We host an in-depth strategy session map to analyze your current legacy workflows, spreadsheets, target customers, and operational objectives."
    },
    {
      num: "02",
      icon: FileText,
      title: "Planning & Design",
      description: "Our engineers formulate high-fidelity UI wireframes alongside comprehensive system flowcharts detailing the API schemas."
    },
    {
      num: "03",
      icon: Code,
      title: "Rapid Agile Development",
      description: "We build code in secure environments using modern frameworks (Vite, React, Node) with daily milestones and transparent version logs."
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Rigorous Sandbox Testing",
      description: "We deploy complete end-to-end load tests, link validations, and speed performance audits across desktop, tablet, and mobile browsers."
    },
    {
      num: "05",
      icon: Rocket,
      title: "Deployment & Ingress Routing",
      description: "We finalize domain records (DNS, DNS SEC), set up premium SSL keys, and launch the platform with zero server downtime."
    },
    {
      num: "06",
      icon: LineChart,
      title: "Maintenance & Scaling support",
      description: "We actively monitor systems, administer secure monthly database backups, and continuously scale capabilities as transactions grow."
    }
  ];

  return (
    <section
      id="process"
      className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20" id="process-header-container">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            How We Partner
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Transparent Six-Step Engineering Lifecycle
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-655 dark:text-slate-350 leading-relaxed font-sans">
            We follow a structured design sprint strategy to ensure your project is code-complete, fully optimized, and deployed with zero friction.
          </p>
        </div>

        {/* Process Card Timelines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left" id="process-steps-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-950/60 flex flex-col justify-between hover:border-sky-500/35 transition-colors relative group"
              >
                {/* Visual connecting trace helper */}
                <div className="absolute top-6 right-6 font-display font-black text-4xl text-slate-100 dark:text-slate-900 select-none group-hover:text-sky-500/20 transition-colors">
                  {step.num}
                </div>

                <div className="space-y-4">
                  {/* Icon wrap */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 dark:from-sky-405/5 dark:to-indigo-300/5 flex items-center justify-center text-sky-655 dark:text-sky-400 border border-sky-500/15">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text labels */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-sky-500 uppercase tracking-widest font-bold">Step {idx + 1}</span>
                      <CornerDownRight className="w-4 h-4 text-slate-350 dark:text-slate-700" />
                    </h3>
                    <h4 className="font-display font-extrabold text-base text-slate-900 dark:text-slate-100 mt-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
