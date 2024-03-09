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
        <CardsPage src={"./images/Works/Cold-pay.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"} name={"HindLish"} about={"A music player collections of some best hindi and english music"} link={"https://healsync.onrender.com/"} toolImg={["react.png"]}/>
        <CardsPage src={"./images/Works/WheatherApp.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/WhetherApp/demo"} name={"Weather app"} about={"A weather application, gives real time weather update of any place"} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_javadevelopment-springboot-javascripts-activity-7149425500443017216-ut8D?utm_source=share&utm_medium=member_desktop"}  toolImg={["react.png","leaf.png"]}/>
        <CardsPage src={"./images/Works/Movie-Finder.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"} name={"Movie Finder"} about={"An youtube usecase, this app help user to find any movie available on yt. Efficient and no irrelevent content show"}  link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_springboot-javascripts-java-activity-7155206688197758977-9tIt?utm_source=share&utm_medium=member_desktop"}toolImg={["react.png","leaf.png"]}/>
        <CardsPage src={"./images/Works/CodeBuddi.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/OpenAi"} name={"Code Buddy"} about={"An Spring Ai and OpenAi based project, help programmers in their code to debug, write codes and will answer effectively."} link={""} toolImg={["chat-gpt.png","react.png","leaf.png"]}/>
        <CardsPage src={"./images/Works/StdudentManage.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/StudentManagement_"} name={"Student Management System"} about={"Student Management System"}  link={""} toolImg={["react.png","leaf.png"]}/>
        <CardsPage src={"./images/Works/Musics.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/mymusics"} name={"New Word"} about={"A music player collections of some best Arman malik's songs."} link={""} toolImg={["react.png"]}/>
        {/* https://moonlit-faun-712a3e.netlify.app/ */}

        {/* <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage /> */}
      </div>
      
      </div>
    </div>
  );
}

export default WorkPage;
