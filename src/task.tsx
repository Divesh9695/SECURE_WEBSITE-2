
import React from "react";
import backgroundImage from "./assets/heder2.jpg";
import Faq from "./Faq";

const Task: React.FC = () => {
  return (
    <div>
      <div
        className="h-auto flex flex-col items-center text-white bg-cover bg-center mt-14 px-4 md:px-8 lg:px-16 py-12 mix-blend-overlay"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          How We Work
        </p>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl mt-5 font-bold">
          Our Working Process
        </h1>
        <p className="text-center mt-5 text-sm md:text-lg lg:text-xl max-w-2xl">
          We have a diligent process of working to achieve our goals with
          perfection.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 max-w-full w-full">
          <div className="bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
            <p className="border-2 p-3 w-14 bg-[#5b88ac] text-white">1st</p>
            <h1 className="text-xl md:text-2xl mt-8">Assessment</h1>
            <p className="mt-4 text-sm md:text-base">
              Thorough evaluation of security needs to develop tailored
              solutions.
            </p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
            <p className="border-2 p-3 w-14 bg-[#5b88ac] text-white">2nd</p>
            <h1 className="text-xl md:text-2xl mt-8">Implementation</h1>
            <p className="mt-4 text-sm md:text-base">
              Efficient deployment of security measures utilizing advanced
              technology.
            </p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
            <p className="border-2 p-3 w-14 bg-[#5b88ac] text-white">3rd</p>
            <h1 className="text-xl md:text-2xl mt-8">
              Monitoring and Adaptation
            </h1>
            <p className="mt-4 text-sm md:text-base">
              Constant vigilance and adjustment to ensure ongoing effectiveness.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
};

export default Task;
