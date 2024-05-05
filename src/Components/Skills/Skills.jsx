import React from 'react';
import './Skills.css'; // Import CSS file for styling

function Skills() {
  return (
    <div className='skills'>
      <div className="languages">
        <p>Languages</p>
        <div className="skills-container">
          <img src="./images/Skills/java.png" alt="" />
          <img src="./images/Skills/js-file.png" alt="" />
          <img src="./images/Skills/letter-c.png" alt="" />
          <img src="./images/Skills/python-file.png" alt="" />
        </div>
      </div>
      <div className="developments">
        <p>Developments</p>
        <div className="skills-container">
        <img src="./images/Skills/science.png" alt="" />
        <img src="./images/Skills/spring.png" alt="" />
         <img src="./images/Skills/programing.png" alt="" />
        </div>
      </div>
      <div className="coreSubjects">
        <p>Core Subjects</p>
        <div className="skills-container">
           <img src="./images/Skills/structure.png" alt="" />
          <img src="./images/Skills/settings.png" alt="" />
          <img src="./images/Skills/database.png" alt="" />
        </div>
      </div>
      <div className="tools">
        <p>Tools</p>
        <div className="skills-container">
          <img src="./images/Skills/github.png" alt="" />
          <img src="./images/Skills/postman.png" alt="" />
          <img src="./images/Skills/visual-studio.png" alt="" />
          <img src="./images/Skills/docker.png" alt="" />
        </div>
      </div>
      <div className="softSkills">
        <p>Deployments</p>
        <div className='skills-container'>
        <img src="./images/Skills/aws.jpg" alt="" />
          <img src="./images/Skills/render.png" alt="" />
          <img src="./images/Skills/vecel.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
