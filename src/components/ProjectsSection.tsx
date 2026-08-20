import React, { useState } from 'react';
import { ArrowRight, Eye, X, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ProjectData {
  id: string;
  categoryEn: string;
  categoryRw: string;
  titleEn: string;
  titleRw: string;
  imageUrl: string;
  locationEn: string;
  locationRw: string;
  year: string;
  descEn: string;
  descRw: string;
}

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: 'proj-1',
      categoryEn: 'House Finishing & Plastering',
      categoryRw: 'Kurangiza Inzu (Finishing)',
      titleEn: 'Kimironko Luxury Villa Finishing',
      titleRw: 'Gufinisha Villa Nziza i Kimironko',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
      locationEn: 'Gasabo, Kimironko',
      locationRw: 'Akarere ka Gasabo, Kimironko',
      year: '2025 - 2026',
      descEn: 'Complete luxury interior & exterior finishing including laser-leveled porcelain tiling, ambient gypsum false ceilings, smooth wall skimming, and weather-proof exterior coatings.',
      descRw: 'Gufinisha inzu yose mu buryo bugezweho: gushyiramo amakaro ya porcelain yaringanijwe na laser, ibisenge bya gypsum birimo amatara meza, gusiga inkuta zikanyerera, no kurinda amazi yo hanze.',
    },
    {
      id: 'proj-2',
      categoryEn: 'House Building & Construction',
      categoryRw: 'Kubaka Inzu (Building)',
      titleEn: 'Modern 2-Storey Residential Build',
      titleRw: 'Kubaka Inzu y\'Igorofa Igezweho',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=900&auto=format&fit=crop',
      locationEn: 'Gasabo, Kigali',
      locationRw: 'Akarere ka Gasabo, Kigali',
      year: '2025',
      descEn: 'Turnkey structural erection from foundation excavation, reinforced concrete framing, certified brickwork masonry, up to engineered roof truss fabrication and concrete roof tiling.',
      descRw: 'Kubaka inzu guhera ku musingi, gusuka beto ikomeye n\'inkingi, kuzamura amatafari akomeye, no gupfuka ibisenge bikomeye birinda imvura.',
    },
    {
      id: 'proj-3',
      categoryEn: 'Painting & Interior Design',
      categoryRw: 'Gusiga Rangi no Gushushanya',
      titleEn: 'Contemporary Villa Interior & Painting',
      titleRw: 'Gusiga Rangi no Gutaka Villa',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop',
      locationEn: 'Nyarutarama / Gasabo',
      locationRw: 'Nyarutarama, Gasabo',
      year: '2025',
      descEn: 'Full interior and exterior transformation featuring multi-tone weather-shield paint, custom wooden cabinetry, modern kitchen layout, and energy-efficient ambient lighting.',
      descRw: 'Gusiga amarangi aramba arinda imvura yo hanze, gutaka inkuta z\'imbere zikanyerera neza, gushyiraho utubati two mu gikoni, n\'amatara meza yo mu nzu.',
    },
    {
      id: 'proj-4',
      categoryEn: 'House Renovation',
      categoryRw: 'Kuvugurura Inzu (Renovation)',
      titleEn: 'Residential House Modernization',
      titleRw: 'Kuvugurura Inzu Ishaje Ikaba Nshya',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop',
      locationEn: 'Kimironko Heights',
      locationRw: 'Kimironko, Kigali',
      year: '2024 - 2025',
      descEn: 'Complete structural modernization including non-bearing wall removals, full PPR plumbing overhaul, modern bathroom suites, and fresh exterior textured paint.',
      descRw: 'Kuvugurura inzu yose: guhindura imiyoboro y\'amazi (PPR) n\'amashanyarazi, kuvugurura ubwogero n\'igikoni, no gusiga amarangi mashya aramba.',
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-[#76b82a]/15 border border-[#76b82a]/30">
            <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
              {t.projects.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
            {t.projects.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => {
            const title = language === 'rw' ? project.titleRw : project.titleEn;
            const category = language === 'rw' ? project.categoryRw : project.categoryEn;
            const location = language === 'rw' ? project.locationRw : project.locationEn;

            return (
              <div
                key={project.id}
                id={`project-card-${idx + 1}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#071a33]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="p-3 bg-white text-[#071a33] hover:text-[#76b82a] rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                      aria-label="View Project Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#071a33]/85 text-white text-[11px] font-bold backdrop-blur-xs font-['Outfit',sans-serif]">
                    {category}
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#76b82a]" />
                      <span>{location}</span>
                    </div>

                    <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] group-hover:text-[#76b82a] transition-colors mb-2">
                      {title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#76b82a] hover:text-[#68a61e] transition-colors pt-3 border-t border-slate-100 mt-2 cursor-pointer font-['Outfit',sans-serif]"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-80 w-full relative">
              <img
                src={activeProject.imageUrl}
                alt={language === 'rw' ? activeProject.titleRw : activeProject.titleEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-6 bg-[#76b82a] text-white px-3.5 py-1 text-xs font-black rounded-lg shadow font-['Outfit',sans-serif]">
                {language === 'rw' ? activeProject.categoryRw : activeProject.categoryEn}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-black text-[#071a33] font-['Outfit',sans-serif] mb-2">
                {language === 'rw' ? activeProject.titleRw : activeProject.titleEn}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {language === 'rw' ? activeProject.descRw : activeProject.descEn}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-100 text-xs text-slate-700 mb-6 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#76b82a]" />
                  <span>
                    <strong>{t.projects.completedIn}:</strong>{' '}
                    {language === 'rw' ? activeProject.locationRw : activeProject.locationEn}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#76b82a]" />
                  <span>
                    <strong>Timeline:</strong> {activeProject.year}
                  </span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 bg-[#071a33] hover:bg-[#0e2246] text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer font-['Outfit',sans-serif]"
                >
                  {t.projects.closeModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
