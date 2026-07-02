import React, { useEffect } from "react";
import Hexa from "../assets/hexagon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Tailwind",
    "NodeJS",
    "MongoDB",
  ];

  return (
    <section id="about" className="relative overflow-hidden w-full py-20">
      {/* Rotated Background Strips */}
      <div className="relative h-40 sm:h-48 flex items-center">
        {/* Black Strip */}
        <div className="absolute w-[110%] -left-[5%] bg-black h-24 sm:h-32 rotate-3 shadow-2xl"></div>

        {/* Red Strip with Marquee effect */}
        <div className="absolute w-[110%] -left-[5%] bg-[#FF5858] h-24 sm:h-32 -rotate-3 flex items-center overflow-hidden shadow-2xl">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Duplicate list for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 sm:px-12 text-white text-2xl sm:text-4xl font-bold italic uppercase"
              >
                <img className="w-6 h-6 sm:w-8 sm:h-8" src={Hexa} alt="icon" />
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 mt-24 sm:mt-32">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Title */}
          <div className="lg:w-1/3">
            <h1
              data-aos="fade-right"
              className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none text-gray-900"
            >
              ABOUT <br className="hidden lg:block" /> ME
            </h1>
            <div
              data-aos="fade-right"
              className="w-20 h-2 bg-blue-500 mt-4"
            ></div>
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3 space-y-8">
            <p
              data-aos="fade-up"
              className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed"
            >
              I am a passionate{" "}
              <span className="text-black font-bold border-b-2 border-blue-500">
                MERN Stack Developer
              </span>{" "}
              currently pursuing BCA and continuously improving my full stack
              development skills. I enjoy building responsive and user-friendly
              web applications using modern technologies like React.js, Node.js,
              Express.js, and MongoDB.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed"
            >
              I am a quick learner who loves solving real-world problems through
              coding and creative projects. My goal is to grow as a professional
              developer and contribute to innovative digital solutions. I focus
              on writing clean, scalable, and reusable code while staying
              up-to-date with industry trends.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default About;