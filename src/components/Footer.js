import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} MBA Cleaning Services. All rights reserved.
      </p>
      <p>
        MBA Cleaning Services
      </p>
    </footer>
  );
};

export default Footer;
