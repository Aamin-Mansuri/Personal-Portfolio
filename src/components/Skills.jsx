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
import PropsSkill from './PropsSkill';

const Skills = () => {
	AOS.init();
	return (
		<div id="skills" className=" mt-14 w-screen">
			<div id='t-div' className=" pl-36 flex  flex-col">
				<h1 id='s-title' data-aos="fade-right" className="text-7xl font-sans font-black ">SKILLS</h1>
			</div>
			

			<div id='card-container' className="mt-16 flex flex-wrap w-100% justify-center gap-7 flex-1">
				{/* card 1 */}
				<PropsSkill name="HTML" image={Html} bgColor="border-amber-500" />
				{/* card 2 */}
				<PropsSkill name="Css" image={css} bgColor="border-blue-500"/>
				{/* card 3 */}
				<PropsSkill name="JavaScript" image={js} bgColor="border-yellow-500" />
				{/* card 4 */}
				<PropsSkill name="React JS" image={react} bgColor="border-cyan-300" />
				{/* card 5 */}
				<PropsSkill name="Node Js" image={node} bgColor="border-green-800" />
				{/* card 6 */}
				<PropsSkill name="Express Js" image={Express} bgColor="border-gray-900" />
				{/* card 7 */}
				<PropsSkill name="MongoDB" image={mongo} bgColor="border-green-600" />
				{/* card 8 */}
				<PropsSkill name="Mongoose" image={mongoo} bgColor="border-red-800" />
				{/* card 9 */}
				<PropsSkill name="BootStrap" image={boot} bgColor="border-black" />
				{/* card 10 */}
				<PropsSkill name="Tailwind CSS" image={tailwind} bgColor="border-cyan-600" />
				{/* card 11 */}
				<PropsSkill name="RESTful API's" image={api} bgColor="border-black" />
				{/* card 12 */}
				<PropsSkill name="VS Code" image={vscode} bgColor="border-cyan-600" />
				{/* card 13 */}
				<PropsSkill name="GitHub" image={github} bgColor="border-black" />
			</div>

		</div>
	);
};

export default Skills;
