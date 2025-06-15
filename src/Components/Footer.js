import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-line" />
      <div className="footer-inner">
        <span className="footer-left">© 2025 Recepty App. Všetky práva vyhradené.</span>
        <span className="footer-right">Slovensko</span>
      </div>
    </footer>
  );
}

export default Footer;
