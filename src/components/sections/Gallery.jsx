import React, { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import BufferingSpinner from '../common/BufferingSpinner';
import ImageWithLoader from '../common/ImageWithLoader';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { galleryCategories as initialCategories } from '../../data/mockData';
import api from '../../services/api';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState(initialCategories);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        setLoading(true);
        const data = await api.getGallery();
        if (data && data.items) {
          setItems(data.items);
          if (data.categories && data.categories.length > 0) {
            setCategories(data.categories);
          }
        } else if (Array.isArray(data)) {
          setItems(data);
        }
      } catch (err) {
        console.error('Failed to load gallery items:', err);
      } finally {
        setLoading(false);
      }
    }
    loadGallery();
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, items]);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const currentIndex = items.findIndex((i) => i.id === selectedItem?.id);

  const handleNext = () => {
    if (items.length === 0) return;
    const nextIdx = (currentIndex + 1) % items.length;
    setSelectedItem(items[nextIdx]);
  };

  const handlePrev = () => {
    if (items.length === 0) return;
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    setSelectedItem(items[prevIdx]);
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
      <div className="container">
        <SectionHeading
          kicker="Visual Portfolio"
          title="See Our Work"
          subtitle="Explore high-resolution photographs of our royal banquets, wedding catering, live culinary stations, and culinary brigade."
        />

        {/* Category Filters Bar */}
        <div
          className="gallery-filters-bar"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '36px',
            overflowX: 'auto',
            paddingBottom: '4px'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface-card)',
                  color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                  border: isActive ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border-subtle)',
                  boxShadow: isActive ? '0 4px 14px rgba(200, 138, 46, 0.35)' : 'var(--shadow-subtle)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  minHeight: '38px'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Buffering Loading State */}
        {loading ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 20px',
              minHeight: '360px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <BufferingSpinner size={52} label="Loading Visual Portfolio Images..." />
          </div>
        ) : (
          /* Visual Portfolio Grid with Buffering Image Loaders */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '20px'
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: '#0A0D12',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  boxShadow: '0 8px 24px rgba(10, 13, 18, 0.08)',
                  border: '1px solid var(--color-border-subtle)'
                }}
                className="gallery-card"
              >
                <ImageWithLoader
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  theme="dark"
                  spinnerSize={34}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Category Pill on Card */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(10, 13, 18, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(200, 138, 46, 0.35)',
                    borderRadius: 'var(--radius-full)',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#EED7B0',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                >
                  {item.categoryLabel || item.category}
                </div>

                {/* Hover Overlay with Clean Title and Zoom Action */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(10, 13, 18, 0.78)',
                    backdropFilter: 'blur(3px)',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    color: '#FFFFFF',
                    zIndex: 3
                  }}
                  className="gallery-overlay"
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 4px 14px rgba(200, 138, 46, 0.5)'
                    }}
                  >
                    <Eye size={18} />
                  </div>

                  <h4 style={{ fontSize: '16.5px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', lineHeight: 1.25 }}>
                    {item.title}
                  </h4>
                  {item.caption && (
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.4 }}>
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(8, 10, 13, 0.96)',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            aria-label="Close image lightbox"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={22} />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(10, 13, 18, 0.85)',
              border: '1.5px solid var(--color-primary)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(10, 13, 18, 0.85)',
              border: '1.5px solid var(--color-primary)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '920px',
              width: '100%',
              maxHeight: '86vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 8px'
            }}
          >
            <div
              style={{
                maxWidth: '100%',
                maxHeight: '62vh',
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
                border: '2px solid rgba(200, 138, 46, 0.4)'
              }}
            >
              <ImageWithLoader
                src={selectedItem.image}
                alt={selectedItem.title}
                theme="dark"
                spinnerSize={48}
                style={{
                  maxWidth: '100%',
                  maxHeight: '62vh',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div style={{ marginTop: '18px', textAlign: 'center', color: '#FFFFFF' }}>
              <h3 style={{ fontSize: 'clamp(20px, 3.5vw, 26px)', color: '#FFFFFF', fontWeight: 900, marginBottom: '6px' }}>
                {selectedItem.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.78)', maxWidth: '640px' }}>
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover img {
          transform: scale(1.08) !important;
        }
      `}</style>
    </section>
  );
}
