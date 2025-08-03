import React from 'react';
import './MainBanner.css';

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="banner-content">
        <h1 className="banner-heading">Chairman</h1>
        
        <div className="banner-menu">
          <span>Destinations</span>
          <span>Tour Packages</span>
          <span>Experiences</span>
        </div>

        <div className="banner-divider"></div>

        <h2 className="banner-title">Discover the Pearl of Indian Ocean</h2>
        <p className="banner-subtitle">Explore Sri Lanka, Your Way</p>
        <p className="banner-description">Private, luxury tours crafted for unforgettable journeys</p>

        <div className="banner-actions">
          <button className="banner-button">See our solutions</button>
          <button className="banner-button secondary">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;