import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [lightboxItem, setLightboxItem] = useState(null);

  const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
    '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg',
    '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
    '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg',
    '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
    '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg',
    '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
    '51.jpg', '52.jpg', '53.jpg', '54.jpg', '55.jpg',
    '56.jpg', '57.jpg', 'veg1.jpg', 'veg2.jpg',
    'veg3.jpg', 'veg4.jpg'
  ];

  const videos = [
    'vid1.mp4', 'vid2.mp4', 'vid3.mp4', 'vid4.mp4'
  ];

  const openLightbox = (item, type) => {
    setLightboxItem({ item, type });
  };

  const closeLightbox = (e) => {
    if (e.target.className === 'lightbox' || e.target.className === 'close-button') {
      setLightboxItem(null);
    }
  };

  return (
    <section id="gallery-section" className="gallery-container">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={`img-${index}`}
            src={`${process.env.PUBLIC_URL}/images/gallery/${src}`}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openLightbox(src, 'image')}
          />
        ))}
        {videos.map((src, index) => (
          <div
            key={`vid-${index}`}
            className="video-thumbnail"
            onClick={() => openLightbox(src, 'video')}
          >
            <video muted>
              <source src={`${process.env.PUBLIC_URL}/images/gallery/${src}`} type="video/mp4" />
            </video>
            <div className="play-button">&#9658;</div>
          </div>
        ))}
      </div>

      {lightboxItem && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-button">&times;</span>
          {lightboxItem.type === 'image' ? (
            <img
              className="lightbox-content"
              src={`${process.env.PUBLIC_URL}/images/gallery/${lightboxItem.item}`}
              alt="Enlarged"
            />
          ) : (
            <video className="lightbox-content" controls autoPlay>
              <source src={`${process.env.PUBLIC_URL}/images/gallery/${lightboxItem.item}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;
