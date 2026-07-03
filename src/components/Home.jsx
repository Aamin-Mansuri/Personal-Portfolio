import React from "react";
import Typewriter from "typewriter-effect"; // Import the library
import myImage from "../assets/sign.png";
import coder from "../assets/coder.gif";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-5 sm:px-10 md:px-16 lg:px-24 pt-20 pb-10 overflow-hidden "
    >
      <div
        id="home-part"
        className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-7xl w-full"
      >
        {/* Left Side: Image with Animated Border */}
        <div
          data-aos="zoom-in"
          className="
            relative
            flex 
            justify-center 
            items-center 
            w-full 
            max-w-[300px] 
            sm:max-w-[400px] 
            md:max-w-[450px] 
            lg:max-w-[500px]
          "
        >
          {/* Decorative background element */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl rotate-6 opacity-20 blur-sm"></div>
          
          <div className="relative bg-amber-500 p-3 sm:p-5 rounded-3xl shadow-2xl">
            <img
              src={coder}
              alt="coder animation"
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>

        {/* Right Content Side */}
        <div className="flex flex-col gap-6 w-full text-center lg:text-left">
          <div className="space-y-2">
           
            
            <h2
              data-aos="fade-right"
              className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800"
            >
              Hello!, I Am <span className="font-extrabold text-black">Aamin Mansuri</span>
            </h2>

            <h1
              data-aos="fade-up"
              className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter"
            >
              MERN STACK
            </h1>

            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="h-10 sm:h-16 md:h-20 flex justify-center lg:justify-start items-center"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-black">—</span>
                <span className="text-black">
                  <Typewriter
                    options={{
                      strings: [
                        "WEB DEVELOPER",
                        "REACT DEVELOPER",
                        "VIDEO EDITOR",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                      wrapperClassName: "typewriter-text font-bold", 
                      cursorClassName: "text-blue-500 font-light",
                    }}
                  />
                </span>
              </h2>
            </div>
          </div>

          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-gray-500 leading-relaxed text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0"
          >
            I specialize in building robust backends and pixel-perfect frontends.
            Turning complex problems into elegant, scalable digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-4">
            <button
              data-aos="fade-up"
              className="
                group relative px-8 py-4 
                bg-black text-white 
                rounded-full font-bold
                overflow-hidden transition-all duration-300
                hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
              "
            >
              <a href="#about">
              <span className="relative z-10 flex items-center gap-2 ">
                About Me <span className="group-hover:translate-x-2 transition-transform duration-300">➫</span>
              </span>
              </a>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <img
              src={myImage}
              alt="signature"
              className="
                w-32 sm:w-40 md:w-48
                opacity-70 grayscale hover:grayscale-0
                lg:-rotate-6 transition-all duration-500
              "
            />
          </div>
        </div>
      </div>

      <style>{`
        .Typewriter__cursor {
          font-weight: 200;
          color: #3b82f6;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Home;