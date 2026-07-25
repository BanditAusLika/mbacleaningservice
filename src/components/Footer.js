import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} MBA Cleaning and Vegetation Services. All rights reserved.
      </p>
      <p>
        MBA Cleaning and Vegetation Services
      </p>
    </footer>
  );
};

export default Footer;
