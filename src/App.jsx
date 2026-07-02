import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'



import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
     <div className=''>
    
    <Navbar/>
    <Home/>
    <About />
    <Skill/> 
    <Project />
    <Contact/>

    </div>
    </div>
  );
}
export default App