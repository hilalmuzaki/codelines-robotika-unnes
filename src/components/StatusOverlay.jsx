import React, { useState, useEffect } from 'react';

export const StatusOverlay = ({ lang, setLang }) => {
  const [timeStr, setTimeStr] = useState('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${h}:${m}:${s}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Bottom Left: Language switcher */}
      <div className="status-bar-left">
        <button
          type="button"
          className={`lang-switch-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <span>/</span>
        <button
          type="button"
          className={`lang-switch-btn ${lang === 'id' ? 'active' : ''}`}
          onClick={() => setLang('id')}
        >
          ID
        </button>
      </div>

      {/* Bottom Right: Monospace Live System Time */}
      <div className="status-bar-right">
        <span>{timeStr}</span>
      </div>
    </>
  );
};
