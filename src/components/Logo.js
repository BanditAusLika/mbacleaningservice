import React, { useState } from 'react';
import './Logo.css';

function Logo() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleLogoClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo.jpg`}
      alt="Company Logo"
      className={`centered-logo ${isEnlarged ? 'enlarged' : ''}`}
      onClick={handleLogoClick}
    />
  );
}

export default Logo;
