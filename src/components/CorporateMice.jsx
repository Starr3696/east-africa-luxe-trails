import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CorporateMice.css';

const FORMSPREE_URL = 'https://formspree.io/f/mjgddylq';

const destinations = [
  {
    id: 'kenya',
    country: 'Kenya',
    city: 'Nairobi & Lake Naivasha',
    tag: 'Primary Gateway',
    image: '/Kenya.jpeg',
    blurb:
      "Nairobi is East Africa's primary corporate gateway — combining international connectivity, executive hotels, and regional headquarters for multinationals and NGOs. Pair it with Lake Naivasha, just two hours away, for cost-effective team-building and leadership retreats with no domestic flights required.",
    venues: [
      'Kenyatta International Convention Centre',
      'Villa Rosa Kempinski',
      'Radisson Blu Hotel Nairobi Upper Hill',
      'Enashipai Resort & Spa',
      'Great Rift Valley Lodge & Golf Resort',
    ],
    bestFor: [
      'International Conferences',
      'NGO & Multinational HQ Meetings',
      'Leadership Retreats',
      'Team-Building Workshops',
    ],
    available: true,
  },
  {
    id: 'rwanda',
    country: 'Rwanda',
    city: 'Kigali',
    tag: 'Fast-Growing MICE Hub',
    image: '/Rwanda.jpeg',
    blurb:
      "Kigali has emerged as one of Africa's most efficient and secure conference destinations, home to the Kigali Convention Centre and a growing base of pan-African institutions. Pair a corporate meeting with a once-in-a-lifetime gorilla trekking excursion to give delegates an unforgettable add-on experience.",
    venues: [
      'Kigali Convention Centre',
      'Kigali Marriott Hotel',
      'Radisson Blu Hotel Kigali',
      'Serena Hotel Kigali',
    ],
    bestFor: [
      'Pan-African Conferences',
      'Diplomatic & UN Agency Meetings',
      'Executive Retreats with Gorilla Trekking',
      'Board Strategy Sessions',
    ],
    available: true,
  },
  {
    id: 'ethiopia',
    country: 'Ethiopia',
    city: 'Addis Ababa',
    tag: 'African Union Hub',
    image: '/Ethiopia.jpeg',
    blurb:
      "Home to the African Union headquarters and a hub for diplomatic and pan-African gatherings, Addis Ababa is one of the continent's most established MICE destinations. Its growing hospitality infrastructure, direct international flights, and cultural depth make it an outstanding choice for high-level corporate events.",
    venues: [
      'African Union Conference Centre',
      'Sheraton Addis Hotel',
      'Hilton Addis Ababa',
      'Hyatt Regency Addis Ababa',
    ],
    bestFor: [
      'AU & Diplomatic Meetings',
      'Pan-African Summits',
      'Executive Cultural Immersion',
      'Government & Multilateral Events',
    ],
    available: true,
  },
  {
    id: 'cape-town',
    country: 'South Africa',
    city: 'Cape Town',
    tag: 'World-Class Venue City',
    image: '/South Africa.jpeg',
    blurb:
      "Cape Town consistently ranks among the world's top MICE destinations — combining the iconic Cape Town International Convention Centre, world-class hotels, and extraordinary leisure add-ons including wine estates, Table Mountain, and the Cape Winelands for memorable incentive experiences.",
    venues: [
      'Cape Town International Convention Centre (CTICC)',
      'One&Only Cape Town',
      'The Table Bay Hotel',
      'Radisson Blu Hotel Waterfront',
      'Belmond Mount Nelson Hotel',
    ],
    bestFor: [
      'Large-Scale International Conferences',
      'Incentive Travel & Wine Estate Retreats',
      'Executive Team-Building',
      'Corporate Galas & Awards Events',
    ],
    available: true,
  },
];

const programmes = [
  { title: 'Conferences & Summits', desc: 'Full-scale international conferences with delegate management, AV production, and multi-day programming.' },
  { title: 'Incentive Travel', desc: 'Performance-reward trips that combine business sessions with safari, beach, or cultural experiences.' },
  { title: 'Executive Retreats', desc: 'Board strategy sessions and leadership think tanks in private, distraction-free luxury settings.' },
  { title: 'Team-Building Programmes', desc: 'Activity-based retreats designed around collaboration, morale, and shared experiences.' },
  { title: 'NGO & Diplomatic Meetings', desc: 'Secure, efficient logistics for multilateral and diplomatic gatherings across all four countries.' },
  { title: 'Transit & Stopover Packages', desc: 'Short Nairobi or Cape Town layover experiences for delegates connecting through Africa.' },
];

