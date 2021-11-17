import React from 'react';
import './index.css';
import SvgHomeBackground from '../../icons/Components/HomeBackground';
import SvgBooks from '../../icons/Components/Books';
import SvgWatch from '../../icons/Components/Watch';
import SvgProgrammer from '../../icons/Components/Programmer';
import { AiOutlineMenu, AiOutlineMenuFold, AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillProject} from 'react-icons/ai';





export default function Home(props) {
    return (
        <div className="home">
            <section className="header">
                <div id="name">
                    Sanjeev Yogi
                </div>
                <div id="letsTalk">
                    <button>
                        Let's Talk
                    </button>
                </div>
                {/* <div id="socialBar">
                    <ul> 
                        <a href="#"><AiFillInstagram size={25}/></a>
                        <a href="#"><AiFillTwitterCircle size={25}/></a>
                        <a href="#"><AiFillGithub size={25}/></a>
                        <a href="#"><AiFillProject size={25}/></a>
                    </ul>
                </div> */}
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
