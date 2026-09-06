import { WHATSAPP_NUMBER } from '../data/mockData';

/**
 * Generates formatted WhatsApp URL with pre-filled enquiry text
 * Recipient is always the business number (917777998789), while client data is encoded in the message body.
 */
export const generateWhatsAppUrl = ({
  name,
  phone,
  packageName = 'Custom Culinary Package',
  eventType = 'Wedding / Reception',
  eventDate,
  guests,
  location,
  notes
} = {}) => {
  // Always sanitize recipient to digits only (e.g. 917777998789)
  const recipient = (import.meta.env.VITE_WHATSAPP_NUMBER || WHATSAPP_NUMBER || '917777998789').replace(/[^0-9]/g, '');

  const message = [
    `👑 *NEW CATERING ENQUIRY — KateringKing* 👑`,
    ``,
    `Hello Team KateringKing, I would like to request a bespoke catering quote for my upcoming event.`,
    ``,
    `📋 *EVENT DETAILS*`,
    `• *Client Name:* ${name ? name.trim() : 'N/A'}`,
    `• *Client Phone / WhatsApp:* ${phone ? phone.trim() : 'N/A'}`,
    `• *Selected Package:* ${packageName || 'Custom Culinary Package'}`,
    `• *Event Type:* ${eventType || 'Celebration'}`,
    `• *Event Date:* ${eventDate || 'To be decided'}`,
    `• *Estimated Guests:* ${guests || 'N/A'}`,
    `• *Venue / Location:* ${location || 'N/A'}`,
    notes && notes.trim() ? `• *Special Notes / Menu Preferences:* ${notes.trim()}` : null,
    ``,
    `Kindly share your package menu brochure and availability. Thank you!`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
};

/**
 * Safely redirects user to WhatsApp in a new tab
 */
export const openWhatsApp = (enquiryData) => {
  const url = generateWhatsAppUrl(enquiryData);
  window.open(url, '_blank', 'noopener,noreferrer');
};
