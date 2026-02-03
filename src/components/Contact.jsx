"use client";
import React, { useState } from 'react';
import GsapScrollReveal from './GsapScrollReveal';

const SmsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#335590" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#335590" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    email1: '',
    email2: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        {/* Contact Card - positioned to overlap footer */}
        <div className="contact-card">
          {/* Left Side */}
          <GsapScrollReveal delay={0.1}>
            <div className="contact-left">
              <div className="contact-info">
                <h2 className="contact-title">
                  Let's talk
                </h2>
                <p className="contact-subtitle">
                  Ask us anything or just say hi........
                </p>
              </div>
              <a href="mailto:meet@vasitum.com" className="contact-email-link">
                <SmsIcon />
                meet@vasitum.com
              </a>
            </div>
          </GsapScrollReveal>

          {/* Right Side - Form */}
          <GsapScrollReveal delay={0.3}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-fields">
                {/* Row 1: Two email fields */}
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-label">Your Email</label>
                    <div className="contact-input-wrapper">
                      <input
                        type="email"
                        name="email1"
                        value={formData.email1}
                        onChange={handleChange}
                        placeholder="Type here..."
                        className="contact-input"
                      />
                    </div>
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Your Name</label>
                    <div className="contact-input-wrapper">
                      <input
                        type="text"
                        name="email2"
                        value={formData.email2}
                        onChange={handleChange}
                        placeholder="Type here..."
                        className="contact-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Message field (full width) */}
                <div className="contact-field-full">
                  <label className="contact-label">Your Message</label>
                  <div className="contact-input-wrapper">
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type here..."
                      className="contact-input"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="contact-submit-btn">
                Send
              </button>
            </form>
          </GsapScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
