import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  breadcrumbs: { label: string; pageId?: string }[];
  onNavigate: (pageId: string) => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
  onNavigate
}) => {
  return (
    <div className="relative bg-[#071a33] text-white py-16 sm:py-20 overflow-hidden border-b border-slate-800">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#76b82a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-[#76b82a]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Breadcrumb row */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-[#76b82a] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {crumb.pageId ? (
                <button
                  onClick={() => onNavigate(crumb.pageId!)}
                  className="hover:text-[#76b82a] transition-colors"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-[#82c324] font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/20 border border-[#76b82a]/40 text-[#82c324]">
          <span className="w-2 h-2 bg-[#76b82a] rounded-full inline-block" />
          <span className="text-[11px] font-black uppercase tracking-wider font-['Outfit',sans-serif]">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif] leading-tight mb-3">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
