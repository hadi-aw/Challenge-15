// src/components/ExperienceItem.js
import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ jobTitle, companyName, duration }) => {
    return (
        <div className="experience-item">
            <h3>{jobTitle}</h3>
            <p>{companyName}</p>
            <p>{duration}</p>
        </div>
    );
}

export default ExperienceItem;
