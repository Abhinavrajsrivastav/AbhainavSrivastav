import React from 'react';
import { FaJava, FaJsSquare, FaPython, FaGithub, FaDocker, FaAws, FaGoogle, FaFlask, FaReact, FaDatabase } from 'react-icons/fa';
import { SiC, SiSpring, SiPostman, SiVisualstudiocode, SiVercel, SiRender, SiFirebase, SiMongodb, SiMysql, SiOracle } from 'react-icons/si';
import { MdOutlineScience, MdOutlineDeveloperMode, MdOutlineArchitecture, MdOutlineSettings, MdOutlineStorage } from 'react-icons/md';
import './Skills.css';

function Skills() {
  return (
    <div className='skills'>
      <div className="skill-box">
        <p>Languages</p>
        <div className="skills-container">
          <div className="skill-item">
            <FaJava size={35} className="icon" title="Java" />
            <span>Java</span>
          </div>
          <div className="skill-item">
            <FaJsSquare size={35} className="icon" title="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <SiC size={35} className="icon" title="C" />
            <span>C</span>
          </div>
          <div className="skill-item">
            <FaPython size={35} className="icon" title="Python" />
            <span>Python</span>
          </div>
        </div>
      </div>

      <div className="skill-box">
        <p>Development</p>
        <div className="skills-container">
          <div className="skill-item">
            <MdOutlineScience size={35} className="icon" title="Data Science" />
            <span>Data Science</span>
          </div>
          <div className="skill-item">
            <SiSpring size={35} className="icon" title="Spring" />
            <span>Spring</span>
          </div>
          <div className="skill-item">
            <MdOutlineDeveloperMode size={35} className="icon" title="Development" />
            <span>Development</span>
          </div>
          <div className="skill-item">
            <FaReact size={35} className="icon" title="React" />
            <span>React</span>
          </div>
          <div className="skill-item">
            <FaFlask size={35} className="icon" title="Flask" />
            <span>Flask</span>
          </div>
        </div>
      </div>

      <div className="skill-box">
        <p>Core Subjects</p>
        <div className="skills-container">
          <div className="skill-item">
            <MdOutlineArchitecture size={35} className="icon" title="Software Architecture" />
            <span>Software Architecture</span>
          </div>
          <div className="skill-item">
            <MdOutlineSettings size={35} className="icon" title="Settings" />
            <span>Settings</span>
          </div>
          <div className="skill-item">
            <MdOutlineStorage size={35} className="icon" title="Database" />
            <span>Database</span>
          </div>
        </div>
      </div>

      <div className="skill-box">
        <p>Tools</p>
        <div className="skills-container">
          <div className="skill-item">
            <FaGithub size={35} className="icon" title="GitHub" />
            <span>GitHub</span>
          </div>
          <div className="skill-item">
            <SiPostman size={35} className="icon" title="Postman" />
            <span>Postman</span>
          </div>
          <div className="skill-item">
            <SiVisualstudiocode size={35} className="icon" title="VS Code" />
            <span>VS Code</span>
          </div>
          <div className="skill-item">
            <FaDocker size={35} className="icon" title="Docker" />
            <span>Docker</span>
          </div>
          <div className="skill-item">
            <FaGoogle size={35} className="icon" title="Google Cloud Platform" />
            <span>Google Cloud Platform</span>
          </div>
          <div className="skill-item">
            <SiFirebase size={35} className="icon" title="Firebase" />
            <span>Firebase</span>
          </div>
        </div>
      </div>

      <div className="skill-box">
        <p>Deployments</p>
        <div className='skills-container'>
          <div className="skill-item">
            <FaAws size={35} className="icon" title="AWS" />
            <span>AWS</span>
          </div>
          <div className="skill-item">
            <SiRender size={35} className="icon" title="Render" />
            <span>Render</span>
          </div>
          <div className="skill-item">
            <SiVercel size={35} className="icon" title="Vercel" />
            <span>Vercel</span>
          </div>
        </div>
      </div>

      <div className="skill-box">
        <p>Databases</p>
        <div className="skills-container">
          <div className="skill-item">
            <SiMysql size={35} className="icon" title="MySQL" />
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <SiMongodb size={35} className="icon" title="MongoDB" />
            <span>MongoDB</span>
          </div>
          <div className="skill-item">
            <SiOracle size={35} className="icon" title="Oracle" />
            <span>Oracle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
