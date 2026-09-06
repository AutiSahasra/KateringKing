import React from 'react';
import EventReels from '../components/sections/EventReels';
import SectionHeading from '../components/common/SectionHeading';
import MagneticButton from '../components/common/MagneticButton';
import { Video, Sparkles, Crown, Play, Eye, PhoneCall, ArrowRight } from 'lucide-react';

export default function ReelsPage({ onOpenEnquiry }) {
  const highlights = [
    {
      title: 'The Midnight Tandoor Staging',
      stats: '1,200 skewers / hour',
      desc: 'Watch our master ustaads fire raw embers at 480°C to create melt-in-mouth Zafrani kebabs moments before the bride and groom arrive.'
    },
    {
      title: 'Liquid Nitrogen Dessert Cloud',
      stats: 'Theatrical molecular bar',
      desc: 'Guests gather as hand-churned pistachio kulfi is dipped into freezing nitrogen vapors, accompanied by edible gold leaf garnish.'
    },
    {
      title: 'Grand Dastarkhwan Unveiling',
      stats: 'Synchronized butler reveal',
      desc: 'At precisely 8:30 PM, 60 uniformed stewards lift copper purdah domes simultaneously, releasing aromas of kewra and saffron basmati.'
    }
  ];

  return (
    <div className="page-reels" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)' }}>
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
              <Video size={14} />
              <span>Remotion-Inspired Event Reels</span>
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
            Cinematic Live Banquet Storytelling
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
            Experience the vibrant choreography, sizzling embers, and sensory theatre of our high-volume banquet productions captured live in motion.
          </p>
        </div>
      </section>

      {/* Main Interactive Event Reels Showcase */}
      <EventReels onOpenEnquiry={onOpenEnquiry} />

      {/* Behind-The-Scenes Production Highlights */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
        <div className="container">
          <SectionHeading
            kicker="Live Choreography"
            title="Behind the Velvet Ropes of Mega Banquets"
            subtitle="How our synchronized teams manage timing, temperature, and staging to deliver a faultless live spectacle."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
              marginTop: '48px'
            }}
          >
            {highlights.map((h, i) => (
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-accent-champagne)',
                    color: 'var(--color-primary)',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}
                >
                  <Sparkles size={12} />
                  <span>{h.stats}</span>
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
                  {h.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {h.desc}
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
              <span>Create A Reel-Worthy Banquet For Your Event</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
