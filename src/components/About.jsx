import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const pillars = [
  { icon: '◈', title: 'Bespoke by Design', desc: 'No two itineraries are identical. Every journey begins as a blank canvas and is shaped entirely around you.' },
  { icon: '◉', title: 'Expert Local Knowledge', desc: 'Our guides are born from the landscapes they protect. Their insight transforms a game drive into a living education.' },
  { icon: '◇', title: 'Conservation-First', desc: 'A portion of every booking funds community conservation projects across Kenya, Tanzania, and Rwanda.' },
  { icon: '◎', title: 'Seamless from Start to End', desc: 'Private transfers, charter flights, handpicked properties — we manage every detail so you are free to simply be present.' },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about section-pad" id="about" ref={ref}>
      <div className="container">
        <div className={`about__grid ${visible ? 'about__grid--visible' : ''}`}>
          {/* Left: imagery */}
          <div className="about__imagery">
            <div className="about__img-main">
              <img
                src="/about1.jpeg"
                alt="Luxury safari camp at sunset"
                loading="lazy"
              />
              <div className="about__img-badge">
                <span className="about__img-badge-num">2021</span>
                <span className="about__img-badge-text">Founded in Nairobi</span>
              </div>
            </div>
            <div className="about__img-secondary">
              <img
                src="/about2.jpeg"
                alt="Safari elephants at dusk"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: copy */}
          <div className="about__copy">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">
              Africa is Not a Destination.
              <br /><em>It Is a Transformation.</em>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Founded in Nairobi in 2021, East Africa Luxe Trails is a premier luxury travel and destination management company dedicated to creating exceptional travel experiences across Africa and beyond. Built by a team of travel specialists, conservation advocates, and hospitality professionals, we believe that authentic experiences, outstanding service, and responsible tourism define truly unforgettable journeys.
            </p>
            <p className="about__para">
              From the iconic wildlife landscapes of East Africa to handpicked destinations around the world, we design tailor-made holidays that reflect each traveler's unique interests and expectations. Whether it's a luxury safari, a beach escape, cultural immersion, adventure expedition, or a bespoke international itinerary, every journey is crafted with meticulous attention to detail.
            </p>
            <p className="about__para">
              Beyond leisure travel, we specialize in Destination Management Company (DMC) services, delivering seamless logistics, corporate travel solutions, Meetings, Incentives, Conferences and Exhibitions (MICE), executive retreats, and special events with the highest standards of professionalism and local expertise.
            </p>
            <p className="about__para">
              As we continue to grow, our vision is to become a globally recognized luxury travel brand—expanding our destination portfolio, strengthening strategic partnerships, and setting new standards for personalized travel experiences while remaining committed to sustainability, innovation, and excellence.
            </p>
            <p className="about__para">
              At East Africa Luxe Trails, we don't simply plan trips—we create remarkable journeys, meaningful connections, and lasting memories wherever your next adventure takes you.
            </p>
            <div className="about__pillars">
              {pillars.map((p, i) => (
                <div className="about__pillar" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                  <span className="about__pillar-icon">{p.icon}</span>
                  <div>
                    <h4 className="about__pillar-title">{p.title}</h4>
                    <p className="about__pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
