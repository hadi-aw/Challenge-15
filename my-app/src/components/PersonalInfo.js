// src/components/PersonalInfo.js
import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
    return (
        <div className="PersonalInfo">
            <h1>Hadi Awad</h1>
            <p>Passionate about uncovering patterns in data to drive informed decision-making. Motivated by the transformative impact data analysis can have on business strategy and outcomes. Enthusiastic about the challenge of translating complex data into actionable insights that empower organizations to thrive.</p>
            <p>Contact Info:</p>
            <ul>
                <li>Email: <a href="mailto:hawad.abdrabbou@gmail.com">hawad.abdrabbou@gmail.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/awad-hadi" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/awad-hadi</a></li>
                </ul>
        </div>
    );
}

export default PersonalInfo;