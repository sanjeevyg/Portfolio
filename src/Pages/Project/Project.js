import React from 'react';
import './index.css';
import projectOneLogo from '../../svg/astronomy.png';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import useElementOnScreen from '../../CustomHook/useElementOnScreen';

export default function Project() {

    const image = useRef(null)

    const sectionOne = useRef(null)
    const sectionTwo = useRef(null)
    const sectionThree = useRef(null)
    

    const handleMouseMovePone = (e) => {
      let xAxis = (window.innerWidth /2 - e.pageX)/90;
      let yAxis = (window.innerWidth /2 - e.pageY)/90;
      sectionOne.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    const handleMouseLeavePone = () =>  {
      sectionOne.current.style.transform = `rotateY(0deg) rotateX(0deg)`
      sectionOne.current.style.transition = 'all .9s ease'
    }

    const handleMouseEnterPone = () => {
      sectionOne.current.style.transition = 'none'
      image.current.style.transform = 'translateZ(130px)'
    }

    const handleMouseMovePtwo = (e) => {
      let xAxis = (window.innerWidth /2 - e.pageX)/90;
      let yAxis = (window.innerWidth /2 - e.pageY)/90;
      sectionTwo.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    const handleMouseLeavePtwo = () =>  {
      sectionTwo.current.style.transform = `rotateY(0deg) rotateX(0deg)`
      sectionTwo.current.style.transition = 'all .9s ease'
    }

    const handleMouseEnterPtwo = () => {
      sectionTwo.current.style.transition = 'none'
      image.current.style.transform = 'translateZ(130px)'
    }

    const handleMouseMovePthree = (e) => {
      let xAxis = (window.innerWidth /2 - e.pageX)/90;
      let yAxis = (window.innerWidth /2 - e.pageY)/90;
      sectionThree.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      }
  
      const handleMouseLeavePthree = () =>  {
      sectionThree.current.style.transform = `rotateY(0deg) rotateX(0deg)`
      sectionThree.current.style.transition = 'all .9s ease'
      }
  
      const handleMouseEnterPthree = () => {
      sectionThree.current.style.transition = 'none'
      image.current.style.transform = 'translateZ(130px)'
    }


    const dispatch = useDispatch()

    let projectOneRef = useRef(null)
    let projectTwoRef = useRef(null)
    let projectThreeRef = useRef(null)

    const options =  {
        root: null,
        rootMargin: '0px',
        threshold: .25
    }
   
    let isProjectOneVisible = useElementOnScreen(projectOneRef, options)
    let isProjectTwoVisible = useElementOnScreen(projectTwoRef, options)
    let isProjectThreeVisible = useElementOnScreen(projectThreeRef, options)

    dispatch({type: "PROJECT_ONE", visibility: isProjectOneVisible})
    dispatch({type: "PROJECT_TWO", visibility: isProjectTwoVisible})
    dispatch({type: "PROJECT_THREE", visibility: isProjectThreeVisible})
  
   
    return (
        <div classNam="projectContainer" >
          <section className="sectionContainer one" ref={projectOneRef}> 
            <div className="projectNumber">PROJECT <span>|</span></div>
          
            <div className="subsectionContainer subOne" 
              ref={sectionOne}
              onMouseMove={handleMouseMovePone}
              onMouseLeave={handleMouseLeavePone}  
              onMouseEnter={handleMouseEnterPone}  
            >
              <div class="card cOne" > 
                <div className="info"> 
                    <h1 className="title">SKY GAZER</h1>
                    <h4> App built for planets</h4>
                    <button>3</button>
                    <div className="visitWebsite"> 
                        <button>Visit Website</button>
                    </div>
                </div>
                <div className="skyGazer" ref={image}  >
                    <img src={projectOneLogo} alt="skyGazer" />
                </div>
              </div>
           </div>
           {/* <div className="pageNumber">01</div> */}
          </section>
          

          <section className="sectionContainer two" ref={projectTwoRef}> 
            <div className="subsectionContainer subTwo" 
              ref={sectionTwo}
              onMouseMove={handleMouseMovePtwo}
              onMouseLeave={handleMouseLeavePtwo}  
              onMouseEnter={handleMouseEnterPtwo}  
            >
              <div class="card cTwo" > 
                <div className="info"> 
                    <h1 className="title">PROJECT TWO</h1>
                    <h4> App built for planets</h4>
                    <button>3</button>
                    <div className="visitWebsite"> 
                        <button>Visit Website</button>
                    </div>
                </div>
                {/* <div className="skyGazer" ref={image}  >
                    <img src={projectOneLogo} alt="skyGazer" />
                    
                </div> */}
              </div>
           </div>
          </section>

          <section className="sectionContainer three" ref={projectThreeRef}> 
            <div className="subsectionContainer subThree" 
              ref= {sectionThree}
              onMouseMove={handleMouseMovePthree}
              onMouseLeave={handleMouseLeavePthree}  
              onMouseEnter={handleMouseEnterPthree}    
            >
              <div class="card cThree" > 
                <div className="info"> 
                    <h1 className="title">PROJECT THREE</h1>
                    <h4> App built for planets</h4>
                    <button>3</button>
                    <div className="visitWebsite"> 
                        <button>Visit Website</button>
                    </div>
                </div>
                {/* <div className="skyGazer" ref={image}  >
                    <img src={projectThreeLogo} alt="skyGazer" />
                    
                </div> */}
                
              </div>
              
           </div>
          </section>
        </div>
    )
}


