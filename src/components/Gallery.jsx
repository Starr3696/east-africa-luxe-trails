import React, { useState, useRef, useEffect } from 'react';
import './Gallery.css';

const galleryItems = [
  { id: 1, src: '/lions.jpg', alt: 'Lion on the Masai Mara', size: 'large' },
  { id: 2, src: '/elephant-sunrise.jpg', alt: 'Elephant herd at sunset', size: 'small' },
  { id: 3, src: '/elephant-sunset.jpg', alt: 'Elephants at sunrise Amboseli', size: 'small' },
  { id: 4, src: '/zanzibar.jpeg', alt: 'Zanzibar beach at dusk', size: 'medium' },
  { id: 5, src: '/serengeti .jpg', alt: 'Serengeti plains landscape', size: 'medium' },
  { id: 6, src: '/wildbeest.jpg', alt: 'Wildebeest migration river crossing', size: 'small' },
  { id: 7, src: '/rwanda-gorilla-forest.jpg', alt: 'Mountain gorilla in Rwanda forest', size: 'small' },
  { id: 8, src: '/cheetah.jpg', alt: 'Cheetah on safari', size: 'medium' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section className="gallery section-pad" id="gallery" ref={ref}>
      <div className="container">
        <div className={`gallery__header ${visible ? 'gallery__header--visible' : ''}`}>
          <div>
            <span className="section-tag">The World Awaits</span>
            <h2 className="section-title">
              A Glimpse Through
              <br /><em>the Lens</em>
            </h2>
          </div>
          <p className="section-subtitle">
            Every frame a memory. Every image a testament to the landscapes, wildlife, and moments that define an East Africa Luxe Trails journey.
          </p>
        </div>

        <div className="gallery__masonry">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery__item gallery__item--${item.size} ${visible ? 'gallery__item--visible' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__zoom">⊕</span>
                <span className="gallery__alt">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox.src.replace('w=600', 'w=1200').replace('w=700', 'w=1200').replace('w=800', 'w=1400')} alt={lightbox.alt} onClick={e => e.stopPropagation()} />
          <p className="lightbox__caption">{lightbox.alt}</p>
        </div>
      )}
    </section>
  );
}
