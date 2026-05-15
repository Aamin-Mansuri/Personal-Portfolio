import React from 'react'
import File from '../assets/file.png'
import resume from '../assets/resume.pdf'

const Navbar = () => {
  return (
    <div id='navbar' data-aos="fade-down" className='flex justify-between items-center px-5 py-5 bg-amber-50 gap-5 '>
      <h1 id='' className='font-mono text-2xl font-bold '>PORTFOLIO.</h1>
      <ul id='mid-container'  className='relative flex flex-wrap justify-center gap-5  font-bold text-2xl text-gray-500 rounded-2xl border-2 p-2 w-7xl border-black backdrop-blur-2xl- backdrop-brightness-200 sm:justify-center'>
       <li><a className=' hover:text-blue-500 hover:text-shadow-[0px_0px_10px_#3b82f6] relative after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-blue-500 after:transition-all  hover:after:w-full ' href="#home">Home</a></li>
       <li><a className=' hover:text-blue-500 hover:text-shadow-[0px_0px_10px_#3b82f6] relative after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-blue-500 after:transition-all  hover:after:w-full ' href="#skills">Skills</a></li>
       <li><a className=' hover:text-blue-500 hover:text-shadow-[0px_0px_10px_#3b82f6] relative after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-blue-500 after:transition-all  hover:after:w-full ' href="#pro">Projects</a></li>  
       <li><a className=' hover:text-blue-500 hover:text-shadow-[0px_0px_10px_#3b82f6] relative after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-blue-500 after:transition-all  hover:after:w-full ' href="#con">Contact</a></li>      
      </ul>
      <button id='nav-bt' className='p-4 bg-black text-white rounded-3xl text-2xs w-44 m font-medium uppercase hover:bg-blue-500 '><a className='flex gap-1.5' href={resume} download={resume} >Download CV <img className='w-5' src={File} alt="" /></a></button>
    </div>
    
  )
}
export default Navbar
