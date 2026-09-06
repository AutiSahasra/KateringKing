import React from 'react';
import Packages from '../components/sections/Packages';
import SectionHeading from '../components/common/SectionHeading';
import MagneticButton from '../components/common/MagneticButton';
import { Crown, Sparkles, Check, Utensils, ShieldCheck, Flame, ArrowRight, PhoneCall } from 'lucide-react';

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

  const standards = [
    'Imported 24K Gold-Rimmed Bone China Dinnerware',
    'Heavy Gauge Mirror-Finish Silver & Brass Chafing Dishes',
    'Full Cold-Chain GPS Temperature-Monitored Vans',
    'Certified Banquet Captains & Master Sommelier Service',
    'Complimentary Executive Tasting Session for 6 Guests',
    '100% RO Water Used in All Food Preparation & Ice'
  ];

  return (
    <div className="page-packages" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)' }}>
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
              <span>Bespoke Banquet Menus • 50 to 5,000+ Guests</span>
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
              maxWidth: '860px',
              margin: '0 auto 20px'
            }}
          >
            Curated Royal Banquet Packages & Staging Tiers
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: 'var(--color-text-secondary)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.65
            }}
          >
            Explore our signature culinary collections featuring continuous live rotation of master courses, artisanal staging, and Michelin-standard banquet logistics.
          </p>
        </div>
      </section>

      {/* Main Interactive Packages Showcase with 1s Rotating Dish Platter */}
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginTop: '48px'
            }}
          >
            {customFeatures.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px 28px',
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
                    fontSize: '20px',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '12px',
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

      {/* Royal Standards & Staging Guarantee */}
      <section
        className="section-padding theme-dark"
        style={{
          backgroundColor: '#0A0D12',
          borderTop: '1px solid rgba(200, 138, 46, 0.25)',
          position: 'relative'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge-kicker" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                <ShieldCheck size={14} />
                <span>The Royal Banquet Assurance</span>
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 3.4vw, 44px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.18,
                  marginBottom: '20px'
                }}
              >
                What Is Included in Every KateringKing Package
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
                We do not simply cook food; we design and stage complete culinary theater. From temperature-logged cold chain logistics to fine bone-china table settings, our infrastructure delivers perfection.
              </p>
              <MagneticButton
                className="btn btn-primary"
                onClick={() => onOpenEnquiry(null)}
                style={{ padding: '16px 32px' }}
              >
                <PhoneCall size={16} strokeWidth={2.4} />
                <span>Schedule Host Tasting Session</span>
              </MagneticButton>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(200, 138, 46, 0.3)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 32px'
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <Crown size={20} color="var(--color-primary)" />
                <span>Standard Inclusions Checklist</span>
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {standards.map((std, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <Check size={13} color="#FFFFFF" strokeWidth={3} />
                    </div>
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
