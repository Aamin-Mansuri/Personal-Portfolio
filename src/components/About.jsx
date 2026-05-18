import React from 'react'
import Hexa from '../assets/hexagon.png'

const About = () => {
  AOS.init();
  return (
    <div id='about' className=' relative  overflow-x-hidden w-screen'>
      <div id='ab-black' className='w-screen mt-28 bg-black h-32 rotate-3 relative right-1'>
      </div>
      <div id='ab-red' className='w-screen mt-28 bg-[#FF5858] h-32 -rotate-4 absolute -right-1.5 top-1.5 flex justify-center items-center '>
        <ul id='red-content' data-aos="fade-right" className='flex justify-around gap-36 '>
            <li id='li-red' className='flex justify-center items-center gap-2.5 text-white text-4xl font-medium'><img className='w-8 h-8' src={Hexa} alt="" /><p>HTML</p></li>
            <li id='li-red' className='flex justify-center items-center gap-2.5 text-white text-4xl font-medium'><img className='w-8 h-8' src={Hexa} alt="" /><p>CSS</p></li>
            <li id='li-red' className='flex justify-center items-center gap-2.5 text-white text-4xl font-medium'><img className='w-8 h-8' src={Hexa} alt="" />JavaScirpt</li>
            <li id='li-red4' className='flex justify-center items-center gap-2.5 text-white text-4xl font-medium'><img className='w-8 h-8' src={Hexa} alt="" />ReactJS</li>
            <li id='li-red5' className='flex justify-center items-center gap-2.5 text-white text-4xl font-medium'><img className='w-8 h-8' src={Hexa} alt="" />BootStrap</li>
            <li id='li-red6' className='flex justify-center items-center gap-2.5 text-white text-4xl font-medium'><img className='w-8 h-8' src={Hexa} alt="" />NodeJS</li>
        </ul> 
      </div>
      <div id='ab2' className='mt-56 pl-36 '>
        <h1 id='ab' data-aos="fade-right" className='text-4xl sm:text-5xl lg:text-7xl font-black'>ABOUT ME</h1>
        <p id='ab' data-aos="fade-right" className='pl-60 max-w-8xl  mt-14 w-380 text-gray-600 text-lg font-sans font-medium'>I am a passionate MERN Stack Developer currently pursuing BCA and continuously improving my full stack development skills. I enjoy building responsive and user-friendly web applications using modern technologies like React.js, Node.js, Express.js, and MongoDB. I am a quick learner who loves solving real-world problems through coding and creative projects. My goal is to grow as a professional developer and contribute to innovative digital solutions.</p>
        <p data-aos="fade-right" className='pl-60 max-w-8xl  mt-14 w-380  text-gray-600 text-lg font-sans font-medium'>I continuously improve my skills by building projects and learning new technologies. My goal is to become a professional Full Stack Developer and contribute to innovative and impactful projects.Focus on writing clean, scalable, and reusable code.</p> 
      </div>    
    </div>
  )
}

export default About
