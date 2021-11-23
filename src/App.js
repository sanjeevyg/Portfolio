import './App.css';
 import react from 'react';
// import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Project from './Pages/Project/Project.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
import TransitionPage from './Pages/Transition/TransitionPage';
import { useInView } from 'react-intersection-observer'; 
import { useRef, useMemo, useEffect, useState } from 'react';

function App() {

  const home = useRef(null)
  const contact = useRef(null)
  const transition = useRef(null)
  const about = useRef(null)
  const project = useRef(null)

  const [isVisible, setVisibleState] = useState(false)

  const callback = entries => {
    const [entry] = entries
    setVisibleState(entry.isIntersecting)
  }

  const options = useMemo(() => {return {
    root: null,
    rootMargin: '0px',
    threshold: 1
  } }, []) 

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const currentTarget = home.current || contact.current || transition.current || about.current || project.current
    if(currentTarget) observer.observe(currentTarget)
    console.log(currentTarget)

    return (() => {if(currentTarget) observer.unobserve(currentTarget)})

  }, [home, contact, transition, about, project, options])


  return (
    // <Switch>
    //   <Route exact path='/' render={(routerProps) => <Home {...routerProps} name="Yogi" />}/>
    //   <Route exact path='/transition' render={(routerProps) => <TransitionPage {...routerProps} name="Yogi" />}/>
    //   <Route exact path="/projects" render={(routerProps) => <Project {...routerProps}/>}/>
    //   <Route exact path="/about" render={(routerProps) => <About {...routerProps}/>}/>
    //   <Route exact path="/contact" render={(routerProps) => <Contact {...routerProps}/>}/>  
    // </Switch>
    
    
    <div className="container">
      <section > 
        <Home/>
      </section>
      <section >
        <Project/>
      </section>
      <section >
        <TransitionPage/>
      </section>
      <section >
        <About />
      </section>
      <section>
        <Contact/>
      </section>
    </div>
  );
  
}

export default App;
