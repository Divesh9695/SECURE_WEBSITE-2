
import backgroundImage from "./assets/tu.jpg";
import { CgMail } from "react-icons/cg";
import { BsPersonBoundingBox } from "react-icons/bs";

import { BsFillCupFill } from "react-icons/bs";
import image from "../src/assets/prop.png";
const Employees = () => {
  return (
    <div>
      <div
        className="h-96 font-bold  flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {" "}
        <p className="text-3xl md-text-6xl lg-text-9xl ">WORK WITH US</p>
        <p className="text-2xl ml-28">You’ll always be in complete control.</p>
        <button className=" bg-transparent text-white hover:text-blue-500  hover:bg-white border-2 rounded-full p-4 ">
          Learn More
        </button>
      </div>
      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center border-2 bg-white text-black h-96 w-80">
            <p className="text-8xl text-red">
              <CgMail />
            </p>
            <p className="font-bold">SUBMIT APPLICATION</p>
            <p className="mt-9">
              Please use the form below to submit an application for potential
              employment with Defense Security Group.
            </p>
            <button className="bg-blue text-black hover:text-blue-500 mt-8 border-2 rounded-full p-4 ">
              Apply Now
            </button>
          </div>
          <div className="flex flex-col items-center text-center border-2 bg-white text-black h-96 w-80">
            <p className="text-6xl text-blue mt-6">
              <BsPersonBoundingBox />
            </p>
            <p className="font-bold mt-4">ONBOARDING FORM</p>
            <p className="mt-9">
              Please use the form below to submit your documents once you’re
              hired to work at Defense Security Group.
            </p>
            <button className="bg-blue text-black hover:text-blue-500 mt-8 border-2 rounded-full p-4 ">
              ONBOARD
            </button>
          </div>
          <div className="flex flex-col items-center text-center border-2 bg-white text-black h-96 w-80">
            <p className="text-6xl text-blue mt-6">
              <BsFillCupFill />
            </p>
            <p className="font-bold mt-4">SECURE FILE TRANSFER</p>
            <p className="mt-9">
              If you have already contacted us through other means & you wish to
              submit documents securely.
            </p>
            <button className="bg-blue text-black hover:text-blue-500 mt-8 border-2 rounded-full p-4 ">
              Upload Your files
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-96 font-bold mt-9  flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      > <p className="text-6xl"> Get Your Free Assessment</p>
      <p className="text-4xl mt-4">Today (703) 915–8068</p>
      <p className="font-bold mt-5">With a clear vision and mission, we secure your business using better security services</p>
      <button className="bg-blue text-white hover:text-blue-500 mt-8 border-2 rounded-full p-4 ">
            GET PROTECTION
            </button>
      </div>
      {/* <div className="border-2 h-96 bg-cyan-300">

      </div> */}
      <div className="border-2 h-auto  bg-cyan-300">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-lg mx-auto p-4 ">
          <div>
            <div className="flex items-center">
              <img src={image} alt="MyApp Logo" className="h-25 w-24 py-2" />
            </div>
            <p className="text-white">
              Your Safety is Our Priority – Trust Defense
              <br /> Security Group for Unparalleled Protection.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg text-white mt-14">Quick Links</p>
            <p className=" text-white underline text-sm ">Home</p>
            <p className=" text-white underline text-sm mt-3">About Us</p>
            <p className=" text-white underline text-sm mt-3">Agent</p>
            <p className=" text-white underline text-sm mt-3">services</p>
            <p className=" text-white underline text-sm mt-3">Contect</p>
          </div>
          <div>
            <p className="font-bold  text-white text-lg">Get In Touch</p>
            <p className="text-white underline text-sm mt-3">(934) 915-2345</p>
            <p className=" text-white underline text-sm mt-3">
              esrdtyu@cvhbj.com
            </p>
            <p className=" text-white mt-3 text-sm ">verginia</p>
          </div>
          <div>
            <p className="font-bold text-lg text-white mt-10">
              Subscribe Newsletter
            </p>

            <input
              type="text"
              placeholder="Type your email"
              className="mt-3 p-2 rounded-lg w-full lg:w-auto"
            />
            <p>
              {" "}
              <button className="bg-white  text-[#447abe] mt-4 font-bold py-2 p-16  rounded-full ">
                Submit
              </button>
            </p>
            <p className="text-white text-sm mt-3">
              Get the latest updates via email. Any time you
              <br /> may unsubscribe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
