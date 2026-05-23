import React, { useState } from "react";
import { Mail, Sparkles, Check } from "lucide-react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [emailValue, setEmailValue] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailValue("");
    }, 2000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-800 pt-16 pb-8 text-left" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Intro */}
          <div className="md:col-span-5 space-y-4 text-left">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <img 
                src="/OKB.png" 
                alt="OKB Logo" 
                className="w-10 h-10 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display font-black text-base text-white tracking-tight">
                  OKB INFOTECH
                </span>
                <p className="font-mono text-[8px] uppercase tracking-widest text-sky-400 font-extrabold leading-none mt-0.5">
                  DIGITAL ENGINES
                </p>
              </div>
            </button>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We design and engineer tailored custom software, responsive websites, WhatsApp business automations, and scalable CRM platforms for high-growth startups and manufacturers globally.
            </p>
          </div>

          {/* Quick links & services */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-left">
            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold text-slate-200 tracking-wider">
                Explore Desk
              </h4>
              <ul className="space-y-2 text-xs">
                {["Home", "About", "Services", "Packages", "Our Process", "Portfolio"].map((label, idx) => {
                  const mapId = label === "Our Process" ? "process" : label.toLowerCase();
                  return (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(mapId)}
                        className="hover:text-sky-400 transition-colors cursor-pointer text-left font-medium"
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services links */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold text-slate-200 tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                    Web Applications
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                    WhatsApp Automation
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                    AI Conversational Bots
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-sky-400 transition-colors text-left cursor-pointer">
                    Custom CRM Systems
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscribe */}
          <div className="md:col-span-3 space-y-4 text-left" id="footer-newsletter-wrap">
            <h4 className="text-xs uppercase font-bold text-slate-200 tracking-wider">
              Weekly Growth Insights
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get speed audits, tech stacks recommendations, and productivity blueprints formatted directly into your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500 text-white"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 rounded-lg bg-sky-500 hover:bg-sky-450 text-white flex items-center justify-center transition-transform hover:scale-102 cursor-pointer"
                  title="Subscribe"
                >
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 animate-pulse mt-1.5 font-sans">
                  <Check className="w-3.5 h-3.5" /> Activated! Growth blueprint is routing first draft.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800" />

        {/* Bottom copyright rows */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500" id="footer-copyright-panel">
          <div>
            © {currentYear} <strong>OKB INFOTECH</strong>. All Rights Reserved. Engineered with premium standards of speed and accessibility.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-sky-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-sky-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <a href="mailto:admin@okbit.in" className="hover:text-sky-400">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
export { Footer };
