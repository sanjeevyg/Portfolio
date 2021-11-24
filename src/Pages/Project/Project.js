import React from 'react';
import './index.css';
import projectOneLogo from '../../svg/astronomy.png';
import { useRef } from 'react';
import useElementOnScreen from '../../CustomHook/useElementOnScreen';
import { useDispatch } from 'react-redux';

export default function Project() {


    const dispatch = useDispatch()
    const containerOne = useRef(null)
    const image = useRef(null)

    let projectOneRef = useRef(null)
    let projectTwoRef = useRef(null)
    let projectThreeRef = useRef(null)

    const options =  {
        root: null,
        rootMargin: '500px',
        threshold: .25
    }
   
    let isProjectOneVisible = useElementOnScreen(projectOneRef, options)
    let isProjectTwoVisible = useElementOnScreen(projectTwoRef, options)
    let isProjectThreeVisible = useElementOnScreen(projectThreeRef, options)

    console.log('projecOneStatusCheck', isProjectOneVisible)
    console.log('projecTwoStatusCheck', isProjectTwoVisible)

    dispatch({type: "PROJECT_ONE", visibility: isProjectOneVisible})
    dispatch({type: "PROJECT_TWO", visibility: isProjectTwoVisible})
    dispatch({type: "PROJECT_THREE", visibility: isProjectThreeVisible})
  
    const handleMouseMove = (e) => {
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
          <section className="projectOne" ref={projectOneRef}> 
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
                    <button>3</button>
                    <div className="visitWebsite"> 
                        <button>Visit Website</button>
                    </div>
                </div>
                <div className="skyGazer" ref={image}  >
                    <img src={projectOneLogo} alt="skyGazer" />
                    
                </div>
                {/* <div className="circle"></div> */}
                
              </div>
              
           </div>
          </section>

          <section className="projectTwo" ref={projectTwoRef}> 
            <div className="containerTwo" 

            ref={containerOne}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}  
            onMouseEnter={handleMouseEnter}  
            >
              <div class="cardTwo" > 
                <div className="info"> 
                    <h1 className="title">PROJECT TWO</h1>
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
          </section>

          <section className="projectThree" ref={projectThreeRef}> 
            <div className="containerThree" 
            ref={containerOne}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}  
            onMouseEnter={handleMouseEnter}  
            >
              <div class="cardThree" > 
                <div className="info"> 
                    <h1 className="title">PROJECT THREE</h1>
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
          </section>
        </div>
    )
}


