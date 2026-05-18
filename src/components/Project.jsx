import React from 'react'
import Voice from '../assets/voice.png'
import Flight from '../assets/flight.png'
import Loan from '../assets/loan.png'
import Movie from '../assets/movie.png'
import clock from '../assets/clock.png'
import weather from '../assets/weather.png'
import digital from '../assets/digital.png'
import git from '../assets/github.png'

const Project = () => {
  return (
    <div id='pro' className='pt-28  '>
        <div className='font-black text-7xl '>
            <h1 id='p-h' data-aos="fade-right" className='pl-32'>TAKE A LOOK <br /> AT MY PROJECTS</h1>
        </div>
        <div id='p-card-container' className='mt-16 flex flex-wrap w-100% gap-14 justify-center'>
            {/* project card 1 */}
            <div id='p-cards' data-aos="flip-left" className='flex border-2 rounded-2xl p-5 gap-8 w-170 border-gray-300'>
                <div id='c-content' className='w-100 flex flex-col gap-4 font-sans'>
                    <h1 id='card-title' className='font-bold uppercase'>Voice Assistant Web App</h1>
                    <p id='p-para' className=' font-sans text-gray-500 text-sm' >Built a voice assistant using the HTML CSS JavaScript with speech recognition and text-to-speech features. Users can ask questions, search information, and interact through voice commands in real time.</p>
                    <button id='p-bt' className='flex p-2 pl-5 w-36 bg-black hover:bg-blue-500 hover:scale-[1.1] text-white rounded-3xl text-2xl  font-medium'><a href="https://github.com/Aamin-Mansuri/voice-as-js-project-6.git">GitHub ⬈</a></button>
                </div>
                <div>
                    <img id='p-img' className='w-96 rounded-2xl hover:scale-[1.1] transition-all 1s ease-linear' src={Voice} alt="" />
                </div>

            </div>

            {/* project card 2 */}
          
            <div id='p-cards' data-aos="flip-right" className='flex border-2 rounded-2xl p-5 gap-8 w-170 border-gray-300'>
                <div id='c-content' className='w-100 flex flex-col gap-4 font-sans'>
                    <h1 id='card-title' className='font-bold uppercase'>Weather App</h1>
                    <p id='p-para' className=' font-sans text-gray-500 text-sm'>Designed a real-time weather dashboard that displays live temperature, humidity, wind speed, and weekly forecasts using weather APIs. Includes responsive UI and location-based search functionality.</p>
                    <button className=' flex p-2 pl-5 w-36 bg-black  hover:bg-blue-500 hover:scale-[1.1] text-white rounded-3xl text-2xl  font-medium'><a href="https://github.com/Aamin-Mansuri/wather-app-js-project-5.git">GitHub ⬈</a></button>
                </div>
                <div>
                    <img id='p-img' className='w-96 rounded-2xl hover:scale-[1.1] transition-all 1s ease-linear' src={weather} alt="" />
                </div>

            </div>

            {/* project card 3 */}

            <div id='p-cards' data-aos="fade-right" className='flex border-2 rounded-2xl p-5 gap-8 w-170 h-60 border-gray-300'>
                <div id='c-content' className='w-100 flex flex-col gap-4 font-sans'>
                    <h1 id='card-title' className='font-bold uppercase'>Loan App UI</h1>
                    <p id='p-para' className=' font-sans text-gray-500 text-sm'>Designed and developed a responsive Loan Application UI using HTML and CSS with a clean and modern interface.</p>
                    <button className='mt-4 flex p-2 pl-5 w-36 bg-black  hover:bg-blue-500 hover:scale-[1.1] text-white rounded-3xl text-2xl  font-medium'><a href="https://github.com/Aamin-Mansuri/web-kreditbee-project-2.git">GitHub ⬈</a></button>
                </div>
                <div>
                    <img id='p-img' className='w-96 h-50 rounded-2xl hover:scale-[1.1] transition-all 1s ease-linear' src={Loan} alt="" />
                </div>

            </div>

            {/* project card 4 */}

            <div id='p-cards' data-aos="fade-left" className='flex border-2 rounded-2xl p-5 gap-8 w-170 h-60 border-gray-300'>
                <div id='c-content' className='w-100 flex flex-col gap-4 font-sans'>
                    <h1 id='card-title' className='font-bold uppercase'>Movie Search App</h1>
                    <p id='p-para' className=' font-sans text-gray-500 text-sm'>Created a responsive movie searching application using React and external movie APIs. Users can search movies, view ratings, trailers, and save favorites with secure authentication.</p>
                    <button className='flex p-2 pl-5 w-36 bg-black  hover:bg-blue-500 hover:scale-[1.1] text-white rounded-3xl text-2xl  font-medium'><a href="https://github.com/Aamin-Mansuri/Movie-Search-Api-Project.git">GitHub ⬈</a></button>
                </div>
                <div>
                    <img id='p-img' className='w-96 h-50 rounded-2xl hover:scale-[1.1] transition-all 1s ease-linear' src={Movie} alt="" />
                </div>

            </div>

            {/* project card 5 */}

            <div id='p-cards' data-aos="flip-right" className='flex border-2 rounded-2xl p-5 gap-8 w-170 h-60 border-gray-300'>
                <div id='c-content' className='w-100 flex flex-col gap-4 font-sans'>
                    <h1 id='card-title' className='font-bold uppercase'>Digital Clock</h1>
                    <p id='p-para' className=' font-sans text-gray-500 text-sm'>Created a responsive Digital Clock using HTML, CSS, and JavaScript with a modern UI design. The clock displays real-time hours, minutes, and seconds with smooth updates, stylish typography, and responsive layout for different screen sizes.</p>
                    <button className='flex p-2 pl-5 w-36 bg-black  hover:bg-blue-500 hover:scale-[1.1] text-white rounded-3xl text-2xl  font-medium'><a href="https://github.com/Aamin-Mansuri/clock-js-project.git">GitHub ⬈</a></button>
                </div>
                <div>
                    <img id='p-img' className='w-96 h-50 rounded-2xl hover:scale-[1.1] transition-all 1s ease-linear' src={digital} alt="" />
                </div>

            </div>

            {/* project card 6 */}

            <div id='p-cards' data-aos="flip-left" className='flex border-2 rounded-2xl p-5 gap-5 w-170 h-60 border-gray-300'>
                <div id='c-content' className='w-100 flex flex-col gap-2 font-sans'>
                    <h1 id='card-title' className='font-bold uppercase'>Analog Clock</h1>
                    <p id='p-para' className=' font-sans text-gray-500 text-sm'>Designed and developed an Analog Clock using HTML, CSS, and JavaScript featuring rotating clock hands based on real-time calculations. Implemented smooth animations, responsive circular layout, and clean UI styling to create an interactive and visually appealing clock interface.</p>
                    <button className='flex p-2 pl-5 w-36 bg-black  hover:bg-blue-500 hover:scale-[1.1] text-white rounded-3xl text-2xl  font-medium'><a href="https://github.com/Aamin-Mansuri/clock-js-project.git">GitHub ⬈</a></button>
                </div>
                <div>
                    <img id='p-img' className='w-85 h-50 rounded-2xl hover:scale-[1.1] transition-all 1s ease-linear' src={clock} alt="" />
                </div>

            </div>

        </div>
      




      
    </div>
  )
}

export default Project
