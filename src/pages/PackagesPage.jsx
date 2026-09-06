import React from 'react';
import Packages from '../components/sections/Packages';
import SectionHeading from '../components/common/SectionHeading';

export default function PackagesPage({ onOpenEnquiry }) {
  const customFeatures = [
    {
      title: 'Dedicated Jain & Sattvic Kitchens',
      desc: 'Completely segregated preparation lines ensuring zero onion/garlic, root-vegetable compliance, and strictly verified sattvic oils and spices.',
      tag: 'Strict Segregation'
    },
    {
      title: 'Theatrical Live Counters',
      desc: 'Flambé pasta wheels, liquid nitrogen dessert cloud stations, live clay tandoor choreography, and artisanal Turkish ice cream carts.',
      tag: 'Interactive Dining'
    },
    {
      title: 'Royal Nizami & Awadhi Dastarkhwan',
      desc: 'Slow-cooked Purdah dum biryanis, 24-hour Dal Bukhara, Zafrani sheermal, and shahi desserts crafted by master khansamas.',
      tag: 'Heritage Recipes'
    },
    {
      title: 'International Continental & Asian Bars',
      desc: 'Hand-pleated truffle dim sum steamers, authentic wok tossing, Neapolitan wood-fired pizza ovens, and artisanal sushi platters.',
      tag: 'Global Palate'
    }
  ];

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
                key={idx}
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
