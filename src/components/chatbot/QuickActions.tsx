import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Building2, Paintbrush, Home, Calculator, PhoneCall, MapPin } from 'lucide-react';

interface QuickActionsProps {
  onSelectPrompt: (promptText: string) => void;
  disabled?: boolean;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onSelectPrompt, disabled }) => {
  const { language, t } = useLanguage();

  const actions = [
    {
      id: 'services',
      label: t.chatbot.actions.services,
      prompt: language === 'rw' ? 'Ni izihe serivisi z\'ubwubatsi mutanga?' : 'What construction services do you provide?',
      icon: Sparkles,
    },
    {
      id: 'finishing',
      label: t.chatbot.actions.finishing,
      prompt: language === 'rw' ? 'Mumbwire kuri serivisi yo kurangiza inzu (Finishing)' : 'Tell me about your house finishing services and plastering.',
      icon: Home,
    },
    {
      id: 'building',
      label: t.chatbot.actions.building,
      prompt: language === 'rw' ? 'Ese mwubaka inzu guhera ku musingi?' : 'Do you build residential houses from foundation up?',
      icon: Building2,
    },
    {
      id: 'quote',
      label: t.chatbot.actions.quote,
      prompt: language === 'rw' ? 'Nifuza gusaba igiciro cyangwa Devis y\'inzu' : 'How can I request an itemized quote or devis?',
      icon: Calculator,
    },
    {
      id: 'location',
      label: t.chatbot.actions.location,
      prompt: language === 'rw' ? 'Ibiro byanyu biherereye he muri Kigali?' : 'Where is your office located in Kigali?',
      icon: MapPin,
    },
    {
      id: 'contact',
      label: t.chatbot.actions.contact,
      prompt: language === 'rw' ? 'Mumpereze nimero za telefone n\'uburyo bwo kubavugisha' : 'What are your phone numbers and direct contact details?',
      icon: PhoneCall,
    },
  ];

  return (
    <div className="py-2 px-3 border-t border-slate-100 bg-slate-50/70">
      <p className="text-[11px] font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-[#76b82a]" />
        <span>{t.chatbot.quickActionsTitle}</span>
      </p>
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              disabled={disabled}
              onClick={() => onSelectPrompt(act.prompt)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium bg-white hover:bg-lime-50 hover:text-[#5a941a] text-[#071a33] border border-slate-200 hover:border-[#76b82a] rounded-full whitespace-nowrap transition-all shadow-xs shrink-0 active:scale-95 disabled:opacity-50"
            >
              <Icon className="w-3 h-3 text-[#76b82a]" />
              <span>{act.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
