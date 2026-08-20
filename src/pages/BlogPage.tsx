import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X, Search, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { BrandLogos } from '../components/BrandLogos';
import { useLanguage } from '../context/LanguageContext';

interface BlogPageProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

interface BlogPostDetailed {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string[];
  takeaways: string[];
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const [selectedPost, setSelectedPost] = useState<BlogPostDetailed | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles: BlogPostDetailed[] = [
    {
      id: 'post-1',
      title: isRw
        ? 'Amabwiriza y\'Ingenzi yo Kurangiza Inzu (Finishing) Buri Muturage wa Kigali Agomba Kumenya'
        : 'Top House Finishing Standards Every Home Builder in Kigali Must Know',
      category: t.services.finishing.title,
      author: isRw ? 'Aba Enjeniyeri ba Adonai' : 'Eng. Adonai Supervisory Team',
      date: isRw ? 'Gashyantare 2026' : 'February 2026',
      readTime: isRw ? 'Iminota 4 yo gusoma' : '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
      excerpt: isRw
        ? 'Guhera ku gupima amakaro hakoreshejwe laser kugeza ku gukora plafond ya gypsum idacengerwa n\'ubushuhe, reba uko finishing nziza yongera agaciro k\'inzu yawe i Gasabo.'
        : 'From laser-leveled porcelain floor tiles to multi-tier moisture-resistant gypsum false ceilings, discover how high-standard finishing elevates your property value in Gasabo.',
      content: isRw
        ? [
            'Kurangiza inzu (Finishing) niyo igaragaza ubwiza nyaburanga bw\'inyubako. Ku isoko ry\'amazu rya Kigali, inzu ifite finishing igezweho igira agaciro kiyongereyeho 35% mu bukode no mu kugurishwa ugereranyije n\'izindi.',
            'Ibintu by\'ingenzi birimo: guhoma inkuta n\'isima nziza cyane, gukora plafond ya gypsum ifite amatara meza, no gushyiraho amakaro adafite imyate. Gushyiramo shitingi irinda amazi yo mu butaka munsi y\'amakaro birinda ubushuhe kwinjira mu gihe cy\'imvura nyinshi i Kigali.',
            'Muri Adonai Company Ltd, aba maso bacu babanza kugenzura imiyoboro yose y\'amashanyarazi n\'amazi mbere yo guhoma inkuta kugira ngo inkuta zidasenywa nyuma.',
          ]
        : [
            'Finishing represents the visual and tactile essence of any building. In Rwanda\'s dynamic real estate market, properties with premium finishing command up to 35% higher rental and resale yields compared to standard builds.',
            'Key finishing elements include proper skimming with polymer-modified wall fillers, acoustic and aesthetic false ceilings, and precision tile layouts without lippage. Ensuring damp-proof membranes are installed under ground floor tiles prevents capillary moisture rising during Kigali\'s rainy seasons.',
            'At Adonai Company Ltd, our finishing masons verify all conduit work prior to plastering, avoiding messy after-the-fact chasing and wall cracks.',
          ],
      takeaways: isRw
        ? [
            'Buri gihe koresha gypsum irinda ubushuhe mu bwiherero no mu gikoni',
            'Gupima na laser birakenewe cyane ku makaro ya porcelaine arengeje 60cm',
            'Gusiga amakoti abiri ya primer bituma irangi riramba cyane',
          ]
        : [
            'Always insist on moisture-resistant gypsum in humid zones (bathrooms/kitchens)',
            'Laser level verification is mandatory for porcelain tiles >60cm',
            'Multi-coat skim plastering guarantees smooth paint finishes',
          ],
    },
    {
      id: 'post-2',
      title: isRw
        ? 'Guhitamo Amarangi yo Hanze Arinda Izuba n\'Imvura mu Rwanda'
        : 'Choosing Exterior Weather-Shield Paints for Rwanda\'s Tropical Climate',
      category: t.services.painting.title,
      author: isRw ? 'Impuguke mu Marangi' : 'Lead Finishes Specialist',
      date: isRw ? 'Mutarama 2026' : 'January 2026',
      readTime: isRw ? 'Iminota 3 yo gusoma' : '3 min read',
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=900&auto=format&fit=crop',
      excerpt: isRw
        ? 'Izuba rikaze rya Kigali n\'imvura y\'amahindu bisaba amarangi yo hanze akomeye. Menya amabanga atuma urukuta rwawe rugumana ibara ryiza hejuru y\'imyaka 5.'
        : 'Kigali\'s intense UV exposure and heavy seasonal rains require specialized exterior acrylic emulsions. Learn the secrets to 5+ year vibrant exterior walls.',
      content: isRw
        ? [
            'Ikirere cy\'u Rwanda gifite izuba ryo ku murongo wa koma n\'imvura y\'amahindu. Amarangi aciriritse ahita acya, akazana ifu, cyangwa akazana ibizinga by\'umukara mu mezi 12 gusa.',
            'Gusiga irangi rirambye bitangirira kuri primer irinda imyunyu y\'isima (anti-alkali) ituma amazi yo mu rukuta adasukura irangi. Gukoresha primer ifunga imyate birinda amazi y\'imvura kwinjira mu rukuta.',
            'Adonai Company Ltd ikorana n\'inganda zikomeye z\'amarangi zikora amarangi arinda imirasire y\'izuba (UV-stable) kugira ngo inzu igumane umucyo wayo imyaka n\'imyaka.',
          ]
        : [
            'Rwanda\'s unique climate combines high equatorial sun with torrential rainy periods. Standard cheap emulsion paint quickly fades, powders, and develops black fungal streaks within 12 months.',
            'A resilient paint job starts with an anti-alkali primer coat that prevents moisture inside the masonry from pushing off the paint film. Adding elastic crack-bridging primers prevents micro-fissures in external plaster from allowing rainwater ingress.',
            'Adonai Company Ltd partners with certified paint manufacturers to apply UV-stable pigments that retain their rich hues year after year.',
          ],
      takeaways: isRw
        ? [
            'Primer icengera mu rukuta ni ngombwa ku nkuta nshya z\'amatafari',
            'Ibinyabutabire birinda imiyege birinda urukuta kuzana ibizinga by\'umukara',
            'Gusiga amakoti abiri yuzuye bituma ibara ryiyerekana neza',
          ]
        : [
            'Deep-penetrating primer is essential on fresh Rwandan brickwork',
            'Anti-fungal additives prevent black mildew during rainy seasons',
            'Two full topcoats ensure color saturation and thickness',
          ],
    },
    {
      id: 'post-3',
      title: isRw
        ? 'Inzira yo Kuvugurura Inzu Zishaje: Igihe Cyiza cyo Guhindura Inzu aho Kuyisenya'
        : 'Complete House Renovation Guide: When to Remodel vs Rebuild',
      category: t.services.renovation.title,
      author: isRw ? 'Aba Enjeniyeri b\'Inyubako' : 'Civil Engineering Desk',
      date: isRw ? 'Ukuboza 2025' : 'December 2025',
      readTime: isRw ? 'Iminota 5 yo gusoma' : '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop',
      excerpt: isRw
        ? 'Uko guhindura imiterere y\'inzu, gusimbuza amatiyo n\'amashanyarazi bishobora guhindura inzu ya kera ikaba inzu nziza igezweho ku giciro kiri munsi y\'igice cyo kuyubaka bundi bushya.'
        : 'How modernizing floor plans, updating corroded plumbing, and re-plastering can turn older Kigali houses into high-value contemporary residences at half the cost.',
      content: isRw
        ? [
            'Mu bice bitandukanye bya Gasabo na Nyarugenge hari amazu yubatse neza kera ariko afite ibyumba bito bifunze n\'amatiyo y\'ibyuma yatangiye kuzana ingese.',
            'Kuvugurura inzu neza bikorwa hagakurwaho inkuta zidafashe igisenge hagashyirwamo ibyuma bikomeye byo gushyigikira (RSJ Beams) kugira ngo uruganiriro rwaguke. Gusimbuza amatiyo y\'icyuma hagashyirwamo aya PPR birinda inzu kuzana imyate n\'amazi mu nkuta.',
            'Gushyiramo amadirishya mashya ya aluminium n\'amakaro meza ahita ahindura isura y\'inzu yose ku giciro gito ugereranyije no gusenya.',
          ]
        : [
            'Many established neighborhoods in Gasabo and Nyarugenge feature solidly built older homes with outdated layout configurations, tiny partitioned rooms, and deteriorating steel plumbing.',
            'A comprehensive renovation replaces non-bearing walls with steel beams (RSJs) to create spacious open-concept living lounges and dining spaces. Replacing old galvanized pipes with PPR fusion-welded networks prevents future water leaks.',
            'Upgrading to modern aluminium sliding windows and modern floor tiles completely revamps the aesthetic without requiring costly demolition and rebuild permits.',
          ],
      takeaways: isRw
        ? [
            'Kugenzura ubukomezi bw\'inzu bigomba kubanziriza gusenya urukuta urwo ari rwo rwose',
            'Amatiyo ya PPR arinda amazi kumeneka mu nkuta burundu',
            'Kwagura ibyumba bituma umwuka n\'urumuri byinjira neza',
          ]
        : [
            'Structural assessment must precede any interior wall removal',
            'PPR pipes eliminate recurring plumbing leaks inside walls',
            'Open layouts drastically enhance natural lighting and ventilation',
          ],
    },
  ];

