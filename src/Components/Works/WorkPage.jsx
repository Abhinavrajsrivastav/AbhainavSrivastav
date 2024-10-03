import React from 'react';
import CardsPage from './CardPage/CardsPage';
import './WorkPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkPage = () => {
  return (
    <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
          <span className="Page-Text">My Recent <span>Works.</span></span><br />
          <span className="Page-Text-description">Here are some of the projects I've worked on, utilizing a variety of technologies and frameworks.</span>
        </div>

        <div className="Page-Cards">
          <CardsPage src={"./images/Works/educome.png"} gitHub={"https://github.com/Abhinavrajsrivastav/pacifics-path"} name={"Educome"} about={"A platform for engineers. Google Gemini Competition - 2024"} link={"https://abhinavrajsrivastav.github.io/pacifics-path/"} toolImg={["./FavIcon.png"]} tech={["React", "GCP", "Gemini 1.5", "Firebase","MySql"]}  className="animated" />
          <CardsPage src={"./images/Works/AyodhayaDham.png"} gitHub={"https://github.com/Abhinavrajsrivastav/ADHM"} name={"Ayodhya Dham"} about={"Ayodhya Dham, is a tour guide website. Help you to make your Ayodhya visit comfortable and safe."} link={"https://ayodhyadham.vercel.app/"} toolImg={["react.png"]} tech={["React","Google cloud console","Javascript"]}/>
          <CardsPage src={"./images/Works/hindi.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"} name={"HindLish"} about={"Hindlish, is a Musics player with some of the best Hindi and English songs"} link={"https://healsync.onrender.com/"} toolImg={["react.png"]} tech={["React"]}/>
          <CardsPage src={"./images/Works/columbae.png"} gitHub={"https://github.com/Abhinavrajsrivastav/cloud-octo-eureka"} name={"Columbae"} about={"An Interview Dashboard...working"} link={""} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/yts.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"} name={"Movie Finder"} about={"Improving YouTube-Search Search Responses, Enhance user experiences"} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_springboot-javascripts-java-activity-7155206688197758977-9tIt?utm_source=share&utm_medium=member_desktop"} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/gemini.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/OpenAi"} name={"Gemini Ai Clone"} about={"UI and functionality Google Gemini clone"} link={"https://clone-gemini.vercel.app/"} toolImg={["chat-gpt.png", "react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/Better_Health.png"} gitHub={"https://github.com/Abhinavrajsrivastav/Multi-Step-Forms"} name={"Better Health"} about={"Get a quick with health checkup with, Quiz App."} link={"http://quiz-app-health-01.s3-website.ap-south-1.amazonaws.com/"} toolImg={["react.png"]} tech={["React"]}/>
          <CardsPage src={"./images/Works/weather.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/WhetherApp/demo"} name={"Weather App"} about={"Get Real-time weather updates of a place."} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_javadevelopment-springboot-javascripts-activity-7149425500443017216-ut8D?utm_source=share&utm_medium=member_desktop"} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/image.png"} gitHub={""} name={"Customer Transactions Dashboard"} about={"My First Power Bi Dashboard. Customer Transaction Analysis."} link={"https://abes365-my.sharepoint.com/:u:/g/personal/abhinav_21b1531174_abes_ac_in/EUsuVCtNi61Hh9FCol3AU50BC8Ng9pPerXvQNn-kL9Vy7A?e=UkclRJ"} toolImg={["powerbi.png"]} tech={["Power Bi"]} className="animated" />
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
