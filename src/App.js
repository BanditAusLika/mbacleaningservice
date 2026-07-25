import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaBuilding,
  FaCheck,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaRegClock,
  FaShieldAlt,
  FaMagic,
  FaTimes,
  FaTools,
  FaWater,
} from 'react-icons/fa';
import './App.css';

const CONTACT = {
  phoneDisplay: '0415 081 517',
  phoneHref: 'tel:+61415081517',
  email: 'info@mbacleaningservice.com',
  address: '59 Neale Road, Deer Park, Melbourne, Victoria',
  maps: 'https://www.google.com/maps/search/?api=1&query=59+Neale+Road+Deer+Park,+Melbourne+Victoria,+Australia',
};

const navItems = [
  ['Services', 'services'],
  ['Why MBA', 'why-mba'],
  ['Our work', 'gallery'],
  ['Reviews', 'reviews'],
  ['Contact', 'contact'],
];

const cleaningServices = [
  'Office and commercial cleaning',
  'Residential homes and apartments',
  'Window and glass cleaning',
  'High-pressure exterior washing',
  'Carpet and upholstery steam cleaning',
  'Restaurants, bars and hospitality venues',
  'Strata and common-area cleaning',
  'Post-construction and builders cleans',
];

const vegetationServices = [
  'Residential and commercial lawn mowing',
  'Brush cutting and overgrowth clearance',
  'Garden and seasonal maintenance',
  'Tree pruning and small-tree removal',
  'Edge trimming and detailed hand weeding',
  'Green-waste removal on request',
];

const serviceHighlights = [
  {
    icon: FaBuilding,
    eyebrow: 'Commercial',
    title: 'Workplaces kept client-ready',
    text: 'Dependable cleaning for offices, retail, gyms, hospitality, strata and commercial facilities—with schedules built around your operation.',
    image: '/images/gallery/30.jpg',
    alt: 'Commercial facility cleaned by MBA Cleaning Services',
  },
  {
    icon: FaMagic,
    eyebrow: 'Specialist cleaning',
    title: 'Detailed work that shows',
    text: 'From deep cleans and steam cleaning to high-pressure washing and post-construction handover, we focus on a finish you can see.',
    image: '/images/gallery/40.jpg',
    alt: 'MBA team member completing elevated exterior window cleaning',
  },
  {
    icon: FaLeaf,
    eyebrow: 'Grounds care',
    title: 'Outdoor spaces under control',
    text: 'Practical vegetation and garden maintenance for homes, businesses and larger sites, including overgrowth clearance and green-waste removal.',
    image: '/images/gallery/veg2.jpg',
    alt: 'Before and after vegetation maintenance by MBA Cleaning Services',
  },
];

const featuredGallery = [
  { src: '/images/gallery/1.jpg', alt: 'Freshly detailed bathroom and vanity' },
  { src: '/images/gallery/10.jpg', alt: 'High-pressure commercial surface cleaning' },
  { src: '/images/gallery/20.jpg', alt: 'Commercial floor polishing in progress' },
  { src: '/images/gallery/30.jpg', alt: 'Freshly cleaned commercial carpet' },
  { src: '/images/gallery/40.jpg', alt: 'Elevated exterior window cleaning' },
  { src: '/images/gallery/50.jpg', alt: 'Large commercial floor cleaning project' },
  { src: '/images/gallery/45.jpg', alt: 'Recent MBA cleaning project' },
  { src: '/images/gallery/55.jpg', alt: 'Professional cleaning result' },
  { src: '/images/gallery/veg1.jpg', alt: 'Vegetation maintenance project' },
  { src: '/images/gallery/veg2.jpg', alt: 'Vegetation maintenance before and after' },
  { src: '/images/gallery/veg3.jpg', alt: 'Grounds maintenance completed by MBA' },
  { src: '/images/gallery/veg4.jpg', alt: 'Outdoor maintenance project' },
];

const reviews = [
  {
    name: 'Goran',
    business: 'BodyPower Gym',
    text: 'They always ensure our gym is spotless, creating a clean and welcoming environment for our members. Highly recommended!',
  },
  {
    name: 'Ana',
    business: 'Chiba Japanese Restaurant',
    text: 'The team takes care of everything we need with no hassle, and the results speak for themselves.',
  },
  {
    name: 'Client team',
    business: 'Centrogen',
    text: 'They are dependable, efficient and always leave our facility in excellent condition.',
  },
  {
    name: 'Milos',
    business: 'Eurohub',
    text: 'MBA Cleaning Service is responsive and always delivers outstanding results.',
  },
  {
    name: 'Mico',
    business: 'Saint Petka Orthodox Church',
    text: 'Reliable and attentive, ensuring everything is left in pristine condition.',
  },
  {
    name: 'Partner feedback',
    business: "Jim's Cleaning",
    text: 'A reliable partner—their team is punctual, thorough and committed to quality service.',
  },
];

