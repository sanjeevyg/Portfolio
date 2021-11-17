import React from 'react';
import './index.css';
import SvgHomeBackground from '../../icons/Components/HomeBackground';
import SvgBooks from '../../icons/Components/Books';
import SvgWatch from '../../icons/Components/Watch';
import SvgProgrammer from '../../icons/Components/Programmer';
import { AiOutlineMenu, AiOutlineMenuFold, AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillProject} from 'react-icons/ai';
import { GiBarbedSun} from 'react-icons/gi';





export default function Home(props) {
    return (
        <div className="home">
            <div className="background">
                
                <button>Feedback</button>
            </div>
            <section className="header">
                <div id="name">
                    <div className="star">
                        <a href="#"><GiBarbedSun size={55}/></a>
                    </div>

                    <div>SANJEEV YOGI</div>
                    <span>PROJECTS</span>
                    <span>ABOUT</span>
                    <span>CONTACT</span>
                    <span>BLOGS</span>
                </div>
                <div className="letsTalk">
                    <div>
                        <button>
                            Let's Talk
                        </button>
                    </div>
                    <div className="menu">
                        <ul>
                            <a href="#"><AiOutlineMenu size={25}/></a>
                        </ul>
                    </div>
                </div>
                {/* <div id="socialBar">
                    <ul> 
                        <a href="#"><AiFillInstagram size={35}/></a>
                        <a href="#"><AiFillTwitterCircle size={25}/></a>
                        <a href="#"><AiFillGithub size={25}/></a>
                        <a href="#"><AiFillProject size={25}/></a>
                    </ul>
                </div> */}
            </section>
            <section className="portfolio">
                <div>
                    POR<span>TFO</span>LIO
                </div>
                <div className="description">Full stack software engineer</div>
            </section>
            <section className="svgb">
                <SvgHomeBackground className="homeBackground" height="500px" width="500px"/>
                <SvgWatch className="watch"/>
                <SvgProgrammer className="programmer" height="320px" width="320px"/>
                <SvgBooks className="books"  height="160px" width="160px" />
            </section>
        </div>
    )
}
