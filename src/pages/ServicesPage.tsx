import React, { useState } from 'react';
import {
  Sparkles,
  Hammer,
  Paintbrush,
  Home,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Layers,
  Clock,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BrandLogos } from '../components/BrandLogos';
import { useLanguage } from '../context/LanguageContext';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2 } from '../utils/whatsapp';

interface ServicesPageProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: (defaultService?: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenConsultation,
}) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const [activeServiceId, setActiveServiceId] = useState<string>('finishing');

  // Interactive Estimator State
  const [calcService, setCalcService] = useState('finishing');
  const [areaSqm, setAreaSqm] = useState(150);
  const [finishQuality, setFinishQuality] = useState<'standard' | 'premium' | 'luxury'>('premium');

  const servicesData = [
    {
      id: 'finishing',
      name: t.services.finishing.title,
      badge: isRw ? 'Ubwiza Bwihariye' : 'Signature Craft',
      icon: Sparkles,
      tagline: isRw
        ? 'Gusiga isima neza, gukora gypsum mu gisenge, gutera amakaro meza n\'indi mirimo ya nyuma.'
        : 'Flawless plastering, gypsum artistry, tile layouts, and fine architectural touches.',
      heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      description: isRw
        ? 'Kurangiza inzu (Finishing) niyo ituma inzu igira ubwiza n\'agaciro gakomeye. Adonai Company Ltd ihindura inzu itarangiye ikaba inzu nziza cyane yo kubamo. Dukora plafond ya Gypsum ifite amatara meza, amakaro ashyizweho ku murongo utunganye, n\'amarangi meza.'
        : 'House finishing is the heart of what gives a home its soul and value. Adonai Company Ltd transforms raw brick and concrete skeletons into refined, modern living sanctuaries. We handle everything from laser-leveled floor tiling and mirror-smooth wall skimming to multi-tier acoustic gypsum ceilings.',
      deliverables: isRw
        ? [
            'Gukora plafond ya Gypsum igezweho ifite amatara ya LED',
            'Gushyiraho amakaro ya Porcelaine akoresheje laser kugira ngo atungane',
            'Kunoza inkuta n\'isima nziza cyane no kurinda imyate',
            'Gushyiramo ibikoresho byo mu bwiherero no mu gikoni bigezweho',
            'Gushyiraho inzugi z\'ibirahure n\'imbaho zikomeye',
            'Gusiga amarangi anyuranye meza kandi adacya',
          ]
        : [
            'Multi-Tier Gypsum Ceilings with ambient LED channel grooves',
            'Laser-Aligned Italian & Spanish porcelain tile installation',
            'Mirror-Smooth Skimmed Wall Finishing & anti-crack priming',
            'Modern Bathroom Sanitary Ware & Custom Vanity Fixtures',
            'Custom Aluminium, Glass, and Solid Hardwood Door Frames',
            'High-Gloss, Matte, and Textured Wall Finish Treatments',
          ],
      materials: isRw
        ? [
            'Imbaho n\'imbaho za Gypsum zikomeye zifite amapantalo y\'icyuma',
            'Amakaro meza ya Porcelaine n\'amatafari meza',
            'Isima nziza yo guhoma no kurinda ubushuhe',
            'Ibirahure bikomeye n\'ibyuma by\'aluminium birambye',
          ]
        : [
            'High-Grade Gypsum Boards & Galvanized Furring Channels',
            'Imported Porcelain & Granite Tiles with Anti-Stain Grouts',
            'Polymer-Modified Skim Coats & Moisture Blockers',
            'Tempered Glass & Anodized Architectural Aluminium',
          ],
      workflow: isRw
        ? [
            { phase: 'Icyiciro 1', task: 'Kuringaniza no kugenzura imiyoboro y\'amashanyarazi n\'amazi' },
            { phase: 'Icyiciro 2', task: 'Guteranya plafond ya Gypsum n\'amatara' },
            { phase: 'Icyiciro 3', task: 'Guhoma no gutunganya inkuta hakoreshejwe ibikoresho birinda ubushuhe' },
            { phase: 'Icyiciro 4', task: 'Gushyiraho amakaro, ibikoresho by\'isuku no gusiga irangi rya nyuma' },
          ]
        : [
            { phase: 'Phase 1', task: 'Surface leveling, electrical & plumbing conduit verification' },
            { phase: 'Phase 2', task: 'Gypsum ceiling framing & precision acoustic board mounting' },
            { phase: 'Phase 3', task: 'Wall plastering, skimming, and waterproof primer application' },
            { phase: 'Phase 4', task: 'Tile alignment, sanitary fittings, and final coat detailing' },
          ],
    },
    {
      id: 'building',
      name: t.services.building.title,
      badge: isRw ? 'Ubwubatsi Bukomeye' : 'Structural Engineering',
      icon: Hammer,
      tagline: isRw
        ? 'Kubaka amazu yo guturamo n\'ay\'ubucuruzi guhera ku musingi kugeza ku gisenge.'
        : 'End-to-end residential and commercial builds from foundation to roof slab.',
      heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=1200&auto=format&fit=crop',
      description: isRw
        ? 'Twubaka amazu meza yo guturamo (Villas), amazu agerekeranye n\'ay\'ubucuruzi mu Karere ka Gasabo no mu Mujyi wa Kigali wose. Guhera mu gucukura umusingi, gushyiramo ibyuma bikomeye, amapoto, inkuta zikomeye kugeza ku gusakara no kurinda amazi.'
        : 'We construct residential villas, modern multi-storey homes, and commercial units in Gasabo and greater Kigali. From site excavation, soil compaction, reinforced concrete footing, and masonry walls to roof truss installation and waterproofing, our civil engineers supervise every pour of concrete.',
      deliverables: isRw
        ? [
            'Gucukura umusingi no gukora umusingi ukomeye',
            'Gushinga inkingi n\'amapoto akomeye cyane (Beton)',
            'Kubakisha amatafari ahiye neza n\'amabuye akomeye',
            'Gusakara neza hakoreshejwe amatiyo n\'ibisenge byiza',
            'Kurinda inzu amazi n\'ubushuhe bituruka mu butaka',
            'Gukurikiranirwa n\'aba enjeniyeri babifitiye impamyabumenyi',
          ]
        : [
            'Excavation, Soil Compaction & Concrete Footing Engineering',
            'Reinforced Concrete Columns, Beams & Suspended Slabs',
            'High-Precision Burnt Brick & Concrete Block Masonry',
            'Treated Timber & Steel Roof Truss Structures',
            'Damp-Proof Membranes (DPM) & Foundation Tanking',
            'Comprehensive Civil Engineering Documentation & Quality Inspections',
          ],
      materials: isRw
        ? [
            'Ibyuma byujuje ubuziranenge (Fe 500)',
            'Isima nziza ya 42.5 & 32.5 n\'umucanga mwiza',
            'Amatafari ahiye neza n\'amabuye y\'urufatiro',
            'Amategura ya Decra cyangwa amabati arambye',
          ]
        : [
            'Certified Rwandan High-Tensile Steel Rebar (Fe 500)',
            'Class 42.5 & 32.5 Portland Cement & Graded Aggregates',
            'High-Density Structural Blocks & Cured Red Bricks',
            'Weather-Tough Decra/Clay Roof Tiles & Galvanized Sheets',
          ],
      workflow: isRw
        ? [
            { phase: 'Icyiciro 1', task: 'Gusukura ikibanza, gupima no gucukura umusingi' },
            { phase: 'Icyiciro 2', task: 'Kubaka umusingi, kuzuza itaka no gusuka beto yo hasi' },
            { phase: 'Icyiciro 3', task: 'Gushinga inkingi, kubaka amatafari no gushyiraho amashyiga n\'isanduku' },
            { phase: 'Icyiciro 4', task: 'Gusakara no gutegura inzu gukorerwamo finishing' },
          ]
        : [
            { phase: 'Phase 1', task: 'Site clearance, setting out, excavation, and foundation casting' },
            { phase: 'Phase 2', task: 'Substructure masonry, backfilling, and ground slab pouring' },
            { phase: 'Phase 3', task: 'Superstructure columns, brickwork, beam framing & slab casting' },
            { phase: 'Phase 4', task: 'Roof framing, waterproofing, and structural handover' },
          ],
    },
    {
      id: 'painting',
      name: t.services.painting.title,
      badge: isRw ? 'Amarangi yo Hanze n\'Imbere' : 'Exterior & Interior Finishes',
      icon: Paintbrush,
      tagline: isRw
        ? 'Amarangi adacya ku zuba n\'imvura, gutaka inkuta no gushushanya binyuze mu mucyo.'
        : 'UV-resistant exterior coatings, designer accent walls, and decorative finishes.',
      heroImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
      description: isRw
        ? 'Rinda inzu yawe imvura n\'izuba ukoresheje amarangi meza kandi arambye. Abasiga amarangi bacu bakoresha amarangi meza yo mu bwoko bwa Weather-shield arinda urukuta kuzana ubushuhe no gucya.'
        : 'Protect your building against tropical rains and scorching sun while achieving breathtaking color harmony. Our painters utilize high-adhesion primers, anti-fungal sealers, and exterior weather-shield paints designed specifically for Rwandan climate conditions.',
      deliverables: isRw
        ? [
            'Gusiga amarangi yo hanze arinda izuba n\'imvura imyaka myinshi',
            'Amarangi y\'imbere akorerwa isuku byoroshye (Silk, Satin, Matte)',
            'Gutaka inkuta hakoreshejwe irangi ryihariye rya Texture na Stucco',
            'Gusiga verini no kurinda imbaho n\'inzugi',
            'Kurinda inkuta ubushuhe n\'ibizinga',
            'Gukorana umutekano wose ku nzu ndende',
          ]
        : [
            'Exterior All-Weather Shield Coatings with 5-year color retention',
            'Interior Washable Silk, Satin, and Matte Acrylic Emulsions',
            'Artistic Textured Plaster, Stucco, and Granite-Coat Walls',
            'Wood Staining, Varnishing, and Polyurethane Protective Coatings',
            'Anti-Damp, Anti-Mold Priming for wet zones and basements',
            'Certified High-Altitude Scaffolding & Safety Rigging',
          ],
      materials: isRw
        ? [
            'Amarangi meza yizewe adacya ku zuba',
            'Isima n\'ibipfuko byo gusiba imyate y\'inkuta',
            'Amarangi atangiza ubuzima (Eco-Friendly Zero-VOC)',
            'Verini zikomeye zirinda amazi ku mbaho',
          ]
        : [
            'Premium Weather-Shield Acrylic Emulsions & Anti-UV Pigments',
            'Elastomeric Waterproof Wall Fillers & Crack Bridgers',
            'Eco-Friendly Zero-VOC Interior Paints',
            'Marine-Grade Polyurethane Clear Varnishes',
          ],
      workflow: isRw
        ? [
            { phase: 'Icyiciro 1', task: 'Kwoza no gusukura urukuta no gusiba imyate yose' },
            { phase: 'Icyiciro 2', task: 'Gusigaho primer irinda ubushuhe n\'ibizinga' },
            { phase: 'Icyiciro 3', task: 'Gusiga amakoti abiri y\'irangi ryujuje ubuziranenge' },
            { phase: 'Icyiciro 4', task: 'Kugenzura no gutunganya imipaka yose y\'amarangi' },
          ]
        : [
            { phase: 'Phase 1', task: 'Surface power-washing, scraping, and crack filling' },
            { phase: 'Phase 2', task: 'Deep-penetrating moisture sealant & anti-fungal primer coat' },
            { phase: 'Phase 3', task: 'First and second coats of premium high-durability paint' },
            { phase: 'Phase 4', task: 'Detail inspection, sharp border edging, and clean-up' },
          ],
    },
    {
      id: 'interior',
      name: t.services.design.title,
      badge: isRw ? 'Ubwiza n\'Igishushanyo Mbonera' : 'Architectural Aesthetics',
      icon: Home,
      tagline: isRw
        ? 'Gukora amakabati meza, amatara agezweho, no gutaka inyuma h\'inzu.'
        : 'Bespoke hardwood joinery, smart lighting schemes, and contemporary facade styling.',
      heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      description: isRw
        ? 'Duhuza imiterere myiza n\'ubwiza bugezweho. Abahanga bacu bakora amakabati yo mu gikoni agezweho, amadulabu mu byumba, imitako y\'amabuye ku nkuta zo hanze, ibipangu n\'amatara meza ya nijoro.'
        : 'We marry functionality with breathtaking modern aesthetics. Our design and joinery artisans build custom kitchens, built-in wardrobes, architectural facade cladding, decorative stone panels, perimeter boundary walls, and ambient night lighting.',
      deliverables: isRw
        ? [
            'Amakabati yo mu gikoni agezweho yubakanywe amabuye ya Quartz',
            'Amadulabu y\'ibyumba meza ageze ku gisenge',
            'Gutaka hanze h\'inzu hakoreshejwe amabuye n\'imbaho z\'ubwiza',
            'Kubaka uruzitiro n\'amapave meza mu kibuga',
            'Gushyiraho amatara meza ya LED mu gisenge no ku nkuta',
            'Gukora amashusho meza yo gushyiraho televiziyo (TV wall unit)',
          ]
        : [
            'Custom Modular Kitchen Cabinetry with soft-close quartz counters',
            'Floor-to-Ceiling Built-In Bedroom Wardrobes & Dressing Areas',
            'Architectural Exterior Facade Cladding with Stone & Composite Panels',
            'Perimeter Fencing, Modern Steel Gates & Interlocking Pavers',
            'Smart Ambient LED Strip Lighting & Layered Illumination',
            'Bespoke TV Wall Units & Acoustic Slat Wood Wall Paneling',
          ],
      materials: isRw
        ? [
            'Imbaho zikomeye za HDF n\'imbaho z\'umwimerere',
            'Amabuye meza ya Granite na Quartz',
            'Imbaho zirinda imvura n\'ibyuma bya aluminium byo hanze',
            'Amatara meza ya LED (3000K Warm)',
          ]
        : [
            'HDF, Marine Plywood, and Hardwood Timber Joinery',
            'Natural Granite & Engineered Quartz Slabs',
            'Outdoor Composite Timber Slats & Aluminum Cladding',
            'Warm 3000K Architectural LED Strips & IP67 Outdoor Fixtures',
          ],
      workflow: isRw
        ? [
            { phase: 'Icyiciro 1', task: 'Gukora igishushanyo cya 3D no guhitamo ibikoresho' },
            { phase: 'Icyiciro 2', task: 'Gutunganya amakabati n\'imbaho mu ruganda rwacu' },
            { phase: 'Icyiciro 3', task: 'Kuyashyira mu nzu no gushyiramo amatara n\'amabuye' },
            { phase: 'Icyiciro 4', task: 'Gusukura no gushyikiriza nyiri inzu' },
          ]
        : [
            { phase: 'Phase 1', task: '3D spatial visualization & material selection review' },
            { phase: 'Phase 2', task: 'Workshop precision joinery fabrication and pre-assembly' },
            { phase: 'Phase 3', task: 'On-site installation, lighting wiring, and stone cladding' },
            { phase: 'Phase 4', task: 'Hardware calibration, polishing, and final client signoff' },
          ],
    },
    {
      id: 'renovation',
      name: t.services.renovation.title,
      badge: isRw ? 'Kuvugurura no Guhindura Inzu' : 'Modernization & Upgrades',
      icon: RefreshCw,
      tagline: isRw
        ? 'Guhindura imiterere y\'inzu, kwagura ibyumba, gukosora amatiyo n\'amashanyarazi.'
        : 'Structural remodeling, room expansions, plumbing/electrical overhauls, and restorations.',
      heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      description: isRw
        ? 'Hindura inzu yawe ishaje ikaba inzu igezweho kandi ishimishije. Dukora imirimo yo gusenya inkuta zidakenewe, kongera ibyumba, gusimbuza igisenge, gushyiramo amatiyo mashya y\'amazi, no kuvugurura amashanyarazi.'
        : 'Transform an outdated house into a state-of-the-art contemporary residence. We handle full structural gutting, wall removal for open-concept floor plans, roof replacements, updated plumbing systems, modern electrical distribution, and complete interior/exterior rejuvenation.',
      deliverables: isRw
        ? [
            'Gukuraho inkuta no gushyiramo ibyuma bikomeye byo gushyigikira igisenge',
            'Kuvugurura ubwiherero n\'igikoni bikaba bishya kandi bigezweho',
            'Gusimbuza amabati no gusakara neza',
            'Gusimbuza insinga n\'ibindi bikoresho by\'amashanyarazi',
            'Gushyiramo amatiyo mashya ya PPR n\'ipompo z\'amazi',
            'Gusimbuza amakaro no gusiga amarangi mashya',
          ]
        : [
            'Structural Wall Removal & Load-Bearing Steel Beam Insertion',
            'Complete Bathroom & Kitchen Gutting and Luxury Rebuild',
            'Roof Replacement with Modern Lightweight Metal Sheets',
            'Complete Electrical Rewiring & Modern Circuit Breaker Upgrades',
            'Concealed PPR Plumbing Piping & High-Pressure Water Pumps',
            'Floor Leveling & Full Contemporary Tile Replacement',
          ],
      materials: isRw
        ? [
            'Ibyuma bikomeye byo gushyigikira inzu (Steel Beams)',
            'Amatiyo akomeye ya PPR arinda amazi gushyuha no gukonja',
            'Insinga z\'amashanyarazi z\'umuringa zujuje ubuziranenge',
            'Isima n\'ibikoresho birinda amazi kwinjira mu nzu',
          ]
        : [
            'Universal Steel Beams (RSJs) for load-bearing modifications',
            'PPR Fusion-Welded Hot/Cold Water Pipe Networks',
            'Flame-Retardant Copper Electrical Wiring & Modern Schneider Switches',
            'High-Impact Waterproof Membranes & Concrete Bonding Agents',
          ],
      workflow: isRw
        ? [
            { phase: 'Icyiciro 1', task: 'Kugenzura inzu, kureba ibyangiritse no gutegura gahunda yo gusenya' },
            { phase: 'Icyiciro 2', task: 'Gusenya mu mutekano no gushyiramo ibyuma bishyigikira inzu' },
            { phase: 'Icyiciro 3', task: 'Gushyiramo amatiyo, insinga z\'umuriro no guhoma inkuta nshya' },
            { phase: 'Icyiciro 4', task: 'Gushyiraho amakaro, amarangi no gusoza umushinga' },
          ]
        : [
            { phase: 'Phase 1', task: 'Structural assessment, defect detection, and demolition plan' },
            { phase: 'Phase 2', task: 'Safe demolition, debris disposal, and structural steel reinforcement' },
            { phase: 'Phase 3', task: 'Rough-in plumbing, electrical overhaul, and new plastering' },
            { phase: 'Phase 4', task: 'Finishing installation, painting, and handover' },
          ],
    },
  ];

  const currentService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  // Calculate Estimator values
  const ratePerSqm = {
    finishing: { standard: 45000, premium: 75000, luxury: 120000 },
    building: { standard: 280000, premium: 380000, luxury: 520000 },
    painting: { standard: 8000, premium: 14000, luxury: 22000 },
    interior: { standard: 50000, premium: 95000, luxury: 160000 },
    renovation: { standard: 65000, premium: 110000, luxury: 190000 },
  };

  const currentRates = ratePerSqm[calcService as keyof typeof ratePerSqm] || ratePerSqm.finishing;
  const estimatedTotal = areaSqm * currentRates[finishQuality];
  const estimatedDays = Math.max(10, Math.round(areaSqm * (calcService === 'building' ? 0.9 : 0.25)));

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Page Hero Banner */}
      <PageHero
        badge={t.services.badge}
        title={t.services.title}
        subtitle={t.services.subtitle}
        breadcrumbs={[{ label: t.navbar.services }]}
        onNavigate={onNavigate}
      />

      {/* 2. Interactive Service Nav Buttons */}
      <section className="bg-slate-50 border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {servicesData.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeServiceId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveServiceId(s.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer font-['Outfit',sans-serif] ${
                    isActive
                      ? 'bg-[#76b82a] text-white shadow-md'
                      : 'bg-white text-[#071a33] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#76b82a]'}`} />
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Service Specification View */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
                  <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                    {currentService.badge}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif] mb-3">
                  {currentService.name}
                </h2>

                <p className="text-sm sm:text-base text-[#68a61e] font-bold leading-snug mb-4">
                  {currentService.tagline}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#76b82a]" />
                  <span>{isRw ? 'Ibyo Dukora n\'Ibisobanuro' : 'Key Deliverables & Specifications'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {currentService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Standards */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#76b82a]" />
                  <span>{isRw ? 'Ibikoresho n\'Ubuziranenge Bwakoreshejwe' : 'Materials & Quality Standards Used'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {currentService.materials.map((mat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-2 h-2 bg-[#76b82a] rounded-full mt-1.5 shrink-0" />
                      <span className="text-slate-700 text-xs font-semibold">{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Execution Stages */}
              <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/80">
                <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#76b82a]" />
                  <span>{isRw ? 'Uko Umushinga Ushyirwa mu Bikorwa' : 'Step-by-Step Execution Plan'}</span>
                </h3>
                <div className="space-y-3">
                  {currentService.workflow.map((w, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60">
                      <span className="text-[11px] font-black text-white bg-[#071a33] px-2.5 py-1 rounded-md shrink-0 font-['Outfit',sans-serif]">
                        {w.phase}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium">
                        {w.task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote(currentService.name)}
                  className="px-8 py-3.5 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer font-['Outfit',sans-serif]"
                >
                  <span>{isRw ? `Saba Igiciro cya ${currentService.name}` : `Request Quote For ${currentService.name}`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#071a33] font-bold text-sm rounded-xl transition-all cursor-pointer font-['Outfit',sans-serif]"
                >
                  {isRw ? 'Gusura Ikibanza Cyubakwamo' : 'Schedule Site Evaluation'}
                </button>
              </div>
            </div>

            {/* Right Showcase & Visual Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Photo Box */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 relative group">
                <img
                  src={currentService.heroImage}
                  alt={currentService.name}
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-black text-[#82c324] uppercase tracking-wider block mb-1 font-['Outfit',sans-serif]">
                    ADONAI COMPANY LTD • Gasabo, Kimironko
                  </span>
                  <h4 className="text-xl font-black font-['Outfit',sans-serif]">
                    {currentService.name} in Kigali
                  </h4>
                </div>
              </div>

              {/* Direct Inquiries Help Card */}
              <div className="bg-[#071a33] text-white p-7 rounded-2xl border border-slate-800 shadow-lg">
                <h4 className="text-lg font-black font-['Outfit',sans-serif] mb-2">
                  {isRw ? 'Ukeneye Kumenya Byinshi ku Kibanza Cyawe?' : 'Need Fast Assessment on Your Site?'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {isRw
                    ? 'Ibiro byacu by\'ubwubatsi biherereye i Gasabo, Kimironko. Hamagara aba enjeniyeri bacu mu buryo butaziguye.'
                    : 'Our civil engineering desk is located in Gasabo, Kimironko. Call our engineers directly for quick technical questions or site visits.'}
                </p>

                <div className="space-y-2 text-xs mb-5">
                  <div className="flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-slate-300">Hotline 1:</span>
                    <a href={`tel:${DISPLAY_PHONE_1.replace(/\s+/g, '')}`} className="font-bold text-[#82c324] hover:underline">
                      {DISPLAY_PHONE_1}
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-slate-300">Hotline 2:</span>
                    <a href={`tel:${DISPLAY_PHONE_2.replace(/\s+/g, '')}`} className="font-bold text-[#82c324] hover:underline">
                      {DISPLAY_PHONE_2}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote(currentService.name)}
                  className="w-full py-3 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-xs rounded-xl shadow-md transition-colors text-center uppercase tracking-wider cursor-pointer font-['Outfit',sans-serif]"
                >
                  {isRw ? 'Saba Igiciro Ubu' : 'Submit Quote Application'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Project Cost Estimator Calculator */}
      <section id="estimator" className="py-16 sm:py-20 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
              <Calculator className="w-3.5 h-3.5 text-[#68a61e]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                {isRw ? 'IBARISHA RY\'IGICIRO CY\'UMUSHINGA' : 'PROJECT ESTIMATE CALCULATOR'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
              {isRw ? 'Ibarisha ry\'Ingengo y\'Imari y\'Ubwubatsi' : 'Instant Construction Budget Estimator'}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {isRw
                ? 'Hitamo serivisi n\'ubuso bwa metero kare (m²) kugira ngo ubone igereranya ry\'igiciro ku isoko rya Kigali.'
                : 'Select your required service and square footage for an approximate estimate based on Kigali market rates.'}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-200/80">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Controls */}
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider font-['Outfit',sans-serif]">
                    {isRw ? 'Hitamo Ubwoko bwa Serivisi' : 'Select Service Category'}
                  </label>
                  <select
                    value={calcService}
                    onChange={(e) => setCalcService(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden bg-slate-50 font-medium cursor-pointer"
                  >
                    <option value="finishing">{t.services.finishing.title}</option>
                    <option value="building">{t.services.building.title}</option>
                    <option value="painting">{t.services.painting.title}</option>
                    <option value="interior">{t.services.design.title}</option>
                    <option value="renovation">{t.services.renovation.title}</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider font-['Outfit',sans-serif]">
                      {isRw ? 'Ubuso bw\'Inzu Bwiteganyijwe' : 'Estimated Project Area'}
                    </label>
                    <span className="text-xs font-black text-[#76b82a]">{areaSqm} m²</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={600}
                    step={10}
                    value={areaSqm}
                    onChange={(e) => setAreaSqm(Number(e.target.value))}
                    className="w-full accent-[#76b82a] h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>20 m² ({isRw ? 'Icyumba' : 'Room'})</span>
                    <span>150 m² ({isRw ? 'Inzu ya Villa' : 'Villa'})</span>
                    <span>600 m² ({isRw ? 'Inyubako nini' : 'Estate/Complex'})</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider font-['Outfit',sans-serif]">
                    {isRw ? 'Ubwiza bw\'Ibikoresho Bifuzwa' : 'Specification / Finish Tier'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['standard', 'premium', 'luxury'] as const).map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setFinishQuality(tier)}
                        className={`py-2 px-3 text-xs font-bold rounded-xl border capitalize transition-all cursor-pointer font-['Outfit',sans-serif] ${
                          finishQuality === tier
                            ? 'bg-[#071a33] text-white border-[#071a33] shadow'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {tier === 'standard' ? (isRw ? 'Isanzwe' : 'Standard') : tier === 'premium' ? (isRw ? 'Igezweho' : 'Premium') : (isRw ? 'Y\'Agaciro' : 'Luxury')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Summary Output */}
              <div className="bg-[#071a33] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-800">
                <div>
                  <div className="text-[11px] text-[#82c324] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                    {isRw ? 'Ingengo y\'Imari Yagereranyijwe (RWF)' : 'Estimated Project Budget (RWF)'}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-['Outfit',sans-serif] text-white mb-2">
                    ≈ {estimatedTotal.toLocaleString()} <span className="text-sm font-bold text-[#82c324]">RWF</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
                    {isRw
                      ? `Bishingiye kuri ${areaSqm} m² za ${calcService} zikozwe n'ibikoresho byo mu rwego rwa ${finishQuality} i Kigali.`
                      : `Based on ${areaSqm} m² of ${calcService} with ${finishQuality} grade materials in Kigali.`}
                  </p>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1.5 mb-4">
                    <div className="flex justify-between text-slate-300">
                      <span>{isRw ? 'Igihe bizatwara:' : 'Estimated Timeline:'}</span>
                      <span className="font-bold text-white">~{estimatedDays} {isRw ? 'Iminsi y\'akazi' : 'Working Days'}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>{isRw ? 'Gukurikiranwa na Enjeniyeri:' : 'Civil Supervision:'}</span>
                      <span className="font-bold text-[#82c324]">{isRw ? 'Birimo' : 'Included'}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>{isRw ? 'Ubwishingizi bw\'Ubwiza:' : 'Quality Guarantee:'}</span>
                      <span className="font-bold text-white">100% {isRw ? 'Bwishingiwe' : 'Guaranteed'}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote(`${calcService.toUpperCase()} (~${areaSqm}m² - ${finishQuality} tier)`)}
                  className="w-full py-3 bg-[#76b82a] hover:bg-[#68a61e] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-['Outfit',sans-serif]"
                >
                  <span>{isRw ? 'Saba Inyandiko y\'Ibiciro Byuzuye (BOQ)' : 'Request Formal Bill of Quantities'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Brand Highlights Ribbon */}
      <BrandLogos />
    </div>
  );
};
