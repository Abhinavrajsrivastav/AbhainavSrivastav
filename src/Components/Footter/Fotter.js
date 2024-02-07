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
                        <a href="">About</a>
                        <a href="">Resume</a>
                        <a href="/contact">Contact</a>
                        <a href="/resume">Testimonials</a>
                    </div>
                    <div className="Fotter-Projects FC">
                        <p>Projects<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="/works">Works</a>
                        <a href="/talks">Talks</a>
                        <a href="/open-sources">Blogs</a>
                        <a href="/content-creation">Contents</a>
                        <a href="/blogs">Contributions</a>
                    </div>
                    <div className="Fotter-Social FC">
                        <p>Socials<span style={{color: 'rgb(18, 197, 202)'}}>.</span></p>
                        <a href="https://github.com">GitHub</a>
                        <a href="https://twitter.com">Twitter</a>
                        <a href="https://LinkedIn.com">LinkedIn</a>
                        <a href="https://youtube.com">YouTube</a>
                        <a href="https://instagram.com">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="Fotter-Licence">
                <div className="Licence">
                    © 2024 Copyright.Made with ❤️ by @abhinav_ using ABCD Proudly Open-Source!
                </div>
            </div>
        </div>
    );
}

export default Fotter;