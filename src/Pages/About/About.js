import React from 'react';
import './index.css';
import {FaReact  } from 'react-icons/fa';
import {AiOutlineCopyrightCircle  } from 'react-icons/ai';
import {DiNodejs, DiFirebase, DiHeroku } from 'react-icons/di';
import { SiTensorflow, SiJavascript, SiDjango, SiCsswizardry, SiHtmlacademy} from 'react-icons/si';

export default function About() {
    return (
        <div > 
            <section className="about" id="aboutC">
                <div className="skills">Tech Skills </div>
                <section className="iconsContainer">
                    <div className="iconsGroupOne">
                        <div className="tensorFlow icon" ><SiTensorflow id="Tensor" size={35}/></div>
                        <div className="javascript icon" ><SiJavascript  size={35} /></div>
                        <div className="react icon"><FaReact  size={35} /></div>
                        <div className="css icon"><SiCsswizardry  size={35} /></div>
                        <div className="heroku icon" > <DiHeroku size={35} /></div>
                    </div>
                    <div className="iconsGroupTwo">
                        <div className="htmlic icon" ><SiHtmlacademy size={35} /></div>
                        <div className="rails icon"> Rails </div>
                        <div className=" nodejs icon"> <DiNodejs  size={50} /></div>
                        <div className="django icon" > <SiDjango size={35} /></div>
                        <div className="firebase icon">
                            <div><DiFirebase id="firebase" size={35}/></div>
                            <div>Fb</div>
                        </div>
                    </div>
                    <div id="box">
                    </div>
                </section>
            <section className="innerBackground">
                <div id="description">
                    <div id="introduction"> 
                        <div id="aboutMe">About me</div>
                        <div id="bio"> 
                        Full Stack Software Engineer with experience using backend and frontend technologies like Node.js, Rails, React and React Native. Construction and architecture background
                        with an eye for art, design and technology. <br></br> 
                        Creative and logical problem solver. Committed and responsible team player with 
                        a get-it-done, on-time, and high-quality product spirit. Able to quickly learn, adapt and master new technologies, languages, and frameworks.<br></br>
                        A nature photography enthusiast, a proud US sailor, and a hiker. 
                        </div>
                    </div>
                    <div id="copyright"> 
                        2021<AiOutlineCopyrightCircle id="copyrightLogo" size={12}/>copyright. All rights reserved.
                    </div>

                </div>
            </section>
            </section>
        </div>
    )
}