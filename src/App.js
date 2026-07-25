import React, { useEffect, useMemo, useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaBuilding,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaQuoteLeft,
  FaRegCalendarCheck,
  FaShieldAlt,
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
  ['Our work', 'projects'],
  ['Reviews', 'reviews'],
  ['Contact', 'contact'],
];

const serviceGroups = [
  {
    id: 'commercial',
    label: 'Commercial',
    icon: FaBuilding,
    kicker: 'Reliable facility presentation',
    title: 'Cleaning that works around your operation.',
    text: 'Planned cleaning and specialist project work for offices, retail, hospitality, gyms, strata and commercial facilities. We tailor the scope and timing to the way your site actually runs.',
    image: '/images/gallery/50.jpg',
    imageAlt: 'MBA Cleaning Services cleaning a large commercial facility floor',
    services: [
      'Office and workplace cleaning',
      'Retail, hospitality and gym cleaning',
      'Strata and common-area maintenance',
      'Post-construction and builders cleans',
      'Commercial floors and pressure washing',
      'One-off projects or recurring schedules',
    ],
  },
  {
    id: 'residential',
    label: 'Residential',
    icon: FaHome,
    kicker: 'Detailed care for your home',
    title: 'A cleaner home without losing your time.',
    text: 'Flexible home cleaning for busy households, apartments, move-related cleans and detailed one-off work. Tell us what matters most and we will shape the service around your property.',
    image: '/images/gallery/1.jpg',
    imageAlt: 'Freshly detailed bathroom completed by MBA Cleaning Services',
    services: [
      'Regular home and apartment cleaning',
      'Deep and detail cleaning',
      'Window and glass cleaning',
      'Carpet and upholstery steam cleaning',
      'Move-in and move-out cleaning',
      'Outdoor surface pressure washing',
    ],
  },
  {
    id: 'grounds',
    label: 'Grounds',
    icon: FaLeaf,
    kicker: 'Practical outdoor maintenance',
    title: 'Grounds kept safe, neat and under control.',
    text: 'Vegetation and garden services for residential, commercial and larger properties. MBA can coordinate inside and outside work through one dependable point of contact.',
    image: '/images/gallery/veg2.jpg',
    imageAlt: 'Before and after vegetation maintenance completed by MBA',
    services: [
      'Lawn mowing and edge trimming',
      'Brush cutting and overgrowth clearance',
      'Garden and seasonal maintenance',
      'Tree pruning and small-tree removal',
      'Detailed hand weeding',
      'Green-waste removal on request',
    ],
  },
];

const galleryItems = [
  { src: '/images/gallery/50.jpg', alt: 'Large commercial floor cleaning project', category: 'Commercial' },
  { src: '/images/gallery/40.jpg', alt: 'Elevated exterior window cleaning', category: 'Specialist' },
  { src: '/images/gallery/1.jpg', alt: 'Detailed bathroom cleaning result', category: 'Residential' },
  { src: '/images/gallery/20.jpg', alt: 'Commercial floor polishing in progress', category: 'Commercial' },
  { src: '/images/gallery/10.jpg', alt: 'High-pressure surface cleaning', category: 'Specialist' },
  { src: '/images/gallery/30.jpg', alt: 'Commercial carpet cleaning result', category: 'Commercial' },
  { src: '/images/gallery/45.jpg', alt: 'Recent detailed cleaning project', category: 'Residential' },
  { src: '/images/gallery/55.jpg', alt: 'Professional property cleaning result', category: 'Residential' },
  { src: '/images/gallery/veg1.jpg', alt: 'Vegetation maintenance project', category: 'Grounds' },
  { src: '/images/gallery/veg2.jpg', alt: 'Vegetation maintenance before and after', category: 'Grounds' },
  { src: '/images/gallery/veg3.jpg', alt: 'Grounds maintenance completed by MBA', category: 'Grounds' },
  { src: '/images/gallery/veg4.jpg', alt: 'Outdoor property maintenance project', category: 'Grounds' },
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
    question: 'Do you provide both one-off and recurring services?',
    answer: 'Yes. MBA can quote one-off deep cleans, project and handover work, plus recurring residential, commercial and grounds-maintenance schedules.',
  },
  {
    question: 'Can you work around business operating hours?',
    answer: 'Yes. We discuss site access, preferred timing and operational requirements before confirming the schedule so the service causes minimal disruption.',
  },
  {
    question: 'Can cleaning and vegetation work be arranged together?',
    answer: 'Yes. MBA can coordinate internal cleaning and external vegetation or garden maintenance through one point of contact.',
  },
  {
    question: 'Which areas do you service?',
    answer: 'MBA is based in Deer Park and services metropolitan Melbourne. Broader Victorian work can be considered depending on the scope and schedule.',
  },
  {
    question: 'How do I get an accurate quote?',
    answer: 'Call 0415 081 517 or complete the quote form with the property type, suburb, service, preferred timing and relevant details. We will follow up with any questions required to confirm the scope.',
  },
];

