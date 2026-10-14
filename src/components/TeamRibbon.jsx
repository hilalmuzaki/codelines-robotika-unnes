import React from 'react';

export const TeamRibbon = ({ content }) => {
  return (
    <div className="team-ribbon-section">
      <div className="container">
        <div className="team-ribbon-text">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem 0.85rem' }}>
            <span className="glow-headline-red">{content.teamRibbon.text1}</span>
            <span className="avatar-badge-inline" title="Research Division Discussion">
              <img src={content.teamRibbon.avatars[0]} alt="Delegasi Robotika UNNES" />
            </span>
            <span className="glow-headline" style={{ color: '#ffffff' }}>{content.teamRibbon.text2}</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem 0.85rem', marginTop: '0.85rem' }}>
            <span className="glow-headline" style={{ color: '#ffffff' }}>{content.teamRibbon.text3}</span>
            <span className="avatar-badge-inline" title="Cohort Collaboration">
              <img src={content.teamRibbon.avatars[1]} alt="Kolaborasi Robotika UNNES" />
            </span>
            <span className="glow-headline-red">{content.teamRibbon.text4}</span>
            <span className="avatar-badge-inline" title="Delegation Review & Field Testing">
              <img src={content.teamRibbon.avatars[2]} alt="Field Testing Robotika" />
            </span>
            <span className="glow-headline" style={{ color: '#ffffff' }}>{content.teamRibbon.text5}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
