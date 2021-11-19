import React from 'react';
import './index.css';
import projectOneLogo from '../../svg/astronomy.png';
import useMouse from '@react-hook/mouse-position';
import { useState, useRef, useEffect } from 'react';
import { GiYunluo } from 'react-icons/gi';

export default function Project() {

    const containerOne = useRef(null)
    const image = useRef(null)
  
    const handleMouseMove = (e) => {
      console.log(e.pageX)
      let xAxis = (window.innerWidth /2 - e.pageX)/70;
      let yAxis = (window.innerWidth /2 - e.pageY)/70;
      
      containerOne.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    const handleMouseLeave = () => {
      containerOne.current.style.transform = `rotateY(0deg) rotateX(0deg)`
      containerOne.current.style.transition = 'all .9s ease'
    }

    const handleMouseEnter = () => {
      containerOne.current.style.transition = 'none'
      image.current.style.transform = 'translateZ(130px)'
    }
   
    return (
        <div classNam="projectContainer" >
          <section className="projectOne"> 
            <div className="containerOne" 

            ref={containerOne}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}  
            onMouseEnter={handleMouseEnter}  
            >
              <div class="cardOne" > 
                <div className="info"> 
                    <h1 className="title">SKY GAZER</h1>
                    <h4> App built for planets</h4>
                    <button>1</button>
                    <button>2</button>
                    <button class="active">3</button>
                    <button>3</button>
                    <div className="visitWebsite"> 
                        <button>Visit Website</button>
                    </div>
                </div>
                <div className="skyGazer" ref={image}  >
                    <img src={projectOneLogo} alt="skyGazer" />
                    
                </div>
                <div className="circle"></div>
                
              </div>
              
           </div>
          </section>
        </div>
    )
}


