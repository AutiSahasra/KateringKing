import React, { useEffect, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Flame, 
  Users2, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  ThermometerSnowflake,
  Timer
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

  const productionPhases = [
    {
      step: 'PHASE 01',
      title: 'Procurement & Farm Sourcing',
      timing: 'T - 48 Hours',
      desc: 'Single-origin spices from Kerala & Kashmir, organic farm greens delivered at 4:00 AM, and premium seafood/poultry under strict temperature tags.'
    },
    {
      step: 'PHASE 02',
      title: 'Precision Commercial Prep',
      timing: 'T - 24 Hours',
      desc: '72-hour dough fermentation, 18-hour sealed copper deg marinations, handcrafted dessert prep in sterile climate-controlled confectionary suites.'
    },
    {
      step: 'PHASE 03',
      title: 'Convoys & On-Site Staging',
      timing: 'T - 6 Hours',
      desc: 'Convoy arrives at palace or venue. On-site field kitchens deploy induction warmers, blast chillers, and 40+ themed theatrical live counters.'
    },
    {
      step: 'PHASE 04',
      title: 'Synchronized Butler Execution',
      timing: 'Live Banquet',
      desc: 'Synchronized silver cloche reveal, 1:8 butler-to-guest ratio for high tables, on-site master chef tasting check every 15 minutes.'
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '72px'
          }}
        >
          {productionMetrics.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 28px',
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
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-accent-champagne)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '36px',
                      fontWeight: 900,
                      color: 'var(--color-text-primary)',
                      lineHeight: 1
                    }}
                  >
                    {item.metric}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.08em' }}>
                    {item.unit}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)',
                    marginBottom: '12px',
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

        {/* Detailed Timeline Breakdown: From Kitchen to Royal Banquet Table */}
        <div
          style={{
            backgroundColor: 'var(--color-secondary)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(36px, 6vw, 64px)',
            color: '#FFFFFF',
            boxShadow: 'var(--shadow-modal)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(200, 138, 46, 0.18) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <span
              className="badge-kicker"
              style={{
                backgroundColor: 'rgba(200, 138, 46, 0.15)',
                color: 'var(--color-primary)',
                borderColor: 'rgba(200, 138, 46, 0.3)',
                marginBottom: '16px'
              }}
            >
              Standard Operating Protocol
            </span>
            <h3
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '16px'
              }}
            >
              How 1,500 Dignitaries Are Served Without a Single Flaw
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '16px', lineHeight: 1.65 }}>
              Precision timing is as critical as our secret spices. Our culinary operations follow an unyielding four-stage countdown ensuring hot courses stay scorching, salads stay chilled, and desserts retain their artisan sculpture.
            </p>
          </div>

          {/* 4 Production Stages */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '24px',
              position: 'relative',
              zIndex: 1
            }}
          >
            {productionPhases.map((phase, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(200, 138, 46, 0.25)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.1em' }}>
                      {phase.step}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        color: 'rgba(255, 255, 255, 0.75)',
                        fontWeight: 600
                      }}
                    >
                      {phase.timing}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '10px' }}>
                    {phase.title}
                  </h4>

                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.68)', lineHeight: 1.6 }}>
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div
            style={{
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 size={20} color="var(--color-primary)" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)' }}>
                Certified Safe for VIP High-Security Galas & Destination Banquets
              </span>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => onOpenEnquiry(null)}
              style={{ padding: '14px 28px' }}
            >
              <span>Schedule Commercial Facility Tour</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
