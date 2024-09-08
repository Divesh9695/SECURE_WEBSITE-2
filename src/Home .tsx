



import React from "react";
import backgroundImage from "./assets/heder2.jpg";


const Home: React.FC = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className=" px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Defense <br />
          Security Group
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto mb-6">
          Experience top-tier security services in Virginia with Defense <br />
          Security Group. Our dedicated team offers bodyguard, armed and <br />
          unarmed security, vehicle patrols, and comprehensive business and
          property protection. Your safety is our priority.
        </h2>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mx-auto">
          <button className="bg-transparent border-2 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-6 sm:px-8 rounded-full mb-4 sm:mb-0 transition duration-300">
            Call Now
          </button>
          <button className="bg-transparent border-2 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-6 sm:px-8 rounded-full mb-4 sm:mb-0 transition duration-300">
            Get Quote
          </button>
          <button className="bg-transparent border-2 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-6 sm:px-8 rounded-full transition duration-300">
            Work With Us
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
