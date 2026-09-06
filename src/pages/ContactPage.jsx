import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import MagneticButton from '../components/common/MagneticButton';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  CheckCircle2,
  Sparkles,
  Crown,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { siteSettings } from '../data/mockData';

export default function ContactPage({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    guestCount: '300 - 600 guests',
    eventType: 'Royal Wedding & Reception',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Compose formatted WhatsApp enquiry message
    const msg = `*New Banquet Consultation Request - KateringKing*%0A%0A` +
      `*Host Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A` +
      `*Event Type:* ${formData.eventType}%0A` +
      `*Guest Count:* ${formData.guestCount}%0A` +
      `*Event Date:* ${formData.eventDate || 'TBD'}%0A` +
      `*Culinary Vision:* ${formData.message || 'Standard Consultation'}`;

    window.open(`https://wa.me/${siteSettings.whatsappNumber}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Can our family schedule an executive tasting session before confirming the booking?',
      a: 'Yes, absolutely. Once we draft your preliminary banquet menu proposal, we host your family for a private 6-course chef tasting session at our Jubilee Hills Tasting Studio to sample dishes, adjust spices, and review tableware staging.'
    },
    {
      q: 'How far in advance should we reserve our event date?',
      a: 'For auspicious wedding dates and peak winter seasons (October to March), we recommend booking 4 to 8 months in advance. For corporate galas and private soirees, a minimum of 3 to 6 weeks is advised.'
    },
    {
      q: 'Do you cater destination weddings outside Hyderabad?',
      a: 'Yes. Our specialized convoy fleet of mobile GPS-monitored refrigerated transport vans travels across Telangana, Andhra Pradesh, Karnataka, and destination resort properties with full staging crew.'
    },
    {
      q: 'How do you ensure strict segregation for Jain and Sattvic preparations?',
      a: 'We operate dedicated sealed prep zones and separate cookware vessels exclusively for pure vegetarian, root-vegetable-free, and sattvic dishes, certified by our executive head chef.'
    }
  ];

  return (
    <div className="page-contact" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)' }}>
      {/* Page Hero Header */}
      <section
        style={{
          padding: '60px 0 40px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200, 138, 46, 0.12) 0%, transparent 70%), var(--color-neutral-canvas)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(200, 138, 46, 0.14)',
                color: 'var(--color-primary)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <Crown size={14} />
              <span>Banqueting Concierge & Tasting Studio</span>
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 900,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              maxWidth: '880px',
              margin: '0 auto 20px'
            }}
          >
            Connect With Our Executive Banqueting Directors
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: 'var(--color-text-secondary)',
              maxWidth: '740px',
              margin: '0 auto',
              lineHeight: 1.65
            }}
          >
            Reserve your banquet date, request a bespoke multi-course proposal, or schedule an executive tasting session at our Jubilee Hills studio.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form & Studio Details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-neutral-canvas)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'flex-start'
            }}
          >
            {/* Left Column: Direct Contact Info & Hours */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <span className="badge-kicker" style={{ display: 'inline-flex', marginBottom: '12px' }}>
                  <Sparkles size={14} />
                  <span>Jubilee Hills Tasting Studio</span>
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '32px',
                    fontWeight: 900,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2,
                    marginBottom: '16px'
                  }}
                >
                  Direct Channels & Studio Appointments
                </h2>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  Our concierge team is available seven days a week to answer culinary staging questions and schedule private tastings for your family.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* Address Card */}
                <div
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: '0 4px 14px rgba(10, 13, 18, 0.04)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-accent-champagne)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={22} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                      Headquarters & Tasting Studio
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {siteSettings.address}
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: '0 4px 14px rgba(10, 13, 18, 0.04)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-accent-champagne)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                      VIP Banquet Hotline
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {siteSettings.phone} (Direct to Senior Director)
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Email */}
                <div
                  style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: '0 4px 14px rgba(10, 13, 18, 0.04)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-accent-champagne)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={22} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                      Studio Hours & Availability
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      Monday – Sunday: 10:00 AM – 8:00 PM (Prior Appointment Advised)
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}?text=Hi%20KateringKing%20Team%2C%20I%20would%20like%20to%20inquire%20about%20banquet%20catering%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  padding: '16px 28px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
                  transition: 'transform var(--transition-fast)'
                }}
              >
                <MessageCircle size={20} strokeWidth={2.4} />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

            {/* Right Column: Interactive Proposal & Consultation Form */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(28px, 4vw, 44px)',
                boxShadow: '0 20px 50px rgba(10, 13, 18, 0.08)',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '26px',
                    fontWeight: 900,
                    color: 'var(--color-text-primary)',
                    marginBottom: '8px'
                  }}
                >
                  Request a Bespoke Proposal
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                  Fill in your celebration details to receive a customized multi-course proposal and pricing.
                </p>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: '32px 24px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-accent-champagne)',
                    border: '1px solid var(--color-primary)',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={40} color="var(--color-primary)" style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '8px' }}>
                    Consultation Request Sent!
                  </h4>
                  <p style={{ fontSize: '14px', color: '#6A440A', lineHeight: 1.6, marginBottom: '20px' }}>
                    WhatsApp has opened with your request details. Our Senior Banqueting Director will connect with you within 30 minutes.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSubmitted(false)}
                    style={{ fontSize: '13px', padding: '10px 20px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                      Host Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Reddy / Sunita Agarwal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--color-border-subtle)',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid var(--color-border-subtle)',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="rajesh@reddy.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid var(--color-border-subtle)',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid var(--color-border-subtle)',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                        Expected Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1.5px solid var(--color-border-subtle)',
                          fontSize: '14px',
                          backgroundColor: '#FFFFFF',
                          outline: 'none'
                        }}
                      >
                        <option value="50 - 150 guests">50 - 150 guests (Intimate)</option>
                        <option value="150 - 300 guests">150 - 300 guests (Mid-Scale)</option>
                        <option value="300 - 600 guests">300 - 600 guests (Large)</option>
                        <option value="600 - 1500 guests">600 - 1500 guests (Grand)</option>
                        <option value="1500 - 5000+ guests">1500 - 5000+ guests (Mega Royal)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--color-border-subtle)',
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                    >
                      <option value="Royal Wedding & Reception">Royal Wedding & Reception</option>
                      <option value="Sangeet, Mehendi & Cocktail">Sangeet, Mehendi & Cocktail</option>
                      <option value="Executive Corporate Summit">Executive Corporate Summit</option>
                      <option value="VIP Milestone Anniversary">VIP Milestone Anniversary</option>
                      <option value="Private Estate Soirée">Private Estate Soirée</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                      Culinary Vision or Special Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Jain counter needed, preference for live truffle dim sum and Purdah biryani, destination venue in Shamshabad..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--color-border-subtle)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <MagneticButton
                    className="btn btn-primary"
                    type="submit"
                    style={{ width: '100%', padding: '16px', marginTop: '6px' }}
                  >
                    <span>Send Inquiry & Open WhatsApp Proposal</span>
                    <ArrowRight size={17} strokeWidth={2.4} />
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <SectionHeading
            kicker="Host Queries"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about tasting sessions, banquet booking, and logistics."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '40px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  style={{
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-subtle)',
                    overflow: 'hidden',
                    backgroundColor: isOpen ? 'var(--color-surface-elevated)' : '#FFFFFF',
                    transition: 'background-color var(--transition-fast)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '18px',
                        fontWeight: 800,
                        color: 'var(--color-text-primary)'
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      color="var(--color-primary)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
