import React from 'react';
import { ShieldCheck, Users, Clock, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValuesSection: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      id: 'quality-work',
      title: t.values.qualityWork.title,
      description: t.values.qualityWork.desc,
      badge: t.values.qualityWork.badge,
      icon: ShieldCheck,
      number: '01',
    },
    {
      id: 'professional-team',
      title: t.values.professionalTeam.title,
      description: t.values.professionalTeam.desc,
      badge: t.values.professionalTeam.badge,
      icon: Users,
      number: '02',
    },
    {
      id: 'on-time-delivery',
      title: t.values.onTimeDelivery.title,
      description: t.values.onTimeDelivery.desc,
      badge: t.values.onTimeDelivery.badge,
      icon: Clock,
      number: '03',
    },
    {
      id: 'customer-satisfaction',
      title: t.values.customerSatisfaction.title,
      description: t.values.customerSatisfaction.desc,
      badge: t.values.customerSatisfaction.badge,
      icon: ThumbsUp,
      number: '04',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#071a33] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#76b82a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#76b82a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#76b82a]/20 border border-[#76b82a]/40 text-[#82c324] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#76b82a] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
              {t.values.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
            {t.values.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            {t.values.subtitle}
          </p>
        </div>

        {/* 4 Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                id={`value-card-${val.id}`}
                className="bg-[#0e2246] hover:bg-[#132c58] p-7 rounded-2xl border border-slate-800 hover:border-[#76b82a]/50 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-xl bg-[#76b82a]/20 text-[#82c324] group-hover:bg-[#76b82a] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-slate-600 group-hover:text-[#76b82a] font-['Outfit',sans-serif] font-black text-2xl transition-colors">
                      {val.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 font-['Outfit',sans-serif] tracking-wide group-hover:text-[#76b82a] transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-[#82c324]">
                  <span>{val.badge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
