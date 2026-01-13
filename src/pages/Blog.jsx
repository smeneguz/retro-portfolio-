import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { getBlogPosts, getBlogCategories, getPersonalInfo } from '../utils/siteData';
import { addSubscriber } from '../utils/newsletterManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faPenNib, faEnvelope, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Blog.css';

const Blog = () => {
  const blogPosts = getBlogPosts();
  const blogCategories = getBlogCategories();
  const personal = getPersonalInfo();
  const [activeCategory, setActiveCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS not configured - save to localStorage
      addSubscriber(newsletterEmail);

      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus(''), 5000);
      return;
    }

    try {
      const templateParams = {
        subscriber_email: newsletterEmail,
        to_email: personal.email,
        from_name: 'Newsletter Subscription'
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus(''), 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(''), 5000);
    }
  };

  return (
    <div className="blog-page">
      <div className="container">
        {/* Header */}
        <section className="blog-header">
          <h1 className="page-title glitch" data-text="BLOG">
            BLOG
          </h1>
          <p className="page-subtitle">
            Insights on Blockchain, DLT, and Web3
          </p>
        </section>

        {/* Filter */}
        <section className="blog-filter">
          <div className="filter-buttons">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="filter-btn__icon">◆</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="blog-posts">
          <div className="posts-count">
            <span className="text-primary">
              {filteredPosts.length}
            </span>
            {' '}POST{filteredPosts.length !== 1 ? 'S' : ''} FOUND
          </div>
          <div className="posts-list">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="blog-post-card">
                <div className="blog-post">
                  <div className="blog-post__meta">
                    <span className="blog-post__date">
                      <FontAwesomeIcon icon={faCalendar} /> {post.date}
                    </span>
                    <span className="blog-post__read-time">
                      <FontAwesomeIcon icon={faClock} /> {post.readTime}
                    </span>
                    <span className="blog-post__category">
                      {post.category.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="blog-post__title">
                    <Link to={`/blog/${post.slug}`} className="blog-post__link">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="blog-post__excerpt">{post.excerpt}</p>
                  <div className="blog-post__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="blog-post__actions">
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="primary" size="small">
                        READ MORE →
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <Card className="no-posts-card">
                <div className="no-posts-content">
                  <div className="no-posts-icon">
                    <FontAwesomeIcon icon={faPenNib} />
                  </div>
                  <h3 className="text-primary">NO POSTS FOUND</h3>
                  <p>Try selecting a different category.</p>
                  <Button variant="secondary" onClick={() => setActiveCategory('all')}>
                    SHOW ALL
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="newsletter-cta">
          <Card className="newsletter-card retro-card--glow">
            <div className="newsletter-content">
              <h2 className="newsletter-title text-primary">
                <FontAwesomeIcon icon={faEnvelope} /> SUBSCRIBE TO NEWSLETTER
              </h2>
              <p className="newsletter-description">
                Get the latest posts and updates delivered directly to your inbox.
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  className="newsletter-input"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  disabled={newsletterStatus === 'sending'}
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  disabled={newsletterStatus === 'sending'}
                >
                  {newsletterStatus === 'sending' ? (
                    <><FontAwesomeIcon icon={faSpinner} className="fa-spin" /> SENDING...</>
                  ) : (
                    'SUBSCRIBE'
                  )}
                </Button>
              </form>
              {newsletterStatus === 'success' && (
                <div className="newsletter-status status-success">
                  <FontAwesomeIcon icon={faCheck} /> Successfully subscribed! Thank you!
                </div>
              )}
              {newsletterStatus === 'error' && (
                <div className="newsletter-status status-error">
                  ✕ Subscription failed. Please try again later.
                </div>
              )}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;
