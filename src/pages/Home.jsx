import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Abstract Background Animation */}
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <header className="hero-section">
        <AnimatedSection className="hero-content">
          <p className="hero-subtitle">AI Engineer | Data Scientist | SEO Strategist | AI Filmmaker</p>
          <h1 className="hero-title">
            Building <span>intelligent systems</span> & <br />
            <span>cinematic experiences</span> powered by AI.
          </h1>
          <div className="hero-ctas">
            <a href="/projects" className="btn btn-primary">
              View Work <span>&rarr;</span>
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact Me <span>&#9993;</span>
            </a>
          </div>
        </AnimatedSection>
      </header>

      <AnimatedSection className="highlights-section" delay={0.2}>
        <div className="highlight-item">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
        <div className="highlight-item">
          <h3>30+</h3>
          <p>Projects Shipped</p>
        </div>
        <div className="highlight-item">
          <h3>4</h3>
          <p>Core Domains</p>
        </div>
      </AnimatedSection>

      <section className="featured-work">
        <AnimatedSection>
          <div className="section-header">
            <h2>Featured Work</h2>
            <a href="/projects" className="view-all">View All Projects</a>
          </div>
          <div className="projects-grid">
            <ProjectCard 
              title="AI Order Processing System"
              category="AI & Data"
              description="A fully automated order management system powered by AI, integrating WhatsApp for real-time customer interaction."
              techStack={['Python', 'FastAPI', 'MySQL']}
              link="/projects"
              image="/projects/order_system_thumbnail_1774394675330.png"
            />
            <ProjectCard 
              title="“LumaWash” Commercial"
              category="AI Films"
              description="A premium AI-generated commercial showcasing transformation through visual storytelling, aesthetic cleanliness, and cinematic pacing."
              techStack={['Kling', 'Midjourney', 'Suno', 'ElevenLabs']}
              link="/projects"
              image="/projects/lumawash_thumbnail_1774394814238.png"
            />
          </div>
        </AnimatedSection>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
