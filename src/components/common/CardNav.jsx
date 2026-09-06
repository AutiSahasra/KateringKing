import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './CardNav.css';

const CardNav = ({
  emblem,
  wordmark,
  logo,
  logoAlt = 'Katering King Logo',
  links = [],
  className = '',
  ctaText = 'Enquire Now',
  onCtaClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  // Scroll listener: enlarged at scrollY=0, shrinks when scrolled past 50px-100px
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <div className={`card-nav-container ${isScrolled ? 'is-scrolled' : ''} ${className}`}>
      <nav ref={navRef} className={`card-nav ${isScrolled ? 'is-scrolled' : ''}`}>
        {/* Brand Logo / Avatar */}
        <div className="logo-container">
          <a href="/" onClick={handleLogoClick} className="logo-link" aria-label={`${logoAlt} Home`}>
            {emblem && wordmark ? (
              <div className="navbar-brand-lockup">
                <img src={emblem} alt={`${logoAlt} Emblem`} className="brand-emblem" />
                <img src={wordmark} alt={`${logoAlt} Wordmark`} className="brand-wordmark" />
              </div>
            ) : (
              <img src={logo} alt={logoAlt} className="logo" />
            )}
          </a>
        </div>

        {/* Center Desktop Navigation Links with Horizontal Loader on Hover */}
        <div className="card-nav-links">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `card-nav-button ${isActive ? 'active' : ''}`}
            >
              <span className="nav-btn-text">{link.label}</span>
              <span className="nav-btn-loader" aria-hidden="true" />
            </NavLink>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="card-nav-right-actions">
          <button
            type="button"
            className="card-nav-cta-button"
            onClick={(e) => {
              if (onCtaClick) onCtaClick(e);
            }}
          >
            {ctaText}
          </button>

          {/* Mobile Menu Toggle - Only visible on small viewports */}
          <button
            type="button"
            className={`card-nav-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="card-nav-mobile-drawer">
            <div className="card-nav-mobile-list">
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={handleLinkClick}
                  className={({ isActive }) => `mobile-nav-button ${isActive ? 'active' : ''}`}
                >
                  <span className="mobile-btn-text">{link.label}</span>
                  <span className="nav-btn-loader" aria-hidden="true" />
                </NavLink>
              ))}
            </div>
            <button
              type="button"
              className="card-nav-cta-button mobile-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onCtaClick) onCtaClick();
              }}
            >
              {ctaText}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default CardNav;