  const categories = isRw
    ? ['All', t.services.finishing.title, t.services.painting.title, t.services.renovation.title]
    : ['All', 'House Finishing', 'Painting & Design', 'House Renovation'];

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Page Hero Banner */}
      <PageHero
        badge={t.blog.badge}
        title={t.blog.title}
        subtitle={t.blog.subtitle}
        breadcrumbs={[{ label: t.navbar.blog }]}
        onNavigate={onNavigate}
      />

      {/* 2. Filter & Search Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer font-['Outfit',sans-serif] ${
                    selectedCategory === cat
                      ? 'bg-[#76b82a] text-white shadow-md'
                      : 'bg-white text-[#071a33] hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat === 'All' ? (isRw ? 'Byose' : 'All') : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRw ? 'Shakisha inama z\'ubwubatsi...' : 'Search construction tips...'}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Articles Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#071a33]/90 text-white text-xs font-bold backdrop-blur-xs font-['Outfit',sans-serif]">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#76b82a]" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedPost(post)}
                      className="text-lg font-black text-[#071a33] font-['Outfit',sans-serif] group-hover:text-[#76b82a] transition-colors mb-3 cursor-pointer leading-snug"
                    >
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#76b82a] hover:text-[#68a61e] cursor-pointer font-['Outfit',sans-serif]"
                    >
                      <span>{isRw ? 'Soma Inkuru Yose' : 'Read Full Article'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Article Lightbox Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-slate-100">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Banner */}
            <div className="h-64 sm:h-72 w-full relative">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#76b82a] text-white px-2.5 py-1 text-xs font-black rounded-md uppercase tracking-wider inline-block mb-2 font-['Outfit',sans-serif]">
                  {selectedPost.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif]">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#76b82a]" />
                  <span>{selectedPost.author}</span>
                </div>
                <div>•</div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#76b82a]" />
                  <span>{selectedPost.date}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                <h4 className="text-xs font-black uppercase text-[#071a33] tracking-wider mb-3 font-['Outfit',sans-serif]">
                  {isRw ? 'Inama z\'Ingenzi z\'Ubwubatsi' : 'Key Construction Recommendations'}
                </h4>
                <div className="space-y-2">
                  {selectedPost.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#76b82a] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#071a33] text-xs font-bold rounded-xl cursor-pointer"
                >
                  {isRw ? 'Funga Inkuru' : 'Close Article'}
                </button>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenQuote();
                  }}
                  className="px-6 py-2.5 bg-[#76b82a] hover:bg-[#68a61e] text-white text-xs font-bold rounded-xl shadow-md cursor-pointer font-['Outfit',sans-serif]"
                >
                  {t.hero.quoteBtn}
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
