import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs.js';
import './BlogPage.css';

export default function BlogPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="blogpage">
      <div className="blogpage__hero">
        <div className="blogpage__hero-overlay" />
        <div className="container blogpage__hero-content">
          <span className="section-tag">Field Notes & Stories</span>
          <h1 className="blogpage__title">From the Heart of Africa</h1>
          <p className="blogpage__subtitle">
            Guides, insights, and stories from our naturalists, guides, and travel specialists.
          </p>
        </div>
      </div>

      <div className="container blogpage__body">
        <div className="blogpage__grid">
          {blogs.map((post, i) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="blogpage__card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="blogpage__card-img">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blogpage__card-cat">{post.category}</span>
              </div>
              <div className="blogpage__card-body">
                <div className="blogpage__card-meta">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="blogpage__card-title">{post.title}</h3>
                <p className="blogpage__card-excerpt">{post.excerpt}</p>
                <span className="blogpage__card-read">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="blogpage__cta">
          <span className="section-tag">Ready to Go?</span>
          <h2 className="section-title">Start Planning Your Safari</h2>
          <p className="section-subtitle">
            Our consultants are ready to turn inspiration into your itinerary.
          </p>
          <Link to="/#contact" className="btn-primary" style={{ marginTop: '24px' }}>
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  );
}
