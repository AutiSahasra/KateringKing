import {
  cateringPackages,
  galleryItems,
  galleryCategories,
  testimonials,
  siteSettings,
  eventReels,
  trustStats
} from '../data/mockData';

const BASE_URL = import.meta.env.VITE_WP_API_URL || 'http://localhost:8881/wp-json/kateringking/v1';
const REQUEST_TIMEOUT_MS = 15000;

// Fallback data for sections previously hardcoded in JSX
export const heroData = {
  headlineNormal: 'Royal Banquets Executed at',
  headlineAccent: 'Industrial Scale.',
  subheadline: 'From grand 2,500–guest destination weddings to high-table presidential galas, we orchestrate Michelin-standard culinary production powered by a 12,000 sq.ft commercial kitchen and cold-chain convoys.',
  ctaText: 'Explore Banquet Packages',
  ctaLink: '/packages'
};

export const productionData = {
  kicker: 'Engineering Culinary Perfection',
  title: 'The Scale & Precision Behind Our Production',
  subtitle: 'Behind every royal banquet lies an industrial powerhouse of commercial culinary infrastructure, temperature-controlled logistics, and synchronized execution.',
  metrics: [
    {
      id: 1,
      icon: 'building',
      metric: '12,000',
      unit: 'SQ. FT.',
      title: 'Central Production Facility',
      desc: 'Segregated state-of-the-art prep wings: dedicated Pure-Veg / Jain sanitized kitchen, slow-fire Awadhi deg chambers, and temperature-controlled bakery.'
    },
    {
      id: 2,
      icon: 'users',
      metric: '5,000+',
      unit: 'COVERS / DAY',
      title: 'Peak Production Capacity',
      desc: 'Engineered to execute up to 5 concurrent royal wedding banquets or high-table summits with synchronized 90-minute multi-course service.'
    },
    {
      id: 3,
      icon: 'truck',
      metric: '14 Fleets',
      unit: 'COLD-CHAIN',
      title: 'Mobile Logistics & Convoys',
      desc: 'Insulated, sensor-monitored refrigerated transport vehicles and on-site mobile induction units ensuring zero food degradation.'
    },
    {
      id: 4,
      icon: 'shield',
      metric: 'ISO 22000',
      unit: '& HACCP CERTIFIED',
      title: 'Food Safety & Lab Testing',
      desc: 'FSSAI Central Licensed with 5-stage RO+UV water filtration, batch microbiological sample testing, and uncompromised hygiene audits.'
    }
  ]
};

export const aboutData = {
  kicker: 'About KateringKing',
  title: 'Elevating the Art of Hospitality',
  subtitle: 'At KateringKing.com, we believe that exceptional catering goes beyond just great food — it requires precision, formal expertise, and an unwavering commitment to service.',
  philosophy: {
    heading: "We don't just cook for your guests; we engineer flawless dining experiences.",
    description: 'Backed by formal hotel management education and decades of industry experience, we bring a refined, structured approach to every wedding, corporate gala, and private event we undertake.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    points: [
      {
        title: 'Formal Hotel Management Expertise',
        desc: 'Trained in classical hospitality protocols, precision service standards, and culinary hygiene science.'
      },
      {
        title: 'Michelin & 5-Star Hotel Pedigree',
        desc: 'Our master chefs bring pedigrees from Oberoi, Taj, and Michelin-star kitchens, infusing haute cuisine finesse into grand-scale banquet execution.'
      },
      {
        title: 'Synchronized White-Glove Staging',
        desc: 'Uniformed banquet stewards operating under strict military hospitality checklists for timely, faultless banquet service.'
      }
    ]
  },
  services: [
    {
      id: 1,
      icon: 'crown',
      title: 'Weddings & Social Galas',
      desc: 'From intimate pre-wedding ceremonies to grand receptions, we design bespoke menus that reflect your vision, served with impeccable grace.',
      tag: 'Grand Celebrations'
    },
    {
      id: 2,
      icon: 'building',
      title: 'Corporate Events & Exhibitions',
      desc: 'Elevate your brand with our professional corporate catering. We provide seamless, sophisticated service for board meetings, product launches, and large-scale conventions.',
      tag: 'Executive & summits'
    },
    {
      id: 3,
      icon: 'utensils',
      title: 'Bespoke Private Dining',
      desc: 'Exclusive, chef-curated menus brought directly to your chosen venue, offering a restaurant-quality fine dining experience for your most important guests.',
      tag: 'VIP Fine Dining'
    }
  ]
};

