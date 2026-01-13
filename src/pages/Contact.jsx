import { useState } from 'react';
import { getPersonalInfo, getSocialLinks } from '../utils/siteData';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faBriefcase, faLink, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const personal = getPersonalInfo();
  const social = getSocialLinks();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS not configured - use mailto as fallback
      const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${mailtoBody}`;

      // Open mailto link
      window.location.href = mailtoLink;

      // Show info message
      setStatus('mailto');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus(''), 8000);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message_subject: formData.subject,
        message: formData.message,
        to_email: personal.email
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');

      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <section className="contact-header">
          <h1 className="page-title glitch" data-text="CONTACT ME">
            CONTACT ME
          </h1>
          <p className="page-subtitle">
            Let's connect and build something amazing together
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <Card title="SEND MESSAGE" glitch={true}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    NAME <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="YOUR NAME"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    EMAIL <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="YOUR@EMAIL.COM"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    SUBJECT <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="MESSAGE SUBJECT"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    MESSAGE <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="YOUR MESSAGE HERE..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                {status === 'sending' && (
                  <div className="form-status">
                    <div className="status-message status-sending">
                      <FontAwesomeIcon icon={faSpinner} className="fa-spin" /> Sending message...
                    </div>
                  </div>
                )}

                {status === 'success' && (
                  <div className="form-status">
                    <div className="status-message status-success">
                      <FontAwesomeIcon icon={faCheck} /> Message sent successfully! I'll get back to you soon.
                    </div>
                  </div>
                )}

                {status === 'mailto' && (
                  <div className="form-status">
                    <div className="status-message status-success">
                      <FontAwesomeIcon icon={faEnvelope} /> Opening your email client... If it doesn't open, email me at {personal.email}
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-status">
                    <div className="status-message status-error">
                      ✕ Failed to send. Please email me directly at {personal.email}
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <Button type="submit" variant="primary" size="large">
                    ▶ SEND MESSAGE
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <Card title="CONTACT INFO" className="contact-info-card">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">EMAIL</h3>
                    <a href={`mailto:${personal.email}`} className="contact-info-link">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">LOCATION</h3>
                    <p className="contact-info-text">{personal.location}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">WORK</h3>
                    <p className="contact-info-text">PhD Researcher</p>
                    <p className="contact-info-text">Blockchain & DLT</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="SOCIAL LINKS" className="social-card">
              <div className="social-links">
                <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                  <span className="social-name">GitHub</span>
                  <span className="social-arrow">→</span>
                </a>
                <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                  <span className="social-name">LinkedIn</span>
                  <span className="social-arrow">→</span>
                </a>
                <a href={social.twitter.url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                  <span className="social-name">X (Twitter)</span>
                  <span className="social-arrow">→</span>
                </a>
                <a href={social.scholar.url} target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">
                    <FontAwesomeIcon icon={faLink} />
                  </span>
                  <span className="social-name">Google Scholar</span>
                  <span className="social-arrow">→</span>
                </a>
              </div>
            </Card>

            <Card className="availability-card retro-card--glow">
              <div className="availability">
                <div className="availability-status">
                  <span className="status-indicator blink"></span>
                  <span className="status-text">AVAILABLE FOR PROJECTS</span>
                </div>
                <p className="availability-description">
                  Open to collaboration, research opportunities, and consulting.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
