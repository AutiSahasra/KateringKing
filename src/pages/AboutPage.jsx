import React from 'react';
import AboutLegacy from '../components/sections/AboutLegacy';
import ProductionScale from '../components/sections/ProductionScale';
import SectionHeading from '../components/common/SectionHeading';
import MagneticButton from '../components/common/MagneticButton';
import { Crown, Award, Clock, ShieldCheck, Users, CheckCircle, PhoneCall, Sparkles } from 'lucide-react';
import { trustStats } from '../data/mockData';

export default function AboutPage({ onOpenEnquiry }) {
  const milestones = [
    {
      year: '1999',
      title: 'Founding of the Royal Kitchen',
      desc: 'Began as a boutique royal banqueting service in Jubilee Hills, preserving authentic Nizami and Awadhi slow-dum recipes.'
    },
    {
      year: '2008',
      title: 'Mega-Wedding Production Scale',
      desc: 'Successfully executed our first 3,500-guest royal destination wedding with live staggered buffet choreography across 18 stations.'
    },
    {
      year: '2016',
      title: '12,000 Sq.Ft Base Kitchen Commissioning',
      desc: 'Inaugurated our centralized commercial production facility featuring German blast chillers and ISO 22000 cleanroom zones.'
    },
    {
      year: '2022',
      title: 'GPS Cold-Chain Logistics Fleet',
      desc: 'Launched South India’s premier temperature-logged mobile convoy fleet, ensuring food safety across 400km transit radiuses.'
    },
    {
      year: 'Today',
      title: '500+ Landmark Celebrations Executed',
      desc: 'Trusted by royalty, business leaders, and top event planners for unmatched culinary art, staging, and executive hospitality.'
    }
  ];

  const safetyPillars = [
    {
      title: '100% RO Purified Water System',
      desc: 'From initial vegetable washing and dough kneading to cooking and artisanal crystal ice cubes, every drop is purified.'
    },
    {
      title: 'HACCP & ISO 22000 Standards',
      desc: 'Certified commercial hygiene protocols with strict temperature logs, sanitized air locks, and daily microbiological audits.'
    },
    {
      title: 'Cold-Chain Mobile Convoy Fleet',
      desc: 'Insulated refrigeration vans maintain strict +4°C cold holding and +68°C hot holding until minutes before plating.'
    },
    {
      title: 'Staff Medical Certification',
      desc: 'All culinary staff and banquet stewards undergo bi-annual medical screenings and rigorous hospitality training.'
    }
  ];

  return (
    <div className="page-about" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)' }}>
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
              <span>A Quarter Century of Royal Gastronomy</span>
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
            The Heritage & Industrial Precision Behind KateringKing
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
            Discover how we blend secret generational recipes with industrial-grade food science and mobile logistics to deliver Michelin-standard banquets for thousands.
          </p>
        </div>
      </section>

      {/* Legacy & Master Recipes */}
      <AboutLegacy />

      {/* Commercial Kitchen & Production Infrastructure */}
      <ProductionScale onOpenEnquiry={onOpenEnquiry} />

      {/* 25-Year Timeline & Milestones */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
        <div className="container">
          <SectionHeading
            kicker="Our Journey"
            title="25 Years of Culinary Milestones"
            subtitle="From our first intimate family celebration to South India’s largest state dinners and celebrity weddings."
          />

          <div
            style={{
              maxWidth: '800px',
              margin: '56px auto 0',
              position: 'relative',
              paddingLeft: '32px',
              borderLeft: '2px dashed var(--color-primary)'
            }}
          >
            {milestones.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  marginBottom: '40px'
                }}
              >
                {/* Golden Milestone Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-41px',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 0 12px rgba(200, 138, 46, 0.6)'
                  }}
                />

                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 900,
                    color: 'var(--color-primary)',
                    letterSpacing: '0.06em',
                    display: 'block',
                    marginBottom: '4px'
                  }}
                >
                  {item.year}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '8px'
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety & Cold-Chain Accreditations */}
      <section className="section-padding theme-dark" style={{ backgroundColor: '#0A0D12' }}>
        <div className="container">
          <SectionHeading
            kicker="Hygiene & Safety"
            title="Uncompromising Food Safety Protocols"
            subtitle="Commercial banquet scale demands flawless sanitary control. We adhere to international ISO 22000 and FSSAI standards."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '24px',
              marginTop: '48px'
            }}
          >
            {safetyPillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(200, 138, 46, 0.25)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 26px'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(200, 138, 46, 0.15)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <ShieldCheck size={22} strokeWidth={2.4} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.65, margin: 0 }}>
                  {pillar.desc}
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
              <span>Discuss Banquet Production With Our Chef</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
