import React, { useEffect } from "react";
import Hexa from "../assets/hexagon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
   
    AOS.init({ duration: 1000, once: true });
  }, []);

  const technologies = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "Express", "MongoDB"];
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative overflow-hidden w-full pt-20">
      
      <div className="relative h-40 sm:h-48 flex items-center mb-20">
        <div className="absolute w-[110%] -left-[5%] bg-black h-24 sm:h-32 rotate-2 shadow-xl"></div>
        <div className="absolute w-[110%] -left-[5%] bg-[#FF5858] h-24 sm:h-32 -rotate-2 flex items-center overflow-hidden shadow-xl">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex items-center gap-3 px-8 sm:px-12 text-white text-2xl sm:text-4xl font-black italic uppercase">
                <img className="w-6 h-6 sm:w-8 sm:h-8" src={Hexa} alt="icon" />
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Main Contact CTA --- */}
      <div className="container mx-auto px-6 text-center flex flex-col gap-12 py-10">
        <div className="space-y-4">
          <h1 
            data-aos="fade-up"
            className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight tracking-tighter text-gray-900"
          >
            INTERESTED IN <br /> 
            <span className="text-blue-600">WORKING TOGETHER?</span>
          </h1>
        </div>

        <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
          <p className="font-medium text-gray-500 text-xl sm:text-2xl italic">Drop me an email:</p>
          <a 
            href="mailto:aaminmansuri988@gmail.com"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black hover:text-blue-600 transition-colors duration-300 break-words"
          >
            aaminmansuri988@gmail.com
          </a>
        </div>
      </div>

      {/* --- Bottom Footer Bar --- */}
      <div className="mt-20 border-t border-gray-200 bg-gray-700">
        <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Copyright */}
          <div className="text-gray-500 font-medium text-center lg:text-left order-3 lg:order-1">
            Copyright © {currentYear} Aamin Mansuri
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 order-1 lg:order-2">
            <a 
              href="https://github.com/Aamin-Mansuri" 
              className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
            >
              GitHub ⬈
            </a>
            <a 
              href="https://linkedin.com/in/aamin-mansuri-83396036a" 
              className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              LinkedIn ➜
            </a>
            <a 
              href="https://www.instagram.com/aamin.mansuriii/" 
              className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-sm hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              Instagram ➜
            </a>
          </div>

          {/* Back to top */}
          <div className="order-2 lg:order-3">
            <a 
              href="#home" 
              className="group flex items-center gap-2 font-bold text-white hover:text-blue-600 transition-colors"
            >
              BACK TO TOP 
              <span className="group-hover:-translate-y-2 transition-transform duration-300">↑</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Marquee CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Contact;