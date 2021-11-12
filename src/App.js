import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Project from './Pages/Project.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import TransitionPage from './Pages/TransitionPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={(routerProps) => <Home {...routerProps} name="Yogi" />}/>
      <Route exact path='/transition' render={(routerProps) => <TransitionPage {...routerProps} name="Yogi" />}/>
      <Route exact path="/projects" render={(routerProps) => <Project {...routerProps}/>}/>
      <Route exact path="/about" render={(routerProps) => <About {...routerProps}/>}/>
      <Route exact path="/contact" render={(routerProps) => <Contact {...routerProps}/>}/>  
    </Switch>
  );
  
}

export default App;
