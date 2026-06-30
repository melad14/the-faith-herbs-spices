import React, { useEffect } from 'react'
import about2 from '../../img/about-2.png';
import banner1 from '../../img/green-fresh-basil-stone-background_70626-8490.jpg';


import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-white">About</li>
                    </ol>    
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




        </>
    )
}