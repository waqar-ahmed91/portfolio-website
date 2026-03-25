import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="contact-content">
        <AnimatedSection className="contact-header">
          <h1>Let's build something intelligent.</h1>
          <p>Whether it's an AI model, a high-growth SEO strategy, or an award-winning cinematic short—I am open to collaborations.</p>
        </AnimatedSection>
        
        <AnimatedSection className="contact-form-container" delay={0.2}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message &rarr;
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection className="contact-socials" delay={0.3}>
          <h3>Connect direct</h3>
          <div className="social-links-large">
            <a href="https://www.linkedin.com/in/waqarnu/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon-large">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/waqar-ahmed91" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.simpleicons.org/github/A0A0A0" alt="GitHub" className="social-icon-large" />
            </a>
            <a href="https://www.behance.net/waqarnu" aria-label="Behance" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.simpleicons.org/behance/A0A0A0" alt="Behance" className="social-icon-large" />
            </a>
            <a href="https://www.youtube.com/@TheSmallDoorFilms" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.simpleicons.org/youtube/A0A0A0" alt="YouTube" className="social-icon-large" />
            </a>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
