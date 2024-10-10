import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-section" className="contact-container">
      <h2>Contact Us</h2>
      <ul className="contact-list">
        <li className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          Call for a free estimate: <a href="tel:+61436117057">0436 117 057</a> or <a href="tel:+61415081517">0415 081 517</a>
        </li>
        <li className="contact-item">
          <FaEnvelope className="contact-icon" />
          Email: <a href="mailto:info@mbacleaningservice.com">info@mbacleaningservice.com</a>
        </li>
        <li className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          Address: <a href="https://www.google.com/maps/search/?api=1&query=59+Neale+Road+Deer+Park,+Melbourne+Victoria,+Australia" target="_blank" rel="noopener noreferrer">59 Neale Road, Deer Park, Melbourne, Victoria, Australia</a>
        </li>
        <li className="contact-item">
          <FaFacebook className="contact-icon" />
          Follow us on Facebook: <a href="https://www.facebook.com/mbacleaningservicess/" target="_blank" rel="noopener noreferrer">MBA Cleaning Services</a>
        </li>
        <li className="contact-item">
          <FaInstagram className="contact-icon" />
          Follow us on Instagram: <a href="https://www.instagram.com/mbacleaningservices" target="_blank" rel="noopener noreferrer">MBA Cleaning Services</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
