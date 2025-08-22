import React, { useState } from 'react';
import './Logo.css';

const Logo = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleLogoSize = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div className="logo-wrapper" onClick={toggleLogoSize}>
      <img
        src="/logo.jpg"
        alt="MBA Cleaning Logo"
        className={`main-logo ${isEnlarged ? 'enlarged' : ''}`}
      />
    </div>
  );
};

export default Logo;
