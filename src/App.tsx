import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Process from "./components/Process";
import Industries from "./components/Industries";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ChatbotWidget from "./components/ChatbotWidget";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Footer from "./components/Footer";
import { ArrowUp, Play, Zap, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check local storage or default to true (high tech premium dark theme)
    const stored = localStorage.getItem("okb-theme");
    if (stored) {
      return stored === "dark";
    }
    return true; // Stark premium slate dark mode by default looks highly professional for a software agency
  });

  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("home");
  const [backToTop, setBackToTop] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  // Sync state with HTML classes & localStorage
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200);
    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("okb-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("okb-theme", "light");
    }
  }, [isDarkMode]);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      setBackToTop(window.scrollY > 500);

      // Simple active section detection
      const sections = ["home", "about", "services", "packages", "process", "portfolio", "faq", "contact"];
      const scrollPosition = window.scrollY + 140; // adjusting for sticky offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 w-full overflow-x-hidden select-text ${
        isDarkMode 
          ? "bg-slate-950 text-slate-100" 
          : "bg-slate-50 text-slate-900"
      }`}
      id="okb-app-wrapper"
    >
      {/* Brand Initial Loader */}
      <AnimatePresence>
        {initialLoading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center font-sans select-none"
          >
            <div className="space-y-6 text-center animate-pulse">
              {/* Double rotational premium rings with centered logo */}
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-slate-900" />
                <div className="absolute inset-0 rounded-full border-4 border-sky-500 border-t-transparent animate-spin" style={{ animationDuration: "0.8s" }} />
                <div className="absolute inset-2 rounded-full border-4 border-indigo-500 border-b-transparent animate-spin" style={{ animationDuration: "1.2s", animationDirection: "reverse" }} />
                <img 
                  src="/OKB.png" 
                  alt="OKB Logo" 
                  className="w-12 h-12 object-contain rounded-lg relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1.5 pt-2">
                <h1 className="font-display font-black text-2xl tracking-widest text-white uppercase">
                  OKB INFOTECH
                </h1>
                <div className="h-1 w-16 bg-sky-500 rounded-full mx-auto" />
                <p className="font-mono text-[9px] uppercase tracking-widest text-sky-400 font-extrabold">
                  Initializing digital engines...
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Premium Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Sections Structure */}
      <main id="main-content-flow" className="w-full">
        {/* HERO SECTION */}
        <Hero scrollToSection={scrollToSection} />

        {/* Dynamic CTA Strip */}
        <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-700 py-6 text-white overflow-hidden relative" id="ticker-strip">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 font-sans relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-left">
                Special Launch Proposition: Get a complimentary speed & SEO compliance audit with every booking!
              </p>
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-black uppercase tracking-widest transition-all cursor-pointer hover:scale-103 shrink-0"
            >
              Claim complimentary Audit
            </button>
          </div>
          {/* Decorative mesh */}
          <div className="absolute inset-0 bg-slate-950/5 opacity-40 pointer-events-none" />
        </div>

        {/* ABOUT US SECTION */}
        <About />

        {/* SERVICES SECTION */}
        <Services
          scrollToSection={scrollToSection}
          setSelectedService={setSelectedService}
        />

        {/* IMPRESSIVE CTA STRIP */}
        <section className="py-16 bg-slate-900 text-white relative overflow-hidden" id="cta-infostrip">
          {/* Subtle light burst */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-500/10 blur-[90px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500/10 flex items-center justify-center mx-auto border border-sky-400/25">
              <Zap className="w-6 h-6 text-sky-400 animate-pulse" />
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl max-w-2xl mx-auto tracking-tight leading-snug">
              Maximize Operational Efficiency and Save Up To 70% Manual Admin Overhead
            </h3>
            <p className="text-sm text-slate-350 max-w-xl mx-auto font-sans">
              Traditional businesses lose hundreds of hours copying data across fragmented systems. OKB builds the customized API pathways and automatic triggers that allow you to focus purely on high-reward operations.
            </p>
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-450 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-transform cursor-pointer"
              >
                Inquire About custom workflow
              </button>
            </div>
          </div>
        </section>

        {/* PACKAGES SECTION */}
        <Packages
          scrollToSection={scrollToSection}
          setSelectedPackage={setSelectedPackage}
        />

        {/* PROCESS TIMELINE SECTION */}
        <Process />

        {/* INDUSTRIES WE SERVE GRID */}
        <Industries />

        {/* PORTFOLIO PROJECTS SHOWCASE */}
        <Portfolio />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* FAQ ACCORDION SECTION */}
        <FAQ />

        {/* DYNAMIC CONTACT & BLUEPRINT FORM */}
        <Contact
          selectedService={selectedService}
          selectedPackage={selectedPackage}
        />
      </main>

      {/* FOOTER */}
      <Footer scrollToSection={scrollToSection} />

      {/* FLOAT SYSTEMS: AI Assistant Bot */}
      <ChatbotWidget />

      {/* FLOAT SYSTEMS: Direct WhatsApp Node */}
      <WhatsAppWidget />

      {/* FLOAT SYSTEMS: Back To Top Link */}
      <AnimatePresence>
        {backToTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl cursor-pointer hover:scale-105 transition-transform"
            title="Back to Top"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
export { App };
