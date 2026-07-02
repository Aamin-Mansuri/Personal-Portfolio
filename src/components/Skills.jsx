import React from "react";
import Html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import mongoo from "../assets/mongoose.png";
import boot from "../assets/boot.png";
import api from "../assets/api.png";
import Express from "../assets/ex.png";
import github from "../assets/github.png";
import tailwind from "../assets/taiwind.png";
import vscode from "../assets/vscode.png";
import PropsSkill from "./PropsSkill";

const Skills = () => {
  // Data array for cleaner code and easier animation handling
  const skillData = [
    { name: "HTML", image: Html, color: "border-orange-500" },
    { name: "CSS", image: css, color: "border-blue-500" },
    { name: "JavaScript", image: js, color: "border-yellow-400" },
    { name: "React JS", image: react, color: "border-cyan-400" },
    { name: "Node JS", image: node, color: "border-green-600" },
    { name: "Express JS", image: Express, color: "border-gray-800" },
    { name: "MongoDB", image: mongo, color: "border-green-500" },
    { name: "Mongoose", image: mongoo, color: "border-red-700" },
    { name: "Tailwind", image: tailwind, color: "border-sky-400" },
    { name: "Bootstrap", image: boot, color: "border-purple-600" },
    { name: "REST API", image: api, color: "border-blue-400" },
    { name: "GitHub", image: github, color: "border-black" },
    { name: "VS Code", image: vscode, color: "border-blue-600" },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen py-20 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col mb-16 items-center lg:items-start text-center lg:text-left">
          <h1
            data-aos="fade-right"
            className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-gray-900"
          >
            SKILLS
          </h1>
          <div 
            data-aos="fade-right" 
            data-aos-delay="200" 
            className="w-24 h-2 bg-blue-500 mt-2 rounded-full"
          ></div>
          <p className="text-gray-500 mt-6 text-lg max-w-lg">
            A list of technologies I use to bring digital ideas to life. 
            Focused on the MERN Stack and modern CSS frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="
            grid 
            grid-cols-2      /* Mobile: 2 per row */
            sm:grid-cols-3   /* Tablet: 3 per row */
            md:grid-cols-4   /* Laptop: 4 per row */
            lg:grid-cols-5   /* Desktop: 5 per row */
            gap-4            /* Smaller gap on mobile */
            sm:gap-8         /* Larger gap on bigger screens */
            justify-items-center
          "
        >
          {skillData.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={index * 50} // Staggered entry animation
              className="w-full flex justify-center"
            >
              <PropsSkill
                name={skill.name}
                image={skill.image}
                bgColor={skill.color}
                // If your PropsSkill doesn't have hover effects, 
                // ensure it has a transition and scale-105 in its own code.
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;