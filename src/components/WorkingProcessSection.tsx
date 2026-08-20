import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const WorkingProcessSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const steps = [
    {
      stepNumber: '01',
      title: isRw ? 'Gusuzuma Umushinga & Ikibanza' : 'Consultation & Site Assessment',
      description: isRw
        ? 'Tugusura ku kibanza cyangwa ku nzu yawe i Gasabo/Kigali tugasuzuma ibikenewe byose n\'ingengo y\'imari yawe.'
        : 'We meet at your plot or residence in Gasabo/Kigali to evaluate your plans, structural needs, and budget.',
    },
    {
      stepNumber: '02',
      title: isRw ? 'Gutegura Gahunda & Ibikoresho' : 'Detailed Planning & Finishing Design',
      description: isRw
        ? 'Abanyamwuga bacu bakora imbonerahamwe y\'ibikoresho (BOQ), igishushanyo mbonera, no gushyiraho igihe ntarengwa cyo gusoza.'
        : 'Our civil engineers formulate material bills of quantities, architectural finishes, color palettes, and strict timelines.',
    },
    {
      stepNumber: '03',
      title: isRw ? 'Gukora Imirimo & Gutanga Inzu' : 'Flawless Execution & Handover',
      description: isRw
        ? 'Itsinda ryacu ry\'abahanga rikora imirimo y\'ubwubatsi, gusiga amarangi, no gukora finishing nziza cyane, tukagushyikiriza inzu ku gihe.'
        : 'Our professional crew executes the masonry, painting, interior woodwork, and finishes with on-time delivery.',
    },
  ];

  const stats = [
    { percentage: 100, title: t.values.qualityWork.title, subtitle: t.values.qualityWork.badge },
    { percentage: 98, title: t.values.onTimeDelivery.title, subtitle: t.values.onTimeDelivery.badge },
    { percentage: 100, title: t.values.professionalTeam.title, subtitle: t.values.professionalTeam.badge },
    { percentage: 99, title: t.values.customerSatisfaction.title, subtitle: t.values.customerSatisfaction.badge },
  ];

  return (
    <section id="process" className="relative py-20 lg:py-28 bg-[#f8fafc] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-[#76b82a]/15 border border-[#76b82a]/30">
            <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
              {isRw ? 'UBURYO DUKORAMO' : 'HOW WE WORK'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
            {isRw ? 'Intambwe 3 Z\'Ubunyamwuga' : 'Our Proven 3-Step Process'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {isRw
              ? 'Gukorera ku bipimo nyabyo no kubahiriza amasezerano ku mishinga yose mu Rwanda.'
              : 'Delivering precision and accountability on every project across Rwanda.'}
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              {/* Outline Number */}
              <div className="text-6xl sm:text-7xl font-black text-slate-200 group-hover:text-lime-300 transition-colors font-['Outfit',sans-serif] leading-none mb-4 select-none">
                {step.stepNumber}
              </div>

              <h3 className="text-xl font-black text-[#071a33] font-['Outfit',sans-serif] group-hover:text-[#76b82a] transition-colors mb-3">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Circular Percentage Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat, idx) => {
            const strokeDashoffset = 283 - (283 * stat.percentage) / 100;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* SVG Circular Progress Bar */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="#e2e8f0"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="#76b82a"
                      strokeWidth="6"
                      strokeDasharray="283"
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center font-['Outfit',sans-serif]">
                    <span className="text-2xl sm:text-3xl font-black text-[#071a33]">
                      {stat.percentage}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#76b82a] ml-0.5">%</span>
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-black text-[#071a33] tracking-wider uppercase mb-1 font-['Outfit',sans-serif]">
                  {stat.title}
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
