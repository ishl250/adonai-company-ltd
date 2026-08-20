import React from 'react';
import { Award, Users, Clock, ThumbsUp, Target, Eye, Building2, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { TeamSection } from '../components/TeamSection';
import { BrandLogos } from '../components/BrandLogos';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenConsultation,
}) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const milestones = [
    {
      year: isRw ? 'Urugendo Rwatangiriye' : 'Foundational Journey',
      title: isRw ? 'Gushingwa mu Karere ka Gasabo, Kimironko' : 'Established in Gasabo, Kimironko',
      description: isRw
        ? 'Adonai Company Ltd yashinzwe igamije gukemura ibibazo byo kubaka inzu zigezweho no kurangiza (Finishing) ku rwego rwo hejuru mu Mujyi wa Kigali.'
        : 'Adonai Company Ltd was founded to address the growing demand for high-standard residential and commercial construction with strict finishing precision in Kigali.',
    },
    {
      year: isRw ? 'Kwagura Ibikorwa' : 'Expansion of Craftsmanship',
      title: isRw ? 'Ishami ry\'Ubwubatsi, Finishing n\'Amarangi' : 'Signature House Finishing & Painting Desk',
      description: isRw
        ? 'Twazanye uburyo bwo gusakara neza na Gypsum, amakaro meza ya Porcelaine, n\'amarangi adacya ku zuba cyangwa imvura.'
        : 'Introduced specialized divisions for Italian gypsum ceilings, imported porcelain floor tiling, and anti-weather UV exterior wall painting.',
    },
    {
      year: isRw ? 'Ubuyobozi Bugezweho' : 'Modern Construction Leadership',
      title: isRw ? 'Kubaka Amazu Meza n\'Ubuyobozi Bwuzuye' : 'Full Turnkey Villa & Renovation Operations',
      description: isRw
        ? 'Dutanga serivisi zose zo kubaka amazu meza (Villas), kuvugurura inzu zishaje, no gushushanya imbere n\'inyuma mu gihugu hose.'
        : 'Delivering end-to-end villa construction, structural restorations, and custom interior design across Gasabo and throughout Rwanda.',
    },
  ];

  const corePillars = [
    {
      icon: Award,
      title: t.values.quality.title,
      subtitle: t.values.quality.desc,
    },
    {
      icon: Users,
      title: t.values.team.title,
      subtitle: t.values.team.desc,
    },
    {
      icon: Clock,
      title: t.values.timing.title,
      subtitle: t.values.timing.desc,
    },
    {
      icon: ThumbsUp,
      title: t.values.satisfaction.title,
      subtitle: t.values.satisfaction.desc,
    },
  ];

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Page Hero Banner */}
      <PageHero
        badge={t.about.badge}
        title={t.about.title}
        subtitle={t.about.subtitle}
        breadcrumbs={[{ label: t.navbar.about }]}
        onNavigate={onNavigate}
      />

      {/* 2. Story & Identity Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Showcase with Dual Overlays */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
                  alt="Adonai Company Ltd Site Operations"
                  className="w-full h-[450px] sm:h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/70 via-transparent to-transparent" />
              </div>

              {/* Float Card 1: Experience & Location */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#76b82a] text-white p-5 sm:p-6 rounded-xl shadow-xl z-20 max-w-[210px]">
                <div className="text-3xl font-black font-['Outfit',sans-serif]">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-lime-100 font-['Outfit',sans-serif]">
                  {isRw ? 'Ubwiza Bwishingiwe' : 'Quality Guaranteed'}
                </div>
                <div className="text-[11px] text-white/90 font-medium mt-1">Gasabo, Kimironko</div>
              </div>

              {/* Float Card 2: Civil Engineering Leadership */}
              <div className="hidden sm:flex items-center gap-3 absolute -top-4 -right-4 bg-[#071a33] text-white px-5 py-3 rounded-xl shadow-xl border border-slate-700">
                <Building2 className="w-5 h-5 text-[#76b82a]" />
                <div>
                  <div className="text-xs font-bold font-['Outfit',sans-serif]">
                    {isRw ? 'Kompanyi y\'Ubwubatsi i Kigali' : 'Kigali Construction Firm'}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {isRw ? 'Amazu yo Guturamo n\'Ubucuruzi' : 'Residential & Commercial'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
                <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
                <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                  {isRw ? 'INKURU Y\'ISOSIYETE YACU' : 'OUR CORPORATE STORY'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#071a33] tracking-tight leading-tight font-['Outfit',sans-serif] mb-6">
                {t.about.title}
              </h2>

              <div className="border-l-4 border-[#76b82a] pl-4 py-1.5 mb-6 text-slate-700 text-sm sm:text-base italic leading-relaxed bg-slate-50 rounded-r-lg font-medium">
                "{isRw ? 'Intego yacu: Kubaka Icyerekezo Cyawe, Turema Agaciro Gahoraho.' : 'Building Your Vision, Creating Lasting Value.'}"
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {t.about.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-3.5 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer font-['Outfit',sans-serif]"
                >
                  <span>{t.hero.quoteBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#071a33] font-bold text-sm rounded-xl transition-all cursor-pointer font-['Outfit',sans-serif]"
                >
                  {isRw ? 'Gusura Ahubakwa' : 'Schedule Site Visit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Guiding Principles */}
      <section className="py-16 bg-[#f8fafc] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden group hover:border-[#76b82a] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#76b82a]/15 text-[#68a61e] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#071a33] font-['Outfit',sans-serif] mb-3">
                {isRw ? 'Inshingano Zacu (Mission)' : 'Our Corporate Mission'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isRw
                  ? 'Gutanga serivisi z\'indashyikirwa mu bwubatsi, finishing no kuvugurura inzu mu Rwanda hose, twifashishije abahanga babizobereye, ibikoresho byujuje ubuziranenge, no kubahiriza igihe.'
                  : 'To deliver world-class construction, finishing, and structural renovation solutions across Rwanda by uniting skilled craftsmanship, engineering discipline, honest pricing, and strict on-time delivery.'}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden group hover:border-[#76b82a] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#071a33] text-[#82c324] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#071a33] font-['Outfit',sans-serif] mb-3">
                {isRw ? 'Icyerekezo Cyacu (Vision)' : 'Our Strategic Vision'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isRw
                  ? 'Kuba ikigo cy\'indashyikirwa kandi cyizewe cyane mu bwubatsi no kurangiza inzu i Kigali no mu Rwanda hose, duhindura inzozi z\'abakiriya amazu meza arambye kandi afite agaciro gakomeye.'
                  : 'To be the most trusted and sought-after construction and house finishing brand in Kigali and beyond, recognized for transforming dreams into enduring architectural landmarks of lasting value.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Company Journey & Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
              <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
              <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                {isRw ? 'ITERAMBERE RYACU' : 'OUR PROGRESSION'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
              {isRw ? 'Intambwe n\'Ibyagezweho' : 'Our Foundation & Milestones'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {isRw
                ? 'Uko Adonai Company Ltd yubatse izina ry\'ubwizerwe mu bwubatsi i Gasabo, Kimironko.'
                : 'How Adonai Company Ltd grew into a hallmark of building reliability in Kigali.'}
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#76b82a] border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold z-10 font-['Outfit',sans-serif]">
                  {idx + 1}
                </div>

                {/* Content Box */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                    <span className="text-xs font-black text-[#76b82a] uppercase tracking-wider block mb-1 font-['Outfit',sans-serif]">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-black text-[#071a33] font-['Outfit',sans-serif] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values Grid */}
      <section className="py-16 bg-[#071a33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black font-['Outfit',sans-serif]">
              {t.values.heading}
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              {t.values.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0e2246] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#76b82a]/20 text-[#82c324] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-black text-white font-['Outfit',sans-serif] mb-1.5 uppercase">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Team Component */}
      <TeamSection />

      {/* 7. Brand Highlight Ribbon */}
      <BrandLogos />
    </div>
  );
};
