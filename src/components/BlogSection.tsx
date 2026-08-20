import React, { useState } from 'react';
import { Tag, Calendar, X, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onNavigate?: (pageId: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  const blogs: BlogPost[] = [
    {
      id: 'blog-1',
      title: 'Top 5 House Finishing Trends in Kigali for 2025',
      author: 'Adonai Editorial',
      category: 'House Finishing',
      date: 'Recent Update',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      excerpt: 'Discover the latest gypsum ceiling designs, ceramic porcelain tiles, and warm atmospheric lighting that elevate modern Rwandan homes.'
    },
    {
      id: 'blog-2',
      title: 'Choosing Durable Exterior Paint for Rwandan Weather',
      author: 'Adonai Painting Desk',
      category: 'Painting & Design',
      date: 'Recent Update',
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
      excerpt: 'How weather-shield acrylic coatings and anti-humidity primers protect your walls from heavy rain and intense sunshine.'
    },
    {
      id: 'blog-3',
      title: 'Essential Checklist Before Starting a House Renovation',
      author: 'Adonai Engineering',
      category: 'Renovation',
      date: 'Recent Update',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      excerpt: 'Key advice on budgeting, structural load assessments, plumbing upgrades, and electrical safety during full residential remodeling.'
    }
  ];

  return (
    <section id="blogs" className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
            <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
              INSIGHTS & ARTICLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight leading-tight font-['Outfit',sans-serif]">
            Construction & Finishing Insights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Expert building guides and design tips from our engineering team.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id}
              id={`blog-card-${idx + 1}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Top Image */}
              {blog.imageUrl ? (
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : null}

              {/* Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta Row */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1.5 font-bold text-[#68a61e]">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{blog.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveBlog(blog)}
                    className="text-base sm:text-lg font-black text-[#071a33] font-['Outfit',sans-serif] group-hover:text-[#76b82a] transition-colors leading-snug mb-3 cursor-pointer"
                  >
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Read More */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveBlog(blog)}
                    className="text-xs font-black text-[#76b82a] hover:text-[#68a61e] uppercase tracking-wider flex items-center gap-1 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {onNavigate && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('blogs')}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#071a33] hover:bg-[#0e2246] text-white font-bold text-xs sm:text-sm rounded-lg shadow transition-all active:scale-95"
            >
              <span>Explore All Articles & Knowledge Hub</span>
              <ArrowRight className="w-4 h-4 text-[#76b82a]" />
            </button>
          </div>
        )}
      </div>

      {/* Blog Reading Modal */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border border-slate-100">
            <button
              onClick={() => setActiveBlog(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="bg-lime-50 text-[#68a61e] border border-lime-200 px-2.5 py-0.5 rounded-full font-bold uppercase">
                {activeBlog.category}
              </span>
              <span>{activeBlog.date}</span>
            </div>

            <h3 className="text-2xl font-black text-[#071a33] font-['Outfit',sans-serif] mb-4">
              {activeBlog.title}
            </h3>

            <p className="text-slate-700 text-sm leading-relaxed mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              {activeBlog.excerpt}
            </p>

            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed mb-6 border border-slate-200/60">
              At Adonai Company Ltd, located in Gasabo, Kimironko, we prioritize quality craftsmanship, professional engineering standards, and complete customer satisfaction across all residential and commercial builds in Rwanda.
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveBlog(null)}
                className="px-6 py-2.5 bg-[#071a33] hover:bg-[#0e2246] text-white text-xs font-bold rounded-lg shadow-md"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
