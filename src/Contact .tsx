
import React from "react";
import Image from "./assets/yo.jpg";
import pImage from "./assets/roko.jpg";
import Task from "./task";

const Contact: React.FC = () => {
  return (
    <div>
      {/* Contact Information Section */}
      <div className="flex flex-col-reverse md:flex-row justify-center p-6 space-y-6 md:space-y-0 md:space-x-6 border-2 border-[#edf2f6] bg-[#edf2f6] w-full h-auto mt-16 pt-16 rounded-lg">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl pr-4 md:pr-16 text-black md:ml-16 lg:ml-28 font-bold mt-8">
            Professional Vehicle Patrol <br />
            Services in Virginia
          </h1>
          <p className="text-sm mt-6 sm:mt-10 md:text-base text-black md:ml-16 lg:ml-28">
            Ensure unmatched security in Virginia with our professional Vehicle
            Patrol Services. Our vigilant patrols and dedicated security
            professionals keep your property and personal safety at the
            forefront, delivering peace of mind and a secure environment you can
            rely on.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-7 md:ml-16 lg:ml-28">
            <li className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-[#447ABE] mr-2"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
              </svg>
              Exceptional Customer Support
            </li>
            <li className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-[#447ABE] mr-2"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
              </svg>
              Highly Trained Security Professionals
            </li>
            <li className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-[#447ABE] mr-2"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
              </svg>
              Comprehensive Range of Services
            </li>
            <li className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-[#447ABE] mr-2"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
              </svg>
              Customized Solutions
            </li>
            <li className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-[#447ABE] mr-2"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path>
              </svg>
              Cutting-Edge Technology
            </li>
          </ul>
          <button className="bg-[#447abe] text-white font-bold py-2 px-4 rounded-full md:ml-16 lg:ml-28 mt-8 sm:mt-12">
            Contact Us
          </button>
        </div>
        <img
          src={Image}
          alt="About Us"
          className="w-full md:w-[38rem] h-auto md:h-[30rem] rounded-lg shadow-lg"
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 flex flex-col-reverse md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-6">
        <img
          src={pImage}
          alt="Why Choose Us"
          className="w-full md:w-[38rem] h-auto md:h-[30rem] border-white shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-lg mb-4 md:ml-16">Why Choose Us</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold md:ml-16">
            Experienced Business <br />
            Security Property <br /> Protection in Virginia
          </h1>
          <p className="mt-4 md:mt-7 md:ml-16">
            Safeguard your business assets with our seasoned experts
            specializing in business security and property protection services
            in Virginia. Rely on our experience to keep your premises secure
            and protected.
          </p>
          <button className="bg-blue-500 text-white md:ml-16 py-2 px-4 rounded-full mt-6">
            Contact Us
          </button>
        </div>
      </div>

      {/* Task Component */}
      <div className="mt-20">
        <Task />
      </div>
    </div>
  );
};

export default Contact;

