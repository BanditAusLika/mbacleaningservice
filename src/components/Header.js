import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="about-section" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="cleaning-services-section" smooth={true} duration={500}>
              Cleaning Services
            </Link>
          </li>
          <li>
            <Link to="vegetation-services-section" smooth={true} duration={500}>
              Vegetation Services
            </Link>
          </li>
          <li>
            <Link to="gallery-section" smooth={true} duration={500}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="contact-section" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
