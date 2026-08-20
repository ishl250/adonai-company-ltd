import React from 'react';
import { Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppLink } from '../utils/whatsapp';

export const HeaderTop: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div id="header-top-bar" className="bg-[#071a33] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800 hidden sm:block font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-6 flex-wrap">
          <a
            id="topbar-email-link"
            href="mailto:nshimiyimianad637@gmail.com"
            className="flex items-center gap-2 hover:text-[#76b82a] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#76b82a]" />
            <span>{t.headerTop.email}</span>
          </a>

          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#76b82a]" />
            <span>{t.headerTop.location}</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#76b82a]" />
            <span>{t.headerTop.hours}</span>
          </div>
        </div>

        {/* Right: Phone Numbers, WhatsApp & Language Switcher */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-[#76b82a]" />
            <a href="tel:+250782036988" className="hover:text-[#76b82a] font-semibold transition-colors">
              {t.headerTop.phone1}
            </a>
            <span className="text-slate-600">|</span>
            <a href="tel:+250788818039" className="hover:text-[#76b82a] font-semibold transition-colors">
              {t.headerTop.phone2}
            </a>
          </div>

          <a
            href={getWhatsAppLink(language)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#76b82a]/20 hover:bg-[#76b82a] text-[#82c324] hover:text-white font-bold transition-colors"
          >
            <span>WhatsApp</span>
          </a>

          {/* Language Switcher Button (EN / RW) */}
          <div className="flex items-center border border-slate-700 rounded-md overflow-hidden bg-slate-900/60 p-0.5">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 text-[11px] font-bold rounded transition-colors ${
                language === 'en'
                  ? 'bg-[#76b82a] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('rw')}
              className={`px-2 py-0.5 text-[11px] font-bold rounded transition-colors ${
                language === 'rw'
                  ? 'bg-[#76b82a] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              RW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

