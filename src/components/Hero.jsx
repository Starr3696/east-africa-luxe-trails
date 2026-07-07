import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    image: '/samburu-northern-frontier.jpg',
    headline: 'Where the Wild Things',
    headlineItalic: 'Still Are',
    sub: 'Bespoke luxury safaris across Kenya, Tanzania, Rwanda & beyond',
  },
  {
    image: '/serengeti-landscape.jpeg',
    headline: 'Africa in Every',
    headlineItalic: 'Detail',
    sub: 'Private camps, expert guides, and moments that stay with you forever',
  },
  {
    image: '/camping.jpeg',
    headline: 'The Continent at Its',
    headlineItalic: 'Most Magnificent',
    sub: 'Curated journeys for travellers who demand the extraordinary',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
      }, 700);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleAnchor = (anchor) => {
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = slides[current];

  return (
    <section className="hero" id="home">
      <div className={`hero__bg ${fading ? 'hero__bg--fade' : ''}`}>
        <img
          src={slide.image}
          alt="East Africa landscape"
          loading="eager"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          Explore. Experience . Excellence.
          <span className="hero__tag-dot" />
        </div>

        <h1 className={`hero__headline ${fading ? 'hero__headline--fade' : ''}`}>
          {slide.headline}
          <br />
          <em>{slide.headlineItalic}</em>
        </h1>

        <p className={`hero__sub ${fading ? 'hero__sub--fade' : ''}`}>
          {slide.sub}
        </p>

        <div className="hero__actions">
          <button className="btn-primary" onClick={() => handleAnchor('#packages')}>
            Explore Packages
            <span>→</span>
          </button>
          <button className="btn-secondary" onClick={() => handleAnchor('#contact')}>
            Speak to a Consultant
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">5+</span>
            <span className="hero__stat-label">Years of Excellence</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">12+</span>
            <span className="hero__stat-label">Countries Covered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">2,400+</span>
            <span className="hero__stat-label">Journeys Crafted</span>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__indicator ${i === current ? 'hero__indicator--active' : ''}`}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Floating destination pills */}
      <div className="hero__pills">
        {[
          { name: 'Maasai Mara National Park', country: 'Kenya' },
          { name: 'Serengeti National Park', country: 'Tanzania' },
          { name: 'Bwindi Impenetrable Forest', country: 'Uganda' },
          { name: 'Amboseli National Park', country: 'Kenya' },
          { name: 'Volcanoes National Park', country: 'Rwanda' },
          { name: 'Ngorongoro Crater', country: 'Tanzania' },
        ].map((dest, i) => (
          <div
            key={i}
            className="hero__pill"
            style={{ animationDelay: `${1 + i * 0.15}s` }}
          >
            <span className="hero__pill-dot" />
            <span className="hero__pill-name">{dest.name}</span>
            <span className="hero__pill-country">{dest.country}</span>
          </div>
        ))}
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
