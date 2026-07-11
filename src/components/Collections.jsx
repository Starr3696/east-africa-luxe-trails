import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { tiers } from '../data/tiers.js';
import './Collections.css';

function ConsultantModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="consult-modal" onClick={onClose}>
      <div className="consult-modal__box" onClick={e => e.stopPropagation()}>
        <button className="consult-modal__close" onClick={onClose}>✕</button>
        <div className="consult-modal__header">
          <span className="consult-modal__icon">✦</span>
          <h3 className="consult-modal__title">Speak to a Consultant</h3>
          <p className="consult-modal__sub">
            Our team is available Mon–Sat, 8am–6pm EAT. Reach us instantly on WhatsApp or email and we'll get back to you within 24 hours.
          </p>
        </div>
        <div className="consult-modal__options">
          <a
            href="https://wa.me/254143235252?text=Hello%2C%20I%27d%20like%20to%20speak%20to%20a%20consultant%20about%20an%20East%20Africa%20Luxe%20Trails%20safari."
            className="consult-modal__option consult-modal__option--wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="consult-modal__option-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div className="consult-modal__option-body">
              <span className="consult-modal__option-label">WhatsApp</span>
              <span className="consult-modal__option-val">+254 143 235 252</span>
              <span className="consult-modal__option-note">Fastest response — typically within minutes</span>
            </div>
            <span className="consult-modal__option-arrow">→</span>
          </a>

          <a
            href="mailto:info.ealuxetrails@gmail.com?subject=Safari%20Consultation%20Request&body=Hello%2C%20I%27d%20like%20to%20speak%20to%20a%20consultant%20about%20a%20safari%20with%20East%20Africa%20Luxe%20Trails."
            className="consult-modal__option consult-modal__option--email"
          >
            <div className="consult-modal__option-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="consult-modal__option-body">
              <span className="consult-modal__option-label">Email</span>
              <span className="consult-modal__option-val">info.ealuxetrails@gmail.com</span>
              <span className="consult-modal__option-note">Detailed enquiries — response within 24 hours</span>
            </div>
            <span className="consult-modal__option-arrow">→</span>
          </a>
        </div>

        <div className="consult-modal__footer">
          <span>Office Hours: Mon–Sat, 8am – 6pm EAT</span>
          <span>·</span>
          <span>Karen, Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  );
}

