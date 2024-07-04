import React from 'react';
import { FaJava, FaJsSquare, FaPython, FaGithub, FaDocker, FaAws, FaGoogle, FaFlask, FaReact, FaDatabase } from 'react-icons/fa';
import { SiC, SiSpring, SiPostman, SiVisualstudiocode, SiVercel, SiRender, SiFirebase, SiMongodb, SiMysql, SiOracle } from 'react-icons/si';
import { MdOutlineScience, MdOutlineDeveloperMode, MdOutlineArchitecture, MdOutlineSettings, MdOutlineStorage } from 'react-icons/md';
import './Skills.css'; // Import CSS file for styling

function Skills() {
  return (
    <div className='skills'>
      <div className="skill-box">
        <p>Languages</p>
        <div className="skills-container">
          <FaJava size={30} color="#007396" title="Java" />
          <FaJsSquare size={30} color="#F7DF1E" title="JavaScript" />
          <SiC size={30} color="#A8B9CC" title="C" />
          <FaPython size={30} color="#3776AB" title="Python" />
        </div>
      </div>

      <div className="skill-box">
        <p>Developments</p>
        <div className="skills-container">
          <MdOutlineScience size={30} color="#FF6F61" title="Data Science" />
          <SiSpring size={30} color="#6DB33F" title="Spring" />
          <MdOutlineDeveloperMode size={30} color="#000000" title="Development" />
          <FaReact size={30} color="#61DBFB" title="React" />
          <FaFlask size={30} color="#000000" title="Flask" />
        </div>
      </div>

      <div className="skill-box">
        <p>Core Subjects</p>
        <div className="skills-container">
          <MdOutlineArchitecture size={30} color="#FF6F61" title="Software Architecture" />
          <MdOutlineSettings size={30} color="#607D8B" title="Settings" />
          <MdOutlineStorage size={30} color="#FF6F61" title="Database" />
        </div>
      </div>

      <div className="skill-box">
        <p>Tools</p>
        <div className="skills-container">
          <FaGithub size={30} color="#181717" title="GitHub" />
          <SiPostman size={30} color="#FF6C37" title="Postman" />
          <SiVisualstudiocode size={30} color="#007ACC" title="VS Code" />
          <FaDocker size={30} color="#2496ED" title="Docker" />
          <FaGoogle size={30} color="#4285F4" title="Google Cloud Platform" />
          <SiFirebase size={30} color="#FFCA28" title="Firebase" />
        </div>
      </div>

      <div className="skill-box">
        <p>Deployments</p>
        <div className='skills-container'>
          <FaAws size={30} color="#FF9900" title="AWS" />
          <SiRender size={30} color="#46E3B7" title="Render" />
          <SiVercel size={30} color="#000000" title="Vercel" />
        </div>
      </div>

      <div className="skill-box">
        <p>Databases</p>
        <div className="skills-container">
          <SiMysql size={30} color="#4479A1" title="MySQL" />
          <SiMongodb size={30} color="#47A248" title="MongoDB" />
          <SiOracle size={30} color="#F80000" title="Oracle" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
