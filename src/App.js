import './App.css';
import Home from './Pages/Home/Home.js';
import Project from './Pages/Project/Project.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
import TransitionPage from './Pages/Transition/TransitionPage';


function App() {
  return (
    // <Switch>
    //   <Route exact path='/' render={(routerProps) => <Home {...routerProps} name="Yogi" />}/>
    //   <Route exact path='/transition' render={(routerProps) => <TransitionPage {...routerProps} name="Yogi" />}/>
    //   <Route exact path="/projects" render={(routerProps) => <Project {...routerProps}/>}/>
    //   <Route exact path="/about" render={(routerProps) => <About {...routerProps}/>}/>
    //   <Route exact path="/contact" render={(routerProps) => <Contact {...routerProps}/>}/>  
    // </Switch>
    
    
    <div id="container">
      <section className="parent"> 
        <Home />
      </section >
      <section className="parent">
        <Project/>
      </section>
      {/* <section className="parent">
        <TransitionPage/>
      </section> */}
      <section className="parent">
        <About />
      </section>
      {/* <section className="parent">
        <Contact/>
      </section> */}
    </div>
  );
  
}

export default App;
