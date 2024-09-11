import React from 'react';
import './ProjectCard.css';

function ProjectCard({ image, title, description }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-overlay">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;