export const faqData = [
  {
    id: 1,
    q: 'Can our family schedule an executive tasting session before confirming the booking?',
    a: 'Yes, absolutely. Once we draft your preliminary banquet menu proposal, we host your family for a private 6-course chef tasting session at our Jubilee Hills Tasting Studio to sample dishes, adjust spices, and review tableware staging.'
  },
  {
    id: 2,
    q: 'How far in advance should we reserve our event date?',
    a: 'For auspicious wedding dates and peak winter seasons (October to March), we recommend booking 4 to 8 months in advance. For corporate galas and private soirees, a minimum of 3 to 6 weeks is advised.'
  },
  {
    id: 3,
    q: 'Do you cater destination weddings outside Hyderabad?',
    a: 'Yes. Our specialized convoy fleet of mobile GPS-monitored refrigerated transport vans travels across Telangana, Andhra Pradesh, Karnataka, and destination resort properties with full staging crew.'
  },
  {
    id: 4,
    q: 'How do you ensure strict segregation for Jain and Sattvic preparations?',
    a: 'We operate dedicated sealed prep zones and separate cookware vessels exclusively for pure vegetarian, root-vegetable-free, and sattvic dishes, certified by our executive head chef.'
  }
];

export const navLinksData = [
  { label: 'Home', to: '/' },
  { label: 'Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' }
];

export const customFeaturesData = [
  {
    id: 1,
    title: 'Dedicated Jain & Sattvic Kitchens',
    desc: 'Completely segregated preparation lines ensuring zero onion/garlic, root-vegetable compliance, and strictly verified sattvic oils and spices.',
    tag: 'Strict Segregation'
  },
  {
    id: 2,
    title: 'Theatrical Live Counters',
    desc: 'Flambé pasta wheels, liquid nitrogen dessert cloud stations, live clay tandoor choreography, and artisanal Turkish ice cream carts.',
    tag: 'Interactive Dining'
  },
  {
    id: 3,
    title: 'Royal Nizami & Awadhi Dastarkhwan',
    desc: 'Slow-cooked Purdah dum biryanis, 24-hour Dal Bukhara, Zafrani sheermal, and shahi desserts crafted by master khansamas.',
    tag: 'Heritage Recipes'
  },
  {
    id: 4,
    title: 'International Continental & Asian Bars',
    desc: 'Hand-pleated truffle dim sum steamers, authentic wok tossing, Neapolitan wood-fired pizza ovens, and artisanal sushi platters.',
    tag: 'Global Palate'
  }
];

export const reelHighlightsData = [
  {
    id: 1,
    title: 'The Midnight Tandoor Staging',
    stats: '1,200 skewers / hour',
    desc: 'Watch our master ustaads fire raw embers at 480°C to create melt-in-mouth Zafrani kebabs moments before the bride and groom arrive.'
  },
  {
    id: 2,
    title: 'Liquid Nitrogen Dessert Cloud',
    stats: 'Theatrical molecular bar',
    desc: 'Guests gather as hand-churned pistachio kulfi is dipped into freezing nitrogen vapors, accompanied by edible gold leaf garnish.'
  },
  {
    id: 3,
    title: 'Grand Dastarkhwan Unveiling',
    stats: 'Synchronized butler reveal',
    desc: 'At precisely 8:30 PM, 60 uniformed stewards lift copper purdah domes simultaneously, releasing aromas of kewra and saffron basmati.'
  }
];

