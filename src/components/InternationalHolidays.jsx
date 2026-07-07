import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InternationalHolidays.css';

const FORMSPREE_URL = 'https://formspree.io/f/mjgddylq';

const categories = [
  {
    id: 'indian-ocean',
    title: 'Indian Ocean Islands',
    icon: '🏝',
    image: '/Indian Ocean Islands.jpeg',
    tagline: 'Turquoise Waters & Barefoot Luxury',
    desc: 'The Indian Ocean\'s finest islands — Maldives, Seychelles, and Mauritius — offer an effortless extension to any East Africa safari. Private villas, coral reefs, and overwater bungalows await.',
    destinations: ['Maldives', 'Seychelles', 'Mauritius', 'Réunion'],
    highlight: 'Perfect safari & beach combination',
  },
  {
    id: 'middle-east',
    title: 'Middle East Getaways',
    icon: '🌙',
    image: '/Middle East Getaways.jpeg',
    tagline: 'Modern Glamour Meets Ancient Culture',
    desc: 'Dubai, Abu Dhabi, and Jordan offer world-class shopping, architecture, and adventure. With direct flights from Nairobi, the Middle East is one of East Africa\'s most accessible luxury escapes.',
    destinations: ['Dubai', 'Abu Dhabi', 'Jordan & Petra', 'Oman'],
    highlight: 'Direct flights from Nairobi',
  },
  {
    id: 'europe',
    title: 'European Escapes',
    icon: '🏛',
    image: '/European Escapes.jpeg',
    tagline: 'Art, Culture & Timeless Elegance',
    desc: 'From the streets of Paris to the Amalfi Coast, Swiss Alps, and Greek islands — Europe offers an unmatched combination of culture, cuisine, and luxury accommodation for the discerning traveller.',
    destinations: ['Paris & French Riviera', 'Italy & Amalfi Coast', 'Swiss Alps', 'Greek Islands'],
    highlight: 'Curated cultural itineraries',
  },
  {
    id: 'asia',
    title: 'Asia & Far East',
    icon: '🏯',
    image: '/Asia & Far East.jpeg',
    tagline: 'Ancient Temples & Modern Luxury',
    desc: 'Bali\'s spiritual landscapes, Thailand\'s golden temples, Japan\'s precision and beauty — Asia delivers extraordinary experiences at every budget level, from boutique retreats to ultra-luxury resorts.',
    destinations: ['Bali & Indonesia', 'Thailand', 'Japan', 'Sri Lanka'],
    highlight: 'Spiritual & cultural immersion',
  },
];

const destinations = [
  { name: 'Maldives', image: '/Maldives.jpeg', tag: 'Indian Ocean' },
  { name: 'Dubai', image: '/Dubai.jpeg', tag: 'Middle East' },
  { name: 'Paris', image: '/Paris.jpeg', tag: 'Europe' },
  { name: 'Bali', image: '/Bali.jpeg', tag: 'Asia' },
  { name: 'Seychelles', image: '/Seychelles.jpeg', tag: 'Indian Ocean' },
  { name: 'Santorini', image: '/Santorini.jpeg', tag: 'Europe' },
];

const steps = [
  { num: '01', title: 'Share Your Dream', desc: 'Tell us your destination, travel dates, group size, and the kind of experience you\'re looking for — adventure, relaxation, culture, or all three.' },
  { num: '02', title: 'Expert Consultation', desc: 'Your dedicated travel consultant will reach out within 24 hours to discuss your vision and refine every detail of the itinerary.' },
  { num: '03', title: 'Bespoke Itinerary', desc: 'We design a fully tailored itinerary — flights, accommodation, transfers, activities, and dining — through our global DMC network.' },
  { num: '04', title: 'Travel in Style', desc: 'From airport departure to return, every detail is managed. You simply arrive and experience.' },
];

