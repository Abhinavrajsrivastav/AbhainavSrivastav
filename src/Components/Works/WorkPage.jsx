import React from 'react';
import CardsPage from './CardPage/CardsPage';
import './WorkPage.css';
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
          <CardsPage src={"./images/Works/hindi.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"} name={"HindLish"} about={"Music player with the best Hindi and English songs"} link={"https://healsync.onrender.com/"} toolImg={["react.png"]} tech={["React"]}/>
          <CardsPage src={"./images/Works/yts.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"} name={"Movie Finder"} about={"Improving YouTube-Search Response"} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_springboot-javascripts-java-activity-7155206688197758977-9tIt?utm_source=share&utm_medium=member_desktop"} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/weather.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/WhetherApp/demo"} name={"Weather App"} about={"Real-time weather updates for any location"} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_javadevelopment-springboot-javascripts-activity-7149425500443017216-ut8D?utm_source=share&utm_medium=member_desktop"} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/gemini.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/OpenAi"} name={"Gemini Ai Clone"} about={"UI and functionality Google Gemini clone"} link={"https://clone-gemini.vercel.app/"} toolImg={["chat-gpt.png", "react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/StdudentManage.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/StudentManagement_"} name={"Student Management System"} about={"Management system for students"} link={""} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/Better_Health.png"} gitHub={"https://github.com/Abhinavrajsrivastav/Multi-Step-Forms"} name={"Better Health"} about={"Health checkup Quiz Application, help you to get quick health update."} link={"http://quiz-app-health-01.s3-website.ap-south-1.amazonaws.com/"} toolImg={["react.png"]} tech={["React"]}/>
          {/* <CardsPage src={"./images/Works/newWorld.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/mymusics"} name={"New Word"} about={"Music player with the best Arman Malik's songs"} link={""} toolImg={["react.png"]} tech={["React"]}/> */}
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
