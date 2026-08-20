import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TestimonialItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      quote: isRw
        ? 'Adonai Company Ltd yakoze finishing no gusiga amarangi inzu yacu i Kimironko mu buryo buhanitse. Inkuta na plafond bya gypsum byasohotse neza cyane birenze ibyo twari twiteze.'
        : 'Adonai Company Ltd completed the finishing and exterior painting of our home in Kimironko with incredible attention to detail. The walls and ceilings look modern and pristine.',
      authorName: 'Emmanuel M.',
      authorRole: isRw ? 'Nyir\'inzu' : 'Homeowner',
      location: 'Kimironko, Gasabo',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'test-2',
      quote: isRw
        ? 'Guhera ku musingi kugeza ku gisenge cya beto, ikipe yabo yakoreye ku gihe kandi yubahiriza ingengo y\'imari. Ubugenzuzi bw\'aba enjeniyeri bwaduhesheje umutekano usesuye.'
        : 'From foundation masonry to the final roof slab, their team worked on-time and stayed within the budget. Highly professional civil engineering supervision.',
      authorName: 'Claire U.',
      authorRole: isRw ? 'Umukiriya w\'Inzu yo Guturamo' : 'Residential Client',
      location: 'Nyarutarama, Kigali',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    },
    {
      id: 'test-3',
      quote: isRw
        ? 'Twahaye Adonai akazi ko kuvugurura inzu yacu yose. Bahinduye inzu yari ishaje iba inzu nziza cyane igezweho. Kunezeza umukiriya nibyo bashyira imbere by\'ukuri.'
        : 'We contracted Adonai for a complete house renovation. They transformed an aging property into a vibrant, contemporary living space. Customer satisfaction is truly their priority.',
      authorName: 'Jean Claude N.',
      authorRole: isRw ? 'Umushoramari mu Mazu' : 'Property Investor',
      location: 'Gasabo District',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Watermark Quotes */}
      <div className="absolute right-6 top-10 opacity-5 pointer-events-none text-slate-900 hidden lg:block">
        <Quote className="w-96 h-96 transform rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
            <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
              {t.testimonials.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 sm:p-9 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#76b82a] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                <img
                  src={item.avatarUrl}
                  alt={item.authorName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#76b82a]/40"
                />
                <div>
                  <h4 className="text-sm font-black text-[#071a33] font-['Outfit',sans-serif]">
                    {item.authorName}
                  </h4>
                  <p className="text-[11px] font-bold text-[#76b82a] uppercase tracking-wider font-['Outfit',sans-serif]">
                    {item.authorRole} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
