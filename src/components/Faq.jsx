import React, { useState } from 'react';

export const Faq = ({ content }) => {
  // Default open first question
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndex = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {/* Header */}
        <div className="faq-header">
          <span className="section-label">{content.faq.label}</span>
          <h2 className="section-heading-huge glow-headline">
            {content.faq.heading.split(' ').slice(0, 2).join(' ')}
            <br />
            {content.faq.heading.split(' ').slice(2).join(' ')}
          </h2>
        </div>

        {/* Accordion list */}
        <div className="faq-accordion-list">
          {content.faq.items.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleIndex(idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question-text">{item.q}</h3>
                  <span className="faq-toggle-icon">+</span>
                </div>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
