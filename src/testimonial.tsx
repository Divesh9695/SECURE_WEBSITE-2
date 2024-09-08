import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "./assets/heder2.jpg";
import { useState } from "react";
import image from "../src/assets/prop.png";

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [activeForm, setActiveForm] = useState<number | null>(null);

  const forms = [
    {
      title: "Armed Officer",
      backgroundImage: `url(${backgroundImage})`,
      content: (
        <form className="space-y-4 p-6 bg-white bg-opacity-90 rounded-md relative z-10">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              How Many Armed Officer You Need ?
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="p-2 border border-gray-300 rounded-md"
              placeholder=" select Armed Office"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter last name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter phone number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Date ?
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter Date "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Time?
              </label>
              <input
                type="text"
                id="time"
                name="time"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter Time?"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                How Many Hours ?
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="your Duration "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Location
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your Address"
              />
            </div>
          </div>
          <div>
            <div className="flex-col space-y-2 mt-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption1"
                  name="uniformOption1"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption1"
                  className="text-lg font-bold text-gray-700"
                >
                  A- DSG Uniform
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption2"
                  name="uniformOption2"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption2"
                  className="text-lg font-bold text-gray-700"
                >
                  B- Civilian Cloth
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption3"
                  name="uniformOption3"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption3"
                  className="text-lg font-bold text-gray-700"
                >
                  C- Black Suit & Tie
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="phone"
              className="text-lg font-medium text-gray-700"
            >
              Prices
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Select Prise"
            />
          </div>

          <button
            type="submit"
            className="w-40 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ),
    },
    {
      title: "Unarmed Officer",
      backgroundImage: "url('/path/to/institute-background.jpg')",
      content: (
        <form className="space-y-4 p-6 bg-white bg-opacity-90 rounded-md relative z-10">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              How Many Armed Officer You Need ?
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="p-2 border border-gray-300 rounded-md"
              placeholder=" select Armed Office"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter last name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter phone number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Date ?
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter Date "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Time?
              </label>
              <input
                type="text"
                id="time"
                name="time"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter Time?"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                How Many Hours ?
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="your Duration "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Location
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your Address"
              />
            </div>
          </div>
          <div>
            <div className="flex-col space-y-2 mt-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption1"
                  name="uniformOption1"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption1"
                  className="text-lg font-bold text-gray-700"
                >
                  A- DSG Uniform
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption2"
                  name="uniformOption2"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption2"
                  className="text-lg font-bold text-gray-700"
                >
                  B- Civilian Cloth
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption3"
                  name="uniformOption3"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption3"
                  className="text-lg font-bold text-gray-700"
                >
                  C- Black Suit & Tie
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="phone"
              className="text-lg font-medium text-gray-700"
            >
              Prices
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Select Prise"
            />
          </div>

          <button
            type="submit"
            className="w-40 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ),
    },
    {
      title: "Home Form",
      backgroundImage: "url('/path/to/home-background.jpg')",
      content: (
        <form className="space-y-4 p-6 bg-white bg-opacity-90 rounded-md relative z-10">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              How Many Armed Officer You Need ?
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="p-2 border border-gray-300 rounded-md"
              placeholder=" select Armed Office"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter last name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter phone number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Date ?
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter Date "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Time?
              </label>
              <input
                type="text"
                id="time"
                name="time"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter Time?"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                How Many Hours ?
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="your Duration "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Which Location
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your Address"
              />
            </div>
          </div>
          <div>
            <div className="flex-col space-y-2 mt-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption1"
                  name="uniformOption1"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption1"
                  className="text-lg font-bold text-gray-700"
                >
                  A- DSG Uniform
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption2"
                  name="uniformOption2"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption2"
                  className="text-lg font-bold text-gray-700"
                >
                  B- Civilian Cloth
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uniformOption3"
                  name="uniformOption3"
                  className="mr-2"
                />
                <label
                  htmlFor="uniformOption3"
                  className="text-lg font-bold text-gray-700"
                >
                  C- Black Suit & Tie
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="phone"
              className="text-lg font-medium text-gray-700"
            >
              Prices
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Select Prise"
            />
          </div>

          <button
            type="submit"
            className="w-40 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      ),
    },
  ];

  const handleFormToggle = (index: number) => {
    setActiveForm(activeForm === index ? null : index);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-lg mx-auto p-4">
        {/* Text Section */}
        <div className="flex-1 lg:mr-8 text-center lg:text-left ">
          <h1 className="text-lg font-bold mb-2">Testimonials</h1>
          <h2 className=" font-semibold mb-2 text-4xl md:text-5xl lg:text-6xl">
            What They’re Saying
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our clients value our services and share their experiences:
          </p>
          <button className="w-40 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            WhatSapp Now
          </button>
        </div>

        {/* Slider Section */}
        <div className="flex-1 w-full lg:w-20 ">
          <Slider {...settings}>
            <div className="p-4 bg-white border rounded-lg shadow-lg m-2 ">
              <p className="text-sm font-semibold">
                "I highly recommend Defense Security Group for their outstanding
                personal protection services. Their skilled bodyguards ensured
                my safety and provided a sense of reassurance during my
                high-profile business trip."
              </p>
              <span className="block mt-2 text-sm text-gray-600">
                - Chester Glass
              </span>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-lg m-2">
              <p className="text-sm font-semibold">
                "Defense Security Group provided impeccable security services
                for our corporate event. Their team was professional, vigilant,
                and made us feel safe throughout the entire event."
              </p>
              <span className="block mt-2 text-sm text-gray-600">
                - Carol C
              </span>
            </div>
            <div className="p-4 border rounded-lg shadow-lg m-2">
              <p className="text-sm font-semibold">
                "We engaged Defense Security Group for our property protection
                needs, and they delivered beyond our expectations. Their
                customized solutions and quick response times have given us
                peace of mind."
              </p>
              <span className="block mt-2 text-sm text-gray-600">
                - Julian K
              </span>
            </div>
          </Slider>
        </div>
      </div>

      <div className="relative flex flex-col items-center mt-16 lg:w-auto rounded-lg h-auto">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-black opacity-50 rounded-t-lg"
          aria-hidden="true"
        ></div>

        <div
          className="relative h-auto flex flex-col justify-center w-full items-center text-white bg-cover bg-center rounded-t-lg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* <div className="bg-white"> */}
          <div className="text-center my-12 relative z-10 bg-white rounded-lg ">
            <p className="text-lg md:text-xl lg:text-5xl font-boldbg-white text-black">
              Get A Free Quotation
            </p>
            <h1 className="text-3xl mt-5 md:text-4xl border-2 rounded-full text-white bg-[#447abe] lg:text-xl font-bold">
              Which services do you need?
            </h1>
            {/* </div> */}

            <div className="relative w-full max-w-4xl mb-4 p-4 rounded-b-lg bg-white bg-opacity-90">
              {/* FAQ Section */}
              {forms.map((form, index) => (
                <div
                  key={index}
                  className="relative border border-gray-300 rounded-md mt-2 overflow-hidden"
                  style={{
                    backgroundImage: `url(${form.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay", // Ensures the blend of the background image and color
                  }}
                >
                  <div
                    className="absolute inset-0 bg-white opacity-70"
                    aria-hidden="true"
                  ></div>
                  <button
                    className="relative flex items-center w-full p-4 text-left lg:border-b border-gray-300 text-gray-900 hover:bg-gray-100 focus:outline-none z-10"
                    type="button"
                    aria-expanded={activeForm === index}
                    aria-controls={`form${index}`}
                    onClick={() => handleFormToggle(index)}
                  >
                    <span className="flex-grow">{form.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
                        activeForm === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id={`form${index}`}
                    className={`relative transition-max-height duration-300 ease-in-out overflow-hidden z-10 ${
                      activeForm === index ? "max-h-screen" : "max-h-0"
                    }`}
                    aria-labelledby={`form${index}`}
                  >
                    <div className="p-4 border-t border-gray-300 bg-gray-50 bg-opacity-75">
                      {form.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 h-auto  bg-[#447abe]">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-lg mx-auto p-4 bg-[#447abe]">
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

export default Testimonial;
