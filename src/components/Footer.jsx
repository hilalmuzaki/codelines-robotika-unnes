import React from 'react';

export const Footer = ({ content }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>ROBOTIKA UNNES</strong>
          <span>•</span>
          <span>UKM RIPTEK</span>
        </div>

        <div className="footer-social-links">
          <a href="https://instagram.com/robotikaunnes" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com/@robotikaunnes" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href="https://youtube.com/@robotikaunnes" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>

        <div>
          <span>{content.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
