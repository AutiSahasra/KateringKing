import React from 'react';
import Testimonials from '../components/sections/Testimonials';
import SectionHeading from '../components/common/SectionHeading';
import MagneticButton from '../components/common/MagneticButton';
import { Star, ShieldCheck, Award, Crown, CheckCircle, Users, HeartHandshake, PhoneCall } from 'lucide-react';
import { trustStats } from '../data/mockData';

export default function ReviewsPage({ onOpenEnquiry }) {
  const venues = [
    { name: 'Hyderabad International Convention Centre (HICC)', role: 'Accredited Banquet Partner' },
    { name: 'Taj Falaknuma Palace & Taj Krishna', role: 'Preferred Destination Caterer' },
    { name: 'Jubilee Hills International Centre', role: 'Official Gala Banquet Caterer' },
    { name: 'ITC Kohenur & Grand Kakatiya', role: 'Approved Live Staging Specialist' }
  ];

  return (
    <div className="page-reviews" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)' }}>
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
              <Star size={14} fill="var(--color-primary)" />
              <span>5-Star Verified Banquet Praise</span>
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
            Trusted by 500+ Host Families & Corporate Leaders
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
            Discover verified testimonials from hosts who entrusted their most cherished milestone celebrations to our executive chefs and banquet staging teams.
          </p>
        </div>
      </section>

      {/* Main Testimonials Component */}
      <Testimonials />

      {/* Trust Statistics Summary Strip */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '32px',
              textAlign: 'center'
            }}
          >
            {trustStats.map((stat) => (
              <div
                key={stat.id}
                style={{
                  padding: '24px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-elevated)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(36px, 4vw, 48px)',
                    fontWeight: 900,
                    color: 'var(--color-primary)',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}
                >
                  {stat.value}{stat.suffix}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Venue Accreditations */}
      <section className="section-padding theme-dark" style={{ backgroundColor: '#0A0D12' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
          <SectionHeading
            kicker="Venue Partnerships"
            title="Accredited Across Premier Luxury Venues"
            subtitle="Our mobile commercial kitchen infrastructure is authorized and vetted by the region's most prestigious banqueting palaces and 5-star hotel ballrooms."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '48px',
              textAlign: 'left'
            }}
          >
            {venues.map((v, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(200, 138, 46, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(200, 138, 46, 0.15)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Award size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                    {v.name}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600, margin: 0 }}>
                    {v.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '56px' }}>
            <MagneticButton
              className="btn btn-primary"
              onClick={() => onOpenEnquiry(null)}
              style={{ padding: '16px 36px' }}
            >
              <PhoneCall size={16} strokeWidth={2.4} />
              <span>Experience Royal Hospitality For Your Event</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
