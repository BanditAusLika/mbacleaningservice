import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} MBA Cleaning and Vegetation Services. All rights reserved.
      </p>
      <p>
        Made by <a href="https://mftgworks.org" target="_blank" rel="noopener noreferrer">MFTG</a>
      </p>
    </footer>
  );
};

export default Footer;
