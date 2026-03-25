import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI & Data', 'SEO', 'AI Films'];

  const projects = [
    {
      title: "AI Order Processing System",
      category: "AI & Data",
      description: "A fully automated order management system powered by AI, integrating WhatsApp for real-time customer interaction to eliminate manual handling delays.",
      techStack: ['Python', 'FastAPI', 'MySQL', 'OpenAI', 'LangChain', 'Streamlit'],
      image: "/projects/order_system_thumbnail_1774394675330.png",
      link: "#"
    },
    {
      title: "Healthcare AI Agent Pipeline",
      category: "AI & Data",
      description: "A multi-agent AI system designed to ingest OCR documents, classify medical domains, detect anomalies, and trigger real-time alerts.",
      techStack: ['Python', 'OCR', 'LLMs', 'WhatsApp API'],
      image: "/projects/healthcare_ai_thumbnail_1774394732579.png",
      link: "#"
    },
    {
      title: "AI Voice Calling Agent",
      category: "AI & Data",
      description: "An autonomous AI agent capable of handling real-time phone conversations with customers for context-aware responses and appointment booking.",
      techStack: ['Twilio', 'Whisper', 'ElevenLabs', 'GPT Models'],
      image: "/projects/voice_agent_thumbnail_1774394759836.png",
      link: "#"
    },
    {
      title: "Organic Traffic Growth Strategy",
      category: "SEO",
      description: "Designed a full-scale strategy using AI keyword clustering, content automation, and technical audits to significantly increase organic rankings.",
      techStack: ['Technical SEO', 'Python', 'Ahrefs'],
      image: "/projects/seo_traffic_thumbnail_1774394788117.png",
      link: "#"
    },
    {
      title: "AI-Powered Content Engine",
      category: "SEO",
      description: "Built a scalable NLP-based system to generate high-quality, SEO-optimized content, automating topic research and internal linking.",
      techStack: ['Python', 'NLP', 'OpenAI API'],
      image: "/projects/ai_content_thumbnail_1774394801914.png",
      link: "#"
    },
    {
      title: "“LumaWash” Commercial",
      category: "AI Films",
      description: "A premium AI-generated commercial showcasing transformation through visual storytelling, aesthetic cleanliness, and cinematic pacing.",
      techStack: ['Kling', 'Midjourney', 'Suno', 'ElevenLabs'],
      image: "/projects/lumawash_thumbnail_1774394814238.png",
      link: "#"
    },
    {
      title: "Experimental AI Short Films",
      category: "AI Films",
      description: "Created surreal, narrative-driven short films using generative AI tools, exploring identity, perception, and liminal spaces.",
      techStack: ['Midjourney', 'Runway Gen-2', 'Suno'],
      image: "/projects/lumawash_thumbnail_1774394814238.png",
      link: "#"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-container">
      <AnimatedSection className="projects-header">
        <h1>Selected Works</h1>
        <p>A showcase of intelligence, engineering, and creativity.</p>
      </AnimatedSection>
      
      <div className="projects-content">
        <AnimatedSection className="filter-tabs" delay={0.1}>
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <AnimatedSection className="projects-grid-full" delay={0.2}>
          {filteredProjects.map((proj, idx) => (
            <ProjectCard 
              key={idx}
              title={proj.title}
              category={proj.category}
              description={proj.description}
              techStack={proj.techStack}
              image={proj.image}
              link={proj.link}
            />
          ))}
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
