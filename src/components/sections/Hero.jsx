import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, Star, Award, ShieldCheck } from 'lucide-react';
import MagneticButton from '../common/MagneticButton';
import { trustStats } from '../../data/mockData';
import { animateFadeUp, animateCounter } from '../../utils/animations';

export default function Hero({ onOpenEnquiry }) {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    animateFadeUp(leftColRef.current?.children, {
      stagger: 0.12,
      duration: 0.85,
      yOffset: 30
    });

    animateFadeUp(rightColRef.current, {
      delay: 0.25,
      duration: 1,
      yOffset: 40
    });

    // Animate stats counters
    statsRef.current.forEach((el, index) => {
      if (el && trustStats[index]) {
        animateCounter(el, trustStats[index].value, trustStats[index].suffix, 2.2);
      }
    });
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 'calc(var(--navbar-height) + clamp(44px, 7vw, 90px))',
        paddingBottom: 'clamp(70px, 9vw, 120px)',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at 85% 25%, rgba(200, 138, 46, 0.1) 0%, transparent 65%), var(--color-neutral-canvas)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Golden Ambient Accent */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(44px, 6vw, 84px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Bold & Huge Typography Hierarchy */}
          <div ref={leftColRef}>
            <div style={{ marginBottom: '22px' }}>
              <span className="badge-kicker">
                <Award size={15} />
                <span>Commercial-Grade Royal Banqueting • Est. 1999</span>
              </span>
            </div>

            <h1
              style={{
                fontSize: 'var(--font-size-hero)',
                fontWeight: 900,
                color: 'var(--color-text-primary)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                marginBottom: '28px'
              }}
            >
              Royal Banquets Executed at{' '}
              <span
                style={{
                  color: 'var(--color-primary)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 900
                }}
              >
                Industrial Scale.
              </span>
            </h1>

            <p
              className="text-lead"
              style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: '40px',
                maxWidth: '600px',
                fontWeight: 500
              }}
            >
              From grand 2,500-guest destination weddings to high-table presidential galas, we orchestrate Michelin-standard culinary production powered by a 12,000 sq.ft commercial kitchen and cold-chain convoys.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '18px',
                alignItems: 'center',
                marginBottom: '56px'
              }}
            >
              <MagneticButton
                className="btn btn-primary"
                onClick={() => navigate('/packages')}
                style={{ padding: '16px 36px', fontSize: '15px' }}
              >
                <span>Explore Banquet Packages</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </MagneticButton>

              <MagneticButton
                className="btn btn-secondary"
                onClick={() => onOpenEnquiry(null)}
                style={{ padding: '15px 30px', fontSize: '15px' }}
              >
                <MessageCircle size={18} color="var(--color-primary)" strokeWidth={2.5} />
                <span>Instant WhatsApp Quote</span>
              </MagneticButton>
            </div>

            {/* Live Trust Metrics Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                gap: '24px',
                paddingTop: '32px',
                borderTop: '2px solid var(--color-border-subtle)'
              }}
            >
              {trustStats.map((stat, i) => (
                <div key={stat.id}>
                  <div
                    ref={(el) => (statsRef.current[i] = el)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(32px, 3.8vw, 42px)',
                      fontWeight: 900,
                      color: 'var(--color-primary)',
                      lineHeight: 1
                    }}
                  >
                    0{stat.suffix}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 800,
                      color: 'var(--color-text-primary)',
                      marginTop: '6px',
                      lineHeight: 1.3
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-text-muted)',
                      marginTop: '3px',
                      fontWeight: 500
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Impact Visual Presentation */}
          <div
            ref={rightColRef}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {/* Outer Gold Ambient Halo */}
            <div
              style={{
                position: 'absolute',
                inset: '-15px',
                background: 'linear-gradient(135deg, rgba(200, 138, 46, 0.3), rgba(10, 13, 18, 0.1))',
                borderRadius: '36px',
                filter: 'blur(24px)',
                zIndex: 0
              }}
            />

            {/* Main Visual Frame */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                border: '2px solid rgba(200, 138, 46, 0.4)',
                maxWidth: '540px',
                width: '100%',
                backgroundColor: 'var(--color-secondary)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85"
                alt="Exquisite royal banquet staging and culinary production"
                style={{
                  width: '100%',
                  height: 'clamp(380px, 50vw, 580px)',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.05) brightness(0.95)'
                }}
              />

              {/* Bottom Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 'auto 0 0 0',
                  background: 'linear-gradient(to top, rgba(10, 13, 18, 0.96) 0%, rgba(10, 13, 18, 0.45) 60%, transparent 100%)',
                  padding: '32px 26px',
                  color: '#FFFFFF'
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--color-primary)',
                    fontWeight: 800,
                    display: 'block',
                    marginBottom: '4px'
                  }}
                >
                  Live Banqueting Production
                </span>
                <h3 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 800 }}>
                  The Grand Umaid Palace Sovereign Gala
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>
                  Synchronized cloche service for 1,200 dignitaries across 42 live culinary stations.
                </p>
              </div>
            </div>

            {/* Floating Top Pill: Production Badge */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '-15px',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                border: '1.5px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-accent-champagne)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)'
                }}
              >
                <ShieldCheck size={18} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-secondary)' }}>
                12,000 Sq.Ft Base Kitchen • ISO 22000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
