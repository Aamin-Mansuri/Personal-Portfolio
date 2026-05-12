import React from 'react'
import Record from '../assets/record-button.png'
const Edu = () => {
  return (
    <div>
      <div className=' text-center h-160 bg-black w-100% mt-16 text-white p-12'>
        <h1 className='font-bold font-sans text-7xl pt-3 underline'>EDUCATION</h1>

        <div className='flex items-center  gap-64 mt-20 w-100% mr-28'>
            <div className='flex flex-col items-center gap-32 w-200'>
                <div>
                    <h1 className='font-black text-2xl font-sans'>Bachlers Of Computer Applications</h1>
                    <p className='font-medium text-lg'>Vikram University,</p>
                </div>
                <div>
                    <h1 className='font-black text-2xl font-sans'>MERN Stack Devloper</h1>
                    <p  className='font-medium text-lg'>CyberGrow Technology,Ratlam</p>
                </div>
                
            </div>

            <div>
              <div>
                <img className='relative  w-10 ' src={Record} alt="" />
              </div>
              <div className='border-r-4 border-white w-2.5 h-72 relative -top-2 left-2' ></div>
              <div>
                <img className='relative  w-10 -top-3.5 ' src={Record} alt="" />
              </div>

            </div>

            <div className='flex flex-col items-center gap-25 w-150 pt-8 text-sm font-normal font-sans text-gray-400'>
              <p>BCA helps students develop technical, analytical, and problem-solving skills required in the IT industry.It provides career opportunities in software development, web development, cybersecurity, data analysis, and other technology-related fields.</p>
              <p>MERN Stack Development is a modern web development technology stack used to build full-stack web applications.It includes MongoDB for database management, Express.js and Node.js for backend development, and React.js for creating interactive user interfaces.The course helps in developing skills in frontend, backend, API integration, authentication, and database handling.</p>
              </div>

        </div>

      </div>

      
    </div>
  )
}

export default Edu
