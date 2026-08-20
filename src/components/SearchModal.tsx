import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (pageId: string, href?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const isRw = language === 'rw';

  const searchableItems = [
    {
      title: isRw ? 'Kurangiza Inzu (Finishing & Gypsum)' : 'House Finishing & Plastering',
      category: isRw ? 'Serivisi' : 'Services',
      pageId: 'services',
      href: '#services',
    },
    {
      title: isRw ? 'Kubaka Inzu Guhera ku Musingi' : 'House Building & Structural Masonry',
      category: isRw ? 'Serivisi' : 'Services',
      pageId: 'services',
      href: '#services',
    },
    {
      title: isRw ? 'Gusiga Rangi no Gushushanya' : 'House Painting & Designing',
      category: isRw ? 'Serivisi' : 'Services',
      pageId: 'services',
      href: '#services',
    },
    {
      title: isRw ? 'Igishushanyo Mbonera (Design)' : 'Interior & Exterior Architectural Design',
      category: isRw ? 'Serivisi' : 'Services',
      pageId: 'services',
      href: '#services',
    },
    {
      title: isRw ? 'Kuvugurura Inzu Zishaje' : 'House Renovation & Modernization',
      category: isRw ? 'Serivisi' : 'Services',
      pageId: 'services',
      href: '#services',
    },
    {
      title: isRw ? 'Imishinga Yakozwe i Kimironko' : 'Kimironko Luxury Residence Villa',
      category: isRw ? 'Imishinga' : 'Projects',
      pageId: 'projects',
      href: '#projects',
    },
    {
      title: isRw ? 'Inkingi 4 Z\'Indashyikirwa' : 'Why Choose Us & 4 Core Pillars',
      category: isRw ? 'Impamvu Dutoranywa' : 'Why Us',
      pageId: 'why-us',
      href: '#why-us',
    },
    {
      title: isRw ? 'Amakuru kuri Adonai Company Ltd' : 'About Adonai Company Ltd & History',
      category: isRw ? 'Abo Turi Bo' : 'About',
      pageId: 'about',
      href: '#about',
    },
    {
      title: isRw ? 'Ibiro Byacu: Gasabo, Kimironko' : 'Contact Office in Gasabo, Kimironko',
      category: isRw ? 'Twandikire' : 'Contact',
      pageId: 'contact',
      href: '#contact',
    },
  ];

  if (!isOpen) return null;

  const filtered = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-xs animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#76b82a]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isRw
                ? 'Shakisha gufinisha, kubaka, gusiga rangi, Kimironko, imishinga...'
                : 'Search finishing, building, painting, location, projects...'
            }
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-800 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500">
              {isRw
                ? `Nta bisubizo byabonetse kuri "${query}". Gerageza "finishing", "painting", "Kimironko", cyangwa "quote".`
                : `No results found for "${query}". Try "finishing", "painting", "Kimironko", or "quote".`}
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResult(item.pageId, item.href);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-lime-50/80 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] font-black text-[#76b82a] uppercase tracking-wider block mb-0.5 font-['Outfit',sans-serif]">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-[#071a33] group-hover:text-[#76b82a] transition-colors font-['Outfit',sans-serif]">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#76b82a] group-hover:translate-x-1 transition-all" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
