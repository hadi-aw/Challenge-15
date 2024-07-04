// src/components/Experience.js
import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css';

const experience = [
    {
        jobTitle: 'Data Analyst',
        company: 'AT&T',
        duration: 'SEP 2021 - SEP 2022'
    }
];

const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>
                {experience.map((experience, index) => (
                    <ExperienceItem key={index} {...experience} />
                ))}
        </div>
    );
}

export default Experience;