import React, { useRef, useEffect } from 'react';
import { ChatMessageData } from '../../services/chatbotService';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { QuickActions } from './QuickActions';
import { useLanguage } from '../../context/LanguageContext';
import { X, Trash2, ShieldCheck, Languages } from 'lucide-react';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessageData[];
  onSendMessage: (text: string) => void;
  onClearChat: () => void;
  isLoading: boolean;
  onOpenQuote?: (service?: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  onClearChat,
  isLoading,
  onOpenQuote,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-full h-[580px] max-h-[82vh] bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-fadeIn font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header */}
      <div className="bg-[#071a33] text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0c284f] to-[#040d1a] border border-[#76b82a]/50 flex items-center justify-center text-[#76b82a] font-black text-sm shadow-xs font-['Outfit',sans-serif]">
              A
            </div>
            {/* Pulsing online indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#76b82a] border-2 border-[#071a33] rounded-full">
              <span className="absolute inset-0 rounded-full bg-[#76b82a] animate-ping opacity-75" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-sm tracking-tight text-white font-['Outfit',sans-serif]">
                {t.chatbot.headerTitle}
              </h3>
              <ShieldCheck className="w-3.5 h-3.5 text-[#76b82a]" />
            </div>
            <p className="text-[11px] text-slate-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76b82a]" />
              <span>{t.chatbot.headerSub}</span>
            </p>
          </div>
        </div>

        {/* Header Action buttons */}
        <div className="flex items-center gap-1.5">
          {/* Language Toggle in Chat */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'rw' : 'en')}
            title="Toggle Language"
            className="flex items-center gap-1 px-2 py-1 bg-white/10 hover:bg-white/20 rounded-md text-[11px] font-bold text-white transition-colors"
          >
            <Languages className="w-3 h-3 text-[#76b82a]" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Clear Chat */}
          <button
            onClick={onClearChat}
            title={t.chatbot.clearChat}
            className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-white/10 rounded-md transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Messages Body */}
      <div className="flex-1 p-3.5 overflow-y-auto bg-slate-50/50 space-y-2">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} onOpenQuote={onOpenQuote} />
        ))}

        {isLoading && (
          <div className="flex gap-2.5 justify-start my-2">
            <div className="w-7 h-7 rounded-full bg-[#071a33] text-white flex items-center justify-center shrink-0 ring-1 ring-[#76b82a]">
              <span className="w-2 h-2 rounded-full bg-[#76b82a] animate-pulse" />
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-xs px-4 py-3 text-xs text-slate-500 shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#76b82a] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-[#76b82a] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-[#76b82a] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="ml-1 text-[11px] text-slate-400 font-medium">{t.chatbot.typing}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Quick Action suggestions */}
      <QuickActions onSelectPrompt={onSendMessage} disabled={isLoading} />

      {/* 4. Input Bar */}
      <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
    </div>
  );
};
