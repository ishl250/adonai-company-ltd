import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendNewsletterSubscription } from '../services/emailService';
import { useLanguage } from '../context/LanguageContext';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2, COMPANY_EMAIL, getWhatsAppLink } from '../utils/whatsapp';

interface FooterProps {
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onNavigate }) => {
  const { language, t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState<string | null>(null);

  const isRw = language === 'rw';

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setSubscribing(true);
    try {
      const result = await sendNewsletterSubscription(newsletterEmail);
      setSubscriptionSuccess(
        isRw
          ? 'Murakoze kwiyandikisha ku makuru ya Adonai Company Ltd!'
          : result.message
      );
      setNewsletterEmail('');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85 },
      });
      setTimeout(() => {
        setSubscriptionSuccess(null);
      }, 5000);
    } catch {
      setSubscriptionSuccess(
        isRw
          ? 'Wiyandikishije neza ku makuru ya Adonai Company Ltd!'
          : 'Subscribed to Adonai Company Ltd updates!'
      );
    } finally {
      setSubscribing(false);
    }
  };

  const navLinks = [
    { id: 'home', name: t.navbar.home, href: '#home' },
    { id: 'about', name: t.navbar.about, href: '#about' },
    { id: 'services', name: t.navbar.services, href: '#services' },
    { id: 'projects', name: t.navbar.projects, href: '#projects' },
    { id: 'why-us', name: t.navbar.whyUs, href: '#why-us' },
    { id: 'contact', name: t.navbar.contact, href: '#contact' },
  ];

  const serviceLinks = [
    { name: t.services.finishing.title, key: 'services' },
    { name: t.services.building.title, key: 'services' },
    { name: t.services.painting.title, key: 'services' },
    { name: t.services.design.title, key: 'services' },
    { name: t.services.renovation.title, key: 'services' },
  ];

  return (
    <footer id="main-footer" className="bg-[#051326] text-slate-400 pt-20 pb-10 border-t border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800/80">
          {/* Col 1: About Adonai Company Ltd & Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#071a33] flex items-center justify-center p-1.5 border border-[#76b82a]/40 shadow-xs">
                <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 6L5 24H12V42H36V24H43L24 6Z" stroke="#76b82a" strokeWidth="4" strokeLinejoin="round" fill="none" />
                  <rect x="20" y="20" width="3.5" height="3.5" fill="#76b82a" />
                  <rect x="24.5" y="20" width="3.5" height="3.5" fill="#76b82a" />
                  <rect x="20" y="24.5" width="3.5" height="3.5" fill="#76b82a" />
                  <rect x="24.5" y="24.5" width="3.5" height="3.5" fill="#76b82a" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1 font-['Outfit',sans-serif] font-black text-xl tracking-tight">
                  <span className="text-white">ADONAI</span>
                  <span className="text-[#76b82a]">COMPANY</span>
                  <span className="text-white text-base">LTD</span>
                </div>
                <p className="text-[10px] text-[#82c324] font-bold tracking-wider uppercase">
                  {isRw ? 'Kubaka Icyerekezo Cyawe, Turema Agaciro Gahoraho' : 'Building Your Vision, Creating Lasting Value'}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#76b82a] shrink-0" />
                <span>{t.footer.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#76b82a] shrink-0" />
                <a href={`tel:${DISPLAY_PHONE_1.replace(/\s+/g, '')}`} className="hover:text-[#76b82a] transition-colors font-medium">
                  {DISPLAY_PHONE_1}
                </a>
                <span className="text-slate-600">/</span>
                <a href={`tel:${DISPLAY_PHONE_2.replace(/\s+/g, '')}`} className="hover:text-[#76b82a] transition-colors font-medium">
                  {DISPLAY_PHONE_2}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#76b82a] shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-[#76b82a] transition-colors font-medium">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink(language)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-xs transition-colors shadow-xs cursor-pointer font-['Outfit',sans-serif]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isRw ? 'Tuvugishe kuri WhatsApp' : 'Direct WhatsApp Inquiries'}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Pages (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-black tracking-wider uppercase mb-5 font-['Outfit',sans-serif]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-[#76b82a] transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-black tracking-wider uppercase mb-5 font-['Outfit',sans-serif]">
              {t.footer.ourServices}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('services');
                      const el = document.querySelector('#services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-[#76b82a] transition-colors block py-0.5"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Quote (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-black tracking-wider uppercase mb-5 font-['Outfit',sans-serif]">
              {t.cta.requestQuote}
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              {isRw
                ? 'Ukeneye kumenya igiciro cyo kubaka cyangwa kurangiza inzu yawe i Kigali? Vugana n\'abahanga bacu.'
                : 'Need cost estimations for building or finishing your house in Kigali? Get in touch with our engineers.'}
            </p>

            <button
              onClick={onOpenQuote}
              className="w-full py-3 bg-[#76b82a] hover:bg-[#68a61e] text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer font-['Outfit',sans-serif]"
            >
              {t.navbar.quoteBtn}
            </button>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="relative pt-2">
              <span className="text-xs text-slate-400 block mb-1.5 font-semibold">
                {t.footer.newsletterTitle}
              </span>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full bg-slate-900 border border-slate-700 text-white text-xs px-3.5 py-2.5 rounded-xl focus:outline-hidden focus:border-[#76b82a] pr-10"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="absolute right-1 top-1 bottom-1 bg-[#76b82a] hover:bg-[#68a61e] text-white px-2.5 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {subscriptionSuccess && (
              <div className="flex items-center gap-1.5 text-[11px] text-[#82c324] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{subscriptionSuccess}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ADONAI COMPANY LTD. {t.footer.rights} Gasabo, Kimironko.
          </div>
          <div className="flex items-center space-x-6 text-slate-400">
            <span className="text-[#82c324] font-bold">
              {isRw ? 'Kubaka Icyerekezo Cyawe, Turema Agaciro Gahoraho' : 'Building Your Vision, Creating Lasting Value'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
