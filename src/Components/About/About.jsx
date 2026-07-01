import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import AboutSection from '../AboutSection/AboutSection';
import CounterSection from '../CounterSection/CounterSection';
import useSEO from '../../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'About Us | ElEman Herbs & Spices | من نحن - شركة الايمان لتصدير الأعشاب',
    description: 'تعرف على شركة الايمان لتصدير النباتات الطبية والعطرية والتوابل - رؤيتنا ورسالتنا وجودة مصنعنا ومنتجاتنا الموثوقة عالمياً.',
    keywords: 'تاريخ الايمان هيربس, مصنع الايمان, من نحن الايمان, تصدير اعشاب مصر'
  });

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