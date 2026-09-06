import React, { useState, useEffect, useMemo, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import MagneticButton from '../common/MagneticButton';
import {
  Crown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Flame,
  Leaf,
  Users
} from 'lucide-react';
import api from '../../services/api';
import { cateringPackages } from '../../data/mockData';
import BufferingSpinner from '../common/BufferingSpinner';
import ImageWithLoader from '../common/ImageWithLoader';

const FALLBACK_DISH_IMG = 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80';

export default function Packages({ onOpenEnquiry }) {
  const defaultPopularIdx = cateringPackages.findIndex((p) => p.isPopular);
  const [packages, setPackages] = useState(cateringPackages);
  const [activePackageIndex, setActivePackageIndex] = useState(
    defaultPopularIdx !== -1 ? defaultPopularIdx : 0
  );
  const [activeDishIndex, setActiveDishIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(0);
  const animTimeoutRef = useRef(null);
  const tabsBarRef = useRef(null);

  useEffect(() => {
    async function loadPackages() {
      try {
        const data = await api.getPackages();
        if (data && data.length > 0) {
          setPackages(data);
          const popularIdx = data.findIndex((p) => p.isPopular);
          if (popularIdx !== -1) setActivePackageIndex(popularIdx);
        }
      } catch (err) {
        console.error('Failed to load packages:', err);
      }
    }
    loadPackages();
  }, []);

  const currentPackage = packages[activePackageIndex] || packages[0] || null;
  const dishes = useMemo(() => currentPackage?.dishes || [], [currentPackage]);
  const currentDish = dishes[activeDishIndex] || dishes[0] || null;

  const triggerDishChange = (nextIndex) => {
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    setAnimating(true);
    setActiveDishIndex(nextIndex);
    setUserInteracted((c) => c + 1);
    animTimeoutRef.current = setTimeout(() => {
      setAnimating(false);
    }, 300);
  };

  // Infinite loop auto-play timer: rotate dish every 3 seconds until user changes page
  useEffect(() => {
    if (dishes.length <= 1) return;

    const interval = setInterval(() => {
      setActiveDishIndex((prevIndex) => (prevIndex + 1) % dishes.length);
      setAnimating(true);
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
      animTimeoutRef.current = setTimeout(() => {
        setAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [dishes.length, activePackageIndex, userInteracted]);

  // Clean up any pending animation timeout on unmount
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, []);

  const handleSelectPackage = (index) => {
    setActivePackageIndex(index);
    setActiveDishIndex(0);
    setAnimating(true);
    setUserInteracted((c) => c + 1);
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => setAnimating(false), 350);
  };

  const handlePrevDish = () => {
    if (dishes.length === 0) return;
    const prevIndex = (activeDishIndex - 1 + dishes.length) % dishes.length;
    triggerDishChange(prevIndex);
  };

  const handleNextDish = () => {
    if (dishes.length === 0) return;
    const nextIndex = (activeDishIndex + 1) % dishes.length;
    triggerDishChange(nextIndex);
  };

  // Orbital arc geometry calculation for dish thumbnails
  // Arc spans along the left of the serving plate (angles -64 deg to +64 deg)
  const orbitalRadius = 295;
  const plateCenterX = 400;
  const plateCenterY = 280;

  const maxVisibleNodes = 7;
  const visibleDishesData = useMemo(() => {
    const total = dishes.length;
    if (total === 0) return [];
    if (total <= maxVisibleNodes) {
      return dishes.map((dish, i) => ({ dish, index: i }));
    }
    // Calculate sliding window around activeDishIndex
    const half = Math.floor(maxVisibleNodes / 2);
    const result = [];
    for (let offset = -half; offset <= half; offset++) {
      const idx = (activeDishIndex + offset + total) % total;
      result.push({ dish: dishes[idx], index: idx });
    }
    return result;
  }, [dishes, activeDishIndex]);

  const thumbnailPositions = useMemo(() => {
    const total = visibleDishesData.length;
    if (total === 0) return [];
    const startAngle = -64; // top-left
    const endAngle = 64;    // bottom-left
    const step = total > 1 ? (endAngle - startAngle) / (total - 1) : 0;

    return visibleDishesData.map(({ dish, index }, i) => {
      const angleDeg = startAngle + i * step;
      const angleRad = (angleDeg * Math.PI) / 180;
      // Negative cos because thumbnails orbit on the left side of the plate center
      const x = plateCenterX - orbitalRadius * Math.cos(angleRad);
      const y = plateCenterY + orbitalRadius * Math.sin(angleRad);
      return { dish, index, x, y, angleDeg };
    });
  }, [visibleDishesData, orbitalRadius, plateCenterX, plateCenterY]);

  if (!currentPackage || !currentDish) {
    return null;
  }

  return (
    <section
      id="packages"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-surface-elevated)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 138, 46, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Heading */}
        <SectionHeading
          title="Curated Royal Banquet Packages"
          subtitle="Select a package tier to explore its signature live stations, royal courses, and on-site staging infrastructure."
        />

        {/* 1. PACKAGE HEADER TABS (Unified Single-Line Navigation Rail without Prices) */}
        <div
          ref={tabsBarRef}
          role="tablist"
          aria-label="Catering Package Tiers"
          className="packages-tabs-bar"
        >
          {packages.map((pkg, idx) => {
            const isSelected = idx === activePackageIndex;

            return (
              <button
                key={pkg.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectPackage(idx)}
                className={`package-tab-btn ${isSelected ? 'active' : ''}`}
                style={{
                  border: isSelected
                    ? '2px solid var(--color-primary)'
                    : '1.5px solid var(--color-border-subtle)',
                  backgroundColor: isSelected ? '#0A0D12' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--color-text-primary)',
                  boxShadow: isSelected
                    ? '0 10px 28px rgba(200, 138, 46, 0.35)'
                    : '0 4px 12px rgba(10, 13, 18, 0.05)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                {/* Crown Icon */}
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-accent-champagne)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Crown size={14} strokeWidth={2.4} />
                </div>

                {/* Package Label */}
                <div style={{ textAlign: 'left', minWidth: 0, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'nowrap' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '14px',
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                      title={pkg.name}
                    >
                      {pkg.name}
                    </span>
                    {pkg.isPopular && (
                      <span
                        style={{
                          fontSize: '8.5px',
                          fontWeight: 900,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          backgroundColor: 'var(--color-primary)',
                          color: '#FFFFFF',
                          padding: '1px 5px',
                          borderRadius: 'var(--radius-full)',
                          flexShrink: 0
                        }}
                      >
                        Pick
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. SPLIT LAYOUT: Left (Package & Dish Details) | Right (Orbital Arc Platter) */}
        <div
          className="packages-interactive-grid"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            border: '1.5px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-card)',
            padding: 'clamp(24px, 4vw, 48px)',
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 480px) 1fr',
            gap: 'clamp(30px, 4vw, 60px)',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* LEFT COLUMN: Constant Package Name Header & Active Dish Details */}
          <div className="package-details-col" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Constant Package Name Header across all cards */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                paddingBottom: '16px',
                borderBottom: '1.5px solid var(--color-border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent-champagne)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Crown size={16} strokeWidth={2.4} />
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(18px, 2.2vw, 22px)',
                    fontWeight: 900,
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.01em',
                    margin: 0,
                    lineHeight: 1.2
                  }}
                >
                  {currentPackage.name}
                </h2>
              </div>

              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  backgroundColor: 'rgba(10, 13, 18, 0.04)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                Item {activeDishIndex + 1} of {dishes.length}
              </span>
            </div>

            {/* Dish Course & Dietary Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(10, 13, 18, 0.06)',
                  color: 'var(--color-text-primary)'
                }}
              >
                {currentDish.course}
              </span>

              {/* Dietary Indicator */}
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor:
                    currentDish.dietary === 'Veg'
                      ? 'rgba(30, 107, 34, 0.1)'
                      : currentDish.dietary === 'Non-Veg'
                      ? 'rgba(197, 34, 34, 0.1)'
                      : 'rgba(200, 138, 46, 0.14)',
                  color:
                    currentDish.dietary === 'Veg'
                      ? '#1E6B22'
                      : currentDish.dietary === 'Non-Veg'
                      ? '#C52222'
                      : '#9E6417'
                }}
              >
                {currentDish.dietary === 'Veg' && (
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#1E6B22'
                    }}
                  />
                )}
                {currentDish.dietary === 'Non-Veg' && (
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#C52222'
                    }}
                  />
                )}
                {currentDish.dietary === 'Chef Signature' && <Sparkles size={13} color="var(--color-primary)" />}
                {currentDish.dietary}
              </span>
            </div>

            {/* Dish Name */}
            <div>
              <h3
                key={`dish-name-${currentDish.id || activeDishIndex}`}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(26px, 3.2vw, 38px)',
                  fontWeight: 900,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  minHeight: '1.2em',
                  margin: 0
                }}
                className={animating ? 'dish-text-transition' : ''}
              >
                {currentDish.name}
              </h3>
            </div>

            {/* Chef Note / Preparation Highlight */}
            {currentDish.chefNote && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-accent-champagne)',
                  borderLeft: '4px solid var(--color-primary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <Flame size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#6A440A', margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ fontWeight: 800 }}>Chef's Staging Note:</strong> {currentDish.chefNote}
                </p>
              </div>
            )}

            {/* Dish Sensory Description */}
            <p
              key={`dish-desc-${currentDish.id || activeDishIndex}`}
              style={{
                fontSize: '15px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                margin: 0,
                minHeight: '44px'
              }}
              className={animating ? 'dish-text-transition' : ''}
            >
              {currentDish.description}
            </p>

            {/* Quick Dish Selection Chips (Scrollable menu bar of all package items) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '4px',
                maxWidth: '100%',
                scrollbarWidth: 'thin'
              }}
            >
              {dishes.map((d, i) => {
                const isCur = i === activeDishIndex;
                return (
                  <button
                    key={d.id || i}
                    onClick={() => triggerDishChange(i)}
                    style={{
                      whiteSpace: 'nowrap',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '11px',
                      fontWeight: isCur ? 800 : 600,
                      border: isCur ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border-subtle)',
                      backgroundColor: isCur ? 'var(--color-primary)' : 'rgba(10, 13, 18, 0.04)',
                      color: isCur ? '#FFFFFF' : 'var(--color-text-secondary)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {d.name}
                  </button>
                );
              })}
            </div>

            {/* Controls: Stepper (Prev/Next) & Dish Progress Dots */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '8px',
                borderTop: '1px solid var(--color-border-subtle)'
              }}
            >
              {/* Stepper Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={handlePrevDish}
                  aria-label="Previous dish"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(10, 13, 18, 0.05)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 800,
                    fontSize: '13px',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 13, 18, 0.05)';
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                  }}
                >
                  <ChevronLeft size={16} strokeWidth={2.6} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNextDish}
                  aria-label="Next dish"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(10, 13, 18, 0.05)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 800,
                    fontSize: '13px',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 13, 18, 0.05)';
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                  }}
                >
                  <span>Next</span>
                  <ChevronRight size={16} strokeWidth={2.6} />
                </button>
              </div>

              {/* Progress Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'hidden', maxWidth: '160px' }}>
                {dishes.slice(0, 12).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => triggerDishChange(i)}
                    aria-label={`Go to dish ${i + 1}`}
                    style={{
                      width: i === activeDishIndex ? '20px' : '7px',
                      height: '7px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: i === activeDishIndex ? 'var(--color-primary)' : 'var(--color-border-subtle)',
                      transition: 'all var(--transition-fast)',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Key Inclusions Bullet Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {currentPackage.inclusions.slice(0, 3).map((inc, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-text-muted)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#F8F6F0',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  <Check size={12} color="var(--color-primary)" strokeWidth={3} />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: ORBITAL ARC & GRAND SERVING PLATTER */}
          <div
            className="orbital-showcase-container"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '560px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Floating Culinary Garnishes */}
            <div className="floating-garnish garnish-1" style={{ top: '8%', right: '14%' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4A7C38, #2E5320)',
                  boxShadow: '0 8px 18px rgba(46, 83, 32, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(-25deg)'
                }}
              >
                <Leaf size={19} color="#FFFFFF" />
              </div>
            </div>

            <div className="floating-garnish garnish-2" style={{ bottom: '12%', right: '8%' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E69526, #B26A0E)',
                  boxShadow: '0 8px 16px rgba(200, 138, 46, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(35deg)'
                }}
              >
                <Sparkles size={15} color="#FFFFFF" />
              </div>
            </div>

            <div className="floating-garnish garnish-3" style={{ top: '15%', left: '4%' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3A692C, #1E4216)',
                  boxShadow: '0 8px 16px rgba(30, 66, 22, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(15deg)'
                }}
              >
                <Leaf size={16} color="#FFFFFF" />
              </div>
            </div>

            {/* SVG ORBITAL ARC CURVE (Dashed Golden Arc) */}
            <svg
              className="orbital-arc-svg"
              viewBox="0 0 620 560"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'visible'
              }}
            >
              <defs>
                <linearGradient id="orbitalGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C88A2E" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#C88A2E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C88A2E" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Dashed Orbital Track */}
              <path
                d={`M ${plateCenterX - orbitalRadius * Math.cos((-66 * Math.PI) / 180)} ${
                  plateCenterY + orbitalRadius * Math.sin((-66 * Math.PI) / 180)
                } A ${orbitalRadius} ${orbitalRadius} 0 0 0 ${
                  plateCenterX - orbitalRadius * Math.cos((66 * Math.PI) / 180)
                } ${plateCenterY + orbitalRadius * Math.sin((66 * Math.PI) / 180)}`}
                fill="none"
                stroke="url(#orbitalGoldGrad)"
                strokeWidth="2.5"
                strokeDasharray="8 10"
              />
            </svg>

            {/* ORBITING DISH THUMBNAILS (along the curved trajectory) */}
            <div
              className="orbital-thumbnails-layer"
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'auto'
              }}
            >
              {thumbnailPositions.map(({ dish, index, x, y }) => {
                const isActive = index === activeDishIndex;

                return (
                  <button
                    key={`${dish.id}-${index}`}
                    onClick={() => triggerDishChange(index)}
                    aria-label={`Select ${dish.name}`}
                    title={dish.name}
                    className={`orbital-node ${isActive ? 'active' : ''}`}
                    style={{
                      position: 'absolute',
                      left: `${(x / 620) * 100}%`,
                      top: `${(y / 560) * 100}%`,
                      transform: `translate(-50%, -50%) scale(${isActive ? 1.24 : 1})`,
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      padding: 0,
                      backgroundColor: '#FFFFFF',
                      border: isActive ? '3.5px solid var(--color-primary)' : '2px solid rgba(200, 138, 46, 0.45)',
                      boxShadow: isActive
                        ? '0 0 0 4px rgba(200, 138, 46, 0.35), 0 0 32px rgba(200, 138, 46, 0.8), 0 10px 24px rgba(0,0,0,0.3)'
                        : '0 4px 16px rgba(10, 13, 18, 0.12)',
                      cursor: 'pointer',
                      zIndex: isActive ? 12 : 3,
                      transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                      overflow: 'visible'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <ImageWithLoader
                        src={dish.image}
                        alt={dish.name}
                        spinnerSize={22}
                        containerStyle={{ borderRadius: '50%' }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_DISH_IMG;
                        }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                    </div>

                    {/* Active Crown Indicator */}
                    {isActive && (
                      <div
                        className="active-crown-badge"
                        style={{
                          position: 'absolute',
                          top: '-9px',
                          right: '-7px',
                          backgroundColor: 'var(--color-primary)',
                          color: '#FFFFFF',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 3px 10px rgba(0,0,0,0.4)',
                          border: '2px solid #FFFFFF'
                        }}
                      >
                        <Crown size={13} strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* GRAND SERVING PLATTER (The large royal circular plate) */}
            <div
              key={`platter-${currentDish.id || activeDishIndex}`}
              className="grand-serving-platter"
              style={{
                position: 'relative',
                left: '12%',
                width: 'clamp(320px, 35vw, 470px)',
                height: 'clamp(320px, 35vw, 470px)',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                padding: 'clamp(12px, 1.8vw, 18px)',
                boxShadow:
                  '0 30px 70px -10px rgba(10, 13, 18, 0.35), 0 10px 24px -5px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(200, 138, 46, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                transition: 'transform 0.6s ease'
              }}
            >
              {/* Inner Royal Bone-China Plate Rim with Gold Filigree Ring */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px dashed rgba(200, 138, 46, 0.5)',
                  padding: '8px',
                  boxShadow: 'inset 0 4px 18px rgba(0,0,0,0.08)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <ImageWithLoader
                    key={currentDish.id || activeDishIndex}
                    src={currentDish.image}
                    alt={currentDish.name}
                    spinnerSize={54}
                    containerStyle={{ borderRadius: '50%' }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_DISH_IMG;
                    }}
                    className="grand-plate-image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Gentle vignette overlay for photographic depth */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle, transparent 55%, rgba(10, 13, 18, 0.35) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Component Styles & Keyframe Animations */}
      <style>{`
        /* 1. Unified Single-Line Packages Tabs Rail */
        .packages-tabs-bar {
          display: flex !important;
          flex-wrap: nowrap !important;
          align-items: stretch !important;
          justify-content: flex-start !important;
          gap: 10px !important;
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 6px 4px 18px 4px !important;
          margin-bottom: 32px !important;
        }

        .packages-tabs-bar::-webkit-scrollbar {
          display: none !important;
          height: 0px !important;
        }

        .package-tab-btn {
          flex: 1 1 0 !important;
          min-width: 185px !important;
          padding: 12px 16px !important;
          border-radius: var(--radius-full) !important;
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          white-space: nowrap !important;
          transition: all var(--transition-smooth) !important;
        }

        .package-tab-btn:hover:not(.active) {
          border-color: rgba(200, 138, 46, 0.6) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(10, 13, 18, 0.08) !important;
        }

        @keyframes dishPlateReveal {
          0% {
            opacity: 0;
            transform: scale(1.12) rotate(4deg);
            filter: blur(8px);
          }
          45% {
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }

        .grand-plate-image {
          animation: dishPlateReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity, filter;
        }

        @keyframes platterGoldPulse {
          0% {
            box-shadow: 0 30px 70px -10px rgba(10, 13, 18, 0.35), 0 0 0 0 rgba(200, 138, 46, 0.6);
          }
          40% {
            box-shadow: 0 30px 70px -10px rgba(10, 13, 18, 0.35), 0 0 0 18px rgba(200, 138, 46, 0);
          }
          100% {
            box-shadow: 0 30px 70px -10px rgba(10, 13, 18, 0.35), 0 0 0 0 rgba(200, 138, 46, 0);
          }
        }

        .grand-serving-platter {
          animation: platterGoldPulse 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .dish-text-transition {
          animation: dishFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes dishFadeIn {
          0% {
            opacity: 0;
            transform: translateY(12px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes crownPop {
          0% {
            transform: scale(0) rotate(-25deg);
            opacity: 0;
          }
          65% {
            transform: scale(1.25) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .active-crown-badge {
          animation: crownPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Floating Garnish Animation */
        @keyframes floatLeafA {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }

        @keyframes floatLeafB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-10deg); }
        }

        .floating-garnish {
          position: absolute;
          pointer-events: none;
          z-index: 4;
        }

        .garnish-1 {
          animation: floatLeafA 4.8s ease-in-out infinite;
        }

        .garnish-2 {
          animation: floatLeafB 5.4s ease-in-out infinite 0.6s;
        }

        .garnish-3 {
          animation: floatLeafA 6.1s ease-in-out infinite 1.2s;
        }

        .orbital-node {
          transition: all 0.65s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .orbital-node.active {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 4px rgba(200, 138, 46, 0.35), 0 0 30px rgba(200, 138, 46, 0.8), 0 10px 24px rgba(0,0,0,0.3) !important;
          z-index: 12 !important;
        }

        .orbital-node:not(.active):hover {
          transform: translate(-50%, -50%) scale(1.15) !important;
          border-color: rgba(200, 138, 46, 0.8) !important;
          box-shadow: 0 0 18px rgba(200, 138, 46, 0.5) !important;
        }

        .orbital-node.active:hover {
          transform: translate(-50%, -50%) scale(1.3) !important;
        }

        /* Responsive Layout Stacking for Tablet & Mobile */
        @media (max-width: 1024px) {
          .packages-interactive-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 32px !important;
            padding: clamp(18px, 4vw, 36px) !important;
          }

          .orbital-showcase-container {
            order: 1 !important;
            min-height: auto !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justifyContent: center !important;
            gap: 16px !important;
            padding: 8px 0 !important;
          }

          .package-details-col {
            order: 2 !important;
            width: 100% !important;
          }

          .grand-serving-platter {
            left: 0 !important;
            margin: 0 auto !important;
            width: clamp(230px, 62vw, 350px) !important;
            height: clamp(230px, 62vw, 350px) !important;
          }

          .orbital-arc-svg {
            display: none !important;
          }

          .floating-garnish {
            display: none !important;
          }

          .orbital-thumbnails-layer {
            position: static !important;
            inset: auto !important;
            display: flex !important;
            justifyContent: flex-start !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            padding: 12px 8px !important;
            gap: 14px !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 14px !important;
            scrollbar-width: thin;
            scrollbar-color: var(--color-primary) transparent;
          }

          .orbital-thumbnails-layer::-webkit-scrollbar {
            height: 4px;
          }

          .orbital-thumbnails-layer::-webkit-scrollbar-thumb {
            background-color: var(--color-primary);
            border-radius: 9999px;
          }

          .orbital-node {
            position: static !important;
            transform: none !important;
            width: 64px !important;
            height: 64px !important;
            flex-shrink: 0 !important;
            scroll-snap-align: center;
          }

          .orbital-node:hover {
            transform: scale(1.1) !important;
          }
        }

        @media (max-width: 640px) {
          .packages-tabs-bar {
            gap: 8px !important;
            padding-bottom: 12px !important;
            margin-bottom: 20px !important;
          }

          .package-tab-btn {
            min-width: 165px !important;
            padding: 10px 14px !important;
            gap: 8px !important;
          }

          .grand-serving-platter {
            width: clamp(210px, 68vw, 290px) !important;
            height: clamp(210px, 68vw, 290px) !important;
          }

          .orbital-node {
            width: 56px !important;
            height: 56px !important;
          }

          .orbital-node .active-crown-badge {
            width: 20px !important;
            height: 20px !important;
            top: -6px !important;
            right: -5px !important;
          }
        }
      `}</style>
    </section>
  );
}
