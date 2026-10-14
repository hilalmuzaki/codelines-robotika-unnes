import React from 'react';

export const About = ({ content }) => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Label */}
        <span className="section-label">{content.about.label}</span>

        {/* Heading */}
        <h2 className="section-heading-huge glow-headline">
          {content.about.heading.split('&').map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {index > 0 ? `& ${part.trim()}` : part.trim()}
            </React.Fragment>
          ))}
        </h2>

        {/* 12-Column Grid */}
        <div className="about-grid">
          {/* Left Visual Container */}
          <div className="about-visual-box">
            <div className="about-visual-layer-1"></div>
            <div className="about-visual-layer-2"></div>
            <div className="about-image-wrapper">
              <img
                src={content.about.image}
                alt="Laboratorium Robotika UNNES"
              />
              <div className="about-image-gradient"></div>
            </div>
          </div>

          {/* Right Content & Numbered Missions */}
          <div className="about-content-column">
            {/* Vision & About text */}
            <div className="vision-box">
              <span className="category-tag">{content.about.visionTag}</span>
              <p className="about-paragraph">{content.about.description}</p>
              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <p className="about-paragraph" style={{ color: '#ffffff', fontWeight: '700' }}>
                  {content.about.vision}
                </p>
              </div>
            </div>

            {/* Missions 01, 02, 03 */}
            <div className="missions-stack">
              {content.about.missions.map((m) => (
                <div key={m.num} className="mission-item">
                  <span className="mission-number">{m.num}</span>
                  <h3 className="mission-title">{m.title}</h3>
                  <p className="mission-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
