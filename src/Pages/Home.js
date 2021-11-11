import React from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineMenuFold, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';


export default function Home(props) {
    
    const [state, setToggleState] = useState(false)

    const handleToggle = () => {
        setToggleState(!state)
    }

    return (
        <div class="home">
            
                    <div onClick={handleToggle} className={ state ? "toogle active": "toggle" }> 
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
                                <li><a href="#"><AiFillTwitterCircle size={36}/></a></li>
                                <li><a href="#"><AiFillTwitterCircle size={36}/></a></li>
                                <li><a href="#"><AiFillTwitterCircle size={36}/></a></li>
                            </ul>
                        </div>
                    </div>
        </div>
    )
}
