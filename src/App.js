import './App.css';
import Home from './Pages/Home/Home.js';
import Project from './Pages/Project/Project.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';

function App() {
  return (
    <div id="container">
        <Home />
        <Project/>
        <About />
        <Contact />
    </div>
  );
  
}

export default App;
