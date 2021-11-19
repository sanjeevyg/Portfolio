import React from 'react';
import './index.css';
import projectOneLogo from '../../svg/astronomy.png';
import useMouse from '@react-hook/mouse-position';
import { useState, useRef, useEffect } from 'react';

export default function Project() {


    const ref = useRef(null)
   


    const mouse = useMouse(ref, {
      enterDelay: 100,
      leaveDelay: 100,
    })

    const x = mouse.x 
    const y = mouse.y

    let xAxis = (window.innerWidth /2 - x)/25;
    let yAxis = (window.innerWidth /2 - y)/25;
    


    const animateIn = (e) => {
      e.target.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      console.log("animate in")

    }

    const animateOut = (e) => {
      e.target.style.transform = `rotateY(0deg) rotateX(0deg)`
      console.log("animate out")
    }
   
   

    return (
        <div classNam="projectContainer" ref={ref}>
          <section className="projectOne"> 
            <div className="container"
                onMouseEnter={animateIn}
                onMouseLeave={animateOut}
            >
              <div className="cardOne" >
                  <img src={projectOneLogo} alt="logo" height="400" width="400"/>
              </div>
            
           </div>
          </section>




     
        </div>
    )
}


