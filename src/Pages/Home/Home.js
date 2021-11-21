import React from 'react';
import './index.css';
import SvgHomeBackground from '../../icons/Components/HomeBackground';
import { AiOutlineMenu, AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import finalLogo from '../../svg/finalLogo.svg'

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
                    <div>Hi, <span>I am </span> </div>
                    <div>Sanjeev Yogi. </div>
                    <div className="description">Full stack software engineer</div>
                    <button>See Projects</button>
                </div>
                <div className="svgContainer">
                    <div className="svgGroup">
                        <img src={finalLogo} alt="finalLogo" className="finalLogo" height="700px" width="700px" />
                    </div>
                </div>
                <section className="bottom">
                </section>
              
            </section>
           
           
            
        </div>
    )
}
