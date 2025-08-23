// src/App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import About from './components/About';
import CleaningServices from './components/CleaningServices';
import VegetationServices from './components/VegetationServices';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />

      <main>
        <section id="welcome-section" className="welcome-section">
          <h2>Welcome to MBA Cleaning and Vegetation Services</h2>
          <p>
            We provide professional cleaning and vegetation management services across Melbourne, Victoria, Australia.
          </p>
          <p>
            Our mission is to ensure both your indoor and outdoor spaces are pristine, healthy, and well-maintained.
          </p>
        </section>

        <section id="about-section">
          <About />
        </section>

        <section id="cleaning-services-section">
          <CleaningServices />
        </section>

        <section id="vegetation-services-section">
          <VegetationServices />
        </section>

        <section id="gallery-section">
          <Gallery />
        </section>

        <section id="reviews-section">
          <Reviews />
        </section>

        <section id="contact-section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
