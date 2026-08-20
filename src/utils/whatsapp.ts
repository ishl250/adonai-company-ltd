import { Language } from '../context/LanguageContext';

export const WHATSAPP_PHONE_NUMBER = '250782036988';
export const DISPLAY_PHONE_1 = '+250 782 036 988';
export const DISPLAY_PHONE_2 = '+250 788 818 039';
export const COMPANY_EMAIL = 'nshimiyimianad637@gmail.com';

export const getWhatsAppLink = (
  language: Language = 'en',
  customMessage?: string
): string => {
  let message = customMessage;

  if (!message) {
    message =
      language === 'rw'
        ? 'Muraho ADONAI COMPANY LTD, nasuye urubuga rwanyu kandi ndifuza andi makuru.'
        : 'Hello ADONAI COMPANY LTD, I visited your website and would like more information.';
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
};

export const getQuoteWhatsAppLink = (
  service: string,
  language: Language = 'en'
): string => {
  const message =
    language === 'rw'
      ? `Muraho ADONAI COMPANY LTD, ndifuza kumenya amakuru n'igiciro kuri serivisi ya: ${service}.`
      : `Hello ADONAI COMPANY LTD, I would like to request a quotation and details for: ${service}.`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};