export default function Collections() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="collections">

      {/* Hero */}
      <section className="collections__hero">
        <div className="collections__hero-overlay" />
        <div className="container collections__hero-content">
          <span className="section-tag">Package Portfolio</span>
          <h1 className="collections__hero-title">
            Our Safari
            <br /><em>Collections</em>
          </h1>
          <p className="collections__hero-sub">
            Four tiers of experience, each designed for a different kind of traveller.
            From comfort and value to the absolute pinnacle of African luxury —
            every collection is a promise of excellence.
          </p>
        </div>
        <div className="collections__hero-tiers">
          {tiers.map((t, i) => (
            <a key={i} href={`#${t.id}`} className="collections__hero-tier-pill">
              {t.icon} {t.name}
            </a>
          ))}
        </div>
      </section>

      {/* Tier cards */}
      <section className="collections__tiers">
        {tiers.map((tier, i) => (
          <TierCard key={tier.id} tier={tier} index={i} />
        ))}
      </section>

      {/* Destination Highlights */}
      <section className="coll-dests section-pad">
        <div className="container">
          <div className="coll-dests__header">
            <span className="section-tag">Iconic Destinations</span>
            <h2 className="section-title">
              The Landscapes That
              <br /><em>Define Our Safaris</em>
            </h2>
            <p className="section-subtitle">
              Each destination in our portfolio was selected for its extraordinary wildlife, landscapes, and experiences.
            </p>
          </div>
          <div className="coll-dests__grid">
            {[
              {
                name: 'Serengeti National Park',
                country: 'Tanzania',
                image: '/serengeti-sky-lodge.jpeg',
                highlight: 'UNESCO World Heritage Site famous for the Great Wildebeest Migration',
                why: 'Unmatched endless savanna landscapes and high-density predator sightings year-round.',
                best: 'Jan–Mar for calving season; Jun–Jul for the central corridor migration.',
              },
              {
                name: 'Maasai Mara National Reserve',
                country: 'Kenya',
                image: '/Safari.jpeg',
                highlight: 'The quintessential African safari destination flanking the northern Serengeti',
                why: "Dramatic Mara River crossings by millions of wildebeest and exceptional viewings of Africa's big cats.",
                best: 'July to October for peak Great Migration crossings.',
              },
              {
                name: 'Ngorongoro Crater',
                country: 'Tanzania',
                image: '/Ngorongoro Crater.jpg',
                highlight: "The world's largest intact, unfilled volcanic caldera",
                why: 'A self-contained ecosystem sheltering over 25,000 large animals — near-guaranteed Big Five sightings including black rhinos.',
                best: 'Year-round safari destination.',
              },
              {
                name: 'Tarangire National Park',
                country: 'Tanzania',
                image: '/about2.jpeg',
                highlight: "Thousands of ancient Baobab trees and Tanzania's highest elephant concentration",
                why: 'The Tarangire River becomes the only water source in dry season, drawing massive migratory herds. A wilder, less crowded alternative to the Serengeti.',
                best: 'July to October when wildlife clusters tightly along the riverbeds.',
              },
              {
                name: 'Bwindi Impenetrable Forest',
                country: 'Uganda',
                image: '/Bwindi Impenetrable Forest.jpg',
                highlight: "Ancient rainforest containing roughly half of the world's remaining mountain gorillas",
                why: 'A rugged, deeply intimate, and highly regulated gorilla trekking experience through mist-covered valleys unlike anywhere else on earth.',
                best: 'June to August and December to February (the drier months).',
              },
              {
                name: 'Amboseli National Park',
                country: 'Kenya',
                image: '/amboseli-kilimanjaro-view.jpeg',
                highlight: 'The best place in Africa to view free-ranging super-tuskers',
                why: 'Iconic postcard-perfect photography of massive elephant herds against the dramatic backdrop of Mount Kilimanjaro.',
                best: 'June to October when animals gather around the freshwater marshes.',
              },
              {
                name: 'Volcanoes National Park',
                country: 'Rwanda',
                image: '/Volcanoes National Park.jpg',
                highlight: "Africa's premier luxury gorilla tracking destination along the Virunga volcanic chain",
                why: 'Highly accessible trekking infrastructure, top-tier luxury eco-lodges, and historical ties to conservationist Dian Fossey.',
                best: 'June to September for ideal tracking conditions.',
              },
            ].map((dest, i) => (
              <DestCard key={i} dest={dest} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Deck Form */}
      <InvestmentForm />

      {/* Bottom CTA */}
      <section className="collections__cta">
        <div className="collections__cta-bg" />
        <div className="container collections__cta-inner">
          <span className="section-tag">Not Sure Which Tier?</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Let Our Consultants
            <br /><em>Guide You</em>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '16px' }}>
            Every journey is bespoke. Tell us your vision and we will recommend
            the collection — and the specific itinerary — that fits perfectly.
          </p>
          <div className="collections__cta-actions">
            <button className="btn-primary" onClick={() => setModalOpen(true)}>
              Speak to a Consultant →
            </button>
            <a
              href="https://wa.me/254143235252?text=Hello%2C%20I%27d%20like%20to%20discuss%20safari%20packages%20with%20East%20Africa%20Luxe%20Trails."
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {modalOpen && <ConsultantModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

function DestCard({ dest, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`dest-card ${visible ? 'dest-card--visible' : ''}`} style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
      <div className="dest-card__img">
        <img src={dest.image} alt={dest.name} loading="lazy" />
        <div className="dest-card__overlay" />
        <span className="dest-card__country">{dest.country}</span>
      </div>
      <div className="dest-card__body">
        <h3 className="dest-card__name">{dest.name}</h3>
        <p className="dest-card__highlight">✦ {dest.highlight}</p>
        <div className="dest-card__rows">
          <div className="dest-card__row">
            <span className="dest-card__row-label">Why Visit</span>
            <p className="dest-card__row-val">{dest.why}</p>
          </div>
          <div className="dest-card__row">
            <span className="dest-card__row-label">Best Time</span>
            <p className="dest-card__row-val">{dest.best}</p>
          </div>
        </div>
        <a href="#investment-deck" className="dest-card__cta"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#investment-deck');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >Plan this Safari →</a>
      </div>
    </div>
  );
}

