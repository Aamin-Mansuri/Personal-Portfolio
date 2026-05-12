import React from 'react'
import myImage from '../assets/sign.png'
import coder from '../assets/coder.gif'
const Home = () => {
  return (
    <div id='home'className='bg-amber-50 flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 py-10 gap-10'>
      <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-24'>
        <div id='orange' className='mt-10 lg:mt-20 w-[90%] sm:w-112.5 h-87.5 sm:h-125 bg-amber-500 rounded-2xl  flex justify-center items-center p-6'>
          <img className='rounded-2xl' src={coder} alt="" />
          </div>
            <div className='flex flex-col gap-3 mt-5 lg:mt-28 text-center lg:text-left w-180'>
              <p id='helo' className='text-lg font-sans font-medium'>Hello!, I Am <span>Aamin Mansuri</span></p>
              <h1 className='text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight'>MERN STACK</h1>    
              <h1 className='text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight w-0' id='web'> — WEB DEVELOPER </h1>           
              <p id='para' className='mt-4 font-sans text-gray-500 text-lg'>Passionate MERN Stack Developer creating responsive and modern web applications.<br /> Building scalable and user-friendly web experiences with modern technologies.</p>
              <button className='rounded-3xl text-white bg-blue-500 text-2xs w-40 mt-5 py-3 hover:bg-black'><a href="#about">About Me</a> ➫</button>
              <img className='w-28 sm:w-60 mt-4 mx-auto lg:mx-0 lg:relative lg:right-20 -rotate-12' src={myImage} alt="img" />
           </div>
         </div>
      </div>
  )
}

export default Home
