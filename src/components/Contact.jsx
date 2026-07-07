import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const FORMSPREE_URL = 'https://formspree.io/f/mjgddylq';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
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
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or contact us directly on WhatsApp.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section-pad" id="contact" ref={ref}>
      <div className="container">
        <div className={`contact__grid ${visible ? 'contact__grid--visible' : ''}`}>

          {/* Info Side */}
          <div className="contact__info">
            <span className="section-tag">Begin Your Journey</span>
            <h2 className="section-title">
              Let's Plan Something
              <br /><em>Extraordinary</em>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Whether you have a fully formed vision or a single dream destination, our consultants will shape it into an itinerary that exceeds your expectations. Enquiries typically receive a response within 24 hours.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">◈</span>
                <div>
                  <span className="contact__detail-label">Email Us</span>
                  <a href="mailto:info.ealuxetrails@gmail.com" className="contact__detail-val">
                    info.ealuxetrails@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">◉</span>
                <div>
                  <span className="contact__detail-label">Call or WhatsApp</span>
                  <a href="tel:+254143235252" className="contact__detail-val">+254 143 235 252</a>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">◇</span>
                <div>
                  <span className="contact__detail-label">Head Office</span>
                  <span className="contact__detail-val">Karen, Nairobi, Kenya</span>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">◎</span>
                <div>
                  <span className="contact__detail-label">Office Hours</span>
                  <span className="contact__detail-val">Mon–Sat, 8am – 6pm EAT</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/254143235252?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20luxury%20safari%20with%20East%20Africa%20Luxe%20Trails."
              className="contact__whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form Side */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon"><img src="/logo3.png" alt="East Africa Luxe Trails brand logo displayed above the contact success message" width={90} height={90} /></span>
                <h3>Thank You, {form.name.split(' ')[0]}.</h3>
                <p>Your enquiry has been received. One of our consultants will be in touch within 24 hours to begin planning your journey.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Send an Enquiry</h3>

                {/* Row 1: Name + Email */}
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Destination */}
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+254 143 235 252"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="interest">Area of Interest</label>
                    <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                      <option value="">Select a destination...</option>
                      <option value="Kenya">Kenya Safari</option>
                      <option value="Tanzania">Tanzania & Serengeti</option>
                      <option value="Rwanda">Rwanda Gorilla Trek</option>
                      <option value="Zanzibar">Zanzibar Island</option>
                      <option value="Multi-country">Multi-Country Journey</option>
                      <option value="Investment">Investment Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="contact__field">
                  <label htmlFor="message">Tell Us About Your Dream Journey *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your ideal travel dates, group size, interests, and any specific experiences you have in mind..."
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary contact__submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Enquiry'}
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
  );
}
