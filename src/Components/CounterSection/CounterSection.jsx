import React from 'react';

export default function CounterSection() {
  return (
    <div className="counter bg-secondary py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="100">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-globe fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">25</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Countries Served</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="300">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-users fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">50</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Team Members</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="500">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-award fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">15</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Quality Certificates</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="700">
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-seedling fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">100</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Herbs & Spices</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
