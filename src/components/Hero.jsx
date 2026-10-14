import React from 'react';

export const Hero = ({ content, onCardClick }) => {
  return (
    <section className="hero-section">
      <div className="container" style={{ width: '100%' }}>
        {/* Cinema Headline */}
        <div className="hero-title-wrap">
          <h1 className="hero-main-title glow-headline">
            <span>{content.hero.titleLine1}</span>
            <span>{content.hero.titleLine2}</span>
          </h1>
        </div>

        {/* 4-Frame Filmstrip Gallery Grid */}
        <div className="filmstrip-grid">
          {content.hero.filmstrip.map((item) => (
            <div
              key={item.id}
              className={`filmstrip-card ${item.tall ? 'tall' : ''} ${item.grayscale ? 'grayscale-effect' : ''}`}
              onClick={() => onCardClick?.(item)}
            >
              <img src={item.img} alt={item.title} />
              {item.tintRed && <div className="tint-red"></div>}
              <div className="card-gradient"></div>
              <div className="filmstrip-caption">{item.title}</div>
            </div>
          ))}
        </div>

        {/* Hero Tagline */}
        <div className="hero-tagline">
          <p>{content.hero.tagline}</p>
        </div>
      </div>
    </section>
  );
};
