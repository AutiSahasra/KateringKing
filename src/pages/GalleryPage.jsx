import React from 'react';
import Gallery from '../components/sections/Gallery';

export default function GalleryPage({ onOpenEnquiry }) {
  return (
    <div className="page-gallery" style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Main Visual Portfolio Showcase */}
      <Gallery />
    </div>
  );
}
