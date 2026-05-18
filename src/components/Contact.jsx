import React from 'react'
import Hexa from '../assets/hexagon.png'

const Contact = () => {
  return (
    <div id="about" className=' relative overflow-x-hidden mt-14 w-screen'>       
      <div  id='ab-black' className='w-screen mt-28 bg-black h-32 rotate-3 relative right-1'>
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

           <div id='footer' className='pt-35 flex flex-col items-center gap-20 '>
              <div className='font-black text-8xl text-center font-sans'>
                <h1 id='f-h1' data-aos="fade-up">INTERESTED IN WORKING <br />TOGETHER?</h1>
               </div>
              <div className='text-center'>
                <p data-aos="fade-up" className='font-medium font-sans text-2xl'>Drop me an email:</p>
                <h1 id='f-mail' data-aos="fade-up"><a id='f-mail' className='font-bold font-sans text-3xl' href="mailto:aaminmansuri988@gmail.com">aaminmansuri988@gmail.com</a></h1>
              </div>

              <div id='l-foot' className='flex justify-between gap-0 w-screen p-2 pb-8 pt-6 pl-8 pr-8 border-t-2 '>
                <div id='copy' className='font-medium font-sans text-2xs'>Copyright © 2023 Unkown</div>
                <div id='f-bt' className='flex gap-10 items-center pr-18'>
                    <button id='i-bt' className=' rounded-3xl  bg-white w-40 py-3 border-2 hover:bg-blue-500 font-medium  text-black text-2xs'><a href="https://github.com/Aamin-Mansuri">GitHub ⬈</a></button> 
                    <button id='i-bt' className='rounded-3xl  hover:bg-blue-500 text-black bg-white text-2xs w-40  py-3 border-2 font-medium'><a href="https://linkedin.com/in/aamin-mansuri-83396036a">LinkedIn ➜</a></button>
                    <button id='i-bt' className='rounded-3xl  hover:bg-blue-500 text-black bg-white text-2xs w-40  py-3 border-2 font-medium'><a href="https://www.instagram.com/aamin.mansuriii/">Instagram ➜</a></button>
                </div>
                <div className='font-medium font-sans text-2xs'>
                    <p> <a href="#navbar">Back To Top ↾</a></p>
                </div>
               </div>    
          </div>                                                                                             
    </div>
      
   
  )
}

export default Contact
