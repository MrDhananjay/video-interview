"use client";
import React from 'react';
import GsapScrollReveal from './GsapScrollReveal';

const whiteIcon = "/footer-logo.svg";
const vasitumBottom = "/vasi.svg";

export function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-main">
          {/* Logo Section */}
          <GsapScrollReveal delay={0.1}>
            <div className="footer-logo-section">
              <div className="footer-logo-wrapper">
                <img src={whiteIcon} alt="Logo Icon" style={{ width: '100%', height: '100%' }} />
              </div>
              {/* Vertical separator line - desktop only */}
              <div className="footer-separator-vertical" />
              {/* Horizontal separator line - mobile */}
              <div className="footer-separator-horizontal" />
            </div>
          </GsapScrollReveal>

          {/* Navigation Links */}
          <div className="footer-nav">
            {/* Vasitum Column */}
            <GsapScrollReveal delay={0.2}>
              <div className="footer-column">
                <h4 className="footer-heading">Vasitum</h4>
                <ul className="footer-list">
                  <li><a href="#" className="footer-link">About us</a></li>
                  <li><a href="#" className="footer-link">Our clients</a></li>
                  <li><a href="#" className="footer-link">Get in touch</a></li>
                  <li><a href="#" className="footer-link">E-Book</a></li>
                </ul>
              </div>
            </GsapScrollReveal>

            {/* Quick links Column */}
            <GsapScrollReveal delay={0.3}>
              <div className="footer-column">
                <h4 className="footer-heading">Quick links</h4>
                <ul className="footer-list">
                  <li><a href="#" className="footer-link">Blogs</a></li>
                  <li><a href="#" className="footer-link">Solutions</a></li>
                  <li><a href="#" className="footer-link">Privacy policy</a></li>
                  <li><a href="#" className="footer-link">Terms & conditions</a></li>
                </ul>
              </div>
            </GsapScrollReveal>

            {/* Jobs by industry Column */}
            <GsapScrollReveal delay={0.4}>
              <div className="footer-column">
                <h4 className="footer-heading">Jobs by industry</h4>
                <ul className="footer-list">
                  <li><a href="#" className="footer-link">Information Technology</a></li>
                  <li><a href="#" className="footer-link">Marketing</a></li>
                  <li><a href="#" className="footer-link">Sales</a></li>
                  <li><a href="#" className="footer-link">Artificial Intelligence</a></li>
                  <li><a href="#" className="footer-link">Data Science</a></li>
                </ul>
              </div>
            </GsapScrollReveal>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <GsapScrollReveal delay={0.5}>
          <div className="footer-bottom">
            <a href="mailto:meet@vasitum.com" className="footer-email">
              meet@vasitum.com
            </a>
            <p style={{ color: 'white', fontSize: '12px', lineHeight: 1.4 }}>
              © Copyright 2024, Vasitum
            </p>
          </div>
        </GsapScrollReveal>
      </div>

      {/* Large Watermark Text */}
      <div style={{ width: '100%', marginBottom: '-1px', position: 'relative', zIndex: 0 }}>
        <img src={vasitumBottom} alt="Vasitum Watermark" style={{ width: '100%', height: 'auto' }} />
      </div>
    </footer>
  );
}

export default Footer;
