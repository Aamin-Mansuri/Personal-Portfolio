import React from 'react';
import Html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import mongoo from '../assets/mongoose.png';
import boot from '../assets/boot.png';
import api from '../assets/api.png';
import Express from '../assets/ex.png';
import github from '../assets/github.png';
import tailwind from '../assets/taiwind.png';
import vscode from '../assets/vscode.png';

const Skills = () => {
	AOS.init();
	return (
		<div id="skills" className=" mt-14">
			<div id='t-div' className=" pl-36 flex  flex-col">
				<h1 id='s-title' data-aos="fade-right" className="text-7xl font-sans font-black ">SKILLS</h1>
			</div>

			<div className="mt-16 flex flex-wrap w-100% justify-center gap-7">
				{/* card 1 */}
				<div data-aos="zoom-in-up" className=' hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-amber-600 w-50 h-58 bg-gray-800'>
					<img src={Html} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>HTML</h1>
				</div>
				{/* card 2 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-blue-500 w-50 h-58 bg-gray-800'>
					<img src={css} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans' className='text-2xl font-bold text-white font-sans'>CSS</h1>
				</div>
				{/* card 3 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-yellow-500 w-50 h-58 bg-gray-800'>
					<img src={js} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>JavaScript</h1>
				</div>
				{/* card 4 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-cyan-300 w-50 h-58 bg-gray-800'>
					<img src={react} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>ReactJS</h1>
				</div>
				{/* card 5 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-green-800 w-50 h-58 bg-gray-800'>
					<img src={node} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>NodeJS</h1>
				</div>
				{/* card 6 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-gray-900 w-50 h-58 bg-gray-800'>
					<img src={Express} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>Express JS</h1>
				</div>
				{/* card 7 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-green-600 w-50 h-58 bg-gray-800'>
					<img src={mongo} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>MongoDB</h1>
				</div>
				{/* card 8 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-red-800 w-50 h-58 bg-gray-800'>
					<img src={mongoo} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>Mongoose</h1>
				</div>
				{/* card 9 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-black w-50 h-58 bg-gray-800'>
					<img src={boot} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>BootStrap</h1>
				</div>
				{/* card 10 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-cyan-600 w-50 h-58 bg-gray-800'>
					<img src={tailwind} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>Tailwind CSS</h1>
				</div>
				{/* card 11 */}
				<div data-aos="zoom-in-up"  className='hover:scale-[1.1] flex flex-col justify-center items-center gap-3.5 border-4 rounded-2xl p-5 border-black w-50 h-58 bg-gray-800'>
					<img className='w-35' src={api} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans '>RESTful APIs</h1>
				</div>

				{/* card 12 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-cyan-600 w-50 h-58 bg-gray-800'>
					<img src={vscode} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>VS code</h1>
				</div>
				{/* card 13 */}
				<div data-aos="zoom-in-up" className='hover:scale-[1.1] flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 border-black w-50 h-58 bg-gray-800'>
					<img src={github} alt="" />
					<h1 className='text-2xl font-bold text-white font-sans'>GitHub</h1>
				</div>
			</div>

		</div>
	);
};

export default Skills;
