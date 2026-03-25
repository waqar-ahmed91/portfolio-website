import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, category, description, techStack = [], image, link = '#' }) => {
  return (
    <a href={link} className="project-card">
      <div className="card-image">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="placeholder-image">
            <span className="placeholder-text">{category}</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="arrow-icon">&#8599;</span>
        </div>
        <p className="description">{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
