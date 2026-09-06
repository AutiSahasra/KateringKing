import React from 'react';
import Testimonials from '../components/sections/Testimonials';
import { trustStats } from '../data/mockData';

export default function ReviewsPage({ onOpenEnquiry }) {
  return (
    <div className="page-reviews" style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Main Testimonials Component */}
      <Testimonials />

      {/* Trust Statistics Summary Strip */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-subtle)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '24px',
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
    </div>
  );
}
