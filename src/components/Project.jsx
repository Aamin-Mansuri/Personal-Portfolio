import React from "react";
import Voice from "../assets/voice.png";
import Flight from "../assets/flight.png";
import Loan from "../assets/loan.png";
import Movie from "../assets/movie.png";
import clock from "../assets/clock.png";
import weather from "../assets/weather.png";
import digital from "../assets/digital.png";
import git from "../assets/github.png";
import PropsProject from "./PropsProject";

const Project = () => {
  return (
    <div id="pro" className="pt-28  w-screen">
      <div className="font-black text-7xl ">
        <h1 id="p-h" data-aos="fade-right" className="pl-32">
          TAKE A LOOK <br /> AT MY PROJECTS
        </h1>
      </div>
      <div
        id="p-card-container"
        className="mt-16 flex flex-wrap w-100% gap-14 justify-center"
      >
        {/* project card 1 */}
        <PropsProject
          aos="flip-left"
          title="Voice Assistant Web App"
          img={Voice}
          link="https://github.com/Aamin-Mansuri/voice-as-js-project-6.git"
          para="Built a voice assistant using the HTML CSS JavaScript with speech recognition and text-to-speech features. Users can ask questions, search information, and interact through voice commands in real time."
        />

        {/* project card 2 */}
        <PropsProject
          aos="flip-right"
          title="Weather App"
          img={weather}
          link="https://github.com/Aamin-Mansuri/wather-app-js-project-5.git"
          para="Designed a real-time weather dashboard that displays live temperature, humidity, wind speed, and weekly forecasts using weather APIs. Includes responsive UI and location-based search functionality."
        />

        {/* project card 3 */}
        <PropsProject
          aos="flip-right"
          title="Loan App UI"
          img={Loan}
          link="https://github.com/Aamin-Mansuri/web-kreditbee-project-2.git"
          para="Designed and developed a responsive Loan Application UI using HTML and CSS with a clean and modern interface."
        />
        {/* project card 4 */}
        <PropsProject
          aos="flip-left"
          title="Movie Search App"
          img={Movie}
          link="https://github.com/Aamin-Mansuri/Movie-Search-Api-Project.git"
          para="Created a responsive movie searching application using React and external movie APIs. Users can search movies, view ratings, trailers, and save favorites with secure authentication."
        />
        {/* project card 5 */}
         <PropsProject
          aos="flip-right"
          title="Digital Clock"
          img={digital}
          link="https://github.com/Aamin-Mansuri/clock-js-project.git"
          para="Created a responsive Digital Clock using HTML, CSS, and JavaScript
              with a modern UI design. The clock displays real-time hours,
              minutes, and seconds with smooth updates, stylish typography, and
              responsive layout for different screen sizes."
        />

        {/* project card 6 */}
         <PropsProject
          aos="flip-left"
          title="Analog Clock"
          img={clock}
          link="https://github.com/Aamin-Mansuri/clock-js-project.git"
          para=" Designed and developed an Analog Clock using HTML, CSS, and
              JavaScript featuring rotating clock hands based on real-time
              calculations. Implemented smooth animations, responsive circular
              layout, and clean UI styling to create an interactive and visually
              appealing clock interface."
        />
      </div>
    </div>
  );
};

export default Project;
