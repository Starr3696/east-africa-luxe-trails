import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tiers } from '../data/tiers.js';
import './Investors.css';

const opportunities = [
  { icon: '◈', title: 'Lodge Development', desc: 'Partner with us on the development of new luxury lodge properties in underdeveloped conservation areas with high demand and low supply.' },
  { icon: '◉', title: 'Conservation Concessions', desc: 'Exclusive land concessions in private conservancies adjacent to major national parks, blending conservation impact with commercial returns.' },
  { icon: '◇', title: 'Travel Technology', desc: 'We are developing proprietary booking and personalisation technology for the luxury safari market. Seed rounds open to strategic partners.' },
  { icon: '◎', title: 'Community Franchises', desc: 'A micro-franchise model that empowers Maasai and Samburu communities to own and operate camp operations under the Luxe Trails brand.' },
];

export default function Investors() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="investors section-pad" id="investors" ref={ref}>
      <div className="investors__bg" />
      <div className="container investors__inner">

        {/* Left: pitch */}
        <div className={`investors__left ${visible ? 'investors__left--visible' : ''}`}>
          <span className="section-tag">Partnership & Investment</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Invest in Africa's
            <br /><em>Most Resilient</em>
            <br />Industry
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '420px' }}>
            East African eco-tourism is growing at 9.2% annually — faster than any comparable region globally. We offer a range of structured partnership opportunities for individuals, family offices, and institutions who share our vision.
          </p>
          <div className="investors__figures">
            <div className="investors__figure">
              <span className="investors__figure-num">9.2%</span>
              <span className="investors__figure-label">Annual sector growth</span>
            </div>
            <div className="investors__figure">
              <span className="investors__figure-num">$4.1B</span>
              <span className="investors__figure-label">East Africa tourism revenue 2024</span>
            </div>
            <div className="investors__figure">
              <span className="investors__figure-num">12yr</span>
              <span className="investors__figure-label">Track record of profitability</span>
            </div>
          </div>

          {/* Product portfolio strip for investors */}
          <div className="investors__portfolio">
            <span className="investors__portfolio-label">Our Product Portfolio</span>
            <div className="investors__portfolio-tiers">
              {tiers.map((tier) => (
                <div key={tier.id} className="investors__portfolio-tier">
                  <span className="investors__portfolio-icon">{tier.icon}</span>
                  <div>
                    <span className="investors__portfolio-name">{tier.name}</span>
                    <span className="investors__portfolio-tagline">"{tier.tagline}"</span>
                    <span className="investors__portfolio-price">{tier.priceRange}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/collections" className="investors__portfolio-link">
              View Full Portfolio →
            </Link>
          </div>

          <Link to="/collections#investment-deck" className="btn-primary investors__cta">
            Request Investment Deck
          </Link>
        </div>

        {/* Right: opportunities */}
        <div className={`investors__right ${visible ? 'investors__right--visible' : ''}`}>
          {opportunities.map((opp, i) => (
            <div key={i} className="investors__card" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="investors__card-icon">{opp.icon}</span>
              <div>
                <h4 className="investors__card-title">{opp.title}</h4>
                <p className="investors__card-desc">{opp.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
