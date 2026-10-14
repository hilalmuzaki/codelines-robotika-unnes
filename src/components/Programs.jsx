import React from 'react';

export const Programs = ({ content }) => {
  const renderIcon = (type) => {
    switch (type) {
      case 'circle':
        return (
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid #e06010',
            }}
          />
        );
      case 'bars':
        return (
          <div style={{ display: 'flex', gap: '3px' }}>
            <div style={{ width: '6px', height: '14px', backgroundColor: '#e06010', borderRadius: '4px 0 0 4px' }} />
            <div style={{ width: '6px', height: '14px', backgroundColor: '#e06010', borderRadius: '4px 0 0 4px' }} />
          </div>
        );
      case 'dot':
        return (
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#e06010',
            }}
          />
        );
      case 'line':
        return (
          <div
            style={{
              width: '16px',
              height: '6px',
              backgroundColor: '#e06010',
              borderRadius: '1px',
            }}
          />
        );
      case 'rhombus':
        return (
          <div
            style={{
              width: '14px',
              height: '14px',
              border: '2px solid #e06010',
              transform: 'rotate(45deg)',
            }}
          />
        );
      default:
        return (
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#e06010',
            }}
          />
        );
    }
  };

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        {/* Header */}
        <div className="programs-header">
          <div className="programs-header-left">
            <span className="section-label">{content.programs.label}</span>
            <h2 className="glow-headline">
              {content.programs.headingLine1}
              <br />
              {content.programs.headingLine2}
            </h2>
          </div>
          <div>
            <p className="programs-header-desc">{content.programs.subtitle}</p>
          </div>
        </div>

        {/* 5 Work Program Cards */}
        <div className="programs-grid">
          {content.programs.list.map((prog) => (
            <div
              key={prog.id}
              className={`program-card ${prog.featured ? 'featured-wide' : ''}`}
            >
              <div>
                <div className="program-icon-box">{renderIcon(prog.type)}</div>
                <h3 className="program-title">{prog.title}</h3>
              </div>
              <p className="program-desc">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
