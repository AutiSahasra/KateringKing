import React, { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { galleryCategories } from '../../data/mockData';
import api from '../../services/api';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await api.getGalleryItems();
        setItems(data);
      } catch (err) {
        console.error('Failed to load gallery items:', err);
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
    const nextIdx = (currentIndex + 1) % items.length;
    setSelectedItem(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    setSelectedItem(items[prevIdx]);
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
      <div className="container">
        <SectionHeading
          kicker="Visual Splendor & Culinary Staging"
          title="The Royal Banqueting Gallery"
          subtitle="Inspect high-resolution captures of our live banquet spreads, handcrafted pastries, and grand ballrooms designed to enchant every guest."
        />

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '52px'
          }}
        >
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '11px 24px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface-card)',
                  color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                  border: isActive ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border-subtle)',
                  boxShadow: isActive ? '0 6px 18px rgba(200, 138, 46, 0.35)' : 'var(--shadow-subtle)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-secondary)',
                cursor: 'pointer',
                aspectRatio: '4 / 3',
                boxShadow: 'var(--shadow-subtle)',
                border: '1.5px solid var(--color-border-subtle)'
              }}
              className="gallery-card"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Hover Overlay with Bold Typography */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(10, 13, 18, 0.82)',
                  opacity: 0,
                  transition: 'opacity var(--transition-fast)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '26px',
                  color: '#FFFFFF'
                }}
                className="gallery-overlay"
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 14px rgba(200, 138, 46, 0.5)'
                  }}
                >
                  <Eye size={20} />
                </div>

                <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px', lineHeight: 1.25 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.45 }}>
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
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
            padding: '24px'
          }}
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            aria-label="Close image lightbox"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '50px',
              height: '50px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              cursor: 'pointer'
            }}
          >
            <X size={26} />
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
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(10, 13, 18, 0.85)',
              border: '1.5px solid var(--color-primary)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={30} strokeWidth={2.5} />
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
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(10, 13, 18, 0.85)',
              border: '1.5px solid var(--color-primary)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={30} strokeWidth={2.5} />
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
              alignItems: 'center'
            }}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
                border: '2px solid rgba(200, 138, 46, 0.4)'
              }}
            />
            <div style={{ marginTop: '22px', textAlign: 'center', color: '#FFFFFF' }}>
              <h3 style={{ fontSize: '28px', color: '#FFFFFF', fontWeight: 900, marginBottom: '8px' }}>
                {selectedItem.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.78)', maxWidth: '640px' }}>
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
