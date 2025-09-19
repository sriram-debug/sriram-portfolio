import React from 'react';
import './card.css'; 

const Card = ({ projectName, projectDescription, projectUrl, projectLink, style }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${projectUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
    >
      <div className="card-items">  
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
