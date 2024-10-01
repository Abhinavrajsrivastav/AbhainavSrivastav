import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My <span>Skills</span></h2>
      <p className="skills-subTitle">These are my expertise in Software Engineering, areas I have worked with!</p>
      <div className="skills-categories">

        {/* Technical Skills */}
        <div className="skills-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Spring Boot</li>
            <li>SQL</li>
            <li>Problem-solving</li>
            <li>Data Structures and Algorithms (DSA)</li>
            <li>OOPs (Object-Oriented Programming)</li>
            <li>Computer Networking</li>
            <li>DBMS (Database Management Systems)</li>
            <li>Operating Systems</li>
            <li>GIT & Version Control</li>
          </ul>
        </div>

        {/* Soft Skills */}
        {/* <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Interpersonal Skills</li>
            <li>Team Collaboration</li>
            <li>Teamwork</li>
            <li>Continuous Improvement</li>
          </ul>
        </div> */}

        {/* Good Practices */}
        <div className="skills-category">
          <h3>Good Practices</h3>
          <ul>
            <li>Unit Testing</li>
            <li>Mockito</li>
            <li>Microsoft Azure Cloud</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Agile Methodology</li>
            <li>SDLC (Software Development Life Cycle)</li>
          </ul>
        </div>

        {/* Cloud Platforms */}
        <div className="skills-category">
          <h3>Cloud Platforms</h3>
          <ul>
            <li>Google Cloud Platform (GCP)</li>
            <li>Microsoft Azure</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* Programming Achievements */}
        <div className="skills-category">
          <h3>Programming Achievements</h3>
          <ul>
            <li>LeetCode Max Rating: 1516, 300 Problems Solved</li>
            <li>Geeks for Geeks Rank: 27th, 80+ Days of Challenges</li>
            <li>Open Source Contributions: 1100+ Commits, 49+ Repositories</li>
            <li>800+ Competitive Programming Problems Solved</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