export const formOptionsData = {
  eventTypes: [
    'Grand Royal Wedding',
    'Wedding Reception / Sangeet',
    'Executive Corporate Gala / Summit',
    'Milestone Birthday / Anniversary',
    'Private Estate Soirée',
    'Other Celebration'
  ],
  guestRanges: [
    '50 - 100 Guests',
    '100 - 250 Guests',
    '250 - 500 Guests',
    '500 - 1,000 Guests',
    '1,000+ Royal Dignitaries'
  ]
};

/**
 * Robust fetch wrapper with timeout and automatic mock fallback
 */
async function fetchWithFallback(endpoint, fallbackData) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    const targetUrl = `${BASE_URL}/${endpoint}`;
    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`WordPress API returned ${response.status}`);
    }

    const data = await response.json();
    console.log(`[KateringKing CMS] Live data loaded for /${endpoint}:`, data);
    return { data, isLiveCMS: true };
  } catch (error) {
    console.warn(`[KateringKing CMS] Using offline data for /${endpoint} (${error.message}). Target: ${BASE_URL}/${endpoint}`);
    return { data: fallbackData, isLiveCMS: false };
  }
}

export const api = {
  // 1. Packages with nested dishes
  getPackages: async () => {
    const res = await fetchWithFallback('packages', cateringPackages);
    return res.data;
  },

  // 2. Gallery (Categories + Items)
  getGallery: async () => {
    const fallback = { categories: galleryCategories, items: galleryItems };
    const res = await fetchWithFallback('gallery', fallback);
    return res.data;
  },

  // Gallery items shortcut
  getGalleryItems: async () => {
    const res = await fetchWithFallback('gallery', { items: galleryItems });
    if (res.data && Array.isArray(res.data.items)) {
      return res.data.items;
    }
    return Array.isArray(res.data) ? res.data : galleryItems;
  },

  // 3. Testimonials
  getTestimonials: async () => {
    const res = await fetchWithFallback('testimonials', testimonials);
    return res.data;
  },

  // 4. Site Settings (Global)
  getSiteSettings: async () => {
    const res = await fetchWithFallback('site-settings', siteSettings);
    return res.data;
  },

  // 5. Event Reels
  getEventReels: async () => {
    const res = await fetchWithFallback('event-reels', eventReels);
    return res.data;
  },

  // 6. Trust Stats
  getTrustStats: async () => {
    const res = await fetchWithFallback('trust-stats', trustStats);
    return res.data;
  },

  // 7. Hero Section
  getHero: async () => {
    const res = await fetchWithFallback('hero', heroData);
    return res.data;
  },

  // 8. Production Scale Metrics
  getProductionMetrics: async () => {
    const res = await fetchWithFallback('production-metrics', productionData);
    return res.data;
  },

  // 9. About Legacy & Service Cards
  getAbout: async () => {
    const res = await fetchWithFallback('about', aboutData);
    return res.data;
  },

  // 10. FAQ Items
  getFaqs: async () => {
    const res = await fetchWithFallback('faqs', faqData);
    return res.data;
  },

  // 11. Navigation Menus
  getMenus: async () => {
    const res = await fetchWithFallback('menus', navLinksData);
    return res.data;
  },

  // 12. Custom Features (Packages Page)
  getCustomFeatures: async () => {
    const res = await fetchWithFallback('custom-features', customFeaturesData);
    return res.data;
  },

  // 13. Reel Highlights (Reels Page)
  getReelHighlights: async () => {
    const res = await fetchWithFallback('reel-highlights', reelHighlightsData);
    return res.data;
  },

  // 14. Form Dropdown Options (EnquiryModal + ContactPage)
  getFormOptions: async () => {
    const res = await fetchWithFallback('form-options', formOptionsData);
    return res.data;
  }
};

export default api;
