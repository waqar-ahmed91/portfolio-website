import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      <AnimatedSection className="about-header">
        <h1>About the Architect</h1>
        <p className="philosophy">"Where logic meets storytelling."</p>
      </AnimatedSection>
      
      <div className="about-content">
        <AnimatedSection className="bio-section" delay={0.1}>
          <div className="profile-placeholder">
            <div className="profile-image-wrapper">
              <img src="https://pps.services.adobe.com/api/profile/990A7B2A53C3FE260A490D45@AdobeID/image/c397ac00-043a-43b4-9985-27777a5ff030/230" alt="Waqar Ahmed" className="profile-image" />
            </div>
          </div>
          <div className="bio-text">
            <h2>The Journey</h2>
            <p>Starting out in Data Science, I was fascinated by the patterns hidden within noise. Analyzing millions of rows taught me how to extract truth from data. But data without a narrative is just noise.</p>
            <p>This realization pushed me into AI Engineering and SEO Strategy, where I learned to systematically build engines of growth.</p>
            <p>Today, as an AI Filmmaker and Creative Technologist, I use neural networks not just to optimize systems, but to craft cinematic experiences. It is a fusion of analytical rigor and creative vision.</p>
            <br/>
            <a href="#" className="btn btn-secondary cv-btn">Download CV</a>
          </div>
        </AnimatedSection>

        <AnimatedSection className="timeline-section" delay={0.2}>
          <h2>Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2020</span>
              <div className="content">
                <h4>Data Scientist</h4>
                <p>Built predictive models and data pipelines handling terabytes of analytics data.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="year">2022</span>
              <div className="content">
                <h4>AI Engineer & SEO Strategist</h4>
                <p>Developed autonomous growth engines using NLP and LLMs to scale organic reach exponentially.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="year">Present</span>
              <div className="content">
                <h4>AI Filmmaker & Creative Lead</h4>
                <p>Pioneering generative workflows with Kling, Midjourney, and ElevenLabs to direct award-winning AI shorts.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
};

export default About;
