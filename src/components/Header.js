import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Bhavya Patel</h1>
      <h2>Welcome to My Portfolio</h2>
      <div className="links">
        <a href="https://www.linkedin.com/in/bhavya-patel-codes/" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://example.com/your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume ↗
        </a>
      </div>
    </header>
  );
}

export default Header;