export default function CorporateMice() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ company: '', contactName: '', email: '', phone: '', eventType: '', destination: '', delegates: '', dates: '', message: '' });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
        body: JSON.stringify({ formType: 'Corporate & MICE Enquiry', ...form }),
      });
      if (res.ok) { setSubmitted(true); }
      else { setError('Something went wrong. Please try again or contact us directly on WhatsApp.'); }
    } catch { setError('Network error. Please check your connection and try again.'); }
    finally { setSending(false); }
  };

  return (
    <div className="mice">

      {/* Hero */}
      <section className="mice__hero">
        <div className="mice__hero-overlay" />
        <div className="container mice__hero-content">
          <span className="section-tag">Corporate, MICE & Transit Leisure</span>
          <h1 className="mice__hero-title">
            Where Business Meets
            <br /><em>the Extraordinary</em>
          </h1>
          <p className="mice__hero-sub">
            East Africa Luxe Trails designs and operates corporate retreats, conferences, incentive travel,
            and MICE programmes across Kenya, Rwanda, Ethiopia, and South Africa — pairing world-class
            meeting infrastructure with experiences only Africa can offer.
          </p>
          <div className="mice__hero-actions">
            <a href="#mice-enquiry" className="btn-primary">Request a Proposal →</a>
            <a href="#mice-destinations" className="btn-secondary">Explore Destinations</a>
          </div>
        </div>

        {/* Floating destination pills */}
        <div className="mice__hero-pills">
          {[
            { name: 'Nairobi', country: 'Kenya', desc: 'Corporate Gateway' },
            { name: 'Kigali', country: 'Rwanda', desc: 'MICE Hub' },
            { name: 'Addis Ababa', country: 'Ethiopia', desc: 'AU Hub' },
            { name: 'Cape Town', country: 'South Africa', desc: 'Convention City' },
          ].map((dest, i) => (
            <div key={i} className="mice__hero-pill" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
              <span className="mice__hero-pill-dot" />
              <div>
                <span className="mice__hero-pill-name">{dest.name}</span>
                <span className="mice__hero-pill-sub">{dest.country} · {dest.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why East Africa for MICE */}
      <section className="mice__why section-pad">
        <div className="container">
          <div className={`mice__why-grid ${visible ? 'mice__why-grid--visible' : ''}`} ref={ref}>
            <div>
              <span className="section-tag">Why Africa</span>
              <h2 className="section-title">
                A Region Built for
                <br /><em>Serious Business</em>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtitle">
                Africa combines international connectivity, modern conference infrastructure, and
                some of the world's most compelling leisure add-ons — making it one of the most
                efficient regions globally for corporate gatherings that deliver more than a boardroom.
              </p>
            </div>
            <div className="mice__why-points">
              {[
                { icon: '◈', title: 'International Connectivity', desc: 'Direct flights into Nairobi, Kigali, Addis Ababa, and Cape Town from major global hubs, with efficient regional connections between all four.' },
                { icon: '◉', title: 'World-Class Venues', desc: 'From the Kenyatta International Convention Centre to the Cape Town CTICC — purpose-built facilities for groups of all sizes.' },
                { icon: '◇', title: 'Unmatched Leisure Add-Ons', desc: 'Pair a conference with a Maasai Mara safari, Rwanda gorilla trek, or Cape Winelands excursion — incentive travel no other region can rival.' },
                { icon: '◎', title: 'Full-Service Logistics', desc: 'We handle venue sourcing, accommodation blocks, transfers, translators, and on-ground coordination from start to end.' },
              ].map((p, i) => (
                <div className="mice__why-point" key={i}>
                  <span className="mice__why-icon">{p.icon}</span>
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

      {/* Destinations */}
      <section className="mice__destinations section-pad" id="mice-destinations">
        <div className="container">
          <div className="mice__destinations-header">
            <span className="section-tag">Our Corporate Destinations</span>
            <h2 className="section-title">
              Four Countries,
              <br /><em>One Seamless Programme</em>
            </h2>
            <p className="section-subtitle">
              Each destination is selected for its specific strengths — from Nairobi's corporate infrastructure
              to Kigali's efficiency, Addis Ababa's diplomatic significance, and Cape Town's world-class convention facilities.
            </p>
          </div>

          <div className="mice__dest-grid">
            {destinations.map((d, i) => (
              <div className="mice__dest-card" key={d.id} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="mice__dest-img">
                  <img src={d.image} alt={`${d.country} corporate destination`} loading="lazy" />
                  <div className="mice__dest-overlay" />
                  <span className="mice__dest-tag">{d.tag}</span>
                </div>
                <div className="mice__dest-body">
                  <h3 className="mice__dest-country">{d.country}</h3>
                  <p className="mice__dest-city">{d.city}</p>
                  <p className="mice__dest-blurb">{d.blurb}</p>

                  <h5 className="mice__dest-subhead">Featured Venues & Properties</h5>
                  <ul className="mice__dest-list">
                    {d.venues.map((v, j) => <li key={j}>{v}</li>)}
                  </ul>

                  <h5 className="mice__dest-subhead">Ideal For</h5>
                  <div className="mice__dest-chips">
                    {d.bestFor.map((b, j) => <span className="mice__dest-chip" key={j}>{b}</span>)}
                  </div>

                  <a href="#mice-enquiry" className="btn-outline-green mice__dest-cta">
                    Enquire About {d.country}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme types */}
      <section className="mice__programmes section-pad">
        <div className="mice__programmes-bg" />
        <div className="container mice__programmes-inner">
          <span className="section-tag">Programme Types</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Built Around <em>Your Objective</em>
          </h2>
          <div className="gold-divider" />
          <div className="mice__programme-grid">
            {programmes.map((p, i) => (
              <div className="mice__programme-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="mice__programme-num">{String(i + 1).padStart(2, '0')}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="mice__enquiry section-pad" id="mice-enquiry">
        <div className="container">
          <div className="mice__enquiry-grid">
            <div className="mice__enquiry-info">
              <span className="section-tag">Request a Proposal</span>
              <h2 className="section-title">
                Let's Design Your
                <br /><em>Corporate Programme</em>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtitle">
                Tell us about your event and our corporate travel specialists will prepare a tailored
                proposal — including venue options, accommodation, logistics, and optional leisure add-ons.
              </p>
              <div className="mice__enquiry-contact">
                <p><strong>Email:</strong> <a href="mailto:info.ealuxetrails@gmail.com">info.ealuxetrails@gmail.com</a></p>
                <p><strong>Phone / WhatsApp:</strong> <a href="tel:+254143235252">+254 143 235 252</a></p>
              </div>
            </div>

            <div className="mice__enquiry-form-wrap">
              {submitted ? (
                <div className="contact__success">
                  <span className="contact__success-icon"><img src="/logo3.png" alt="East Africa Luxe Trails circular brand logo above the enquiry confirmation message on the corporate contact form" width={90} height={90} /></span>
                  <h3>Thank You, {form.contactName.split(' ')[0] || 'there'}.</h3>
                  <p>Your corporate enquiry has been received. Our MICE specialists will respond within 24 hours with a tailored proposal.</p>
                </div>
              ) : (
                <form className="mice__form" onSubmit={handleSubmit}>
                  <h3 className="contact__form-title">Corporate & MICE Enquiry</h3>

                  <div className="contact__row">
                    <div className="contact__field">
                      <label htmlFor="company">Company / Organisation *</label>
                      <input type="text" id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your organisation" required />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="contactName">Contact Person *</label>
                      <input type="text" id="contactName" name="contactName" value={form.contactName} onChange={handleChange} placeholder="Full name" required />
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
                      <label htmlFor="eventType">Event Type *</label>
                      <select id="eventType" name="eventType" value={form.eventType} onChange={handleChange} required>
                        <option value="">Select event type...</option>
                        <option value="Conference / Summit">Conference / Summit</option>
                        <option value="Incentive Travel">Incentive Travel</option>
                        <option value="Executive Retreat">Executive Retreat</option>
                        <option value="Team-Building">Team-Building Programme</option>
                        <option value="NGO / Diplomatic Meeting">NGO / Diplomatic Meeting</option>
                        <option value="Transit / Stopover">Transit / Stopover Package</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="contact__field">
                      <label htmlFor="destination">Preferred Destination *</label>
                      <select id="destination" name="destination" value={form.destination} onChange={handleChange} required>
                        <option value="">Select destination...</option>
                        <option value="Kenya - Nairobi">Kenya — Nairobi</option>
                        <option value="Kenya - Naivasha">Kenya — Lake Naivasha</option>
                        <option value="Rwanda - Kigali">Rwanda — Kigali</option>
                        <option value="Ethiopia - Addis Ababa">Ethiopia — Addis Ababa</option>
                        <option value="South Africa - Cape Town">South Africa — Cape Town</option>
                        <option value="Not sure / Advise me">Not sure — advise me</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact__row">
                    <div className="contact__field">
                      <label htmlFor="delegates">Number of Delegates</label>
                      <input type="text" id="delegates" name="delegates" value={form.delegates} onChange={handleChange} placeholder="e.g. 25–30" />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="dates">Preferred Dates</label>
                      <input type="text" id="dates" name="dates" value={form.dates} onChange={handleChange} placeholder="e.g. March 2027, flexible" />
                    </div>
                  </div>

                  <div className="contact__field">
                    <label htmlFor="message">Tell Us More About Your Event *</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Describe your event objectives, required facilities, accommodation needs, and any leisure add-ons of interest..." rows={5} required />
                  </div>

                  <button type="submit" className="btn-primary contact__submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Request Proposal'}
                    {!sending && <span>→</span>}
                  </button>

                  {error && <p className="contact__error">{error}</p>}

                  <p className="contact__privacy">We respect your privacy and will never share your information.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
