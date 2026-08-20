import React from 'react';
import { Check, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SpecializationSectionProps {
  onOpenVideo: () => void;
}

export const SpecializationSection: React.FC<SpecializationSectionProps> = ({ onOpenVideo }) => {
  const { language } = useLanguage();

  const isRw = language === 'rw';

  const leftFeatures = isRw
    ? [
        'Gufinisha inzu by\'umwihariko: gusiga neza no gushyiraho plafoni za gypsum',
        'Kubaka inzu zikomeye, imisingi ihamye n\'inkingi za beto ziringaniye',
        'Gukora igishushanyo mbonera (Design) cy\'imbere n\'inyuma ku nzu yawe',
      ]
    : [
        'House finishing with pristine plastering & acoustic gypsum ceilings',
        'Solid structural brickwork, blockwork & foundation engineering',
        'Interior & exterior custom architectural design planning',
      ];

  const rightFeatures = isRw
    ? [
        'Gusiga amarangi akomeye arinda imvura n\'izuba, no gushushanya ku nkuta',
        'Gukora inzugi z\'ibiti byiza, utubati tw\'igikoni, no gusasamo amakaro meza',
        'Kuvugurura inzu zose zikaba nshya kandi zikomeye mu buryo bugezweho',
      ]
    : [
        'Long-lasting weather-shield paint & decorative texturing',
        'Custom woodwork, doors, kitchen cabinets, and modern tile flooring',
        'Full house renovations & structural modernizations',
      ];

  return (
    <section id="specialization" className="bg-[#071a33] text-white py-20 lg:py-28 overflow-hidden relative font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and Features List */}
          <div className="lg:col-span-6 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#76b82a]/20 border border-[#76b82a]/40 text-[#82c324]">
              <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
                {isRw ? 'UBWIZA N\'UBURAMBE' : 'OUR SPECIALIZATION'}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-['Outfit',sans-serif] mb-8">
              {isRw ? (
                <>
                  Impamvu Abakiriya Bahitamo <br />
                  <span className="text-[#76b82a]">Adonai Company Ltd</span>
                </>
              ) : (
                <>
                  Why Homeowners Trust <br />
                  <span className="text-[#76b82a]">Adonai Company Ltd</span>
                </>
              )}
            </h2>

            {/* 2-Column Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
              {/* Left Column */}
              <div className="space-y-5">
                {leftFeatures.map((feat, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#76b82a]/20 text-[#82c324] flex items-center justify-center shrink-0 mt-0.5 border border-[#76b82a]/30">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                {rightFeatures.map((feat, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#76b82a]/20 text-[#82c324] flex items-center justify-center shrink-0 mt-0.5 border border-[#76b82a]/30">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Workers Photo with Play Button */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/50">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
                alt="Adonai engineers reviewing building plans on site in Kigali"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Video Play Button */}
              <button
                id="specialization-video-btn"
                onClick={onOpenVideo}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#76b82a] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group z-20 cursor-pointer"
                aria-label="Play Construction Tour Video"
              >
                <div className="absolute inset-0 rounded-full bg-[#76b82a] animate-ping opacity-35" />
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-xs text-slate-200">
                <span className="font-bold text-white block">
                  {isRw ? 'Gusura Imirimo ya Adonai Company Ltd' : 'Adonai Construction Tour'}
                </span>
                <span>
                  {isRw
                    ? 'Irebere ubuhanga n\'ubunyamwuga mu gushinga inzu n\'ubwubatsi i Gasabo, Kimironko'
                    : 'Experience our site management and craftsmanship in Gasabo, Kimironko'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
