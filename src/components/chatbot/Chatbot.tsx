import React, { useState, useEffect } from 'react';
import { ChatWindow } from './ChatWindow';
import { ChatMessageData, generateChatbotResponse } from '../../services/chatbotService';
import { useLanguage } from '../../context/LanguageContext';
import { getWhatsAppLink } from '../../utils/whatsapp';
import { MessageSquare, Sparkles, X, MessageCircle } from 'lucide-react';

interface ChatbotProps {
  onOpenQuote?: (service?: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenQuote }) => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>(() => {
    return [
      {
        id: 'welcome',
        sender: 'assistant',
        text: t.chatbot.welcomeGreeting,
        timestamp: new Date(),
        showContactOptions: false,
      },
    ];
  });

  // When language changes and user hasn't typed anything yet, update initial welcome greeting
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'assistant',
            text: t.chatbot.welcomeGreeting,
            timestamp: new Date(),
            showContactOptions: false,
          },
        ];
      }
      return prev;
    });
  }, [language, t.chatbot.welcomeGreeting]);

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const userMessage: ChatMessageData = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setHasInteracted(true);

    try {
      const response = await generateChatbotResponse(userText, language, messages);
      const assistantMessage: ChatMessageData = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date(),
        showContactOptions: response.showContactOptions,
        showQuoteButton: response.showQuoteButton,
        serviceSuggestion: response.serviceSuggestion,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const fallbackMessage: ChatMessageData = {
        id: `error-${Date.now()}`,
        sender: 'assistant',
        text: t.chatbot.fallbackMsg,
        timestamp: new Date(),
        showContactOptions: true,
        showQuoteButton: true,
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: t.chatbot.welcomeGreeting,
        timestamp: new Date(),
        showContactOptions: false,
      },
    ]);
  };

  return (
    <>
      {/* Floating Action Buttons Container in Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Floating WhatsApp Quick Action Button */}
        <a
          href={getWhatsAppLink(language)}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Adonai Company Ltd"
          className="group flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp with Adonai Company Ltd"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold font-['Outfit',sans-serif]">
            {language === 'rw' ? 'Twandikire kuri WhatsApp' : 'Chat on WhatsApp'}
          </span>
        </a>

        {/* Floating AI Assistant Launcher Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setHasInteracted(true);
          }}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full shadow-xl transition-all duration-300 active:scale-95 cursor-pointer ${
            isOpen
              ? 'bg-[#071a33] text-white hover:bg-[#0c2447]'
              : 'bg-[#76b82a] hover:bg-[#68a61e] text-white hover:scale-105'
          }`}
          aria-label={isOpen ? 'Close Chat' : t.chatbot.floatingBtnText}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <>
              <div className="relative">
                <MessageSquare className="w-5 h-5" />
                <Sparkles className="w-2.5 h-2.5 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-xs sm:text-sm font-bold font-['Outfit',sans-serif]">
                {t.chatbot.floatingBtnText}
              </span>
              {!hasInteracted && (
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" />
              )}
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Window */}
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        onSendMessage={handleSendMessage}
        onClearChat={handleClearChat}
        isLoading={isLoading}
        onOpenQuote={onOpenQuote}
      />
    </>
  );
};
