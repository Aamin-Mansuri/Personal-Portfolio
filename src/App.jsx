import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skills'
import Project from './components/Project'
import Me from './components/Contact'

function App() {
  return (
    <>
    
    <Navbar/>
    <Home/>
    <About />
    <Skill/>
  
    <Project />
    <Me/>

    </>
  )
}

export default App
