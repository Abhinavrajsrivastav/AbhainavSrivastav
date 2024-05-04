import React from 'react';
import './Skills.css'; // Import CSS file for styling

function Skills() {
  return (
    <div className='skills'>
      <div className="languages">
        <p>Languages</p>
        <div className="skills-container">
          <img src="./Images/Skills/java.png" alt="" />
          <img src="./Images/Skills/js-file.png" alt="" />
          <img src="./Images/Skills/letter-c.png" alt="" />
          <img src="./Images/Skills/python-file.png" alt="" />
        </div>
      </div>
      <div className="developments">
        <p>Developments</p>
        <div className="skills-container">
        <img src="./Images/Skills/science.png" alt="" />
        <img src="./Images/Skills/spring.png" alt="" />
         <img src="./Images/Skills/programing.png" alt="" />
        </div>
      </div>
      <div className="coreSubjects">
        <p>Core Subjects</p>
        <div className="skills-container">
           <img src="./Images/Skills/structure.png" alt="" />
          <img src="./Images/Skills/settings.png" alt="" />
          <img src="./Images/Skills/database.png" alt="" />
        </div>
      </div>
      <div className="tools">
        <p>Tools</p>
        <div className="skills-container">
          <div>Git</div>
          <div>VS Code</div>
          <div>Docker</div>
        </div>
      </div>
      {/* <div className="softSkills">
        <p>Soft Skills</p>
        <div className="skills-container">
          <div>Communication</div>
          <div>Teamwork</div>
          <div>Problem Solving</div>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
