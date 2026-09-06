import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import EnquiryModal from './components/enquiry/EnquiryModal';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import AboutPage from './pages/AboutPage';
import ReelsPage from './pages/ReelsPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import { Agentation } from 'agentation';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenEnquiry = (pkg = null) => {
    setSelectedPackage(pkg);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="kateringking-app">
      {/* Auto Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Multi-Page Route Views */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/packages" element={<PackagesPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/reels" element={<ReelsPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/gallery" element={<GalleryPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/reviews" element={<ReviewsPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<ContactPage onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Global WhatsApp Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        preselectedPackage={selectedPackage}
      />

      {/* Agentation UI/UX Visual Inspection Tool for Codex & Developer Review */}
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
}
