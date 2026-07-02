import React from "react";

const PropsProject = ({ aos, title, para, link, img }) => {
  return (
    <div
      data-aos={aos}
      className="
        group
        relative
        flex flex-col lg:flex-row
        items-center
        gap-8 lg:gap-12
        bg-white
        w-full
        max-w-6xl

        p-6 sm:p-8
        border border-gray-100
        rounded-[2rem] /* Modern super-rounded corners */

        /* Premium Shadow & Lift Effect */
        shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]
        hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.2)]
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      {/* Text Content Area */}
      <div
        className="
          flex flex-col
          gap-5
          w-full
          lg:w-1/2
          text-center lg:text-left
          order-2 lg:order-1
        "
      >
        <div className="space-y-2">
          <h1
            className="
              font-black
              uppercase
              tracking-tight
              text-2xl
              sm:text-3xl
              md:text-4xl
              text-gray-900
              group-hover:text-blue-600
              transition-colors
              duration-300
            "
          >
            {title}
          </h1>
          <div className="w-12 h-1 bg-blue-500 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        <p
          className="
            text-gray-600
            text-base
            sm:text-lg
            leading-relaxed
            font-medium
          "
        >
          {para}
        </p>

        <div className="flex justify-center lg:justify-start pt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-3
              bg-gray-900
              text-white
              rounded-full
              font-bold
              text-sm
              sm:text-base

              hover:bg-blue-600
              hover:gap-4 /* Arrow moves on hover */
              transition-all
              duration-300
              shadow-lg
            "
          >
            View GitHub <span>→</span>
          </a>
        </div>
      </div>

      {/* Image Display Area */}
      <div 
        className="
          w-full 
          lg:w-1/2 
          overflow-hidden 
          rounded-2xl 
          shadow-md
          order-1 lg:order-2
        "
      >
        <img
          src={img}
          alt={title}
          className="
            w-full
            h-[220px]
            sm:h-[300px]
            md:h-[350px]
            object-cover
            
            /* Zoom effect on hover of the WHOLE card */
            group-hover:scale-110
            transition-transform
            duration-700
            ease-in-out
          "
        />
      </div>
    </div>
  );
};

export default PropsProject;