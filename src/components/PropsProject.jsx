import React from "react";

const PropsProject = (p) => {
  return (
    <div>
      <div
        id="p-cards"
        data-aos={p.aos}
        className="flex border-2 rounded-2xl p-5 gap-8 w-170 border-gray-300"
      >
        <div id="c-content" className="w-100 flex flex-col gap-4 font-sans">
          <h1 id="card-title" className="font-bold uppercase">{p.title}
          </h1>
          <p id="p-para" className=" font-sans text-gray-500 text-sm">{p.para}
          </p>
          <button
            id="p-bt"
            className="flex p-2 pl-5 w-36 bg-black hover:bg-blue-500 hover:scale-[1.1] text-white rounded-3xl text-2xl  font-medium"
          >
            <a href={p.link}>
              GitHub ⬈
            </a>
          </button>
        </div>
        <div>
          <img
            id="p-img"
            className="w-96 h-50 rounded-2xl hover:scale-[1.1] transition-all 1s ease-linear"
            src={p.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PropsProject;
