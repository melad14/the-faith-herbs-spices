import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
             <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item "><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item "><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item  active text-white">Contact</li>
                    </ol>    
                </div>
            </div>
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
                      <a href="tel:01204684565" className="text-muted text-decoration-none">
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
    )
}