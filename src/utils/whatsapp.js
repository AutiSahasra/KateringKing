/**
 * Generates formatted WhatsApp URL with pre-filled enquiry text
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
}) => {
  const businessNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
  const cleanNumber = businessNumber.replace(/[^0-9]/g, '');

  const message = [
    `👑 *NEW CATERING ENQUIRY — KateringKing* 👑`,
    ``,
    `Hello Team KateringKing, I would like to request a bespoke catering quote for my upcoming event.`,
    ``,
    `📋 *EVENT DETAILS*`,
    `• *Client Name:* ${name || 'N/A'}`,
    `• *Contact:* ${phone || 'N/A'}`,
    `• *Selected Package:* ${packageName}`,
    `• *Event Type:* ${eventType}`,
    `• *Event Date:* ${eventDate || 'To be decided'}`,
    `• *Estimated Guests:* ${guests || 'N/A'}`,
    `• *Venue / Location:* ${location || 'N/A'}`,
    notes ? `• *Special Notes / Menu Preferences:* ${notes}` : null,
    ``,
    `Kindly share your package menu brochure and availability. Thank you!`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Safely redirects user to WhatsApp in a new tab
 */
export const openWhatsApp = (enquiryData) => {
  const url = generateWhatsAppUrl(enquiryData);
  window.open(url, '_blank', 'noopener,noreferrer');
};
