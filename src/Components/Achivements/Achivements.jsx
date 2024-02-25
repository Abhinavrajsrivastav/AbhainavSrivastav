import React from 'react';
import AchivementsCard from './AchivementsCard/AchivementsCard'
import './Achivements.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Achivements = () => {
  return (
    <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
          <span className="Page-Text">My Achievements<span>.</span></span><br />
          <span className="Page-Text-description">Here are some of the Achievements I have.</span>
        </div>
        <div className="Page-Cards">
        <AchivementsCard
            src={"./images/Achivements/gfg.png"}
            gitHub={""}
            name={"0.8% at GFG In College with 400+ problems."}
            about={""}
            link={"https://auth.geeksforgeeks.org/user/abhirajsrivast254"}
            techs={["Java", "DSA", "Competitive Programming","C","Coding Contest"]}
          />
          <AchivementsCard
            src={"./images/Achivements/github.png"}
            gitHub={""}
            name={"590+ contributions on GitHub."}
            about={""}
            link={"https://github.com/Abhinavrajsrivastav"}
            techs={["Java", "DSA", "Competitive Programming","C","Contribution","Open Source","Web Development","System Design","JavaScript","React.js","Node.js","Express.js","Spring Boot","OOP's"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Java_Pw.png"}
            gitHub={""}
            name={"Java with DSA and System Design."}
            about={""}
            link={"https://learn.pwskills.com/certificate/15a6646c-67ba-4222-b36b-0e732e9c100c"}
            techs={["Java", "DSA", "Competitive Programming", "SQL", "MongoDB", "Spring Boot", "JDBC","DataBase", "System Design","Object Oriented Programming"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Web_Development_Bootcamp.png"}
            gitHub={""}
            name={"Web Development Bootcamp Udemy"}
            about={""}
            link={"https://www.udemy.com/certificate/UC-c18bbb12-d072-4ac8-85c5-b5cc1c0fc43a/"}
            techs={["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js","Express.js","SQL","MongoDB"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Jav_Basics.png"}
            gitHub={""}
            name={"Problem Solving with Java"}
            about={""}
            link={"https://www.hackerrank.com/certificates/iframe/822de53d1ccc"}
            techs={["Java", "Problem Solving"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Problem_solving.png"}
            gitHub={""}
            name={"Problem Solving with Java"}
            about={""}
            link={"https://www.hackerrank.com/certificates/iframe/8a532de3c6a1"}
            techs={["Java", "C", "Problem Solving"]}
          />
          <AchivementsCard
            src={"./images/Achivements/SQL_Basics.png"}
            gitHub={""}
            name={"SQL Basics Certified"}
            about={""}
            link={"https://www.hackerrank.com/certificates/iframe/47e280504ef5"}
            techs={["SQL", "Problem Solving"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Java_Script_Essential.png"}
            gitHub={""}
            name={"Code Coquest 1.0 Cisco"}
            about={""}
            link={"https://drive.google.com/file/d/19v987x9nx0O0XD_WBcqjLh9DJimecdmP"}
            techs={["JavaScript", "Problem Solving", "DSA", "JavaScript fundamentals"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Python_Essential.png"}
            gitHub={""}
            name={"Python Essential 1.0 Cisco"}
            about={""}
            link={"https://www.credly.com/badges/59f9792a-a875-4d85-9652-0ce7712868ca"}
            techs={["Python Basics", "Fundamentals"]}
          />
        </div>
      </div>

      {/* <div className="Achivement-fotter">
        <div className="Achivement-fotter-line">
          <div className="line-1"></div>
          <div className="or">Or</div>
          <div className="line-2"></div> 
        </div>
        <div className="Achivement-fotter-btn">
          <Test />
        </div>
      </div> */}
    </div>
  );
}

export default Achivements;
