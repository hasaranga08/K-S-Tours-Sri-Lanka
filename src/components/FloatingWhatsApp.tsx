import React from 'react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';
import { MessageCircle, Phone } from 'lucide-react';

interface FloatingWhatsAppProps {
  customMessage?: string;
  contextTitle?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ customMessage, contextTitle }) => {
  const dynamicMsg = customMessage || (
    contextTitle 
      ? `Hello KS Tours, I am interested in "${contextTitle}". Could you please provide quotation and details?`
      : `Hello Kumar & Sons Tours, I would like to enquire about traveling in Sri Lanka.`
  );

  const whatsappUrl = getWhatsAppUrl(dynamicMsg);

  return (
    <>
      {/* Floating desktop button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 group">
        <div className="bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Quick response on WhatsApp
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-emerald-400"
          aria-label="Chat with Kumar & Sons Tours on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="font-semibold tracking-wide">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile sticky bottom conversion bar (complies with 15% mobile sticky cap) */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={COMPANY_INFO.phoneTel}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 border border-neutral-300 rounded-lg text-xs font-semibold text-neutral-800 active:bg-neutral-100"
        >
          <Phone className="w-3.5 h-3.5 text-neutral-600" />
          <span>Call Us</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 py-2 px-4 bg-emerald-600 active:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Plan on WhatsApp</span>
        </a>
      </aside>
    </>
  );
};
