import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  HouseFinishingIcon,
  HouseBuildingIcon,
  HousePaintingIcon,
  ArchitecturalDesignIcon,
  HouseRenovationIcon,
} from './ServiceIcons';

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

interface ServiceCardData {
  id: string;
  key: 'finishing' | 'building' | 'painting' | 'design' | 'renovation';
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeColor: string;
  imageUrl: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const { t } = useLanguage();
  const [selectedKey, setSelectedKey] = useState<'finishing' | 'building' | 'painting' | 'design' | 'renovation' | null>(null);

  const serviceCategories: ServiceCardData[] = [
    {
      id: 'house-finishing',
      key: 'finishing',
      icon: HouseFinishingIcon,
      accentColor: 'from-emerald-500/20 to-lime-500/10 border-lime-500/30 text-lime-600',
      badgeColor: 'bg-[#76b82a] text-white',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'house-building',
      key: 'building',
      icon: HouseBuildingIcon,
      accentColor: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-600',
      badgeColor: 'bg-[#071a33] text-[#76b82a]',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'house-painting',
      key: 'painting',
      icon: HousePaintingIcon,
      accentColor: 'from-amber-500/20 to-lime-500/10 border-amber-500/30 text-amber-600',
      badgeColor: 'bg-gradient-to-r from-[#76b82a] to-emerald-600 text-white',
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'interior-exterior-design',
      key: 'design',
      icon: ArchitecturalDesignIcon,
      accentColor: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-600',
      badgeColor: 'bg-[#071a33] text-white',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'house-renovation',
      key: 'renovation',
      icon: HouseRenovationIcon,
      accentColor: 'from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-600',
      badgeColor: 'bg-[#76b82a] text-[#071a33]',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const selectedServiceDetails = selectedKey ? t.services[selectedKey] : null;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8fafc] relative font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            {/* Slogan badge */}
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-[#76b82a]/15 border border-[#76b82a]/30">
              <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                {t.services.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight leading-[1.15] font-['Outfit',sans-serif]">
              {t.services.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              {t.services.subtitle}
            </p>
          </div>

          <div>
            <button
              id="services-get-quote-btn"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#76b82a] hover:bg-[#68a61e] transition-all rounded-xl shadow-md shadow-lime-900/10 active:scale-95 gap-2 cursor-pointer font-['Outfit',sans-serif]"
            >
              <span>{t.hero.getQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Services Cards Grid with Custom Distinct Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((item, idx) => {
            const content = t.services[item.key];
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                id={`service-card-${item.id}`}
                className={`group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/90 flex flex-col justify-between hover:-translate-y-1 ${
                  idx === 0 ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
              >
                {/* Image Header with Custom Distinct Icon Overlay */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/90 via-[#071a33]/40 to-transparent" />

                  {/* Distinct Custom Icon Badge */}
                  <div className="absolute bottom-4 left-4 p-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#071a33] transition-all duration-300">
                    <IconComponent className="w-9 h-9 text-[#76b82a]" />
                  </div>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#071a33]/85 backdrop-blur-xs text-white text-xs font-bold border border-white/20 font-['Outfit',sans-serif]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#071a33] mb-2.5 font-['Outfit',sans-serif] group-hover:text-[#76b82a] transition-colors">
                      {content.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {content.desc}
                    </p>

                    {/* Distinct Key Features */}
                    <div className="space-y-2 mb-6">
                      {content.features?.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#76b82a] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedKey(item.key)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#071a33] group-hover:text-[#76b82a] transition-colors cursor-pointer"
                    >
                      <span>{t.projects.viewDetails}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenQuote(content.title)}
                      className="text-xs font-bold px-3 py-1.5 rounded-md bg-lime-50 text-[#68a61e] hover:bg-[#76b82a] hover:text-white transition-colors cursor-pointer"
                    >
                      {content.cta}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal with Full Bilingual Specifications */}
      {selectedKey && selectedServiceDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedKey(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#071a33] text-white flex items-center justify-center shadow-md p-2 ring-2 ring-[#76b82a]">
                {React.createElement(
                  serviceCategories.find((s) => s.key === selectedKey)!.icon,
                  { className: 'w-8 h-8 text-[#76b82a]' }
                )}
              </div>
              <div>
                <span className="text-xs font-black text-[#76b82a] uppercase tracking-wider font-['Outfit',sans-serif]">
                  ADONAI COMPANY LTD
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#071a33] font-['Outfit',sans-serif]">
                  {selectedServiceDetails.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedServiceDetails.desc}
            </p>

            <div className="mb-6 bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="text-xs font-black uppercase text-[#071a33] tracking-wider mb-3 font-['Outfit',sans-serif]">
                {t.projects.projectScope}
              </h4>
              <ul className="space-y-2.5">
                {selectedServiceDetails.features?.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedKey(null)}
                className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                {t.projects.closeModal}
              </button>
              <button
                type="button"
                onClick={() => {
                  const sTitle = selectedServiceDetails.title;
                  setSelectedKey(null);
                  onOpenQuote(sTitle);
                }}
                className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#76b82a] hover:bg-[#68a61e] rounded-xl shadow-md transition-colors cursor-pointer font-['Outfit',sans-serif]"
              >
                {selectedServiceDetails.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
