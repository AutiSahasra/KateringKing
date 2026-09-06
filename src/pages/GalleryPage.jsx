import React from 'react';
import Gallery from '../components/sections/Gallery';
import SectionHeading from '../components/common/SectionHeading';
import MagneticButton from '../components/common/MagneticButton';
import { Camera, Sparkles, Crown, Image as ImageIcon, Eye, PhoneCall, Download } from 'lucide-react';

export default function GalleryPage({ onOpenEnquiry }) {
  const aestheticPillars = [
    {
      title: 'Opulent Brass & Floral Staging',
      desc: 'Handcrafted Moradabad brass samovars, antique copper handis, and fresh mogra garlands harmonized with ambient candlelight.'
    },
    {
      title: 'Plated Presidential Head Tables',
      desc: 'Individual gold-leaf service, personalized calligraphed menus on handmade deckle-edge paper, and dedicated butler attention.'
    },
    {
      title: 'Theatrical Dessert Boulevards',
      desc: 'Multi-tiered dessert pavilions featuring live jalebi swirlers, molten chocolate fountains, and Iranian pistachio rabri towers.'
    }
  ];

  return (
    <div className="page-gallery" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)' }}>
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
              <Camera size={14} />
              <span>High-Resolution Visual Staging Archive</span>
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
            Royal Culinary Art & Banquet Staging Gallery
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
            Immerse yourself in our curated gallery of grand wedding spreads, artisanal live food stations, and bespoke banquet staging. Click any photo for high-resolution inspection.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery & Lightbox */}
      <Gallery />

      {/* Aesthetic Staging Principles */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
        <div className="container">
          <SectionHeading
            kicker="Design Philosophy"
            title="The Art of Visual Gastronomy"
            subtitle="Great banquets captivate all five senses. We treat table layouts and serving vessels with the precision of architectural design."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '28px',
              marginTop: '48px'
            }}
          >
            {aestheticPillars.map((p, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '36px 30px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: '0 8px 24px rgba(10, 13, 18, 0.05)'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-accent-champagne)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Sparkles size={20} strokeWidth={2.4} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '12px'
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <MagneticButton
              className="btn btn-primary"
              onClick={() => onOpenEnquiry(null)}
              style={{ padding: '16px 36px' }}
            >
              <PhoneCall size={16} strokeWidth={2.4} />
              <span>Discuss Staging Concepts For Your Event</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
