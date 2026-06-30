import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import AboutSection from '../AboutSection/AboutSection';
import CounterSection from '../CounterSection/CounterSection';

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4" data-aos="fade-down">About Us</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0" data-aos="fade-up">
            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link className="text-white" to="/about">Pages</Link></li>
            <li className="breadcrumb-item active text-white">About</li>
          </ol>
        </div>
      </div>

      <FeaturesSection />
      <AboutSection />
      <CounterSection />
    </>
  );
}