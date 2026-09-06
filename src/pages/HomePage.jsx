import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import ProductionScale from '../components/sections/ProductionScale';
import Packages from '../components/sections/Packages';
import EventReels from '../components/sections/EventReels';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import AboutLegacy from '../components/sections/AboutLegacy';
import MagneticButton from '../components/common/MagneticButton';
import SectionHeading from '../components/common/SectionHeading';
import { ArrowRight, PhoneCall, Sparkles, Crown, Award, MessageCircle } from 'lucide-react';
import { siteSettings } from '../data/mockData';

export default function HomePage({ onOpenEnquiry }) {
  return (
    <div className="page-home">
      {/* 1. Hero: Bold Statement & Commercial Scale */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Production Scale: Commercial Kitchen & Cold Chain Infrastructure */}
      <ProductionScale onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Interactive Packages Showcase */}
      <Packages onOpenEnquiry={onOpenEnquiry} />

      {/* 4. Heritage & Legacy */}
      <AboutLegacy />

      {/* 5. Cinematic Event Reels */}
      <EventReels onOpenEnquiry={onOpenEnquiry} />

      {/* 6. Culinary Gallery Showcase */}
      <Gallery />

      {/* 7. Verified Client Reviews */}
      <Testimonials />

      {/* 8. Global VIP Banquet CTA Banner */}
      <section
        className="section-padding theme-dark"
        style={{
          backgroundColor: '#0A0D12',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(200, 138, 46, 0.25)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(200, 138, 46, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(200, 138, 46, 0.15)',
                color: 'var(--color-primary)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <Crown size={14} />
              <span>Direct Executive Concierge</span>
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '20px'
            }}
          >
            Ready to Stage an Unforgettable Royal Banquet?
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.7,
              marginBottom: '36px'
            }}
          >
            Whether planning a 2,500-guest destination wedding or an exclusive executive gala, our banquet directors and Michelin-trained chefs ensure flawless execution.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <MagneticButton
              className="btn btn-primary"
              onClick={() => onOpenEnquiry(null)}
              style={{ padding: '16px 36px', fontSize: '15px' }}
            >
              <PhoneCall size={18} strokeWidth={2.4} />
              <span>Reserve Your Date Now</span>
            </MagneticButton>

            <Link
              to="/contact"
              className="btn btn-secondary"
              style={{
                padding: '16px 32px',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <span>Visit Concierge Studio</span>
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
