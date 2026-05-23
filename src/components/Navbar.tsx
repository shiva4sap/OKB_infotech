import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Navbar({
  isDarkMode,
  toggleDarkMode,
  scrollToSection,
  activeSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Packages", id: "packages" },
    { label: "Our Process", id: "process" },
    { label: "Portfolio", id: "portfolio" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      id="navbar-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group text-left cursor-pointer"
            id="nav-logo"
          >
            <img 
              src="/OKB.png" 
              alt="OKB INFOTECH Logo" 
              className="w-10 h-10 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-display font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-950 to-slate-800 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                OKB INFOTECH
              </span>
              <p className="font-mono text-[9px] uppercase tracking-widest text-sky-600 dark:text-sky-400 font-bold leading-none mt-0.5">
                DIGITAL ENGINES
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-sky-600 dark:text-sky-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-sky-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions Support */}
          <div className="hidden lg:flex items-center gap-4" id="nav-actions">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Toggle theme"
              id="theme-toggle-btn"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Quick Consultation CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="gradient-button px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              id="nav-consult-cta"
            >
              Consult Free
            </button>
          </div>

          {/* Mobile Interactions Trigger */}
          <div className="flex items-center gap-3 lg:hidden" id="nav-mobile-trigger-container">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300 cursor-pointer"
              id="mobile-theme-toggle-btn"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300 cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToSection(link.id);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    scrollToSection("contact");
                  }}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-bold uppercase text-xs tracking-wider cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
