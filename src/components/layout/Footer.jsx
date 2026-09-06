import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Instagram, Twitter, Linkedin, MessageCircle, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { siteSettings } from '../../data/mockData';

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="theme-dark"
      style={{
        backgroundColor: 'var(--color-secondary)',
        borderTop: '1px solid rgba(200, 138, 46, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Golden Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container section-padding" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Col 1: Brand & Heritage */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', textDecoration: 'none' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--color-primary), #9E6417)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Crown size={22} />
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 700, color: '#FFFFFF' }}>
                KateringKing
              </span>
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              {siteSettings.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a
                href={siteSettings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(200, 138, 46, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)', e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)', e.currentTarget.style.color = 'var(--color-primary)')}
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteSettings.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(200, 138, 46, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)', e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)', e.currentTarget.style.color = 'var(--color-primary)')}
              >
                <Twitter size={18} />
              </a>
              <a
                href={siteSettings.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(200, 138, 46, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)', e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)', e.currentTarget.style.color = 'var(--color-primary)')}
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteSettings.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(200, 138, 46, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#25D366', e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)', e.currentTarget.style.color = 'var(--color-primary)')}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Culinary Experiences
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link to="/packages" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', textDecoration: 'none' }}>
                  Royal Wedding Banquets
                </Link>
              </li>
              <li>
                <Link to="/packages" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', textDecoration: 'none' }}>
                  Executive Corporate Summits
                </Link>
              </li>
              <li>
                <Link to="/reels" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', textDecoration: 'none' }}>
                  Live Event Reels
                </Link>
              </li>
              <li>
                <Link to="/gallery" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', textDecoration: 'none' }}>
                  Theatrical Live Food Counters
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', textDecoration: 'none' }}>
                  Master Chef Heritage & Story
                </Link>
              </li>
              <li>
                <Link to="/reviews" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', textDecoration: 'none' }}>
                  Verified Host Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Concierge Contact */}
          <div>
            <h4 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Bespoke Concierge
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={16} color="var(--color-primary)" />
                <span>{siteSettings.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={16} color="var(--color-primary)" />
                <span>{siteSettings.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{siteSettings.address}</span>
              </div>
            </div>
          </div>

          {/* Col 4: VIP Reservation CTA */}
          <div>
            <h4 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '16px', letterSpacing: '0.02em' }}>
              Plan Your Celebration
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', lineHeight: 1.6, marginBottom: '20px' }}>
              Reserve your event date with our executive culinary director. We orchestrate menus customized to your heritage and palate.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onOpenEnquiry(null)}
              style={{ width: '100%', fontSize: '13px', padding: '12px 20px' }}
            >
              <Sparkles size={16} />
              <span>Instant WhatsApp Enquiry</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          <p>© {currentYear} KateringKing.com. All rights reserved. Registered Trademark.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>FSSAI Certified Luxury Catering</span>
            <span>•</span>
            <span>Zero Food Wastage Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
