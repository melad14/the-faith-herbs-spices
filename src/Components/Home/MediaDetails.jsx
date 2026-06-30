import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { API_URL, UPLOADS_URL } from '../../apiConfig';

export default function MediaDetails() {
  const { id } = useParams();
  const [mediaItem, setMediaItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    axios.get(`${API_URL}?type=settings`)
      .then(res => {
        if (res.data && res.data.settings && res.data.settings.media_items) {
          const found = res.data.settings.media_items.find(item => item.id === id || String(item.id) === String(id));
          setMediaItem(found || null);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching media details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner-border text-success mb-3" role="status"><span className="visually-hidden">Loading...</span></div>
        <p className="text-muted">Loading showcase details...</p>
      </div>
    );
  }

  if (!mediaItem) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className="fw-bold mb-3">Post Not Found</h3>
        <Link to="/" className="btn btn-success px-4 py-2 rounded-pill fw-bold">Back to Home</Link>
      </div>
    );
  }

  const fileUrl = `${UPLOADS_URL}uploads/${mediaItem.file || mediaItem.url}`;

  return (
    <div className="container-fluid bg-light py-5" style={{ minHeight: '85vh' }}>
      <div className="container">
        <div className="mb-4" data-aos="fade-right">
          <Link to="/" className="btn btn-outline-success rounded-pill px-4 fw-bold shadow-sm" style={{ border: '1.5px solid #2d5016' }}>
            <i className="fas fa-arrow-left me-2"></i> Back to Home
          </Link>
        </div>

        <div className="row g-5">
          {/* Media Player/Viewer Column */}
          <div className="col-lg-6" data-aos="fade-up">
            <div className="card border-0 shadow-lg bg-dark overflow-hidden rounded-4 text-center" style={{ minHeight: '400px' }}>
              {mediaItem.type === 'video' ? (
                <video 
                  src={fileUrl} 
                  controls 
                  autoPlay 
                  className="w-100 h-100" 
                  style={{ maxHeight: '550px', objectFit: 'contain', background: '#000' }} 
                />
              ) : (
                <div className="position-relative overflow-hidden w-100 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '400px', backgroundColor: '#0d1b0f' }}>
                  {/* Blurred Backdrop */}
                  <div 
                    className="position-absolute w-100 h-100" 
                    style={{ 
                      backgroundImage: `url(${fileUrl})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center', 
                      filter: 'blur(25px) brightness(0.75)', 
                      opacity: 0.45, 
                      transform: 'scale(1.1)', 
                      zIndex: 0 
                    }} 
                  />
                  <img 
                    src={fileUrl} 
                    alt={mediaItem.title} 
                    className="img-fluid position-relative" 
                    style={{ maxHeight: '500px', objectFit: 'contain', zIndex: 1, padding: '10px' }} 
                  />
                </div>
              )}
            </div>
          </div>

          {/* Text/Details Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="h-100 p-4 p-md-5 rounded-4 bg-white shadow-lg d-flex flex-column justify-content-between">
              <div>
                <span className={`badge px-3 py-2 rounded-pill mb-3 ${mediaItem.type === 'video' ? 'bg-danger' : 'bg-success'}`}>
                  {mediaItem.type === 'video' ? 'Video Post' : 'Image Post'}
                </span>
                
                <h1 className="display-6 fw-bold mb-3 text-success-gradient" style={{ fontFamily: "'Playfair Display', serif", color: '#1b3c06' }}>
                  {mediaItem.title}
                </h1>
                
                <p className="fs-5 text-muted mb-4">{mediaItem.description}</p>
                
                {mediaItem.content && (
                  <div className="mt-4 pt-4 border-top">
                    <h5 className="fw-bold mb-3 text-success">Additional Details</h5>
                    <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: '1.05rem', color: '#444' }}>
                      {mediaItem.content}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 pt-4 border-top">
                <Link 
                  to={`/contact?subject=${encodeURIComponent(`Inquiry regarding: ${mediaItem.title}`)}`} 
                  className="btn btn-success fw-bold px-4 py-3 rounded-pill shadow-md transition-all hover-up"
                  style={{ background: 'var(--premium-green-gradient)', border: 'none' }}
                >
                  <i className="fas fa-paper-plane me-2"></i> Contact Us About This
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
