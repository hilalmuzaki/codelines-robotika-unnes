import React, { useState } from 'react';

export const Contact = ({ content, lang = 'id' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileAttached, setFileAttached] = useState(null);

  const isId = lang === 'id' || content?.contact?.heading?.toLowerCase().includes('kirimkan');
  const headingWords = content.contact.heading.split(' ');
  const line1 = headingWords.slice(0, 2).join(' ');
  const line2 = headingWords.slice(2).join(' ');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileAttached(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', interest: '', message: '' });
      setFileAttached(null);
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Context & Info */}
          <div className="contact-info-column">
            <div>
              <span className="section-label">{content.contact.label}</span>
              <h2
                className={`section-heading-huge glow-headline contact-heading ${isId ? 'contact-heading-id' : ''}`}
                style={{ marginBottom: 0 }}
              >
                <span className="contact-heading-line">{line1}</span>
                <br />
                <span className="contact-heading-line">{line2}</span>
              </h2>
            </div>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <span className="meta-label">{content.contact.hqLabel}</span>
                <p className="meta-value">{content.contact.hqValue}</p>
                <span className="meta-subvalue">{content.contact.hqSub}</span>
              </div>

              <div className="contact-meta-item">
                <span className="meta-label">{content.contact.picLabel}</span>
                <p className="meta-value">{content.contact.picName}</p>
                <a
                  href={`https://wa.me/6281225735949`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-link meta-subvalue"
                >
                  {content.contact.picPhone}
                </a>
              </div>

              <div className="contact-meta-item">
                <span className="meta-label">{content.contact.emailLabel}</span>
                <a href={`mailto:${content.contact.emailValue}`} className="meta-value meta-link">
                  {content.contact.emailValue}
                </a>
              </div>

              <div className="contact-meta-item">
                <span className="meta-label">{content.contact.socialLabel}</span>
                <a
                  href="https://instagram.com/robotikaunnes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-value meta-link"
                >
                  {content.contact.socialValue}
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Pill Button */}
            <div>
              <a
                href="https://wa.me/6281225735949?text=Halo%20Robotika%20UNNES,%20saya%20tertarik%20untuk%20berkolaborasi."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-pill-btn"
              >
                <span className="pulsing-dot"></span>
                <span>{content.contact.chatWa}</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div>
            {submitted && (
              <div className="form-alert-success" style={{ marginBottom: '1.5rem' }}>
                ✓ {content.contact.form.success}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={content.contact.form.name}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={content.contact.form.email}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <input
                  type="text"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  placeholder={content.contact.form.interest}
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  placeholder={content.contact.form.message}
                  rows={4}
                  required
                  className="form-textarea"
                />
                <div className="char-counter">
                  {1000 - formData.message.length} symbols left
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <label className="upload-button">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>{content.contact.form.upload}</span>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    style={{ display: 'none' }}
                  />
                </label>
                {fileAttached && (
                  <span style={{ fontSize: '0.72rem', color: '#4ade80', fontFamily: 'var(--font-mono)' }}>
                    📎 {fileAttached}
                  </span>
                )}
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <button type="submit" className="btn-submit-wide">
                  {content.contact.form.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
