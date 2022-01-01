import React from 'react';
import './index.css';
import {FaReact  } from 'react-icons/fa';
import {AiOutlineCopyrightCircle  } from 'react-icons/ai';
import {DiNodejs, DiFirebase, DiHeroku } from 'react-icons/di';
import {SiRubyonrails, SiTensorflow, SiJavascript, SiDjango, SiCsswizardry, SiHtmlacademy} from 'react-icons/si';

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
                           Welcome to my website! My name is Sanjeev Yogi. I have previously worked as an architect for a few years and construction estimator for a couple of years following my respective bachelor 
                           degree in architecture and masters in Construction Management. Couple of years ago, I started coding as a hobby. During this period, I fell in love with it. I found many similarities between
                            architecture and software engineering in many ways in terms of principles of aesthetics and workflow. There is more technical aspects to the software engineering.

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