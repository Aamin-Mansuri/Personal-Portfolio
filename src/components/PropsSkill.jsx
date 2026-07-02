import React from "react";

const PropsSkill = ({ name, image, bgColor }) => {
  return (
    <div
      // We removed the hard-coded data-aos here because we are handling 
      // the staggered animation in the parent Skills.jsx map function.
      className={`
        relative
        flex flex-col
        justify-center
        items-center
        gap-4

        /* Responsive Widths */
        w-full
        max-w-[150px]   /* Mobile */
        sm:max-w-[180px] /* Tablet */
        md:max-w-[200px] /* Desktop */

        /* Responsive Heights */
        h-[150px]
        sm:h-[180px]
        md:h-[200px]

        p-4
        border-[3px]    /* Slightly thinner border looks cleaner */
        rounded-3xl     /* Smoother corners */
        bg-gray-900     /* Deeper dark background */
        ${bgColor}      /* The dynamic border color */

        /* Hover Effects */
        hover:scale-105
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
        ease-out
        group           /* Allows us to animate the image inside on hover */
      `}
    >
      {/* Decorative Glow (Visible on Hover) */}
      <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <img
          src={image}
          alt={name}
          className="
            w-12
            sm:w-16
            md:w-20
            h-12
            sm:h-16
            md:h-20
            object-contain
            transition-transform
            duration-500
            group-hover:rotate-12 /* Subtle rotation on hover */
          "
        />

        <h1
          className="
            text-xs
            sm:text-sm
            md:text-base
            font-bold
            text-gray-300
            group-hover:text-white /* Text brightens on hover */
            transition-colors
            tracking-wide
            text-center
            uppercase
          "
        >
          {name}
        </h1>
      </div>
    </div>
  );
};

export default PropsSkill;