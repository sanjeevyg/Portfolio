import React from 'react';
import './index.css';
import {FaReact  } from 'react-icons/fa';
import {AiOutlineCopyrightCircle  } from 'react-icons/ai';
import {DiNodejs, DiFirebase, DiHeroku } from 'react-icons/di';
import {SiRubyonrails, SiTensorflow, SiJavascript, SiDjango, SiCsswizardry, SiHtmlacademy} from 'react-icons/si';

export default function About() {
    return (
        <div > 
            <section className="about">
                <div className="skills">Tech Skills </div>
                <section className="iconsContainer">
                    <div className="iconsGroupOne">
                        <div className="tensorFlow icon" ><SiTensorflow size={35}/></div>
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
                           My name is Sanjeev Yogi. Prevously, I have worked as an architect for about five years and construction estimator as two years following my respective, Bachelor degree in Architecture and Masters in Construction Management. Coding, which started as 
                           a hobby, I immediately fell in love with it. So, I decided to join Flatiron School in Denver, in August 2020 to pursue software engineering as a career. Though after graduation, I could not kick-off my software engineering career because of my military related responsiblities. 
                           Now, when I am back, I am more determined than ever. I am starting from where I left a year ago. I am excited and looking forward to start my new career as a software engineer. 
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