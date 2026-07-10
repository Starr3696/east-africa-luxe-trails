import React, { useRef, useEffect, useState } from 'react';
import './Agents.css';

const agents = [
  {
    name: 'Starford Magero',
    role: 'Head Travel Consultant & Co-Founder',
    bio: 'A co-founder of East Africa Luxe Trails, Starford combines marketing expertise with hands-on safari operations experience and formal training in Tours, Travel and Tourism. He specializes in client advisory — listening closely to what each traveler envisions and shaping it into a seamless, unforgettable journey across East Africa.',
    image: '/Starford-Magero.png',
    speciality: 'Kenya & Tanzania',
    languages: 'English, Swahili, Luhyah',
  },
  {
    name: 'Naledi Dlamini',
    role: 'East Africa Specialist',
    bio: "Naledi grew up between Nairobi and Kigali and holds a Master's in Conservation Biology. Her insider relationships with Rwanda's gorilla trekking communities mean her clients often get access that others never experience.",
    image: '/Naledi-Dlamini.jpg',
    speciality: 'Rwanda & Uganda',
    languages: 'English, French, Kinyarwanda',
  },
  {
    name: 'Kamau Njoroge',
    role: 'Luxury Travel Consultant',
    bio: "With a decade in five-star hospitality before joining our team, Kamau's strength is pairing clients with precisely the right property. He has personally stayed at every lodge in our portfolio and reviews them with forensic attention to detail.",
    image: '/Kamau-Njoroge.jpg',
    speciality: 'Lodges & Camps',
    languages: 'English, Swahili',
  },
  {
    name: 'Zara Mohammed',
    role: 'Co-Founder & Client Advisory Lead',
    bio: 'Zara was raised in Stone Town, Zanzibar, and her love of the coast is matched only by her knowledge of the Serengeti\'s seasonal rhythms. She designs itineraries that move effortlessly between bush and beach.',
    image: '/Zara-Mohammed.jpg',
    speciality: 'Client Advisory & Marketing',
    languages: 'English, Swahili',
  },
];

function ConsultantModal({ agent, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const firstName = agent.name.split(' ')[0];
  const waMessage = encodeURIComponent(`Hello ${firstName}, I'd like to enquire about a safari with East Africa Luxe Trails.`);
  const emailSubject = encodeURIComponent(`Safari Consultation Request — ${agent.name}`);
  const emailBody = encodeURIComponent(`Hello ${firstName},\n\nI'd like to speak with you about planning a safari with East Africa Luxe Trails.\n\nThank you.`);

  return (
    <div className="consult-modal" onClick={onClose}>
      <div className="consult-modal__box" onClick={e => e.stopPropagation()}>
        <button className="consult-modal__close" onClick={onClose}>✕</button>

        <div className="consult-modal__header">
          <img src={agent.image} alt={agent.name} className="consult-modal__agent-img" />
          <h3 className="consult-modal__title">Consult with {firstName}</h3>
          <p className="consult-modal__role">{agent.role}</p>
          <p className="consult-modal__sub">
            Reach {firstName} directly on WhatsApp for the fastest response, or send an email for detailed enquiries.
          </p>
        </div>

        <div className="consult-modal__options">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/254143235252?text=${waMessage}`}
            className="consult-modal__option consult-modal__option--wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="consult-modal__option-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
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

          {/* Email */}
          <a
            href={`mailto:info.ealuxetrails@gmail.com?subject=${emailSubject}&body=${emailBody}`}
            className="consult-modal__option consult-modal__option--email"
          >
            <div className="consult-modal__option-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
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
          <span>Mon–Sat, 8am – 6pm EAT</span>
          <span>·</span>
          <span>Karen, Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  );
}

export default function Agents() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="agents section-pad" id="agents" ref={ref}>
      <div className="container">
        <div className={`agents__header ${visible ? 'agents__header--visible' : ''}`}>
          <span className="section-tag">Meet the Team</span>
          <h2 className="section-title">
            The People Who Know
            <br /><em>Africa Intimately</em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Our consultants are not travel agents in the conventional sense. They are naturalists, conservationists, and storytellers who happen to be outstanding at logistics.
          </p>
        </div>

        <div className="agents__grid">
          {agents.map((agent, i) => (
            <div
              key={agent.name}
              className={`agent-card ${visible ? 'agent-card--visible' : ''}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="agent-card__img">
                <img src={agent.image} alt={agent.name} loading="lazy" />
                <div className="agent-card__img-overlay" />
              </div>
              <div className="agent-card__body">
                <h3 className="agent-card__name">{agent.name}</h3>
                <p className="agent-card__role">{agent.role}</p>
                <div className="agent-card__divider" />
                <p className="agent-card__bio">{agent.bio}</p>
                <div className="agent-card__meta">
                  <div className="agent-card__meta-item">
                    <span className="agent-card__meta-label">Speciality</span>
                    <span className="agent-card__meta-val">{agent.speciality}</span>
                  </div>
                  <div className="agent-card__meta-item">
                    <span className="agent-card__meta-label">Languages</span>
                    <span className="agent-card__meta-val">{agent.languages}</span>
                  </div>
                </div>
                <button
                  className="agent-card__contact btn-outline-green"
                  onClick={() => setSelectedAgent(agent)}
                >
                  Consult with {agent.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAgent && (
        <ConsultantModal
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </section>
  );
}
