import React from 'react';

export const HangarPrototype = ({ content, onOpenModal }) => {
  return (
    <section className="programs-section" id="hangar" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="hangar-block">
          {/* Header */}
          <div className="hangar-header">
            <div>
              <span className="section-label">{content.hangar.label}</span>
              <h3 className="hangar-title glow-headline">
                {content.hangar.title}
              </h3>
            </div>
            <div>
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenModal}
              >
                {content.hangar.btn}
              </button>
            </div>
          </div>

          {/* Tactical Prototype Frame */}
          <div className="hangar-frame" onClick={onOpenModal} style={{ cursor: 'pointer' }}>
            <img
              src={content.hangar.img}
              alt="Autonomous UAV Prototype Agra Vidravana"
            />
            <div className="hangar-gradient"></div>
            <div className="hangar-meta-bar">
              <p className="hangar-meta-desc">
                {content.hangar.caption}
              </p>
              <span className="hangar-badge">
                {content.hangar.badge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
