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
                           Welcome to my website! My name is Sanjeev Yogi. Before I started coding, I worked as an architect for a few years and construction estimator for a couple of years after my undergraduate and graduate school. 
                           I started coding as a hobby. As I started getting my feet wet, I stumbled across several youtube videos and articles on software engineering. There is so much resources on the inernet that sometimes it is confusing and overwhelming. The learning process can be
                        slow and painful without proper guidance. So, after much thought and planning, I joined the Flatiron School in Denver in 2020 and graduated at the end of the year. I throughly enjoyed my time at Flatiron and learned 
                        a lot. I was very eager to begin my new career but had to be away to fulfill my military duties. Now, when I am back, I am more motivated than ever and ready to kickoff my software engineering journey.
       
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