import React from "react";
import aboutImage from "./assets/ao.jpg"; // Adjust the path as needed
import Image from "./assets/ro.jpg"; 
const About: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-6">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-[38rem] h-[30rem] border-[1rem] border-white rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-lg mb-4">Introducing Us</h1>
          <p className="">
            Experience unparalleled protection with our exceptional bodyguard
            and
            <br /> armed security services in Virginia. Our highly trained
            professionals are
            <br /> dedicated to ensuring your safety and providing you with
            peacef of mind. <br />
            Trust the best for your security needs.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Contact Us
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              See Our Prices
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-6 space-y-6 md:space-y-0 md:space-x-6 border-2 border-[#447abe] bg-[#447abe] w-auto h-[38rem] ml-5 mr-5 mt-16 pt-16  rounded-lg">
        <div className="text-center md:text-left">
          <p className=" pr-16  text-white">Safeguard your business premises and residential properties with our<br /> advanced security measures tailored to your unique needs.</p>
          <h1 className="text-2xl mt-10 text-white">24/7 Support</h1>
          <p className="pt-3  text-white ">Reliable support available round the clock for all your security concerns.</p>
          <h1 className="text-2xl mt-7  text-white">Expert Team</h1>
          <p className="text-white">Highly skilled professionals ensuring top-level protection and peace of mind. </p>
        </div>
        <img
          src={Image}
          alt="About Us"
          className="w-[38rem] h-[30rem] mr-[20rem] rounded-lg shadow-lg"
        />
      </div>
      <div className="bg-[#447abe] w-full h-60 flex flex-col md:flex-row justify-center md:justify-start items-center">
        <h1 className="text-white text-3xl pt-4 md:pt-0 md:ml-20 text-center md:text-left">
          Get Your Free Assessment Today (703) 915–8068
        </h1>
        <button className="bg-transparent border-2  text-white font-bold py-2 px-4 rounded-full mt-4 md:mt-0 md:ml-52">
          Contact Us 
        </button>

        </div>
    </div>

  );
};

export default About;








