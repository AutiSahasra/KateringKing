import React from 'react';
import { Crown, Sparkles, Award, ShieldCheck, Utensils, HeartHandshake, CheckCircle2 } from 'lucide-react';
import kateringEmblem from '../../assets/katering-emblem.svg';

export default function ChefCrownAnimation({
  size = 'large',
  title = 'Elevating the Art of Hospitality',
  subtitle = 'Engineered by Hotel Management Masters & Executive Chefs',
  showBadges = true,
  style = {}
}) {
  return (
    <div
      className="chef-crown-animation-container"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: size === 'large' ? 'clamp(400px, 52vw, 560px)' : '380px',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #0A0D12 0%, #171C24 50%, #080A0D 100%)',
        border: '2px solid rgba(200, 138, 46, 0.45)',
        boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(200, 138, 46, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        boxSizing: 'border-box',
        ...style
      }}
    >
      {/* 1. Deep Radial Ambient Golden Lights */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.28) 0%, rgba(200, 138, 46, 0.08) 45%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'crownGlowPulse 4s ease-in-out infinite'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* 2. Rotating Celestial Orbital Rings */}
      <div
        className="celestial-orbit-outer"
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(280px, 36vw, 360px)',
          height: 'clamp(280px, 36vw, 360px)',
          borderRadius: '50%',
          border: '1.5px dashed rgba(200, 138, 46, 0.3)',
          pointerEvents: 'none',
          animation: 'royalSpin 40s linear infinite'
        }}
      />
      <div
        className="celestial-orbit-inner"
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(210px, 28vw, 270px)',
          height: 'clamp(210px, 28vw, 270px)',
          borderRadius: '50%',
          border: '1px solid rgba(200, 138, 46, 0.2)',
          pointerEvents: 'none',
          animation: 'royalSpin 25s linear infinite reverse'
        }}
      />

      {/* 3. Floating Twinkle Sparkles */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '16%',
          color: 'var(--color-primary)',
          animation: 'floatGently 3s ease-in-out infinite'
        }}
      >
        <Sparkles size={20} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '24%',
          right: '18%',
          color: 'var(--color-primary)',
          animation: 'floatGently 4s ease-in-out infinite 1s'
        }}
      >
        <Sparkles size={16} />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '28%',
          left: '14%',
          color: 'var(--color-primary)',
          animation: 'floatGently 3.5s ease-in-out infinite 0.5s'
        }}
      >
        <Sparkles size={18} />
      </div>

      {/* 4. Central Animated Chef with King Crown Emblem */}
      <div
        className="chef-crown-emblem-core"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'floatEmblem 4.5s ease-in-out infinite',
          marginTop: '-16px'
        }}
      >
        {/* Glowing Crown Jewel Aura */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(180px, 22vw, 230px)',
            height: 'clamp(180px, 22vw, 230px)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(200, 138, 46, 0.22) 0%, rgba(10, 13, 18, 0.85) 100%)',
            border: '2.5px solid var(--color-primary)',
            boxShadow: '0 0 45px rgba(200, 138, 46, 0.5), inset 0 0 25px rgba(200, 138, 46, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Official Emblem Vector Image */}
          <img
            src={kateringEmblem}
            alt="KateringKing Chef Crown Royal Emblem"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 24px rgba(200, 138, 46, 0.75)) brightness(1.15)',
              transform: 'scale(1.04)'
            }}
          />

          {/* Pulsing Crown Indicator Top Badge */}
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '10.5px',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              border: '1.5px solid #FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Crown size={12} strokeWidth={3} />
            <span>King Crown</span>
          </div>
        </div>

        {/* Floating Title & Narrative Under Crown */}
        <div style={{ textAlign: 'center', marginTop: '22px', maxWidth: '420px', zIndex: 3 }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--color-primary)',
              display: 'block',
              marginBottom: '6px'
            }}
          >
            Master Chef & Royal Banquet Staging
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(20px, 2.6vw, 27px)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.2,
              margin: '0 0 8px 0',
              letterSpacing: '-0.01em'
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.5,
              margin: 0
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* 5. Floating Feature Badges around the Crown */}
      {showBadges && (
        <>
          {/* Top-Right Pill */}
          <div
            className="hero-badge-pill top-right"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(10, 13, 18, 0.88)',
              backdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(200, 138, 46, 0.5)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '11.5px',
              fontWeight: 700,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              zIndex: 4,
              animation: 'floatGently 4s ease-in-out infinite'
            }}
          >
            <ShieldCheck size={16} color="var(--color-primary)" />
            <span>ISO 22000 & HACCP Certified</span>
          </div>

          {/* Bottom-Left Pill */}
          <div
            className="hero-badge-pill bottom-left"
            style={{
              position: 'absolute',
              bottom: '22px',
              left: '20px',
              backgroundColor: 'rgba(10, 13, 18, 0.88)',
              backdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(200, 138, 46, 0.5)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '11.5px',
              fontWeight: 700,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              zIndex: 4,
              animation: 'floatGently 4.5s ease-in-out infinite 1s'
            }}
          >
            <Award size={16} color="var(--color-primary)" />
            <span>Hotel Management Masters</span>
          </div>
        </>
      )}

      {/* 6. Embedded CSS Animations */}
      <style>{`
        @keyframes floatEmblem {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes floatGently {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes crownGlowPulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @media (max-width: 600px) {
          .hero-badge-pill {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
