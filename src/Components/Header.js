import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">🍲 Recepty</div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Domov</Link></li>
          <li><Link to="/recipes">Vaše recepty</Link></li>
          <li><Link to="/about">O nás</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
