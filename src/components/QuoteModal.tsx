import React, { useState } from 'react';
import { X, Send, CheckCircle2, Settings, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuoteFormData } from '../types';
import { sendQuoteEmail, getEmailSettings, saveEmailSettings } from '../services/emailService';
import { useLanguage } from '../context/LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService }) => {
  const { language, t } = useLanguage();
  const isRw = language === 'rw';

  const [activeTab, setActiveTab] = useState<'form' | 'settings'>('form');
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: defaultService || 'House Finishing',
    projectBudget: 'Standard Estimate',
    location: 'Gasabo, Kimironko',
    message: '',
  });

  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceType: defaultService }));
    }
  }, [defaultService]);

  const [emailConfig, setEmailConfig] = useState(getEmailSettings());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [settingsSaved, setSettingsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendQuoteEmail(formData);
      setSubmitStatus(result);
      if (result.success) {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: isRw
          ? 'Habaye ikibazo mu kohereza. Nyamuneka twamamagare kuri +250 782 036 988 cyangwa +250 788 818 039.'
          : 'There was an issue sending your quote. Please call us directly at +250 782 036 988 or +250 788 818 039.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveEmailSettings(emailConfig);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden relative border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#071a33] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#76b82a] text-white flex items-center justify-center font-bold font-['Outfit',sans-serif]">
              A
            </div>
            <div>
              <h3 className="text-xl font-black font-['Outfit',sans-serif]">
                {t.quoteModal.title}
              </h3>
              <p className="text-xs text-[#82c324] font-semibold">
                ADONAI COMPANY LTD • Gasabo, Kimironko
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'form' ? 'settings' : 'form')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-[#76b82a] text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="EmailJS Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold font-['Outfit',sans-serif]">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
              activeTab === 'form'
                ? 'bg-white text-[#76b82a] border-b-2 border-[#76b82a]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {isRw ? 'Ifishi Yo Gusaba Igiciro' : 'Quote Application Form'}
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-white text-[#76b82a] border-b-2 border-[#76b82a]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            EmailJS Configuration
          </button>
        </div>

        {/* Body Container */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {activeTab === 'form' ? (
            <div>
              {submitStatus?.success ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-lime-100 text-[#76b82a] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-[#071a33] font-['Outfit',sans-serif]">
                    {isRw ? 'Ubusabe Bwakiriwe Neza!' : 'Quote Request Submitted!'}
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {submitStatus.message}
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                    >
                      {isRw ? 'Saba Ikindi Giciro' : 'Submit Another Quote'}
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#76b82a] hover:bg-[#68a61e] rounded-lg shadow-md cursor-pointer font-['Outfit',sans-serif]"
                    >
                      {isRw ? 'Birasozwe' : 'Done'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus && !submitStatus.success && (
                    <div className="p-3.5 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitStatus.message}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                        {t.quoteModal.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={isRw ? 'Urugero: Jean Paul' : 'e.g. Jean Paul'}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                        {t.quoteModal.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@gmail.com"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                        {t.quoteModal.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+250 78x xxx xxx"
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                        {t.quoteModal.service} *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden bg-white cursor-pointer"
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
                      {t.quoteModal.location}
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder={isRw ? 'Urugero: Gasabo, Kimironko, Nyarutarama...' : 'e.g. Gasabo, Kimironko, Nyarutarama...'}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">
                      {t.quoteModal.message} *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isRw
                          ? 'Sobanura ibipimo by\'inzu yawe, ibyo wifuza kurangiza, cyangwa igihe cyo gutangira...'
                          : 'Specify your house dimensions, required finishes, or start date...'
                      }
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#76b82a] hover:bg-[#68a61e] text-white font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75 cursor-pointer font-['Outfit',sans-serif]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{isRw ? 'Kohereza Ubusabe...' : 'Dispatching Quote Request...'}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.quoteModal.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
              <div className="p-3 bg-lime-50 text-lime-900 rounded-lg text-xs leading-relaxed border border-lime-200">
                <strong>EmailJS Integration:</strong> By default, this app includes instant delivery fallback and will log submissions for Adonai Company Ltd. To route live submissions to your custom email via EmailJS, insert your keys below from your{' '}
                <a
                  href="https://www.emailjs.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline font-bold text-[#68a61e]"
                >
                  EmailJS Dashboard
                </a>
                .
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">EmailJS Service ID</label>
                <input
                  type="text"
                  value={emailConfig.serviceId}
                  onChange={(e) => setEmailConfig({ ...emailConfig, serviceId: e.target.value })}
                  placeholder="e.g. service_xxxxxxx"
                  className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">EmailJS Template ID</label>
                <input
                  type="text"
                  value={emailConfig.templateId}
                  onChange={(e) => setEmailConfig({ ...emailConfig, templateId: e.target.value })}
                  placeholder="e.g. template_xxxxxxx"
                  className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 font-['Outfit',sans-serif]">EmailJS Public Key</label>
                <input
                  type="text"
                  value={emailConfig.publicKey}
                  onChange={(e) => setEmailConfig({ ...emailConfig, publicKey: e.target.value })}
                  placeholder="e.g. user_xxxxxxx or public key"
                  className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded focus:ring-2 focus:ring-[#76b82a] focus:outline-hidden font-mono"
                />
              </div>

              {settingsSaved && (
                <div className="text-green-600 font-bold flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Settings updated successfully!</span>
                </div>
              )}

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded font-bold cursor-pointer"
                >
                  Back To Form
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#071a33] hover:bg-[#0e2246] text-white font-bold rounded-lg shadow cursor-pointer font-['Outfit',sans-serif]"
                >
                  Save Settings
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
