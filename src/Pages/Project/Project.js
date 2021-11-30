import React from 'react';
import './index.css';
import projectOneLogo from '../../svg/astronomy.png';
import astonomyImg from '../../svg/astronomyImg.png';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import useElementOnScreen from '../../CustomHook/useElementOnScreen';

const websiteImage = "https://images.immediate.co.uk/production/volatile/sites/4/2021/01/astronomy-beginners-uk-7f589e4.jpg?quality=90&resize=768,574"

export default function Project() {

  const imageOne = useRef(null)
  const titleOne = useRef(null)

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
      imageOne.current.style.transform = 'translateZ(150px)'
      titleOne.current.style.transform = 'rotate(1000px)'
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
      imageOne.current.style.transform = 'translateZ(130px)'
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
      imageOne.current.style.transform = 'translateZ(230px)'
      titleOne.current.style.transform = 'translateZ(230px)'
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


    //video 

    const skyGazer = "https://www.youtube.com/embed/G33j5Qi4rE8" 
  
   
    return (
        <div classNam="projectContainer" >
          <section className="sectionContainer one" ref={projectOneRef}> 
            <div className="projectTitle">PROJECTS</div>
            <div className="skyGazerVideo">
                  <iframe width="560" height="315"  src={skyGazer} allowFullScreen></iframe>
            </div>
          
            <div className="subsectionContainer subOne" 
              ref={sectionOne}
              onMouseMove={handleMouseMovePone}
              onMouseLeave={handleMouseLeavePone}  
              onMouseEnter={handleMouseEnterPone}  
            >
              <div class="card cOne" > 
                <div className="info infoOne"> 
                    <h1 className="title" ref={titleOne}>SKY GAZER</h1>
                    <h3> 
                      App uses the NASA api to find the general information about the planets in solar system and other planetary systems. 
                    </h3>
                    <div className="techInfoOne"> 
                      <h4 id="backend"><span>Backend : </span>Ruby on Rails </h4>
                      <h4 id="frontend"><span>Frontend : </span>Vanilla Javascript</h4>
                    </div>
                    <div className="websiteOne"> 
                        <button>WEBSITE</button>
                        <button>VIDEO</button>
                    </div>
                </div>
                <div className="skyGazer" ref={imageOne} >
                    <img src={astonomyImg} alt="skyGazer"/>
                </div>
                
              </div>
           </div>
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
                    <h4> App's uses the NASA api to find the general information about the planets in solar system and other galaxies.</h4>
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


