import React from 'react';
import { FaJava, FaJsSquare, FaPython, FaGithub, FaDocker, FaAws, FaGoogle, FaFlask, FaReact, FaDatabase } from 'react-icons/fa';
import { SiC, SiSpring, SiPostman, SiVisualstudiocode, SiVercel, SiRender, SiFirebase, SiMongodb, SiMysql, SiOracle } from 'react-icons/si';
import { MdOutlineScience, MdOutlineDeveloperMode, MdOutlineArchitecture, MdOutlineSettings, MdOutlineStorage } from 'react-icons/md';
import './Skills.css'; // Import CSS file for styling

function Skills() {
  return (
    <div className='skills'>
      <div className="languages">
        <p>Languages</p>
        <div className="skills-container">
          <FaJava size={50} color="#007396" title="Java" />
          <FaJsSquare size={50} color="#F7DF1E" title="JavaScript" />
          <SiC size={50} color="#A8B9CC" title="C" />
          <FaPython size={50} color="#3776AB" title="Python" />
        </div>
      </div>
      <div className="developments">
        <p>Developments</p>
        <div className="skills-container">
          <MdOutlineScience size={50} color="#FF6F61" title="Data Science" />
          <SiSpring size={50} color="#6DB33F" title="Spring" />
          <MdOutlineDeveloperMode size={50} color="#000000" title="Development" />
          <FaReact size={50} color="#61DBFB" title="React" />
          <FaFlask size={50} color="#000000" title="Flask" />
        </div>
      </div>
      <div className="coreSubjects">
        <p>Core Subjects</p>
        <div className="skills-container">
          <MdOutlineArchitecture size={50} color="#FF6F61" title="Software Architecture" />
          <MdOutlineSettings size={50} color="#607D8B" title="Settings" />
          <MdOutlineStorage size={50} color="#FF6F61" title="Database" />
        </div>
      </div>
      <div className="tools">
        <p>Tools</p>
        <div className="skills-container">
          <FaGithub size={50} color="#181717" title="GitHub" />
          <SiPostman size={50} color="#FF6C37" title="Postman" />
          <SiVisualstudiocode size={50} color="#007ACC" title="VS Code" />
          <FaDocker size={50} color="#2496ED" title="Docker" />
          <FaGoogle size={50} color="#4285F4" title="Google Cloud Platform" />
          <SiFirebase size={50} color="#FFCA28" title="Firebase" />
        </div>
      </div>
      <div className="softSkills">
        <p>Deployments</p>
        <div className='skills-container'>
          <FaAws size={50} color="#FF9900" title="AWS" />
          <SiRender size={50} color="#46E3B7" title="Render" />
          <SiVercel size={50} color="#000000" title="Vercel" />
        </div>
      </div>
      <div className="databases">
        <p>Databases</p>
        <div className="skills-container">
          <SiMysql size={50} color="#4479A1" title="MySQL" />
          <SiMongodb size={50} color="#47A248" title="MongoDB" />
          <SiOracle size={50} color="#F80000" title="Oracle" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
