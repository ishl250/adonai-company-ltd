import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2 } from '../utils/whatsapp';

interface HeroProps {
  onOpenQuote: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onLearnMore }) => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isRw = language === 'rw';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-[#071a33] text-white overflow-hidden py-12 lg:py-20 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Subtle Background Pattern & Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#76b82a15_1px,transparent_1px),linear-gradient(to_bottom,#76b82a15_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#76b82a]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#76b82a]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Slogan Badge */}
            <motion.div variants={itemFadeUp}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#76b82a]/15 border border-[#76b82a]/40 text-[#8ade2a] shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#76b82a] animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
                  {t.hero.badge}
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemFadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] font-['Outfit',sans-serif]"
            >
              <span>{t.hero.titleLine1}</span> <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#76b82a] via-[#94e339] to-[#76b82a]">
                {t.hero.titleLine2}
              </span>
            </motion.h1>

            {/* Paragraph Description */}
            <motion.p
              variants={itemFadeUp}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              {t.hero.description}
            </motion.p>

            {/* 4 Feature Badges */}
            <motion.div
              variants={itemFadeUp}
              className="grid grid-cols-2 gap-2.5 max-w-lg text-xs sm:text-sm text-slate-200"
            >
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-semibold text-xs sm:text-[13px]">{t.services.finishing.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-semibold text-xs sm:text-[13px]">{t.services.building.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-semibold text-xs sm:text-[13px]">{t.services.painting.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span className="font-semibold text-xs sm:text-[13px]">{t.services.renovation.title}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemFadeUp}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                id="hero-quote-btn"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#76b82a] hover:bg-[#68a61e] transition-all rounded-xl shadow-lg shadow-lime-900/30 hover:scale-[1.02] active:scale-95 gap-2 cursor-pointer font-['Outfit',sans-serif]"
              >
                <span>{t.hero.getQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-learn-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all rounded-xl shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer font-['Outfit',sans-serif]"
              >
                {t.hero.exploreServices}
              </button>
            </motion.div>

            {/* Contact Strip */}
            <motion.div
              variants={itemFadeUp}
              className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#76b82a]" />
                <span className="font-semibold text-white">{t.hero.locationBadge}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#76b82a]" />
                <a
                  href={`tel:${DISPLAY_PHONE_1.replace(/\s+/g, '')}`}
                  className="hover:text-[#76b82a] font-bold text-white transition-colors"
                >
                  {DISPLAY_PHONE_1}
                </a>
                <span className="text-slate-500">/</span>
                <a
                  href={`tel:${DISPLAY_PHONE_2.replace(/\s+/g, '')}`}
                  className="hover:text-[#76b82a] font-bold text-white transition-colors"
                >
                  {DISPLAY_PHONE_2}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Hero Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="ADONAI COMPANY LTD Modern House Building and Finishing in Kigali"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
