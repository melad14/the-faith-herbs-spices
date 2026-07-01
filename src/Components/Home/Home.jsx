import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, UPLOADS_URL } from '../../apiConfig';
import useSEO from '../../hooks/useSEO';

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
  useSEO({
    title: 'ElEman Herbs & Spices | شركة الايمان للاستيراد والتصدير والنباتات الطبية',
    description: 'شركة الايمان للاستيراد والتصدير والنباتات الطبية والعطرية (ElEman Herbs & Spices) - من كبار مصدري الأعشاب والتوابل والبذور الفاخرة والعضوية من مصر لكافة أنحاء العالم. elemainherbs.',
    keywords: 'الايمان هيربس, نباتات الايمان, الايمان للاستيراد والتصدير, الايمان للنباتات الطبيه, elemainherbs, eleman, eleman herbs'
  });

  const [productsList, setProductsList] = useState(localProducts);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [mediaList, setMediaList] = useState([]);

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

    axios.get(`${API_URL}?type=settings`)
      .then((res) => {
        if (res.data && res.data.settings && res.data.settings.media_items && res.data.settings.media_items.length > 0) {
          setMediaList(res.data.settings.media_items);
        }
      })
      .catch((err) => {
        console.warn("API settings fetch failed, using local media fallback:", err);
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

        {/* Media Gallery Start */}
        {mediaList && mediaList.length > 0 && (
          <div className="container-fluid py-5 bg-light">
          <div className="container py-5">
            <div className="section-title text-center mb-5" data-aos="fade-up">
              <div className="sub-style">
                <h5 className="sub-title text-primary px-3 mb-3">Media Gallery</h5>
                <h2 className="display-6 mb-4">Our Facilities & Certificates</h2>
                <p className="lead text-muted">A glimpse of our premium quality standards, processing factory, and international certifications</p>
              </div>
            </div>

            <div className="row g-4">
              {mediaList.map((item, idx) => {
                const fileKey = item.file || item.url;
                const mediaSrc = fileKey && (fileKey.startsWith('http') || fileKey.startsWith('/') || fileKey.startsWith('data:'))
                  ? fileKey
                  : fileKey && !fileKey.includes('/')
                  ? `${UPLOADS_URL}uploads/${fileKey}`
                  : fileKey;

                const isVideo = item.type === 'video';
                const isPlaying = playingVideoId === item.id;

                return (
                  <div key={item.id || idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative group h-100" style={{ minHeight: '320px', backgroundColor: isVideo ? '#000' : '#eaeaea' }}>
                      {isVideo ? (
                        <video 
                          src={mediaSrc} 
                          className="card-img w-100 h-100" 
                          style={{ objectFit: 'contain', minHeight: '320px', cursor: isPlaying ? 'auto' : 'pointer' }} 
                          controls={isPlaying}
                          autoPlay={isPlaying}
                          muted={!isPlaying}
                          playsInline 
                          preload="metadata"
                          onPlay={() => setPlayingVideoId(item.id)}
                          onPause={() => setPlayingVideoId(null)}
                          onEnded={() => setPlayingVideoId(null)}
                        />
                      ) : (
                        <img src={mediaSrc} className="card-img w-100 h-100" alt={item.title} style={{ objectFit: 'contain', minHeight: '320px' }} />
                      )}

                      {/* Video Play Overlay Button */}
                      {isVideo && !isPlaying && (
                        <button 
                          type="button"
                          onClick={() => setPlayingVideoId(item.id)}
                          className="position-absolute top-50 start-50 translate-middle bg-success border-0 rounded-circle d-flex align-items-center justify-content-center shadow-lg" 
                          style={{ width: '65px', height: '65px', cursor: 'pointer', zIndex: 3, transition: 'transform 0.2s' }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.0)'}
                        >
                          <i className="fas fa-play text-white fa-lg"></i>
                        </button>
                      )}

                      {/* Text details overlay - fades out when playing */}
                      <div 
                        className={`position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 transition-all`} 
                        style={{ 
                          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)', 
                          zIndex: isPlaying ? 0 : 2,
                          opacity: isPlaying ? 0 : 1,
                          pointerEvents: isPlaying ? 'none' : 'auto',
                          transition: 'opacity 0.3s ease, z-index 0.3s ease'
                        }}
                      >
                        <div className="mb-2">
                          <span className="badge bg-success text-uppercase py-1 px-2">{item.type}</span>
                        </div>
                        <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                        <p className="text-white-50 small mb-3 text-truncate">{item.description}</p>
                        <Link to={`/media/${item.id}`} className="btn btn-sm btn-outline-light rounded-pill w-100 fw-bold py-2">
                          View Full Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        )}
        {/* Media Gallery End */}

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

      {/* Media Gallery moved to follow Why Choose Us section */}

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