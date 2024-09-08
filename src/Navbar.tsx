

import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../src/assets/prop.png";
import { IoCall, IoMenu, IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Image Section */}
        <div className="flex items-center">
          <img src={image} alt="MyApp Logo" className="h-25 w-24 py-2" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white md:bg-transparent flex flex-col items-center justify-center md:justify-start md:flex-row md:space-x-4 md:h-auto md:w-auto md:static transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {/* Close Button in Mobile Menu */}
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black md:hidden"
            >
              <IoClose className="w-6 h-6" />
            </button>
          )}

          <div className="flex flex-col items-center md:flex-row md:space-x-4">
            <Link to="/" className="block text-black mt-2 md:mt-0">
              Home
            </Link>
            <Link to="/about" className="block text-black mt-2 md:mt-0">
              About Us
            </Link>
            <Link to="/services" className="block text-black mt-2 md:mt-0">
              Services
            </Link>
            <Link to="/employees" className="block text-black mt-2 md:mt-0">
              Employees
            </Link>
            <Link to="/contact" className="block text-black mt-2 md:mt-0">
              Contact
            </Link>
            <Link to="/testimonial" className="block text-black mt-2 md:mt-0">
              Testimonial
            </Link>
            <a
              href="tel:23456789"
              className="mt-2 md:mt-0 flex items-center bg-[#447abe] text-white rounded-full p-3"
            >
              <IoCall className="mr-2" size={20} />
              23456789
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




