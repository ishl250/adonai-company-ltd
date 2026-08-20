export interface ServiceKnowledge {
  id: string;
  en: {
    title: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
  };
  rw: {
    title: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
  };
}

export interface ValueKnowledge {
  id: string;
  en: {
    title: string;
    description: string;
  };
  rw: {
    title: string;
    description: string;
  };
}

export interface CompanyKnowledgeBase {
  company: {
    name: string;
    shortName: string;
    enTagline: string;
    rwTagline: string;
    location: string;
    fullAddressEn: string;
    fullAddressRw: string;
    phones: string[];
    primaryPhone: string;
    whatsappNumber: string;
    email: string;
    workingHoursEn: string;
    workingHoursRw: string;
    yearsExperience: number;
    completedProjects: string;
    qualityAssurance: string;
    satisfactionRate: string;
  };
  services: ServiceKnowledge[];
  values: ValueKnowledge[];
  pricingPolicy: {
    en: string;
    rw: string;
  };
  faqs: {
    id: string;
    category: string;
    en: { question: string; answer: string };
    rw: { question: string; answer: string };
  }[];
}

export const companyKnowledge: CompanyKnowledgeBase = {
  company: {
    name: 'ADONAI COMPANY LTD',
    shortName: 'Adonai',
    enTagline: 'Building Your Vision, Creating Lasting Value',
    rwTagline: 'Kubaka Icyerekezo Cyawe, Turema Agaciro Gahoraho',
    location: 'Gasabo, Kimironko',
    fullAddressEn: 'Gasabo District, Kimironko Sector, Kigali, Rwanda',
    fullAddressRw: 'Akarere ka Gasabo, Umurenge wa Kimironko, Kigali, u Rwanda',
    phones: ['+250 782 036 988', '+250 788 818 039'],
    primaryPhone: '+250 782 036 988',
    whatsappNumber: '250782036988',
    email: 'nshimiyimianad637@gmail.com',
    workingHoursEn: 'Mon – Sat: 7:00 AM – 6:00 PM | Sun: Site Visits on Request',
    workingHoursRw: 'Kuwa Mbere – Kuwa Gatandatu: 7:00 AM – 6:00 PM | Ku Cyumweru: Gusura ahubakwa ku busabe',
    yearsExperience: 10,
    completedProjects: '150+',
    qualityAssurance: '100%',
    satisfactionRate: '98%',
  },
  services: [
    {
      id: 'house-finishing',
      en: {
        title: 'House Finishing',
        shortDesc: 'Precision wall plastering, laser-leveled tiling, false ceilings & architectural detailing.',
        fullDesc: 'House finishing is the master craftsmanship stage that defines the visual and tactile luxury of your building. We specialize in precision gypsum board false ceilings with ambient cove LED lighting, mirror-smooth wall skimming, moisture-resistant waterproof coatings, and laser-aligned porcelain tile laying.',
        features: [
          'High-precision gypsum & acoustic false ceilings',
          'Laser-leveled porcelain and ceramic floor tiling',
          'Multi-coat skim plastering & anti-moisture wall prep',
          'Premium aluminum and bespoke wooden joinery finishing'
        ]
      },
      rw: {
        title: 'Kurangiza Inzu (Finishing)',
        shortDesc: 'Gusiga amakaro neza, kuringaniza ibipande bya gypsum, no gutaka inzu mu buryo bugezweho.',
        fullDesc: 'Kurangiza inzu ni intambwe yingenzi igaragaza ubwiza n\'agaciro k\'inzu yawe. Dushyiraho amakaro yujuje ubuziranenge tukanakora gypsum zigezweho ziteye amatara meza, gusiga sima inoze neza ku nkuta, no gukora ibikoresho byo mu nzu biramba.',
        features: [
          'Gukora ibisenge bya gypsum n\'amatara meza',
          'Gushyiraho amakaro ya porcelain yaringanijwe neza',
          'Gusiga inkuta zikanyerera neza no kurinda ubuhehere',
          'Gushyiraho amadirishya ya aluminium n\'inzugi zikomeye'
        ]
      }
    },
    {
      id: 'house-building',
      en: {
        title: 'House Building',
        shortDesc: 'Turnkey residential villas, multi-storey residential builds & structural masonry.',
        fullDesc: 'End-to-end building construction services from site excavation and reinforced concrete foundations to ring beams, roofing, and structural masonry. Our licensed civil engineers ensure compliance with Kigali Master Plan standards.',
        features: [
          'Reinforced concrete foundations & structural framing',
          'Rwandan certified bricklaying & perimeter masonry',
          'Engineered roofing trusses & weather-tight installations',
          'Full structural warranty & on-site civil engineer supervision'
        ]
      },
      rw: {
        title: 'Kubaka Inzu',
        shortDesc: 'Kubaka inzu zigezweho, amavilla, n\'amazu y\'igorofa guhera ku musingi kugeza yuzuye.',
        fullDesc: 'Dukora imirimo yose yo kubaka guhera ku gucukura umusingi, gusuka beto ikomeye, kubaka amatafari akomeye, no gupfuka inzu neza. Aba injenyeri bacu bagenzura ko byose byubahiriza amabwiriza y\'umujyi wa Kigali.',
        features: [
          'Gukora imisingi ya beto yiteguye neza',
          'Kubakisha amatafari n\'inkuta zikomeye cyane',
          'Gusakara inzu bikomeye birinda amazi n\'imvura',
          'Inzobere mu by\'ubwubatsi zigumaho zigenzura umunsi ku wundi'
        ]
      }
    },
    {
      id: 'house-painting',
      en: {
        title: 'House Painting & Designing',
        shortDesc: 'Interior luxury finishes, exterior weather-shield paints & textured architectural coatings.',
        fullDesc: 'Transformative decorative painting for residential and commercial structures. We use long-lasting anti-fungal exterior paints, washable silk interior paints, stucco textures, and precision color matching designed for Rwanda’s climate.',
        features: [
          'Anti-alkali & weather-resistant exterior protective coatings',
          'Washable interior silk, velvet, and matte finishes',
          'Decorative stucco, marmorino, and architectural textures',
          'Crack bridging, surface priming, and color consulting'
        ]
      },
      rw: {
        title: 'Gusiga Rangi no Gutaka Inzu',
        shortDesc: 'Gusiga amarangi aramba imbere n\'inyuma, gushyiraho ibishushanyo no gutaka inkuta.',
        fullDesc: 'Duhindura isura y\'inzu yawe dukoresheje amarangi yiza kandi aramba. Dukoresha amarangi adacika intege n\'imvura cyangwa izuba rya Kigali, amarangi yogezwa yo mu nzu, n\'ubuhanga bwo gutaka inkuta mu buryo bugezweho.',
        features: [
          'Amarangi arinda amazi n\'imvura yo hanze',
          'Amarangi yogezwa kandi asukuye neza yo mu nzu',
          'Gutaka inkuta mu buryo bwa stucco na marmorino',
          'Gukosora imyenge n\'ibisate mbere yo gusiga rangi'
        ]
      }
    },
    {
      id: 'interior-exterior-design',
      en: {
        title: 'Interior & Exterior Design',
        shortDesc: '3D architectural visualizations, space planning, facade concepts & landscape detailing.',
        fullDesc: 'Holistic architectural styling that marries functionality with contemporary aesthetics. We craft photorealistic 3D interior renders, custom cabinetry layouts, exterior stone-cladding facades, and compound paving landscapes.',
        features: [
          '3D photorealistic interior renders & spatial planning',
          'Exterior facade modernization & stone cladding concepts',
          'Integrated ambient lighting, cabinetry, and fixtures design',
          'Compound paving, green landscaping, and perimeter lighting'
        ]
      },
      rw: {
        title: 'Ibishushanyo byo Mu Nzu no Hanze (Interior & Exterior)',
        shortDesc: 'Gushushanya ibyitegererezo bya 3D, gutegura imyanya yo mu nzu, no gutaka ibikari n\'inyuma.',
        fullDesc: 'Dutegura imiterere n\'uburyo inzu yawe izasa dukoresheje ikoranabuhanga rya 3D mbere yo kubaka. Dutaka ibikari byo hanze, gushyiraho amapave, amatara meza, n\'imitako yo mu nzu ijyanye n\'igihe.',
        features: [
          'Gushushanya muri 3D uburyo inzu izasa neza',
          'Gutegura isura y\'inyuma hifashishijwe amabuye n\'imitako',
          'Gutegura amatara n\'ibyuma byo mu gikoni n\'icyumba cyo kwakiriramo',
          'Gushyiraho amapave mu gikari no gutaka ubusitani'
        ]
      }
    },
    {
      id: 'house-renovation',
      en: {
        title: 'House Renovation',
        shortDesc: 'Complete structural modernization, layout reconfiguration, bathroom & kitchen upgrades.',
        fullDesc: 'Breathing new life into older residential homes and commercial premises across Gasabo, Kicukiro, and Nyarugenge. We replace aging plumbing and electrical networks, remove non-structural partition walls, and upgrade outdated kitchens and bathrooms.',
        features: [
          'Structural layout modifications & wall opening creations',
          'Modern bathroom and luxury kitchen remodeling',
          'Complete PPR plumbing and modern electrical rewiring',
          'Roof repairs, waterproofing, and tile replacements'
        ]
      },
      rw: {
        title: 'Kuvugurura Inzu (Renovation)',
        shortDesc: 'Guhindura inzu ishaje ikaba nshya, kuvugurura ibikoni, ubwogero, n\'imyubakire.',
        fullDesc: 'Duhindura inzu zishaje zikaba amavilla agezweho mu bice bya Kigali. Dukuraho ibikuta bitari ngombwa ngo inzu ibe nini, tugahindura imiyoboro y\'amazi n\'amashanyarazi, tugatunganya ubwogero n\'ibikoni bigezweho.',
        features: [
          'Guhindura imiterere y\'inzu ngo irusheho kuba nini',
          'Kuvugurura ubwogero n\'ibikoni mu buryo bugezweho',
          'Guhindura imiyoboro y\'amazi (PPR) n\'amashanyarazi mashya',
          'Gusana ibisenge no kurinda amazi kwinjira'
        ]
      }
    }
  ],
  values: [
    {
      id: 'quality-work',
      en: {
        title: 'Quality Work',
        description: 'We adhere to Rwandan and international civil construction standards with premium materials and rigorous quality control checks.'
      },
      rw: {
        title: 'Akazi k\'Ubuziranenge',
        description: 'Twubahiriza amabwiriza y\'ubwubatsi mu Rwanda no ku rwego mpuzamahanga dukoresha ibikoresho byiza bihebuje.'
      }
    },
    {
      id: 'professional-team',
      en: {
        title: 'Professional Team',
        description: 'Certified civil engineers, master finishing masons, electrical technicians, and finish painters with years of proven expertise.'
      },
      rw: {
        title: 'Itsinda ry\'Inzobere',
        description: 'Aba injenyeri bafite impamyabumenyi, abahanga mu gusiga amarangi, no gushyiraho amakaro n\'ibisenge.'
      }
    },
    {
      id: 'on-time-delivery',
      en: {
        title: 'On-Time Delivery',
        description: 'Structured milestone schedules, strict timeline discipline, and transparent daily progress reports for total peace of mind.'
      },
      rw: {
        title: 'Kubahiriza Igihe',
        description: 'Gukorera ku ngengabihe ihamye no gushyikiriza umukiriya inzu ye ku gihe cyasezeranyijwe nta gutinda.'
      }
    },
    {
      id: 'customer-satisfaction',
      en: {
        title: 'Customer Satisfaction',
        description: 'Personalized service, clear open communication, post-completion warranty, and transparent material accounting.'
      },
      rw: {
        title: 'Kunyurwa k\'Umukiriya',
        description: 'Kwakira neza abakiriya, gukorera mu mucyo, no kubaha garanti nyuma yo gusoza umushinga.'
      }
    }
  ],
  pricingPolicy: {
    en: 'Construction and finishing pricing is customized for every specific building project based on square meters, site condition, material grade, and architectural requirements. We provide free on-site inspections and comprehensive itemized quotations.',
    rw: 'Ibiciro byo kubaka no gukora finishing biterwa n\'ingano y\'inzu, ibikoresho byifuzwa, n\'imiterere y\'umushinga. Dutanga serivisi yo gusura aho inzu iri ku buntu no gukora inyandiko y\'ibiciro birambuye (Devis).'
  },
  faqs: [
    {
      id: 'faq-location',
      category: 'location',
      en: {
        question: 'Where is Adonai Company Ltd located?',
        answer: 'Our main office is located in Gasabo District, Kimironko Sector, Kigali, Rwanda. We serve projects across all sectors of Kigali and throughout Rwanda.'
      },
      rw: {
        question: 'ADONAI COMPANY LTD iherereye he?',
        answer: 'Ibiro byacu bikuru biherereye mu Karere ka Gasabo, Umurenge wa Kimironko, mu Mujyi wa Kigali, u Rwanda. Dukora imirimo y\'ubwubatsi mu bice byose bya Kigali no mu Rwanda hose.'
      }
    },
    {
      id: 'faq-contact',
      category: 'contact',
      en: {
        question: 'How can I contact Adonai Company Ltd?',
        answer: 'You can call us directly on +250 782 036 988 or +250 788 818 039, message us on WhatsApp at +250 782 036 988, or email us at nshimiyimianad637@gmail.com.'
      },
      rw: {
        question: 'Natebana nte na ADONAI COMPANY LTD?',
        answer: 'Ushobora kuduhamagara kuri +250 782 036 988 cyangwa +250 788 818 039, kutwandikira kuri WhatsApp kuri +250 782 036 988, cyangwa kuri email nshimiyimianad637@gmail.com.'
      }
    },
    {
      id: 'faq-quote',
      category: 'quote',
      en: {
        question: 'How do I get a price quotation or estimate?',
        answer: 'You can request a free quote via our website "Get a Free Quote" button, or contact us to schedule a free on-site visit where our engineers assess your building and prepare an itemized bill of quantities.'
      },
      rw: {
        question: 'Nabona nte igiciro cyangwa devis y\'umushinga wanjye?',
        answer: 'Kanda kuri buto ya "Saba Igiciro" ku rubuga rwacu cyangwa uduhamagare. Aba injenyeri bacu bazaza gusura aho mushaka kubaka ku buntu maze babakorere inyandiko y\'ibiciro birambuye.'
      }
    },
    {
      id: 'faq-services',
      category: 'services',
      en: {
        question: 'What construction services do you provide?',
        answer: 'We provide 5 core disciplines: 1. House Finishing, 2. House Building, 3. House Painting & Designing, 4. Interior & Exterior Design, and 5. House Renovation.'
      },
      rw: {
        question: 'Ni izihe serivisi z\'ubwubatsi mutanga?',
        answer: 'Dutanga serivisi 5 z\'ingenzi: 1. Kurangiza Inzu (House Finishing), 2. Kubaka Inzu (House Building), 3. Gusiga Rangi no Gutaka Inzu (House Painting & Designing), 4. Ibishushanyo byo Mu Nzu no Hanze (Interior & Exterior Design), na 5. Kuvugurura Inzu (House Renovation).'
      }
    },
    {
      id: 'faq-warranty',
      category: 'warranty',
      en: {
        question: 'Do you offer a warranty on completed works?',
        answer: 'Yes! We stand behind all our craftsmanship with a comprehensive defect liability warranty on structural work, plastering, tiling, and painting.'
      },
      rw: {
        question: 'Ese mutanga garanti ku mirimo mwakoze?',
        answer: 'Yego rwose! Dutanga garanti yuzuye ku mirimo yose y\'ubwubatsi, gushyiraho amakaro, ibisenge, na rangi twakoze.'
      }
    }
  ]
};
