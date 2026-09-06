import React, { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Star, Quote, CheckCircle } from 'lucide-react';
import api from '../../services/api';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await api.getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error('Failed to load testimonials:', err);
      }
    }
    loadTestimonials();
  }, []);

  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--color-neutral-canvas)' }}>
      <div className="container">
        <SectionHeading
          kicker="Sovereign Endorsements & Host Trust"
          title="Praised by Host Families & Industry Leaders"
          subtitle="Read verified reviews from patrons whose 1,000+ guest wedding galas and corporate executive banquets were executed to perfection."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px'
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 32px',
                border: '1.5px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transition: 'transform var(--transition-smooth), box-shadow var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div>
                {/* Stars and Quote Mark */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--color-primary)" color="var(--color-primary)" />
                    ))}
                  </div>
                  <Quote size={32} color="rgba(200, 138, 46, 0.35)" />
                </div>

                {/* Quote Text with Bold & High Contrast */}
                <p
                  style={{
                    fontSize: '16px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.72,
                    fontStyle: 'italic',
                    marginBottom: '32px',
                    fontWeight: 500
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Host Profile */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '22px',
                  borderTop: '1.5px solid var(--color-border-subtle)'
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-full)',
                    objectFit: 'cover',
                    border: '2.5px solid var(--color-primary)'
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                      {t.name}
                    </h4>
                    <CheckCircle size={16} color="var(--color-primary)" />
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {t.event}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
