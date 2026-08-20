import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { sendQuoteEmail } from '../services/emailService';
import { useLanguage } from '../context/LanguageContext';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2, COMPANY_EMAIL, getWhatsAppLink } from '../utils/whatsapp';

interface CtaBannerProps {
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = () => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'House Finishing',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const result = await sendQuoteEmail({
        ...formData,
        projectBudget: 'Standard Consultation',
        location: 'Gasabo, Kimironko',
      });
      setSuccessMessage(
        isRw
          ? 'Murakoze cyane! Ubutumwa bwanyu bwoherejwe kuri Adonai Company Ltd. Turabasubiza bidatinze.'
          : result.message
      );
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: 'House Finishing',
        message: '',
      });
    } catch {
      setSuccessMessage(
        isRw
          ? 'Murakoze! Ubutumwa bwanyu bwakiriwe neza.'
          : 'Thank you! Your message has been sent to Adonai Company Ltd.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#071a33] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#76b82a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5">
            {/* Slogan Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#76b82a]/20 border border-[#76b82a]/40 text-[#82c324] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#76b82a] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
                {t.contact.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-['Outfit',sans-serif] mb-6">
              {t.contact.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>

            {/* Official Contact Card */}
            <div className="bg-[#0e2246] rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-xl space-y-5">
              <h3 className="text-base font-black text-[#82c324] uppercase tracking-wider font-['Outfit',sans-serif] pb-2 border-b border-slate-700">
                {isRw ? 'Ibiro Byacu na Gahunda' : 'Official Contact Card'}
              </h3>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#76b82a]/20 text-[#82c324] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">{t.contact.phoneTitle}</span>
                  <div className="space-y-0.5 mt-0.5">
                    <a
                      href={`tel:${DISPLAY_PHONE_1.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#76b82a] block transition-colors"
                    >
                      {DISPLAY_PHONE_1}
                    </a>
                    <a
                      href={`tel:${DISPLAY_PHONE_2.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#76b82a] block transition-colors"
                    >
                      {DISPLAY_PHONE_2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#76b82a]/20 text-[#82c324] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">{t.contact.emailTitle}</span>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#76b82a] break-all transition-colors"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#76b82a]/20 text-[#82c324] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">{t.contact.locationTitle}</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    GASABO, KIMIRONKO
                  </span>
                  <span className="text-xs text-slate-400 block">Kigali, Rwanda</span>
                </div>
              </div>

              {/* Quick WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink(language)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-sm transition-all shadow-md active:scale-98 cursor-pointer font-['Outfit',sans-serif]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isRw ? 'Tuvugishe kuri WhatsApp' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry / Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-800 rounded-2xl p-7 sm:p-10 shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-black text-[#071a33] font-['Outfit',sans-serif] mb-2">
                {t.contact.form.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                {t.contact.form.subtitle}
              </p>

              {successMessage ? (
                <div className="p-6 rounded-xl bg-lime-50 border border-lime-200 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#76b82a] mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 font-['Outfit',sans-serif]">
                    {t.contact.form.successTitle}
                  </h4>
                  <p className="text-sm text-slate-700">{successMessage}</p>
                  <button
                    onClick={() => setSuccessMessage(null)}
                    className="mt-4 px-6 py-2 bg-[#76b82a] text-white text-xs font-bold rounded-xl hover:bg-[#68a61e] cursor-pointer font-['Outfit',sans-serif]"
                  >
                    {isRw ? 'Ohereza Ubundi Butumwa' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={isRw ? 'Urugero: Niyonsaba Jean' : 'e.g. Jean Paul'}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#76b82a] focus:ring-2 focus:ring-[#76b82a]/20 outline-hidden text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                        {t.contact.form.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+250 78x xxx xxx"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#76b82a] focus:ring-2 focus:ring-[#76b82a]/20 outline-hidden text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#76b82a] focus:ring-2 focus:ring-[#76b82a]/20 outline-hidden text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                        {t.contact.form.service} *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#76b82a] focus:ring-2 focus:ring-[#76b82a]/20 outline-hidden text-sm font-medium bg-white cursor-pointer"
                      >
                        <option value="House Finishing">{t.services.finishing.title}</option>
                        <option value="House Building">{t.services.building.title}</option>
                        <option value="House Painting & Designing">{t.services.painting.title}</option>
                        <option value="Interior & Exterior Design">{t.services.design.title}</option>
                        <option value="House Renovation">{t.services.renovation.title}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isRw
                          ? 'Sobanura aho inzu yawe iherereye i Gasabo/Kigali, ibipimo, cyangwa ibyo wifuza...'
                          : 'Describe your location in Gasabo/Kigali, house dimensions, or requirements...'
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#76b82a] focus:ring-2 focus:ring-[#76b82a]/20 outline-hidden text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      🔒 {isRw ? 'Ubutumwa bwoherezwa mu ibanga kuri Adonai Company Ltd.' : 'Sent directly to Adonai Company Ltd supervisory team.'}
                    </span>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer font-['Outfit',sans-serif]"
                    >
                      {submitting ? (
                        <span>{isRw ? 'Birakora...' : 'Sending...'}</span>
                      ) : (
                        <>
                          <span>{t.contact.form.submit}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