function LogoButton({ className = '', onOpen }) {
  return (
    <button className={`logo-button ${className}`} type="button" onClick={onOpen} aria-label="Enlarge MBA Cleaning Services logo">
      <img src="/logo.jpg" alt="MBA Cleaning Services" />
    </button>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const [activeService, setActiveService] = useState('commercial');
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const activeServiceData = serviceGroups.find((item) => item.id === activeService) || serviceGroups[0];
  const filteredGallery = useMemo(
    () => galleryItems.filter((item) => galleryFilter === 'All' || item.category === galleryFilter),
    [galleryFilter],
  );
  const selectedImage = selectedImageIndex === null ? null : filteredGallery[selectedImageIndex];

  const closeOverlays = () => {
    setLogoOpen(false);
    setSelectedImageIndex(null);
  };

  const moveGallery = (direction) => {
    setSelectedImageIndex((current) => {
      if (current === null) return null;
      return (current + direction + filteredGallery.length) % filteredGallery.length;
    });
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeOverlays();
        setMenuOpen(false);
      }
      if (selectedImageIndex !== null && event.key === 'ArrowLeft') moveGallery(-1);
      if (selectedImageIndex !== null && event.key === 'ArrowRight') moveGallery(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedImageIndex, filteredGallery.length]);

  useEffect(() => {
    const overlayOpen = logoOpen || selectedImageIndex !== null;
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [logoOpen, selectedImageIndex]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

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
          <a className="brand" href="#top" aria-label="MBA Cleaning Services home" onClick={closeMenu}>
            <img src="/logo.jpg" alt="" />
            <span><strong>MBA</strong><small>Cleaning &amp; Vegetation</small></span>
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
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
            <a className="nav-cta" href="#quote" onClick={closeMenu}>Request a quote <FaArrowRight aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-ambient" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Melbourne cleaning &amp; grounds specialists</p>
              <h1>Professional care for <em>every part</em> of your property.</h1>
              <p className="hero-lead">Commercial and residential cleaning, specialist surface work and vegetation maintenance—coordinated through one responsive local team.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#quote">Request a free quote <FaArrowRight aria-hidden="true" /></a>
                <a className="button button-secondary" href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /> {CONTACT.phoneDisplay}</a>
              </div>
              <div className="hero-proof" aria-label="MBA service strengths">
                <span><FaCheck aria-hidden="true" /><strong>Clear quotes</strong></span>
                <span><FaCheck aria-hidden="true" /><strong>Flexible schedules</strong></span>
                <span><FaCheck aria-hidden="true" /><strong>Melbourne-wide</strong></span>
              </div>
            </div>

            <div className="hero-showcase">
              <div className="hero-image-frame">
                <img src="/images/gallery/50.jpg" alt="MBA Cleaning Services completing a commercial floor cleaning project" />
                <span className="hero-image-label">Commercial project work</span>
              </div>
              <div className="hero-logo-panel">
                <LogoButton onOpen={() => setLogoOpen(true)} />
                <p>Click to view our logo</p>
              </div>
              <div className="hero-contact-card">
                <FaRegCalendarCheck aria-hidden="true" />
                <span><small>Need a reliable team?</small><strong>Let’s discuss the scope.</strong></span>
                <a href="#quote" aria-label="Request an MBA quote"><FaArrowRight aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="hero-client-bar">
            <div className="container">
              <span>Trusted across workplaces and community spaces</span>
              <div><strong>BodyPower Gym</strong><strong>Chiba</strong><strong>Centrogen</strong><strong>Eurohub</strong><strong>Saint Petka</strong></div>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="section-kicker">Property care, properly coordinated</span><h2>Choose the service pathway that fits your site.</h2></div>
              <p>Start with your property type. MBA can then tailor the scope, frequency and timing around the outcome you need.</p>
            </div>

            <div className="service-switcher" role="tablist" aria-label="MBA service categories">
              {serviceGroups.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={activeService === id}
                  aria-controls="service-panel"
                  className={activeService === id ? 'is-active' : ''}
                  onClick={() => setActiveService(id)}
                >
                  <Icon aria-hidden="true" /><span>{label}</span>
                </button>
              ))}
            </div>

            <article className="service-panel" id="service-panel" role="tabpanel">
              <div className="service-panel-image">
                <img src={activeServiceData.image} alt={activeServiceData.imageAlt} />
                <span>{activeServiceData.label} services</span>
              </div>
              <div className="service-panel-copy">
                <span className="section-kicker">{activeServiceData.kicker}</span>
                <h3>{activeServiceData.title}</h3>
                <p>{activeServiceData.text}</p>
                <ul>{activeServiceData.services.map((service) => <li key={service}><FaCheck aria-hidden="true" /> {service}</li>)}</ul>
                <a className="text-link" href="#quote">Get a tailored {activeServiceData.label.toLowerCase()} quote <FaArrowRight aria-hidden="true" /></a>
              </div>
            </article>

            <div className="specialist-strip">
              <div><FaWater aria-hidden="true" /><span><strong>Pressure washing</strong><small>Hard surfaces and exterior areas</small></span></div>
              <div><FaTools aria-hidden="true" /><span><strong>Post-construction</strong><small>Detailed handover cleaning</small></span></div>
              <div><FaShieldAlt aria-hidden="true" /><span><strong>Steam cleaning</strong><small>Carpets and upholstery</small></span></div>
              <a href="#quote">Discuss specialist work <FaArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section why" id="why-mba">
          <div className="container why-grid">
            <div className="why-media">
              <img className="why-main" src="/images/gallery/40.jpg" alt="MBA team member completing commercial window cleaning" loading="lazy" />
              <img className="why-detail" src="/images/gallery/1.jpg" alt="Detailed bathroom cleaning result" loading="lazy" />
              <div className="why-badge"><strong>One team</strong><span>Indoor, exterior &amp; grounds</span></div>
            </div>
            <div className="why-copy">
              <span className="section-kicker">Why businesses and households choose MBA</span>
              <h2>Professional standards. Direct local accountability.</h2>
              <p className="why-intro">MBA Cleaning and Vegetation Services is a family-owned Australian business based in Deer Park. You receive responsive communication, practical scheduling and visible care from the first conversation to the final result.</p>
              <div className="principles">
                <article><span>01</span><div><h3>Scope before promises</h3><p>We clarify the property, priorities and timing so the quote reflects the work required.</p></div></article>
                <article><span>02</span><div><h3>Service that fits the site</h3><p>One-off projects and recurring schedules can be shaped around access and operating needs.</p></div></article>
                <article><span>03</span><div><h3>One point of contact</h3><p>Coordinate cleaning, specialist work and grounds care without juggling multiple providers.</p></div></article>
              </div>
              <a className="button button-dark" href="#quote">Plan your service <FaArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="results-band" aria-label="MBA service promise">
          <div className="container">
            <div><strong>Commercial</strong><span>Presentation-ready workplaces</span></div>
            <div><strong>Residential</strong><span>Detailed, flexible home care</span></div>
            <div><strong>Specialist</strong><span>Surfaces, steam and handover work</span></div>
            <div><strong>Grounds</strong><span>Practical vegetation maintenance</span></div>
          </div>
        </section>

        <section className="section process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="section-kicker">Simple from the first call</span><h2 id="process-title">A clear path from enquiry to completion.</h2></div>
              <p>No vague hand-offs. We confirm what needs doing, agree on the scope and keep communication straightforward.</p>
            </div>
            <div className="process-grid">
              {[
                ['01', 'Share the job', 'Send the property type, suburb, required service and preferred timing.'],
                ['02', 'Confirm the scope', 'We ask the right questions and arrange a site discussion when necessary.'],
                ['03', 'Approve the quote', 'Receive a clear service scope and schedule before work begins.'],
                ['04', 'We take care of it', 'MBA completes the agreed work with attention to detail and clear follow-up.'],
              ].map(([number, title, text]) => (
                <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="container">
            <div className="section-heading split-heading projects-heading">
              <div><span className="section-kicker">Documented project work</span><h2>See the standard for yourself.</h2></div>
              <p>Browse selected cleaning, specialist and grounds-maintenance work. Select any image for a closer view.</p>
            </div>
            <div className="gallery-filters" aria-label="Filter project gallery">
              {['All', 'Commercial', 'Residential', 'Specialist', 'Grounds'].map((filter) => (
                <button key={filter} type="button" className={galleryFilter === filter ? 'is-active' : ''} onClick={() => { setGalleryFilter(filter); setSelectedImageIndex(null); }}>
                  {filter}
                </button>
              ))}
            </div>
            <div className="gallery-grid">
              {filteredGallery.map((image, index) => (
                <button key={image.src} type="button" className="gallery-card" onClick={() => setSelectedImageIndex(index)} aria-label={`Open project image: ${image.alt}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span><small>{image.category}</small><strong>{image.alt}</strong><i>View <FaArrowRight aria-hidden="true" /></i></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-kicker">Client feedback</span>
              <h2>Trusted where presentation matters.</h2>
              <p>Feedback from businesses, community spaces and clients MBA has supported.</p>
            </div>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <figure className="review-card" key={`${review.name}-${review.business}`}>
                  <div className="review-top"><FaQuoteLeft aria-hidden="true" /><span>★★★★★</span></div>
                  <blockquote>{review.text}</blockquote>
                  <figcaption><strong>{review.name}</strong><span>{review.business}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-area">
          <div className="container service-area-grid">
            <div>
              <span className="section-kicker">Based in Deer Park</span>
              <h2>Responsive service across metropolitan Melbourne.</h2>
              <p>MBA services homes, workplaces and facilities across Melbourne. Larger or broader Victorian projects can be discussed based on scope and scheduling.</p>
              <a className="text-link" href={CONTACT.maps} target="_blank" rel="noreferrer">View our Deer Park base <FaArrowRight aria-hidden="true" /></a>
            </div>
            <div className="area-list" aria-label="Selected service areas">
              {['Deer Park', 'Sunshine', 'Brimbank', 'Melton', 'Melbourne CBD', 'Western Suburbs', 'Northern Suburbs', 'Eastern Suburbs', 'South-Eastern Suburbs'].map((area) => <span key={area}><FaMapMarkerAlt aria-hidden="true" /> {area}</span>)}
            </div>
          </div>
        </section>

        <section className="section faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="section-kicker">Before you book</span>
              <h2 id="faq-title">Straight answers to common questions.</h2>
              <p>If your job is unusual, call us. A short conversation is often the fastest way to confirm the right next step.</p>
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
          <div className="contact-backdrop" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker light-kicker">Your property. Your priorities.</span>
              <h2>Tell us what needs attention.</h2>
              <p>Send the essentials and MBA will respond with the right questions and a clear next step. Quotes are free and there is no obligation.</p>
              <div className="contact-methods">
                <a href={CONTACT.phoneHref}><FaPhoneAlt aria-hidden="true" /><span><small>Call MBA directly</small><strong>{CONTACT.phoneDisplay}</strong></span><FaArrowRight aria-hidden="true" /></a>
                <a href={`mailto:${CONTACT.email}`}><FaEnvelope aria-hidden="true" /><span><small>Email enquiries</small><strong>{CONTACT.email}</strong></span><FaArrowRight aria-hidden="true" /></a>
                <a href={CONTACT.maps} target="_blank" rel="noreferrer"><FaMapMarkerAlt aria-hidden="true" /><span><small>Business address</small><strong>{CONTACT.address}</strong></span><FaArrowRight aria-hidden="true" /></a>
              </div>
              <div className="social-row">
                <span>Follow our latest work</span>
                <div>
                  <a href="https://www.facebook.com/mbacleaningservicess/" target="_blank" rel="noreferrer" aria-label="MBA Cleaning Services on Facebook"><FaFacebookF aria-hidden="true" /></a>
                  <a href="https://www.instagram.com/mbacleaningservices" target="_blank" rel="noreferrer" aria-label="MBA Cleaning Services on Instagram"><FaInstagram aria-hidden="true" /></a>
                </div>
              </div>
            </div>

            <div className="quote-card" id="quote">
              <div className="quote-card-heading">
                <span>Free, no-obligation estimate</span>
                <h3>Request your quote</h3>
                <p>Complete the details below and MBA will contact you directly.</p>
              </div>
              <form action={`https://formsubmit.co/${CONTACT.email}`} method="POST">
                <input type="hidden" name="_subject" value="New MBA website quote request" />
                <input type="hidden" name="_next" value="https://mbacleaningservice.com/thank-you.html" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting MBA Cleaning Services. We have received your enquiry and will respond as soon as possible." />
                <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <div className="form-row">
                  <label>Full name *<input type="text" name="name" autoComplete="name" placeholder="Your name" required /></label>
                  <label>Phone number *<input type="tel" name="phone" autoComplete="tel" placeholder="Best contact number" required /></label>
                </div>
                <label>Email address *<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
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
                  <label>Suburb *<input type="text" name="suburb" autoComplete="address-level2" placeholder="Property suburb" required /></label>
                </div>
                <label>Property or business type<input type="text" name="property_type" placeholder="For example: office, home, gym or warehouse" /></label>
                <label>Tell us about the job *<textarea name="message" rows="5" placeholder="Areas involved, preferred timing, frequency and anything else we should know." required /></label>
                <button className="button button-submit" type="submit">Send my quote request <FaArrowRight aria-hidden="true" /></button>
                <p className="form-note"><FaShieldAlt aria-hidden="true" /> Your details are used only to respond to this enquiry.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <LogoButton onOpen={() => setLogoOpen(true)} />
            <p>Professional cleaning and vegetation services for Melbourne homes, businesses and facilities.</p>
            <span>Click the logo to enlarge it.</span>
          </div>
          <div className="footer-column"><strong>Explore</strong><a href="#services">Services</a><a href="#why-mba">Why MBA</a><a href="#projects">Our work</a><a href="#reviews">Client reviews</a></div>
          <div className="footer-column"><strong>Services</strong><a href="#services" onClick={() => setActiveService('commercial')}>Commercial</a><a href="#services" onClick={() => setActiveService('residential')}>Residential</a><a href="#services" onClick={() => setActiveService('grounds')}>Grounds care</a><a href="#quote">Request a quote</a></div>
          <div className="footer-column footer-contact"><strong>Contact</strong><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={CONTACT.maps} target="_blank" rel="noreferrer">Deer Park, Melbourne</a></div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} MBA Cleaning and Vegetation Services.</span>
          <span>Melbourne, Victoria · Australia</span>
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
          <button className="modal-close" type="button" onClick={closeOverlays} aria-label="Close project image"><FaTimes aria-hidden="true" /></button>
          <button className="modal-arrow modal-arrow-left" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(-1); }} aria-label="Previous project image"><FaChevronLeft aria-hidden="true" /></button>
          <figure className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <figcaption><span>{selectedImage.category}</span><strong>{selectedImage.alt}</strong></figcaption>
          </figure>
          <button className="modal-arrow modal-arrow-right" type="button" onClick={(event) => { event.stopPropagation(); moveGallery(1); }} aria-label="Next project image"><FaChevronRight aria-hidden="true" /></button>
        </div>
      )}
    </div>
  );
}

export default App;
