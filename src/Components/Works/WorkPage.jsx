import React from 'react';
import CardsPage from './CardPage/CardsPage';
import'./WorkPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkPage = () => {
  return (
    <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
        <span className="Page-Text">Coding Projects<span>.</span></span><br />
        <span className="Page-Text-description">Here are some of the projects I've worked on, utilizing a variety of technologies and frameworks.</span>
      </div>
      <div className="Page-Cards">
        <CardsPage src={"./images/Works/Cold-pay.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"} name={"HindLish"} about={"A musics player collections of some best hindi and english musics"} link={""}/>
        <CardsPage src={"./images/Works/WheatherApp.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/WhetherApp/demo"} name={"Whether app"} about={"A whether application, gives real time weather update of any place"} link={""}/>
        <CardsPage src={"./images/Works/Movie-Finder.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"} name={"Movie Finder"} about={"An youtube usecase, this app help user to find any movie available on yt. Efficient and no irrelevent content show"} link={""}/>
        <CardsPage src={"./images/Works/CodeBuddi.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/OpenAi"} name={"Code Buddy"} about={"An Spring Ai and OpenAi based project, help programmers in their code to debug, write codes and will answer effectively."} link={""}/>
        <CardsPage src={"./images/Works/StdudentManage.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/StudentManagement_"} name={"Student Management System"} about={"Student Management System"}  link={""}/>
        <CardsPage src={"./images/Works/Musics.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/mymusics"} name={"New Word"} about={"A musics player collections of some best Arman malik's songs."} link={"https://moonlit-faun-712a3e.netlify.app/"}/>
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
      </div>
      
      </div>
    </div>
  );
}

export default WorkPage;
