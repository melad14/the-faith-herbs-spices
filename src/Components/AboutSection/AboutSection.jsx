import React from 'react';
import { Link } from 'react-router-dom';
import about2 from '../../img/about-2.png';

export default function AboutSection() {
  return (
    <div className="about-section py-5 bg-light">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
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

          <div className="col-lg-6" data-aos="fade-left">
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
  );
}
