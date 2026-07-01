import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { API_URL, UPLOADS_URL } from '../../apiConfig';
import { products as localProducts } from '../../data/products';
import useSEO from '../../hooks/useSEO';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: product ? `${product.title} (${product.scientificName}) | ElEman Herbs & Spices` : 'Product Details | ElEman Herbs & Spices',
    description: product ? `${product.title} - Category: ${product.category}, Available Forms: ${product.availableForms ? product.availableForms.join(', ') : ''}, Pesticides Status: ${product.pesticidesStatus ? product.pesticidesStatus.join(', ') : ''}. Premium organic export from Egypt.` : 'Product Details from ElEman Herbs & Spices.',
    keywords: product ? `${product.title}, ${product.scientificName}, ${product.category}, eleman product` : 'herbs egypt'
  });

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    axios.get(`${API_URL}?type=products`)
      .then(res => {
        if (res.data && res.data.products && res.data.products.length > 0) {
          const found = res.data.products.find(p => p.id === id || String(p.id) === String(id));
          if (found) {
            setProduct(found);
            setLoading(false);
            return;
          }
        }
        // Fallback to local products
        const localFound = localProducts.find(p => String(p.id) === String(id) || p.id === id);
        setProduct(localFound || null);
        setLoading(false);
      })
      .catch(err => {
        console.warn("API unavailable, falling back to local static products:", err);
        const localFound = localProducts.find(p => String(p.id) === String(id) || p.id === id);
        setProduct(localFound || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner-border text-success mb-3" role="status"><span className="visually-hidden">Loading...</span></div>
        <p className="text-muted">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className="fw-bold mb-3">Product Not Found</h3>
        <Link to="/products" className="btn btn-success px-4 py-2 rounded-pill fw-bold">Back to Products</Link>
      </div>
    );
  }

  // Handle local vs uploaded image path
  const imageSrc = product.image && (product.image.startsWith('http') || product.image.startsWith('/') || product.image.startsWith('data:'))
    ? product.image
    : product.image && !product.image.includes('/')
    ? `${UPLOADS_URL}uploads/${product.image}`
    : product.image;

  return (
    <div className="container-fluid bg-light py-5" style={{ minHeight: '85vh' }}>
      <div className="container">
        <div className="mb-4" data-aos="fade-right">
          <Link to="/products" className="btn btn-outline-success rounded-pill px-4 fw-bold shadow-sm" style={{ border: '1.5px solid #2d5016' }}>
            <i className="fas fa-arrow-left me-2"></i> Back to Products
          </Link>
        </div>
        
        <div className="row g-5">
          {/* Image Column */}
          <div className="col-lg-5" data-aos="fade-up">
            <div className="card border-0 shadow-lg p-3 d-flex align-items-center justify-content-center bg-white" style={{ minHeight: '400px', borderRadius: '24px' }}>
              <img 
                src={imageSrc} 
                alt={product.title || product.name} 
                className="img-fluid rounded-4" 
                style={{ maxHeight: '420px', objectFit: 'contain', width: '100%' }} 
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div className="h-100 p-4 p-md-5 rounded-4 bg-white shadow-lg border-start border-5 border-success position-relative overflow-hidden" style={{ borderLeftColor: '#2d5016 !important' }}>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill border fw-semibold">{product.category}</span>
                <span className={`badge px-3 py-2 rounded-pill border fw-semibold ${
                  String(product.status).toLowerCase().includes('organic') 
                    ? 'bg-success text-white' 
                    : String(product.status).toLowerCase().includes('out of stock')
                    ? 'bg-danger text-white'
                    : 'bg-secondary text-white'
                }`}>{product.status}</span>
              </div>

              <h1 className="display-5 fw-bold mb-3 text-success-gradient" style={{ fontFamily: "'Playfair Display', serif", color: '#1b3c06' }}>
                {product.title || product.name}
              </h1>

              <p className="fs-5 text-muted mb-4">
                <strong>Scientific Name:</strong> <em style={{ color: '#2d5016' }}>{product.scientificName}</em>
              </p>

              <hr className="my-4" />

              <div className="row g-4 mb-4">
                {product.availableForms && product.availableForms.length > 0 && (
                  <div className="col-md-6">
                    <h6 className="fw-bold mb-3 text-success" style={{ letterSpacing: '0.5px' }}>
                      <i className="fas fa-cubes me-2"></i> Available Forms
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {product.availableForms.map((f, i) => (
                        <span key={i} className="badge bg-light text-dark border px-3 py-2 rounded-pill small fw-medium">{f}</span>
                      ))}
                    </div>
                  </div>
                )}

                {product.pesticidesStatus && product.pesticidesStatus.length > 0 && (
                  <div className="col-md-6">
                    <h6 className="fw-bold mb-3 text-success" style={{ letterSpacing: '0.5px' }}>
                      <i className="fas fa-shield-alt me-2"></i> Pesticides Status
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {product.pesticidesStatus.map((p, i) => (
                        <span key={i} className="badge bg-light text-dark border px-3 py-2 rounded-pill small fw-medium">{p}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 pt-4 border-top">
                <Link 
                  to={`/contact?product=${encodeURIComponent(product.title || product.name)}`} 
                  className="btn btn-success fw-bold px-4 py-3 rounded-pill shadow-md transition-all hover-up"
                  style={{ background: 'var(--premium-green-gradient)', border: 'none' }}
                >
                  <i className="fas fa-paper-plane me-2"></i> Inquire About Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
