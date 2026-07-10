import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleAnchor = (e, anchor) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '/', anchor: null },
    { label: 'About', href: '/#about', anchor: '#about' },
    { label: 'Gallery', href: '/#gallery', anchor: '#gallery' },
    { label: 'Blog', href: '/blog', anchor: null },
    { label: 'Contact', href: '/#contact', anchor: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Safari Packages', href: '/#packages', anchor: '#packages', icon: '◈', desc: 'Luxury safaris across East Africa' },
    { label: 'Our Collections', href: '/collections', anchor: null, icon: '✦', desc: 'Classic to Presidential — all four tiers' },
    { label: 'International Holidays', href: '/international-holidays', anchor: null, icon: '◉', desc: 'Worldwide bespoke travel experiences' },
    { label: 'Corporate & MICE', href: '/corporate-mice', anchor: null, icon: '◇', desc: 'Retreats, conferences & incentive travel' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">

        {/* ---- Logo (single Link, no nesting) ---- */}
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="East Africa Luxe Trails" className="navbar__logo-icon" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">East Africa</span>
            <span className="navbar__logo-sub">Luxe Trails</span>
          </span>
        </Link>

        {/* ---- Desktop Nav Links ---- */}
        <ul className="navbar__links">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.label}>
              {link.anchor ? (
                <Link to={link.href} onClick={(e) => handleAnchor(e, link.anchor)}>{link.label}</Link>
              ) : (
                <Link to={link.href}>{link.label}</Link>
              )}
            </li>
          ))}

          {/* Services Dropdown */}
          <li className="navbar__dropdown-wrap" ref={servicesRef}>
            <button
              className={`navbar__dropdown-btn ${servicesOpen ? 'navbar__dropdown-btn--open' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            {servicesOpen && (
              <div className="navbar__dropdown">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.label}
                    to={s.href}
                    className="navbar__dropdown-item"
                    onClick={(e) => { if (s.anchor) handleAnchor(e, s.anchor); setServicesOpen(false); }}
                  >
                    <span className="navbar__dropdown-icon">{s.icon}</span>
                    <span>
                      <span className="navbar__dropdown-label">{s.label}</span>
                      <span className="navbar__dropdown-desc">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {navLinks.slice(2).map((link) => (
            <li key={link.label}>
              {link.anchor ? (
                <Link to={link.href} onClick={(e) => handleAnchor(e, link.anchor)}>{link.label}</Link>
              ) : (
                <Link to={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>

        <Link to="/#contact" className="navbar__cta btn-primary" onClick={(e) => handleAnchor(e, '#contact')}>
          Plan Your Journey
        </Link>

        {/* ---- Hamburger ---- */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ---- Mobile Menu ---- */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.label}>
              {link.anchor ? (
                <Link to={link.href} onClick={(e) => { handleAnchor(e, link.anchor); setMenuOpen(false); }}>{link.label}</Link>
              ) : (
                <Link to={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              )}
            </li>
          ))}

          <li className="navbar__mobile-section">
            <span className="navbar__mobile-section-label">Services</span>
            {serviceLinks.map((s) => (
              <Link
                key={s.label}
                to={s.href}
                className="navbar__mobile-service-link"
                onClick={(e) => { if (s.anchor) handleAnchor(e, s.anchor); setMenuOpen(false); }}
              >
                <span>{s.icon}</span> {s.label}
              </Link>
            ))}
          </li>

          {navLinks.slice(2).map((link) => (
            <li key={link.label}>
              {link.anchor ? (
                <Link to={link.href} onClick={(e) => { handleAnchor(e, link.anchor); setMenuOpen(false); }}>{link.label}</Link>
              ) : (
                <Link to={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              )}
            </li>
          ))}

          <li>
            <Link to="/#contact" className="btn-primary" onClick={(e) => { handleAnchor(e, '#contact'); setMenuOpen(false); }}>
              Plan Your Journey
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
