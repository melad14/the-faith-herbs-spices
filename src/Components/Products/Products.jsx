import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, UPLOADS_URL } from '../../apiConfig';
import { products as localProducts } from '../../data/products';

export default function Products() {
  const [productsList, setProductsList] = useState(localProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API on mount
  useEffect(() => {
    Aos.init({
      duration: 1000
    });

    axios.get(`${API_URL}?type=products`)
      .then((res) => {
        if (res.data && res.data.products && res.data.products.length > 0) {
          const normalized = res.data.products.map(p => ({
            id: p.id,
            name: p.title || p.name,
            scientificName: p.scientificName || '',
            category: p.category || '',
            image: p.image || '',
            status: p.status || 'Organic',
            availableForms: p.availableForms || [],
            pesticidesStatus: p.pesticidesStatus || []
          }));
          setProductsList(normalized);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn("API dynamic fetch failed, using local static database fallback:", err);
        setProductsList(localProducts);
        setLoading(false);
      });
  }, []);

  // Filter products based on search term, category, and status
  useEffect(() => {
    let result = productsList;

    // Search filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          (product.scientificName && product.scientificName.toLowerCase().includes(term))
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Status filter
    if (selectedStatus !== 'All') {
      result = result.filter((product) => {
        const s = String(product.status).toLowerCase();
        if (selectedStatus === 'Organic') {
          return s.includes('organic');
        } else if (selectedStatus === 'Conventional') {
          return s.includes('conventional');
        } else if (selectedStatus === 'Out of Stock') {
          return s.includes('out of stock');
        }
        return true;
      });
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedStatus, productsList]);

  // Extract all unique categories
  const categories = ['All', ...new Set(productsList.map((p) => p.category).filter(Boolean))];

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedStatus('All');
  };

  if (loading) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner-border text-success mb-3" role="status"><span className="visually-hidden">Loading...</span></div>
        <p className="text-muted">Loading products...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4" data-aos="fade-down">Our Products</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0" data-aos="fade-up">
            <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link className="text-white" to="/products">Pages</Link></li>
            <li className="breadcrumb-item active text-white">Products</li>
          </ol>
        </div>
      </div>

      {/* Products Catalog Start */}
      <div className="container-fluid products overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5" data-aos="fade-up">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3 mb-3">Our Products</h5>
              <h2 className="display-6 mb-4">Premium Quality Herbs & Spices</h2>
              <p className="lead text-muted">Discover our range of carefully sourced and processed agricultural products</p>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="row g-4 mb-5 justify-content-center" data-aos="fade-up">
            {/* Search Bar */}
            <div className="col-lg-6 col-md-8">
              <div className="search-box-wrapper shadow-sm rounded-4 p-1 bg-white border d-flex align-items-center">
                <i className="fas fa-search text-muted ms-3 me-2"></i>
                <input
                  type="text"
                  className="form-control border-0 shadow-none py-2"
                  placeholder="Search products by name or scientific name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="btn btn-link text-muted border-0 me-2 p-1" 
                    onClick={() => setSearchTerm('')}
                  >
                    <i className="fas fa-times-circle"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Status Selector */}
            <div className="col-lg-4 col-md-6 d-flex align-items-center justify-content-center">
              <div className="status-filter-group btn-group w-100 shadow-sm rounded-4 overflow-hidden border p-1 bg-white">
                <button
                  type="button"
                  className={`btn btn-sm rounded-3 py-2 border-0 ${selectedStatus === 'All' ? 'btn-primary text-white' : 'btn-light text-dark bg-transparent'}`}
                  onClick={() => setSelectedStatus('All')}
                >
                  All Status
                </button>
                <button
                  type="button"
                  className={`btn btn-sm rounded-3 py-2 border-0 ${selectedStatus === 'Organic' ? 'btn-primary text-white' : 'btn-light text-dark bg-transparent'}`}
                  onClick={() => setSelectedStatus('Organic')}
                >
                  Organic
                </button>
                <button
                  type="button"
                  className={`btn btn-sm rounded-3 py-2 border-0 ${selectedStatus === 'Conventional' ? 'btn-primary text-white' : 'btn-light text-dark bg-transparent'}`}
                  onClick={() => setSelectedStatus('Conventional')}
                >
                  Conventional
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="col-12 text-center mt-4">
              <div className="d-flex flex-wrap justify-content-center gap-2 category-pills-container">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`btn category-pill-btn shadow-sm transition ${
                      selectedCategory === cat ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== 'All' || selectedStatus !== 'All' || searchTerm) && (
            <div className="row mb-4" data-aos="fade-up">
              <div className="col-12 d-flex flex-wrap align-items-center gap-2 justify-content-center">
                <span className="text-muted small">Active Filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill border">
                    Category: {selectedCategory}
                    <i className="fas fa-times ms-2 pointer" onClick={() => setSelectedCategory('All')}></i>
                  </span>
                )}
                {selectedStatus !== 'All' && (
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill border">
                    Status: {selectedStatus}
                    <i className="fas fa-times ms-2 pointer" onClick={() => setSelectedStatus('All')}></i>
                  </span>
                )}
                {searchTerm && (
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill border">
                    Query: "{searchTerm}"
                    <i className="fas fa-times ms-2 pointer" onClick={() => setSearchTerm('')}></i>
                  </span>
                )}
                <button 
                  className="btn btn-sm btn-link text-decoration-none text-danger fw-semibold px-2"
                  onClick={handleResetFilters}
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="row g-4">
            {filteredProducts.map((prod) => {
              const imageSrc = prod.image && (prod.image.startsWith('http') || prod.image.startsWith('/') || prod.image.startsWith('data:'))
                ? prod.image
                : prod.image && !prod.image.includes('/')
                ? `${UPLOADS_URL}uploads/${prod.image}`
                : prod.image;

              return (
                <div
                  key={prod.id}
                  className="col-lg-6 col-xl-4"
                  data-aos="fade-up"
                  data-aos-delay={(prod.id % 3) * 100}
                >
                  <div className="product-card">
                    <Link to={`/product/${prod.id}`} className="product-image d-block">
                      <img src={imageSrc} className="img-fluid w-100" alt={prod.name} />
                    </Link>
                    <div className="product-content">
                      <div className="product-main-content">
                        <div className="product-category mb-2">
                          <span className="badge bg-primary-subtle text-primary">{prod.category}</span>
                        </div>
                        <h5 className="product-title mb-3">
                          <Link to={`/product/${prod.id}`} className="text-decoration-none text-dark hover-success">
                            {prod.name}
                          </Link>
                        </h5>
                        <div className="product-basic-info">
                          <p className="mb-2"><strong>Scientific Name:</strong> <em>{prod.scientificName}</em></p>
                          <p className="mb-0">
                            <strong>Status:</strong>{' '}
                            <span
                              className={`badge ms-1 ${
                                String(prod.status).toLowerCase().includes('organic')
                                  ? 'bg-success'
                                  : String(prod.status).toLowerCase().includes('out of stock')
                                  ? 'bg-danger'
                                  : 'bg-secondary'
                              }`}
                            >
                              {prod.status}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-2">
                        <Link to={`/product/${prod.id}`} className="btn btn-outline-success btn-sm rounded-pill w-100 fw-bold py-2" style={{ border: '1.5px solid #2d5016', color: '#2d5016' }}>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* No Products Found State */}
            {filteredProducts.length === 0 && (
              <div className="col-12 py-5 text-center" data-aos="fade-up">
                <div className="no-results-card py-5 px-4 rounded-4 shadow-sm border bg-light max-width-md mx-auto" style={{ maxWidth: '500px' }}>
                  <div className="no-results-icon mb-4">
                    <i className="fas fa-search-minus fa-4x text-muted opacity-50"></i>
                  </div>
                  <h4 className="fw-bold mb-3">No Products Found</h4>
                  <p className="text-muted mb-4">
                    We couldn't find any products matching your current search criteria. Try adjusting your keywords or clearing the filters.
                  </p>
                  <button className="btn btn-success px-4 py-2 rounded-pill" onClick={handleResetFilters}>
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Products Catalog End */}
    </>
  );
}