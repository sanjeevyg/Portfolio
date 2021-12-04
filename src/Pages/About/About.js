import React from 'react';
import './index.css';
import {FaReact  } from 'react-icons/fa';
import {DiNodejs } from 'react-icons/di';
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
                    </div>
                    <div className="iconsGroupTwo">
                        <div className="htmlic icon" ><SiHtmlacademy size={35} /></div>
                        <div className="rails icon"> Rails </div>
                        <div className=" nodejs icon"> <DiNodejs  size={50} /></div>
                        <div className="django icon" > <SiDjango size={35} /></div>
                    </div>
                    <div id="box">

                    </div>
                </section>
            <section className="innerBackground">
                <div id="description">
                    My name is Sanjeev Yogi. I worked as an architect for few years.
                                        @copyright : Sanjeev Yogi 

                </div>
            </section>
            </section>
        </div>
    )
}