import React from 'react';
import './Skills.css';

function Skills() {
  return (
     <section className="skills-section">
      <h2 className="skills-title">My <span>Skills</span>

      </h2>
      <p className="skills-subTitle">These are My Expertise in Software Engineering, I have worked with!</p>
      <div className="skills-categories">

        {/* Programming Languages */}
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>Ruby</li>
          </ul>
        </div>

        {/* Frontend Development */}
        <div className="skills-category">
          <h3>Front-end Development</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3 (Sass, Less)</li>
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="skills-category">
          <h3>Back-end Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Django</li>
            <li>Ruby on Rails</li>
            <li>Flask</li>
            <li>Laravel</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skills-category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <li>GraphQL</li>
          </ul>
        </div>

        {/* Tools and Technologies */}
        <div className="skills-category">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>AWS</li>
            <li>Azure</li>
            <li>Google Cloud</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Agile Development</li>
            <li>Team Management</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
