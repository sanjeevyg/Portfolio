import React from 'react';
import './index.css';
import SvgHomeBackground from '../../icons/Components/HomeBackground';
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaVolleyballBall} from 'react-icons/fa';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useElementOnScreen from '../../CustomHook/useElementOnScreen.js'

export default function Home(props) {

    let targetRef = useRef(null)
    let linkedinRef = useRef(null)
    let githubRef = useRef(null)
    let twitterRef = useRef(null)
    let instagramRef = useRef(null)
    let geometry = useRef(null)

    const dispatch = useDispatch()

    const options =  {
        root: null,
        rootMargin: '0px',
        threshold: .5
    }
   
    let isVisible = useElementOnScreen(targetRef, options)

    dispatch({type: "HOME", visibility: isVisible})
    
    let homeState = useSelector(state => state.homeVisibility)
    let projectOneState = useSelector(state => state.projectOneVisibility)
    let projectTwoState = useSelector(state => state.projectTwoVisibility)
    let projectThreeState = useSelector(state => state.projectThreeVisibility)

    console.log("projectTwo", projectTwoState)

    if(homeState) {
        linkedinRef.current.style.color = "#2f6db9"
        githubRef.current.style.color = "#2f6db9"
        twitterRef.current.style.color = "#2f6db9"
        instagramRef.current.style.color = "#2f6db9"
    } else if(projectOneState) {
        linkedinRef.current.style.color = "rgb(253, 182, 27)"
        githubRef.current.style.color = "rgb(253, 182, 27)"
        twitterRef.current.style.color = "rgb(253, 182, 27)"
        instagramRef.current.style.color = "rgb(253, 182, 27)"
    } 
    else if (projectTwoState) {
        linkedinRef.current.style.color = "rgb(33, 172, 182)"
        githubRef.current.style.color = "rgb(33, 172, 182)"
        twitterRef.current.style.color = "rgb(33, 172, 182)"
        instagramRef.current.style.color = "rgb(33, 172, 182)"
    } else if (projectThreeState) {
        linkedinRef.current.style.color = "rgb(243, 100, 75)"
        githubRef.current.style.color = "rgb(243, 100, 75)"
        twitterRef.current.style.color = "rgb(243, 100, 75)"
        instagramRef.current.style.color = "rgb(243, 100, 75)"
    }

    const handleMouseMove = (e) => {
    let xAxis = (window.innerWidth /2 - e.pageX)/70;
    let yAxis = (window.innerWidth /2 - e.pageY)/70;
    
    geometry.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    const handleMouseLeave = () => {
    geometry.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    geometry.current.style.transition = 'all .9s ease'
    }

    const handleMouseEnter = () => {
    geometry.current.style.transition = 'none'
    }

    const handleChatBox = () => {
        console.log("I am clicked")
        dispatch({type: "CHATBOXACTIVE"})
    }

    return (
        <div className="home" ref={targetRef}>
            <div className="box"></div>
            <section className="header">
                <div id="headerLeft">
                    <div id="logo">
                         <SvgHomeBackground className="logo" height="50px" width="50px"/>
                    </div>
                    <div id="titlePortfolio">PORTFOLIO</div>
                    <span><a href="#projectC">PROJECTS</a></span>
                    <span><a href="https://medium.com/@syogifse"  target="_blank" rel="noopener noreferrer">BLOGS</a></span>
                    <span><a href="#aboutC">ABOUT</a></span>
                    <span><a href="https://drive.google.com/file/d/1e5OGLe2KeonU0sqZwq59rvp231T4Dn7x/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a></span>
                </div>
                <div className={ isVisible ?"menuContainer" : "menuContainer menuNinety" }>
                    <ul className="menu">
                        <a href="#"><button onClick={handleChatBox}> Let's Talk </button></a>
                    </ul>
                </div>
            </section> 
            <section className="socialBar">
                <div className="coverOne"></div>
                <div id="socialListContainer"> 
                    <li ><a href="https://www.linkedin.com/in/sanjeevyogi" className="socialBarIcon" target="_blank" rel="noopener noreferrer" ref={el => linkedinRef.current = el}><AiFillLinkedin size={37}/></a></li>
                    <li><a href="https://github.com/sanjeevyg" className="socialBarIcon" target="_blank" rel="noopener noreferrer"  ref={el => githubRef.current = el}><AiFillGithub size={37}/></a></li>
                    <li><a href="https://twitter.com/syogifsse" className="socialBarIcon" target="_blank" rel="noopener noreferrer"  ref={el => twitterRef.current = el}><AiFillTwitterCircle size={37}/></a></li>
                    <li><a href="https://www.instagram.com/ygsjv001/" className="socialBarIcon" target="_blank" rel="noopener noreferrer"  ref={el => instagramRef.current = el}><AiFillInstagram size={37}/></a></li>
                </div>
            </section>
            <section id="centralContent">
                <div id="centralText">
                    <p id="intro">Hello, my name iss</p>
                    <p id="name"> Sanjeev Yogi</p>
                    <p id="introTwo"> <span> I love art, design & technology.</span></p>
                    <p className="description">| Full Stack Software Engineer |</p>
                    <a href="#projectC"> <button className='projectButton'> See Projects <FaVolleyballBall id="button" size={19}/></button></a>
                </div>
                <div id="svgContainer">
                         <svg id="svg" width="886" height="607" viewBox="0 0 886 607" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="finalLogo">
                                <g id="geometry" ref={geometry} 
                                 onMouseMove={handleMouseMove}
                                 onMouseLeave={handleMouseLeave}  
                                 onMouseEnter={handleMouseEnter}
                                >
                                <rect id="Rectangle13" x="385" y="182" width="501" height="423" rx="24" fill="#B1C2FC" fill-opacity="0.23"/>
                                <ellipse id="Ellipse10" cx="602" cy="383.5" rx="158" ry="150.5" fill="#0F2DCA" fill-opacity="0.7"/>
                                <ellipse id="Ellipse1" cx="571" cy="396.5" rx="127" ry="121.5" fill="white"/>
                                <ellipse id="Ellipse14" cx="566" cy="379.5" rx="49" ry="45.5" fill="white" fill-opacity="0.2"/>
                                <ellipse id="Ellipse15" cx="772" cy="280" rx="104" ry="99" fill="#E8EBFF" fill-opacity="0.2"/>
                                <ellipse id="Ellipse3" cx="787" cy="548" rx="57" ry="59" fill="#8796E4" fill-opacity="0.3"/>
                                <circle id="Ellipse16" cx="709" cy="518" r="26" fill="#FDFDFF" fill-opacity="0.2"/>
                                <rect id="Rectangle 5" x="827" y="505" width="82" height="81" rx="8" transform="rotate(90 827 505)" fill="#2054BC" fill-opacity="0.3"/>
                                <rect id="Rectangle 10" x="698" y="209" width="143" height="142" rx="10" fill="#E8EBFF" fill-opacity="0.3"/>
                                <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M885.661 335.572C885.661 484.453 758.81 605.144 602.331 605.144C445.851 605.144 319 484.453 319 335.572C319 279.098 337.253 226.679 368.451 183.366C379.006 205.814 394.429 230.213 411.609 230.213C443.425 230.213 461.462 183.688 461.462 137.47C461.462 119.09 514.811 116.837 542.599 117.466C547.274 118.38 551.155 118.922 553.784 118.922C564.743 118.922 557.199 117.796 542.599 117.466C519.403 112.93 476.643 99.2324 470.074 97.1104C509.554 77.2473 554.562 66 602.331 66C758.81 66 885.661 186.692 885.661 335.572ZM800.779 362.156C800.779 457.976 719.134 535.653 618.421 535.653C517.708 535.653 436.063 457.976 436.063 362.156C436.063 266.337 517.708 188.66 618.421 188.66C719.134 188.66 800.779 266.337 800.779 362.156ZM421.987 168.194C421.987 173.21 417.921 177.276 412.905 177.276C407.889 177.276 403.823 173.21 403.823 168.194C403.823 163.178 407.889 159.111 412.905 159.111C417.921 159.111 421.987 163.178 421.987 168.194Z" fill="#D2D6FB"/>
                                </g>
                                <g id="undraw_mobile_development_8gyo 1">
                                <path id="Vector" d="M647.011 333.142C647.011 333.142 637.557 348.162 640.934 352.228C644.31 356.295 615.603 356.397 615.603 356.397C615.603 356.397 619.915 334.547 618.646 329.519L647.011 333.142Z" fill="#FFB8B8"/>
                                <path id="Vector_2" d="M562.179 469.846V487.45L544.605 483.782L546.069 471.313L562.179 469.846Z" fill="#FFB8B8"/>
                                <path id="girlRleg" d="M611.239 437.572C611.239 437.572 574.627 395.029 562.911 397.23C551.195 399.43 546.069 412.633 546.069 412.633L539.479 477.914C539.479 477.914 562.911 480.115 562.911 477.914C562.911 475.714 567.304 428.77 567.304 428.77C567.304 428.77 601.72 505.054 620.026 454.442L611.239 437.572Z" fill="#D0CDE1"/>
                                <path id="girlLleg" d="M670.551 466.178C670.551 466.178 669.819 504.606 647.852 506.807C625.884 509.007 601.72 490.384 601.72 490.384L562.179 471.408C562.179 471.408 515.315 496.252 501.402 489.65C501.402 489.65 486.758 474.247 496.277 469.846C505.796 465.445 497.009 469.846 497.009 469.846L553.392 440.506C553.392 440.506 564.376 437.572 583.414 445.641C602.452 453.709 628.081 457.377 628.081 457.377L670.551 466.178Z" fill="#D0CDE1"/>
                                <g id="girlBody">
                                <path id="Vector_5" d="M602.452 380.359L603.917 411.166C603.917 411.166 603.185 451.508 609.775 454.442C613.106 455.924 619.799 458.902 625.987 462.159C630.629 464.594 634.986 467.176 637.417 469.398C638.062 469.948 638.617 470.593 639.065 471.313C641.994 476.447 661.032 475.714 665.425 472.046C669.819 468.379 666.89 476.447 670.551 477.914C674.095 479.337 679.009 467.704 675.999 450.335C675.904 449.755 675.794 449.169 675.677 448.575C672.316 431.741 677.595 391.421 676.783 375.841C676.735 374.651 676.611 373.465 676.409 372.291C674.212 360.555 646.182 336.673 640.939 346.846C634.481 359.404 619.645 347.932 617.097 342.218C602.452 341.484 597.327 359.088 597.327 359.088L602.452 380.359Z" fill="#6C63FF"/>
                                </g>
                                <path id="Vector_6" d="M543.14 480.848C543.14 480.848 554.856 485.249 558.518 484.516C562.179 483.782 565.84 486.716 565.84 491.117C565.84 495.518 570.234 505.787 563.643 506.521C557.053 507.254 529.96 505.787 524.102 507.988C524.102 507.988 497.741 508.721 499.938 497.719C502.135 486.716 513.118 487.45 513.118 487.45C513.118 487.45 543.14 485.983 543.14 480.848Z" fill="#2F2E41"/>
                                <g id="girlLeg">
                                <path id="Vector_7" d="M499.938 472.78L450.877 480.848L463.325 499.186C463.325 499.186 497.741 487.45 506.528 487.45C515.315 487.45 499.938 472.78 499.938 472.78Z" fill="#FFB8B8"/>
                                <path id="Vector_8" d="M457.468 483.049C457.468 483.049 456.003 478.648 453.806 478.648C451.61 478.648 434.036 481.582 431.839 480.848C429.642 480.115 404.014 478.648 408.407 491.117C412.801 503.587 427.445 505.054 427.445 505.054C427.445 505.054 453.806 502.12 457.468 502.853C461.129 503.587 474.309 502.853 472.112 499.186C469.916 495.518 456.003 488.917 457.468 483.049Z" fill="#2F2E41"/>
                                </g>
                                <path id="Vector_9" d="M524.121 377.692L520.104 394.291C520.059 394.477 520.066 394.67 520.124 394.852L538.347 451.896C538.419 452.122 538.566 452.316 538.764 452.446C538.962 452.576 539.199 452.635 539.434 452.612C539.67 452.588 539.89 452.485 540.059 452.318C540.228 452.152 540.334 451.932 540.361 451.697L542.882 429.475C542.899 429.327 542.884 429.178 542.838 429.036L526.111 377.615C526.041 377.401 525.903 377.215 525.719 377.086C525.534 376.957 525.312 376.892 525.087 376.9C524.862 376.909 524.646 376.991 524.471 377.134C524.297 377.277 524.174 377.473 524.121 377.692V377.692Z" fill="#3F3D56"/>
                                <path id="Vector_10" d="M525.599 379.094L521.889 393.336L537.962 445.351L541.671 429.251L525.599 379.094Z" fill="white"/>
                                <path id="laptop" d="M606.578 456.496C605.96 458.354 542.289 455.877 541.671 455.258C541.132 454.482 540.676 453.652 540.311 452.781C539.73 451.542 539.198 450.304 539.198 450.304L541.671 430.254L604.724 428.012C604.724 428.012 606.3 445.004 606.622 452.781C606.731 454.018 606.717 455.262 606.578 456.496V456.496Z" fill="#3F3D56"/>
                                <path id="Vector_12" opacity="0.1" d="M549.707 432.966L548.471 450.304H576.288V432.966H549.707Z" fill="black"/>
                                <path id="Vector_13" opacity="0.1" d="M585.561 438.539L585.394 438.506L586.179 445.969H601.633V438.539H585.561Z" fill="black"/>
                                <path id="Vector_14" opacity="0.1" d="M606.578 456.496C605.96 458.354 542.289 455.877 541.671 455.258C541.132 454.482 540.676 453.652 540.311 452.781H606.622C606.731 454.018 606.717 455.262 606.578 456.496V456.496Z" fill="black"/>
                                <g id="girlArm">
                                <path id="Vector_15" opacity="0.1" d="M625.987 462.159C627.795 465.584 629.919 469.142 630.278 470.58C630.519 471.555 633.199 470.99 637.417 469.399C645.874 466.193 660.534 458.851 674.212 451.509C674.843 451.174 675.441 450.781 675.999 450.335C675.904 449.756 675.794 449.169 675.677 448.575C672.316 431.741 677.595 391.421 676.783 375.841L670.551 373.758L658.103 385.494V435.372C658.103 435.372 625.884 452.976 623.687 454.443C622.567 455.191 624.112 458.602 625.987 462.159Z" fill="black"/>
                                </g>
                                <g id="girlhandRight">
                                <path id="Vector_16" d="M598.791 422.169L579.02 432.438C579.02 432.438 567.304 419.968 559.982 429.504C552.66 439.039 581.217 441.973 581.217 441.973C581.217 441.973 606.114 436.105 606.846 428.037C607.578 419.968 598.791 422.169 598.791 422.169Z" fill="#FFB8B8"/>
                                </g>
                                <g id="girlFace">
                                <path id="Vector_17" d="M631.903 338.585C615.53 338.585 602.258 325.29 602.258 308.89C602.258 292.49 615.53 279.195 631.903 279.195C648.275 279.195 661.547 292.49 661.547 308.89C661.547 325.29 648.275 338.585 631.903 338.585Z" fill="#2F2E41"/>
                                <path id="Vector_18" d="M633.939 340.751C621.807 340.751 611.971 330.899 611.971 318.746C611.971 306.593 621.807 296.741 633.939 296.741C646.071 296.741 655.906 306.593 655.906 318.746C655.906 330.899 646.071 340.751 633.939 340.751Z" fill="#FFB8B8"/>
                                <path id="Vector_19" d="M626.991 284.703C622.428 284.703 618.73 280.998 618.73 276.427C618.73 271.857 622.428 268.152 626.991 268.152C631.554 268.152 635.253 271.857 635.253 276.427C635.253 280.998 631.554 284.703 626.991 284.703Z" fill="#2F2E41"/>
                                <path id="Vector_20" d="M629.476 285.435C629.476 285.435 637.916 299.499 657.544 304.764C677.172 310.029 657.704 339.574 657.704 339.574C657.704 339.574 664.783 328.83 654.573 317.453C644.362 306.075 627.931 298.296 629.476 285.435Z" fill="#2F2E41"/>
                                </g>
                                <g id="girlhandLeft">
                                <path id="Vector_21" d="M631.742 450.308L620.026 453.242C620.026 453.242 606.846 437.105 592.933 442.973C579.02 448.841 610.507 460.577 610.507 460.577C610.507 460.577 627.349 469.379 633.939 462.044C640.529 454.709 631.742 450.308 631.742 450.308Z" fill="#FFB8B8"/>
                                </g>
                                <path id="girlrightArm" d="M606.114 356.487C605.381 357.22 597.327 363.088 597.327 363.088C597.327 363.088 595.13 390.961 598.059 396.829C600.988 402.697 603.185 402.697 600.988 405.631C598.791 408.565 595.862 406.364 598.791 411.499C601.72 416.633 604.649 415.9 602.452 418.1C600.256 420.301 600.988 421.034 600.988 421.034L592.201 428.369C592.201 428.369 597.592 436.97 604.416 436.337C611.239 435.704 617.097 402.697 617.097 402.697L606.114 356.487Z" fill="#6C63FF"/>
                                </g>
                                <g id="undraw_mobile_application_mr-4-r 1">
                                <g id="boyBody">
                                <path id="boyBody_2" d="M262.52 225.934C259.596 226.554 256.849 227.823 254.482 229.648C252.116 231.473 250.191 233.807 248.849 236.476L222.501 244.705L215.914 254.031L223.599 321.51C223.599 321.51 209.327 335.225 209.327 342.905C209.327 350.586 191.762 376.919 200.544 373.627C209.327 370.336 225.246 358.815 225.246 358.815C225.246 358.815 265.316 360.461 277.941 371.433C290.566 382.405 295.507 379.113 295.507 379.113C295.507 379.113 308.681 322.058 309.229 313.281C309.778 304.503 325.148 251.837 325.148 251.837L297.702 236.476L290.712 228.549L271.354 259.518L253.789 238.122C253.789 238.122 262.467 231.301 262.52 225.934Z" fill="#3F3D56"/>
                                </g>
                                <g id="boyHand">
                                <path id="Vector_23" d="M207.68 296.274L204.387 313.829C204.387 313.829 189.566 368.69 191.762 387.342C191.762 387.342 190.115 429.036 199.447 424.099C208.778 419.161 203.838 388.988 203.838 388.988L217.012 334.676L224.148 302.857L207.68 296.274Z" fill="#FFB8B8"/>
                                </g>
                                <g id="boyRest">
                                <path id="Vector_24" d="M322.952 303.955V331.385C322.952 331.385 320.757 362.107 308.681 377.467C308.681 377.467 288.92 405.446 286.175 399.412L289.556 379.544L300.996 368.69L307.034 334.676L308.681 303.955H322.952Z" fill="#FFB8B8"/>
                                <path id="Vector_25" d="M201.643 551.924V572.222L218.11 578.257V554.666L201.643 551.924Z" fill="#FFB8B8"/>
                                <path id="Vector_26" d="M235.126 549.729L224.148 574.416L239.517 581L242.811 556.861L235.126 549.729Z" fill="#FFB8B8"/>
                                <path id="Vector_27" d="M207.681 360.461C207.681 360.461 185.724 558.507 193.958 559.056C202.191 559.604 218.11 570.028 218.11 562.896C218.11 555.764 230.735 463.05 230.735 463.05L242.811 415.321V481.154L230.186 555.764C230.186 555.764 242.262 571.673 251.045 562.347L269.708 489.383C269.708 489.383 294.409 378.565 293.311 369.787C293.311 369.787 236.773 321.51 207.681 360.461Z" fill="#2F2E41"/>
                                <path id="Vector_28" d="M212.072 573.319C212.072 573.319 207.68 563.993 197.8 570.028L189.566 579.903C189.566 579.903 168.338 597.473 183.401 601.236C198.927 605.116 208.229 600.989 208.229 600.989C208.229 600.989 210.974 599.343 213.169 599.343C215.365 599.343 220.305 595.503 220.305 594.405C220.305 593.308 218.659 573.868 218.659 573.868C218.037 573.565 217.338 573.455 216.653 573.553C215.968 573.651 215.329 573.952 214.816 574.416C213.17 576.062 212.072 573.319 212.072 573.319Z" fill="#2F2E41"/>
                                <path id="Vector_29" d="M244.458 570.028C244.458 570.028 234.028 561.799 229.088 571.125C229.088 571.125 225.978 572.222 225.612 571.125C225.246 570.028 222.501 569.479 222.501 575.514C222.501 581.548 219.52 596.6 222.265 597.148C225.01 597.697 227.754 599.343 227.205 601.537C226.656 603.732 230.186 604.041 242.811 603.493C255.436 602.944 255.985 598.006 255.985 598.006C255.985 598.006 255.985 590.875 252.691 587.034C249.398 583.194 244.458 570.028 244.458 570.028Z" fill="#2F2E41"/>
                                <path id="Vector_30" d="M264.767 210.692C264.767 210.692 267.512 230.99 249.947 238.122C232.382 245.254 288.92 268.844 294.409 255.129C299.898 241.414 293.311 237.025 293.311 237.025C293.311 237.025 287.822 231.539 292.762 216.726L264.767 210.692Z" fill="#FFB8B8"/>
                                <path id="Vector_31" d="M221.403 250.74L215.914 254.031C215.914 254.031 195.055 297.371 199.996 300.663C204.936 303.954 226.343 311.086 226.343 311.086L221.403 250.74Z" fill="#3F3D56"/>
                                <path id="Vector_32" d="M311.974 251.837L324.874 251.563L327.892 256.774L324.05 309.99L304.289 314.378L311.974 251.837Z" fill="#3F3D56"/>
                                </g>
                                <g id="boyFace">
                                <path id="Vector_33" d="M282.333 224.955C268.994 224.955 258.181 214.148 258.181 200.817C258.181 187.485 268.994 176.678 282.333 176.678C295.672 176.678 306.485 187.485 306.485 200.817C306.485 214.148 295.672 224.955 282.333 224.955Z" fill="#FFB8B8"/>
                                <path id="Vector_34" d="M262.665 180.402L258.312 178.82C258.312 178.82 267.414 169.722 280.079 170.514L276.517 166.954C276.517 166.954 285.223 163.79 293.138 172.096C297.299 176.462 302.113 181.594 305.114 187.376H309.777L307.831 191.265L314.641 195.155L307.651 194.456C308.313 197.814 308.085 201.287 306.99 204.529L305.407 208.88C305.407 208.88 299.075 196.223 299.075 194.641V198.596C299.075 198.596 294.721 195.036 294.721 192.663L292.347 195.432L291.16 191.081L276.517 195.432L278.891 191.872L269.789 193.059L273.351 188.708C273.351 188.708 263.061 193.85 262.665 198.201C262.269 202.552 259.553 208.223 259.553 208.223L256.259 204.383C256.259 204.383 251.188 186.335 262.665 180.402Z" fill="#2F2E41"/>
                                </g>
                                </g>
                                </g>
                            </svg>
                </div>
                <section id="bottom"></section>
            </section>
        </div>
    )
}
