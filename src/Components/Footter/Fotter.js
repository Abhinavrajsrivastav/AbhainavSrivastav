import React from 'react';
import './Fotter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Fotter = () => {
    const name = "Abhinav";
    const OpenC = "<";
    const CloseC = "/>";
    return (
        <div className="Fotter-Container">
            <div className="Fotter">
                <div className="Contact-Me">
                    <div className="Brand">
                        <span className="OpenC">{OpenC}</span>
                        <span >{name}</span>
                        <span className="CloseC">{CloseC}</span>
                    </div>
                    <div className="Fotter-About" style={{fontSize: '15px'}}>I turn ideas into reality with the power of software engineering, and I share my stories as a content creator.</div>
                    <div className="input-group">
                    <input type="email" className="input" id="Email" name="Email" placeholder="uiverse@verse.io"></input>
                    <Link to="/Contact"> <input className="button--submit" value="Say hi 👋" type="submit" ></input></Link>
                    </div>
                </div>
                <div className="Fotter-Content">
                <div className="Fotter-General FC">
                        <p>Coding<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="https://auth.geeksforgeeks.org/user/abhirajsrivast254">GFG</a>
                        <a href="https://github.com/Abhinavrajsrivastav">GitHub</a>
                        <a href="https://www.linkedin.com/in/abhinav-raj-srivastava-599aaa1b2/">LinkedIn</a>
                        <a href="https://leetcode.com/Abhinav254/">Leetcode</a>
                        <a href="https://www.hackerrank.com/profile/CSME2A_b1531174">Hackerrank</a>
                    </div>
                    <div className="Fotter-General FC">
                        <p>General<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="/">Home</a>
                        <Link to="/About"><span>About</span></Link>
                        <a href="https://drive.google.com/file/d/1Ypy_KSr1D4L3s1l9_EH_FkJ1ZVU299K_/view?usp=drivesdk">Resume</a>
                        {/* <a href="https://www.codechef.com/users/abhinav_254"><span>CodeChef</span></a> */}
                        <Link to="/Achievements"><span>Achievements</span></Link>
                    </div>
                    <div className="Fotter-Projects FC">
                        <p>Works<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="/">Work</a>
                        {/* <a href="https://qr.ae/ps7o2C">Vlogs</a> */}
                        <a href="https://medium.com/@abhiraj.srivast254/">Blogs</a>
                        <a href="https://www.youtube.com/channel/UCQbYznJOHsukO50pvrphMUg">Contents</a>
                        <a href="https://github.com/Abhinavrajsrivastav">Contributions</a>
                    </div>
                    <div className="Fotter-Social FC">
                        <p>Socials<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="https://twitter.com/srivast254">Twitter</a>
                        <a href="https://www.linkedin.com/in/abhinav-raj-srivastava-599aaa1b2/">Portfolio</a>
                        <a href="https://www.youtube.com/channel/UCQbYznJOHsukO50pvrphMUg">YouTube</a>
                        <a href="https://www.instagram.com/_abhinav_srivastav__/">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="Footer-Licence">
        <div className="Licence" style={{marginRight: '30px', marginBottom: '20px'}}>
         © 2024 Copyright. Proudly Made with 🩵 by <a href="https://github.com/Abhinavrajsrivastav">Abhinav</a> using
           <img src="./images/Tools/javas.png" alt="Java" style={{ height: '20px', width: '20px',margin: '0px 3px 0px 3px' }} />
           <img src="./images/Tools/bootstrap.png" alt="Bootstrap" style={{ height: '20px', width: '20px',margin: '0px 3px 0px 3px'  }} />
           <img src="./images/Tools/react.png" alt="React" style={{ height: '20px', width: '20px',margin: '0px 3px 0px 3px'  }} />
          .
        </div>
      </div>
        </div>
    );
}

export default Fotter;