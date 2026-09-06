import React, { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Play, Pause, MapPin, Users, Sparkles, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { eventReels } from '../../data/mockData';

export default function EventReels({ onOpenEnquiry }) {
  const [activeReelId, setActiveReelId] = useState(eventReels[0]?.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [isMuted, setIsMuted] = useState(true);

  // Simulated Remotion frame playback effect
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentReel = eventReels.find((r) => r.id === activeReelId) || eventReels[0];

  return (
    <section id="reels" className="section-padding theme-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Golden Stage Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          kicker="Remotion-Inspired Event Theatres"
          title="Live Banqueting In Cinematic Motion"
          subtitle="Watch how our master culinary crews orchestrate multi-tiered live counters, synchronized butler parades, and bespoke royal setups."
          theme="dark"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(36px, 5vw, 68px)',
            alignItems: 'center'
          }}
        >
          {/* Main Cinematic Frame (Remotion-Inspired Video Player) */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-secondary-surface)',
              border: '2px solid rgba(200, 138, 46, 0.4)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.7)'
            }}
          >
            {/* Visual Poster */}
            <div style={{ position: 'relative', height: 'clamp(380px, 46vw, 520px)', overflow: 'hidden' }}>
              <img
                src={currentReel.thumbnail}
                alt={currentReel.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: isPlaying ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 8s ease-out',
                  filter: 'brightness(0.92) contrast(1.06)'
                }}
              />

              {/* Gradient Vignette Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 13, 18, 0.96) 0%, rgba(10, 13, 18, 0.2) 50%, rgba(10, 13, 18, 0.7) 100%)'
                }}
              />

              {/* Top Bar: Event Badges */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  right: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(10, 13, 18, 0.88)',
                    backdropFilter: 'blur(10px)',
                    border: '1.5px solid rgba(200, 138, 46, 0.45)',
                    borderRadius: 'var(--radius-full)',
                    padding: '7px 16px',
                    fontSize: '12px',
                    color: 'var(--color-primary)',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Sparkles size={14} />
                  <span>{currentReel.highlightTag}</span>
                </div>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute event sound' : 'Mute event sound'}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(10, 13, 18, 0.85)',
                    backdropFilter: 'blur(10px)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} color="var(--color-primary)" />}
                </button>
              </div>

              {/* Center Play Button Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause event clip' : 'Play event clip'}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, var(--color-primary), #B97A1E)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 35px rgba(200, 138, 46, 0.55)',
                    transition: 'transform var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {isPlaying ? (
                    <Pause size={32} fill="#FFFFFF" />
                  ) : (
                    <Play size={32} fill="#FFFFFF" style={{ marginLeft: '4px' }} />
                  )}
                </button>
              </div>

              {/* Bottom Info Overlay with Bold Typography */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  zIndex: 2
                }}
              >
                <div style={{ display: 'flex', gap: '18px', fontSize: '13px', color: 'rgba(255,255,255,0.85)', marginBottom: '8px', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={15} color="var(--color-primary)" />
                    {currentReel.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Users size={15} color="var(--color-primary)" />
                    {currentReel.guests}
                  </span>
                </div>
                <h3 style={{ fontSize: '26px', color: '#FFFFFF', fontWeight: 900, lineHeight: 1.2 }}>
                  {currentReel.title}
                </h3>
              </div>
            </div>

            {/* Remotion Timeline Scrubber / Progress Indicator */}
            <div
              style={{
                height: '5px',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  backgroundColor: 'var(--color-primary)',
                  boxShadow: '0 0 12px var(--color-primary)',
                  transition: isPlaying ? 'width 0.1s linear' : 'none'
                }}
              />
            </div>

            {/* Player Footer Bar */}
            <div
              style={{
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--color-secondary-surface)',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: 600
              }}
            >
              <span>{isPlaying ? 'Live Remotion Motion Stream Active' : 'Click Play to preview banquet choreography'}</span>
              <span style={{ color: 'var(--color-primary)', fontWeight: 800 }}>{currentReel.duration}</span>
            </div>
          </div>

          {/* Right: Reel Playlist Selector & Action */}
          <div>
            <h3 style={{ fontSize: '30px', color: '#FFFFFF', marginBottom: '28px', fontWeight: 900 }}>
              Select An Event Story
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '38px' }}>
              {eventReels.map((reel) => {
                const isSelected = reel.id === activeReelId;

                return (
                  <div
                    key={reel.id}
                    onClick={() => {
                      setActiveReelId(reel.id);
                      setIsPlaying(true);
                      setProgress(0);
                    }}
                    style={{
                      padding: '22px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected
                        ? 'rgba(200, 138, 46, 0.16)'
                        : 'rgba(255, 255, 255, 0.04)',
                      border: isSelected
                        ? '2px solid var(--color-primary)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          color: isSelected ? 'var(--color-primary)' : 'rgba(255,255,255,0.55)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 800
                        }}
                      >
                        {reel.eventType}
                      </span>
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>{reel.duration}</span>
                    </div>

                    <h4 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 800, marginBottom: '6px' }}>
                      {reel.title}
                    </h4>

                    <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.55 }}>
                      {reel.recapNotes}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              className="btn btn-primary"
              onClick={() => onOpenEnquiry({ name: currentReel.title })}
              style={{ width: '100%', padding: '16px', fontSize: '14px' }}
            >
              <span>Enquire For Similar Event Setup</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
