import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { CHATBOT_PRESET_OPTIONS, CHATBOT_RESPONSES } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    { sender: "bot", text: CHATBOT_RESPONSES.welcome }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const endOfChatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Append User Message
    setMessages(prev => [...prev, { sender: "user", text: textToSend }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI system thinking and typing
    setTimeout(() => {
      setIsTyping(false);
      let reply = "";

      // Simple keyword detection for smart responses
      const query = textToSend.toLowerCase();
      if (query.includes("service") || query.includes("what do you do") || query.includes("capability")) {
        reply = CHATBOT_RESPONSES.services;
      } else if (query.includes("package") || query.includes("price") || query.includes("cost") || query.includes("pricing")) {
        reply = CHATBOT_RESPONSES.packages;
      } else if (query.includes("book") || query.includes("consult") || query.includes("schedule") || query.includes("call")) {
        reply = CHATBOT_RESPONSES.booking;
      } else if (query.includes("custom") || query.includes("tailor") || query.includes("erp") || query.includes("crm")) {
        reply = CHATBOT_RESPONSES.custom;
      } else if (query.includes("who are you") || query.includes("okb") || query.includes("company")) {
        reply = "We are OKB INFOTECH, Bangalore's premier software and WhatsApp automation solutions partner. We transform traditional business structures into digital growth engines!";
      } else {
        reply = "Thank you for connecting with OKB Virtual Assistant! That's an interesting project spec. To get a comprehensive tech architecture estimate and direct pricing, please scroll to our **Contact Section** and submit an strategy ticket, or email us at **shiva4sap@gmail.com**!";
      }

      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
    }, 900);
  };

  const handlePresetClick = (optionId: string, optionText: string) => {
    setMessages(prev => [...prev, { sender: "user", text: optionText }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = CHATBOT_RESPONSES[optionId] || "Our team is ready to analyze your exact engineering requirements. Drop us a note on shiva4sap@gmail.com!";
      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans" id="chatbot-widget-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="w-[330px] sm:w-[370px] h-[480px] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl flex flex-col justify-between overflow-hidden"
            id="chatbot-window"
          >
            {/* Header */}
            <div className="px-5 py-4.5 bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 select-none">
                  <Bot className="w-4.5 h-4.5 text-white animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold tracking-wide">
                    OKB Virtual Growth Bot
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-slate-100 uppercase tracking-widest leading-none">
                      AI agent active
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/15 text-white cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4.5 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-900/10">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"} text-left animate-fade-in`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                      m.sender === "user"
                        ? "bg-sky-500 text-white rounded-tr-none"
                        : "bg-white dark:bg-slate-850 text-slate-850 dark:text-slate-150 border border-slate-205/60 dark:border-slate-800 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start text-left">
                  <div className="bg-white dark:bg-slate-850 rounded-2xl rounded-tl-none border border-slate-205/60 dark:border-slate-800 px-4 py-3 flex items-center gap-1 select-none shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={endOfChatRef} />
            </div>

            {/* Preset Options Carousel */}
            {messages.length < 5 && (
              <div className="p-2.5 border-t border-slate-100 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 flex flex-wrap gap-1.5 text-left select-none">
                {CHATBOT_PRESET_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handlePresetClick(opt.id, opt.text)}
                    className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-[11px] font-semibold text-slate-650 dark:text-slate-350 hover:border-sky-500 hover:text-sky-500 transition-colors cursor-pointer text-left"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input typing panel */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-950 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask OKB AI Bot something..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:border-sky-500 text-xs text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-sky-500 hover:bg-sky-655 text-white cursor-pointer hover:scale-103 transition-transform"
                title="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating bouncer launch bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13.5 h-13.5 rounded-full bg-gradient-to-tr from-sky-600 via-sky-600 to-indigo-650 hover:from-sky-500 hover:to-indigo-500 text-white shadow-xl shadow-sky-500/20 hover:scale-107 transition-transform duration-300 flex items-center justify-center relative cursor-pointer"
        id="chatbot-launch-bubble"
        title="Open AI Chat Assistant"
      >
        <MessageSquare className="w-6 h-6 absolute" />
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950" />
      </button>
    </div>
  );
}
