import React from 'react';
import { ChatMessageData } from '../../services/chatbotService';
import { useLanguage } from '../../context/LanguageContext';
import { getWhatsAppLink, DISPLAY_PHONE_1, COMPANY_EMAIL } from '../../utils/whatsapp';
import { Bot, User, Phone, MessageSquare, Mail, Calculator, CheckCircle2 } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageData;
  onOpenQuote?: (service?: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onOpenQuote }) => {
  const { language, t } = useLanguage();
  const isAssistant = message.sender === 'assistant';

  const formatText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      if (line.startsWith('• ') || line.startsWith('- ')) {
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#76b82a] shrink-0 mt-0.5" />
            <span>{line.replace(/^[•-]\s*/, '')}</span>
          </div>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }
      return (
        <p key={idx} className="my-0.5 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'} my-2`}>
      {isAssistant && (
        <div className="w-7 h-7 rounded-full bg-[#071a33] text-white flex items-center justify-center shrink-0 shadow-xs mt-1 ring-1 ring-[#76b82a]">
          <Bot className="w-4 h-4 text-[#76b82a]" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-xs sm:text-[13px] shadow-xs ${
          isAssistant
            ? 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs'
            : 'bg-[#071a33] text-white rounded-tr-xs'
        }`}
      >
        <div className="space-y-1">{formatText(message.text)}</div>

        {/* Action Buttons for Assistant responses with fallback / quote / contacts */}
        {isAssistant && (message.showContactOptions || message.showQuoteButton) && (
          <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-2">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              {t.chatbot.contactOptionsTitle}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {/* Call button */}
              <a
                href={`tel:${DISPLAY_PHONE_1.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#071a33] font-bold text-[11px] rounded-lg transition-colors shadow-2xs"
              >
                <Phone className="w-3 h-3 text-[#76b82a]" />
                <span>{t.chatbot.callBtn}</span>
              </a>

              {/* WhatsApp button */}
              <a
                href={getWhatsAppLink(language)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] rounded-lg transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3 h-3" />
                <span>{t.chatbot.whatsappBtn}</span>
              </a>

              {/* Email button */}
              <a
                href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('Inquiry: ADONAI COMPANY LTD Services')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] rounded-lg transition-colors shadow-2xs"
              >
                <Mail className="w-3 h-3 text-[#76b82a]" />
                <span>{t.chatbot.emailBtn}</span>
              </a>

              {/* Quote button */}
              {onOpenQuote && (
                <button
                  type="button"
                  onClick={() => onOpenQuote(message.serviceSuggestion)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#76b82a] hover:bg-[#68a61e] text-white font-bold text-[11px] rounded-lg transition-colors shadow-2xs"
                >
                  <Calculator className="w-3 h-3" />
                  <span>{t.chatbot.quoteBtn}</span>
                </button>
              )}
            </div>
          </div>
        )}

        <div
          className={`text-[10px] mt-1.5 ${
            isAssistant ? 'text-slate-400 text-right' : 'text-slate-300 text-right'
          }`}
        >
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {!isAssistant && (
        <div className="w-7 h-7 rounded-full bg-[#76b82a] text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};
