// src/components/Gallery/Gallery.js

import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { mediaFiles } from './mediaData';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const isVideo = (file) => file.endsWith('.mp4');

  const openLightbox = (file) => {
    setSelectedMedia(file);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="gallery-section-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {mediaFiles.map((file, index) => (
          <button
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(file)}
            aria-label={`Open media ${index + 1}`}
          >
            {isVideo(file) ? (
              <video
                src={`${process.env.PUBLIC_URL}/${file}`}
                className="gallery-item-media"
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/${file}`}
                alt={`Gallery ${index + 1}`}
                className="gallery-item-media"
                loading="lazy"
              />
            )}
          </button>
        ))}
      </div>

      {selectedMedia && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            {isVideo(selectedMedia) ? (
              <video
                src={`${process.env.PUBLIC_URL}/${selectedMedia}`}
                controls
                autoPlay
                className="lightbox-media"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/${selectedMedia}`}
                alt="Enlarged"
                className="lightbox-media"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
