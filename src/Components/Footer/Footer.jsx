import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5">
          {/* About Us Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h4 className=" mb-4">About Us</h4>
                <p className="mb-3">
                                    ElEman herbs & spices is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide. Our herbs and spices are grown and harvested using sustainable practices and are carefully processed to preserve their natural flavor and health benefits.

                </p>
              </div>
          
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className=" mb-4">Quick Links</h4>
              <Link to="/about"><i className="fas fa-angle-right me-2"></i> About</Link>
              <Link to="/services"><i className="fas fa-angle-right me-2"></i> services</Link>
              <Link to="/about"><i className="fas fa-angle-right me-2"></i> core value</Link>

              <Link to="contact"><i className="fas fa-angle-right me-2"></i> Contact us</Link>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className=" mb-4">Business Hours</h4>
              <div className="mb-3">
                <h6 className="text-muted mb-0"> sat- Thursday:</h6>
                <p className=" mb-0">09.00 am to 07.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Thursday:</h6>
                <p className=" mb-0">10.00 am to 05.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Vacation:</h6>
                <p className=" mb-0">All friday is our vacation</p>
              </div>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className=" mb-4">Contact Info</h4>
              <a href="https://maps.google.com/?q=Beni+Suef,+Egypt" target="_blank" rel="noopener noreferrer" className="mb-2 text-decoration-none">
                <i className="fa fa-map-marker-alt me-2"></i> Bani Suef, Egypt
              </a>
              <a href="mailto:ElEman@gmail.com" className="mb-2 text-decoration-none">
                <i className="fas fa-envelope me-2"></i> ElEman@gmail.com
              </a>
              <a href="tel:+201115027599" className="mb-2 text-decoration-none">
                <i className="fas fa-phone me-2"></i> +201115027599
              </a>
              <a href="https://www.ElEman.com" target="_blank" rel="noopener noreferrer" className="mb-3 text-decoration-none">
                <i className="fas fa-print me-2"></i> ElEman-herbs.com
              </a>
              <div className="d-flex">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-md-square rounded-circle me-3" aria-label="Facebook">
                  <i className="fab fa-facebook-f "></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-md-square rounded-circle me-3" aria-label="Twitter">
                  <i className="fab fa-twitter "></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-md-square rounded-circle me-3" aria-label="Instagram">
                  <i className="fab fa-instagram "></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-md-square rounded-circle me-0" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
