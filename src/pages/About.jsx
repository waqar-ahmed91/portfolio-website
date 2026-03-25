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
          <p className="timeline-subtitle">A decade of building, learning, and creating.</p>

          <div className="wave-timeline">
            <div className="wave-spine" />

            <div className="wave-item wave-item--top">
              <div className="wave-card">
                <span className="wave-year">2009 – 2013</span>
                <h4>B.Sc. Electrical Engineering</h4>
                <p>Systems, circuits &amp; control engineering fundamentals.</p>
              </div>
              <div className="wave-dot" />
              <div className="wave-connector" />
            </div>

            <div className="wave-item wave-item--bottom">
              <div className="wave-connector" />
              <div className="wave-dot" />
              <div className="wave-card">
                <span className="wave-year">2014</span>
                <h4>Descon &amp; Netsol</h4>
                <p>PM Intern → Database Engineer. First industry exposure.</p>
              </div>
            </div>

            <div className="wave-item wave-item--top">
              <div className="wave-card">
                <span className="wave-year">2014 – 2018</span>
                <h4>Electrical Supervisor</h4>
                <p>Future Vision Technologies — led technical teams on large-scale deployments.</p>
              </div>
              <div className="wave-dot" />
              <div className="wave-connector" />
            </div>

            <div className="wave-item wave-item--bottom">
              <div className="wave-connector" />
              <div className="wave-dot" />
              <div className="wave-card">
                <span className="wave-year">2015 – 2019</span>
                <h4>Freelance Designer</h4>
                <p>Fiverr &amp; Upwork — branding, UI &amp; visual design for global clients.</p>
              </div>
            </div>

            <div className="wave-item wave-item--top">
              <div className="wave-card">
                <span className="wave-year">Post 2018</span>
                <h4>Masters — Engineering Management</h4>
                <p>Paired with self-directed study in Data Science, ML &amp; UI/UX.</p>
              </div>
              <div className="wave-dot" />
              <div className="wave-connector" />
            </div>

            <div className="wave-item wave-item--bottom wave-item--active">
              <div className="wave-connector" />
              <div className="wave-dot" />
              <div className="wave-card">
                <span className="wave-year">2020 – Present</span>
                <h4>AI Engineer &amp; Data Scientist</h4>
                <p>Freelance — AI systems, autonomous agents, SEO &amp; AI filmmaking.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="journey-map-section" delay={0.3}>
          <h2>The Full Journey</h2>
          <p className="journey-subtitle">Every milestone that shaped the architect.</p>
          <div className="journey-map">

            <div className="journey-milestone">
              <div className="milestone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3L2 9l10 6 10-6-10-6z"/><path d="M2 17l10 6 10-6"/><path d="M2 13l10 6 10-6"/></svg>
              </div>
              <div className="milestone-body">
                <span className="milestone-year">1991 — 2009</span>
                <h4>Birth to High School</h4>
                <p>The foundation years. Curiosity, creativity, and the early sparks of analytical thinking.</p>
              </div>
            </div>

            <div className="journey-milestone">
              <div className="milestone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <div className="milestone-body">
                <span className="milestone-year">2009 — 2013</span>
                <h4>Bachelors in Electrical Engineering</h4>
                <p>Studied the science of systems, circuits, and control engineering — the hardware layer beneath all software.</p>
              </div>
            </div>

            <div className="journey-milestone">
              <div className="milestone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M12 12v4M10 14h4"/></svg>
              </div>
              <div className="milestone-body">
                <span className="milestone-year">2014</span>
                <h4>First Industry Steps</h4>
                <p>Descon Engineering — PM Intern, gaining exposure to large-scale project coordination. Then Netsol Technologies — Database Engineer, building data architecture expertise.</p>
              </div>
            </div>

            <div className="journey-milestone">
              <div className="milestone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
              </div>
              <div className="milestone-body">
                <span className="milestone-year">2014 — 2018</span>
                <h4>Electrical Supervisor — Future Vision Technologies</h4>
                <p>Led technical teams and end-to-end project delivery on large-scale electrical infrastructure deployments, building leadership foundations.</p>
              </div>
            </div>

            <div className="journey-milestone">
              <div className="milestone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div className="milestone-body">
                <span className="milestone-year">2015 — 2019</span>
                <h4>Freelance Designer — Fiverr &amp; Upwork</h4>
                <p>Took the creative leap. Delivered hundreds of design projects globally across branding, UI, and visual communication for international clients.</p>
              </div>
            </div>

            <div className="journey-milestone">
              <div className="milestone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div className="milestone-body">
                <span className="milestone-year">Post 2018</span>
                <h4>Masters in Engineering Management</h4>
                <p>Leveled up with a Masters degree while simultaneously self-studying Data Science, Machine Learning, and UI/UX Design — bridging engineering precision with product intuition.</p>
                <div className="milestone-tags">
                  <span>Data Science</span>
                  <span>Machine Learning</span>
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>

            <div className="journey-milestone journey-milestone--active">
              <div className="milestone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div className="milestone-body">
                <span className="milestone-year">2020 — Present</span>
                <h4>Freelance AI Engineer, Web Developer &amp; Data Scientist</h4>
                <p>Building production-grade AI systems, autonomous agents, and intelligent web applications for clients worldwide — while crafting cinematic AI short films under The Small Door Films.</p>
                <div className="milestone-tags">
                  <span>AI Engineering</span>
                  <span>Data Science</span>
                  <span>SEO Strategy</span>
                  <span>AI Filmmaking</span>
                </div>
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
