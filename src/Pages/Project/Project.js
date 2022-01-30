import React from 'react';
import './index.css';
import astonomyImg from '../../svg/astronomyImg.png';
import dogImg from '../../svg/dogScanner.png';
import phoneImg from '../../svg/Iphone.png';
import { useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import useElementOnScreen from '../../CustomHook/useElementOnScreen';
import { AiFillCloseSquare } from 'react-icons/ai';
import { IoPawSharp } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';

export default function Project() {

    const imageOne = useRef(null)
    const imageTwo = useRef(null)
    const imageThree = useRef(null)

    const titleOne = useRef(null)
    const titleTwo = useRef(null)
    const titleThree = useRef(null)

    const sectionOne = useRef(null)
    const sectionTwo = useRef(null)
    const sectionThree = useRef(null)

    const cardRef = useRef(null)

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
      let yAxis = (window.innerWidth /2 - e.pageY)/190;
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
      let xAxis = (window.innerWidth /2 - e.pageX)/200;
      let yAxis = (window.innerWidth /2 - e.pageY)/300;
      sectionThree.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      }
  
      const handleMouseLeavePthree = () =>  {
      sectionThree.current.style.transform = `rotateY(0deg) rotateX(0deg)`
      sectionThree.current.style.transition = 'all .9s ease'
      }
  
      const handleMouseEnterPthree = () => {
      sectionThree.current.style.transition = 'none'
      imageThree.current.style.transform = 'translateZ(230px)'
      titleOne.current.style.transform = 'translateZ(230px)'
    }

    const dispatch = useDispatch()

    let projectOneRef = useRef(null)
    let projectTwoRef = useRef(null)
    let projectThreeRef = useRef(null)

    const options =  {
        root: null,
        rootMargin: '0px',
        threshold: .40
    }
   
    let isProjectOneVisible = useElementOnScreen(projectOneRef, options)
    let isProjectTwoVisible = useElementOnScreen(projectTwoRef, options)
    let isProjectThreeVisible = useElementOnScreen(projectThreeRef, options)

    dispatch({type: "PROJECT_ONE", visibility: isProjectOneVisible})
    dispatch({type: "PROJECT_TWO", visibility: isProjectTwoVisible})
    dispatch({type: "PROJECT_THREE", visibility: isProjectThreeVisible})

    //video 

    let skyGazer = ""
    let dogScanner = ""
    let watchual = ""

    const toggleProjectOne = () => {
      dispatch({type: "PROJECTONEVIDEO", visibility: isProjectOneVisible})
    }
    
    const toggleProjectTwo = () => {
      dispatch({type: "PROJECTTWOVIDEO", visibility: isProjectTwoVisible})
      dispatch({type: "VISIBLE" })
    }

    const toggleProjectThree = () => {
      dispatch({type: "PROJECTTHREEVIDEO", visibility: isProjectThreeVisible})
      console.log("I am clicked")
    }
    
    const projectOneVideoStatus = useSelector(state => state.videoOneStatus)
    projectOneVideoStatus ? skyGazer="https://www.youtube.com/embed/vdHOyWorXpM?autoplay=1": skyGazer = "https://www.youtube.com/embed/vdHOyWorXpM" 
    const closeVideoOne = () => {
      dispatch({type: "PROJECTONEVIDEO", visibility: isProjectOneVisible})
    }

    const projectTwoVideoStatus = useSelector(state => state.videoTwoStatus)
    projectTwoVideoStatus ? dogScanner="https://www.youtube.com/embed/Dj1ZdGydUjk?autoplay=1" : dogScanner = "https://www.youtube.com/embed/Dj1ZdGydUjk"
    const closeVideoTwo = () => {
      dispatch({type: "PROJECTTWOVIDEO", visibility: isProjectTwoVisible})
    }
    
    const projectThreeVideoStatus = useSelector(state => state.videoThreeStatus)
    projectThreeVideoStatus ? watchual="https://www.youtube.com/embed/towA8OYUeVs?autoplay=1" : watchual = "https://www.youtube.com/embed/towA8OYUeVs"
    const closeVideoThree = () => {
      dispatch({type: "PROJECTTHREEVIDEO", visibility: isProjectThreeVisible})
    }

   
    return (
        <div className="projectContainer" id="projectC">
          <section className="sectionContainer one" ref={projectOneRef}> 
              <div className={ projectOneVideoStatus ? "videoOneActive" : "skyGazerVideo"} >
                  <iframe width="560" height="315" title="videoOne" content="width=device-width" src={skyGazer} allow="autoplay" allowFullScreen  ></iframe>
                  <div className="closeBtn"> <AiFillCloseSquare size={79} onClick={closeVideoOne}/> </div>
            </div>
          
            <div className="subsectionContainer" 
              ref={sectionOne}
              onMouseMove={handleMouseMovePone}
              onMouseLeave={handleMouseLeavePone}  
              onMouseEnter={handleMouseEnterPone}  
            >
              <h1 className="projectTitle projectTitleOne">PROJECT ONE</h1>
                <div class="card cOne" ref={cardRef} > 
                      <div className="skyGazer" ref={imageOne} >
                          <img src={astonomyImg} alt="skyGazer"/>
                      </div>
                      <div className="appInfo skyGazerInfo">
                          <h1 className="title titleSkyGazer" ref={titleOne}>Sky G<span>a</span><span id="e">ze</span>r</h1>
                          <h3> 
                            SkyGazer exhibits solar system through animation and allows user to interact with planets. User can fetch information about different planets using search tool or simply clicking the planets. 
                            Two third party NASA APIs have been used to feed data.
                          </h3>
                          <div className="techContainer">
                            <div className="techInfo skyGazerTechInfo">
                              <h4 className="backend"><a href="https://github.com/sanjeevyg/SkyGazer-Backend-Nodejs" target="_blank" rel="noopener noreferrer"><span>Backend</span></a> - Node.js</h4>
                              <h4 className="frontend"><a href="https://github.com/sanjeevyg/SkyGazerV2" target="_blank" rel="noopener noreferrer"><span>Frontend</span></a> - Vanilla Javascript, Vanilla CSS, HTML</h4>
                            </div>
                            <div id="websiteBtnOne">
                                <a href="https://skygazeryg.web.app/" target="_blank" rel="noopener noreferrer"><button>WEBSITE</button></a>
                                <button onClick={toggleProjectOne}>VIDEO</button>
                            </div>
                          </div>
                      </div>
              </div>
           </div>
          </section>
          

          <section className="sectionContainer two" ref={projectTwoRef}> 
            <div className={ projectTwoVideoStatus ? "videoTwoActive" : "dogScannerVideo"} >
                  <iframe width="560" height="315" title="videoTwo" src={dogScanner} allow="autoplay" allowFullScreen  ></iframe>
                  <div className="closeBtn"> <AiFillCloseSquare size={79} onClick={closeVideoTwo}/> </div>
            </div>
            <div className="subsectionContainer" 
              ref={sectionTwo}
              onMouseMove={handleMouseMovePtwo}
              onMouseLeave={handleMouseLeavePtwo}  
              onMouseEnter={handleMouseEnterPtwo}  
            >
              <h1 className="projectTitle projectTitleTwo">PROJECT TWO</h1>
              <div class="card cTwo" > 
                    <div className="dogScanner" ref={imageTwo} >
                      <img src={dogImg} alt="dogScanner"/>
                    </div>
                    <div className="appInfo">
                      <h1 className="title titleDog" ref={titleTwo}>D<IoPawSharp id="paw" size={31} />g  Scanner</h1>
                      <h3> 
                        App uses the tensorflow to identify the different breeds of dog based on uploaded photo or captured photo.
                      </h3>
                      <div className="techContainer">
                        <div className="techInfo dogScannerTinfo">
                          <h4 className="backend backendDogScanner"><a href="https://github.com/sanjeevyg/Watchual-Backend-Rails" target="_blank" rel="noopener noreferrer"><span>Backend</span> </a>- Node.js, TensorFlow</h4>
                          <h4 className="frontend frontendDogScanner"><a href="https://github.com/sanjeevyg/Dog-Scanner" target="_blank" rel="noopener noreferrer"><span>Frontend</span></a> - React </h4>
                        </div>
                        <div id="websiteBtnTwo">
                            <a href="https://dogscanneryg.web.app/" target="_blank" rel="noopener noreferrer"><button>WEBSITE</button></a>
                            <button onClick={toggleProjectTwo}>VIDEO</button>
                        </div>
                      </div>
                    </div>
                <div id="circle"></div>
              </div>
           </div>
          </section>

          <section className="sectionContainer three" ref={projectThreeRef}> 
            <div className={ projectThreeVideoStatus ? "videoThreeActive" : "watchualVideo"} >
                  <iframe width="560" height="315" title="videoThree" src={watchual} allow="autoplay" allowFullScreen  ></iframe>
                  <div className="closeBtn"> <AiFillCloseSquare size={79} onClick={closeVideoThree}/> </div>
            </div>
            <div className="subsectionContainer" 
              ref={sectionThree}
              onMouseMove={handleMouseMovePthree}
              onMouseLeave={handleMouseLeavePthree}  
              onMouseEnter={handleMouseEnterPthree}  
            >
              <h1 className="projectTitle projectTitleThree">PROJECT THREE</h1>
              <div class="card cThree" > 
                <div className="watchual" ref={imageThree} >
                  <img src={phoneImg} alt="watchual"/>
                </div>
                <div className="appInfo"> 
                    <div class="titleWatchualS">
                        <h1 className="title titleWatchual" ref={titleThree}>Watchual</h1>
                        <div id="watchDiv"><MdOutlineWatchLater id="watch" size={60}/></div>
                    </div>
                    <h3 id="projectThreeInfo"> 
                        Watchual is a mobile shopping app for watches. User can signup, sigin and scan through varieties of watches. Watches can be selected and put in cart for payment. App also employs dark and light theme.
                    </h3>
                    <div className="techContainer">
                      <div className="techInfo watchualTinfo">
                        <h4 className="backend"><a href="https://github.com/sanjeevyg/Watchual-Backend-Rails" target="_blank" rel="noopener noreferrer"><span>Backend</span></a>- Ruby on Rails</h4>
                        <h4 className="frontend"><a href="https://github.com/sanjeevyg/WathualV2" target="_blank" rel="noopener noreferrer"><span>Frontend</span></a> - React Native</h4>
                      </div>
                      <div id="websiteBtnThree" >
                          <a href="https://github.com/sanjeevyg/WathualV2" target="_blank" rel="noopener noreferrer"><button>GITHUB</button></a>
                          <button onClick={toggleProjectThree} >VIDEO</button>
                      </div>
                    </div>
                </div>
                <div id="smallCircleOne"></div>
                <div id="smallCircleTwo"></div>
              </div>
           </div>
          </section>
        </div>
    )
}


