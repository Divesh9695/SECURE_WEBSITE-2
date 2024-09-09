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

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:space-x-4">
          <Link to="/" className="block text-black">
            Home
          </Link>
          <Link to="/about" className="block text-black">
            About Us
          </Link>
          <Link to="/services" className="block text-black">
            Services
          </Link>
          <Link to="/employees" className="block text-black">
            Employees
          </Link>
          <Link to="/contact" className="block text-black">
            Contact
          </Link>
          <Link to="/testimonial" className="block text-black">
            Testimonial
          </Link>
          <a
            href="tel:23456789"
            className="flex items-center bg-[#447abe] text-white rounded-full p-3"
          >
            <IoCall className="mr-2" size={20} />
            23456789
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button in Mobile Menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-black"
          >
            <IoClose className="w-6 h-6" />
          </button>

          {/* Mobile Navbar Links */}
          <div className="flex flex-col mt-12 space-y-4 p-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-black"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-black"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block text-black"
            >
              Services
            </Link>
            <Link
              to="/employees"
              onClick={() => setIsOpen(false)}
              className="block text-black"
            >
              Employees
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-black"
            >
              Contact
            </Link>
            <Link
              to="/testimonial"
              onClick={() => setIsOpen(false)}
              className="block text-black"
            >
              Testimonial
            </Link>
            <a
              href="tel:23456789"
              className="flex items-center bg-[#447abe] text-white rounded-full p-3"
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

