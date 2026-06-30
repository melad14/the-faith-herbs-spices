import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// Importing images from the img directory
import carousel1 from '../../img/Website-Header-latest.png';
import about2 from '../../img/about-2.png';
import banner1 from '../../img/green-fresh-basil-stone-background_70626-8490.jpg';

import prod1 from '../../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../../img/91DyTnfFwtL.jpg';
import prod4 from '../../img/1-12-1.jpg';
import prod5 from '../../img/1-1.jpeg';
import prod6 from '../../img/71vlBrYw5kL.jpg';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

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
                      <div className="col-lg-6 text-center text-lg-start">
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
        <div className="features-section py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h6 className="text-primary mb-2">WHY CHOOSE US</h6>
              <h2 className="display-5 fw-bold mb-3">Our Commitment to Excellence</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                For over two decades, we've been delivering the finest herbs and spices while maintaining sustainable practices that benefit both people and planet.
              </p>
            </div>

            <div className="row g-5 align-items-center">
              <div className="col-lg-4">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="feature-card p-4 rounded-4 h-100">
                      <div className="feature-icon mb-4">
                        <i className="fas fa-award fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Premium Quality Assurance</h5>
                      <p className="text-muted mb-0">
                        We ensure premium quality with 15+ international certificates and rigorous quality control at every stage.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="feature-card p-4 rounded-4 h-100">
                      <div className="feature-icon mb-4">
                        <i className="fas fa-globe fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Global Export Network</h5>
                      <p className="text-muted mb-0">
                        Serving 25+ countries with reliable international shipping and efficient export solutions worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 text-center">
                <div className="feature-image-container position-relative">
                  <img src={about2} className="img-fluid rounded-4 shadow-lg" alt="Quality Herbs" />
                  <div className="floating-badge bg-primary text-white rounded-pill px-4 py-2 position-absolute top-0 start-0 m-3">
                    Since 2001
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="feature-card p-4 rounded-4 h-100">
                      <div className="feature-icon mb-4">
                        <i className="fas fa-tag fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Competitive Pricing</h5>
                      <p className="text-muted mb-0">
                        Offering the best prices with high-quality assurance for premium herbs and spices in global markets.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="feature-card p-4 rounded-4 h-100">
                      <div className="feature-icon mb-4">
                        <i className="fas fa-leaf fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-3">Sustainable Practices</h5>
                      <p className="text-muted mb-0">
                        Our herbs and spices are grown using sustainable methods that preserve natural flavors and health benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <Link to="/about" className="btn btn-outline-success btn-lg px-5 py-3">Discover Our Story</Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section py-5 bg-light">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="about-content">
                  <h6 className="text-primary mb-2">ABOUT US</h6>
                  <h2 className="display-5 fw-bold mb-4">Two Decades of Excellence in Herbs & Spices</h2>
                  <p className="lead text-muted mb-4">
                    ElEman Herbs & Spices is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide with sustainable practices and carefully processed products.
                  </p>

                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="vision-mission-card p-4 rounded-4 h-100 bg-white">
                        <div className="icon-container bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                          <i className="fas fa-eye fa-lg text-white"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Our Vision</h5>
                        <p className="text-muted mb-0">
                          To become a leading global supplier of premium quality herbs and spices, fostering teamwork and collaboration.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="vision-mission-card p-4 rounded-4 h-100 bg-white">
                        <div className="icon-container bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                          <i className="fas fa-bullseye fa-lg text-white"></i>
                        </div>
                        <h5 className="fw-bold mb-3">Our Mission</h5>
                        <p className="text-muted mb-0">
                          Provide 100% genuine assistance with faster execution and expert advice for global customers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <div className="stats-card bg-primary text-white p-4 rounded-4 text-center">
                        <h3 className="display-4 fw-bold mb-1">20+</h3>
                        <p className="mb-0">Years of Experience</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="benefits-list">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-check-circle text-primary me-2"></i>
                          <span>100+ Herbs & Spices Range</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-check-circle text-primary me-2"></i>
                          <span>25+ Countries Served</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-check-circle text-primary me-2"></i>
                          <span>15+ International Certificates</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-check-circle text-primary me-2"></i>
                          <span>Sustainable Farming Practices</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link to="/about" className="btn btn-success btn-lg px-4 py-3 me-3">Our Story</Link>
                    <Link to="/contact" className="btn btn-outline-success btn-lg px-4 py-3">Get In Touch</Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-image position-relative">
                  <img src={about2} className="img-fluid rounded-4 shadow-lg" alt="ElEman Herbs Facility" />
                  <div className="team-badge bg-white rounded-4 p-4 shadow position-absolute bottom-0 end-0 m-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px' }}>
                        <i className="fas fa-users fa-lg text-white"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-1">ElEman Team</h5>
                        <p className="mb-0 text-muted">50+ Dedicated Professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className=" counter bg-secondary py-5">
          <div className=" py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-globe fa-2x"></i>
                  </div>
                  <div className="counter-counting my-3">
                    <span className="text-white fs-2 fw-bold" data-toggle="counter-up">25</span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Countries Served</h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-users fa-2x"></i>
                  </div>
                  <div className="counter-counting my-3">
                    <span className="text-white fs-2 fw-bold" data-toggle="counter-up">50</span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Team Members</h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-award fa-2x"></i>
                  </div>
                  <div className="counter-counting my-3">
                    <span className="text-white fs-2 fw-bold" data-toggle="counter-up">15</span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Quality Certificates</h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-seedling fa-2x"></i>
                  </div>
                  <div className="counter-counting my-3">
                    <span className="text-white fs-2 fw-bold" data-toggle="counter-up">100</span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Herbs & Spices</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Steps Start */}
      <div className="process-steps py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h6 className="text-primary mb-2">OUR WORKFLOW</h6>
            <h2 className="display-5 fw-bold text-white mb-4">Our Quality Process</h2>
            <p className="lead text-light mb-0">
              At ElEman Herbs, we follow a streamlined process to ensure premium quality herbs and spices
              reach our global customers with efficiency and reliability. Our commitment to excellence
              guides every step of our export journey.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
          <div className="text-center mt-5">
            <Link to="/contact" className="btn btn-primary btn-lg px-5 py-3">Start Your Order</Link>
          </div>
        </div>
      </div>
      {/* Process Steps End */}
      {/* Products Start */}
      <div className="container products overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="100">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3 mb-3">Our Products</h5>
              <h2 className="display-6 mb-4">Premium Quality Herbs & Spices</h2>
              <p className="lead text-muted">Discover our range of carefully sourced and processed agricultural products</p>
            </div>
          </div>

          <div className="row g-4">
            {/* Product 1 - Dehydrated Garlic */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
              <div className="product-card">
                <div className="product-image">
                  <img src={prod1} className="img-fluid w-100" alt="Dehydrated Garlic" />
                </div>

                <div className="product-content">
                  <div className="product-main-content">
                    <div className="product-category mb-2">
                      <span className="badge bg-primary-subtle text-primary">Dehydrated</span>
                    </div>
                    <h5 className="product-title mb-3">Dehydrated Garlic</h5>
                    <div className="product-basic-info">
                      <p className="mb-2"><strong>Scientific Name:</strong> Allium sativum</p>
                      <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="details-content">
                      <h6 className="text-white mb-3">Product Details</h6>
                      <div className="details-specs">
                        <p className="mb-2"><strong>Available Forms:</strong></p>
                        <ul className="list-unstyled mb-3">
                          <li>• Whole</li>
                          <li>• Powder</li>
                        </ul>
                        <p className="mb-2"><strong>Pesticides Status:</strong></p>
                        <ul className="list-unstyled">
                          <li>• Conventional</li>
                          <li>• AS Reg. EC396/2005</li>
                          <li>• Organic</li>
                        </ul>
                      </div>
                      <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                        Contact Us for Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 - Dehydrated Onion */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
              <div className="product-card">
                <div className="product-image">
                  <img src={prod2} className="img-fluid w-100" alt="Dehydrated Onion" />
                </div>

                <div className="product-content">
                  <div className="product-main-content">
                    <div className="product-category mb-2">
                      <span className="badge bg-primary-subtle text-primary">Dehydrated</span>
                    </div>
                    <h5 className="product-title mb-3">Dehydrated Onion</h5>
                    <div className="product-basic-info">
                      <p className="mb-2"><strong>Scientific Name:</strong> Allium cepa</p>
                      <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="details-content">
                      <h6 className="text-white mb-3">Product Details</h6>
                      <div className="details-specs">
                        <p className="mb-2"><strong>Available Forms:</strong></p>
                        <ul className="list-unstyled mb-3">
                          <li>• Kibbled</li>
                          <li>• Minced</li>
                          <li>• Granules</li>
                          <li>• Powder</li>
                        </ul>
                        <p className="mb-2"><strong>Pesticides Status:</strong></p>
                        <ul className="list-unstyled">
                          <li>• Conventional</li>
                          <li>• AS Reg. EC396/2005</li>
                          <li>• Organic</li>
                        </ul>
                      </div>
                      <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                        Contact Us for Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 - Liquorice Roots */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
              <div className="product-card">
                <div className="product-image">
                  <img src={prod3} className="img-fluid w-100" alt="Liquorice Roots" />
                </div>

                <div className="product-content">
                  <div className="product-main-content">
                    <div className="product-category mb-2">
                      <span className="badge bg-primary-subtle text-primary">Roots</span>
                    </div>
                    <h5 className="product-title mb-3">Liquorice Roots</h5>
                    <div className="product-basic-info">
                      <p className="mb-2"><strong>Scientific Name:</strong> Glycerriza glabra</p>
                      <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="details-content">
                      <h6 className="text-white mb-3">Product Details</h6>
                      <div className="details-specs">
                        <p className="mb-2"><strong>Available Forms:</strong></p>
                        <ul className="list-unstyled mb-3">
                          <li>• Whole</li>
                          <li>• Cut</li>
                          <li>• TBC</li>
                        </ul>
                        <p className="mb-2"><strong>Pesticides Status:</strong></p>
                        <ul className="list-unstyled">
                          <li>• Conventional</li>
                          <li>• AS Reg. EC396/2005</li>
                          <li>• Organic</li>
                        </ul>
                      </div>
                      <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                        Contact Us for Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4 - Rosemary */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
              <div className="product-card">
                <div className="product-image">
                  <img src={prod4} className="img-fluid w-100" alt="Rosemary" />
                </div>

                <div className="product-content">
                  <div className="product-main-content">
                    <div className="product-category mb-2">
                      <span className="badge bg-primary-subtle text-primary">Herbs</span>
                    </div>
                    <h5 className="product-title mb-3">Rosemary</h5>
                    <div className="product-basic-info">
                      <p className="mb-2"><strong>Scientific Name:</strong> Rosmarinus officinalis</p>
                      <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="details-content">
                      <h6 className="text-white mb-3">Product Details</h6>
                      <div className="details-specs">
                        <p className="mb-2"><strong>Available Forms:</strong></p>
                        <ul className="list-unstyled mb-3">
                          <li>• Cut (different sizes)</li>
                          <li>• Ground</li>
                        </ul>
                        <p className="mb-2"><strong>Pesticides Status:</strong></p>
                        <ul className="list-unstyled">
                          <li>• Conventional</li>
                          <li>• AS Reg. EC396/2005</li>
                          <li>• Organic</li>
                        </ul>
                      </div>
                      <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                        Contact Us for Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 5 - Lemon Grass */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
              <div className="product-card">
                <div className="product-image">
                  <img src={prod5} className="img-fluid w-100" alt="Lemon Grass" />
                </div>

                <div className="product-content">
                  <div className="product-main-content">
                    <div className="product-category mb-2">
                      <span className="badge bg-primary-subtle text-primary">Herbs</span>
                    </div>
                    <h5 className="product-title mb-3">Lemon Grass</h5>
                    <div className="product-basic-info">
                      <p className="mb-2"><strong>Scientific Name:</strong> Cymbopogon citratus</p>
                      <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="details-content">
                      <h6 className="text-white mb-3">Product Details</h6>
                      <div className="details-specs">
                        <p className="mb-2"><strong>Available Forms:</strong></p>
                        <ul className="list-unstyled mb-3">
                          <li>• Cut (different sizes)</li>
                          <li>• TBC</li>
                          <li>• Powder</li>
                        </ul>
                        <p className="mb-2"><strong>Pesticides Status:</strong></p>
                        <ul className="list-unstyled">
                          <li>• Conventional</li>
                          <li>• AS Reg. EC396/2005</li>
                          <li>• Organic</li>
                        </ul>
                      </div>
                      <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                        Contact Us for Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 6 - Verbascum */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="600">
              <div className="product-card">
                <div className="product-image">
                  <img src={prod6} className="img-fluid w-100" alt="Verbascum (Mullein)" />
                </div>

                <div className="product-content">
                  <div className="product-main-content">
                    <div className="product-category mb-2">
                      <span className="badge bg-primary-subtle text-primary">Flowers</span>
                    </div>
                    <h5 className="product-title mb-3">Verbascum (Mullein)</h5>
                    <div className="product-basic-info">
                      <p className="mb-2"><strong>Scientific Name:</strong> Verbascum thapsus</p>
                      <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                    </div>
                  </div>

                  <div className="product-details">
                    <div className="details-content">
                      <h6 className="text-white mb-3">Product Details</h6>
                      <div className="details-specs">
                        <p className="mb-2"><strong>Available Forms:</strong></p>
                        <ul className="list-unstyled mb-3">
                          <li>• Flowers</li>
                        </ul>
                        <p className="mb-2"><strong>Pesticides Status:</strong></p>
                        <ul className="list-unstyled">
                          <li>• Conventional (Out of Stock)</li>
                        </ul>
                      </div>
                      <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                        Contact Us for Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 pt-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="mb-4">Explore All Our Premium Products</h4>
            <Link to="/products" className="btn btn-outline-success btn-lg rounded-pill px-5">
              View All Products
            </Link>
          </div>
        </div>
      </div>
      {/* Products End */}
      {/* Banner Start */}
      <div className="cta-banner py-5">
        <div className=" py-5">
          <div className="banner-content rounded-4 position-relative overflow-hidden">
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
                      <a href="https://wa.me/your-number" className="btn btn-light btn-lg px-4 py-3 rounded-pill">
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
      <div className="contact-section py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h6 className="text-primary mb-2">GET IN TOUCH</h6>
            <h2 className="display-5 fw-bold mb-3">Contact ElEman Herbs</h2>
            <p className="lead text-muted">
              Ready to discuss your herb and spice requirements? Reach out to our team for premium quality products
              and exceptional service.
            </p>
          </div>

          <div className="row g-5">
            {/* Contact Information Column */}
            <div className="col-lg-5">
              <div className="contact-info">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="contact-card p-4 rounded-4 text-center h-100">
                      <div className="contact-icon mb-3">
                        <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-2">Our Address</h5>
                      <p className="text-muted mb-0">Bani-suef, Egypt</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contact-card p-4 rounded-4 text-center h-100">
                      <div className="contact-icon mb-3">
                        <i className="fas fa-envelope fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-2">Email Us</h5>
                      <a href="mailto:contact@ElEman.com" className="text-muted text-decoration-none">
                        contact@ElEman.com
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contact-card p-4 rounded-4 text-center h-100">
                      <div className="contact-icon mb-3">
                        <i className="fas fa-phone-alt fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-2">Call Us</h5>
                      <a href="tel:01115027599" className="text-muted text-decoration-none">
                        +201115027599
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contact-card p-4 rounded-4 text-center h-100">
                      <div className="contact-icon mb-3">
                        <i className="fas fa-globe fa-2x text-primary"></i>
                      </div>
                      <h5 className="fw-bold mb-2">Visit Website</h5>
                      <a href="https://www.ElEman.com" className="text-muted text-decoration-none" target="_blank" rel="noopener noreferrer">
                        www.ElEman.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional Contact Info */}
                <div className="mt-5">
                  <div className="business-hours bg-light rounded-4 p-4">
                    <h5 className="fw-bold mb-3">Business Hours</h5>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span className="text-muted">Sunday - Thursday</span>
                      <span className="fw-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between border-bottom py-2">
                      <span className="text-muted">Friday - Saturday</span>
                      <span className="fw-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-7">
              <div className="contact-form bg-white rounded-4 shadow-lg p-4 p-md-5">
                <h4 className="text-primary mb-4">Send Us a Message</h4>
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Full Name *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email Address *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="inquiry" required>
                          <option value="">Select Inquiry Type</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="retail">Retail Purchase</option>
                          <option value="partnership">Business Partnership</option>
                          <option value="custom">Custom Order</option>
                          <option value="other">Other</option>
                        </select>
                        <label htmlFor="inquiry">Inquiry Type *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                        <label htmlFor="subject">Message Subject *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Tell us about your requirements..."
                          id="message"
                          style={{ height: '150px' }}
                          required
                        ></textarea>
                        <label htmlFor="message">Your Message *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="privacy" required />
                        <label className="form-check-label text-muted" htmlFor="privacy">
                          I agree to the privacy policy and terms of service
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary btn-lg w-100 py-3" type="submit">
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* Full Width Map */}
      <div className="col-12 wow fadeInUp" data-wow-delay="0.5s">
        <div className="rounded">
          <iframe
            className="rounded w-100"
            style={{ height: '400px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
}