import React, { useEffect } from 'react';

export const ProjectModal = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Modal Header */}
        <div className="modal-header-block">
          <span className="section-label" style={{ color: '#FF1E27', marginBottom: '0.25rem' }}>
            {content.hangar.badge}
          </span>
          <h2 className="modal-main-title glow-headline">
            {content.hangar.title}
          </h2>
          <p className="modal-caption-text">
            {content.hangar.caption}
          </p>
        </div>

        {/* Telemetry & Spec Grid */}
        <div className="telemetry-grid">
          {content.hangar.specs.map((item, idx) => (
            <div key={idx} className="telemetry-item">
              <span className="t-label">{item.label}</span>
              <span className="t-value">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Tactical Overview & Footer */}
        <div className="modal-footer-bar">
          <div className="modal-status-badge">
            <span className="pulsing-dot"></span>
            <span className="modal-status-text">
              SYSTEM STATUS: READY FOR MISSION
            </span>
          </div>

          <a
            href="#contact"
            className="btn-primary modal-cta-btn"
            onClick={onClose}
          >
            HUBUNGI DIVISI RISET
          </a>
        </div>
      </div>
    </div>
  );
};
