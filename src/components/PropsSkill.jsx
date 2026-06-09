import React from "react";

const PropsSkill = (props) => {
  return (
    <div>
      <div
        id="s-cards"
        data-aos="zoom-in-up"
        className={` flex flex-col justify-center items-center gap-2.5 border-4 rounded-2xl p-5 ${props.bgColor} w-50 h-58 bg-gray-800 hover:scale-110 duration-300 ease-in]`}
        >
        <img src={props.image} alt="" />
        <h1 className="text-2xl font-bold text-white font-sans">{props.name}</h1>
      </div>
    </div>
  );
};

export default PropsSkill;
