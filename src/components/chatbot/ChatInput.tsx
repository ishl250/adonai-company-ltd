import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Send, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const { t } = useLanguage();
  const [inputText, setInputText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;
    onSendMessage(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200">
      <div className="flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          disabled={isLoading}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.chatbot.inputPlaceholder}
          className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#76b82a] focus:ring-1 focus:ring-[#76b82a] disabled:opacity-50 transition-all font-['Plus_Jakarta_Sans',sans-serif]"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="p-2.5 bg-[#76b82a] hover:bg-[#68a61e] text-white rounded-xl shadow-xs transition-all active:scale-95 disabled:opacity-40 disabled:hover:bg-[#76b82a] disabled:cursor-not-allowed shrink-0 flex items-center justify-center"
          aria-label={t.chatbot.send}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </button>
      </div>
    </form>
  );
};
