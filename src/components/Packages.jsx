import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages.js';
import { tiers } from '../data/tiers.js';
import './Packages.css';

const categories = ['All', 'Wildlife Safari', 'Gorilla Trek', 'Beach & Island', 'Remote Safari'];

export default function Packages() {
  const [active, setActive] = useState('All');
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const filtered = active === 'All' ? packages : packages.filter(p => p.category === active);

  return (
    <section className="packages section-pad" id="packages" ref={ref}>
      <div className="container">

        {/* Section header */}
        <div className={`packages__header ${visible ? 'packages__header--visible' : ''}`}>
          <div>
            <span className="section-tag">Our Journeys</span>
            <h2 className="section-title">
              Crafted <em>Experiences,</em>
              <br />Not Package Tours
            </h2>
          </div>
          <p className="section-subtitle">
            Every itinerary is a starting point, not a constraint. Tell us what calls to you and we will refine it around your dates, your group, your interests.
          </p>
        </div>

        {/* TIER STRIP */}
        <div className={`tier-strip ${visible ? 'tier-strip--visible' : ''}`}>
          <div className="tier-strip__label">
            <span>Our Collections</span>
            <Link to="/collections" className="tier-strip__view-all">View Full Portfolio →</Link>
          </div>
          <div className="tier-strip__tiers">
            {tiers.map((tier, i) => (
              <Link
                to="/collections"
                key={tier.id}
                className="tier-strip__card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="tier-strip__icon" style={{ color: tier.color }}>{tier.icon}</span>
                <div className="tier-strip__info">
                  <h4 className="tier-strip__name">{tier.name}</h4>
                  <p className="tier-strip__price">{tier.priceRange}</p>
                </div>
                <span className="tier-strip__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter buttons */}
        <div className={`packages__filters ${visible ? 'packages__filters--visible' : ''}`}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`packages__filter-btn ${active === cat ? 'packages__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Package cards */}
        <div className="packages__grid">
          {filtered.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.1} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PackageCard({ pkg, delay, visible }) {
  return (
    <div
      className={`pkg-card ${visible ? 'pkg-card--visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="pkg-card__img">
        <img src={pkg.image} alt={pkg.title} loading="lazy" />
        <div className="pkg-card__overlay" />
        {pkg.featured && <span className="pkg-card__badge">Featured</span>}
        <span className="pkg-card__category">{pkg.category}</span>
      </div>

      <div className="pkg-card__body">
        <div className="pkg-card__meta">
          <span className="pkg-card__location">📍 {pkg.location}</span>
          <span className="pkg-card__duration">{pkg.duration}</span>
        </div>

        <h3 className="pkg-card__title">{pkg.title}</h3>
        <p className="pkg-card__subtitle">{pkg.subtitle}</p>
        <p className="pkg-card__desc">{pkg.description}</p>

        <ul className="pkg-card__highlights">
          {pkg.highlights.map((h, i) => (
            <li key={i}>
              <span className="pkg-card__highlight-dot">✦</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="pkg-card__footer">
          <span className="pkg-card__price">{pkg.price}</span>
          <button
  className="pkg-card__cta btn-outline-green"
  onClick={() => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  }}
>
  Enquire Now
</button>
        </div>
      </div>
    </div>
  );
}
