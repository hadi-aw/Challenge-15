// src/components/Skills.js
import React from 'react';
import Skill from './Skill';
import './Skills.css';

const skills = [
    'SQL',
    'JavaScript',
    'CSS',
    'HTML',
    'Excel',
];

const Skills = () => {
    return (
        <div className="Skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <Skill key={index} name={skill} />
                ))}
            </ul>
        </div>
    );
}

export default Skills;