import React, { useEffect, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Users2 
} from 'lucide-react';
import { animateFadeUp } from '../../utils/animations';

export default function ProductionScale({ onOpenEnquiry }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    animateFadeUp(cardsRef.current?.children, {
      stagger: 0.12,
      yOffset: 35,
      trigger: sectionRef.current
    });
  }, []);

  const productionMetrics = [
    {
      icon: <Building2 size={26} color="var(--color-primary)" />,
      metric: '12,000',
      unit: 'SQ. FT.',
      title: 'Central Production Facility',
      desc: 'Segregated state-of-the-art prep wings: dedicated Pure-Veg / Jain sanitized kitchen, slow-fire Awadhi deg chambers, and temperature-controlled bakery.'
    },
    {
      icon: <Users2 size={26} color="var(--color-primary)" />,
      metric: '5,000+',
      unit: 'COVERS / DAY',
      title: 'Peak Production Capacity',
      desc: 'Engineered to execute up to 5 concurrent royal wedding banquets or high-table summits with synchronized 90-minute multi-course service.'
    },
    {
      icon: <Truck size={26} color="var(--color-primary)" />,
      metric: '14 Fleets',
      unit: 'COLD-CHAIN',
      title: 'Mobile Logistics & Convoys',
      desc: 'Insulated, sensor-monitored refrigerated transport vehicles and on-site mobile induction units ensuring zero food degradation.'
    },
    {
      icon: <ShieldCheck size={26} color="var(--color-primary)" />,
      metric: 'ISO 22000',
      unit: '& HACCP CERTIFIED',
      title: 'Food Safety & Lab Testing',
      desc: 'FSSAI Central Licensed with 5-stage RO+UV water filtration, batch microbiological sample testing, and uncompromised hygiene audits.'
    }
  ];

  return (
    <section id="production" ref={sectionRef} className="section-padding" style={{ backgroundColor: 'var(--color-neutral-canvas)' }}>
      <div className="container">
        <SectionHeading
          kicker="Engineering Culinary Perfection"
          title="The Scale & Precision Behind Our Production"
          subtitle="Behind every royal banquet lies an industrial powerhouse of commercial culinary infrastructure, temperature-controlled logistics, and synchronized execution."
        />

        {/* 4 Large Production Pillars */}
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px'
          }}
        >
          {productionMetrics.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(24px, 4vw, 36px) 24px',
                border: '1.5px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform var(--transition-smooth), box-shadow var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-accent-champagne)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '32px',
                      fontWeight: 900,
                      color: 'var(--color-text-primary)',
                      lineHeight: 1
                    }}
                  >
                    {item.metric}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.08em' }}>
                    {item.unit}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '10px',
                    lineHeight: 1.25
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