function TierCard({ tier, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id={tier.id}
      className={`tier-card ${isEven ? 'tier-card--even' : 'tier-card--odd'} ${visible ? 'tier-card--visible' : ''}`}
      ref={ref}
    >
      <div className="container tier-card__inner">
        <div className="tier-card__img-wrap">
          <img src={tier.image} alt={tier.name} loading="lazy" />
          <div className="tier-card__img-overlay" />
          <div className="tier-card__img-badge">
            <span className="tier-card__img-badge-icon">{tier.icon}</span>
            <span className="tier-card__img-badge-name">{tier.name}</span>
          </div>
          <div className="tier-card__img-price">{tier.priceRange}</div>
        </div>
        <div className="tier-card__body">
          <span className="section-tag">{`Collection 0${index + 1}`}</span>
          <h2 className="tier-card__title">{tier.name}</h2>
          <p className="tier-card__tagline">"{tier.tagline}"</p>
          <div className="gold-divider" />
          <div className="tier-card__ideal">
            <span className="tier-card__ideal-label">Ideal For</span>
            <p className="tier-card__ideal-val">{tier.idealFor}</p>
          </div>
          <div className="tier-card__includes">
            <span className="tier-card__includes-label">Package Includes</span>
            <ul className="tier-card__includes-list">
              {tier.includes.map((item, i) => (
                <li key={i}>
                  <span className="tier-card__includes-dot">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="tier-card__actions">
            <a href="#investment-deck" className="btn-primary tier-card__enquire-btn"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#investment-deck');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Enquire About This Collection →
            </a>
            <a href="https://wa.me/254143235252" className="tier-card__wa" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Quick WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestmentForm() {
  const FORMSPREE_URL = 'https://formspree.io/f/mjgddylq';
  const [form, setForm] = useState({ investorName: '', company: '', email: '', phone: '', investmentType: '', budget: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ formType: 'Investment Deck Request', ...form }),
      });
      if (res.ok) { setSubmitted(true); }
      else { setError('Something went wrong. Please try again.'); }
    } catch { setError('Network error. Please check your connection.'); }
    finally { setSending(false); }
  };

  return (
    <section className="invest-form section-pad" id="investment-deck">
      <div className="invest-form__bg" />
      <div className="container invest-form__inner">
        <div className="invest-form__info">
          <span className="section-tag">Investor Relations</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Request Our
            <br /><em>Investment Deck</em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Interested in partnering with East Africa Luxe Trails? Fill in the form and our investment relations team will send you our full deck within 24 hours.
          </p>
          <div className="invest-form__stats">
            <div><span className="invest-form__stat-num">9.2%</span><span className="invest-form__stat-label">Annual sector growth</span></div>
            <div><span className="invest-form__stat-num">$4.1B</span><span className="invest-form__stat-label">East Africa tourism revenue</span></div>
            <div><span className="invest-form__stat-num">12yr</span><span className="invest-form__stat-label">Track record</span></div>
          </div>
        </div>
        <div className="invest-form__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">
                <img src="/logo3.png" alt="East Africa Luxe Trails Logo" width={90} height={90} />
              </span>
              <h3>Thank You, {form.investorName.split(' ')[0] || 'there'}.</h3>
              <p>Your request has been received. Our investment relations team will send you the deck within 24 hours.</p>
            </div>
          ) : (
            <form className="invest-form__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Investment Deck Request</h3>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="investorName">Full Name *</label>
                  <input type="text" id="investorName" name="investorName" value={form.investorName} onChange={handleChange} placeholder="Your full name" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="company">Company / Organisation</label>
                  <input type="text" id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your organisation" />
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 143 235 252" />
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="investmentType">Area of Interest *</label>
                  <select id="investmentType" name="investmentType" value={form.investmentType} onChange={handleChange} required>
                    <option value="">Select interest...</option>
                    <option value="Lodge Development">Lodge Development</option>
                    <option value="Conservation Concessions">Conservation Concessions</option>
                    <option value="Travel Technology">Travel Technology</option>
                    <option value="Community Franchises">Community Franchises</option>
                    <option value="General Investment">General Investment</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label htmlFor="budget">Investment Range (USD)</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select range...</option>
                    <option value="$50K–$100K">$50,000 – $100,000</option>
                    <option value="$100K–$500K">$100,000 – $500,000</option>
                    <option value="$500K–$1M">$500,000 – $1,000,000</option>
                    <option value="$1M+">$1,000,000+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="message">Additional Notes</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your investment goals or any specific questions about the opportunity..." rows={4} />
              </div>
              <button type="submit" className="btn-primary contact__submit" disabled={sending}>
                {sending ? 'Sending...' : 'Request Investment Deck'}
                {!sending && <span>→</span>}
              </button>
              {error && <p className="contact__error">{error}</p>}
              <p className="contact__privacy">Your information is kept strictly confidential.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
