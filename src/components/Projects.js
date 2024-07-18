import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Ensure you have styles for the buttons

const Projects = () => {
  return (
    <div className="projects-container">
      <Link to="/coding-projects" className="project-button">
        <div className="button-content">
          <h2>Coding Projects</h2>
        </div>
      </Link>
      <Link to="/3d-projects" className="project-button">
        <div className="button-content">
          <h2>3D Projects</h2>
        </div>
      </Link>
      <Link to="/animation-projects" className="project-button">
        <div className="button-content">
          <h2>Animation Projects</h2>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
