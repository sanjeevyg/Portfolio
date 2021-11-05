import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaAngleDoubleLeft} from 'react-icons/fa';


export default function Home(props) {
    

    const [state, setToggleState] = useState(false)

    const handleToggle = () => {
        setToggleState(!state)
    }




   
    
    return (
        <div class="home">
            <section>
                <div onClick={handleToggle} className= {state ? "toggleActive" : "toggle"}>
                    {state ? <FaAngleDoubleLeft  size={36}/> : <FaBars size={36}/>}
                </div>
            </section>
        </div>
    )
}
