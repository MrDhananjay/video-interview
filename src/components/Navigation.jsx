"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const BrandIcon = "/navbar-logo.svg";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Horizontal Mark */}
        <div className="navbar-logo">
          <img src={BrandIcon} alt="Logo Icon" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Looking for a job?</a>
        </div>

        {/* Sign In Button - Desktop */}
        <button className="nav-signin-btn navbar-signin-desktop">
          Sign In
        </button>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Looking for a job?</a>
          <button className="nav-signin-btn" style={{ width: '100%', marginTop: '16px' }}>
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
