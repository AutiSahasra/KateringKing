import React from 'react';
import AboutLegacy from '../components/sections/AboutLegacy';
import ProductionScale from '../components/sections/ProductionScale';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="page-about" style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Elevating the Art of Hospitality & Curated Culinary Experiences */}
      <AboutLegacy />

      {/* Commercial Kitchen & Logistics Infrastructure */}
      <ProductionScale onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
