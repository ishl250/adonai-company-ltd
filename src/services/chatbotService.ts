import { companyKnowledge, ServiceKnowledge } from '../knowledge/companyKnowledge';
import { Language } from '../context/LanguageContext';

export interface ChatMessageData {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  showContactOptions?: boolean;
  showQuoteButton?: boolean;
  serviceSuggestion?: string;
}

export const generateChatbotResponse = async (
  query: string,
  language: Language,
  conversationHistory: ChatMessageData[] = []
): Promise<{
  text: string;
  showContactOptions: boolean;
  showQuoteButton?: boolean;
  serviceSuggestion?: string;
}> => {
  const normalizedQuery = query.toLowerCase().trim();

  // Try optional server-side AI endpoint first if available
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: query,
        language,
        history: conversationHistory.slice(-4).map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          content: m.text,
        })),
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data.reply) {
        return {
          text: data.reply,
          showContactOptions: data.showContactOptions ?? false,
          showQuoteButton: data.showQuoteButton ?? false,
        };
      }
    }
  } catch {
    // Graceful fallback to knowledge-base engine
  }

  // Local Grounded Knowledge Engine
  return processKnowledgeBaseQuery(normalizedQuery, language);
};

const processKnowledgeBaseQuery = (
  q: string,
  lang: Language
): {
  text: string;
  showContactOptions: boolean;
  showQuoteButton?: boolean;
  serviceSuggestion?: string;
} => {
  const isKinyarwanda = lang === 'rw';

  // 1. Pricing / Cost questions
  const pricingKeywords = [
    'price', 'cost', 'how much', 'quote', 'quotation', 'rate', 'budget', 'expensive', 'fee', 'charge',
    'igiciro', 'amafaranga', 'angahe', 'devis', 'kugura', 'biciro', 'ishyuza', 'ikiguzi'
  ];
  if (pricingKeywords.some((k) => q.includes(k))) {
    if (isKinyarwanda) {
      return {
        text: `${companyKnowledge.pricingPolicy.rw}\n\nKanda kuri buto yo hasi kugira ngo usabe Devis y'inzu yawe cyangwa uduhamagare kuri ${companyKnowledge.company.primaryPhone}.`,
        showContactOptions: true,
        showQuoteButton: true,
      };
    }
    return {
      text: `${companyKnowledge.pricingPolicy.en}\n\nPlease click the button below to request an itemized quote or call our engineering team on ${companyKnowledge.company.primaryPhone}.`,
      showContactOptions: true,
      showQuoteButton: true,
    };
  }

  // 2. Location / Address questions
  const locationKeywords = [
    'where', 'location', 'located', 'office', 'address', 'place', 'find you', 'kigali', 'gasabo', 'kimironko',
    'hehe', 'aho muri', 'aho mukorera', 'ibiro', 'aderesi', 'kigali'
  ];
  if (locationKeywords.some((k) => q.includes(k))) {
    if (isKinyarwanda) {
      return {
        text: `Ibiro bya ${companyKnowledge.company.name} biherereye mu Karere ka Gasabo, Umurenge wa Kimironko, mu Mujyi wa Kigali, u Rwanda. Dukora imirimo y'ubwubatsi muri Kigali no mu Ntara zose z'u Rwanda.\n\nDuhamagare kuri ${companyKnowledge.company.primaryPhone} cyangwa ${companyKnowledge.company.phones[1]}.`,
        showContactOptions: true,
      };
    }
    return {
      text: `${companyKnowledge.company.name} is located in ${companyKnowledge.company.fullAddressEn}. We manage building and finishing projects across all districts of Kigali and throughout Rwanda.\n\nYou can reach us at ${companyKnowledge.company.primaryPhone} or ${companyKnowledge.company.phones[1]}.`,
      showContactOptions: true,
    };
  }

  // 3. Contact / Phone / Email questions
  const contactKeywords = [
    'contact', 'phone', 'call', 'email', 'whatsapp', 'number', 'reach', 'talk', 'speak',
    'nimero', 'telefoni', 'vugana', 'hamagara', 'kwandika', 'uburyo bwo kubabona'
  ];
  if (contactKeywords.some((k) => q.includes(k))) {
    if (isKinyarwanda) {
      return {
        text: `Ushobora kuvugana na ${companyKnowledge.company.name} binyuze kuri:\n• Telefone: ${companyKnowledge.company.phones.join(' / ')}\n• WhatsApp: ${companyKnowledge.company.primaryPhone}\n• Email: ${companyKnowledge.company.email}\n• Aho duherereye: Gasabo, Kimironko\n• Amasaha y'akazi: ${companyKnowledge.company.workingHoursRw}`,
        showContactOptions: true,
      };
    }
    return {
      text: `You can reach ${companyKnowledge.company.name} through:\n• Direct Calls: ${companyKnowledge.company.phones.join(' / ')}\n• WhatsApp: ${companyKnowledge.company.primaryPhone}\n• Email: ${companyKnowledge.company.email}\n• Location: ${companyKnowledge.company.location}\n• Hours: ${companyKnowledge.company.workingHoursEn}`,
      showContactOptions: true,
    };
  }

  // 4. House Finishing
  const finishingKeywords = [
    'finish', 'finishing', 'tile', 'tiling', 'gypsum', 'plaster', 'plastering', 'ceiling', 'skimming',
    'gufinisha', 'kurangiza', 'amakaro', 'gisome', 'gupakira', 'ibisenge', 'simba'
  ];
  if (finishingKeywords.some((k) => q.includes(k))) {
    const s = companyKnowledge.services.find((item) => item.id === 'house-finishing')!;
    if (isKinyarwanda) {
      return {
        text: `Yego, ${companyKnowledge.company.name} ni inzobere mu kurangiza inzu (House Finishing):\n\n${s.rw.fullDesc}\n\nIbikorwa by'ingenzi:\n${s.rw.features.map((f) => `• ${f}`).join('\n')}`,
        showContactOptions: true,
        showQuoteButton: true,
        serviceSuggestion: 'House Finishing',
      };
    }
    return {
      text: `Yes! ${companyKnowledge.company.name} specializes in high-end House Finishing:\n\n${s.en.fullDesc}\n\nKey capabilities:\n${s.en.features.map((f) => `• ${f}`).join('\n')}`,
      showContactOptions: true,
      showQuoteButton: true,
      serviceSuggestion: 'House Finishing',
    };
  }

  // 5. House Building / Construction
  const buildingKeywords = [
    'build', 'building', 'construct', 'construction', 'foundation', 'masonry', 'villa', 'storey', 'roof',
    'kubaka', 'inzu', 'umusingi', 'amatafari', 'injenyeri', 'beto', 'gusakara'
  ];
  if (buildingKeywords.some((k) => q.includes(k))) {
    const s = companyKnowledge.services.find((item) => item.id === 'house-building')!;
    if (isKinyarwanda) {
      return {
        text: `Yego rwose, ${companyKnowledge.company.name} itanga serivisi zo Kubaka Inzu guhera ku musingi kugeza yuzuye:\n\n${s.rw.fullDesc}\n\nImirimo dukora:\n${s.rw.features.map((f) => `• ${f}`).join('\n')}`,
        showContactOptions: true,
        showQuoteButton: true,
        serviceSuggestion: 'House Building',
      };
    }
    return {
      text: `Yes! ${companyKnowledge.company.name} provides comprehensive House Building services from foundation excavation to turnkey completion:\n\n${s.en.fullDesc}\n\nKey features:\n${s.en.features.map((f) => `• ${f}`).join('\n')}`,
      showContactOptions: true,
      showQuoteButton: true,
      serviceSuggestion: 'House Building',
    };
  }

  // 6. Painting & Designing
  const paintingKeywords = [
    'paint', 'painting', 'color', 'colours', 'weather-shield', 'stucco', 'primer',
    'gusiga', 'irangi', 'amarangi', 'amabara', 'stucco', 'gusiga irangi'
  ];
  if (paintingKeywords.some((k) => q.includes(k))) {
    const s = companyKnowledge.services.find((item) => item.id === 'house-painting')!;
    if (isKinyarwanda) {
      return {
        text: `Dutanga serivisi zo Gusiga Rangi no Gutaka Inzu (Painting & Design):\n\n${s.rw.fullDesc}\n\nIby\'ingenzi:\n${s.rw.features.map((f) => `• ${f}`).join('\n')}`,
        showContactOptions: true,
        showQuoteButton: true,
        serviceSuggestion: 'House Painting & Designing',
      };
    }
    return {
      text: `We provide professional House Painting & Surface Designing:\n\n${s.en.fullDesc}\n\nKey features:\n${s.en.features.map((f) => `• ${f}`).join('\n')}`,
      showContactOptions: true,
      showQuoteButton: true,
      serviceSuggestion: 'House Painting & Designing',
    };
  }

  // 7. Interior & Exterior Design
  const designKeywords = [
    'interior', 'exterior', 'design', '3d', 'architectural', 'landscape', 'compound', 'paving', 'facade',
    'gushushanya', 'imiterere', 'imbere', 'inyuma', 'amapave', 'ubusitani', '3d'
  ];
  if (designKeywords.some((k) => q.includes(k))) {
    const s = companyKnowledge.services.find((item) => item.id === 'interior-exterior-design')!;
    if (isKinyarwanda) {
      return {
        text: `Dutanga serivisi z'Ibishushanyo byo Mu Nzu no Hanze (Interior & Exterior Design):\n\n${s.rw.fullDesc}\n\nIby\'ingenzi:\n${s.rw.features.map((f) => `• ${f}`).join('\n')}`,
        showContactOptions: true,
        showQuoteButton: true,
        serviceSuggestion: 'Interior & Exterior Design',
      };
    }
    return {
      text: `We provide comprehensive Interior & Exterior Architectural Design:\n\n${s.en.fullDesc}\n\nKey features:\n${s.en.features.map((f) => `• ${f}`).join('\n')}`,
      showContactOptions: true,
      showQuoteButton: true,
      serviceSuggestion: 'Interior & Exterior Design',
    };
  }

  // 8. Renovation / Remodeling
  const renovationKeywords = [
    'renovate', 'renovation', 'remodel', 'repair', 'modernize', 'upgrade', 'old house',
    'kuvugurura', 'gusana', 'inzu ishaje', 'gukosora', 'guhindura'
  ];
  if (renovationKeywords.some((k) => q.includes(k))) {
    const s = companyKnowledge.services.find((item) => item.id === 'house-renovation')!;
    if (isKinyarwanda) {
      return {
        text: `Yego, dukora imirimo yo Kuvugurura Inzu (House Renovation):\n\n${s.rw.fullDesc}\n\nIbyo dukora:\n${s.rw.features.map((f) => `• ${f}`).join('\n')}`,
        showContactOptions: true,
        showQuoteButton: true,
        serviceSuggestion: 'House Renovation',
      };
    }
    return {
      text: `Yes, we specialize in complete House Renovation & Modernization:\n\n${s.en.fullDesc}\n\nKey services:\n${s.en.features.map((f) => `• ${f}`).join('\n')}`,
      showContactOptions: true,
      showQuoteButton: true,
      serviceSuggestion: 'House Renovation',
    };
  }

  // 9. All services overview
  const allServicesKeywords = [
    'service', 'services', 'what do you do', 'what do you offer', 'provide',
    'serivisi', 'mukora iki', 'mutanga iki', 'ibikorwa'
  ];
  if (allServicesKeywords.some((k) => q.includes(k))) {
    if (isKinyarwanda) {
      const list = companyKnowledge.services
        .map((s, idx) => `${idx + 1}. **${s.rw.title}**: ${s.rw.shortDesc}`)
        .join('\n\n');
      return {
        text: `ADONAI COMPANY LTD itanga serivisi 5 z'ingenzi z'ubwubatsi:\n\n${list}\n\nWifuza kumenya byinshi kuri iyihe serivisi?`,
        showContactOptions: true,
        showQuoteButton: true,
      };
    }
    const list = companyKnowledge.services
      .map((s, idx) => `${idx + 1}. **${s.en.title}**: ${s.en.shortDesc}`)
      .join('\n\n');
    return {
      text: `ADONAI COMPANY LTD provides 5 core construction and finishing services:\n\n${list}\n\nWhich service would you like to know more about?`,
      showContactOptions: true,
      showQuoteButton: true,
    };
  }

  // 10. Warranty / Quality guarantees
  const warrantyKeywords = [
    'warranty', 'guarantee', 'quality', 'standards',
    'garanti', 'ubuziranenge', 'icyizere'
  ];
  if (warrantyKeywords.some((k) => q.includes(k))) {
    if (isKinyarwanda) {
      return {
        text: `Yego! ADONAI COMPANY LTD itanga garanti yuzuye kuri buri murimo w'ubwubatsi n'ubufinishi wose ukozwe. Dukurikiza amabwiriza akomeye y'ubwubatsi kandi buri ntambwe igenzurwa n'injenyeri w'inzobere.\n\nWifuza ko tugusura ku buntu ngo turebe aho wifuza kubaka?`,
        showContactOptions: true,
      };
    }
    return {
      text: `Yes! ADONAI COMPANY LTD provides a comprehensive workmanship warranty on structural works, tile finishing, gypsum ceilings, and painting coatings. All projects are actively supervised by licensed civil engineers.\n\nWould you like to schedule a free site inspection?`,
      showContactOptions: true,
    };
  }

  // 11. Greetings
  const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'muraho', 'mwiriwe', 'mwaramutse', 'bite'];
  if (greetings.some((g) => q === g || q.startsWith(g + ' ') || q.endsWith(' ' + g))) {
    if (isKinyarwanda) {
      return {
        text: `Muraho! 👋 Murakaza neza kuri ADONAI COMPANY LTD. Ndi umufasha wanyu muri AI. Nakufasha iki ku bijyanye no kubaka inzu, kurangiza inzu (Finishing), gusiga amarangi, cyangwa gusaba Devis?`,
        showContactOptions: false,
      };
    }
    return {
      text: `Hello! 👋 Welcome to ADONAI COMPANY LTD. I am your virtual construction assistant. How can I assist you today with house building, finishing, painting, or requesting a quote?`,
      showContactOptions: false,
    };
  }

  // 12. Strict Anti-Hallucination Fallback: If information is not in knowledge base, do not invent anything!
  if (isKinyarwanda) {
    return {
      text: `Aya makuru ntabwo aboneka kuri ubu mu makuru ya ADONAI COMPANY LTD mfite. Kugira ngo ubone igisubizo cyizewe kandi cyihuse, turagusaba kuvugana n'itsinda ryacu ry'aba injenyeri ako kanya.`,
      showContactOptions: true,
      showQuoteButton: true,
    };
  }
  return {
    text: `I don't currently have that information available on the ADONAI COMPANY LTD website. Please contact our civil engineering team directly for accurate assistance.`,
    showContactOptions: true,
    showQuoteButton: true,
  };
};
