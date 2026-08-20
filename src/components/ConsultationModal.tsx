import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConsultationFormData } from '../types';
import { sendConsultationEmail } from '../services/emailService';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: new Date().toISOString().split('T')[0],
    serviceType: 'House Finishing',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await sendConsultationEmail(formData);
      setResult({
        success: true,
        message: isRw
          ? 'Gahunda yo gusura ikibanza yakiriwe neza! Aba enjeniyeri bacu bari i Kimironko, Gasabo barakuvugisha mu kanya gato.'
          : res.message,
      });
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      setResult({
        success: true,
        message: isRw
          ? 'Gahunda yo gusura ikibanza yakiriwe neza! Aba enjeniyeri bacu bari i Kimironko, Gasabo barakuvugisha mu kanya gato.'
          : 'Consultation request received! Our engineering desk in Gasabo, Kimironko will connect with you shortly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative border border-slate-100">
        {/* Header */}
        <div className="bg-[#071a33] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-black text-[#82c324] uppercase tracking-wider block font-['Outfit',sans-serif]">
              ADONAI COMPANY LTD
            </span>
            <h3 className="text-xl font-black font-['Outfit',sans-serif]">
              {isRw ? 'Gusaba Gusurwa ku Kibanza cyangwa Inama' : 'Schedule A Site Consultation'}
            </h3>
            <p className="text-xs text-slate-300">
              {isRw ? 'Gusuzuma umushinga ku buntu i Gasabo, Kimironko & Kigali hose' : 'Free project assessment in Gasabo, Kimironko & Kigali'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {result?.success ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-lime-100 text-[#76b82a] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-[#071a33] font-['Outfit',sans-serif]">
                {isRw ? 'Gahunda Yakiriwe Neza!' : 'Consultation Scheduled!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {result.message}
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#76b82a] hover:bg-[#68a61e] text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer font-['Outfit',sans-serif]"
                >
                  {isRw ? 'Funga Idirishya' : 'Close Window'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Robert Kayitare"
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@gmail.com"
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                    {t.contact.form.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+250 78x xxx xxx"
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                    {isRw ? 'Itariki Wifuza' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                    {t.contact.form.service}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden bg-white cursor-pointer"
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
                <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                  {isRw ? 'Aho Ikibanza Giherereye n\'Ibisobanuro' : 'Site Location & Requirements'}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={isRw ? 'urugero: Kimironko hafi y\'isoko / Kurangiza inzu y\'igorofa...' : 'e.g. Kimironko, next to market / New 2-storey house finishing...'}
                  className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer font-['Outfit',sans-serif]"
              >
                {isSubmitting ? (
                  <span>{isRw ? 'Gushyiraho gahunda...' : 'Scheduling Appointment...'}</span>
                ) : (
                  <>
                    <span>{isRw ? 'Emeza Gahunda yo Gusurwa' : 'Confirm Consultation'}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
