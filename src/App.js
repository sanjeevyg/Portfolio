import './App.css';
import Home from './Pages/Home/Home.js';
import Project from './Pages/Project/Project.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';



function App() {

  const appRef = useRef(null)

  const popUPStatus = useSelector(state => state.videoPopUp)
  console.log(popUPStatus)

  useEffect(() => {
    popUPStatus ? appRef.current.style.overflow = "hidden" : appRef.current.style.overflow = "scroll"
    }, [popUPStatus])

  

  return (
    <div id="container" ref={ appRef }>
        <Home />
        <Project/>
        <About />
        <Contact />
    </div>
  );
  
}

export default App;
