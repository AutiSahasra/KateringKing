import {
  cateringPackages,
  galleryItems,
  testimonials,
  siteSettings,
  eventReels,
  trustStats
} from '../data/mockData';

const BASE_URL = import.meta.env.VITE_WP_API_URL || 'http://kateringking.local/wp-json/wp/v2';
const REQUEST_TIMEOUT_MS = 2500;

/**
 * Robust fetch wrapper with timeout and automatic mock fallback
 */
async function fetchWithFallback(endpoint, fallbackData) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    const response = await fetch(`${BASE_URL}/${endpoint}`, {
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
    return { data, isLiveCMS: true };
  } catch (error) {
    // Graceful offline fallback
    // console.info(`[KateringKing CMS] Using offline mock data for /${endpoint} (${error.message})`);
    return { data: fallbackData, isLiveCMS: false };
  }
}

export const api = {
  getPackages: async () => {
    const res = await fetchWithFallback('packages', cateringPackages);
    return res.data;
  },

  getGalleryItems: async () => {
    const res = await fetchWithFallback('gallery_items', galleryItems);
    return res.data;
  },

  getTestimonials: async () => {
    const res = await fetchWithFallback('testimonials', testimonials);
    return res.data;
  },

  getSiteSettings: async () => {
    const res = await fetchWithFallback('options/site-settings', siteSettings);
    return res.data;
  },

  getEventReels: async () => {
    return eventReels;
  },

  getTrustStats: async () => {
    return trustStats;
  }
};

export default api;
