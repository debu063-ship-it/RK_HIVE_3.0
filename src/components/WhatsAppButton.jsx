import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function WhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-white/15 text-white text-xs font-semibold animate-fade-in">
          <span>Chat with RK HIVE Asansol on WhatsApp</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-neutral-400 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={BRAND_INFO.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipVisible(true)}
        className="group relative flex items-center justify-center w-14 h-14 p-4 rounded-full bg-cerulean-600 hover:bg-cerulean-500 text-white transition-colors duration-200 border border-white/10"
        aria-label="Direct WhatsApp Concierge"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF1376]"></span>
        </span>
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
