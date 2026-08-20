import React, { useState } from 'react';
import { Eye, MapPin, Calendar, CheckCircle2, X, ArrowRight, Filter } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BrandLogos } from '../components/BrandLogos';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsPageProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: (serviceName?: string) => void;
  onOpenConsultation: () => void;
}

interface ExtendedProjectItem extends ProjectItem {
  area?: string;
  materials?: string;
  scopeList?: string[];
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ExtendedProjectItem | null>(null);

  const categories = [
    { id: 'all', label: isRw ? 'Imishinga Yose' : 'All Projects' },
    { id: 'finishing', label: t.services.finishing.title },
    { id: 'building', label: t.services.building.title },
    { id: 'painting', label: t.services.painting.title },
    { id: 'renovation', label: t.services.renovation.title },
  ];

  const allProjects: ExtendedProjectItem[] = [
    {
      id: 'proj-1',
      category: t.services.finishing.title,
      title: isRw ? 'Inzu Nziza y\'Agaciro i Kimironko' : 'Kimironko Luxury Residence Villa',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      location: 'Gasabo, Kimironko',
      year: '2025 - 2026',
      duration: isRw ? 'Amezi 3.5' : '3.5 Months',
      client: isRw ? 'Nyir\'inzu' : 'Private Residence Owner',
      area: '340 m²',
      materials: isRw
        ? 'Amakaro ya Porcelaine 60x120, Plafond ya Gypsum, Amarangi ya Dulux Silk, Inzugi z\'Aluminium'
        : 'Italian 60x120 Porcelain Tiles, Gypsum Ceilings, Dulux Silk Paint, Aluminium Sliders',
      description: isRw
        ? 'Umushinga w\'intangarugero wo kurangiza inzu (Finishing) i Kimironko. Adonai Company Ltd yakoze plafond ya gypsum ifite amatara meza, amakaro y\'agaciro, ibikoresho by\'isuku n\'amarangi yo hanze adacya.'
        : 'A benchmark house finishing project in Kimironko. Adonai Company Ltd was tasked with complete interior surface leveling, false ceiling installations with multi-tier cove lighting, imported porcelain tile layouts, modern sanitary installations, and durable exterior facade finishing.',
      scopeList: isRw
        ? [
            'Plafond ya Gypsum ifite amatara ya LED mu byumba no mu cyumba cy\'uruganiriro',
            'Gushyiraho amakaro mu byumba 4 no mu bwiherero 5',
            'Kunoza inkuta no gusiga irangi rya satin rirambye',
            'Ibirahure birambye byo kuri balko n\'amadirishya ya aluminium',
            'Gushyiraho ibikoresho by\'isuku byo mu rwego rwo hejuru',
          ]
        : [
            'Multi-tier gypsum board ceilings with cove LED strip profiles',
            'Floor and bathroom tiling across 4 bedrooms and 5 bathrooms',
            'Wall skimming, anti-humidity priming, and satin emulsion finish',
            'Custom tempered glass balcony railings & anodized aluminium windows',
            'Master bathroom custom quartz vanity installation',
          ],
    },
    {
      id: 'proj-2',
      category: t.services.building.title,
      title: isRw ? 'Kubaka Inzu y\'Igorofa Igezweho' : 'Modern 2-Storey Villa Construction',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=1200&auto=format&fit=crop',
      location: 'Gasabo District, Kigali',
      year: '2025',
      duration: isRw ? 'Amezi 7' : '7 Months',
      client: isRw ? 'Umushoramari' : 'Private Developer',
      area: '480 m²',
      materials: isRw
        ? 'Ibyuma bya Fe500, Isima ya 42.5, Amatafari ahiye neza, Amategura ya Decra'
        : 'High-Tensile Fe500 Steel, Class 42.5 Portland Cement, Cured Solid Bricks, Decra Roofing',
      description: isRw
        ? 'Kubaka inzu yose y\'igorofa guhera ku musingi kugeza ku gusakara. Aba enjeniyeri bacu bayoboye gucukura umusingi, gushinga inkingi, gusuka beto, kubaka amatafari no gusakara neza.'
        : 'Turnkey structural erection of a contemporary 2-storey home. Our civil engineers handled site excavation, foundation footings, reinforced concrete columns and suspended slabs, high-precision masonry brickwork, and roof truss fabrication.',
      scopeList: isRw
        ? [
            'Gucukura umusingi no gusuka beto y\'urufatiro ikomeye',
            'Gushinga inkingi 16 za beto n\'isanduku y\'igorofa',
            'Kubaka amatafari ahiye neza hanze n\'imbere',
            'Gusakara hakoreshejwe amatiyo y\'icyuma n\'amategura ya Decra',
            'Gukora imiyoboro y\'amazi yo mu butaka no gutunganya ikigega cy\'amazi',
          ]
        : [
            'Excavation and reinforced concrete pad foundations',
            '16 reinforced concrete columns and two suspended concrete slabs',
            'Solid masonry brick exterior and partition walls',
            'Steel roof framing, sound insulation, and Decra stone-coated tiles',
            'Integrated underground drainage and rainwater harvesting tank',
          ],
    },
    {
      id: 'proj-3',
      category: t.services.painting.title,
      title: isRw ? 'Gusiga Amarangi no Gutaka Inzu' : 'Contemporary Villa Interior & Exterior Aesthetics',
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
      location: 'Nyarutarama / Gasabo',
      year: '2025',
      duration: isRw ? 'Ibyumweru 4' : '4 Weeks',
      client: isRw ? 'Umuturage' : 'Residential Estate',
      area: isRw ? '520 m² Hanze / 300 m² Imbere' : '520 m² Exterior / 300 m² Interior',
      materials: isRw
        ? 'Amarangi arinda izuba n\'imvura, Textured Stucco, Satin Interior'
        : 'Weather-Shield Anti-UV Acrylics, Textured Stucco Coating, Satin Interior Emulsion',
      description: isRw
        ? 'Gusiga amarangi mashya yo hanze n\'imbere, gusiba imyate yose hakoreshejwe ibikoresho birinda ubushuhe no gushushanya inkuta z\'imbere.'
        : 'Comprehensive painting and color redesign project. We stripped aging exterior paint, sealed all moisture cracks with elastomeric fillers, and applied multi-layer weather-shield paint alongside decorative interior accent walls.',
      scopeList: isRw
        ? [
            'Gusukura urukuta no gusiba imyate yose y\'inkuta',
            'Gusiga amakoti abiri y\'irangi ririnda ubushuhe n\'izuba',
            'Gutaka inkuta z\'uruganiriro n\'icyumba cyo kuriramo hakoreshejwe texture',
            'Gusiga verini inzugi z\'imbaho no kuzirinda',
            'Gusiga irangi ryiza ku ruzitiro rw\'ikigo',
          ]
        : [
            'Pressure-wash surface preparation and micro-crack repairing',
            'Two coats of anti-fungal, water-repellent exterior weather-shield paint',
            'Artistic textured plaster accent walls in living lounge and dining room',
            'Solid timber door stripping, staining, and polyurethane top-coat',
            'Boundary perimeter wall textured paint and waterproofing',
          ],
    },
    {
      id: 'proj-4',
      category: t.services.design.title,
      title: isRw ? 'Gukora Amakabati n\'Imitako yo Hanze' : 'Custom Hardwood Joinery & Facade Paneling',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      location: 'Gacuriro, Gasabo',
      year: '2025',
      duration: isRw ? 'Ibyumweru 6' : '6 Weeks',
      client: isRw ? 'Nyir\'inzu' : 'Modern Villa Owner',
      area: '260 m²',
      materials: isRw
        ? 'Imbaho za Marine Plywood, Granite, Composite Wood, LED 3000K'
        : 'Marine Plywood, Natural Granite, Outdoor Composite Wood, Architectural 3000K LEDs',
      description: isRw
        ? 'Gutunganya amakabati yo mu gikoni agezweho, amadulabu mu byumba, imitako y\'amabuye n\'imbaho zo hanze n\'amatara meza ya nijoro.'
        : 'A bespoke interior styling and facade modernization undertaking. Adonai crafted floor-to-ceiling bedroom wardrobes, a minimalist open kitchen with island seating, exterior stone cladding, and warm architectural lighting.',
      scopeList: isRw
        ? [
            'Igikoni kigezweho cyifashishije ibikoresho bya Blum n\'amabuye ya quartz',
            'Amadulabu meza mu byumba afite amatara ya LED',
            'Imitako yo hanze ku nkuta z\'inzu n\'amatara yo ku ruzitiro',
            'Gushyira amapave meza mu mbuga n\'indabyo',
          ]
        : [
            'Custom modular kitchen with Blum soft-close hardware & quartz surfaces',
            'Built-in walk-in closets with integrated LED strip channels',
            'Exterior composite timber facade panelling and perimeter wall lighting',
            'Interlocking stone pavers in driveway with landscaped border channels',
          ],
    },
    {
      id: 'proj-5',
      category: t.services.renovation.title,
      title: isRw ? 'Kuvugurura Inzu Zishaje Bikomeye' : 'Complete Residential Modernization & Refurbishment',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      location: 'Kimironko Heights',
      year: '2024 - 2025',
      duration: isRw ? 'Amezi 2.5' : '2.5 Months',
      client: isRw ? 'Umushoramari' : 'Property Investor',
      area: '310 m²',
      materials: isRw
        ? 'Ibyuma bya Steel RSJs, Amatiyo ya PPR, Amakaro ya Porcelaine'
        : 'Structural Steel RSJs, PPR Fusion Pipes, Porcelain Tiles, Modern Circuitry',
      description: isRw
        ? 'Guhindura imiterere y\'inzu yari imaze imyaka 15, gusenya inkuta zifunga uruganiriro, gushyiramo amatiyo mashya y\'amazi n\'amashanyarazi no gusimbuza amakaro yose.'
        : 'Full interior gutting and floor plan modernization of a 15-year-old property. We knocked down restrictive non-bearing walls to create an open-plan lounge, rewired electrical circuits, replaced corroded plumbing, and installed new tiles throughout.',
      scopeList: isRw
        ? [
            'Gukuraho inkuta no gushyigikira inzu n\'ibyuma bikomeye',
            'Gusimbuza amatiyo yose y\'amazi n\'amashanyarazi',
            'Kuvugurura ubwiherero bwose bugasa neza kandi bugezweho',
            'Gusimbuza amakaro no gusiga irangi rishya imbere n\'inyuma',
            'Gusana igisenge no gushyiraho imiyoboro y\'amazi y\'imvura',
          ]
        : [
            'Removal of interior partition walls and structural reinforcement',
            'Full replacement of galvanized plumbing with concealed PPR pipework',
            'Complete bathroom gutting, waterproofing, and modern vanity installations',
            'Tile replacement and full interior/exterior repainting',
            'Roof leak repairs and gutter system replacement',
          ],
    },
    {
      id: 'proj-6',
      category: t.services.finishing.title,
      title: isRw ? 'Finishing y\'Inzu y\'Icyitegererezo' : 'Executive Townhouse Gypsum & Tile Finishes',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      location: 'Kagugu, Gasabo',
      year: '2025',
      duration: isRw ? 'Amezi 2' : '2 Months',
      client: isRw ? 'Nyir\'inzu' : 'Private Owner',
      area: '220 m²',
      materials: isRw
        ? 'Amakaro ya Marble-look Porcelaine, Knauf Gypsum, Satin Paints'
        : 'Imported Marble-Look Porcelain, Knauf Gypsum Panels, Satin Finish Paints',
      description: isRw
        ? 'Kurangiza inzu nshya hakoreshejwe amakaro meza ya 80x80 asa na maribure, plafond ya gypsum itagira inenge, n\'amatara meza mu bwiherero n\'uruganiriro.'
        : 'Detailed interior finishing for a newly built townhouse. Highlights include seamless gypsum acoustic ceilings, polished porcelain floor surfaces, custom shower niches, and recessed downlights.',
      scopeList: isRw
        ? [
            'Plafond ya gypsum nziza mu ruganiriro no mu byumba',
            'Amakaro arabagirana ya 80x80 asa na maribure',
            'Ubwiherero bugezweho bufite amatara meza',
            'Gusiga inkuta zikabagirana no gushyiraho irangi ryiza',
          ]
        : [
            'Seamless gypsum ceiling framing across living room and bedrooms',
            'High-gloss 80x80 marble-finish porcelain floor tiling',
            'Custom tiled walk-in showers with linear floor drains',
            'Precision wall skimming with silk sheen washable topcoat',
          ],
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter((p) => {
        if (activeCategory === 'finishing') return p.category.toLowerCase().includes('finishing') || p.category.toLowerCase().includes('kurangiza');
        if (activeCategory === 'building') return p.category.toLowerCase().includes('building') || p.category.toLowerCase().includes('kubaka');
        if (activeCategory === 'painting') return p.category.toLowerCase().includes('painting') || p.category.toLowerCase().includes('amarangi');
        if (activeCategory === 'renovation') return p.category.toLowerCase().includes('renovation') || p.category.toLowerCase().includes('kuvugurura') || p.category.toLowerCase().includes('design') || p.category.toLowerCase().includes('gushushanya');
        return true;
      });

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Page Hero Banner */}
      <PageHero
        badge={t.projects.badge}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
        breadcrumbs={[{ label: t.navbar.projects }]}
        onNavigate={onNavigate}
      />

      {/* 2. Filter Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer font-['Outfit',sans-serif] ${
                    activeCategory === cat.id
                      ? 'bg-[#76b82a] text-white shadow-md'
                      : 'bg-white text-[#071a33] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Total count badge */}
            <div className="text-xs font-bold text-slate-500 font-['Outfit',sans-serif]">
              {isRw ? 'Ibyerekanwe:' : 'Showing'}{' '}
              <span className="text-[#071a33] font-black">{filteredProjects.length}</span>{' '}
              {isRw ? 'Imishinga' : 'Projects'}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Gallery Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                id={`project-card-full-${idx + 1}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image Showcase */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#071a33]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 bg-white text-[#071a33] hover:text-[#76b82a] rounded-xl shadow-lg font-bold text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer font-['Outfit',sans-serif]"
                    >
                      <Eye className="w-4 h-4 text-[#76b82a]" />
                      <span>{isRw ? 'Reba Ibisobanuro' : 'View Specifications'}</span>
                    </button>
                  </div>

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#071a33]/90 text-white text-xs font-bold backdrop-blur-xs font-['Outfit',sans-serif]">
                    {project.category}
                  </div>

                  {project.area && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 text-white text-[11px] font-bold backdrop-blur-xs font-['Outfit',sans-serif]">
                      {project.area}
                    </div>
                  )}
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#76b82a]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-black text-[#071a33] font-['Outfit',sans-serif] group-hover:text-[#76b82a] transition-colors mb-2.5 cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#76b82a] hover:text-[#68a61e] transition-colors cursor-pointer font-['Outfit',sans-serif]"
                    >
                      <span>{isRw ? 'Reba Byinshi' : 'Explore Case Study'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenQuote(`${project.title} (${project.category})`)}
                      className="text-[11px] font-bold text-slate-600 hover:text-[#071a33] cursor-pointer font-['Outfit',sans-serif]"
                    >
                      {isRw ? 'Saba nk\'Ibi' : 'Quote Similar'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Project Detail Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative max-h-[92vh] overflow-y-auto border border-slate-100">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="h-72 sm:h-96 w-full relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#76b82a] text-white px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider inline-block mb-2 shadow font-['Outfit',sans-serif]">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-['Outfit',sans-serif]">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Detail Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Project Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold font-['Outfit',sans-serif]">
                    {isRw ? 'Aho Iherereye' : 'Location'}
                  </span>
                  <span className="font-bold text-[#071a33]">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold font-['Outfit',sans-serif]">
                    {isRw ? 'Igihe Yakorewe' : 'Timeline'}
                  </span>
                  <span className="font-bold text-[#071a33]">{selectedProject.year}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold font-['Outfit',sans-serif]">
                    {isRw ? 'Igihe Byatwaye' : 'Duration'}
                  </span>
                  <span className="font-bold text-[#071a33]">
                    {selectedProject.duration || (isRw ? 'Yarangiye ku gihe' : 'Completed On Schedule')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold font-['Outfit',sans-serif]">
                    {isRw ? 'Ubuso' : 'Project Scale'}
                  </span>
                  <span className="font-bold text-[#76b82a]">
                    {selectedProject.area || (isRw ? 'Inyubako Yihariye' : 'Custom Build')}
                  </span>
                </div>
              </div>

              {/* Narrative */}
              <div>
                <h4 className="text-sm font-black text-[#071a33] uppercase tracking-wider mb-2 font-['Outfit',sans-serif]">
                  {isRw ? 'Incamake n\'Uko Umushinga Wakozwe' : 'Project Overview & Execution'}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Scope Checklist */}
              {selectedProject.scopeList && (
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
                  <h4 className="text-xs font-black uppercase text-[#071a33] tracking-wider mb-3 font-['Outfit',sans-serif]">
                    {isRw ? 'Ibyakozwe By\'Ingenzi' : 'Key Deliverables Completed'}
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.scopeList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials */}
              {selectedProject.materials && (
                <div className="text-xs text-slate-600">
                  <strong className="text-slate-800">{isRw ? 'Ibikoresho By\'Ingenzi:' : 'Primary Materials:'}</strong>{' '}
                  {selectedProject.materials}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  {isRw ? 'Funga' : 'Close Case Study'}
                </button>
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenQuote(`Project inspired by ${title}`);
                  }}
                  className="px-6 py-2.5 bg-[#76b82a] hover:bg-[#68a61e] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer font-['Outfit',sans-serif]"
                >
                  {isRw ? 'Saba Igiciro ku Mushinga nk\'Uyu' : 'Request Quote For Similar Project'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Brand Highlights Ribbon */}
      <BrandLogos />
    </div>
  );
};
