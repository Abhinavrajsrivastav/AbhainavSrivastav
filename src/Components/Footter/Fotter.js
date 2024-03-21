import React from 'react';
import './Fotter.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Fotter = () => {
    const name = "Abhinav";
    const OpenC = "<";
    const CloseC = "/>";
    return (
        <div className="Fotter-Container">
            <div className="Fotter">
                <div className="Contact-Me">
                    <div className="Brand">
                        <span style={{ color: 'rgb(18, 197, 202)' }}>{OpenC}</span>
                        <span>{name}</span>
                        <span style={{ color: 'rgb(18, 197, 202)' }}>{CloseC}</span>
                    </div>
                    <div className="Fotter-About" style={{fontSize: '15px'}}>I turn ideas into reality with the power of software engineering, and I share my stories as a content creator.</div>
                    <div class="input-group">
                    <input type="email" className="input" id="Email" name="Email" placeholder="uiverse@verse.io"></input>
                    <input className="button--submit" value="Subscribe" type="submit"></input>
                    </div>
                </div>
                <div className="Fotter-Content">
                    <div className="Fotter-General FC">
                        <p>General<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="/">Home</a>
                        <a href="/About">About</a>
                        <a href="https://drive.google.com/file/d/1ZsSS8dkb1KIvPB7xHt9VtXRFhkNB_gRb/view?usp=drivesdk">Resume</a>
                        <a href="/Contact">Contact</a>
                        <a href="/Achievements">Achievements</a>
                    </div>
                    <div className="Fotter-Projects FC">
                        <p>Work<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="/">Works</a>
                        <a href="https://qr.ae/ps7o2C">Vlogs</a>
                        <a href="https://medium.com/@abhiraj.srivast254/">Blogs</a>
                        <a href="https://www.youtube.com/channel/UCQbYznJOHsukO50pvrphMUg">Contents</a>
                        <a href="https://github.com/Abhinavrajsrivastav">Contributions</a>
                    </div>
                    <div className="Fotter-Social FC">
                        <p>Socials<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="https://github.com/Abhinavrajsrivastav">GitHub</a>
                        <a href="https://twitter.com/srivast254">Twitter</a>
                        <a href="https://www.linkedin.com/in/abhinav-raj-srivastava-599aaa1b2/">LinkedIn</a>
                        <a href="https://www.youtube.com/channel/UCQbYznJOHsukO50pvrphMUg">YouTube</a>
                        <a href="https://www.instagram.com/_abhinav_srivastav__/">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="Footer-Licence">
        <div className="Licence" style={{marginRight: '30px', marginBottom: '20px'}}>
         © 2024 Copyright. Proudly Made 🩵 by <a href="https://github.com/Abhinavrajsrivastav">Abhinav</a> using
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