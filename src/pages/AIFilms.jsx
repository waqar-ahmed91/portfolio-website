import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import './AIFilms.css';

const AIFilms = () => {
  const films = [
    {
      title: "The Silk Labyrinth",
      embedId: "lbbcQmm9ybg",
      description: "A mesmerizing VEO-powered commercial exploring texture, light, and the intricate weave of luxury."
    },
    {
      title: "LumaWash",
      embedId: "AP1BoYLsJL8",
      description: "A premium AI-generated commercial showcasing transformation through visual storytelling."
    },
    {
      title: "The Architecture of Mourning",
      embedId: "eSpJ16J0K_0",
      description: "An exploration of space, memory, and loss through generative cinematic landscapes."
    },
    {
      title: "Ricochet",
      embedId: "BmctFy8s5Q8",
      description: "A fast-paced AI action short exploring movement and kinetic energy."
    },
    {
      title: "The Last Knock",
      embedId: "a3x4aoSS4nw",
      description: "A psychological horror short film pushing the boundaries of AI-generated suspense."
    },
    {
      title: "Static Paradise",
      embedId: "0Z-w6UWwap0",
      description: "A surreal, narrative-driven journey through digital liminal spaces."
    }
  ];

  return (
    <div className="page-container">
      <AnimatedSection className="films-header">
        <h1>AI Films & Commercials</h1>
        <p className="subtitle">Cinematic experiences powered by neural networks.</p>
      </AnimatedSection>
      
      <div className="films-content">
        <div className="films-grid">
          {films.map((film, index) => (
            <AnimatedSection key={index} className="film-card" delay={index * 0.1}>
              <div className="video-wrapper">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${film.embedId}?si=UHMPgo-lWtL7ovQb`} 
                  title={film.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="film-info">
                <h3>{film.title}</h3>
                <p>{film.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIFilms;
