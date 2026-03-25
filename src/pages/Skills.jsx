import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import './Skills.css';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=python.org" },
      { name: "TensorFlow", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=tensorflow.org" },
      { name: "PyTorch", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=pytorch.org" },
      { name: "OpenAI API", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=openai.com" },
      { name: "LangChain", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=langchain.com" }
    ]
  },
  {
    title: "Data Science",
    skills: [
      { name: "Pandas", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=pandas.pydata.org" },
      { name: "NumPy", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=numpy.org" },
      { name: "Scikit-learn", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=scikit-learn.org" },
      { name: "SQL", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=mysql.com" },
      { name: "Tableau", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=tableau.com" }
    ]
  },
  {
    title: "SEO & Growth",
    skills: [
      { name: "Ahrefs", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=ahrefs.com" },
      { name: "SEMrush", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=semrush.com" },
      { name: "Google Analytics", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=analytics.google.com" },
      { name: "Search Console", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=search.google.com" },
      { name: "Technical SEO", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=moz.com" }
    ]
  },
  {
    title: "Software Development",
    skills: [
      { name: "React", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=react.dev" },
      { name: "FastAPI", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=fastapi.tiangolo.com" },
      { name: "Streamlit", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=streamlit.io" },
      { name: "Node.js", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=nodejs.org" },
      { name: "Docker", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=docker.com" }
    ]
  },
  {
    title: "Creative AI & Filmmaking",
    skills: [
      { name: "Midjourney", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=midjourney.com" },
      { name: "Kling AI", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=klingai.com" },
      { name: "Runway Gen-2", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=runwayml.com" },
      { name: "ElevenLabs", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=elevenlabs.io" },
      { name: "Suno", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=suno.com" }
    ]
  },
  {
    title: "Graphic Designer",
    skills: [
      { name: "Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
      { name: "Lightroom", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=lightroom.adobe.com" },
      { name: "DaVinci Resolve", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=blackmagicdesign.com" },
      { name: "Capture One", icon: "https://www.google.com/s2/favicons?sz=128&domain_url=captureone.com" },
      { name: "After Effects", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" }
    ]
  }
];

const Skills = () => {
  return (
    <div className="page-container">
      <AnimatedSection className="skills-header">
        <h1>Skills & Arsenal</h1>
        <p>The tools and frameworks powering intelligent systems and cinematic visions.</p>
      </AnimatedSection>
      
      <div className="skills-content">
        {skillCategories.map((category, idx) => (
          <AnimatedSection key={idx} className="skill-category" delay={idx * 0.1}>
            <h2>{category.title}</h2>
            <div className="skills-grid">
              {category.skills.map((skillObj, sIdx) => (
                <div key={sIdx} className="skill-item" data-tooltip={skillObj.name}>
                  <div className="skill-logo-placeholder">
                    <img src={skillObj.icon} alt={`${skillObj.name} logo`} className="skill-icon-img" />
                  </div>
                  <span className="skill-name">{skillObj.name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
