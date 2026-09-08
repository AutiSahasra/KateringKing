import React, { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Play, Pause, MapPin, Users, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { eventReels as initialEventReels } from '../../data/mockData';
import { api } from '../../services/api';
import ImageWithLoader from '../common/ImageWithLoader';

export default function EventReels({ onOpenEnquiry }) {
  const [reels, setReels] = useState(initialEventReels);
  const [activeReelId, setActiveReelId] = useState(initialEventReels[0]?.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    api.getEventReels().then((data) => {
      if (data && Array.isArray(data) && data.length > 0) {
        setReels(data);
        setActiveReelId((prev) => (data.find((r) => r.id === prev) ? prev : data[0].id));
      }
    });
  }, []);

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

  const currentReel = reels.find((r) => r.id === activeReelId) || reels[0] || initialEventReels[0];

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
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
            <div style={{ position: 'relative', height: 'clamp(340px, 46vw, 520px)', overflow: 'hidden' }}>
              <ImageWithLoader
                src={currentReel.thumbnail}
                alt={currentReel.title}
                theme="dark"
                spinnerSize={46}
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
                  top: '14px',
                  left: '14px',
                  right: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '8px',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(10, 13, 18, 0.88)',
                    backdropFilter: 'blur(10px)',
                    border: '1.5px solid rgba(200, 138, 46, 0.45)',
                    borderRadius: 'var(--radius-full)',
                    padding: '6px 14px',
                    fontSize: '11px',
                    color: 'var(--color-primary)',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={13} />
                  <span>{currentReel.highlightTag}</span>
                </div>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute event sound' : 'Mute event sound'}
                  style={{
                    width: '38px',
                    height: '38px',
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
                  {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} color="var(--color-primary)" />}
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
                    width: 'clamp(60px, 14vw, 76px)',
                    height: 'clamp(60px, 14vw, 76px)',
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
                    <Pause size={28} fill="#FFFFFF" />
                  ) : (
                    <Play size={28} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                  )}
                </button>
              </div>

              {/* Bottom Info Overlay with Bold Typography */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  zIndex: 2
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginBottom: '6px', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={14} color="var(--color-primary)" />
                    {currentReel.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Users size={14} color="var(--color-primary)" />
                    {currentReel.guests}
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(18px, 3.5vw, 24px)', color: '#FFFFFF', fontWeight: 900, lineHeight: 1.25 }}>
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
              {reels.map((reel) => {
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
          </div>
        </div>
      </div>
    </section>
  );
}
