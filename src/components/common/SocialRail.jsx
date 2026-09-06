import React from 'react';
import './SocialRail.css';
import { siteSettings } from '../../data/mockData';

// Authentic crisp SVG brand icons
const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function SocialRail() {
  const socialLinks = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@kateringkingservices',
      url: siteSettings.social.instagram,
      ariaLabel: 'Visit KateringKing on Instagram',
      icon: <InstagramIcon />,
      className: 'instagram'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: siteSettings.whatsappDisplay || '77 77 99 87 89',
      url: `https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent('Hello Team KateringKing, I would like to enquire about catering services.')}`,
      ariaLabel: 'Chat with KateringKing on WhatsApp',
      icon: <WhatsAppIcon />,
      className: 'whatsapp'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'kateringkingservices',
      url: siteSettings.social.facebook,
      ariaLabel: 'Visit KateringKing on Facebook',
      icon: <FacebookIcon />,
      className: 'facebook'
    }
  ];

  return (
    <aside className="social-rail-container" aria-label="Social and direct contact navigation rail">
      <nav className="social-rail" role="navigation" aria-label="Direct social and WhatsApp channels">
        {socialLinks.map((item, index) => (
          <React.Fragment key={item.id}>
            {index > 0 && <div className="social-rail-divider" aria-hidden="true" />}
            <div className="social-rail-item">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-rail-link ${item.className}`}
                aria-label={item.ariaLabel}
              >
                {item.icon}
              </a>
              <div className="social-rail-tooltip" role="tooltip" aria-hidden="true">
                <span className="social-rail-tooltip-badge">{item.name}</span>
                <span>{item.handle}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </nav>
    </aside>
  );
}
