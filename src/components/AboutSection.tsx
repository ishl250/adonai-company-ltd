import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onLearnMore: () => void;
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onOpenQuote }) => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=900&auto=format&fit=crop"
                  alt="Adonai Company Ltd Construction Site in Kigali"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/60 via-transparent to-transparent" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#76b82a] text-white p-5 sm:p-6 rounded-2xl shadow-xl z-20 max-w-[210px]">
                <div className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] leading-tight">
                  100% <span className="text-xs sm:text-sm font-bold block text-white/90">{t.values.qualityWork.title}</span>
                </div>
                <div className="text-xs font-semibold tracking-wide text-lime-100 mt-1">
                  Gasabo, Kimironko
                </div>
              </div>

              {/* Secondary Corner Tag */}
              <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 bg-[#071a33] text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-700 font-['Outfit',sans-serif]">
                <Award className="w-4 h-4 text-[#76b82a]" />
                <span className="text-xs font-bold">{t.about.experienceBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6">
            {/* Slogan Badge */}
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-[#76b82a]/15 border border-[#76b82a]/30">
              <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                {t.about.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight leading-tight font-['Outfit',sans-serif] mb-6">
              {t.about.title}
            </h2>

            {/* Quote Block */}
            <div className="border-l-4 border-[#76b82a] pl-4 py-2 mb-6 text-slate-700 text-sm sm:text-base italic leading-relaxed bg-slate-50 rounded-r-lg">
              "{t.about.p1}"
            </div>

            {/* Main Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {t.about.p2}
            </p>

            {/* 4 Core Pillars Preview */}
            <div className="grid grid-cols-2 gap-3 mb-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-bold text-[#071a33]">{t.values.qualityWork.title}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-bold text-[#071a33]">{t.values.professionalTeam.title}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-bold text-[#071a33]">{t.values.onTimeDelivery.title}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-bold text-[#071a33]">{t.values.customerSatisfaction.title}</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                id="about-quote-btn"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center px-7 py-3 text-sm font-bold text-white bg-[#76b82a] hover:bg-[#68a61e] transition-all rounded-xl shadow-md active:scale-95 cursor-pointer font-['Outfit',sans-serif]"
              >
                {t.hero.getQuote}
              </button>

              <button
                id="about-us-btn"
                onClick={onLearnMore}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#071a33] bg-slate-100 hover:bg-slate-200 transition-all rounded-xl cursor-pointer font-['Outfit',sans-serif]"
              >
                {t.about.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
