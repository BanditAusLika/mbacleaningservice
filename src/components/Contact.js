import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-section" className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <ul className="contact-list">
        <li className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>Call for a free estimate: </span>
          <a href="tel:+61415081517">0415 081 517</a>
        </li>
        <li className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>Email: </span>
          <a href="mailto:info@mbacleaningservice.com">info@mbacleaningservice.com</a>
        </li>
        <li className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Address: </span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=59+Neale+Road+Deer+Park,+Melbourne+Victoria,+Australia"
            target="_blank"
            rel="noopener noreferrer"
          >
            59 Neale Road, Deer Park, Melbourne, Victoria, Australia
          </a>
        </li>
        <li className="contact-item">
          <FaFacebook className="contact-icon" />
          <span>Follow us on Facebook: </span>
          <a
            href="https://www.facebook.com/mbacleaningservicess/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MBA Cleaning Services
          </a>
        </li>
        <li className="contact-item">
          <FaInstagram className="contact-icon" />
          <span>Follow us on Instagram: </span>
          <a
            href="https://www.instagram.com/mbacleaningservices"
            target="_blank"
            rel="noopener noreferrer"
          >
            MBA Cleaning Services
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