const faqs = [
  {
    question: 'Do you provide both one-off and recurring cleaning?',
    answer: 'Yes. MBA can quote one-off deep cleans, end-of-project work and recurring residential or commercial schedules. Tell us what you need and we will recommend a practical service frequency.',
  },
  {
    question: 'Can cleaning and vegetation work be arranged together?',
    answer: 'Yes. One team can coordinate indoor cleaning and outdoor vegetation or garden maintenance, making property upkeep easier to schedule and manage.',
  },
  {
    question: 'Which areas do you service?',
    answer: 'MBA is based in Deer Park and services metropolitan Melbourne, with Victoria-wide work considered depending on the scope and schedule.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Call 0415 081 517 or complete the quote form. Include the property type, suburb, service required and preferred timing so we can respond with the right questions and next step.',
  },
];

function LogoButton({ className = '', label = 'Enlarge MBA Cleaning Services logo', onOpen }) {
  return (
    <button className={`logo-button ${className}`} type="button" onClick={onOpen} aria-label={label}>
      <img src="/logo.jpg" alt="MBA Cleaning Services" />
    </button>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeOverlays = () => {
    setLogoOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeOverlays();
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const isModalOpen = logoOpen || Boolean(selectedImage);
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [logoOpen, selectedImage]);

  const handleNav = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="utility-bar">
        <div className="container utility-inner">
          <span><FaMapMarkerAlt aria-hidden="true" /> Melbourne &amp; Victoria</span>
          <a href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /> {CONTACT.phoneDisplay}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="MBA Cleaning Services home" onClick={handleNav}>
            <img src="/logo.jpg" alt="" />
            <span>
              <strong>MBA</strong>
              <small>Cleaning &amp; Vegetation</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

          <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={handleNav}>{label}</a>
            ))}
            <a className="nav-cta" href="#quote" onClick={handleNav}>Free quote</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Family-owned. Melbourne-based.</div>
              <h1>Immaculate spaces.<br /><span>Professionally maintained.</span></h1>
              <p className="hero-lead">
                Commercial and residential cleaning, specialist deep cleaning and vegetation management—delivered by one reliable local team.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#quote">Request a free quote <FaArrowRight aria-hidden="true" /></a>
                <a className="button button-secondary" href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /> Call {CONTACT.phoneDisplay}</a>
              </div>
              <div className="hero-proof" aria-label="Service highlights">
                <span><FaCheck aria-hidden="true" /> Flexible scheduling</span>
                <span><FaCheck aria-hidden="true" /> Residential &amp; commercial</span>
                <span><FaCheck aria-hidden="true" /> Melbourne-wide service</span>
              </div>
            </div>

            <div className="hero-visual">
              <img className="hero-photo" src="/images/gallery/50.jpg" alt="MBA Cleaning Services completing a large commercial floor-cleaning project" />
              <div className="hero-photo-overlay" />
              <LogoButton className="hero-logo" onOpen={() => setLogoOpen(true)} />
              <div className="hero-note">
                <FaRegClock aria-hidden="true" />
                <span><strong>Responsive service</strong><small>Clear communication from quote to completion</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="MBA service strengths">
          <div className="container trust-grid">
            <div><FaShieldAlt aria-hidden="true" /><span><strong>Trusted local team</strong><small>Family-owned Australian business</small></span></div>
            <div><FaTools aria-hidden="true" /><span><strong>Built for demanding work</strong><small>Homes, offices, hospitality and facilities</small></span></div>
            <div><FaWater aria-hidden="true" /><span><strong>Complete property care</strong><small>Cleaning, exteriors and grounds</small></span></div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Complete property care</span>
                <h2>One capable team.<br />Every space covered.</h2>
              </div>
              <p>From daily presentation to demanding one-off projects, MBA combines detailed cleaning with practical outdoor maintenance.</p>
            </div>

            <div className="highlight-grid">
              {serviceHighlights.map(({ icon: Icon, eyebrow, title, text, image, alt }) => (
                <article className="highlight-card" key={title}>
                  <div className="highlight-image-wrap"><img src={image} alt={alt} loading="lazy" /></div>
                  <div className="highlight-content">
                    <span className="card-icon"><Icon aria-hidden="true" /></span>
                    <small>{eyebrow}</small>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <a href="#quote">Discuss this service <FaArrowRight aria-hidden="true" /></a>
                  </div>
                </article>
              ))}
            </div>

            <div className="service-lists">
              <div className="service-list-card">
                <div className="list-heading"><FaMagic aria-hidden="true" /><div><small>Indoor &amp; exterior</small><h3>Cleaning services</h3></div></div>
                <ul>{cleaningServices.map((service) => <li key={service}><FaCheck aria-hidden="true" /> {service}</li>)}</ul>
              </div>
              <div className="service-list-card service-list-card-green">
                <div className="list-heading"><FaLeaf aria-hidden="true" /><div><small>Gardens &amp; grounds</small><h3>Vegetation services</h3></div></div>
                <ul>{vegetationServices.map((service) => <li key={service}><FaCheck aria-hidden="true" /> {service}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section why" id="why-mba">
          <div className="container why-grid">
            <div className="why-images">
              <img className="why-image-main" src="/images/gallery/40.jpg" alt="MBA team member cleaning commercial windows" loading="lazy" />
              <img className="why-image-small" src="/images/gallery/1.jpg" alt="Detailed bathroom cleaning result" loading="lazy" />
              <div className="experience-card"><strong>One team</strong><span>for cleaning and grounds</span></div>
            </div>
            <div className="why-copy">
              <span className="section-kicker">Why choose MBA</span>
              <h2>Professional standards without the corporate runaround.</h2>
              <p>MBA Cleaning and Vegetation Services is a family-owned Australian business based in Melbourne. We bring practical experience, flexible scheduling and consistent attention to detail to every site.</p>
              <div className="benefit-list">
                <div><span>01</span><p><strong>Clear communication</strong>Direct, responsive contact from the first quote through to completion.</p></div>
                <div><span>02</span><p><strong>Flexible service</strong>One-off, project-based and recurring schedules shaped around your property.</p></div>
                <div><span>03</span><p><strong>Visible quality</strong>Careful work, professional equipment and a finish that supports your space.</p></div>
              </div>
              <a className="text-link" href="#quote">Tell us what your property needs <FaArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Simple from day one</span>
              <h2 id="process-title">A straightforward service process</h2>
              <p>Share the job, agree on the scope, then let our team take care of the work.</p>
            </div>
            <div className="process-grid">
              {[
                ['01', 'Tell us what you need', 'Call or send the quote form with your property type, suburb and service requirements.'],
                ['02', 'Receive a clear quote', 'We confirm the scope, timing and any site details needed to quote accurately.'],
                ['03', 'Choose your schedule', 'Book a one-off visit, project clean or recurring maintenance arrangement.'],
                ['04', 'Enjoy the result', 'We complete the agreed work carefully and keep communication clear.'],
              ].map(([number, title, text]) => (
                <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading split-heading gallery-heading">
              <div><span className="section-kicker">Real work. Real results.</span><h2>A closer look at our work</h2></div>
              <p>Selected projects completed across cleaning, specialist surface work and vegetation maintenance.</p>
            </div>
            <div className="gallery-grid">
              {featuredGallery.map((image, index) => (
                <button
                  type="button"
                  className={`gallery-card gallery-card-${(index % 5) + 1}`}
                  key={image.src}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Open image: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span>View project</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Client feedback</span>
              <h2>Trusted to keep important spaces at their best</h2>
            </div>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <figure className="review-card" key={`${review.name}-${review.business}`}>
                  <FaQuoteLeft className="quote-icon" aria-hidden="true" />
                  <blockquote>{review.text}</blockquote>
                  <figcaption><strong>{review.name}</strong><span>{review.business}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div>
              <span className="section-kicker">Common questions</span>
              <h2 id="faq-title">Everything you need to get started</h2>
              <p>Have a different question? Call us directly and we will help you work out the right service.</p>
              <a className="button button-dark" href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /> {CONTACT.phoneDisplay}</a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker light-kicker">Ready when you are</span>
              <h2>Let’s get your property looking its best.</h2>
              <p>Tell us what needs attention and we will respond with the right questions, a clear next step and a free estimate.</p>
              <div className="contact-methods">
                <a href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /><span><small>Call for a free estimate</small><strong>{CONTACT.phoneDisplay}</strong></span></a>
                <a href={`mailto:${CONTACT.email}`}><FaEnvelope aria-hidden="true" /><span><small>Email MBA</small><strong>{CONTACT.email}</strong></span></a>
                <a href={CONTACT.maps} target="_blank" rel="noreferrer"><FaMapMarkerAlt aria-hidden="true" /><span><small>Based in Deer Park</small><strong>{CONTACT.address}</strong></span></a>
              </div>
              <div className="social-links" aria-label="Social media">
                <a href="https://www.facebook.com/mbacleaningservicess/" target="_blank" rel="noreferrer" aria-label="MBA Cleaning Services on Facebook"><FaFacebookF aria-hidden="true" /></a>
                <a href="https://www.instagram.com/mbacleaningservices" target="_blank" rel="noreferrer" aria-label="MBA Cleaning Services on Instagram"><FaInstagram aria-hidden="true" /></a>
              </div>
            </div>

            <div className="quote-card" id="quote">
              <div className="quote-card-heading">
                <span>Free estimate</span>
                <h3>Request your quote</h3>
                <p>Fields marked * are required.</p>
              </div>
              <form action={`https://formsubmit.co/${CONTACT.email}`} method="POST">
                <input type="hidden" name="_subject" value="New quote request from MBA Cleaning website" />
                <input type="hidden" name="_next" value="https://mbacleaningservice.com/thank-you.html" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <div className="form-row">
                  <label>Full name *<input type="text" name="name" autoComplete="name" required /></label>
                  <label>Phone number *<input type="tel" name="phone" autoComplete="tel" required /></label>
                </div>
                <label>Email address *<input type="email" name="email" autoComplete="email" required /></label>
                <div className="form-row">
                  <label>Service *
                    <select name="service" defaultValue="" required>
                      <option value="" disabled>Select a service</option>
                      <option>Commercial cleaning</option>
                      <option>Residential cleaning</option>
                      <option>Carpet or upholstery cleaning</option>
                      <option>Window or pressure cleaning</option>
                      <option>Post-construction cleaning</option>
                      <option>Vegetation or garden maintenance</option>
                      <option>Cleaning and grounds package</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label>Suburb *<input type="text" name="suburb" autoComplete="address-level2" required /></label>
                </div>
                <label>Tell us about the job *<textarea name="message" rows="5" placeholder="Property type, areas involved, preferred timing and anything else we should know." required /></label>
                <button className="button button-submit" type="submit">Send quote request <FaArrowRight aria-hidden="true" /></button>
                <p className="form-note"><FaShieldAlt aria-hidden="true" /> Your details are used only to respond to your enquiry.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <LogoButton onOpen={() => setLogoOpen(true)} />
            <div><strong>MBA Cleaning Services</strong><span>Cleaning &amp; vegetation services across Melbourne and Victoria.</span></div>
          </div>
          <div className="footer-links">
            <div><strong>Services</strong><a href="#services">Commercial cleaning</a><a href="#services">Residential cleaning</a><a href="#services">Vegetation management</a><a href="#services">Specialist cleaning</a></div>
            <div><strong>Contact</strong><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.maps} target="_blank" rel="noreferrer">Deer Park, Melbourne</a></div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} MBA Cleaning and Vegetation Services. All rights reserved.</span>
          <span>Professional property care across Melbourne.</span>
        </div>
      </footer>

      <a className="mobile-call" href={CONTACT.phoneHref} aria-label={`Call MBA Cleaning Services on ${CONTACT.phoneDisplay}`}>
        <FaPhoneAlt aria-hidden="true" /><span>Call for a free quote</span>
      </a>

      {logoOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="MBA Cleaning Services logo" onClick={closeOverlays}>
          <button className="modal-close" type="button" onClick={closeOverlays} aria-label="Close logo"><FaTimes aria-hidden="true" /></button>
          <img className="logo-modal-image" src="/logo.jpg" alt="MBA Cleaning Services logo" onClick={(event) => event.stopPropagation()} />
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={selectedImage.alt} onClick={closeOverlays}>
          <button className="modal-close" type="button" onClick={closeOverlays} aria-label="Close image"><FaTimes aria-hidden="true" /></button>
          <figure className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <figcaption>{selectedImage.alt}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

export default App;
