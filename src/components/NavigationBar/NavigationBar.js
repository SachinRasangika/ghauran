import React from 'react';
import './NavigationBar.css'; // Assuming you have a CSS file for style

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top secondary navigation */}
      <div className="top-secondary">
        <div className="secondary-links">
          <a href="#" className="secondary-link">Explore</a>
          <a href="#" className="secondary-link">Media</a>
          <a href="#" className="secondary-link">MICE</a>
        </div>
        
        <div className="divider"></div>
        
        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            <span className="icon">f</span>
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <span className="icon">i</span>
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <span className="icon">in</span>
          </a>
          <a href="#" className="social-link" aria-label="YouTube">
            <span className="icon">yt</span>
          </a>
        </div>
        
        <div className="divider"></div>
        
        <a href="#" className="secondary-link">Trade Login</a>
        
        <div className="divider"></div>
        
        <div className="language-selector">
          <span className="icon">🌐</span>
          <span>EN</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="main-navbar">
        <div className="logo-container">
          <div className="logo-icon">✷</div>
          <span className="logo-text">Ghauran</span>
        </div>
        
        <nav className="navigation-links">
          <div className="nav-item">
            <span>Destinations</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="nav-item">
            <span>Tour Packages</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="nav-item">
            <span>Experiences</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="nav-item">
            <span>About Us</span>
          </div>
        </nav>
        
        <div className="nav-controls">
          <div className="currency-selector">
            <span>USD</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <button className="plan-trip-btn">
            <span className="heart-icon">♥</span>
            <span>Plan My Trip</span>
          </button>
          <button className="login-btn">
            <span className="user-icon">👤</span>
            <span>Log In</span>
          </button>
          <button className="mobile-menu-btn">
            <span className="menu-icon">☰</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;