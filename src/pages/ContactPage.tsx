import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageHero } from '../components/PageHero';
import { sendContactMessage } from '../services/emailService';
import { BrandLogos } from '../components/BrandLogos';
import { useLanguage } from '../context/LanguageContext';
import { DISPLAY_PHONE_1, DISPLAY_PHONE_2 } from '../utils/whatsapp';

interface ContactPageProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
}) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'House Finishing',
    projectLocation: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendContactMessage({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Website Inquiry: ${formData.serviceInterest}`,
        serviceType: `${formData.serviceInterest} (Location: ${formData.projectLocation})`,
        projectBudget: 'Direct Contact Form Inquiry',
        location: formData.projectLocation || 'Gasabo / Kigali',
        message: formData.message,
      });

      setSubmitStatus('success');
      setStatusMessage(
        isRw
          ? 'Ubutumwa bwageze ku buyobozi bwa Adonai Company Ltd! Turakuvugisha mu mwanya muto.'
          : result.message
      );
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Clear fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceInterest: 'House Finishing',
        projectLocation: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
      setStatusMessage(
        isRw
          ? 'Ntibyashobotse kohereza ubutumwa. Nyamuneka hamagara telefone zacu z\'akazi (+250 782 036 988 / +250 788 818 039).'
          : 'Unable to deliver message right now. Please call our direct phones (+250 782 036 988 / +250 788 818 039).'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: isRw ? 'Ibiro bya Adonai Company Ltd biherereye he?' : 'Where is Adonai Company Ltd located?',
      a: isRw
        ? 'Ibiro bikuru byacu biherereye mu Karere ka Gasabo, Kimironko, Kigali, Rwanda. Dukora imirimo y\'ubwubatsi mu Mujyi wa Kigali wose (Gasabo, Kicukiro, Nyarugenge) no mu Ntara zose z\'igihugu.'
        : 'We are headquartered in Gasabo, Kimironko, Kigali, Rwanda. We serve residential and commercial clients across all sectors of Kigali (Gasabo, Kicukiro, Nyarugenge) as well as upcountry construction sites.',
    },
    {
      q: isRw ? 'Uburyo bwo gusaba no guhabwa igiciro (Devis/BOQ) bukorwa bute?' : 'How does your quotation and pricing process work?',
      a: isRw
        ? 'Dutanga inama no gusura ikibanza ku buntu. Nyuma yo gusuzuma ibishushanyo byawe by\'inzu cyangwa gusura ikibanza, aba enjeniyeri bacu bagukorera inyandiko y\'ibiciro ifite ibisobanuro birambuye (BOQ) itagira amafaranga yihishe.'
        : 'We provide free initial consultations and site visits. Following the inspection of your architectural drawings or physical site, our civil engineers generate a detailed, itemized Bill of Quantities (BOQ) with transparent material and labor breakdowns.',
    },
    {
      q: isRw ? 'Ese mutanga ubwishingizi bw\'ubwiza nyuma yo gusoza umushinga?' : 'Do you offer quality warranties after project completion?',
      a: isRw
        ? 'Yego, 100%. Imirimo yose y\'ubwubatsi, finishing, no gusiga amarangi iherekezwa n\'ubwishingizi bw\'ubwiza n\'igihe cyo gukosora icyo ari cyo cyose kitanyuze umukiriya.'
        : 'Yes, 100%. All our house finishing, structural building, and painting projects include post-handover quality guarantees and a formal snagging rectification period to ensure total peace of mind.',
    },
    {
      q: isRw ? 'Ese Adonai Company Ltd ifasha mu kubona uruhushya rwo kubaka (Permit)?' : 'Can Adonai Company Ltd assist with building permits and Kigali master plan compliance?',
      a: isRw
        ? 'Yego rwose. Aba enjeniyeri n\'abahanga mu gushushanya amazu bacu bazi neza amategeko y\'imyubakire mu Mujyi wa Kigali n\'uburyo bwo gusaba ibyangombwa binyuze muri BPMS.'
        : 'Absolutely. Our civil engineers and architects are well-versed in the City of Kigali building regulations, BPMS (Building Permitting Management System), and zoning standards.',
    },
    {
      q: isRw ? 'Bifata igihe kingana iki kugira ngo ikipe yanyu itangire akazi ku kibanza cyanjye?' : 'How quickly can your team mobilize onto my site in Kigali?',
      a: isRw
        ? 'Nyuma yo kumvikana no gusinya amasezerano y\'akazi, aba enjeniyeri bacu n\'abakozi bageza ibikoresho ku kibanza hagati y\'iminsi 3 kugeza kuri 5 y\'akazi.'
        : 'Following agreement on the scope and signing of the contract, our site team and supervisory civil engineers can mobilize within 3 to 5 business days.',
    },
  ];

  return (
    <div className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Page Hero Banner */}
      <PageHero
        badge={t.contact.badge}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        breadcrumbs={[{ label: t.navbar.contact }]}
        onNavigate={onNavigate}
      />

      {/* 2. Contact Cards Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Card 1: Office Location */}
            <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#76b82a] text-white flex items-center justify-center mb-4 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] uppercase mb-1">
                {isRw ? 'Ibiro Byacu' : 'Office Location'}
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3">
                Gasabo, Kimironko<br />
                Kigali, Rwanda
              </p>
              <a
                href="https://maps.google.com/?q=Kimironko,Kigali,Rwanda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#76b82a] hover:underline font-['Outfit',sans-serif]"
              >
                <span>{isRw ? 'Reba kuri Google Maps' : 'Google Maps Route'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Card 2: Phone Hotline */}
            <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#071a33] text-[#82c324] flex items-center justify-center mb-4 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] uppercase mb-1">
                {isRw ? 'Telefone z\'Akazi' : 'Direct Hotlines'}
              </h3>
              <div className="space-y-1 text-xs font-semibold text-slate-700 mb-3">
                <div>
                  <a href={`tel:${DISPLAY_PHONE_1.replace(/\s+/g, '')}`} className="hover:text-[#76b82a] transition-colors block">
                    {DISPLAY_PHONE_1}
                  </a>
                </div>
                <div>
                  <a href={`tel:${DISPLAY_PHONE_2.replace(/\s+/g, '')}`} className="hover:text-[#76b82a] transition-colors block">
                    {DISPLAY_PHONE_2}
                  </a>
                </div>
              </div>
              <span className="text-[11px] font-bold text-slate-400 font-['Outfit',sans-serif]">
                {isRw ? 'Kuwa Mbere - Kuwa Gatandatu' : 'Lines Open Mon - Sat'}
              </span>
            </div>

            {/* Card 3: Official Email */}
            <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#76b82a] text-white flex items-center justify-center mb-4 shadow-xs">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] uppercase mb-1">
                {isRw ? 'Imeri Yacu' : 'Email Inquiries'}
              </h3>
              <p className="text-xs font-medium text-slate-700 mb-3 break-all">
                <a href="mailto:nshimiyimianad637@gmail.com" className="hover:text-[#76b82a] transition-colors">
                  nshimiyimianad637@gmail.com
                </a>
              </p>
              <span className="text-[11px] font-bold text-slate-400 font-['Outfit',sans-serif]">
                {isRw ? 'Igisubizo mu masaha 24' : 'Response within 24 hours'}
              </span>
            </div>

            {/* Card 4: Working Hours */}
            <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#071a33] text-[#82c324] flex items-center justify-center mb-4 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#071a33] font-['Outfit',sans-serif] uppercase mb-1">
                {isRw ? 'Amasaha y\'Akazi' : 'Operating Hours'}
              </h3>
              <div className="text-xs text-slate-600 space-y-1 mb-2 font-medium">
                <div>{isRw ? 'Mbere – Gatanu: 7:30 AM – 6:00 PM' : 'Mon – Fri: 7:30 AM – 6:00 PM'}</div>
                <div>{isRw ? 'Kuwa Gatandatu: 8:00 AM – 3:00 PM' : 'Saturday: 8:00 AM – 3:00 PM'}</div>
                <div>{isRw ? 'Ku Cyumweru: Ku Gahunda' : 'Sunday: By Appointment'}</div>
              </div>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
                <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
                <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                  {isRw ? 'FOMU YO KUTWANDIKIRA' : 'DIRECT INQUIRY FORM'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#071a33] font-['Outfit',sans-serif] mb-2">
                {isRw ? 'Ohereza Ubutumwa Bwawe' : 'Send Us A Message'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {isRw
                  ? 'Uzuza ibisabwa ku mushinga wawe hano munsi. Ibiro byacu i Gasabo, Kimironko biragusubiza mu buryo bwihuse.'
                  : 'Fill out your project requirements below. Our engineering desk in Gasabo, Kimironko will review and get back to you immediately.'}
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">{isRw ? 'Ubutumwa bwoherejwe neza!' : 'Message Sent Successfully!'}</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">{isRw ? 'Icyitonderwa:' : 'Notice:'}</strong>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Paul Mugisha"
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a] font-medium"
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
                      placeholder="+250 78X XXX XXX"
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a] font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@gmail.com"
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                      {t.contact.form.service}
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a] font-medium cursor-pointer"
                    >
                      <option value="House Finishing">{t.services.finishing.title}</option>
                      <option value="House Building">{t.services.building.title}</option>
                      <option value="House Painting & Designing">{t.services.painting.title}</option>
                      <option value="Interior & Exterior Design">{t.services.design.title}</option>
                      <option value="House Renovation">{t.services.renovation.title}</option>
                      <option value="General Consultation">{isRw ? 'Gusura Ikibanza / Inama y\'Ubwubatsi' : 'General Consultation / Site Visit'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                    {isRw ? 'Aho Umushinga Uherereye (Kigali / Ahandi)' : 'Project Location / Site in Kigali'}
                  </label>
                  <input
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Gasabo, Kimironko / Nyarutarama / Gacuriro"
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a] font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isRw
                        ? 'Sobanura ibyo wifuza ko twagukorera, ubuso bwa metero kare (m²), cyangwa igihe wifuza ko bitangirira...'
                        : 'Please specify your scope, approximate square meters, or timeline...'
                    }
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer font-['Outfit',sans-serif]"
                >
                  {isSubmitting ? (
                    <span>{isRw ? 'Kwohereza...' : 'Sending Inquiry...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.form.submit}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Kigali / Kimironko Location Visualizer & WhatsApp (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Location Card with Map Graphic */}
              <div className="bg-[#071a33] text-white p-7 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-bold text-[#82c324] uppercase tracking-wider mb-2 font-['Outfit',sans-serif]">
                  <Navigation className="w-4 h-4" />
                  <span>{isRw ? 'Ibiro Byacu Kimironko, Gasabo' : 'Kimironko, Gasabo Base'}</span>
                </div>
                <h3 className="text-xl font-black font-['Outfit',sans-serif] mb-3">
                  {isRw ? 'Sura Ibiro Bikuru Byacu' : 'Visit Our Headquarters'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {isRw
                    ? 'Ibiro byacu n\'ikipe y\'aba enjeniyeri biherereye i Gasabo, Kimironko. Twakira abakiriya bifuza gusuzumirwa ibishushanyo by\'amazu, kureba ibikoresho, no kuganira ku masezerano.'
                    : 'Our office and supervisory team are based in Gasabo, Kimironko. We welcome clients for blueprint reviews, material sample inspections, and contract discussions.'}
                </p>

                {/* Map Graphic Preview */}
                <div className="rounded-xl overflow-hidden border border-slate-700 relative h-48 bg-slate-900 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
                    alt="Map Location Gasabo Kimironko"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-[#071a33]/60 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#76b82a] text-white flex items-center justify-center shadow-lg mb-2 animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-white uppercase tracking-wider font-['Outfit',sans-serif]">
                      ADONAI COMPANY LTD
                    </span>
                    <span className="text-[11px] text-lime-200">Gasabo, Kimironko, Kigali</span>
                  </div>
                </div>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/250782036988?text=${encodeURIComponent(isRw ? 'Mwaramutse! Nifuzaga kumenya byinshi ku mirimo yanyu y\'ubwubatsi.' : 'Hello! I would like to inquire about your construction and finishing services.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 font-['Outfit',sans-serif]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isRw ? 'Tuvugishe kuri WhatsApp (+250 782 036 988)' : 'Chat on WhatsApp (+250 782 036 988)'}</span>
                </a>
              </div>

              {/* Direct Call Helper */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="text-sm font-black text-[#071a33] uppercase tracking-wider mb-2 font-['Outfit',sans-serif]">
                  {isRw ? 'Ukeneye Ubufasha bw\'Ihuse?' : 'Need Urgent Site Support?'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {isRw
                    ? 'Ku mishinga yihutirwa cyangwa kumenya ibiciro vuba, hamagara aba enjeniyeri bakuru:'
                    : 'For on-going active site emergencies or fast quote turnaround, call our senior engineer directly:'}
                </p>
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5 text-[#76b82a] shrink-0" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{isRw ? 'Umurongo w\'Ibiro Bikuru' : 'Head Office Line'}</div>
                    <a href={`tel:${DISPLAY_PHONE_2.replace(/\s+/g, '')}`} className="text-sm font-black text-[#071a33] hover:text-[#76b82a]">
                      {DISPLAY_PHONE_2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) */}
      <section className="py-16 sm:py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
              <HelpCircle className="w-3.5 h-3.5 text-[#68a61e]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
                {isRw ? 'IBIBAZO BIBARWA KANSHI' : 'FREQUENTLY ASKED QUESTIONS'}
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
              {isRw ? 'Ibibazo Byibazwa ku Myubakire i Kigali' : 'Common Questions About Building In Kigali'}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-black text-[#071a33] font-['Outfit',sans-serif]">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#76b82a]" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Brand Highlights Ribbon */}
      <BrandLogos />
    </div>
  );
};
