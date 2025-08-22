import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        <button onClick={() => scrollToSection('about-section')}>About Us</button>
        <button onClick={() => scrollToSection('cleaning-services-section')}>Cleaning Services</button>
        <button onClick={() => scrollToSection('vegetation-services-section')}>Vegetation Services</button>
        <button onClick={() => scrollToSection('gallery-section')}>Gallery</button>
        <button onClick={() => scrollToSection('reviews-section')}>Reviews</button>
        <button onClick={() => scrollToSection('contact-section')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
