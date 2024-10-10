import React from 'react';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import About from './components/About';
import CleaningServices from './components/CleaningServices';
import VegetationServices from './components/VegetationServices';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews'; // Reviews component imported
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Logo Section */}
        <section id="logo-section">
          <Logo />
        </section>

        {/* Welcome Section */}
        <section id="welcome-section">
          <h2>Welcome to MBA Cleaning and Vegetation Services</h2>
          <p>
            We provide professional cleaning and vegetation management services across Melbourne, Victoria, Australia.
          </p>
          <p>
            Our mission is to ensure both your indoor and outdoor spaces are pristine, healthy, and well-maintained.
          </p>
        </section>

        {/* About Section */}
        <About />

        {/* Cleaning Services Section */}
        <CleaningServices />

        {/* Vegetation Services Section */}
        <VegetationServices />

        {/* Gallery Section */}
        <Gallery />

        {/* Reviews Section (Newly Added) */}
        <Reviews />  {/* The reviews section will display here */}

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
