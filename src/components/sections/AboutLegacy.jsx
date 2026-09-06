import React, { useEffect, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import { UtensilsCrossed, Users, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { animateFadeUp } from '../../utils/animations';

export default function AboutLegacy() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    animateFadeUp(cardsRef.current?.children, {
      stagger: 0.15,
      yOffset: 30,
      trigger: sectionRef.current
    });
  }, []);

  const pillars = [
    {
      icon: <UtensilsCrossed size={26} color="var(--color-primary)" />,
      title: 'Heritage Recipe Preservation',
      desc: 'Authentic Nawabi, Awadhi, and Nizami gastronomy slow-simmered in sealed copper degs with proprietary 32-spice generational blends.'
    },
    {
      icon: <Users size={26} color="var(--color-primary)" />,
      title: 'Synchronized Butler Protocol',
      desc: 'Trained hospitality crew delivering synchronized silver-cloche unveils, coordinated timing, and discreet white-glove VIP management.'
    },
    {
      icon: <Sparkles size={26} color="var(--color-primary)" />,
      title: 'Pristine Single-Origin Sourcing',
      desc: 'Direct farm milk, cold-pressed oils, Kashmiri saffron, and organic produce sourced fresh at dawn before every single banquet.'
    },
    {
      icon: <Clock size={26} color="var(--color-primary)" />,
      title: 'Zero-Delay Staging Logistics',
      desc: 'Mobile blast chillers, electric combi-ovens, and backup generator convoys ensure every course is presented at peak culinary temperature.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding" style={{ backgroundColor: 'var(--color-neutral-canvas)' }}>
      <div className="container">
        <SectionHeading
          kicker="Sovereign Heritage & Lineage"
          title="A Quarter Century of Unrivalled Hospitality"
          subtitle="Founded in 1999, KateringKing was forged with a singular mandate: to execute royal culinary theater with industrial precision and zero culinary compromise."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 5vw, 72px)',
            alignItems: 'center',
            marginBottom: '72px'
          }}
        >
          {/* Left: Classic Arched Architectural Frame */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                borderRadius: '260px 260px var(--radius-lg) var(--radius-lg)',
                overflow: 'hidden',
                border: '2.5px solid rgba(200, 138, 46, 0.45)',
                boxShadow: 'var(--shadow-card)',
                backgroundColor: 'var(--color-secondary)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Executive master chef garnishing a royal banquet dish"
                style={{
                  width: '100%',
                  height: 'clamp(420px, 52vw, 560px)',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Royal Seal */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '10px',
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-primary)',
                padding: '18px 28px',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(200, 138, 46, 0.4)',
                boxShadow: 'var(--shadow-hover)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 900, lineHeight: 1 }}>25+</span>
              <div style={{ fontSize: '12px', lineHeight: 1.3, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                Years Sovereign<br />Trust & Grandeur
              </div>
            </div>
          </div>

          {/* Right: The Brand Philosophy & Production Standard */}
          <div>
            <h3
              style={{
                fontSize: 'clamp(26px, 3.4vw, 38px)',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                marginBottom: '22px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}
            >
              Culinary Artistry Engineered For Mega-Celebration Scales.
            </h3>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '17px', lineHeight: 1.7, marginBottom: '28px', fontWeight: 500 }}>
              Whether accommodating intimate dining requirements or coordinating a five-course banquet for two thousand wedding dignitaries, our master culinary directors handle every dietary distinction, cultural nuance, and presentation detail with white-glove precision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              {[
                'Separate segregated pure-vegetarian & Jain commercial prep zones',
                'Executive Chef on-site menu oversight with dedicated tasting walkthroughs',
                'Zero-waste protocol donating surplus untouched food to certified food banks',
                'Comprehensive tableware, bone china, and floral decor alignment'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                padding: '36px 28px',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-subtle)',
                transition: 'transform var(--transition-smooth), box-shadow var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-accent-champagne)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px'
                }}
              >
                {pillar.icon}
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
                {pillar.title}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
