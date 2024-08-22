import './App.css';
import About from './components/About';
import {Contact} from './components/Contact';

import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Projects from './components/Project';

import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
       
       <Contact/>
        
       
    </div>
  );
}

export default App;
