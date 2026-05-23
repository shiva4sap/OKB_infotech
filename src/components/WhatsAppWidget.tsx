import React from "react";
import { MessageCircle } from "lucide-react"; // MessageSquare or MessageSquare
import { motion } from "motion/react";

export default function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/919063523880?text=Hello%20OKB%20INFOTECH%20team,%20I'd%20like%20to%20request%20an%20operation%20blueprint%20for%20my%20business!";

  return (
    <div className="fixed bottom-22 right-6 z-40 select-none" id="whatsapp-widget">
      <motion.a
        whileHover={{ scale: 1.07 }}
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-13.5 h-13.5 rounded-full bg-emerald-500 hover:bg-emerald-450 text-white shadow-xl shadow-emerald-500/20 flex items-center justify-center relative cursor-pointer"
        title="Consult via WhatsApp Live"
      >
        {/* Dynamic ripple glow */}
        <div className="absolute inset-0 rounded-full border border-emerald-400/50 animate-ping opacity-40" />
        <MessageCircle className="w-6.5 h-6.5 fill-current" />
      </motion.a>
    </div>
  );
}
export { WhatsAppWidget };
