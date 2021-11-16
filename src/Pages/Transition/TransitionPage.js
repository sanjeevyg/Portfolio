import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineMenuFold, AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillProject} from 'react-icons/ai';
import './index.css'



export default function TransitionPage() {
    
    const [state, setToggleState] = useState(false)

    const handleToggle = () => {
        setToggleState(!state)
    }


    return (
        <div className="transition">
            <div onClick={handleToggle} className={ state ? "toggle active": "toggle" }> 
                {state ? <AiOutlineMenuFold size={36}/> : <AiOutlineMenu size={36}/>}
            </div>

            <div className = {state ? "pages active" : "pages"}>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Projects</li>
                </ul>
                <div className="socialBar">
                    <ul> 
                        <li><a href="#"><AiFillInstagram size={36}/></a></li>
                        <li><a href="#"><AiFillTwitterCircle size={36}/></a></li>
                        <li><a href="#"><AiFillGithub size={36}/></a></li>
                        <li><a href="#"><AiFillProject size={36}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
            
    )
}
