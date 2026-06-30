import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, UPLOADS_URL } from '../../apiConfig';

// Importing images from the img directory
import carousel1 from '../../img/Website-Header-latest.png';
import banner1 from '../../img/green-fresh-basil-stone-background_70626-8490.jpg';

// Import shared components
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import AboutSection from '../AboutSection/AboutSection';
import CounterSection from '../CounterSection/CounterSection';
import ContactSection from '../ContactSection/ContactSection';

// Import products data
import { products as localProducts } from '../../data/products';

export default function Home() {
  const [productsList, setProductsList] = useState(localProducts);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });

    axios.get(`${API_URL}?type=products`)
      .then((res) => {
        if (res.data && res.data.products && res.data.products.length > 0) {
          const normalized = res.data.products.map(p => ({
            id: p.id,
            name: p.title || p.name,
            scientificName: p.scientificName || '',
            category: p.category || '',
            image: p.image || '',
            status: p.status || 'Organic',
            availableForms: p.availableForms || [],
            pesticidesStatus: p.pesticidesStatus || []
          }));
          setProductsList(normalized);
        }
      })
      .catch((err) => {
        console.warn("API dynamic fetch failed on Home page, using local static database fallback:", err);
      });
  }, []);

  // Display only the first 6 products on the Home page
  const featuredProducts = productsList.slice(0, 6);

  return (
    <>
      <div className="home-page">
        {/* Hero Carousel Section */}
        <div className="hero-carousel">
          <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src={carousel1} className="img-fluid w-100" alt="Premium Herbs & Spices" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row align-items-center min-vh-75">
                      <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                        <h1 className="display-4 fw-bold text-white mb-3">ElEman Herbs & Spices</h1>
                        <p className="lead text-white mb-4">Premium quality herbs and spices from Egypt to the world. Sustainably grown, carefully processed, naturally flavorful.</p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                          <Link to="/products" className="btn btn-success btn-lg px-4 py-3">Explore Products</Link>
                          <Link to="/about" className="btn btn-outline-light btn-lg px-4 py-3">Learn More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        <AboutSection />

        {/* Stats Counter Section */}
        <CounterSection />
      </div>

      {/* Process Steps Start */}
      <div className="process-steps py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }} data-aos="fade-up">
            <h6 className="text-primary mb-2">OUR WORKFLOW</h6>
            <h2 className="display-5 fw-bold text-white mb-4">Our Quality Process</h2>
            <p className="lead text-light mb-0">
              At ElEman Herbs, we follow a streamlined process to ensure premium quality herbs and spices
              reach our global customers with efficiency and reliability. Our commitment to excellence
              guides every step of our export journey.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="process-card p-4 rounded-4 position-relative h-100">
                <div className="process-number">01</div>
                <div className="process-icon mb-4">
                  <i className="fas fa-handshake fa-2x text-primary"></i>
                </div>
                <h4 className="fw-bold text-white mb-3">Initial Contact & Consultation</h4>
                <p className="text-light mb-0">
                  Reach out to our expert team for personalized consultation about your herb and spice requirements,
                  quality standards, and shipping needs.
                </p>
                <div className="process-line d-none d-lg-block"></div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="process-card p-4 rounded-4 position-relative h-100">
                <div className="process-number">02</div>
                <div className="process-icon mb-4">
                  <i className="fas fa-seedling fa-2x text-primary"></i>
                </div>
                <h4 className="fw-bold text-white mb-3">Quality Selection & Sourcing</h4>
                <p className="text-light mb-0">
                  We carefully select and source the finest herbs and spices from sustainable farms,
                  ensuring premium quality and compliance with international standards.
                </p>
                <div className="process-line d-none d-lg-block"></div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="500">
              <div className="process-card p-4 rounded-4 position-relative h-100">
                <div className="process-number">03</div>
                <div className="process-icon mb-4">
                  <i className="fas fa-shipping-fast fa-2x text-primary"></i>
                </div>
                <h4 className="fw-bold text-white mb-3">Global Delivery & Support</h4>
                <p className="text-light mb-0">
                  Enjoy reliable international shipping with continuous support and after-sales service
                  to ensure complete satisfaction with your order.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/contact" className="btn btn-primary btn-lg px-5 py-3">Start Your Order</Link>
          </div>
        </div>
      </div>
      {/* Process Steps End */}

      {/* Featured Products Start */}
      <div className="container products overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3 mb-3">Featured Products</h5>
              <h2 className="display-6 mb-4">Premium Quality Herbs & Spices</h2>
              <p className="lead text-muted">Discover our range of carefully sourced and processed agricultural products</p>
            </div>
          </div>

          <div className="row g-4">
            {featuredProducts.map((prod) => {
              const imageSrc = prod.image && (prod.image.startsWith('http') || prod.image.startsWith('/') || prod.image.startsWith('data:'))
                ? prod.image
                : prod.image && !prod.image.includes('/')
                ? `${UPLOADS_URL}uploads/${prod.image}`
                : prod.image;

              return (
                <div
                  key={prod.id}
                  className="col-lg-6 col-xl-4"
                  data-aos="fade-up"
                  data-aos-delay={(prod.id % 3) * 100}
                >
                  <div className="product-card">
                    <Link to={`/product/${prod.id}`} className="product-image d-block">
                      <img src={imageSrc} className="img-fluid w-100" alt={prod.name} />
                    </Link>

                    <div className="product-content">
                      <div className="product-main-content">
                        <div className="product-category mb-2">
                          <span className="badge bg-primary-subtle text-primary">{prod.category}</span>
                        </div>
                        <h5 className="product-title mb-3">
                          <Link to={`/product/${prod.id}`} className="text-decoration-none text-dark hover-success">
                            {prod.name}
                          </Link>
                        </h5>
                        <div className="product-basic-info">
                          <p className="mb-2"><strong>Scientific Name:</strong> <em>{prod.scientificName}</em></p>
                          <p className="mb-0">
                            <strong>Status:</strong>{' '}
                            <span
                              className={`badge ms-1 ${
                                String(prod.status).toLowerCase().includes('organic')
                                  ? 'bg-success'
                                  : String(prod.status).toLowerCase().includes('out of stock')
                                  ? 'bg-danger'
                                  : 'bg-secondary'
                              }`}
                            >
                              {prod.status}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-2">
                        <Link to={`/product/${prod.id}`} className="btn btn-outline-success btn-sm rounded-pill w-100 fw-bold py-2" style={{ border: '1.5px solid #2d5016', color: '#2d5016' }}>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-5 pt-4" data-aos="fade-up">
            <h4 className="mb-4">Explore All Our Premium Products</h4>
            <Link to="/products" className="btn btn-outline-success btn-lg rounded-pill px-5">
              View All Products
            </Link>
          </div>
        </div>
      </div>
      {/* Featured Products End */}

      {/* Banner Start */}
      <div className="cta-banner py-5">
        <div className="container py-5">
          <div className="banner-content rounded-4 position-relative overflow-hidden" data-aos="zoom-in">
            <img src={banner1} className="img-fluid w-100" alt="ElEman Herbs Banner" style={{ height: '400px', objectFit: 'cover' }} />
            <div className="banner-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8">
                    <h6 className="text-warning mb-3">READY TO PARTNER WITH US?</h6>
                    <h2 className="display-5 fw-bold text-white mb-3">Premium Herbs & Spices Export</h2>
                    <h3 className="text-white mb-4">Interested in Quality Partnership?</h3>
                    <p className="lead text-light mb-4">
                      Don't hesitate to reach out for premium quality exports with competitive pricing and reliable delivery.
                    </p>
                    <div className="banner-actions d-flex flex-wrap justify-content-center gap-3">
                      <a href="https://wa.me/201115027599" className="btn btn-light btn-lg px-4 py-3 rounded-pill" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp me-2"></i>Chat on WhatsApp
                      </a>
                      <Link to="/contact" className="btn btn-primary btn-lg px-4 py-3 rounded-pill">
                        <i className="fas fa-envelope me-2"></i>Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}