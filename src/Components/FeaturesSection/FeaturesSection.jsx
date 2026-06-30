import React from 'react';
import { Link } from 'react-router-dom';
import about2 from '../../img/about-2.png';

export default function FeaturesSection() {
  return (
    <div className="features-section py-5">
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-primary mb-2">WHY CHOOSE US</h6>
          <h2 className="display-5 fw-bold mb-3">Our Commitment to Excellence</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            For over two decades, we've been delivering the finest herbs and spices while maintaining sustainable practices that benefit both people and planet.
          </p>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-4" data-aos="fade-right">
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

          <div className="col-lg-4 text-center" data-aos="zoom-in">
            <div className="feature-image-container position-relative">
              <img src={about2} className="img-fluid rounded-4 shadow-lg" alt="Quality Herbs" />
              <div className="floating-badge bg-primary text-white rounded-pill px-4 py-2 position-absolute top-0 start-0 m-3">
                Since 2001
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-left">
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

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/about" className="btn btn-outline-success btn-lg px-5 py-3">Discover Our Story</Link>
        </div>
      </div>
    </div>
  );
}
