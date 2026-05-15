import React from 'react'
import myImage from '../assets/sign.png'
import coder from '../assets/coder.gif'
const Home = () => {
  return (
    <div id='home'className='bg-amber-50 flex  items-center justify-center px-5  py-10 gap-10'>
      <div id='home-part' className='flex items-center gap-20 pt-10'>
        <div id='orange' data-aos="flip-right" className=' bg-amber-500 rounded-2xl flex justify-center items-center p-6'>
          <img className='rounded-2xl' src={coder} alt="" />
          </div>
            <div id='nav-r' className='flex flex-col gap-3 pt-15 w-180 '>
              <p  data-aos="fade-right" className='text-lg font-sans font-medium'>Hello!, I Am <span>Aamin Mansuri</span></p>
              <h1 id='r-h1' data-aos="fade-up-left" className='text-7xl font-extrabold '>MERN STACK</h1>    
              <h1 id='r-h1' className='text-7xl font-extrabold  w-0' id='web' data-aos="fade-up-left"> — WEB DEVELOPER </h1>           
              <p id='r-para' data-aos="fade-right" className='mt-4 font-sans text-gray-500 text-lg'>Passionate MERN Stack Developer creating responsive and modern web applications.<br /> Building scalable and user-friendly web experiences with modern technologies.</p>
              <button id='r-bt' data-aos="fade" className='rounded-3xl text-white bg-blue-500 text-2xs w-40 mt-5 py-3 hover:bg-black'><a  href="#about">About Me</a> ➫</button>
              <img className='w-64  mt-4 relative right-20 -rotate-6' src={myImage} alt="img" />
           </div>
         </div>
      </div>
  )
}

export default Home
