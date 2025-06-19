import 'bootstrap/dist/css/bootstrap.min.css';
import CardsPage from './CardPage/CardsPage';
import './WorkPage.css';

const WorkPage = () => {
  return (
    <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
          <span className="Page-Text">My Recent <span className="Page-Text-Span">Works.</span></span><br />
          <span className="Page-Text-description">Here are some of the projects I've worked on, utilizing a variety of technologies and frameworks.</span>
        </div>

        <div className="Page-Cards">
          <CardsPage src={"./images/Works/educome.png"} gitHub={"https://github.com/Abhinavrajsrivastav/pacifics-path"} name={"Educome"} about={"A developer centric platform. Google Gemini Competition - 2024"} link={"https://abhinavrajsrivastav.github.io/pacifics-path/"} toolImg={["./FavIcon.png"]} tech={["React", "GCP", "Gemini 1.5", "Firebase","MySql"]}  className="animated" />
          <CardsPage src={"./images/Works/AyodhayaDham.png"} gitHub={"https://github.com/Abhinavrajsrivastav/ADHM"} name={"Ayodhya Dham"} about={"Ayodhya Dham, is a tour guide website. Help you to make your Ayodhya visit comfortable and safe."} link={"https://ayodhyadham.vercel.app/"} toolImg={["react.png"]} tech={["React","Google cloud console","Javascript"]}/>
          <CardsPage src={"./images/Works/columbae.png"} gitHub={"https://github.com/Abhinavrajsrivastav/cloud-octo-eureka"} name={"Columbae"} about={"An Interview Dashboard"} link={"https://educloud-dcra.onrender.com/"} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          <CardsPage src={"./images/Works/hindi.png"} gitHub={"https://github.com/Abhinavrajsrivastav/React-Projects/tree/master/Musics/hinlish"} name={"HindLish"} about={"Hindlish, is a Musics player with some of the best Hindi and English songs"} link={"https://healsync.onrender.com/"} toolImg={["react.png"]} tech={["React"]}/>
          <CardsPage src={"./images/Works/yts.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/moviefinder"} name={"Movie Finder"} about={"Improving YouTube-Search Search Responses, Enhance user experiences"} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_springboot-javascripts-java-activity-7155206688197758977-9tIt?utm_source=share&utm_medium=member_desktop"} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>
          {/* <CardsPage src={"./images/Works/gemini.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/OpenAi"} name={"Gemini Ai Clone"} about={"UI and functionality Google Gemini clone"} link={"https://clone-gemini.vercel.app/"} toolImg={["chat-gpt.png", "react.png", "leaf.png"]} tech={["React","Spring Boot"]}/> */}
          <CardsPage src={"./images/Works/weather.png"} gitHub={"https://github.com/Abhinavrajsrivastav/SpringBootProjects/tree/main/WhetherApp/demo"} name={"Weather App"} about={"Get Real-time weather updates of a place."} link={"https://www.linkedin.com/posts/abhinav-raj-srivastav-599aaa1b2_javadevelopment-springboot-javascripts-activity-7149425500443017216-ut8D?utm_source=share&utm_medium=member_desktop"} toolImg={["react.png", "leaf.png"]} tech={["React","Spring Boot"]}/>        
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
