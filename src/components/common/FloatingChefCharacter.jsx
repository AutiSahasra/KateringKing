import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import chefCutoutImg from '../../assets/chef-floating-cutout.png';

export default function FloatingChefCharacter() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  // Smooth mouse tilt parallax for rich 3D immersion
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalized tilt degrees (-8deg to +8deg)
    const rotateY = (x / (rect.width / 2)) * 7;
    const rotateX = -(y / (rect.height / 2)) * 7;
    setTilt({ x: rotateX, y: rotateY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="floating-chef-scene"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '580px',
        minHeight: 'clamp(460px, 54vw, 660px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        userSelect: 'none',
        margin: '0 auto',
        cursor: 'default'
      }}
    >
      {/* 1. Large Ambient Radial Warm Gold Atmosphere behind character */}
      <div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(340px, 46vw, 540px)',
          height: 'clamp(340px, 46vw, 540px)',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.28) 0%, rgba(200, 138, 46, 0.08) 50%, transparent 72%)',
          filter: 'blur(36px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'pulseAura 4.5s ease-in-out infinite alternate'
        }}
      />

      {/* 2. Floating 3D Chef Character Container with Parallax & Levitation */}
      <div
        className="floating-chef-body"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.active ? 'transform 0.12s ease-out' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
          width: '100%'
        }}
      >
        {/* Levitation Floating Rig */}
        <div
          className="levitate-rig"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'chefFloatPhysics 5s ease-in-out infinite',
            transformOrigin: 'center bottom'
          }}
        >
          {/* Crown Jewel Radiant Halo */}
          <div
            className="crown-glow"
            style={{
              position: 'absolute',
              top: '4%',
              left: '52%',
              transform: 'translate(-50%, -50%)',
              width: '180px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(200, 138, 46, 0.4) 45%, transparent 70%)',
              filter: 'blur(16px)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 1,
              animation: 'crownShimmer 3s ease-in-out infinite alternate'
            }}
          />

          {/* Twinkling Crown Sparkles */}
          <div
            style={{
              position: 'absolute',
              top: '1%',
              left: '43%',
              zIndex: 4,
              animation: 'sparkleTwinkle 2.4s ease-in-out infinite',
              pointerEvents: 'none'
            }}
          >
            <Sparkles size={24} color="#FFD700" style={{ filter: 'drop-shadow(0 0 10px #FFD700)' }} />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '5%',
              right: '36%',
              zIndex: 4,
              animation: 'sparkleTwinkle 2.8s ease-in-out infinite 0.7s',
              pointerEvents: 'none'
            }}
          >
            <Sparkles size={18} color="#FFE066" style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }} />
          </div>

          {/* Pure Hot Food Steam & Sizzling Heat Vapor (Clean White & Warm Translucent Vapor) */}
          <div
            className="hot-steam-emitter"
            style={{
              position: 'absolute',
              top: '5%',
              left: '6%',
              width: '160px',
              height: '210px',
              pointerEvents: 'none',
              zIndex: 5
            }}
          >
            {/* Multi-stream Flowing Hot Steam Waves (SVG) */}
            <svg
              viewBox="0 0 160 210"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'visible'
              }}
            >
              {/* Hot Steam Streams */}
              <path
                className="clean-steam-wisp steam-wisp-1"
                d="M 45,185 C 28,145 68,110 38,70 C 18,38 48,15 35,0"
                fill="none"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#steamBlurClean)"
              />
              <path
                className="clean-steam-wisp steam-wisp-2"
                d="M 75,185 C 95,150 55,105 82,65 C 98,35 70,12 80,0"
                fill="none"
                stroke="rgba(255, 248, 230, 0.8)"
                strokeWidth="4.5"
                strokeLinecap="round"
                filter="url(#steamBlurClean)"
              />
              <path
                className="clean-steam-wisp steam-wisp-3"
                d="M 105,185 C 80,140 115,95 90,55 C 75,25 95,8 85,0"
                fill="none"
                stroke="rgba(255, 255, 255, 0.75)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#steamBlurClean)"
              />
              <path
                className="clean-steam-wisp steam-wisp-4"
                d="M 30,180 C 55,145 25,95 50,50 C 65,22 45,5 55,0"
                fill="none"
                stroke="rgba(255, 250, 235, 0.7)"
                strokeWidth="3.2"
                strokeLinecap="round"
                filter="url(#steamBlurClean)"
              />
              <path
                className="clean-steam-wisp steam-wisp-5"
                d="M 60,188 C 40,155 85,120 65,75 C 50,42 75,18 68,0"
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="3.8"
                strokeLinecap="round"
                filter="url(#steamBlurClean)"
              />
              <defs>
                <filter id="steamBlurClean" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3.5" />
                </filter>
              </defs>
            </svg>

            {/* Rising Translucent White Vapor Clouds */}
            <div className="steam-cloud cloud-1" />
            <div className="steam-cloud cloud-2" />
            <div className="steam-cloud cloud-3" />
            <div className="steam-cloud cloud-4" />
            <div className="steam-cloud cloud-5" />

            {/* Sizzling Thermal Heat Aura directly hovering over steak */}
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '20px',
                width: '110px',
                height: '45px',
                background: 'radial-gradient(ellipse, rgba(255, 200, 100, 0.35) 0%, rgba(255, 255, 255, 0.2) 40%, transparent 75%)',
                filter: 'blur(10px)',
                borderRadius: '50%',
                animation: 'heatAuraPulse 2.4s ease-in-out infinite alternate'
              }}
            />
          </div>

          {/* Cutout Chef 3D Animated Image Element - 100% Crisp & Clean */}
          <img
            src={chefCutoutImg}
            alt="3D Animated Chef King Character"
            className="chef-character-img"
            style={{
              display: 'block',
              width: 'auto',
              maxHeight: 'clamp(420px, 50vw, 600px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 22px 40px rgba(0, 0, 0, 0.35)) drop-shadow(0 0 30px rgba(200, 138, 46, 0.25))',
              position: 'relative',
              zIndex: 2,
              pointerEvents: 'none',
              imageRendering: '-webkit-optimize-contrast',
              transform: 'translateZ(0)'
            }}
          />
        </div>

        {/* Dynamic Ground Shadow that expands and contracts with levitation */}
        <div
          className="chef-ground-shadow"
          style={{
            width: 'clamp(210px, 29vw, 340px)',
            height: '26px',
            background: 'radial-gradient(ellipse at center, rgba(10, 13, 18, 0.48) 0%, rgba(10, 13, 18, 0.2) 50%, transparent 75%)',
            borderRadius: '50%',
            marginTop: '-18px',
            zIndex: 1,
            pointerEvents: 'none',
            animation: 'shadowPulse 5s ease-in-out infinite'
          }}
        />
      </div>

      {/* Global CSS for Physics Animations & Clean Translucent Hot Steam */}
      <style>{`
        @keyframes chefFloatPhysics {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          30% {
            transform: translateY(-16px) rotate(-1.2deg);
          }
          70% {
            transform: translateY(-24px) rotate(1deg);
          }
        }

        @keyframes shadowPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.48;
          }
          30% {
            transform: scale(0.85);
            opacity: 0.32;
          }
          70% {
            transform: scale(0.72);
            opacity: 0.22;
          }
        }

        @keyframes pulseAura {
          0% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes crownShimmer {
          0% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        @keyframes sparkleTwinkle {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.7) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes heatAuraPulse {
          0% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.85;
            transform: scale(1.15);
          }
        }

        /* Clean White Hot Steam Stream Keyframes */
        .clean-steam-wisp {
          stroke-dasharray: 50 110;
          animation: steamFlow 3.4s ease-in-out infinite;
        }
        .steam-wisp-1 {
          animation-delay: 0s;
          animation-duration: 3.2s;
        }
        .steam-wisp-2 {
          animation-delay: 0.7s;
          animation-duration: 3.6s;
        }
        .steam-wisp-3 {
          animation-delay: 1.4s;
          animation-duration: 3.4s;
        }
        .steam-wisp-4 {
          animation-delay: 2.1s;
          animation-duration: 3.8s;
        }
        .steam-wisp-5 {
          animation-delay: 2.8s;
          animation-duration: 3.5s;
        }

        @keyframes steamFlow {
          0% {
            stroke-dashoffset: 160;
            opacity: 0;
            transform: translateY(0px) scaleX(0.9);
          }
          20% {
            opacity: 0.9;
          }
          65% {
            opacity: 0.65;
          }
          100% {
            stroke-dashoffset: -50;
            opacity: 0;
            transform: translateY(-60px) scaleX(1.4);
          }
        }

        /* Pure Soft White Vapor Clouds */
        .steam-cloud {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 250, 235, 0.3) 45%, transparent 70%);
          filter: blur(9px);
          pointer-events: none;
        }
        .cloud-1 {
          width: 36px;
          height: 36px;
          bottom: 20px;
          left: 35px;
          animation: steamPuffRise 3.4s ease-out infinite;
        }
        .cloud-2 {
          width: 44px;
          height: 44px;
          bottom: 18px;
          left: 55px;
          animation: steamPuffRise 3.8s ease-out infinite 0.7s;
        }
        .cloud-3 {
          width: 32px;
          height: 32px;
          bottom: 24px;
          left: 25px;
          animation: steamPuffRise 3.2s ease-out infinite 1.4s;
        }
        .cloud-4 {
          width: 50px;
          height: 50px;
          bottom: 15px;
          left: 45px;
          animation: steamPuffRise 4.2s ease-out infinite 2.1s;
        }
        .cloud-5 {
          width: 38px;
          height: 38px;
          bottom: 22px;
          left: 68px;
          animation: steamPuffRise 3.6s ease-out infinite 2.8s;
        }

        @keyframes steamPuffRise {
          0% {
            transform: translateY(0px) scale(0.6) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.75;
          }
          65% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-110px) scale(2.8) rotate(30deg);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .floating-chef-scene {
            min-height: 380px !important;
          }
        }
      `}</style>
    </div>
  );
}
