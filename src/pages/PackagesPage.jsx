import React, { useState, useEffect } from 'react';
import Packages from '../components/sections/Packages';
import SectionHeading from '../components/common/SectionHeading';
import { api, customFeaturesData } from '../services/api';

export default function PackagesPage({ onOpenEnquiry }) {
  const [customFeatures, setCustomFeatures] = useState(customFeaturesData);

  useEffect(() => {
    api.getCustomFeatures().then((data) => {
      if (data && Array.isArray(data) && data.length > 0) {
        setCustomFeatures(data);
      }
    });
  }, []);

  return (
    <div className="page-packages" style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Main Interactive Packages Showcase with Rotating Dish Platter */}
      <Packages onOpenEnquiry={onOpenEnquiry} />

      {/* Customization & Dietary Accommodations Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-neutral-canvas)' }}>
        <div className="container">
          <SectionHeading
            kicker="Bespoke Tailoring"
            title="Custom Culinary Counters & Dietary Precision"
            subtitle="Every menu is adaptable to your family traditions, religious preferences, and regional culinary identities."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}
          >
            {customFeatures.map((item, idx) => (
              <div
                key={item.id || idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 'clamp(24px, 4vw, 32px) 24px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: '0 8px 24px rgba(10, 13, 18, 0.05)',
                  transition: 'all var(--transition-smooth)'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-accent-champagne)',
                    color: 'var(--color-primary)',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '16px'
                  }}
                >
                  {item.tag}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '19px',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.25
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
