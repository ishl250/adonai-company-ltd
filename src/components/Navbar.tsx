import React, { useState } from 'react';
import { Search, Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenQuote, onOpenSearch }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Real pages translated cleanly with direct links
  const navItems = [
    { id: 'home', name: t.navbar.home, href: '#home' },
    { id: 'about', name: t.navbar.about, href: '#about' },
    { id: 'services', name: t.navbar.services, href: '#services' },
    { id: 'projects', name: t.navbar.projects, href: '#projects' },
    { id: 'why-us', name: t.navbar.whyUs, href: '#why-us' },
    { id: 'contact', name: t.navbar.contact, href: '#contact' }
  ];

  const handleNavClick = (id: string, href: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id === 'home' && href !== '#home') {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <header id="main-navigation" className="sticky top-0 z-40 bg-white/98 backdrop-blur-md shadow-xs border-b border-slate-100 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo matching company identity */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home', '#home');
          }}
          className="flex items-center gap-3 group"
        >
          {/* Logo Mark: Green house roof apex with window panes */}
          <div className="w-11 h-11 rounded-lg bg-[#071a33] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Roof triangular outline in lime green */}
              <path d="M24 6L5 24H12V42H36V24H43L24 6Z" stroke="#76b82a" strokeWidth="4" strokeLinejoin="round" fill="none" />
              {/* 4 window panes inside */}
              <rect x="20" y="20" width="3.5" height="3.5" fill="#76b82a" />
              <rect x="24.5" y="20" width="3.5" height="3.5" fill="#76b82a" />
              <rect x="20" y="24.5" width="3.5" height="3.5" fill="#76b82a" />
              <rect x="24.5" y="24.5" width="3.5" height="3.5" fill="#76b82a" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-['Outfit',sans-serif] font-black leading-none text-xl sm:text-2xl tracking-tight">
              <span className="text-[#071a33]">ADONAI</span>
              <span className="text-[#76b82a]">COMPANY</span>
              <span className="text-[#071a33] text-lg">LTD</span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
              {language === 'rw' ? 'Kubaka Icyerekezo Cyawe, Turema Agaciro Gahoraho' : 'Building Your Vision, Creating Lasting Value'}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links - Clean, Direct, Bilingual */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className={`text-sm font-bold tracking-tight transition-colors py-1.5 relative ${
                  isActive ? 'text-[#76b82a]' : 'text-[#071a33] hover:text-[#76b82a]'
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#76b82a] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Search, Call & Get A Quote CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            id="nav-search-btn"
            onClick={onOpenSearch}
            className="p-2 text-slate-600 hover:text-[#76b82a] transition-colors rounded-full hover:bg-slate-100"
            aria-label={t.navbar.searchPlaceholder}
            title={t.navbar.searchPlaceholder}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Language toggle for mobile/tablet header bar */}
          <div className="sm:hidden flex items-center border border-slate-200 rounded-md overflow-hidden bg-slate-100 p-0.5">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                language === 'en' ? 'bg-[#76b82a] text-white' : 'text-slate-600'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('rw')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                language === 'rw' ? 'bg-[#76b82a] text-white' : 'text-slate-600'
              }`}
            >
              RW
            </button>
          </div>

          <a
            id="nav-call-btn"
            href="tel:+250782036988"
            className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#071a33] bg-slate-100 hover:bg-slate-200 rounded transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#76b82a]" />
            <span>+250 782 036 988</span>
          </a>

          <button
            id="nav-quote-btn"
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#76b82a] hover:bg-[#68a61e] transition-all rounded shadow-md hover:shadow-lime-200 active:scale-95 cursor-pointer font-['Outfit',sans-serif]"
          >
            {t.navbar.quoteBtn}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#76b82a] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-slate-100 pb-2">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id, item.href);
                }}
                className={`flex items-center justify-between text-base font-bold py-1.5 ${
                  activePage === item.id ? 'text-[#76b82a]' : 'text-[#071a33] hover:text-[#76b82a]'
                }`}
              >
                <span>{item.name}</span>
              </a>
            </div>
          ))}

          {/* Language Switcher in Mobile Drawer */}
          <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs font-bold text-slate-600">
            <span>{t.headerTop.language}:</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  language === 'en'
                    ? 'bg-[#76b82a] text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                English (EN)
              </button>
              <button
                onClick={() => setLanguage('rw')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  language === 'rw'
                    ? 'bg-[#76b82a] text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                Kinyarwanda (RW)
              </button>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <a
              href="tel:+250782036988"
              className="w-full py-2.5 flex items-center justify-center gap-2 font-bold text-xs text-[#071a33] bg-slate-100 rounded"
            >
              <Phone className="w-4 h-4 text-[#76b82a]" />
              <span>Call: +250 782 036 988</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-center font-bold text-white bg-[#76b82a] hover:bg-[#68a61e] rounded shadow-md text-sm cursor-pointer"
            >
              {t.navbar.quoteBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

