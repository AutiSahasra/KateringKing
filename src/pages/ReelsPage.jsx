import React, { useState, useEffect } from 'react';
import EventReels from '../components/sections/EventReels';
import SectionHeading from '../components/common/SectionHeading';
import MagneticButton from '../components/common/MagneticButton';
import { Sparkles, PhoneCall } from 'lucide-react';
import { api, reelHighlightsData } from '../services/api';

export default function ReelsPage({ onOpenEnquiry }) {
  const [highlights, setHighlights] = useState(reelHighlightsData);

  useEffect(() => {
    api.getReelHighlights().then((data) => {
      if (data && Array.isArray(data) && data.length > 0) {
        setHighlights(data);
      }
    });
  }, []);

  return (
    <div className="page-reels" style={{ paddingTop: 'var(--navbar-height)' }}>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: '28px',
              marginTop: '40px'
            }}
          >
            {highlights.map((h, i) => (
              <div
                key={h.id || i}
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
