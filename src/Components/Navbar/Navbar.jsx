import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => {
    return `nav-item nav-link${isActive ? ' active' : ''}`;
  };

  return (
    <div className="container-fluid nav-bar p-0 fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-3">
          <h1 className="display-5 text-secondary m-0 logoo">
            <img src={logo} className="img-fluid" alt="ElEman Logo" />
          </h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
            <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
            <NavLink to="/products" className={getNavLinkClass}>Products</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;