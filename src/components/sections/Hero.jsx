import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Crown, Sparkles } from 'lucide-react';
import MagneticButton from '../common/MagneticButton';
import { trustStats } from '../../data/mockData';
import { animateFadeUp, animateCounter } from '../../utils/animations';
import FloatingChefCharacter from '../common/FloatingChefCharacter';

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

    trustStats.forEach((stat, i) => {
      if (statsRef.current[i]) {
        animateCounter(statsRef.current[i], stat.value, stat.suffix, 2.2);
      }
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-neutral-canvas)',
        paddingTop: 'calc(var(--navbar-height) + clamp(36px, 6vw, 72px))',
        paddingBottom: 'clamp(48px, 8vw, 96px)',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Radial Golden Gradients */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '35%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.16) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Bold Value Proposition & Social Proof */}
          <div ref={leftColRef} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <h1
                style={{
                  fontSize: 'clamp(38px, 5.2vw, 70px)',
                  fontWeight: 900,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  marginBottom: '20px'
                }}
              >
                Royal Banquets Executed at{' '}
                <span
                  style={{
                    color: 'var(--color-primary)',
                    fontStyle: 'italic',
                    fontWeight: 900,
                    display: 'inline-block'
                  }}
                >
                  Industrial Scale.
                </span>
              </h1>

              <p
                className="text-lead"
                style={{
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.68,
                  fontWeight: 500,
                  maxWidth: '560px'
                }}
              >
                From grand 2,500–guest destination weddings to high-table presidential galas, we orchestrate Michelin-standard culinary production powered by a 12,000 sq.ft commercial kitchen and cold-chain convoys.
              </p>
            </div>

            {/* Primary Action Button */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <MagneticButton
                className="btn btn-primary"
                onClick={() => navigate('/packages')}
                style={{ padding: '15px 30px', fontSize: '14px' }}
              >
                <span>Explore Banquet Packages</span>
                <ArrowRight size={17} strokeWidth={2.5} />
              </MagneticButton>
            </div>

            {/* Live Trust Metrics Strip */}
            <div
              className="hero-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                gap: '20px',
                paddingTop: '28px',
                borderTop: '2px solid var(--color-border-subtle)'
              }}
            >
              {trustStats.map((stat, i) => (
                <div key={stat.id}>
                  <div
                    ref={(el) => (statsRef.current[i] = el)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(30px, 3.6vw, 40px)',
                      fontWeight: 900,
                      color: 'var(--color-primary)',
                      lineHeight: 1.1,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {stat.value}{stat.suffix}
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

          {/* Right Column: Dynamic Floating 3D Chef Character with King Crown */}
          <div
            ref={rightColRef}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: '580px',
              margin: '0 auto'
            }}
          >
            <FloatingChefCharacter />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }
          .hero-cta-group .btn {
            width: 100% !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
