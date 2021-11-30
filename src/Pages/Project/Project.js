import React from 'react';
import './index.css';
import projectOneLogo from '../../svg/astronomy.png';
import astonomyImg from '../../svg/astronomyImg.png';
import { useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import useElementOnScreen from '../../CustomHook/useElementOnScreen';
import { AiFillCloseSquare } from 'react-icons/ai';


export default function Project() {

  const imageOne = useRef(null)
  const imageTwo = useRef(null)
  const titleOne = useRef(null)

    const sectionOne = useRef(null)
    const sectionTwo = useRef(null)
    const sectionThree = useRef(null)
    

    const handleMouseMovePone = (e) => {
      let xAxis = (window.innerWidth /2 - e.pageX)/120;
      let yAxis = (window.innerWidth /2 - e.pageY)/120;
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
      let xAxis = (window.innerWidth /2 - e.pageX)/120;
      let yAxis = (window.innerWidth /2 - e.pageY)/120;
      sectionTwo.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    const handleMouseLeavePtwo = () =>  {
      sectionTwo.current.style.transform = `rotateY(0deg) rotateX(0deg)`
      sectionTwo.current.style.transition = 'all .9s ease'
    }

    const handleMouseEnterPtwo = () => {
      sectionTwo.current.style.transition = 'none'
      imageTwo.current.style.transform = 'translateZ(130px)'
    }

    const handleMouseMovePthree = (e) => {
      let xAxis = (window.innerWidth /2 - e.pageX)/120;
      let yAxis = (window.innerWidth /2 - e.pageY)/120;
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

    let skyGazer = ""

    const toggleProjectOne = () => {
      dispatch({type: "PROJECTONEVIDEO", visibility: isProjectOneVisible})
    }
    
    const projectOneVideoStatus = useSelector(state => state.videoStatus)

    projectOneVideoStatus ? skyGazer="https://www.youtube.com/embed/G33j5Qi4rE8?autoplay=1": skyGazer = "https://www.youtube.com/embed/G33j5Qi4rE8" 

    const closeVideoOne = () => {
      dispatch({type: "PROJECTONEVIDEO", visibility: isProjectOneVisible})
    }
   
    return (
        <div classNam="projectContainer" >
          <section className="sectionContainer one" ref={projectOneRef}> 
            <div className="projectTitle">PROJECT ONE</div>
            <div className={ projectOneVideoStatus ? "videoOneActive" : "skyGazerVideo"} >
                  <iframe width="560" height="315" title="videoOne" src={skyGazer} allow="autoplay" allowFullScreen  ></iframe>
              <div id="closeBtn"> <AiFillCloseSquare size={79} onClick={closeVideoOne}/> </div>
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
                        <button onClick={toggleProjectOne}>VIDEO</button>
                    </div>
                </div>
                <div className="skyGazer" ref={imageOne} >
                    <img src={astonomyImg} alt="skyGazer"/>
                </div>
              </div>
           </div>
          </section>
          

          <section className="sectionContainer two" ref={projectTwoRef}> 
            <div className="projectTitle">PROJECT TWO</div>
            <div className="subsectionContainer subTwo" 
              ref={sectionTwo}
              onMouseMove={handleMouseMovePtwo}
              onMouseLeave={handleMouseLeavePtwo}  
              onMouseEnter={handleMouseEnterPtwo}  
            >
              <div class="card cTwo" > 
                <div className="info infoTwo"> 
                    <h1 className="title" ref={titleOne}>SKY GAZER</h1>
                    <h3> 
                      App uses the NASA api to find the general information about the planets in solar system and other planetary systems. 
                    </h3>
                    <div className="techInfoTwo"> 
                      <h4 id="backend"><span>Backend : </span>Ruby on Rails </h4>
                      <h4 id="frontend"><span>Frontend : </span>Vanilla Javascript</h4>
                    </div>
                    <div className="websiteTwo"> 
                        <button>WEBSITE</button>
                        <button onClick={toggleProjectOne}>VIDEO</button>
                    </div>
                    <div className="skyGazer" ref={imageTwo} >
                      <img src={astonomyImg} alt="skyGazer"/>
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


