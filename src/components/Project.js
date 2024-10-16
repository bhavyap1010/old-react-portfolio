import React from 'react';
import './Project.css';

function Project({ title, description, link }) {
  return (
    <div className="project">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
    </div>
  );
}

export default Project;