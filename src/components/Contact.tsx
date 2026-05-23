import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles, AlertCircle, X, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  selectedService: string;
  selectedPackage: string;
}

export default function Contact({ selectedService, selectedPackage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    packageType: "",
    desc: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; msg: string; type: "success" | "error" }>({
    show: false,
    msg: "",
    type: "success"
  });

  // Auto-dismiss toast
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // Sync selected options from other parts of the website
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, packageType: selectedPackage }));
    }
  }, [selectedPackage]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Business Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please specify a valid business email address";
    }

    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone/Contact number is required";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/[\s\-()]+/g, ""))) {
      newErrors.phone = "Standard 10-digit number is required (e.g., 9063523880)";
    }

    if (!formData.serviceType.trim()) {
      newErrors.serviceType = "Required system or service specification is required";
    }

    if (!formData.desc.trim()) {
      newErrors.desc = "Project specifications and goals are required";
    } else if (formData.desc.trim().length < 10) {
      newErrors.desc = "Please briefly outline your specifications (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({
        show: true,
        msg: "Please correct the highlighted specification errors before logging ticket.",
        type: "error"
      });
      return;
    }

    setLoading(true);
    // Simulate API routing in 1.4 seconds with loader animation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setToast({
        show: true,
        msg: "Your architecture consultation request has been logged successfully!",
        type: "success"
      });
    }, 1400);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      packageType: "",
      desc: ""
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100/50 dark:border-slate-850/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Strategy Session
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Initiate Your Free Architecture Consultation
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-505 to-indigo-500 rounded-full mx-auto" />
          <p className="text-base text-slate-655 dark:text-slate-350 leading-relaxed font-sans">
            Have operational bottlenecks? Let's trace out a solution blueprint. Complete the schedule ticket below for a customized walkthrough.
          </p>
        </div>

        {/* 2 Column Frame */}
        <div className="grid lg:grid-cols-12 gap-12 items-start" id="contact-outer-block">
          
          {/* Left: Contact Info details & embedded map mock */}
          <div className="lg:col-span- così lg:col-span-5 space-y-8 text-left" id="contact-info-block col-1">
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-xl text-slate-950 dark:text-white uppercase tracking-wider">
                OKB Corporate Desk
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect directly with our engineering team or visit our research workspace. We answer all verified corporate requests in under 12 hours.
              </p>
            </div>

             {/* Info Cards Row */}
             <div className="space-y-4" id="address-coordinates-cards">
               {/* Contact Email */}
               <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg bg-sky-500/10 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500 leading-none mb-1">
                     Send Proposal Line
                   </span>
                   <a
                     href="mailto:shiva4sap@gmail.com"
                     className="text-sm font-semibold font-mono text-slate-800 dark:text-slate-200 hover:text-sky-500 transition-colors"
                   >
                     shiva4sap@gmail.com
                   </a>
                 </div>
               </div>

               {/* Contact Telephone */}
               <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg bg-sky-500/10 dark:bg-sky-500/5 text-sky-600 dark:text-sky-450 flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500 leading-none mb-1">
                     Direct Tech Hotline
                   </span>
                   <a
                     href="tel:+919063523880"
                     className="text-sm font-semibold font-mono text-slate-800 dark:text-slate-200 hover:text-sky-500 transition-colors"
                   >
                     +91 9063523880
                   </a>
                 </div>
               </div>

               {/* Direct Support WhatsApp */}
               <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-emerald-500/5 dark:bg-emerald-500/5 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg bg-emerald-550/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                   <MessageSquare className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500 leading-none mb-1">
                     Instant Chat channel
                   </span>
                   <a 
                     href="https://wa.me/919063523880?text=Hello%20OKB%2520INFOTECH%2520team,%2520I'd%2520like%2520to%2520request%252520a%252520project%252520consultation!" 
                     target="_blank" 
                     rel="noreferrer" 
                     className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-555 transition-colors"
                   >
                     Connect On WhatsApp Live
                   </a>
                 </div>
               </div>

               {/* Contact Office Address */}
               <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/40 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                   <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500 leading-none mb-1">
                     Knowledge Workspace
                   </span>
                   <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                     Whitefield Technology Park, Bangalore, Karnataka, India
                   </span>
                 </div>
               </div>
             </div>

            {/* Simulated Map Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-50 relative bg-slate-100 dark:bg-slate-900" id="simulated-map-frame">
              {/* Slate themed styled drawing mapping representation */}
              <div 
                className="absolute inset-0 opacity-40 dark:opacity-30"
                style={{ 
                  backgroundImage: "radial-gradient(circle, #475569 1px, transparent 1px)", 
                  backgroundSize: "16px 16px" 
                }} 
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center animate-ping absolute" />
                <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white dark:border-slate-950 flex items-center justify-center shadow-lg relative z-10">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="mt-2.5 px-3 py-1 bg-slate-950/90 text-[10px] font-mono tracking-widest uppercase font-bold text-white rounded-md shadow-md border border-slate-750 select-none">
                  OKB HQ — Whitefield
                </span>
              </div>
              <div className="absolute bottom-2 left-3 text-[9px] font-mono opacity-60 text-slate-550">
                Lat/Long: 12.9698° N, 77.7500° E
              </div>
            </div>
          </div>

          {/* Right: Consultation Request Ticket Form */}
          <div className="lg:col-span-7 col-span-12" id="contact-form-block col-2">
            <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/20 p-6 sm:p-8 text-left relative overflow-hidden">
                        {/* Success / Error Toast notification banner positioned inside the form holder */}
              <AnimatePresence>
                {toast.show && (
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className={`mb-6 p-4 rounded-xl border flex items-start gap-3 shadow-lg text-sm relative z-20 ${
                      toast.type === "success"
                        ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                        : "bg-rose-500/15 border-rose-500/30 text-rose-800 dark:text-rose-350"
                    }`}
                  >
                    {toast.type === "success" ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-bold text-xs uppercase tracking-wider mb-0.5">
                        {toast.type === "success" ? "System Notification" : "Validation Blocked"}
                      </p>
                      <p className="text-xs opacity-90">{toast.msg}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setToast(prev => ({ ...prev, show: false }))}
                      className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-slate-400 hover:text-slate-650 dark:hover:text-slate-300 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    id="quote-request-form"
                    noValidate
                  >
                    {/* Form-level loading shimmer bar */}
                    {loading && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-sky-550 via-indigo-500 to-sky-655 animate-pulse w-full" style={{ animationDuration: "1s" }} />
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex justify-between">
                          <span>Client Name *</span>
                          {errors.name && <span className="text-rose-500 text-[10px] uppercase font-bold">REQUIRED</span>}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => {
                            setFormData(prev => ({ ...prev, name: e.target.value }));
                            if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                          }}
                          placeholder="e.g. Anand Sharma"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors text-sm ${
                            errors.name ? "border-rose-500/80 dark:border-rose-500/50" : "border-slate-250 dark:border-slate-800 focus:border-sky-500"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-rose-400" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex justify-between">
                          <span>Business Email *</span>
                          {errors.email && <span className="text-rose-500 text-[10px] uppercase font-bold">INVALID</span>}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => {
                            setFormData(prev => ({ ...prev, email: e.target.value }));
                            if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                          }}
                          placeholder="e.g. anand@company.com"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors text-sm ${
                            errors.email ? "border-rose-500/80 dark:border-rose-500/50" : "border-slate-250 dark:border-slate-800 focus:border-sky-500"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-rose-400" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Phone coordinates */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex justify-between">
                          <span>Contact Number *</span>
                          {errors.phone && <span className="text-rose-500 text-[10px] uppercase font-bold">REQUIRED</span>}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => {
                            setFormData(prev => ({ ...prev, phone: e.target.value }));
                            if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                          }}
                          placeholder="e.g. +91 9063523880"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors text-sm ${
                            errors.phone ? "border-rose-500/80 dark:border-rose-500/50" : "border-slate-250 dark:border-slate-800 focus:border-sky-500"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-rose-400" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Packages Filter Selector context */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Baseline Package Selected
                        </label>
                        <select
                          value={formData.packageType}
                          onChange={e => setFormData(prev => ({ ...prev, packageType: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-slate-250 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition-colors text-sm"
                        >
                          <option value="">Choose investment option...</option>
                          <option value="Starter Package">Starter Package — ₹9,999</option>
                          <option value="Business Package">Business Package — ₹24,999</option>
                          <option value="Premium Automation Pack">Premium Automation Pack — ₹49,999</option>
                          <option value="Enterprise Custom Solution">Enterprise Custom Solution — Tailor-Made</option>
                        </select>
                      </div>
                    </div>

                    {/* Interactive service types maps */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex justify-between">
                        <span>Required Solution / Tech Spec *</span>
                        {errors.serviceType && <span className="text-rose-500 text-[10px] uppercase font-bold">REQUIRED</span>}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.serviceType}
                        onChange={e => {
                          setFormData(prev => ({ ...prev, serviceType: e.target.value }));
                          if (errors.serviceType) setErrors(prev => ({ ...prev, serviceType: "" }));
                        }}
                        placeholder="e.g. WhatsApp Automation / ERP Integration / AI Chatbot"
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors text-sm ${
                          errors.serviceType ? "border-rose-500/80 dark:border-rose-500/50" : "border-slate-250 dark:border-slate-800 focus:border-sky-550"
                        }`}
                      />
                      {errors.serviceType && (
                        <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-rose-400" /> {errors.serviceType}
                        </p>
                      )}
                    </div>

                    {/* Specifications */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex justify-between">
                        <span>Project Specifications / Message *</span>
                        {errors.desc && <span className="text-rose-500 text-[10px] uppercase font-bold">TOO SHORT</span>}
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.desc}
                        onChange={e => {
                          setFormData(prev => ({ ...prev, desc: e.target.value }));
                          if (errors.desc) setErrors(prev => ({ ...prev, desc: "" }));
                        }}
                        placeholder="Tell us about your business scope, timelines, or tools currently used in operations..."
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors text-sm resize-none ${
                          errors.desc ? "border-rose-500/80 dark:border-rose-500/50" : "border-slate-250 dark:border-slate-800 focus:border-sky-500"
                        }`}
                      />
                      {errors.desc && (
                        <p className="text-xs text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-rose-400" /> {errors.desc}
                        </p>
                      )}
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 hover:from-sky-500 hover:via-indigo-500 hover:to-sky-600 text-white font-bold uppercase tracking-wider text-xs shadow-md shadow-sky-500/10 hover:shadow-sky-500/30 transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                        id="submit-consultation-btn"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Verifying Specifications...
                          </span>
                        ) : (
                          <>
                            Submit consultation ticket
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center space-y-6"
                    id="contact-success-panel"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircle className="w-8 h-8 animate-bounce" />
                    </div>

                    <div className="space-y-3.5">
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                        Consultation Ticket Logged!
                      </h3>
                      <p className="max-w-md mx-auto text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans">
                        Thank you, <strong>{formData.name}</strong>. OKB INFOTECH's automatic reception log has generated a record matching your specifications.
                      </p>
                    </div>

                    {/* Interactive automated feedback block dummy API integration */}
                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-left space-y-3 dark:text-slate-300">
                      <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
                        <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: "3s" }} /> 
                        OKB AUTORECEIVER SYSTEM LOG
                      </div>
                      <div className="font-mono text-xs space-y-1.5 leading-relaxed text-slate-600 dark:text-slate-350">
                        <div><strong className="text-slate-850 dark:text-slate-250">Target Routing:</strong> shiva4sap@gmail.com</div>
                        <div><strong className="text-slate-850 dark:text-slate-250">Priority Code:</strong> OKB-BLUE-PRIORITY-2026</div>
                        <div><strong className="text-slate-850 dark:text-slate-250">Verification SLA:</strong> Instant automatic response generated. Our lead technician will review this specification and follow up via <span className="underline">{formData.email}</span> within 12 hours.</div>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg border border-slate-250 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-bold uppercase tracking-wider text-slate-655 dark:text-slate-300 transition-colors cursor-pointer"
                    >
                      Submit Another Query Table
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
