import React from "react";
import Voice from "../assets/voice.png";
import Flight from "../assets/flight.png";
import Auth from "../assets/Auth.png";
import Movie from "../assets/movie.png";
import clock from "../assets/clock.png";
import weather from "../assets/weather.png";
import digital from "../assets/digital.png";
import Bee from "../assets/Bee.png";
import PropsProject from "./PropsProject";
import commerce from "../assets/Commrce.png"

const Project = () => {
  const projectList = [
    {
      title: "Voice Assistant Web App",
      img: Voice,
      link: "https://github.com/Aamin-Mansuri/voice-as-js-project-6.git",
      para: "Built a voice assistant using HTML, CSS and JavaScript with speech recognition and text-to-speech features.",
    },
    {
      title: "E-Commerce WebSite",
      img: commerce,
      link:"https://github.com/Aamin-Mansuri/E-Commerce-Web-Project.git",
      para: "Developed a responsive E-Commerce website using React.js with Login/Signup authentication. Implemented Add to Cart functionality using Context API for efficient global state management and seamless user experience."
    },
    {
      title: "Authentication App (Mern Stack)",
      img: Auth,
      link: "https://github.com/Aamin-Mansuri/Mern-Authentication-App.git",
      para: "This comprehensive MERN stack authentication system provides a secure and modern user experience by integrating custom JWT login flows with seamless Google OAuth 2.0 capabilities. It features a responsive React dashboard and a robust Node.js backend, offering a production-ready foundation for secure identity management and protected data access",
    },
    {
      title: "Weather App",
      img: weather,
      link: "https://github.com/Aamin-Mansuri/wather-app-js-project-5.git",
      para: "Designed a real-time weather dashboard with live temperature, humidity and location-based search.",
    },
    {
      title: "Movie Search App",
      img: Movie,
      link: "https://github.com/Aamin-Mansuri/Movie-Search-Api-Project.git",
      para: "Created a movie searching application using React and external APIs.",
    },
    {
      title: "The React Bee Game",
      img: Bee,
      link: "https://github.com/Aamin-Mansuri/React-Bee-Game.git",
      para: "Fun React game with GSAP animations, sound effects and moving objects.",
    },
    {
      title: "Digital Clock",
      img: digital,
      link: "https://github.com/Aamin-Mansuri/clock-js-project.git",
      para: "Created a modern responsive Digital Clock using HTML, CSS and JavaScript.",
    },
  ];

  return (
    <section
      id="pro"
      className="w-full py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p 
            data-aos="fade-up" 
            className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2"
          >
            My Portfolio
          </p>
          <h1
            data-aos="fade-right"
            className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900"
          >
            TAKE A LOOK <br />
            AT MY <span className="text-blue-600">PROJECTS</span>
          </h1>
          <div className="w-24 h-2 bg-black mt-4 rounded-full"></div>
        </div>

        {/* Project Cards Container */}
        <div
          className="
            flex flex-col 
            gap-12 md:gap-16 lg:gap-24 
            items-center
          "
        >
          {projectList.map((project, index) => (
            <PropsProject
              key={index}
              // Alternates AOS animation based on index
              aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              title={project.title}
              img={project.img}
              link={project.link}
              para={project.para}
              // Adding a prop to handle alternating layout if your PropsProject supports it
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        {/* GitHub Call to Action */}
        <div className="mt-24 text-center" data-aos="zoom-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Want to see more code?</h2>
          <a 
            href="https://github.com/Aamin-Mansuri" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore GitHub ➫
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;