export default function InternationalHolidays() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', travelDates: '', travellers: '', budget: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('indian-ocean');
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ formType: 'International Holiday Enquiry', ...form }),
      });
      if (res.ok) { setSubmitted(true); }
      else { setError('Something went wrong. Please try again or contact us on WhatsApp.'); }
    } catch { setError('Network error. Please check your connection and try again.'); }
    finally { setSending(false); }
  };

  const activeData = categories.find(c => c.id === activeCategory);

  return (
    <div className="intl">

      {/* Hero */}
      <section className="intl__hero">
        <div className="intl__hero-overlay" />
        <div className="container intl__hero-content">
          <span className="section-tag">International Holidays</span>
          <h1 className="intl__hero-title">
            The World,
            <br /><em>Arranged for You</em>
          </h1>
          <p className="intl__hero-sub">
            Beyond East Africa's borders, a world of extraordinary experiences awaits.
            East Africa Luxe Trails designs bespoke international holidays through our
            global DMC network — from Maldivian overwater villas to Parisian suites,
            Japanese ryokans to Dubai penthouses.
          </p>
          <div className="intl__hero-actions">
            <a href="#intl-enquiry" className="btn-primary">Plan My Holiday →</a>
            <a href="#intl-categories" className="btn-secondary">Explore Destinations</a>
          </div>
        </div>
        {/* Floating destination pills */}
        <div className="intl__hero-pills">
          {['Maldives', 'Dubai', 'Paris', 'Bali', 'Seychelles', 'Tokyo', 'Diani', 'Zanzibar', 'Sharm El Sheikh', 'Marrakech', 'Cape Town'].map((d, i) => (
            <span key={i} className="intl__hero-pill" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>{d}</span>
          ))}
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="intl__why section-pad" ref={ref}>
        <div className="container">
          <div className={`intl__why-grid ${visible ? 'intl__why-grid--visible' : ''}`}>
            <div>
              <span className="section-tag">Why Book Through Us</span>
              <h2 className="section-title">
                One Company,
                <br /><em>Every Destination</em>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtitle">
                Through our partnerships with international Destination Management Companies,
                we extend the same level of bespoke service — personalised, seamless, and
                impeccably managed — to any destination in the world.
              </p>
            </div>
            <div className="intl__why-points">
              {[
                { icon: '◈', title: 'Global DMC Network', desc: 'Partnerships with accredited DMCs across every major destination ensure you receive genuine local expertise and access wherever you travel.' },
                { icon: '◉', title: 'Single Point of Contact', desc: 'One dedicated consultant handles everything — flights, hotels, transfers, activities, visas, and travel insurance — so you never have to coordinate multiple providers.' },
                { icon: '◇', title: 'Competitive Pricing', desc: 'Our DMC relationships mean we access rates and allocations unavailable to the general public — delivering more value at every budget level.' },
                { icon: '◎', title: 'Safari to Beach Combinations', desc: 'We specialise in combining East Africa safaris with international extensions — the perfect Maldives post-safari, or a European honeymoon after a Serengeti adventure.' },
              ].map((p, i) => (
                <div key={i} className="intl__why-point" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="intl__why-icon">{p.icon}</span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Categories */}
      <section className="intl__categories section-pad" id="intl-categories">
        <div className="container">
          <div className="intl__cat-header">
            <span className="section-tag">Holiday Collections</span>
            <h2 className="section-title">
              Four Worlds,
              <br /><em>Infinite Experiences</em>
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="intl__cat-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`intl__cat-tab ${activeCategory === cat.id ? 'intl__cat-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active category panel */}
          <div className="intl__cat-panel">
            <div className="intl__cat-panel-img">
              <img src={activeData.image} alt={activeData.title} loading="lazy" />
              <div className="intl__cat-panel-overlay" />
              <span className="intl__cat-panel-highlight">✦ {activeData.highlight}</span>
            </div>
            <div className="intl__cat-panel-body">
              <span className="section-tag">{activeData.tagline}</span>
              <h3 className="intl__cat-panel-title">{activeData.title}</h3>
              <p className="intl__cat-panel-desc">{activeData.desc}</p>
              <div className="intl__cat-destinations">
                <h5>Featured Destinations</h5>
                <div className="intl__cat-dest-chips">
                  {activeData.destinations.map((d, i) => (
                    <span key={i} className="intl__cat-chip">{d}</span>
                  ))}
                </div>
              </div>
              <a href="#intl-enquiry" className="btn-primary" style={{ marginTop: '28px', display: 'inline-flex' }}>
                Enquire About {activeData.title} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Grid */}
      <section className="intl__featured section-pad">
        <div className="container">
          <div className="intl__featured-header">
            <span className="section-tag">Featured Destinations</span>
            <h2 className="section-title">
              Where Will You
              <br /><em>Go Next?</em>
            </h2>
          </div>
          <div className="intl__dest-grid">
            {destinations.map((d, i) => (
              <a
                key={i}
                href="#intl-enquiry"
                className="intl__dest-card"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <img src={d.image} alt={d.name} loading="lazy" />
                <div className="intl__dest-card-overlay" />
                <div className="intl__dest-card-body">
                  <span className="intl__dest-card-tag">{d.tag}</span>
                  <h4 className="intl__dest-card-name">{d.name}</h4>
                  <span className="intl__dest-card-cta">Plan this trip →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="intl__how section-pad">
        <div className="intl__how-bg" />
        <div className="container intl__how-inner">
          <div className="intl__how-header">
            <span className="section-tag">The Process</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>
              How It <em>Works</em>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
              From first enquiry to final debrief, we manage everything.
            </p>
          </div>
          <div className="intl__steps">
            {steps.map((s, i) => (
              <div key={i} className="intl__step">
                <span className="intl__step-num">{s.num}</span>
                <h4 className="intl__step-title">{s.title}</h4>
                <p className="intl__step-desc">{s.desc}</p>
                {i < steps.length - 1 && <div className="intl__step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="intl__enquiry section-pad" id="intl-enquiry">
        <div className="container">
          <div className="intl__enquiry-grid">
            <div className="intl__enquiry-info">
              <span className="section-tag">Plan Your Holiday</span>
              <h2 className="section-title">
                Tell Us Where
                <br /><em>You Want to Go</em>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtitle">
                Fill in the form with as much or as little detail as you have.
                Your dedicated consultant will reach out within 24 hours to begin designing your journey.
              </p>
              <div className="intl__enquiry-contact">
                <p><strong>Email:</strong> <a href="mailto:info.ealuxetrails@gmail.com">info.ealuxetrails@gmail.com</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/254143235252">+254 143 235 252</a></p>
              </div>
            </div>

            <div className="intl__form-wrap">
              {submitted ? (
                <div className="contact__success">
                  <span className="contact__success-icon"><img src="/logo3.png" alt="East Africa Luxe Trails Logo" width={90} height={90} /></span>
                  <h3>Thank You, {form.name.split(' ')[0] || 'there'}.</h3>
                  <p>Your holiday enquiry has been received. Your dedicated consultant will be in touch within 24 hours to begin planning your journey.</p>
                </div>
              ) : (
                <form className="intl__form" onSubmit={handleSubmit}>
                  <h3 className="contact__form-title">International Holiday Enquiry</h3>

                  <div className="contact__row">
                    <div className="contact__field">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="contact__row">
                    <div className="contact__field">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 143 235 252" />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="destination">Desired Destination *</label>
                      <select id="destination" name="destination" value={form.destination} onChange={handleChange} required>
                        <option value="">Select destination...</option>
                        <optgroup label="Indian Ocean Islands">
                          <option value="Maldives">Maldives</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Mauritius">Mauritius</option>
                        </optgroup>
                        <optgroup label="Middle East">
                          <option value="Dubai">Dubai</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Jordan">Jordan & Petra</option>
                          <option value="Oman">Oman</option>
                        </optgroup>
                        <optgroup label="Europe">
                          <option value="Paris">Paris & French Riviera</option>
                          <option value="Italy">Italy & Amalfi Coast</option>
                          <option value="Switzerland">Swiss Alps</option>
                          <option value="Greece">Greek Islands</option>
                        </optgroup>
                        <optgroup label="Asia">
                          <option value="Bali">Bali & Indonesia</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Japan">Japan</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                        </optgroup>
                        <option value="Other">Other — advise me</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact__row">
                    <div className="contact__field">
                      <label htmlFor="travelDates">Travel Dates</label>
                      <input type="text" id="travelDates" name="travelDates" value={form.travelDates} onChange={handleChange} placeholder="e.g. August 2026, flexible" />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="travellers">Number of Travellers</label>
                      <input type="text" id="travellers" name="travellers" value={form.travellers} onChange={handleChange} placeholder="e.g. 2 adults, 1 child" />
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="budget">Approximate Budget (USD per person)</label>
                    <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget range...</option>
                      <option value="Under $2,000">Under $2,000</option>
                      <option value="$2,000 – $4,000">$2,000 – $4,000</option>
                      <option value="$4,000 – $7,000">$4,000 – $7,000</option>
                      <option value="$7,000 – $12,000">$7,000 – $12,000</option>
                      <option value="$12,000+">$12,000+ (ultra-luxury)</option>
                      <option value="Flexible">Flexible — show me options</option>
                    </select>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="message">Tell Us About Your Ideal Holiday *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe the kind of experience you're looking for — beach relaxation, culture, adventure, honeymoon, family trip, or a combination..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary contact__submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Holiday Enquiry'}
                    {!sending && <span>→</span>}
                  </button>

                  {error && <p className="contact__error">{error}</p>}

                  <p className="contact__privacy">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
