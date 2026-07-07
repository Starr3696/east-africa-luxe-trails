import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs.js';
import './Blog.css';

export default function Blog() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const featured = blogs[0];
  const rest = blogs.slice(1, 4);

  return (
    <section className="blog section-pad" id="blog" ref={ref}>
      <div className="container">
        <div className={`blog__header ${visible ? 'blog__header--visible' : ''}`}>
          <div>
            <span className="section-tag">Field Notes</span>
            <h2 className="section-title">
              Stories from the
              <br /><em>African Frontier</em>
            </h2>
          </div>
          <Link to="/blog" className="btn-outline-green">
            All Articles →
          </Link>
        </div>

        <div className="blog__layout">
          {/* Featured */}
          <Link
            to={`/blog/${featured.slug}`}
            className={`blog-featured ${visible ? 'blog-featured--visible' : ''}`}
          >
            <div className="blog-featured__img">
              <img src={featured.image} alt={featured.title} loading="lazy" />
              <div className="blog-featured__overlay" />
              <span className="blog-featured__cat">{featured.category}</span>
            </div>
            <div className="blog-featured__body">
              <div className="blog-featured__meta">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
                <span>·</span>
                <span>{featured.author}</span>
              </div>
              <h3 className="blog-featured__title">{featured.title}</h3>
              <p className="blog-featured__excerpt">{featured.excerpt}</p>
              <span className="blog-featured__read">Read Article →</span>
            </div>
          </Link>

          {/* Side cards */}
          <div className="blog__side">
            {rest.map((post, i) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.id}
                className={`blog-card ${visible ? 'blog-card--visible' : ''}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="blog-card__img">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__cat">{post.category}</span>
                  <h4 className="blog-card__title">{post.title}</h4>
                  <div className="blog-card__meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
