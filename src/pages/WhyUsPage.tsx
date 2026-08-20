import React from 'react';
import {
  ShieldCheck,
  Users,
  Clock,
  ThumbsUp,
  CheckCircle2,
  XCircle,
  Scale,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { WorkingProcessSection } from '../components/WorkingProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BrandLogos } from '../components/BrandLogos';
import { useLanguage } from '../context/LanguageContext';

interface WhyUsPageProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
  onOpenConsultation: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenConsultation,
}) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const corePillars = [
    {
      id: 'quality-work',
      title: t.values.quality.title,
      badge: isRw ? 'Ubwiza Butajegajega' : 'Uncompromising Standards',
      icon: ShieldCheck,
      description: isRw
        ? 'Dukurikiza amategeko y\'ubwubatsi n\'ibikoresho byo mu rwego rwo hejuru. Beto ipimwa neza, amakaro aterwa hakoreshejwe laser kugira ngo atagira inenge, n\'amarangi arinda ubushuhe n\'izuba.'
        : 'We adhere to stringent engineering codes and top-grade materials. Every batch of concrete is mixed to specification, floor tiles are laser-aligned without uneven lips, and paint is formulated with anti-fungal UV blockers for long-lasting brilliance.',
      points: isRw
        ? [
            'Ibyuma bikomeye byujuje ubuziranenge (Fe500)',
            'Gupima amakaro na plafond hakoreshejwe laser',
            'Amarangi yizewe arinda inkuta izuba n\'imvura',
            'Kugenzura ubuziranenge ku ntera zose z\'umushinga',
          ]
        : [
            'Certified high-tensile rebar & structural compliance',
            'Laser-calibrated floor & ceiling alignment',
            'Multi-coat weather-resistant exterior sealers',
            'Rigorous quality control inspections at every milestone',
          ],
    },
    {
      id: 'professional-team',
      title: t.values.team.title,
      badge: isRw ? 'Abahanga Babizobereye' : 'Certified Craftsmanship',
      icon: Users,
      description: isRw
        ? 'Ikipe yacu igizwe n\'aba enjeniyeri babifitiye impamyabumenyi, abakuriye imirimo y\'ubwubatsi, abahanga mu gukora gypsum, batera amakaro n\'abasiga amarangi bafite uburambe buhanitse mu Rwanda.'
        : 'Our team comprises licensed civil engineers, seasoned site supervisors, master gypsum craftsmen, precision tile masons, and certified high-altitude painters with extensive track records in Rwanda.',
      points: isRw
        ? [
            'Gukurikiranwa n\'aba enjeniyeri ku rubuga rw\'akazi buri munsi',
            'Abakozi b\'abahanga mu mbaho, gushinga gypsum n\'amarangi',
            'Umutekano ukomeye w\'abakozi n\'ibikoresho byo hejuru',
            'Gukomeza gutoza abakozi tekiniki zigezweho',
          ]
        : [
            'Direct civil engineer site supervision',
            'Master joiners, plasterers & master painters',
            'Strict on-site safety gear and scaffold protocols',
            'Continuous team training on modern building techniques',
          ],
    },
    {
      id: 'on-time-delivery',
      title: t.values.timing.title,
      badge: isRw ? 'Guhagarara ku Isezerano' : 'Milestone Discipline',
      icon: Clock,
      description: isRw
        ? 'Gutinda k\'umushinga biterana igihombo. Dutegura ingengabihe nyayo y\'imirimo, tukazana ibikoresho ku gihe kandi tugakora buri munsi ku buryo umushinga urangirira ku gihe twasezeranye.'
        : 'Construction delays cost you money and peace of mind. We prepare realistic, milestone-based Gantt project schedules, manage material supply chains proactively, and execute with disciplined daily productivity.',
      points: isRw
        ? [
            'Ingengabihe iboneye igaragaza ibyiciro byose by\'akazi',
            'Guteza imbere itangwa ry\'ibikoresho mbere y\'uko akazi gahagarara',
            'Gutanga raporo y\'uko akazi kagenda buri cyumweru',
            'Gushyikiriza umukiriya inzu ku munsi wateganijwe',
          ]
        : [
            'Transparent phase-by-phase completion schedules',
            'Proactive material procurement to avoid site stalls',
            'Daily & weekly milestone progress briefings',
            'Commitment to scheduled handover dates',
          ],
    },
    {
      id: 'customer-satisfaction',
      title: t.values.satisfaction.title,
      badge: isRw ? 'Ubwizerwe no Kunyurwa' : 'Client-Centric Integrity',
      icon: ThumbsUp,
      description: isRw
        ? 'Twizera gukorera mu mucyo 100%. Nta mafranga y\'inyongera atazwi, nta guhindura ibiciro mu nzira, kandi dufasha umukiriya kuva agitangira igitekerezo kugeza ashyikirijwe imfunguzo z\'inzu.'
        : 'We believe in 100% transparency. No hidden charges, no sudden cost escalations, and dedicated customer support from initial conceptual planning until final keys are handed over.',
      points: isRw
        ? [
            'Inyandiko y\'ibiciro ifite ibisobanuro birambuye (BOQ)',
            'Gusubiza vuba kuri WhatsApp na telefoni',
            'Gufasha no gukosora ibikenewe nyuma yo gushyikiriza inzu',
            'Ibiro byo gufasha abakiriya i Gasabo, Kimironko',
          ]
        : [
            'Detailed, transparent Bills of Quantities (BOQ)',
            'Prompt WhatsApp & phone communication',
            'Post-handover warranty and snag-list rectification',
            'Dedicated client support desk in Gasabo, Kimironko',
          ],
    },
  ];

  const comparisonRows = [
    {
      feature: isRw ? 'Ubugenzuzi ku Kibanza' : 'Site Supervision',
      adonai: isRw ? 'Aba Enjeniyeri bahora ku kibanza buri munsi' : 'Dedicated Civil Engineers on site daily',
      others: isRw ? 'Abagenzuzi b\'akazi batabifitiye ubumenyi bahanyura gake' : 'Casual overseers with infrequent visits',
    },
    {
      feature: isRw ? 'Ibiciro no Kwishyuza' : 'Pricing & Billing',
      adonai: isRw ? 'Ibiciro bifatika kandi bisobanutse bitagira amafaranga yihishe' : 'Fixed, transparent Bills of Quantities with no hidden markups',
      others: isRw ? 'Kwishyuza bitazwi no kongera ibiciro hagati mu mushinga' : 'Unclear initial estimates with unexpected mid-project price spikes',
    },
    {
      feature: isRw ? 'Ubwiza bwa Finishing' : 'Finishing Precision',
      adonai: isRw ? 'Amakaro apimwe neza na laser, plafond itagira inenge, inkuta zoroshye' : 'Laser-leveled tiling, seamless gypsum joints, smooth skim coats',
      others: isRw ? 'Amakaro ahese, inkuta zifite imyate, amarangi acya vuba' : 'Visible tile lippage, rough wall patches, paint peeling',
    },
    {
      feature: isRw ? 'Igihe cyo Gusoza' : 'Project Timeline',
      adonai: isRw ? 'Kubaha igihe cyasezeranyijwe no gutanga raporo buri cyumweru' : 'Guaranteed milestone schedules with weekly status updates',
      others: isRw ? 'Gutinda cyane no kutagira gahunda y\'abakozi' : 'Frequent delays and uncoordinated workforce',
    },
    {
      feature: isRw ? 'Ubwishingizi bw\'Ubwiza' : 'Quality Assurance',
      adonai: isRw ? 'Ubwishingizi bwa 100% bwo gukosora icyo ari cyo cyose' : '100% Quality guarantee with snagging warranty post-handover',
      others: isRw ? 'Nta bwishingizi iyo amaze kwishyurwa yose' : 'No formal warranty once final payment is made',
    },
    {
      feature: isRw ? 'Umutekano w\'Abakozi' : 'Worker Safety & Gear',
      adonai: isRw ? 'Imyenda y\'umutekano (PPE), ingofero, n\'ingazi zizewe' : 'Full PPE, certified harnesses, and safe scaffolding standards',
      others: isRw ? 'Gukorera ku ngazi ziteye inkeke nta bikoresho by\'umutekano' : 'Hazardous makeshift scaffolding without safety equipment',
    },
  ];

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Page Hero Banner */}
      <PageHero
        badge={t.values.badge}
        title={t.values.heading}
        subtitle={t.values.subheading}
        breadcrumbs={[{ label: t.navbar.whyUs }]}
        onNavigate={onNavigate}
      />

      {/* 2. 4 Core Pillars In-Depth */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
              <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
              <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                {isRw ? 'ITANDUKANIRO RYA ADONAI' : 'THE ADONAI DIFFERENCE'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
              {isRw ? 'Inkingi 4 Z\'Indashyikirwa' : 'Built On 4 Pillars of Excellence'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              {isRw
                ? 'Inkingi zigaragara ku kirango cyacu kandi zikurikizwa ku mishinga yose mu Rwanda.'
                : 'Prominently displayed on our company banner and practiced on every site in Rwanda.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={`pillar-card-${pillar.id}`}
                  className="bg-slate-50 hover:bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 hover:border-[#76b82a] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#76b82a] text-white flex items-center justify-center shadow-md">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-slate-300 font-['Outfit',sans-serif]">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs font-black text-[#68a61e] uppercase tracking-wider block mb-1 font-['Outfit',sans-serif]">
                      {pillar.badge}
                    </span>

                    <h3 className="text-2xl font-black text-[#071a33] font-['Outfit',sans-serif] mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-200/80 space-y-2">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-[#071a33] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#76b82a]/20 border border-[#76b82a]/40 text-[#82c324] mb-3">
              <Scale className="w-3.5 h-3.5 text-[#82c324]" />
              <span className="text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
                {isRw ? 'IKIGERERANYO CY\'UBUBASI' : 'CONTRACTOR COMPARISON'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif]">
              {isRw ? 'Adonai Company Ltd n\'Abandi Bubatsi Basanzwe' : 'Adonai Company Ltd vs Conventional Contractors'}
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              {isRw
                ? 'Reba itandukaniro ry\'akazi k\'abahanga babizobereye n\'abandi.'
                : 'See the direct difference when you partner with certified building professionals.'}
            </p>
          </div>

          <div className="bg-[#0e2246] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#071a33] border-b border-slate-800 text-white font-['Outfit',sans-serif]">
                    <th className="p-4 sm:p-5 font-black uppercase tracking-wider text-slate-300 w-1/3">
                      {isRw ? 'Ingingo y\'Ingenzi' : 'Key Criterion'}
                    </th>
                    <th className="p-4 sm:p-5 font-black uppercase tracking-wider text-[#82c324] bg-[#76b82a]/10 w-1/3">
                      ADONAI COMPANY LTD
                    </th>
                    <th className="p-4 sm:p-5 font-black uppercase tracking-wider text-slate-400 w-1/3">
                      {isRw ? 'Abandi Bubatsi Basanzwe' : 'Typical Contractors'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-white font-['Outfit',sans-serif]">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 bg-[#76b82a]/5 text-emerald-100 font-medium">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#82c324] shrink-0 mt-0.5" />
                          <span>{row.adonai}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400 font-medium">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-400/80 shrink-0 mt-0.5" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Working Process */}
      <WorkingProcessSection />

      {/* 5. Client Testimonials */}
      <TestimonialsSection />

      {/* 6. Direct Contact CTA Box */}
      <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-[#071a33] to-[#0e2246] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-xs font-black text-[#82c324] uppercase tracking-wider block mb-2 font-['Outfit',sans-serif]">
                {t.contact.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit',sans-serif] leading-tight mb-2">
                {isRw ? 'Witeguye Kubakirwa ku Rwego rw\'Indashyikirwa?' : 'Ready to Experience 100% Quality Construction?'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {isRw
                  ? 'Sura ibiro byacu i Gasabo, Kimironko cyangwa uhamagare aba enjeniyeri bacu mu buryo butaziguye.'
                  : 'Visit our office in Gasabo, Kimironko or call our engineering team directly for a fast on-site consultation.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={onOpenQuote}
                className="px-7 py-3.5 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 text-center uppercase tracking-wider cursor-pointer font-['Outfit',sans-serif]"
              >
                {t.hero.quoteBtn}
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-white text-[#071a33] hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl transition-all text-center cursor-pointer font-['Outfit',sans-serif]"
              >
                {isRw ? 'Gusura Ahubakwa' : 'Book Site Visit'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Brand Highlights Ribbon */}
      <BrandLogos />
    </div>
  );
};
