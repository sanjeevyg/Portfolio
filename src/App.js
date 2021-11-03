import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js';
import Project from './Pages/Home.js';
import About from './Pages/Home.js';
import Contact from './Pages/Home.js';

function App() {
  return (
    
    <Switch>
      {/* <div> Hello </div> */}
      <Route exact path='/' render={(routerProps) => <Home {...routerProps} name="Yogi" />}/>
      <Route exact path="/" render={(routerProps) => <Home {...routerProps}/>}/>
      <Route exact path="/projects" render={(routerProps) => <Project {...routerProps}/>}/>
      <Route exact path="/about" render={(routerProps) => <About {...routerProps}/>}/>
      <Route exact path="/contact" render={(routerProps) => <Contact {...routerProps}/>}/>
    </Switch>
  );
}

export default App;
