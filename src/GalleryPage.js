import React, { useEffect, useMemo, useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlay,
  FaTimes,
} from 'react-icons/fa';
import { galleryItems } from './galleryData';

const CONTACT = {
  phoneDisplay: '0415 081 517',
  phoneHref: 'tel:+61415081517',
  email: 'info@mbacleaningservice.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=59+Neale+Road+Deer+Park,+Melbourne+Victoria,+Australia',
};

function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => filter === 'All' || item.category === filter),
    [filter],
  );
  const selectedItem = selectedIndex === null ? null : filteredItems[selectedIndex];

  const closeViewer = () => {
    setLogoOpen(false);
    setSelectedIndex(null);
  };

  const moveGallery = (direction) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + filteredItems.length) % filteredItems.length;
    });
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeViewer();
        setMenuOpen(false);
      }
      if (selectedIndex !== null && event.key === 'ArrowLeft') moveGallery(-1);
      if (selectedIndex !== null && event.key === 'ArrowRight') moveGallery(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    document.body.style.overflow = logoOpen || selectedIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [logoOpen, selectedIndex]);

  return (
    <div className="site-shell gallery-page-shell">
      <a className="skip-link" href="#gallery-content">Skip to gallery</a>

      <div className="utility-bar">
        <div className="container utility-inner">
          <span><FaMapMarkerAlt aria-hidden="true" /> Deer Park · Melbourne-wide service</span>
          <div>
            <a href={`mailto:${CONTACT.email}`}><FaEnvelope aria-hidden="true" /> {CONTACT.email}</a>
            <a href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /> {CONTACT.phoneDisplay}</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="MBA Cleaning Services home">
            <img src="/logo.jpg" alt="" />
            <span><strong>MBA</strong><small>Cleaning Services</small></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="gallery-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

          <nav id="gallery-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/gallery/" aria-current="page">Gallery</a>
            <a href="/#reviews">Reviews</a>
            <a className="nav-cta" href="/#quote">Request a quote <FaArrowRight aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <main id="gallery-content" className="gallery-page-main">
        <section className="section projects standalone-gallery">
          <div className="container">
            <a className="gallery-back-link" href="/"><FaArrowLeft aria-hidden="true" /> Back to MBA Cleaning Services</a>
            <div className="gallery-page-heading">
              <div>
                <span className="section-kicker">Complete cleaning portfolio</span>
                <h1>MBA project gallery.</h1>
              </div>
              <p>Explore 57 cleaning photos and three project videos from commercial, residential and specialist cleaning work across Melbourne.</p>
            </div>

            <div className="gallery-filters gallery-page-filters" aria-label="Filter project gallery">
              {['All', 'Cleaning', 'Videos'].map((itemFilter) => (
                <button
                  key={itemFilter}
                  type="button"
                  className={filter === itemFilter ? 'is-active' : ''}
                  onClick={() => { setFilter(itemFilter); setSelectedIndex(null); }}
                >
                  {itemFilter}
                </button>
              ))}
              <span className="gallery-count" aria-live="polite">{filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}</span>
            </div>

            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className={`gallery-card ${item.type === 'video' ? 'gallery-card-video' : ''}`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open project ${item.type}: ${item.alt}`}
                >
                  {item.type === 'video' ? (
                    <>
                      <video src={`${item.src}#t=0.1`} muted playsInline preload="metadata" aria-hidden="true" tabIndex="-1" />
                      <b className="video-play"><FaPlay aria-hidden="true" /></b>
                    </>
                  ) : (
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  )}
                  <span><small>{item.category}</small><strong>{item.alt}</strong><i>{item.type === 'video' ? 'Play' : 'View'} <FaArrowRight aria-hidden="true" /></i></span>
                </button>
              ))}
            </div>

            <div className="gallery-page-cta">
              <div><span className="section-kicker">Need this standard at your property?</span><h2>Tell MBA what needs cleaning.</h2></div>
              <div><a className="button button-primary" href="/#quote">Request a free quote <FaArrowRight aria-hidden="true" /></a><a className="button button-secondary" href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /> {CONTACT.phoneDisplay}</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer gallery-page-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <button className="logo-button" type="button" onClick={() => setLogoOpen(true)} aria-label="Enlarge MBA Cleaning Services logo"><img src="/logo.jpg" alt="MBA Cleaning Services" /></button>
            <p>Professional cleaning services for Melbourne homes, businesses and facilities.</p>
          </div>
          <div className="footer-column"><strong>Explore</strong><a href="/">Home</a><a href="/#services">Services</a><a href="/gallery/">Gallery</a><a href="/#reviews">Client reviews</a></div>
          <div className="footer-column"><strong>Cleaning</strong><a href="/#services">Commercial</a><a href="/#services">Residential</a><a href="/#services">Specialist cleaning</a><a href="/#quote">Request a quote</a></div>
          <div className="footer-column footer-contact"><strong>Contact</strong><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.maps} target="_blank" rel="noreferrer">Deer Park, Melbourne</a><div className="gallery-socials"><a href="https://www.facebook.com/mbacleaningservicess/" target="_blank" rel="noreferrer" aria-label="MBA on Facebook"><FaFacebookF /></a><a href="https://www.instagram.com/mba_cleaningservices/" target="_blank" rel="noreferrer" aria-label="MBA on Instagram"><FaInstagram /></a></div></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} MBA Cleaning Services.</span><span>Melbourne, Victoria · Australia</span></div>
      </footer>

      <a className="mobile-call" href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /><span>Call for a free quote</span></a>

      {logoOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="MBA Cleaning Services logo" onClick={closeViewer}>
          <button className="modal-close" type="button" onClick={closeViewer} aria-label="Close logo"><FaTimes aria-hidden="true" /></button>
          <img className="logo-modal-image" src="/logo.jpg" alt="MBA Cleaning Services logo" onClick={closeViewer} title="Click to close" />
        </div>
      )}

      {selectedItem && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={selectedItem.alt} onClick={closeViewer}>
          <button className="modal-close" type="button" onClick={closeViewer} aria-label="Close project viewer"><FaTimes aria-hidden="true" /></button>
          <button className="modal-arrow modal-arrow-left" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(-1); }} aria-label="Previous project item"><FaChevronLeft aria-hidden="true" /></button>
          <figure className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <video key={selectedItem.src} src={selectedItem.src} controls autoPlay playsInline preload="metadata" />
            ) : (
              <img src={selectedItem.src} alt={selectedItem.alt} onClick={closeViewer} title="Click to return to the gallery" />
            )}
            <figcaption><span>{selectedItem.category} · {selectedIndex + 1} of {filteredItems.length}</span><strong>{selectedItem.alt}</strong></figcaption>
          </figure>
          <button className="modal-arrow modal-arrow-right" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(1); }} aria-label="Next project item"><FaChevronRight aria-hidden="true" /></button>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
