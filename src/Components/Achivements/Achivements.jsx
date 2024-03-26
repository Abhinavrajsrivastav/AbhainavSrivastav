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
          <span className="Page-Text-description">Here are some of my Achievements, I Proudly  have.</span>
        </div>
        <div className="Page-Cards">
        <AchivementsCard
            src={"./images/Achivements/gfg.png"}
            gitHub={""}
            name={"Solved 400+ problems at GFG"}
            about={"🏆 0.8% at GFG In College."}
            link={"https://auth.geeksforgeeks.org/user/abhirajsrivast254"}
            techs={["Java", "DSA", "Competitive Programming","C","Coding Contest"]}
          />
           <AchivementsCard
            src={"./images/Achivements/leetcode.png"}
            gitHub={""}
            name={"Solved 80+ problems solved at leetdode."}
            about={"🏆 Top 41% at leetcode"}
            link={"https://leetcode.com/Abhinav254/"}
            techs={["Java", "DSA", "Competitive Programming","C","Coding Contest"]}
          />
          <AchivementsCard
            src={"./images/Achivements/50daysleetcode.png"}
            gitHub={""}
            name={"Consistent 50+ days CP coding at leetdode."}
            about={"🏆 Contest Rating - 1502(*1)"}
            link={"https://leetcode.com/Abhinav254/"}
            techs={["Java", "DSA", "Competitive Programming","Coding Contest"]}
          />
          <AchivementsCard
            src={"./images/Achivements/github.png"}
            gitHub={""}
            name={"700+ contributions on GitHub."}
            about={"🏆 Achived 12+ stars"}
            link={"https://github.com/Abhinavrajsrivastav"}
            techs={["Java", "DSA", "Competitive Programming","C","Contribution","Open Source","Web Development","System Design","JavaScript","React.js","Node.js","Express.js","Spring Boot","OOP's"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Hackerranks.png"}
            gitHub={""}
            name={"Hackerrank Rating."}
            about={"🏆 Java - 3*⭐ |  C - 4*⭐ | PS - 3*⭐"}
            link={"https://www.hackerrank.com/profile/CSME2A_b1531174"}
            techs={["Java", "DSA", "Competitive Programming","C", "Problem Solving","SQL","Python"]}
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
            link={"https://www.hackerrank.com/profile/CSME2A_b1531174"}
            techs={["Java", "Problem Solving"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Problem_solving.png"}
            gitHub={""}
            name={"Problem Solving with Java"}
            about={""}
            link={"https://www.hackerrank.com/profile/CSME2A_b1531174"}
            techs={["Java", "C", "Problem Solving"]}
          />
          <AchivementsCard
            src={"./images/Achivements/SQL_Basics.png"}
            gitHub={""}
            name={"SQL Basics Certified"}
            about={""}
            link={"https://www.hackerrank.com/profile/CSME2A_b1531174"}
            techs={["SQL", "Problem Solving"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Java_Script_Essential.png"}
            gitHub={""}
            name={"Javascript Essential 1.0 Cisco"}
            about={""}
            link={"https://www.credly.com/badges/59f9792a-a875-4d85-9652-0ce7712868ca"}
            techs={["JavaScript", "Problem Solving", "DSA", "JavaScript fundamentals"]}
          />
          <AchivementsCard
            src={"./images/Achivements/Python_Essential.png"}
            gitHub={""}
            name={"Python Essential 1.0 Cisco"}
            about={""}
            link={"https://www.credly.com/users/abhinav-raj-srivastav/badges"}
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
