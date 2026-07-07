import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs.js';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogs.find(b => b.slug === slug);
  const others = blogs.filter(b => b.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blogpost-404">
        <h2>Article Not Found</h2>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  // Render markdown-ish content
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();
      if (!line) { i++; continue; }

      if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="blogpost__h2">{line.replace('## ', '')}</h2>);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<h4 key={i} className="blogpost__h4">{line.replace(/\*\*/g, '')}</h4>);
      } else if (line.startsWith('- ')) {
        const listItems = [];
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          listItems.push(<li key={i}>{lines[i].trim().replace('- ', '')}</li>);
          i++;
        }
        elements.push(<ul key={`ul-${i}`} className="blogpost__ul">{listItems}</ul>);
        continue;
      } else {
        // Inline bold
        const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j}>{part.replace(/\*\*/g, '')}</strong>;
          }
          return part;
        });
        elements.push(<p key={i} className="blogpost__p">{parts}</p>);
      }
      i++;
    }
    return elements;
  };

  return (
    <article className="blogpost">
      {/* Hero */}
      <div className="blogpost__hero">
        <img src={post.image} alt={post.title} />
        <div className="blogpost__hero-overlay" />
        <div className="blogpost__hero-content container">
          <span className="blogpost__category">{post.category}</span>
          <h1 className="blogpost__title">{post.title}</h1>
          <div className="blogpost__meta">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{post.authorRole}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="blogpost__breadcrumb container">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/blog">Blog</Link>
        <span>›</span>
        <span>{post.title}</span>
      </div>

      {/* Body */}
      <div className="blogpost__body container">
        <div className="blogpost__content">
          <p className="blogpost__lead">{post.excerpt}</p>
          <div className="blogpost__divider" />
          {renderContent(post.content)}
        </div>

        {/* Sidebar */}
        <aside className="blogpost__sidebar">
          <div className="blogpost__author-card">
            <div className="blogpost__author-header">
              <h4>About the Author</h4>
            </div>
            <p className="blogpost__author-name">{post.author}</p>
            <p className="blogpost__author-role">{post.authorRole}</p>
          </div>

          <div className="blogpost__cta-card">
            <span className="blogpost__cta-eyebrow">Ready to go?</span>
            <h4>Plan Your East Africa Journey</h4>
            <p>Our consultants are available to design your bespoke itinerary.</p>
            <Link to="/#contact" className="btn-primary" style={{ fontSize: '0.72rem', padding: '12px 20px' }}>
              Contact Us
            </Link>
          </div>

          <div className="blogpost__more">
            <h4>More Articles</h4>
            {others.map(other => (
              <Link to={`/blog/${other.slug}`} key={other.id} className="blogpost__more-card">
                <img src={other.image} alt={other.title} loading="lazy" />
                <div>
                  <span className="blogpost__more-cat">{other.category}</span>
                  <p className="blogpost__more-title">{other.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      {/* Back */}
      <div className="blogpost__back container">
        <Link to="/blog" className="btn-outline-green">← Back to Blog</Link>
      </div>
    </article>
  );
}
