import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/content';

export const Navbar = ({ content, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo-wrap" onClick={closeMenu}>
          <img
            src={LOGO_URL}
            alt="Logo Robotika UNNES"
            className="brand-logo-img"
          />
          <div className="brand-text-block">
            <span className="brand-title">ROBOTIKA UNNES</span>
            <span className="brand-subtitle">• UKM RIPTEK</span>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav aria-label="Desktop navigation">
          <ul className="nav-menu">
            <li>
              <a href="#about" className="nav-link">
                {content.nav.about}
              </a>
            </li>
            <li>
              <a href="#programs" className="nav-link">
                {content.nav.programs}
              </a>
            </li>
            <li>
              <a href="#hangar" className="nav-link">
                {content.nav.hangar}
              </a>
            </li>
            <li>
              <a href="#faq" className="nav-link">
                {content.nav.faq}
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                {content.nav.contact}
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Header Action */}
        <div className="header-actions">
          {/* Language Switcher in Header (Desktop / Tablet) */}
          <div className="header-lang-switch">
            <button
              type="button"
              onClick={() => setLang('id')}
              className={`header-lang-btn ${lang === 'id' ? 'active' : ''}`}
            >
              ID
            </button>
            <span className="header-lang-divider">/</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`header-lang-btn ${lang === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
          </div>

          <a href="#contact" className="header-cta-link">
            <span className="pulsing-dot"></span>
            <span>{content.nav.getInTouch}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-drawer-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="mobile-drawer" role="dialog" aria-modal="true">
            <div className="mobile-drawer-status">
              <span className="pulsing-dot"></span>
              <span>KONTES ROBOT INDONESIA • UKM RIPTEK UNNES</span>
            </div>

            <nav className="mobile-drawer-nav">
              <a href="#about" onClick={closeMenu}>
                <span className="mobile-nav-index">01</span>
                <span>{content.nav.about}</span>
              </a>
              <a href="#programs" onClick={closeMenu}>
                <span className="mobile-nav-index">02</span>
                <span>{content.nav.programs}</span>
              </a>
              <a href="#hangar" onClick={closeMenu}>
                <span className="mobile-nav-index">03</span>
                <span>{content.nav.hangar}</span>
              </a>
              <a href="#faq" onClick={closeMenu}>
                <span className="mobile-nav-index">04</span>
                <span>{content.nav.faq}</span>
              </a>
              <a href="#contact" onClick={closeMenu}>
                <span className="mobile-nav-index">05</span>
                <span>{content.nav.contact}</span>
              </a>
            </nav>

            <div className="mobile-drawer-footer">
              <div className="mobile-drawer-lang">
                <span className="mobile-drawer-lang-label">PILIH BAHASA / LANG:</span>
                <div className="mobile-drawer-lang-toggle">
                  <button
                    type="button"
                    onClick={() => setLang('id')}
                    className={`mobile-lang-chip ${lang === 'id' ? 'active' : ''}`}
                  >
                    INDONESIA (ID)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`mobile-lang-chip ${lang === 'en' ? 'active' : ''}`}
                  >
                    ENGLISH (EN)
                  </button>
                </div>
              </div>

              <a
                href="#contact"
                className="btn-primary mobile-drawer-cta"
                onClick={closeMenu}
              >
                <span className="pulsing-dot"></span>
                <span>{content.nav.getInTouch}</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
