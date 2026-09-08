import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Crown, Building2, UtensilsCrossed, GraduationCap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { animateFadeUp } from '../../utils/animations';
import ImageWithLoader from '../common/ImageWithLoader';
import { api, aboutData as initialAboutData } from '../../services/api';

const renderServiceIcon = (icon) => {
  if (React.isValidElement(icon)) return icon;
  switch (icon) {
    case 'building':
      return <Building2 size={28} color="var(--color-primary)" />;
    case 'utensils':
      return <UtensilsCrossed size={28} color="var(--color-primary)" />;
    case 'crown':
    default:
      return <Crown size={28} color="var(--color-primary)" />;
  }
};

const pointIcons = [
  <GraduationCap key="grad" size={18} strokeWidth={2.4} />,
  <Award key="award" size={18} strokeWidth={2.4} />,
  <Sparkles key="spark" size={18} strokeWidth={2.4} />
];

export default function AboutLegacy() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const [about, setAbout] = useState(initialAboutData);

  useEffect(() => {
    api.getAbout().then((data) => {
      if (data) setAbout(data);
    });

    animateFadeUp(cardsRef.current?.children, {
      stagger: 0.15,
      yOffset: 30,
      trigger: sectionRef.current
    });
  }, []);

  const services = about.services || initialAboutData.services;
  const philosophy = about.philosophy || initialAboutData.philosophy;

  return (
    <section id="about" ref={sectionRef} className="section-padding" style={{ backgroundColor: 'var(--color-neutral-canvas)' }}>
      <div className="container">
        {/* Section Main Heading */}
        <SectionHeading
          kicker={about.kicker || 'About KateringKing'}
          title={about.title || 'Elevating the Art of Hospitality'}
          subtitle={about.subtitle || 'At KateringKing.com, we believe that exceptional catering goes beyond just great food — it requires precision, formal expertise, and an unwavering commitment to service.'}
        />

        {/* Narrative Split: Visual + Core Philosophy */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
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
                maxWidth: '460px',
                borderRadius: '240px 240px var(--radius-lg) var(--radius-lg)',
                overflow: 'hidden',
                border: '2.5px solid rgba(200, 138, 46, 0.45)',
                boxShadow: 'var(--shadow-card)',
                backgroundColor: 'var(--color-secondary)'
              }}
            >
              <ImageWithLoader
                src={philosophy.image || "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"}
                alt="Executive master chef presenting fine dining hospitality"
                spinnerSize={48}
                theme="dark"
                style={{
                  width: '100%',
                  height: 'clamp(320px, 46vw, 520px)',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Hospitality Badge */}
            <div
              className="about-royal-seal"
              style={{
                position: 'absolute',
                bottom: '-16px',
                right: '12px',
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-primary)',
                padding: '16px 22px',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(200, 138, 46, 0.4)',
                boxShadow: 'var(--shadow-hover)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                maxWidth: 'calc(100% - 24px)'
              }}
            >
              <Award size={30} color="var(--color-primary)" />
              <div style={{ fontSize: '12px', lineHeight: 1.35, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 800 }}>
                Flawless Dining<br /><span style={{ color: 'var(--color-primary)' }}>Experiences</span>
              </div>
            </div>
          </div>

          {/* Right: The Brand Philosophy & Approach */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                marginBottom: '20px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}
            >
              {philosophy.heading}
            </h3>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.75, marginBottom: '28px', fontWeight: 500 }}>
              {philosophy.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {(philosophy.points || []).map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-accent-champagne)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    {pointIcons[idx % pointIcons.length]}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '2px' }}>
                      {pt.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Services Section: Curated Culinary Experiences */}
        <div style={{ paddingTop: '20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 16px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-accent-champagne)',
                color: 'var(--color-primary)',
                fontSize: '11.5px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              Our Services
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.4vw, 38px)',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}
            >
              Curated Culinary Experiences
            </h3>
          </div>

          <div
            ref={cardsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  padding: 'clamp(28px, 4vw, 36px) 28px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid var(--color-border-subtle)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-accent-champagne)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {renderServiceIcon(service.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        backgroundColor: 'rgba(200, 138, 46, 0.1)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
                    {service.title}
                  </h4>

                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.68, margin: 0 }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
