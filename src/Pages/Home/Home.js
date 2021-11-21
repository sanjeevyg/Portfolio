import React from 'react';
import './index.css';
import SvgHomeBackground from '../../icons/Components/HomeBackground';
import SvgBooks from '../../icons/Components/Books';
import SvgWatch from '../../icons/Components/Watch';
import SvgProgrammer from '../../icons/Components/Programmer';
import SvgBg from '../../icons/Components/Bg';
import { AiOutlineMenu, AiOutlineMenuFold, AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillProject, AiFillLinkedin} from 'react-icons/ai';
import { GiBarbedSun} from 'react-icons/gi';


// npx @svgr/cli src/svg --out-dir src/icons/Components --icon



export default function Home(props) {
    return (
        <div className="home">
            <section className="header">
                <div id="headerLeft">
                    <div className="star">
                         <SvgHomeBackground className="logo" height="50px" width="50px"/>
                    </div>
                    <div>PORTFOLIO</div>
                    <span>PROJECTS</span>
                    <span>BLOGS</span>
                    <span>ABOUT</span>
                    <span>CONTACT</span>
                </div>
                <div className="menuContainer">
                    <ul className="menu">
                        <a href="#"><AiOutlineMenu size={37}/></a>
                    </ul>
                </div>
               
            </section>
            <section className="socialBar">
               
                <div className="coverOne"></div>
                <div id="socialListContainer"> 
                    <li><a href="#"><AiFillLinkedin size={37}/></a></li>
                    <li><a href="#"><AiFillGithub size={37}/></a></li>
                    <li><a href="#"><AiFillTwitterCircle size={37}/></a></li>
                    <li><a href="#"><AiFillInstagram size={37}/></a></li>
                </div>
                </section>
            <section className="centralContent">
                <div className="centralText">
                    {`Hi, \n 
                    this is Yogi!`}
                    {/* POR<span>TFO</span>LIO */}
                    <div className="description">Full stack software engineer</div>
                </div>
                <div className="svgContainer">
                    <div className="svgGroup">
                        <SvgHomeBackground className="homeBackground" height="500px" width="500px"/>
                        <SvgWatch className="watch"/>
                        <SvgProgrammer className="programmer" height="320px" width="320px"/>
                        <SvgBooks className="books"  height="160px" width="160px" />
                    </div>
                </div>
                <section className="bottom">
                </section>
              
            </section>
           
           
            
        </div>
    )
}
