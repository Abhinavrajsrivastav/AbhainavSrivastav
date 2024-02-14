import React from 'react';
import CardsPage from '../Works/CardPage/CardsPage';
import'./Achivements.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Achivements = () => {
  return (
    <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
        <span className="Page-Text">My Achivements<span>.</span></span><br />
        <span className="Page-Text-description">Here are some of the Achivements I have.</span>
      </div>
      <div className="Page-Cards">
        <CardsPage src={"./images/Achivements/Code_Conquest.png"} gitHub={""} name={"Code Coquest 1.0"} about={"Java, Problem Solving, DSA, Coding Cotest"} link={"https://drive.google.com/file/d/19v987x9nx0O0XD_WBcqjLh9DJimecdmP"}/>
        <CardsPage src={"./images/Achivements/Java_Script_Essential.png"} gitHub={""} name={"JavaScript Essential 1.0"} about={"Cisco, in collaboration with OpenEDG JS Institute, verifies the earner of this badge successfully completed the JavaScript Essentials 1 course and achieved the student level credentials."} link={"https://www.credly.com/badges/59f9792a-a875-4d85-9652-0ce7712868ca"}/>
        <CardsPage src={"./images/Achivements/Java_Pw.png"} gitHub={""} name={"Java With DSA And System Design 2.0"} about={"MongoDB, Spring Boot, Systems Design, DSA, MySQL, Core Java, Problem Solving"} link={"https://learn.pwskills.com/certificate/15a6646c-67ba-4222-b36b-0e732e9c100c"}/>
        <CardsPage src={"./images/Achivements/Python_Essential.png"} gitHub={""} name={"Python Essential"} about={"Cisco, in collaboration with OpenEDG Python Institute, verifies the earner of this badge successfully completed the Python Essentials 1 course and achieved the student level credentials."} link={"https://www.credly.com/badges/ac023cac-33f0-4422-a0f2-4d9337262942"}/>
        <CardsPage src={"./images/Achivements/SQL_Basics.png"} gitHub={""} name={"SQL Basics Certified"} about={""}  link={"https://www.hackerrank.com/certificates/iframe/47e280504ef5"}/>
        <CardsPage src={"./images/Achivements/Problem_solving.png"} gitHub={""} name={"Problem Solving"} about={""} link={"https://www.hackerrank.com/certificates/iframe/8a532de3c6a1"}/>
      </div>
      
      </div>
    </div>
  );
}

export default Achivements;
